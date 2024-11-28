export const OPTIONS_FLEX_DIRECTION: Record<string, string> = {
    row: 'row', // Alinea los elementos en una fila de izquierda a derecha (o según el flujo de texto)
    rowReverse: 'row-reverse', // Alinea los elementos en una fila de derecha a izquierda
    col: 'column', // Alinea los elementos en una columna de arriba hacia abajo
    colReverse: 'column-reverse', // Alinea los elementos en una columna de abajo hacia arriba
    initial: 'initial', // Restaura al valor por defecto de CSS
    inherit: 'inherit', // Hereda el valor de `flex-direction` del elemento padre
    unset: 'unset', // Resetea el valor al definido en CSS o hereda si es posible
};

export const OPTIONS_FLEX_JUSTIFY_CONTENT: Record<string, string> = {
    default: 'flex-start', // Valor por defecto en Flexbox y Grid
    flexStart: 'flex-start',
    flexEnd: 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
    start: 'start', // Solo en CSS Grid
    end: 'end', // Solo en CSS Grid
    left: 'left', // Solo en CSS Grid
    right: 'right', // Solo en CSS Grid
    initial: 'initial', // Restaura al valor por defecto de CSS
    auto: 'auto', // Usa el comportamiento del navegador o contenedor
};

export const OPTIONS_FLEX_ALIGN_ITEMS: Record<string, string> = {
    default: 'stretch', // Valor por defecto
    stretch: 'stretch', // Estira los elementos para llenar el contenedor en el eje cruzado
    flexStart: 'flex-start', // Alinea los elementos al inicio del contenedor en el eje cruzado
    flexEnd: 'flex-end', // Alinea los elementos al final del contenedor en el eje cruzado
    center: 'center', // Alinea los elementos en el centro del contenedor en el eje cruzado
    baseline: 'baseline', // Alinea los elementos según su línea base de texto
    start: 'start', // Alinea al inicio según el writing mode (CSS Grid)
    end: 'end', // Alinea al final según el writing mode (CSS Grid)
    initial: 'initial', // Restaura al valor por defecto de CSS
    auto: 'auto', // Usa el comportamiento predeterminado del contenedor o navegador
};
