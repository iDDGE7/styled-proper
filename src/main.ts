import { default as st } from 'styled-components';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { CSS_PROPS, MEDIA, PSEUDO_PROPS, PSEUDOS } from './constants';
import { isEmptyObject, mergeObjectDeep } from './utils/object';

function getObjectStyle(alias: string, value: string): object {
    const isPreset = CSS_PROPS[alias]?.isPreset;
    const option = CSS_PROPS[alias]?.options?.[value];
    const _value = !option && isPreset ? value?.split(',') : value;
    return CSS_PROPS[alias]?.getStyles(option ?? _value);
}

function getPseudoStyles(pseudoList: string[], rule: object): object {
    let rules = {};

    if (pseudoList?.length > 0) {
        const ITEMS = [...pseudoList].reverse();
        for (let e in ITEMS) {
            const ITEM = ITEMS[e];
            const pseudoRegex = /([a-zA-Z]+)\(([^)]+)\)/;
            const combinatorsRegex = /^(&.{0,1})\s*(.*)$/;
            const pseudo = pseudoRegex.exec(ITEM);
            const combinator = combinatorsRegex.exec(ITEM);

            const keyStyle = pseudo?.[1] ?? combinator?.[1] ?? ITEM;
            const param = pseudo?.[2] ?? combinator?.[2];
            const styleFunction = PSEUDOS[keyStyle];

            if (e === '0' && styleFunction) {
                const pseudoRule = styleFunction(rule, param);
                rules = { ...rules, ...pseudoRule };
                continue;
            }

            if (styleFunction) {
                const pseudoRule = styleFunction(rules, param);
                rules = { ...pseudoRule };
            }
        }
    }

    return rules;
}

function parseValue(str: string): {
    pseudoList: string[];
    aliasMedia: string;
    propValue: string;
} {
    const pseudoRegex = /(::?\w+(?:\([^()]*\))?)|(&\s*[+~> ]\s*\w+)/g;
    const mediaRegex = /@(\w+)/;
    const bracketRegex = /\[([^[\]]+)\]/; // Captura lo que hay dentro de [ ]
    const valueRegex = /=([^=]*)$/;

    const pseudoList = Array.from(str.matchAll(pseudoRegex)).map((match) => match[0]?.replace(/^:+/, ''));
    const mediaMatch = mediaRegex.exec(str);
    const aliasMedia = mediaMatch ? mediaMatch[1] : '';

    const bracketMatch = bracketRegex.exec(str);
    let propValue;

    if (bracketMatch) {
        // Si hay corchetes, devolver el contenido dentro de ellos
        propValue = bracketMatch[1];
    } else {
        const valueMatch = valueRegex.exec(str);
        if (valueMatch) {
            // Si no hay corchetes, devolver el valor después de `=`
            propValue = valueMatch[1];
        } else if (pseudoList.length > 0 || aliasMedia) {
            propValue = '';
        } else {
            propValue = str;
        }
    }

    return { pseudoList, aliasMedia, propValue };
}

function getPropRules(alias: string, values: string[]) {
    const rules = values.reduce((acc, value) => {
        const { pseudoList, aliasMedia, propValue } = parseValue(value);
        const rule = getObjectStyle(alias, propValue);
        const pseudoRules = getPseudoStyles(pseudoList, rule);
        let rules = isEmptyObject(pseudoRules) ? rule : pseudoRules;

        if (aliasMedia) {
            const media = MEDIA[aliasMedia];
            const result = { [media]: rules };
            acc = mergeObjectDeep(acc, result);
            return acc;
        }

        acc = mergeObjectDeep(acc, rules);

        return acc;
    }, {});

    return rules;
}

function getStyles(props: object): Record<string, string | number> {
    const PROPS = Object.entries(props).filter(([alias]) => CSS_PROPS[alias]);
    const PSEUDOPROPS = Object.entries(props).filter(([alias]) => PSEUDO_PROPS[alias]);

    const processValues = (alias: string, input: string, pseudoParam?: string) => {
        const values = input.split('|');

        return values.reduce((acc, value) => {
            const { pseudoList, aliasMedia, propValue } = parseValue(value);

            let rules = propValue.split(';').reduce((acc, prop) => {
                const [aliasProp, propValue] = prop.split('=');
                const rule = getObjectStyle(aliasProp, propValue);
                return mergeObjectDeep(acc, rule);
            }, {});

            const pseudoRules = getPseudoStyles(pseudoList, rules);

            rules = isEmptyObject(pseudoRules) ? rules : pseudoRules;
            rules = PSEUDO_PROPS[alias](rules, pseudoParam);

            if (aliasMedia) {
                const media = MEDIA[aliasMedia];
                return mergeObjectDeep(acc, { [media]: rules });
            }

            return mergeObjectDeep(acc, rules);
        }, {});
    };

    const propStyles = PROPS.reduce((acc, [alias, input]) => {
        if (!input) {
            console.error(`The prop ${alias} has no content`);
            return acc;
        }

        const values = input.split('|');
        const rules = getPropRules(alias, values);
        return mergeObjectDeep(acc, rules);
    }, {});

    const pseudoStyles = PSEUDOPROPS.reduce((acc, [alias, input]) => {
        if (!input) {
            console.error(`The prop ${alias} has no content`);
            return acc;
        }

        if (typeof input === 'string') {
            const rules = processValues(alias, input);
            return mergeObjectDeep(acc, rules);
        }

        if (Array.isArray(input)) {
            const [pseudoParam, propValue] = input;
            const rules = processValues(alias, propValue, pseudoParam);
            return mergeObjectDeep(acc, rules);
        }

        return acc;
    }, {});

    return mergeObjectDeep(propStyles, pseudoStyles);
}

const styled = (c: keyof JSX.IntrinsicElements | React.ComponentType<any>) => st(c).withConfig({ shouldForwardProp });

const Proper = (el: keyof JSX.IntrinsicElements | React.ComponentType<any>) => styled(el)((props) => getStyles(props));

export default Proper;
