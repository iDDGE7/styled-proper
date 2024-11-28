interface Pseudos {
    [key: string]: (rule: object, param?: string) => object;
}

const PSEUDO_ELEMENTS_PROPS: Pseudos = {
    before: (rule) => ({ '&::before': rule }),
    after: (rule) => ({ '&::after': rule }),
    firstLetter: (rule) => ({ '&::first-letter': rule }),
    firstLine: (rule) => ({ '&::first-line': rule }),
    selection: (rule) => ({ '&::selection': rule }),
    marker: (rule) => ({ '&::marker': rule }),
    placeholder: (rule) => ({ '&::placeholder': rule }),
    backdrop: (rule) => ({ '&::backdrop': rule }),
};

const PSEUDO_CLASSES_PROPS: Pseudos = {
    hover: (rule) => ({ '&:hover': rule }),
    focus: (rule) => ({ '&:focus': rule }),
    active: (rule) => ({ '&:active': rule }),
    lastChild: (rule) => ({ '&:last-child': rule }),
    firstChild: (rule) => ({ '&:first-child': rule }),
    nthChild: (rule, param) => ({ [`&:nth-child(${param})`]: rule }),
    nthOfType: (rule, param) => ({ [`&:nth-of-type(${param})`]: rule }),
    lastOfType: (rule) => ({ '&:last-of-type': rule }),
    firstOfType: (rule) => ({ '&:first-of-type': rule }),
    not: (rule, param) => ({ [`&:not(${param})`]: rule }),
    empty: (rule) => ({ '&:empty': rule }),
    checked: (rule) => ({ '&:checked': rule }),
    disabled: (rule) => ({ '&:disabled': rule }),
    enabled: (rule) => ({ '&:enabled': rule }),
    visited: (rule) => ({ '&:visited': rule }),
    link: (rule) => ({ '&:link': rule }),
    target: (rule) => ({ '&:target': rule }),
    focusWithin: (rule) => ({ '&:focus-within': rule }),
    focusVisible: (rule) => ({ '&:focus-visible': rule }),
    onlyChild: (rule) => ({ '&:only-child': rule }),
    onlyOfType: (rule) => ({ '&:only-of-type': rule }),
    readOnly: (rule) => ({ '&:read-only': rule }),
    readWrite: (rule) => ({ '&:read-write': rule }),
    placeholderShown: (rule) => ({ '&:placeholder-shown': rule }),
};

const COMBINATORS_PROPS: Pseudos = {
    descendant: (rule, param) => ({ [`& ${param}`]: rule }),
    directChild: (rule, param) => ({ [`& > ${param}`]: rule }),
    adjacentSibling: (rule, param) => ({ [`& + ${param}`]: rule }),
    generalSibling: (rule, param) => ({ [`& ~ ${param}`]: rule }),
};

export const PSEUDO_PROPS = {
    ...PSEUDO_ELEMENTS_PROPS,
    ...PSEUDO_CLASSES_PROPS,
    ...COMBINATORS_PROPS,
};
