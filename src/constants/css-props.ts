import { REM_CASES, FRACTION_CASES, COLOR_CASES } from '../utils/units-generator';
import { OPTIONS_FLEX_DIRECTION, OPTIONS_FLEX_JUSTIFY_CONTENT, OPTIONS_FLEX_ALIGN_ITEMS } from './options';

interface PropInterface {
    [key: string]: {
        getStyles: (value: string | string[]) => object;
        options?: {
            [key: string]: string;
        };
        isPreset?: boolean;
    };
}

const LAYOUT_PROPS: PropInterface = {
    aspect: {
        getStyles: (value) => ({ 'aspect-ratio': value }),
        options: {
            auto: 'auto',
            square: '1 / 1',
            widescreen: '16 / 9',
            standard: '4 / 3',
            photo: '3 / 2',
            cinema: '2.39 / 1',
            ultrawide: '21 / 9',
            vertical: '9 / 16',
        },
    },
    columns: {
        getStyles: (value) => ({ columns: value }),
    },
    columnCount: {
        getStyles: (value) => ({ 'column-count': value }),
    },
    columnFill: {
        getStyles: (value) => ({ 'column-fill': value }),
    },
    columnsGap: {
        getStyles: (value) => ({ 'column-gap': value }),
    },
    columnRule: {
        getStyles: (value) => ({ 'column-rule': value }),
    },
    columnRuleColor: {
        getStyles: (value) => ({ 'column-rule-color': value }),
    },
    columnRuleStyle: {
        getStyles: (value) => ({ 'column-rule-style': value }),
    },
    columnRuleWidth: {
        getStyles: (value) => ({ 'column-rule-width': value }),
    },
    columnSpan: {
        getStyles: (value) => ({ 'column-span': value }),
    },
    columnWidth: {
        getStyles: (value) => ({ 'column-width': value }),
    },
    breakAfter: {
        getStyles: (value) => ({ 'break-after': value }),
        options: {
            auto: 'auto',
            avoid: 'avoid',
            all: 'all',
            avoidPage: 'avoid-page',
            page: 'page',
            left: 'left',
            right: 'right',
            column: 'column',
        },
    },
    breakBefore: {
        getStyles: (value) => ({ 'break-before': value }),
        options: {
            auto: 'auto',
            avoid: 'avoid',
            all: 'all',
            avoidPage: 'avoid-page',
            page: 'page',
            left: 'left',
            right: 'right',
            column: 'column',
        },
    },
    breakInside: {
        getStyles: (value) => ({ 'break-inside': value }),
        options: {
            auto: 'auto',
            avoid: 'avoid',
            avoidPage: 'avoid-page',
            avoidColumn: 'avoid-column',
        },
    },
    boxDecorationBreak: {
        getStyles: (value) => ({ 'box-decoration-break': value }),
        options: {
            slice: 'slice',
            clone: 'clone',
        },
    },
    boxSizing: {
        getStyles: (value) => ({ 'box-sizing': value }),
        options: {
            border: 'border-box',
            content: 'content-box',
        },
    },
    display: {
        getStyles: (value) => ({ display: value }),
        options: {
            hidden: 'none',
            block: 'block',
            inline: 'inline',
            flex: 'flex',
            grid: 'grid',
            table: 'table',
            inlineBlock: 'inline-block',
            inlineFlex: 'inline-flex',
            inlineGrid: 'inline-grid',
            inlineTable: 'inline-table',
            tableCaption: 'table-caption',
            tableCell: 'table-cell',
            tableColumn: 'table-column',
            tableRowGroup: 'table-row-group',
            tableRow: 'table-row',
            flowRoot: 'flow-root',
            contents: 'contents',
            listItem: 'list-item',
            tableColumnGroup: 'table-column-group',
            tableFooterGroup: 'table-footer-group',
            tableHeaderGroup: 'table-header-group',
        },
    },
    float: {
        getStyles: (value) => ({ float: value }),
        options: {
            start: 'inline-start',
            end: 'inline-end',
            left: 'left',
            right: 'right',
            none: 'none',
        },
    },
    clear: {
        getStyles: (value) => ({ clear: value }),
        options: {
            none: 'none',
            start: 'inline-start',
            end: 'inline-end',
            left: 'left',
            right: 'right',
            both: 'both',
        },
    },
    isolation: {
        getStyles: (value) => ({ isolation: value }),
        options: {
            auto: 'auto',
            isolate: 'isolate',
        },
    },
    objectFit: {
        getStyles: (value) => ({ 'object-fit': value }),
        options: {
            contain: 'contain',
            cover: 'cover',
            fill: 'fill',
            none: 'none',
            scaleDown: 'scale-down',
        },
    },
    objectPosition: {
        getStyles: (value) => ({ 'object-position': value }),
        options: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            leftBottom: 'left bottom',
            leftTop: 'left top',
            right: 'right',
            rightBottom: 'right bottom',
            rightTop: 'right top',
            top: 'top',
        },
    },
    overflow: {
        getStyles: (value) => ({ overflow: value }),
        options: {
            auto: 'auto',
            hidden: 'hidden',
            clip: 'clip',
            visible: 'visible',
            scroll: 'scroll',
        },
    },
    overflowX: {
        getStyles: (value) => ({ 'overflow-x': value }),
        options: {
            auto: 'auto',
            hidden: 'hidden',
            clip: 'clip',
            visible: 'visible',
            scroll: 'scroll',
        },
    },
    overflowY: {
        getStyles: (value) => ({ 'overflow-y': value }),
        options: {
            auto: 'auto',
            hidden: 'hidden',
            clip: 'clip',
            visible: 'visible',
            scroll: 'scroll',
        },
    },
    overflowWrap: {
        getStyles: (value) => ({ 'overflow-wrap': value }),
        options: {
            normal: 'normal',
            breakWord: 'break-word',
            anywhere: 'anywhere',
        },
    },
    overscrollBehavior: {
        getStyles: (value) => ({ 'overscroll-behavior': value }),
        options: {
            auto: 'auto',
            contain: 'contain',
            none: 'none',
        },
    },
    overscrollBehaviorX: {
        getStyles: (value) => ({ 'overscroll-behavior-x': value }),
        options: {
            auto: 'auto',
            contain: 'contain',
            none: 'none',
        },
    },
    overscrollBehaviorY: {
        getStyles: (value) => ({ 'overscroll-behavior-y': value }),
        options: {
            auto: 'auto',
            contain: 'contain',
            none: 'none',
        },
    },
    position: {
        getStyles: (value) => ({ position: value }),
        options: {
            static: 'static',
            relative: 'relative',
            absolute: 'absolute',
            fixed: 'fixed',
            sticky: 'sticky',
        },
    },
    top: {
        getStyles: (value) => ({ top: value }),
        options: { ...REM_CASES },
    },
    right: {
        getStyles: (value) => ({ right: value }),
        options: { ...REM_CASES },
    },
    bottom: {
        getStyles: (value) => ({ bottom: value }),
        options: { ...REM_CASES },
    },
    left: {
        getStyles: (value) => ({ left: value }),
        options: { ...REM_CASES },
    },
    inset: {
        getStyles: (value) => ({ inset: value }),
        options: { ...REM_CASES },
    },
    visibility: {
        getStyles: (value) => ({ visibility: value }),
        options: {
            visible: 'visible',
            hidden: 'hidden',
            collapse: 'collapse',
        },
    },
    zIndex: {
        getStyles: (value) => ({ 'z-index': value }),
    },
};

const FLEXBOX_AND_GRID_PROPS: PropInterface = {
    basis: {
        getStyles: (value) => ({ 'flex-basis': value }),
        options: {
            auto: 'auto',
            ...REM_CASES,
            ...FRACTION_CASES,
        },
    },
    flexDirection: {
        getStyles: (value) => ({ 'flex-direction': value }),
        options: {
            row: 'row',
            rowReverse: 'row-reverse',
            column: 'column',
            columnReverse: 'column-reverse',
        },
    },
    flexWrap: {
        getStyles: (value) => ({ 'flex-wrap': value }),
        options: {
            nowrap: 'nowrap',
            wrap: 'wrap',
            wrapReverse: 'wrap-reverse',
        },
    },
    flex: {
        getStyles: (value) => ({ flex: value }),
        options: {
            1: '1 1 0%',
            auto: '1 1 auto',
            initial: '0 1 auto',
            none: 'none',
        },
    },
    flexGrow: {
        getStyles: (value) => ({ 'flex-grow': value }),
    },
    flexShrink: {
        getStyles: (value) => ({ 'flex-shrink': value }),
    },
    order: {
        getStyles: (value) => ({ order: value }),
        options: {
            first: '-9999',
            last: '9999',
        },
    },
    cols: {
        getStyles: (value) => ({ 'grid-template-columns': value }),
        options: {
            none: 'none',
            subgrid: 'subgrid',
            1: 'repeat(1, minmax(0, 1fr))',
            2: 'repeat(2, minmax(0, 1fr))',
            3: 'repeat(3, minmax(0, 1fr))',
            4: 'repeat(4, minmax(0, 1fr))',
            5: 'repeat(5, minmax(0, 1fr))',
            6: 'repeat(6, minmax(0, 1fr))',
            7: 'repeat(7, minmax(0, 1fr))',
            8: 'repeat(8, minmax(0, 1fr))',
            9: 'repeat(9, minmax(0, 1fr))',
            10: 'repeat(10, minmax(0, 1fr))',
            11: 'repeat(11, minmax(0, 1fr))',
            12: 'repeat(12, minmax(0, 1fr))',
        },
    },
    colStart: {
        getStyles: (value) => ({ 'grid-column-start': value }),
        options: {
            auto: 'auto',
        },
    },
    colEnd: {
        getStyles: (value) => ({ 'grid-column-end': value }),
        options: {
            auto: 'auto',
        },
    },
    col: {
        getStyles: (value) => ({ 'grid-column': value }),
        options: {
            auto: 'auto',
            span1: 'span 1 / span 1',
            span2: 'span 2 / span 2',
            span3: 'span 3 / span 3',
            span4: 'span 4 / span 4',
            span5: 'span 5 / span 5',
            span6: 'span 6 / span 6',
            span7: 'span 7 / span 7',
            span8: 'span 8 / span 8',
            span9: 'span 9 / span 9',
            span10: 'span 10 / span 10',
            span11: 'span 11 / span 11',
            span12: 'span 12 / span 12',
            spanFull: 'span 1 / -1',
        },
    },
    rows: {
        getStyles: (value) => ({ 'grid-template-rows': value }),
        options: {
            none: 'none',
            subgrid: 'subgrid',
            1: 'repeat(1, minmax(0, 1fr))',
            2: 'repeat(2, minmax(0, 1fr))',
            3: 'repeat(3, minmax(0, 1fr))',
            4: 'repeat(4, minmax(0, 1fr))',
            5: 'repeat(5, minmax(0, 1fr))',
            6: 'repeat(6, minmax(0, 1fr))',
            7: 'repeat(7, minmax(0, 1fr))',
            8: 'repeat(8, minmax(0, 1fr))',
            9: 'repeat(9, minmax(0, 1fr))',
            10: 'repeat(10, minmax(0, 1fr))',
            11: 'repeat(11, minmax(0, 1fr))',
            12: 'repeat(12, minmax(0, 1fr))',
        },
    },
    rowStart: {
        getStyles: (value) => ({ 'grid-row-start': value }),
        options: {
            auto: 'auto',
        },
    },
    rowEnd: {
        getStyles: (value) => ({ 'grid-row-end': value }),
        options: {
            auto: 'auto',
        },
    },
    row: {
        getStyles: (value) => ({ 'grid-row': value }),
        options: {
            auto: 'auto',
            span1: 'span 1 / span 1',
            span2: 'span 2 / span 2',
            span3: 'span 3 / span 3',
            span4: 'span 4 / span 4',
            span5: 'span 5 / span 5',
            span6: 'span 6 / span 6',
            span7: 'span 7 / span 7',
            span8: 'span 8 / span 8',
            span9: 'span 9 / span 9',
            span10: 'span 10 / span 10',
            span11: 'span 11 / span 11',
            span12: 'span 12 / span 12',
            spanFull: 'span 1 / -1',
        },
    },
    autoFlow: {
        getStyles: (value) => ({ 'grid-auto-flow': value }),
        options: {
            row: 'row',
            column: 'column',
            rowDense: 'row dense',
            columnDense: 'column dense',
        },
    },
    autoCols: {
        getStyles: (value) => ({ 'grid-auto-columns': value }),
        options: {
            auto: 'auto',
            minContent: 'min-content',
            maxContent: 'max-content',
            fr: 'minmax(0, 1fr)',
        },
    },
    autoRows: {
        getStyles: (value) => ({ 'grid-auto-rows': value }),
        options: {
            auto: 'auto',
            minContent: 'min-content',
            maxContent: 'max-content',
            fr: 'minmax(0, 1fr)',
        },
    },
    gap: {
        getStyles: (value) => ({ gap: value }),
        options: {
            ...REM_CASES,
        },
    },
    gapX: {
        getStyles: (value) => ({ 'column-gap': value }),
        options: {
            ...REM_CASES,
        },
    },
    gapY: {
        getStyles: (value) => ({ 'row-gap': value }),
        options: {
            ...REM_CASES,
        },
    },
    justifyContent: {
        getStyles: (value) => ({ 'justify-content': value }),
        options: {
            normal: 'normal',
            start: 'start',
            end: 'end',
            flexStart: 'flex-start',
            flexEnd: 'flex-end',
            center: 'center',
            between: 'space-between',
            around: 'space-around',
            evenly: 'space-evenly',
            stretch: 'stretch',
        },
    },
    justifyItems: {
        getStyles: (value) => ({ 'justify-items': value }),
        options: {
            start: 'start',
            end: 'end',
            center: 'center',
            stretch: 'stretch',
            flexStart: 'flex-start',
            flexEnd: 'flex-end',
        },
    },
    justifySelf: {
        getStyles: (value) => ({ 'justify-self': value }),
        options: {
            auto: 'auto',
            start: 'start',
            end: 'end',
            center: 'center',
            stretch: 'stretch',
            flexStart: 'flex-start',
            flexEnd: 'flex-end',
        },
    },
    alignContent: {
        getStyles: (value) => ({ 'align-content': value }),
        options: {
            normal: 'normal',
            center: 'center',
            start: 'start',
            end: 'end',
            flexStart: 'flex-start',
            flexEnd: 'flex-end',
            between: 'space-between',
            around: 'space-around',
            evenly: 'space-evenly',
            stretch: 'stretch',
            baseline: 'baseline',
        },
    },
    alignItems: {
        getStyles: (value) => ({ 'align-items': value }),
        options: {
            flexStart: 'flex-start',
            flexEnd: 'flex-end',
            start: 'start',
            end: 'end',
            center: 'center',
            baseline: 'baseline',
            stretch: 'stretch',
        },
    },
    alignSelf: {
        getStyles: (value) => ({ 'align-self': value }),
        options: {
            auto: 'auto',
            flexStart: 'flex-start',
            flexEnd: 'flex-end',
            start: 'start',
            end: 'end',
            center: 'center',
            baseline: 'baseline',
            stretch: 'stretch',
        },
    },
    placeContent: {
        getStyles: (value) => ({ 'place-content': value }),
    },
    placeItems: {
        getStyles: (value) => ({ 'place-items': value }),
    },
    placeSelf: {
        getStyles: (value) => ({ 'place-self': value }),
    },
    flexXY: {
        isPreset: true,
        getStyles: (v) => ({
            display: 'flex',
            ...(v[0] && { justifyContent: OPTIONS_FLEX_JUSTIFY_CONTENT[v[0]] || v[0] }),
            ...(v[1] && { alignItems: OPTIONS_FLEX_ALIGN_ITEMS[v[1]] || v[1] }),
            ...(v[2] && { flexDirection: OPTIONS_FLEX_DIRECTION[v[2]] || v[2] }),
        }),
    },
    flexRow: {
        isPreset: true,
        getStyles: (v) => ({ display: 'flex', ...(v[0] && { justifyContent: OPTIONS_FLEX_JUSTIFY_CONTENT[v[0]] || v[0] }), ...(v[1] && { alignItems: OPTIONS_FLEX_ALIGN_ITEMS[v[1]] || v[1] }) }),
    },
    flexRowReverse: {
        isPreset: true,
        getStyles: (v) => ({
            display: 'flex',
            flexDirection: 'row-reverse',
            ...(v[0] && { justifyContent: OPTIONS_FLEX_JUSTIFY_CONTENT[v[0]] || v[0] }),
            ...(v[1] && { alignItems: OPTIONS_FLEX_ALIGN_ITEMS[v[1]] || v[1] }),
        }),
    },
    flexCol: {
        isPreset: true,
        getStyles: (v) => ({
            display: 'flex',
            flexDirection: 'column',
            ...(v[0] && { justifyContent: OPTIONS_FLEX_JUSTIFY_CONTENT[v[0]] || v[0] }),
            ...(v[1] && { alignItems: OPTIONS_FLEX_ALIGN_ITEMS[v[1]] || v[1] }),
        }),
    },
    flexColReverse: {
        isPreset: true,
        getStyles: (v) => ({
            display: 'flex',
            flexDirection: 'column-reverse',
            ...(v[0] && { justifyContent: OPTIONS_FLEX_JUSTIFY_CONTENT[v[0]] || v[0] }),
            ...(v[1] && { alignItems: OPTIONS_FLEX_ALIGN_ITEMS[v[1]] || v[1] }),
        }),
    },
};

const SPACING_PROPS: PropInterface = {
    // Padding
    p: {
        getStyles: (value) => ({ padding: value }),
        options: { ...REM_CASES },
    },
    pt: {
        getStyles: (value) => ({ 'padding-top': value }),
        options: { ...REM_CASES },
    },
    pr: {
        getStyles: (value) => ({ 'padding-right': value }),
        options: { ...REM_CASES },
    },
    pb: {
        getStyles: (value) => ({ 'padding-bottom': value }),
        options: { ...REM_CASES },
    },
    pl: {
        getStyles: (value) => ({ 'padding-left': value }),
        options: { ...REM_CASES },
    },
    py: {
        getStyles: (value) => ({ 'padding-top': value, 'padding-bottom': value }),
        options: { ...REM_CASES },
    },
    px: {
        getStyles: (value) => ({ 'padding-left': value, 'padding-right': value }),
        options: { ...REM_CASES },
    },
    // Margin
    m: {
        getStyles: (value) => ({ margin: value }),
        options: { ...REM_CASES },
    },
    mt: {
        getStyles: (value) => ({ 'margin-top': value }),
        options: {
            ...REM_CASES,
        },
    },
    mr: {
        getStyles: (value) => ({ 'margin-right': value }),
        options: {
            ...REM_CASES,
        },
    },
    mb: {
        getStyles: (value) => ({ 'margin-bottom': value }),
        options: {
            ...REM_CASES,
        },
    },
    ml: {
        getStyles: (value) => ({ 'margin-left': value }),
        options: {
            ...REM_CASES,
        },
    },
    my: {
        getStyles: (value) => ({ 'margin-top': value, 'margin-bottom': value }),
        options: { ...REM_CASES },
    },
    mx: {
        getStyles: (value) => ({ 'margin-left': value, 'margin-right': value }),
        options: { ...REM_CASES },
    },
    // Size
    w: {
        getStyles: (value) => ({ width: value }),
        options: {
            ...REM_CASES,
            ...FRACTION_CASES,
            auto: 'auto',
            full: '100%',
            screen: '100vw',
            min: 'min-content',
            max: 'max-content',
            fit: 'fit-content',
        },
    },
    minW: {
        getStyles: (value) => ({ 'min-width': value }),
        options: {
            ...REM_CASES,
            ...FRACTION_CASES,
            px: '1px',
            min: 'min-content',
            max: 'max-content',
            full: '100%',
            fit: 'fit-content',
        },
    },
    maxW: {
        getStyles: (value) => ({ 'max-width': value }),
        options: {
            ...REM_CASES,
            ...FRACTION_CASES,
            px: '1px',
            min: 'min-content',
            max: 'max-content',
            full: '100%',
            fit: 'fit-content',
        },
    },
    h: {
        getStyles: (value) => ({ height: value }),
        options: {
            ...REM_CASES,
            ...FRACTION_CASES,
            auto: 'auto',
            full: '100%',
            screen: '100vh', // Corregido de '100vw' a '100vh' para altura
            min: 'min-content',
            max: 'max-content',
            fit: 'fit-content',
        },
    },
    minH: {
        getStyles: (value) => ({ 'min-height': value }),
        options: {
            ...REM_CASES,
            ...FRACTION_CASES,
            px: '1px',
            min: 'min-content',
            max: 'max-content',
            full: '100%',
            fit: 'fit-content',
        },
    },
    maxH: {
        getStyles: (value) => ({ 'max-height': value }),
        options: {
            ...REM_CASES,
            ...FRACTION_CASES,
            px: '1px',
            min: 'min-content',
            max: 'max-content',
            full: '100%',
            fit: 'fit-content',
        },
    },
    size: {
        getStyles: (value) => ({ width: value, height: value }),
        options: {
            ...REM_CASES,
            ...FRACTION_CASES,
            auto: 'auto',
            full: '100%',
            screen: '100vw',
            min: 'min-content',
            max: 'max-content',
            fit: 'fit-content',
        },
    },
};

const TYPOGRAPHY_PROPS: PropInterface = {
    family: {
        getStyles: (value) => ({ 'font-family': value }),
        options: {
            sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
            serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
            mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        },
    },
    fs: {
        getStyles: (value) => ({ 'font-size': value }),
        options: {
            xs: '0.625rem',
            sm: '0.75rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '3.75rem',
            '7xl': '4.5rem',
            '8xl': '6rem',
            '9xl': '8rem',
        },
    },
    fontSmoothing: {
        getStyles: (value) => ({ '-webkit-font-smoothing': value }),
        options: {
            antialiased: 'antialiased',
            subpixel: 'auto',
        },
    },
    fontStyle: {
        getStyles: (value) => ({ 'font-style': value }),
        options: {
            normal: 'normal',
            italic: 'italic',
        },
    },
    fw: {
        getStyles: (value) => ({ 'font-weight': value }),
        options: {
            thin: '100',
            extraLight: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semiBold: '600',
            bold: '700',
            extraBold: '800',
            black: '900',
        },
    },
    fontVariant: {
        getStyles: (value) => ({ 'font-variant': value }),
    },
    fontVariantAlternates: {
        getStyles: (value) => ({ 'font-variant-alternates': value }),
    },
    fontVariantCaps: {
        getStyles: (value) => ({ 'font-variant-caps': value }),
    },
    fontVariantEastAsian: {
        getStyles: (value) => ({ 'font-variant-east-asian': value }),
    },
    fontVariantLigatures: {
        getStyles: (value) => ({ 'font-variant-ligatures': value }),
    },
    fontVariantNumeric: {
        getStyles: (value) => ({ 'font-variant-numeric': value }),
    },
    fontVariantPosition: {
        getStyles: (value) => ({ 'font-variant-position': value }),
    },
    fontFeatureSettings: {
        getStyles: (value) => ({ 'font-feature-settings': value }),
    },
    fontKerning: {
        getStyles: (value) => ({ 'font-kerning': value }),
    },
    fontLanguageOverride: {
        getStyles: (value) => ({ 'font-language-override': value }),
    },
    lh: {
        getStyles: (value) => ({ 'line-height': value }),
        options: {
            xs: '1rem',
            sm: '1.25rem',
            base: '1.5rem',
            lg: '1.75rem',
            xl: '1.75',
            '2xl': '2rem',
            '3xl': '2.25rem',
            '4xl': '2.5rem',
            '5xl': '1',
            '6xl': '1',
            '7xl': '1',
            '8xl': '1',
            '9xl': '1',
        },
    },
    letterSpacing: {
        getStyles: (value) => ({ 'letter-spacing': value }),
        options: {
            ...REM_CASES,
        },
    },
    wordSpacing: {
        getStyles: (value) => ({ 'word-spacing': value }),
        options: {
            ...REM_CASES,
        },
    },
    listStyle: {
        getStyles: (value) => ({ 'list-style': value }),
    },
    listStyleType: {
        getStyles: (value) => ({ 'list-style-type': value }),
        options: {
            none: 'none',
            disc: 'disc',
            decimal: 'decimal',
        },
    },
    listStylePosition: {
        getStyles: (value) => ({ 'list-style-position': value }),
        options: {
            inside: 'inside',
            outside: 'outside',
        },
    },
    listStyleImage: {
        getStyles: (value) => ({ 'list-style-image': value }),
        options: {
            none: 'none',
        },
    },
    textAlign: {
        getStyles: (value) => ({ 'text-align': value }),
        options: {
            left: 'left',
            right: 'right',
            center: 'center',
            justify: 'justify',
        },
    },
    textAlignLast: {
        getStyles: (value) => ({ 'text-align-last': value }),
        options: {
            left: 'left',
            right: 'right',
            center: 'center',
            justify: 'justify',
        },
    },
    color: {
        getStyles: (value) => ({ color: value }),
        options: {
            ...COLOR_CASES,
        },
    },
    textDecoration: {
        getStyles: (value) => ({ 'text-decoration': value }),
        options: {
            none: 'none',
            underline: 'underline',
            overline: 'overline',
            lineThrough: 'line-through',
        },
    },
    textDecorationColor: {
        getStyles: (value) => ({ 'text-decoration-color': value }),
        options: {
            current: 'currentColor',
            transparent: 'transparent',
            ...COLOR_CASES,
        },
    },
    textDecorationLine: {
        getStyles: (value) => ({ 'text-decoration-line': value }),
        options: {
            none: 'none',
            underline: 'underline',
            overline: 'overline',
            lineThrough: 'line-through',
            blink: 'blink',
        },
    },
    textDecorationStyle: {
        getStyles: (value) => ({ 'text-decoration-style': value }),
        options: {
            solid: 'solid',
            double: 'double',
            dotted: 'dotted',
            dashed: 'dashed',
            wavy: 'wavy',
        },
    },
    textDecorationThickness: {
        getStyles: (value) => ({ 'text-decoration-thickness': value }),
        options: {
            auto: 'auto',
            fromFont: 'from-font',
            1: '1px',
            2: '2px',
            3: '3px',
            4: '4px',
            5: '5px',
            6: '6px',
            7: '7px',
            8: '8px',
            9: '9px',
            10: '10px',
        },
    },
    textUnderlineOffset: {
        getStyles: (value) => ({ 'text-underline-offset': value }),
        options: {
            auto: 'auto',
            1: '1px',
            2: '2px',
            3: '3px',
            4: '4px',
            5: '5px',
            6: '6px',
            7: '7px',
            8: '8px',
            9: '9px',
            10: '10px',
        },
    },
    textTransform: {
        getStyles: (value) => ({ 'text-transform': value }),
        options: {
            none: 'none',
            capitalize: 'capitalize',
            uppercase: 'uppercase',
            lowercase: 'lowercase',
        },
    },
    textOverflow: {
        getStyles: (value) => ({ 'text-overflow': value }),
        options: {
            clip: 'clip',
            ellipsis: 'ellipsis',
        },
    },
    textEmphasis: {
        getStyles: (value) => ({ 'text-emphasis': value }),
    },
    textEmphasisColor: {
        getStyles: (value) => ({ 'text-emphasis-color': value }),
        options: {
            current: 'currentColor',
            transparent: 'transparent',
            ...COLOR_CASES,
        },
    },
    textEmphasisPosition: {
        getStyles: (value) => ({ 'text-emphasis-position': value }),
        options: {
            over: 'over',
            under: 'under',
            right: 'right',
            left: 'left',
        },
    },
    textEmphasisStyle: {
        getStyles: (value) => ({ 'text-emphasis-style': value }),
        options: {
            filled: 'filled',
            open: 'open',
            dot: 'dot',
            circle: 'circle',
            doubleCircle: 'double-circle',
            triangle: 'triangle',
            filledSesame: 'filled-sesame',
            openSesame: 'open-sesame',
        },
    },
    textJustify: {
        getStyles: (value) => ({ 'text-justify': value }),
        options: {
            auto: 'auto',
            interWord: 'inter-word',
            interCharacter: 'inter-character',
            distribute: 'distribute',
            none: 'none',
        },
    },
    textOrientation: {
        getStyles: (value) => ({ 'text-orientation': value }),
        options: {
            mixed: 'mixed',
            upright: 'upright',
            sideways: 'sideways',
            sidewaysRight: 'sideways-right',
            glyph: 'glyph-orientation-vertical',
        },
    },
    textShadow: {
        getStyles: (value) => ({ 'text-shadow': value }),
    },
    textUnderlinePosition: {
        getStyles: (value) => ({ 'text-underline-position': value }),
        options: {
            auto: 'auto',
            under: 'under',
            left: 'left',
            right: 'right',
        },
    },
    textWrap: {
        getStyles: (value) => ({ 'text-wrap': value }),
        options: {
            wrap: 'wrap',
            nowrap: 'nowrap',
            balance: 'balance',
            pretty: 'pretty',
        },
    },
    textIndent: {
        getStyles: (value) => ({ 'text-indent': value }),
        options: {
            ...REM_CASES,
        },
    },
    verticalAlign: {
        getStyles: (value) => ({ 'vertical-align': value }),
        options: {
            baseline: 'baseline',
            top: 'top',
            middle: 'middle',
            bottom: 'bottom',
            textTop: 'text-top',
            textBottom: 'text-bottom',
            super: 'super',
            sub: 'sub',
        },
    },
    whiteSpace: {
        getStyles: (value) => ({ 'white-space': value }),
        options: {
            normal: 'normal',
            nowrap: 'nowrap',
            pre: 'pre',
            preLine: 'pre-line',
            preWrap: 'pre-wrap',
            breakSpaces: 'break-spaces',
        },
    },
    wordBreak: {
        getStyles: (value) => ({ 'word-break': value }),
        options: {
            normal: 'normal',
            breakAll: 'break-all',
            keepAll: 'keep-all',
        },
    },
    hyphens: {
        getStyles: (value) => ({ hyphens: value }),
        options: {
            none: 'none',
            manual: 'manual',
            auto: 'auto',
        },
    },
    content: {
        getStyles: (value) => ({ content: `"${value}"` }),
    },
    contentBefore: {
        getStyles: (value) => ({ '&::before': { content: `"${value}"` } }),
        options: { none: 'none' },
    },
    contentAfter: {
        getStyles: (value) => ({ '&::after': { content: `"${value}"` } }),
        options: { none: 'none' },
    },
    wordWrap: {
        getStyles: (value) => ({ 'word-wrap': value }),
        options: {
            normal: 'normal',
            breakWord: 'break-word',
        },
    },
    writingMode: {
        getStyles: (value) => ({ 'writing-mode': value }),
        options: {
            horizontal: 'horizontal-tb',
            vertical: 'vertical-rl',
            verticalLr: 'vertical-lr',
        },
    },
};

const BACKGROUND_PROPS: PropInterface = {
    bg: {
        getStyles: (value) => ({ background: value }),
        options: {
            ...COLOR_CASES,
        },
    },
    bgAttachment: {
        getStyles: (value) => ({ 'background-attachment': value }),
        options: {
            fixed: 'fixed',
            local: 'local',
            scroll: 'scroll',
        },
    },
    bgBlendMode: {
        getStyles: (value) => ({ 'background-blend-mode': value }),
        options: {
            normal: 'normal',
            multiply: 'multiply',
            screen: 'screen',
            overlay: 'overlay',
            darken: 'darken',
            lighten: 'lighten',
            colorDodge: 'color-dodge',
            saturation: 'saturation',
            color: 'color',
            luminosity: 'luminosity',
        },
    },
    bgClip: {
        getStyles: (value) => ({ 'background-clip': value }),
        options: {
            borderBox: 'border-box',
            paddingBox: 'padding-box',
            contentBox: 'content-box',
            text: 'text',
            noClip: 'border-area',
        },
    },
    bgColor: {
        getStyles: (value) => ({ 'background-color': value }),
        options: {
            ...COLOR_CASES,
        },
    },
    bgImage: {
        getStyles: (value) => ({ 'background-image': value }),
    },
    bgOrigin: {
        getStyles: (value) => ({ 'background-origin': value }),
        options: {
            borderBox: 'border-box',
            paddingBox: 'padding-box',
            contentBox: 'content-box',
        },
    },
    bgPosition: {
        getStyles: (value) => ({ 'background-position': value }),
        options: {
            top: 'top',
            bottom: 'bottom',
            left: 'left',
            right: 'right',
            center: 'center',
        },
    },
    bgPositionX: {
        getStyles: (value) => ({ 'background-position-x': value }),
        options: {
            left: 'left',
            right: 'right',
            center: 'center',
        },
    },
    bgPositionY: {
        getStyles: (value) => ({ 'background-position-y': value }),
        options: {
            top: 'top',
            bottom: 'bottom',
            center: 'center',
        },
    },
    bgRepeat: {
        getStyles: (value) => ({ 'background-repeat': value }),
        options: {
            repeat: 'repeat',
            noRepeat: 'no-repeat',
            repeatX: 'repeat-x',
            repeatY: 'repeat-y',
            space: 'space',
            round: 'round',
        },
    },
    bgSize: {
        getStyles: (value) => ({ 'background-size': value }),
        options: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
        },
    },
};

const BORDER_PROPS: PropInterface = {
    border: {
        getStyles: (value) => ({ border: value }),
    },
    borderTop: {
        getStyles: (value) => ({ 'border-top': value }),
    },
    borderRight: {
        getStyles: (value) => ({ 'border-right': value }),
    },
    borderBottom: {
        getStyles: (value) => ({ 'border-bottom': value }),
    },
    borderLeft: {
        getStyles: (value) => ({ 'border-left': value }),
    },
    borderColor: {
        getStyles: (value) => ({ 'border-color': value }),
        options: {
            ...COLOR_CASES,
        },
    },
    borderWidth: {
        getStyles: (value) => ({ 'border-width': value }),
    },
    borderStyle: {
        getStyles: (value) => ({ 'border-style': value }),
        options: {
            none: 'none',
            solid: 'solid',
            dotted: 'dotted',
            dashed: 'dashed',
            double: 'double',
            groove: 'groove',
            ridge: 'ridge',
            inset: 'inset',
            outset: 'outset',
        },
    },
    borderCollapse: {
        getStyles: (value) => ({ 'border-collapse': value }),
        options: {
            collapse: 'collapse',
            separate: 'separate',
        },
    },
    borderSpacing: {
        getStyles: (value) => ({ 'border-spacing': value }),
    },
    borderImage: {
        getStyles: (value) => ({ 'border-image': value }),
    },
    borderImageOutset: {
        getStyles: (value) => ({ 'border-image-outset': value }),
    },
    borderImageRepeat: {
        getStyles: (value) => ({ 'border-image-repeat': value }),
        options: {
            stretch: 'stretch',
            repeat: 'repeat',
            round: 'round',
            space: 'space',
        },
    },
    borderImageSlice: {
        getStyles: (value) => ({ 'border-image-slice': value }),
    },
    borderImageSource: {
        getStyles: (value) => ({ 'border-image-source': value }),
    },
    borderImageWidth: {
        getStyles: (value) => ({ 'border-image-width': value }),
    },
    radius: {
        getStyles: (value) => ({ 'border-radius': value }),
    },
    radiusTl: {
        getStyles: (value) => ({ 'border-top-left-radius': value }),
    },
    radiusTR: {
        getStyles: (value) => ({ 'border-top-right-radius': value }),
    },
    radiusBL: {
        getStyles: (value) => ({ 'border-bottom-left-radius': value }),
    },
    radiusBR: {
        getStyles: (value) => ({ 'border-bottom-right-radius': value }),
    },
};

const SHADOW_PROPS: PropInterface = {
    boxShadow: {
        getStyles: (value) => ({ 'box-shadow': value }),
        options: {
            none: 'none',
            light: '0px 1px 3px rgba(0, 0, 0, 0.1)',
            medium: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            heavy: '0px 10px 20px rgba(0, 0, 0, 0.2)',
        },
    },
    outline: {
        getStyles: (value) => ({ outline: value }),
        options: {
            none: 'none',
            solid: '1px solid',
            dashed: '1px dashed',
            dotted: '1px dotted',
        },
    },
    outlineColor: {
        getStyles: (value) => ({ 'outline-color': value }),
        options: {
            primary: '#3498db',
            secondary: '#2ecc71',
            error: '#e74c3c',
            default: '#333',
        },
    },
    outlineStyle: {
        getStyles: (value) => ({ 'outline-style': value }),
        options: {
            solid: 'solid',
            dashed: 'dashed',
            dotted: 'dotted',
            double: 'double',
        },
    },
    outlineWidth: {
        getStyles: (value) => ({ 'outline-width': value }),
        options: {
            thin: '1px',
            medium: '2px',
            thick: '3px',
        },
    },
};

const ANIMATION_PROPS: PropInterface = {
    animation: {
        getStyles: (value) => ({ animation: value }),
    },
    animationDelay: {
        getStyles: (value) => ({ 'animation-delay': value }),
    },
    animationDirection: {
        getStyles: (value) => ({ 'animation-direction': value }),
        options: {
            normal: 'normal',
            reverse: 'reverse',
            alternate: 'alternate',
            alternateReverse: 'alternate-reverse',
        },
    },
    animationDuration: {
        getStyles: (value) => ({ 'animation-duration': value }),
    },
    animationFillMode: {
        getStyles: (value) => ({ 'animation-fill-mode': value }),
        options: {
            none: 'none',
            forwards: 'forwards',
            backwards: 'backwards',
            both: 'both',
        },
    },
    animationIterCount: {
        getStyles: (value) => ({ 'animation-iteration-count': value }),
        options: {
            infinite: 'infinite',
            once: '1',
            twice: '2',
            thrice: '3',
        },
    },
    animationName: {
        getStyles: (value) => ({ 'animation-name': value }),
    },
    animationPlayState: {
        getStyles: (value) => ({ 'animation-play-state': value }),
        options: {
            running: 'running',
            paused: 'paused',
        },
    },
    animationTimingFunction: {
        getStyles: (value) => ({ 'animation-timing-function': value }),
        options: {
            linear: 'linear',
            ease: 'ease',
            easeIn: 'ease-in',
            easeOut: 'ease-out',
            easeInOut: 'ease-in-out',
            stepStart: 'step-start',
            stepEnd: 'step-end',
        },
    },
    keyframes: {
        getStyles: (value) => ({ '@keyframes': value }),
    },
};

const TRANSITION_PROPS: PropInterface = {
    transition: {
        getStyles: (value) => ({ transition: value }),
    },
    transitionDelay: {
        getStyles: (value) => ({ 'transition-delay': value }),
    },
    transitionDuration: {
        getStyles: (value) => ({ 'transition-duration': value }),
    },
    transitionProperty: {
        getStyles: (value) => ({ 'transition-property': value }),
    },
    transitionTimingFunction: {
        getStyles: (value) => ({ 'transition-timing-function': value }),
    },
};

const TRANSFORM_PROPS: PropInterface = {
    transform: {
        getStyles: (value) => ({ transform: value }),
    },
    transformOrigin: {
        getStyles: (value) => ({ 'transform-origin': value }),
    },
    transformStyle: {
        getStyles: (value) => ({ 'transform-style': value }),
    },
    perspective: {
        getStyles: (value) => ({ perspective: value }),
    },
    perspectiveOrigin: {
        getStyles: (value) => ({ 'perspective-origin': value }),
    },
    backfaceVisibility: {
        getStyles: (value) => ({ 'backface-visibility': value }),
    },
};

const FILTER_PROPS: PropInterface = {
    filter: {
        getStyles: (value) => ({ filter: value }),
    },
    backdropFilter: {
        getStyles: (value) => ({ 'backdrop-filter': value }),
    },
    mixBlendMode: {
        getStyles: (value) => ({ 'mix-blend-mode': value }),
    },
};

const INTERACTION_PROPS: PropInterface = {
    cursor: {
        getStyles: (value) => ({ cursor: value }),
    },
    userSelect: {
        getStyles: (value) => ({ 'user-select': value }),
    },
    pointerEvents: {
        getStyles: (value) => ({ 'pointer-events': value }),
    },
};

const TABLES_PROPS: PropInterface = {
    tableLayout: {
        getStyles: (value) => ({ 'table-layout': value }),
    },
    emptyCells: {
        getStyles: (value) => ({ 'empty-cells': value }),
    },
};

const VISIBILITY_PROPS: PropInterface = {
    opacity: {
        getStyles: (value) => ({ opacity: value }),
    },
    visibility: {
        getStyles: (value) => ({ visibility: value }),
    },
    resize: {
        getStyles: (value) => ({ resize: value }),
    },
};

const CLIP_MASK_PROPS: PropInterface = {
    clip: {
        getStyles: (value) => ({ clip: value }),
    },
    clipPath: {
        getStyles: (value) => ({ 'clip-path': value }),
    },
    mask: {
        getStyles: (value) => ({ mask: value }),
    },
    maskType: {
        getStyles: (value) => ({ 'mask-type': value }),
    },
    caretColor: {
        getStyles: (value) => ({ 'caret-color': value }),
    },
};

const DIRECTION_QUOTES_PROPS: PropInterface = {
    direction: {
        getStyles: (value) => ({ direction: value }),
    },
    quotes: {
        getStyles: (value) => ({ quotes: value }),
    },
};



const COUNTERS_PROPS: PropInterface = {
    counterIncrement: {
        getStyles: (value) => ({ 'counter-increment': value }),
    },
    counterReset: {
        getStyles: (value) => ({ 'counter-reset': value }),
    },
};

const SCROLL_PROPS: PropInterface = {
    scrollBehavior: {
        getStyles: (value) => ({ 'scroll-behavior': value }),
    },
    scrollSnapAlign: {
        getStyles: (value) => ({ 'scroll-snap-align': value }),
    },
    scrollSnapStop: {
        getStyles: (value) => ({ 'scroll-snap-stop': value }),
    },
    scrollSnapType: {
        getStyles: (value) => ({ 'scroll-snap-type': value }),
    },
};

const SHAPE_PROPS: PropInterface = {
    shapeImageThreshold: {
        getStyles: (value) => ({ 'shape-image-threshold': value }),
    },
    shapeMargin: {
        getStyles: (value) => ({ 'shape-margin': value }),
    },
    shapeOutside: {
        getStyles: (value) => ({ 'shape-outside': value }),
    },
};

const RENDERING_PROPS: PropInterface = {
    imageRendering: {
        getStyles: (value) => ({ 'image-rendering': value }),
    },
};

const OTHERS_PROPS: PropInterface = {
    willChange: {
        getStyles: (value) => ({ 'will-change': value }),
    },
    uBidi: {
        getStyles: (value) => ({ 'unicode-bidi': value }),
    },
    orphans: {
        getStyles: (value) => ({ orphans: value }),
    },
    widows: {
        getStyles: (value) => ({ widows: value }),
    },
};

export const CSS_PROPS = {
    ...LAYOUT_PROPS,
    ...FLEXBOX_AND_GRID_PROPS,
    ...SPACING_PROPS,
    ...TYPOGRAPHY_PROPS,
    ...BACKGROUND_PROPS,
    ...BORDER_PROPS,
    ...SHADOW_PROPS,
    ...ANIMATION_PROPS,
    ...TRANSITION_PROPS,
    ...TRANSFORM_PROPS,
    ...FILTER_PROPS,
    ...INTERACTION_PROPS,
    ...TABLES_PROPS,
    ...VISIBILITY_PROPS,
    ...CLIP_MASK_PROPS,
    ...DIRECTION_QUOTES_PROPS,
    ...COUNTERS_PROPS,
    ...SCROLL_PROPS,
    ...SHAPE_PROPS,
    ...RENDERING_PROPS,
    ...OTHERS_PROPS,
};
