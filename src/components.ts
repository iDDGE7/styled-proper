import Proper from './main.js';

interface ComponentInterface {
    [key: string]: React.ComponentType<any>;
}

export const Box: ComponentInterface = {
    Header: Proper('header'),
    Nav: Proper('nav'),
    Main: Proper('main'),
    Section: Proper('section'),
    Article: Proper('article'),
    Aside: Proper('aside'),
    Footer: Proper('footer'),
    Div: Proper('div'),
    Span: Proper('span'),
    Body: Proper('body'),
    Ul: Proper('ul'),
    Ol: Proper('ol'),
    Li: Proper('li'),
};

export const Text: ComponentInterface = {
    H1: Proper('h1'),
    H2: Proper('h2'),
    H3: Proper('h3'),
    H4: Proper('h4'),
    H5: Proper('h5'),
    H6: Proper('h6'),
    P: Proper('p'),
    A: Proper('a'),
    Abbr: Proper('abbr'),
    Addr: Proper('address'),
    B: Proper('b'),
    Bdi: Proper('bdi'),
    Bdo: Proper('bdo'),
    Blockquote: Proper('blockquote'),
    Cite: Proper('cite'),
    Code: Proper('code'),
    Del: Proper('del'),
    Dfn: Proper('dfn'),
    Em: Proper('em'),
    I: Proper('i'),
    Ins: Proper('ins'),
    Kbd: Proper('kbd'),
    Mark: Proper('mark'),
    S: Proper('s'),
    Samp: Proper('samp'),
    Small: Proper('small'),
    Strong: Proper('strong'),
    Sub: Proper('sub'),
    Sup: Proper('sup'),
    Time: Proper('time'),
    U: Proper('u'),
    Var: Proper('var'),
    Big: Proper('big'),
    Hgroup: Proper('hgroup'),
    Dl: Proper('dl'),
    Dt: Proper('dt'),
    Dd: Proper('dd'),
    Pre: Proper('pre'),
    Q: Proper('q'),
    Rp: Proper('rp'),
    Rt: Proper('rt'),
    Ruby: Proper('ruby'),
};

export const Media: ComponentInterface = {
    Audio: Proper('audio'),
    Img: Proper('img'),
    Video: Proper('video'),
    Picture: Proper('picture'),
    Track: Proper('track'),
    Source: Proper('source'),
    Embed: Proper('embed'),
    Iframe: Proper('iframe'),
    Obj: Proper('object'),
    Canvas: Proper('canvas'),
    Svg: Proper('svg'),
    Circle: Proper('circle'),
    ClipPath: Proper('clipPath'),
    Defs: Proper('defs'),
    Ellipse: Proper('ellipse'),
    ForeignObj: Proper('foreignObject'),
    Image: Proper('image'),
    Line: Proper('line'),
    LinearGrad: Proper('linearGradient'),
    Marker: Proper('marker'),
    Mask: Proper('mask'),
    Path: Proper('path'),
    Pattern: Proper('pattern'),
    Polygon: Proper('polygon'),
    Polyline: Proper('polyline'),
    RadialGrad: Proper('radialGradient'),
    Rect: Proper('rect'),
    Stop: Proper('stop'),
    Text: Proper('text'),
    Tspan: Proper('tspan'),
    Use: Proper('use'),
};

export const FormElement: ComponentInterface = {
    Form: Proper('form'),
    Input: Proper('input'),
    Button: Proper('button'),
    Textarea: Proper('textarea'),
    Label: Proper('label'),
    Fieldset: Proper('fieldset'),
    Legend: Proper('legend'),
    Select: Proper('select'),
    OptGroup: Proper('optgroup'),
    Option: Proper('option'),
    Datalist: Proper('datalist'),
    Output: Proper('output'),
    Progress: Proper('progress'),
    Meter: Proper('meter'),
    Keygen: Proper('keygen'),
};

export const TableElement: ComponentInterface = {
    Table: Proper('table'),
    Caption: Proper('caption'),
    ColGroup: Proper('colgroup'),
    Col: Proper('col'),
    THead: Proper('thead'),
    TBody: Proper('tbody'),
    TFoot: Proper('tfoot'),
    Tr: Proper('tr'),
    Th: Proper('th'),
    Td: Proper('td'),
};

export const MetaElement: ComponentInterface = {
    Head: Proper('head'),
    Title: Proper('title'),
    Base: Proper('base'),
    Link: Proper('link'),
    Meta: Proper('meta'),
    Style: Proper('style'),
    Script: Proper('script'),
    Html: Proper('html'),
};

export const Misc: ComponentInterface = {
    Br: Proper('br'),
    Hr: Proper('hr'),
    Wbr: Proper('wbr'),
    Area: Proper('area'),
    Map: Proper('map'),
    Param: Proper('param'),
    Menu: Proper('menu'),
    MenuItem: Proper('menuitem'),
    Noscript: Proper('noscript'),
    Dialog: Proper('dialog'),
    Data: Proper('data'),
    Details: Proper('details'),
    Summary: Proper('summary'),
    Figure: Proper('figure'),
    Figcaption: Proper('figcaption'),
    G: Proper('g'),
};

// Exports individuales para Box
export const Header: React.ComponentType<any> = Proper('header');
export const Nav: React.ComponentType<any> = Proper('nav');
export const Main: React.ComponentType<any> = Proper('main');
export const Section: React.ComponentType<any> = Proper('section');
export const Article: React.ComponentType<any> = Proper('article');
export const Aside: React.ComponentType<any> = Proper('aside');
export const Footer: React.ComponentType<any> = Proper('footer');
export const Div: React.ComponentType<any> = Proper('div');
export const Span: React.ComponentType<any> = Proper('span');
export const Body: React.ComponentType<any> = Proper('body');

// Exports individuales para Text
export const H1: React.ComponentType<any> = Proper('h1');
export const H2: React.ComponentType<any> = Proper('h2');
export const H3: React.ComponentType<any> = Proper('h3');
export const H4: React.ComponentType<any> = Proper('h4');
export const H5: React.ComponentType<any> = Proper('h5');
export const H6: React.ComponentType<any> = Proper('h6');
export const P: React.ComponentType<any> = Proper('p');
export const A: React.ComponentType<any> = Proper('a');
export const Abbr: React.ComponentType<any> = Proper('abbr');
export const Addr: React.ComponentType<any> = Proper('address');
export const B: React.ComponentType<any> = Proper('b');
export const Bdi: React.ComponentType<any> = Proper('bdi');
export const Bdo: React.ComponentType<any> = Proper('bdo');
export const Blockquote: React.ComponentType<any> = Proper('blockquote');
export const Cite: React.ComponentType<any> = Proper('cite');
export const Code: React.ComponentType<any> = Proper('code');
export const Del: React.ComponentType<any> = Proper('del');
export const Dfn: React.ComponentType<any> = Proper('dfn');
export const Em: React.ComponentType<any> = Proper('em');
export const I: React.ComponentType<any> = Proper('i');
export const Ins: React.ComponentType<any> = Proper('ins');
export const Kbd: React.ComponentType<any> = Proper('kbd');
export const Mark: React.ComponentType<any> = Proper('mark');
export const S: React.ComponentType<any> = Proper('s');
export const Samp: React.ComponentType<any> = Proper('samp');
export const Small: React.ComponentType<any> = Proper('small');
export const Strong: React.ComponentType<any> = Proper('strong');
export const Sub: React.ComponentType<any> = Proper('sub');
export const Sup: React.ComponentType<any> = Proper('sup');
export const Time: React.ComponentType<any> = Proper('time');
export const U: React.ComponentType<any> = Proper('u');
export const Var: React.ComponentType<any> = Proper('var');
export const Big: React.ComponentType<any> = Proper('big');
export const Hgroup: React.ComponentType<any> = Proper('hgroup');
export const Dl: React.ComponentType<any> = Proper('dl');
export const Dt: React.ComponentType<any> = Proper('dt');
export const Dd: React.ComponentType<any> = Proper('dd');
export const Ol: React.ComponentType<any> = Proper('ol');
export const Li: React.ComponentType<any> = Proper('li');
export const Pre: React.ComponentType<any> = Proper('pre');
export const Q: React.ComponentType<any> = Proper('q');
export const Rp: React.ComponentType<any> = Proper('rp');
export const Rt: React.ComponentType<any> = Proper('rt');
export const Ruby: React.ComponentType<any> = Proper('ruby');
export const Ul: React.ComponentType<any> = Proper('ul');

// Exports individuales para Media
export const Audio: React.ComponentType<any> = Proper('audio');
export const Img: React.ComponentType<any> = Proper('img');
export const Video: React.ComponentType<any> = Proper('video');
export const Picture: React.ComponentType<any> = Proper('picture');
export const Track: React.ComponentType<any> = Proper('track');
export const Source: React.ComponentType<any> = Proper('source');
export const Embed: React.ComponentType<any> = Proper('embed');
export const Iframe: React.ComponentType<any> = Proper('iframe');
export const Obj: React.ComponentType<any> = Proper('object');
export const Canvas: React.ComponentType<any> = Proper('canvas');
export const Svg: React.ComponentType<any> = Proper('svg');
export const Circle: React.ComponentType<any> = Proper('circle');
export const ClipPath: React.ComponentType<any> = Proper('clipPath');
export const Defs: React.ComponentType<any> = Proper('defs');
export const Ellipse: React.ComponentType<any> = Proper('ellipse');
export const ForeignObj: React.ComponentType<any> = Proper('foreignObject');
export const Image: React.ComponentType<any> = Proper('image');
export const Line: React.ComponentType<any> = Proper('line');
export const LinearGrad: React.ComponentType<any> = Proper('linearGradient');
export const Marker: React.ComponentType<any> = Proper('marker');
export const Mask: React.ComponentType<any> = Proper('mask');
export const Path: React.ComponentType<any> = Proper('path');
export const Pattern: React.ComponentType<any> = Proper('pattern');
export const Polygon: React.ComponentType<any> = Proper('polygon');
export const Polyline: React.ComponentType<any> = Proper('polyline');
export const RadialGrad: React.ComponentType<any> = Proper('radialGradient');
export const Rect: React.ComponentType<any> = Proper('rect');
export const Stop: React.ComponentType<any> = Proper('stop');
export const Tspan: React.ComponentType<any> = Proper('tspan');
export const Use: React.ComponentType<any> = Proper('use');

// Exports individuales para Form
export const Form: React.ComponentType<any> = Proper('form');
export const Input: React.ComponentType<any> = Proper('input');
export const Button: React.ComponentType<any> = Proper('button');
export const Textarea: React.ComponentType<any> = Proper('textarea');
export const Label: React.ComponentType<any> = Proper('label');
export const Fieldset: React.ComponentType<any> = Proper('fieldset');
export const Legend: React.ComponentType<any> = Proper('legend');
export const Select: React.ComponentType<any> = Proper('select');
export const OptGroup: React.ComponentType<any> = Proper('optgroup');
export const Option: React.ComponentType<any> = Proper('option');
export const Datalist: React.ComponentType<any> = Proper('datalist');
export const Output: React.ComponentType<any> = Proper('output');
export const Progress: React.ComponentType<any> = Proper('progress');
export const Meter: React.ComponentType<any> = Proper('meter');
export const Keygen: React.ComponentType<any> = Proper('keygen');

// Exports individuales para Table
export const Table: React.ComponentType<any> = Proper('table');
export const Caption: React.ComponentType<any> = Proper('caption');
export const ColGroup: React.ComponentType<any> = Proper('colgroup');
export const Col: React.ComponentType<any> = Proper('col');
export const THead: React.ComponentType<any> = Proper('thead');
export const TBody: React.ComponentType<any> = Proper('tbody');
export const TFoot: React.ComponentType<any> = Proper('tfoot');
export const Tr: React.ComponentType<any> = Proper('tr');
export const Th: React.ComponentType<any> = Proper('th');
export const Td: React.ComponentType<any> = Proper('td');

// Exports individuales para Meta
export const Head: React.ComponentType<any> = Proper('head');
export const Title: React.ComponentType<any> = Proper('title');
export const Base: React.ComponentType<any> = Proper('base');
export const Link: React.ComponentType<any> = Proper('link');
export const Meta: React.ComponentType<any> = Proper('meta');
export const Style: React.ComponentType<any> = Proper('style');
export const Script: React.ComponentType<any> = Proper('script');
export const Html: React.ComponentType<any> = Proper('html');

// Exports individuales para Misc
export const Br: React.ComponentType<any> = Proper('br');
export const Hr: React.ComponentType<any> = Proper('hr');
export const Wbr: React.ComponentType<any> = Proper('wbr');
export const Area: React.ComponentType<any> = Proper('area');
export const MapElement: React.ComponentType<any> = Proper('map');
export const Param: React.ComponentType<any> = Proper('param');
export const Menu: React.ComponentType<any> = Proper('menu');
export const MenuItem: React.ComponentType<any> = Proper('menuitem');
export const Noscript: React.ComponentType<any> = Proper('noscript');
export const Dialog: React.ComponentType<any> = Proper('dialog');
export const Data: React.ComponentType<any> = Proper('data');
export const Details: React.ComponentType<any> = Proper('details');
export const Summary: React.ComponentType<any> = Proper('summary');
export const Figure: React.ComponentType<any> = Proper('figure');
export const Figcaption: React.ComponentType<any> = Proper('figcaption');
export const G: React.ComponentType<any> = Proper('g');
