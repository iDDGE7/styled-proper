# styled-proper

`styled-proper` is a library that uses `styled-components` internally to enable adding dynamic styles to components via props. It supports media queries, pseudo-classes, pseudo-elements, and provides the flexibility to extend components while leveraging the powerful features of `styled-components`.

## Installation

Install the library via npm by running the following command:

```bash
npm install styled-proper
```

## Basic Usage

`styled-proper` allows you to create styled components using dynamic props. Here's a simple example:

```jsx
import { Button } from 'styled-proper';

function Component() {
    return (
        <Button bg="white|:hover=black" color="black|:hover=white" fs="14px|@sm=18px|@md=22px">
            I am a button
        </Button>
    );
}

export default Component;
```

In this example, you can define multiple styles in a single prop. Whether you want to add pseudo-classes or media queries, you only need to separate the values using a vertical bar `|`.

### Style Breakdown

-   `bg="white|:hover=black"`: Sets a white background by default and changes to black on hover.
-   `color="black|:hover=white"`: Sets a black text color by default and changes to white on hover.
-   `fs="14px|@sm=18px|@md=22px"`: Sets the font size to 14px by default, adjusts to 18px on small screens `@sm`, and 22px on medium screens `@md`.

## Implementation Options

`styled-proper` offers multiple ways to import and use styled components, providing flexibility to suit your needs.

-   **Importing Components from styled-proper:**
    You can directly import the styled components you need from `styled-proper`. This approach is useful for keeping your code clean and modular.

```jsx
import { Header, Nav, Main, Footer, ..., Button } from 'styled-proper';

function Component() {
    return (
        <Main p="1rem">
            <Header w="100%" p="1rem" flexXY="justify,center" bg="white">
                <Nav w="100%" p="1rem">
                    <Button bg="black" color="white">Click me!</Button>
                </Nav>
            </Header>
        </Main>
    );
}
```

-   **Importing Groups of Components:**
    If you prefer to organize components into categories or groups, you can import entire sections such as `Box`, `Text`, `Media`, etc. This approach is helpful for managing large sets of components.

```jsx
import { Box, Text, Media, FormElement, TableElement, MetaElement, Misc } from 'styled-proper';

function Component() {
    return (
        <Box.Main p="1rem">
            <Box.Header w="100%" p="1rem" flexXY="justify,center" bg="white">
                <Box.Nav w="100%" p="1rem">
                    <FormElement.Button bg="black" color="white">
                        Click me!
                    </FormElement.Button>
                </Box.Nav>
            </Box.Header>
        </Box.Main>
    );
}
```

-   **Creating Custom Components with the `Proper` Function:**
    You can use the Proper function to create custom components and tailor them to your needs. This is especially useful if you need full control over component names and configurations.

```jsx
import Proper from 'styled-proper';

const Button = Proper('button');
const Header = Proper('header');
const Nav = Proper('nav');
const Main = Proper('main');

function Component() {
    return (
        <Main p="1rem">
            <Header w="100%" p="1rem" flexXY="justify,center" bg="white">
                <Nav w="100%" p="1rem">
                    <Button bg="black" color="white">
                        Click me!
                    </Button>
                </Nav>
            </Header>
        </Main>
    );
}
```

-   **Extending Components Created with `styled-components`:**

    You can extend components created with `styled-components` while still using the dynamic prop system provided by `styled-proper`.

```jsx
import styled from 'styled-components';
import Proper from 'styled-proper';

const ButtonWithStyledComponents = styled.button`
    padding: 10px;
`;

const ExtendedButton = Proper(ButtonWithStyledComponents);

<ExtendedButton p="1rem">Click me!</ExtendedButton>;
```

## Media Query Support

`styled-proper` makes it easy to add responsive styles using media queries. To define them, simply prepend the @ symbol to the alias of the desired media query.

**Media Query Example:**

Below is an example where the aliases `@sm` and `@md` are used to adjust the font size based on the screen width:

```jsx
<Text.P fs="14px|@sm=18px|@md=22px">Hola</Text.P>
```

-   `14px`: Default font size.
-   `@sm=18px`: Changes the font size to 18px when the screen width is greater than or equal to 640px.
-   `@md=22px`: Changes the font size to 22px when the screen width is greater than or equal to 768px.

**Supported Media Queries:**

| **Alias** | **Media Query (CSS)**        |
| --------- | ---------------------------- |
| `@sm`     | `@media (min-width: 640px)`  |
| `@md`     | `@media (min-width: 768px)`  |
| `@lg`     | `@media (min-width: 1024px)` |
| `@xl`     | `@media (min-width: 1280px)` |
| `@2xl`    | `@media (min-width: 1536px)` |

## Pseudo-Class Support

With `styled-proper`, you can handle pseudo-classes like `hover`, `focus`, `nth-child`, `active`, and more. The syntax is intuitive and similar to CSS: prepend a `:` to the pseudo-class name, followed by the desired value separated by `=`.

### Important Note:

Pseudo-class names must be in camelCase format. Examples include:

-   `hover`
-   `focus`
-   `active`
-   `nthChild`
-   `lastChild`

### Example with `hover` Pseudo-Class:

```jsx
<Button bg="black" color="white|hover:green">
    click me
</Button>
```

#### Description:

-   `bg="black"`: Fondo negro por defecto.
-   `color="white|:hover=green"`: El color del texto cambia a verde cuando el botón está en estado hover.

### Example with `active` Pseudo-Class:

```jsx
<Button bg="black" color="white" border="1px solid white|active:green">
    click me
</Button>
```

#### Description:

-   `border="1px solid white"`: Default border is white.
-   `border="|:active=green"`: Border changes to green when the button is active.

### Example with `nth-child` Pseudo-Class:

```jsx
import { Box } from 'styled-proper';

const Item = ({ children }) => <Box.Div bg="white|:nthChild(2n)=black">{children}</Box.Div>;

function Component() {
    return (
        <div>
            {Array.from({ length: 10 }).map((_, i) => (
                <Item key={i}>{i}</Item>
            ))}
        </div>
    );
}

export default Component;
```

#### Description:

-   `bg="white"`: Default background is white.
-   `:nthChild(2n)=black`: Background changes to black for all even-indexed elements.

### **List of Supported Pseudo-Classes:**

| **Pseudo-clase original** | **Pseudo-clase de styled-proper** |
| ------------------------- | --------------------------------- |
| `:hover`                  | `:hover`                          |
| `:focus`                  | `:focus`                          |
| `:active`                 | `:active`                         |
| `:last-child`             | `:lastChild`                      |
| `:first-child`            | `:firstChild`                     |
| `:nth-child(param)`       | `:nthChild(param)`                |
| `:nth-of-type(param)`     | `:nthOfType(param)`               |
| `:last-of-type`           | `:lastOfType`                     |
| `:first-of-type`          | `:firstOfType`                    |
| `:not(param)`             | `:not(param)`                     |
| `:empty`                  | `:empty`                          |
| `:checked`                | `:checked`                        |
| `:disabled`               | `:disabled`                       |
| `:enabled`                | `:enabled`                        |
| `:visited`                | `:visited`                        |
| `:link`                   | `:link`                           |
| `:target`                 | `:target`                         |
| `:focus-within`           | `:focusWithin`                    |
| `:focus-visible`          | `:focusVisible`                   |
| `:only-child`             | `:onlyChild`                      |
| `:only-of-type`           | `:onlyOfType`                     |
| `:read-only`              | `:readOnly`                       |
| `:read-write`             | `:readWrite`                      |
| `:placeholder-shown`      | `:placeholderShown`               |

## Using Pseudo-Classes as Props

In `styled-proper`, you can use pseudo-classes as props to add dynamic styles. These must be written in camelCase (e.g., `hover`, `focus`, `active`, `lastChild`, `nthChild`, etc.). Additionally, you can combine multiple styles within a single prop using **arrays** and **media queries**.

### Basic Example

You can directly add pseudo-classes in props by using square brackets `[ ]` to group styles:

```jsx
<Button bg="black" color="white" hover="[bg=white;color=black]">
    click me
</Button>
```

**Combining Pseudo-Classes Within the Same Prop:**

```jsx
<Button bg="black" color="white" hover=":active=[bg=white;color=black]">
    click me
</Button>
```

**Adding Media Queries Within the Same Prop:**

```jsx
<Button bg="black" color="white" hover="[bg=red;color=white]|@sm=[bg=blue;color=black]">
    click me
</Button>
```

**Combining Pseudo-Classes and Media Queries Within the Same Prop:**

```jsx
<Button bg="black" color="white" hover=":active=[bg=red;color=white]|:active@sm=[bg=blue;color=black]">
    click me
</Button>
```

If the pseudo-class requires parameters, they should be passed as an array, where the first element is the parameter, and the second element is the value:

```jsx
import { Button } from 'styled-proper';

function Component() {
    return <Button nthChild={['2n', '[bg=black;color=white]|@sm=[bg=white;color=black]']}>click me</Button>;
}

export default Component;
```

**List of Supported Pseudo-Classes as Props:**

| **Pseudo-clase original** | **List Format**    |
| ------------------------- | ------------------ |
| `:hover`                  | `hover`            |
| `:focus`                  | `focus`            |
| `:active`                 | `active`           |
| `:last-child`             | `lastChild`        |
| `:first-child`            | `firstChild`       |
| `:nth-child(param)`       | `nthChild`         |
| `:nth-of-type(param)`     | `nthOfType`        |
| `:last-of-type`           | `lastOfType`       |
| `:first-of-type`          | `firstOfType`      |
| `:not(param)`             | `not`              |
| `:empty`                  | `empty`            |
| `:checked`                | `checked`          |
| `:disabled`               | `disabled`         |
| `:enabled`                | `enabled`          |
| `:visited`                | `visited`          |
| `:link`                   | `link`             |
| `:target`                 | `target`           |
| `:focus-within`           | `focusWithin`      |
| `:focus-visible`          | `focusVisible`     |
| `:only-child`             | `onlyChild`        |
| `:only-of-type`           | `onlyOfType`       |
| `:read-only`              | `readOnly`         |
| `:read-write`             | `readWrite`        |
| `:placeholder-shown`      | `placeholderShown` |

## Support for Pseudo-Elements

You can also manage pseudo-elements like `before`, `after`, `first-letter`, `first-line`, `selection`, `marker`, `placeholder`, `backdrop`, and more. Their usage is similar to CSS: prepend `::` followed by the pseudo-element name, then specify the desired value separated by `=`.

Pseudo-elements should be written in camelCase convention, such as `before`, `after`, `firstLetter`, `firstLine`, `selection`, `marker`, `placeholder`, `backdrop`, etc.

Example with the `first-letter` Pseudo-Element:

```jsx
<Text.P color="black|::firstLetter=red">Hola</Text.P>
```

Example with the `before` Pseudo-Element

```jsx
<Text.P position="relative|::before=absolute" content="::before=hi" top="::before=0" left="::before=0">
    Hola
</Text.P>
```

Example with Media Queries and Pseudo-Elements

```jsx
<Text.P position="relative|::before=absolute" content="@md::before=hi" top="@md::before=0" left="@md::before=0">
    Hola
</Text.P>
```

**List of Supported Pseudo-Elements:**

| **Original Pseudo-Element** | **styled-proper Pseudo-Elements** |
| --------------------------- | --------------------------------- |
| `::before`                  | `::before`                        |
| `::after`                   | `::after`                         |
| `::first-letter`            | `::firstLetter`                   |
| `::first-line`              | `::firstLine`                     |
| `::selection`               | `::selection`                     |
| `::marker`                  | `::marker`                        |
| `::placeholder`             | `::placeholder`                   |
| `::backdrop`                | `::backdrop`                      |

## Using Pseudo-Elements as Props

You can also use pseudo-elements as props.

Pseudo-elements must follow camelCase convention, such as `before`, `after`, `firstLetter`, `firstLine`, `selection`, `marker`, `placeholder`, `backdrop`, etc. To apply multiple styles to the same pseudo-element, wrap the styles in square brackets `[]` and separate each property-value pair with a semicolon `;`.

Example::

```xml
<Button bg="black" color="white" position="relative" after="[position=absolute;content=hi;top=0;left=0]">click me</Button>
```

**Adding Media Queries to the Same Prop:**

```jsx
<Button bg="black" color="white" position="relative" after="@sm=[position=absolute;content=hi;bg=red;right=0;left=0;top=100%]">
    click me
</Button>
```

**List of Supported Pseudo-Elements as Props:**

| **Original Pseudo-Element** | **Usage Format** |
| --------------------------- | ---------------- |
| `::before`                  | `before`         |
| `::after`                   | `after`          |
| `::first-letter`            | `firstLetter`    |
| `::first-line`              | `firstLine`      |
| `::selection`               | `selection`      |
| `::marker`                  | `marker`         |
| `::placeholder`             | `placeholder`    |
| `::backdrop`                | `backdrop`       |

## Support for Combinators

`styled-proper` supports the use of CSS combinators like `>`, `+`, `~`, and ` `. To use them, prepend the symbol `&` followed by the corresponding combinator and then the element to which the style is applied, very similar to CSS.

Example using the direct child combinator `>`

```jsx
<Box.Div color="&>div=red">
    <div>1</div>
    <section>
        <div>2</div>
    </section>
    <div>3</div>
</Box.Div>
```

Example using the adjacent sibling combinator `+`

```jsx
<div>
    <Box.Div color="&+div=red">1</Box.Div>
    <div>2</div>
    <div>3</div>
</div>
```

Example using the general sibling combinator `~`

```jsx
<div>
    <Box.Div color="&~div=red">1</Box.Div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
</div>
```

Example using the descendant combinator  &nbsp; ` `

```jsx
<Box.Div color="& p=red">
    <div>1</div>
    <div>
        <p>2</p>
    </div>
    <div>3</div>
</Box.Div>
```

**List of Supported Combinators:**

| **Combinator** | **Description**                                               |
| -------------- | ------------------------------------------------------------- |
| `&>`           | Selects direct children of the current element.               |
| `&~`           | Selects all general sibling elements of the current element.  |
| `&+`           | Selects the immediate sibling element of the current element. |
| `& `           | Selects all descendants of the current element.               |

## Using Combinators as Props

The use of combinators through props works by receiving an array as a parameter, where the first element is the combinator and the second is the styles:

Example using the direct child combinator `>` with the `directChild` prop:

```jsx
<div>
    <Box.Div directChild={['div', '[color=red]']}>
        <div>1</div>
        <section>
            <div>2</div>
        </section>
        <div>3</div>
    </Box.Div>
</div>
```

Example using the adjacent sibling combinator `+` with the `adjacentSibling` prop:

```jsx
<div>
    <Box.Div adjacentSibling={['div', '[color=red]']}>1</Box.Div>
    <div>2</div>
    <div>3</div>
</div>
```

Example using the general sibling combinator `~` with the `generalSibling` prop:

```jsx
<div>
    <Box.Div generalSibling={['div', '[color=red]']}>1</Box.Div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
</div>
```

Example using the descendant combinator ` ` with the `descendant` prop:

```jsx
<Box.Div descendant={['p', '[color=red]']}>
    <div>1</div>
    <div>
        <p>2</p>
    </div>
    <div>3</div>
</Box.Div>
```

| **Prop Name**         | **Syntax Explanation**                                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **`descendant`**      | `descendant={['p', '[color=red]']}`: Targets all `<p>` elements nested within the current element.                 |
| **`directChild`**     | `directChild={['div', '[color=blue]']}`: Targets all direct `<div>` children of the current element.               |
| **`adjacentSibling`** | `adjacentSibling={['span', '[color=green]']}`: Targets the next immediate `<span>` sibling of the current element. |
| **`generalSibling`**  | `generalSibling={['h1', '[color=yellow]']}`: Targets all subsequent `<h1>` siblings of the current element.        |

# API Reference

### **List of Components in `styled-proper`**

| **HTML Element** | **Component** |
| ---------------- | ------------- |
| `<header>`       | `Header`      |
| `<nav>`          | `Nav`         |
| `<main>`         | `Main`        |
| `<section>`      | `Section`     |
| `<article>`      | `Article`     |
| `<aside>`        | `Aside`       |
| `<footer>`       | `Footer`      |
| `<div>`          | `Div`         |
| `<span>`         | `Span`        |
| `<body>`         | `Body`        |
| `<h1>`           | `H1`          |
| `<h2>`           | `H2`          |
| `<h3>`           | `H3`          |
| `<h4>`           | `H4`          |
| `<h5>`           | `H5`          |
| `<h6>`           | `H6`          |
| `<p>`            | `P`           |
| `<a>`            | `A`           |
| `<abbr>`         | `Abbr`        |
| `<address>`      | `Addr`        |
| `<b>`            | `B`           |
| `<bdi>`          | `Bdi`         |
| `<bdo>`          | `Bdo`         |
| `<blockquote>`   | `Blockquote`  |
| `<cite>`         | `Cite`        |
| `<code>`         | `Code`        |
| `<del>`          | `Del`         |
| `<dfn>`          | `Dfn`         |
| `<em>`           | `Em`          |
| `<i>`            | `I`           |
| `<ins>`          | `Ins`         |
| `<kbd>`          | `Kbd`         |
| `<mark>`         | `Mark`        |
| `<s>`            | `S`           |
| `<samp>`         | `Samp`        |
| `<small>`        | `Small`       |
| `<strong>`       | `Strong`      |
| `<sub>`          | `Sub`         |
| `<sup>`          | `Sup`         |
| `<time>`         | `Time`        |
| `<u>`            | `U`           |
| `<var>`          | `Var`         |
| `<big>`          | `Big`         |
| `<hgroup>`       | `Hgroup`      |
| `<audio>`        | `Audio`       |
| `<img>`          | `Img`         |
| `<video>`        | `Video`       |
| `<picture>`      | `Picture`     |
| `<track>`        | `Track`       |
| `<source>`       | `Source`      |
| `<embed>`        | `Embed`       |
| `<iframe>`       | `Iframe`      |
| `<object>`       | `Obj`         |
| `<canvas>`       | `Canvas`      |
| `<form>`         | `Form`        |
| `<input>`        | `Input`       |
| `<button>`       | `Button`      |
| `<textarea>`     | `Textarea`    |
| `<label>`        | `Label`       |
| `<fieldset>`     | `Fieldset`    |
| `<legend>`       | `Legend`      |
| `<select>`       | `Select`      |
| `<optgroup>`     | `OptGroup`    |
| `<option>`       | `Option`      |
| `<datalist>`     | `Datalist`    |
| `<output>`       | `Output`      |
| `<progress>`     | `Progress`    |
| `<meter>`        | `Meter`       |
| `<table>`        | `Table`       |
| `<caption>`      | `Caption`     |
| `<colgroup>`     | `ColGroup`    |
| `<col>`          | `Col`         |
| `<thead>`        | `THead`       |
| `<tbody>`        | `TBody`       |
| `<tfoot>`        | `TFoot`       |
| `<tr>`           | `Tr`          |
| `<th>`           | `Th`          |
| `<td>`           | `Td`          |
| `<head>`         | `Head`        |
| `<title>`        | `Title`       |
| `<base>`         | `Base`        |
| `<link>`         | `Link`        |
| `<meta>`         | `Meta`        |
| `<style>`        | `Style`       |
| `<script>`       | `Script`      |
| `<html>`         | `Html`        |
| `<br>`           | `Br`          |
| `<hr>`           | `Hr`          |
| `<wbr>`          | `Wbr`         |
| `<area>`         | `Area`        |
| `<map>`          | `MapElement`  |
| `<param>`        | `Param`       |
| `<menu>`         | `Menu`        |
| `<menuitem>`     | `MenuItem`    |
| `<noscript>`     | `Noscript`    |
| `<dialog>`       | `Dialog`      |
| `<data>`         | `Data`        |
| `<details>`      | `Details`     |
| `<summary>`      | `Summary`     |
| `<figure>`       | `Figure`      |
| `<figcaption>`   | `Figcaption`  |
| `<g>`            | `G`           |

### **List of Component Groups in `styled-proper`**

| **Group**        | **Component**                                                                                                                                                                                                                                                                                               |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Box**          | `Header`, `Nav`, `Main`, `Section`, `Article`, `Aside`, `Footer`, `Div`, `Span`, `Body`, `Ul`, `Ol`, `Li`                                                                                                                                                                                                   |
| **Text**         | `H1`, `H2`, `H3`, `H4`, `H5`, `H6`, `P`, `A`, `Abbr`, `Addr`, `B`, `Bdi`, `Bdo`, `Blockquote`, `Cite`, `Code`, `Del`, `Dfn`, `Em`, `I`, `Ins`, `Kbd`, `Mark`, `S`, `Samp`, `Small`, `Strong`, `Sub`, `Sup`, `Time`, `U`, `Var`, `Big`, `Hgroup`, `Dl`, `Dt`, `Dd`, `Pre`, `Q`, `Rp`, `Rt`, `Ruby`           |
| **Media**        | `Audio`, `Img`, `Video`, `Picture`, `Track`, `Source`, `Embed`, `Iframe`, `Object`, `Canvas`, `Svg`, `Circle`, `ClipPath`, `Defs`, `Ellipse`, `ForeignObj`, `Image`, `Line`, `LinearGrad`, `Marker`, `Mask`, `Path`, `Pattern`, `Polygon`, `Polyline`, `RadialGrad`, `Rect`, `Stop`, `Text`, `Tspan`, `Use` |
| **FormElement**  | `Form`, `Input`, `Button`, `Textarea`, `Label`, `Fieldset`, `Legend`, `Select`, `OptGroup`, `Option`, `Datalist`, `Output`, `Progress`, `Meter`, `Keygen`                                                                                                                                                   |
| **TableElement** | `Table`, `Caption`, `ColGroup`, `Col`, `THead`, `TBody`, `TFoot`, `Tr`, `Th`, `Td`                                                                                                                                                                                                                          |
| **MetaElement**  | `Head`, `Title`, `Base`, `Link`, `Meta`, `Style`, `Script`, `Html`                                                                                                                                                                                                                                          |
| **Misc**         | `Br`, `Hr`, `Wbr`, `Area`, `Map`, `Param`, `Menu`, `MenuItem`, `Noscript`, `Dialog`, `Data`, `Details`, `Summary`, `Figure`, `Figcaption`, `G`                                                                                                                                                              |

### **List of Available Props in `styled-proper`**

-   ### Layout props

| **Prop**              | **Options**                             |
| --------------------- | --------------------------------------- |
| `aspect`              | `auto` : 1 / 1                          |
|                       | `square` : 1 / 1                        |
|                       | `widescreen` : 16 / 9                   |
|                       | `standard` : 4 / 3                      |
|                       | `photo` : 3 / 2                         |
|                       | `cinema` : 2.39 / 1                     |
|                       | `ultrawide` : 21 / 9                    |
|                       | `vertical` : 9 / 16                     |
| `columns`             |                                         |
| `columnCount`         |                                         |
| `columnFill`          |                                         |
| `columnsGap`          |                                         |
| `columnRule`          |                                         |
| `columnRuleColor`     |                                         |
| `columnRuleStyle`     |                                         |
| `columnRuleWidth`     |                                         |
| `columnSpan`          |                                         |
| `columnWidth`         |                                         |
| `breakAfter`          | `auto` : auto                           |
|                       | `avoid` : avoid                         |
|                       | `all` : all                             |
|                       | `avoidPage` : avoid-page                |
|                       | `page` : page                           |
|                       | `left` : left                           |
|                       | `right` : right                         |
|                       | `column` : column                       |
| `breakBefore`         | `auto` : auto                           |
|                       | `avoid` : avoid                         |
|                       | `all` : all                             |
|                       | `avoidPage` : avoid-page                |
|                       | `page` : page                           |
|                       | `left` : left                           |
|                       | `right` : right                         |
| `breakInside`         | `auto` : auto                           |
|                       | `avoid` : avoid                         |
|                       | `avoidPage` : avoid-page                |
|                       | `avoidColumn` : avoid-column            |
| `boxDecorationBreak`  | `slice` : slice                         |
|                       | `clone` : clone                         |
| `boxSizing`           | `border` : border-box                   |
|                       | `content` : content-box                 |
| `display`             | `hidden` : none                         |
|                       | `block` : block                         |
|                       | `inline` : inline                       |
|                       | `flex` : flex                           |
|                       | `grid` : grid                           |
|                       | `table` : table                         |
|                       | `inlineBlock` : inline-block            |
|                       | `inlineFlex` : inline-flex              |
|                       | `inlineGrid` : inline-grid              |
|                       | `inlineTable` : inline-table            |
|                       | `tableCaption` : table-caption          |
|                       | `tableCell` : table-cell                |
|                       | `tableColumn` : table-column            |
|                       | `tableRowGroup` : table-row-group       |
|                       | `tableRow` : table-row                  |
|                       | `flowRoot` : flow-root                  |
|                       | `contents` : contents                   |
|                       | `listItem` : list-item                  |
|                       | `tableColumnGroup` : table-column-group |
|                       | `tableFooterGroup` : table-footer-group |
|                       | `tableHeaderGroup` : table-header-group |
| `float`               | `start` : inline-start                  |
|                       | `end` : inline-end                      |
|                       | `left` : left                           |
|                       | `right` : right                         |
|                       | `none` : none                           |
| `clear`               | `none` : none                           |
|                       | `start` : inline-start                  |
|                       | `end` : inline-end                      |
|                       | `left` : left                           |
|                       | `right` : right                         |
|                       | `both` : both                           |
| `isolation`           | `auto` : auto                           |
|                       | `isolate` : isolate                     |
| `objectFit`           | `contain` : contain                     |
|                       | `cover` : cover                         |
|                       | `fill` : fill                           |
|                       | `none` : none                           |
|                       | `scaleDown` : scale-down                |
| `objectPosition`      | `bottom` : bottom                       |
|                       | `center` : center                       |
|                       | `left` : left                           |
|                       | `leftBottom` : left bottom              |
|                       | `leftTop` : left top                    |
|                       | `right` : right                         |
|                       | `rightBottom` : right bottom            |
|                       | `rightTop` : right top                  |
|                       | `top` : top                             |
| `overflow`            | `auto` : auto                           |
|                       | `hidden` : hidden                       |
|                       | `clip` : clip                           |
|                       | `visible` : visible                     |
|                       | `scroll` : scroll                       |
| `overflowX`           | `auto` : auto                           |
|                       | `hidden` : hidden                       |
|                       | `clip` : clip                           |
|                       | `visible` : visible                     |
|                       | `scroll` : scroll                       |
| `overflowY`           | `auto` : auto                           |
|                       | `hidden` : hidden                       |
|                       | `clip` : clip                           |
|                       | `visible` : visible                     |
|                       | `scroll` : scroll                       |
| `overflowWrap`        | `normal` : normal                       |
|                       | `breakWord` : break-word                |
|                       | `anywhere` : anywhere                   |
| `overscrollBehavior`  | `auto` : auto                           |
|                       | `contain` : contain                     |
|                       | `none` : none                           |
| `overscrollBehaviorX` | `auto` : auto                           |
|                       | `contain` : contain                     |
|                       | `none` : none                           |
| `overscrollBehaviorY` | `auto` : auto                           |
|                       | `contain` : contain                     |
|                       | `none` : none                           |
| `position`            | `static` : static                       |
|                       | `relative` : relative                   |
|                       | `absolute` : absolute                   |
|                       | `fixed` : fixed                         |
|                       | `sticky` : sticky                       |
| `top`                 |                                         |
| `right`               |                                         |
| `bottom`              |                                         |
| `left`                |                                         |
| `inset`               |                                         |
| `visibility`          | `visible` : visible                     |
|                       | `hidden` : hidden                       |
|                       | `collapse` : collapse                   |
| `zIndex`              |                                         |

-   ### Flex and Grid props

| **Prop**         | **Options**                           |
| ---------------- | ------------------------------------- |
| `basis`          | `auto` : auto                         |
|                  | [REM_OPTIONS](#rem-options)           |
|                  | [FRACTION_OPTIONS](#fraction-options) |
| `flexDirection`  | `row` : row                           |
|                  | `rowReverse` : row-reverse            |
|                  | `column` : column                     |
|                  | `columnReverse` : column-reverse      |
| `flexWrap`       | `nowrap` : nowrap                     |
|                  | `wrap` : wrap                         |
|                  | `wrapReverse` : wrap-reverse          |
| `flex`           | `1` : 1 1 0%                          |
|                  | `auto` : 1 1 auto                     |
|                  | `initial` : 0 1 auto                  |
|                  | `none` : none                         |
| `flexGrow`       |                                       |
| `flexShrink`     |                                       |
| `order`          | `first` : -9999                       |
|                  | `last` : 9999                         |
| `cols`           | `none` : none                         |
|                  | `subgrid` : subgrid                   |
|                  | `1` : repeat(1, minmax(0, 1fr))       |
|                  | `2` : repeat(2, minmax(0, 1fr))       |
|                  | `3` : repeat(3, minmax(0, 1fr))       |
|                  | `4` : repeat(4, minmax(0, 1fr))       |
|                  | `5` : repeat(5, minmax(0, 1fr))       |
|                  | `6` : repeat(6, minmax(0, 1fr))       |
|                  | `7` : repeat(7, minmax(0, 1fr))       |
|                  | `8` : repeat(8, minmax(0, 1fr))       |
|                  | `9` : repeat(9, minmax(0, 1fr))       |
|                  | `10` : repeat(10, minmax(0, 1fr))     |
|                  | `11` : repeat(11, minmax(0, 1fr))     |
|                  | `12` : repeat(12, minmax(0, 1fr))     |
| `colStart`       | `auto` : auto                         |
| `colEnd`         | `auto` : auto                         |
| `col`            | `auto` : auto                         |
|                  | `span1` : span 1 / span 1             |
|                  | `span2` : span 2 / span 2             |
|                  | `span3` : span 3 / span 3             |
|                  | `span4` : span 4 / span 4             |
|                  | `span5` : span 5 / span 5             |
|                  | `span6` : span 6 / span 6             |
|                  | `span7` : span 7 / span 7             |
|                  | `span8` : span 8 / span 8             |
|                  | `span9` : span 9 / span 9             |
|                  | `span10` : span 10 / span 10          |
|                  | `span11` : span 11 / span 11          |
|                  | `span12` : span 12 / span 12          |
|                  | `spanFull` : span 1 / -1              |
| `rows`           | `none` : none                         |
|                  | `subgrid` : subgrid                   |
|                  | `1` : repeat(1, minmax(0, 1fr))       |
|                  | `2` : repeat(2, minmax(0, 1fr))       |
|                  | `3` : repeat(3, minmax(0, 1fr))       |
|                  | `4` : repeat(4, minmax(0, 1fr))       |
|                  | `5` : repeat(5, minmax(0, 1fr))       |
|                  | `6` : repeat(6, minmax(0, 1fr))       |
|                  | `7` : repeat(7, minmax(0, 1fr))       |
|                  | `8` : repeat(8, minmax(0, 1fr))       |
|                  | `9` : repeat(9, minmax(0, 1fr))       |
|                  | `10` : repeat(10, minmax(0, 1fr))     |
|                  | `11` : repeat(11, minmax(0, 1fr))     |
|                  | `12` : repeat(12, minmax(0, 1fr))     |
| `rowStart`       | `auto` : auto                         |
| `rowEnd`         | `auto` : auto                         |
| `row`            | `auto` : auto                         |
|                  | `span1` : span 1 / span 1             |
|                  | `span2` : span 2 / span 2             |
|                  | `span3` : span 3 / span 3             |
|                  | `span4` : span 4 / span 4             |
|                  | `span5` : span 5 / span 5             |
|                  | `span6` : span 6 / span 6             |
|                  | `span7` : span 7 / span 7             |
|                  | `span8` : span 8 / span 8             |
|                  | `span9` : span 9 / span 9             |
|                  | `span10` : span 10 / span 10          |
|                  | `span11` : span 11 / span 11          |
|                  | `span12` : span 12 / span 12          |
|                  | `spanFull` : span 1 / -1              |
| `autoFlow`       | `row` : row                           |
|                  | `column` : column                     |
|                  | `rowDense` : row dense                |
|                  | `columnDense` : column dense          |
| `autoCols`       | `auto` : auto                         |
|                  | `minContent` : min-content            |
|                  | `maxContent` : max-content            |
|                  | `fr` : minmax(0, 1fr)                 |
| `autoRows`       | `auto` : auto                         |
|                  | `minContent` : min-content            |
|                  | `maxContent` : max-content            |
|                  | `fr` : minmax(0, 1fr)                 |
| `gap`            | [REM_OPTIONS](#rem-options)           |
| `gapX`           | [REM_OPTIONS](#rem-options)           |
| `gapY`           | [REM_OPTIONS](#rem-options)           |
| `justifyContent` | `normal` : normal                     |
|                  | `start` : start                       |
|                  | `end` : end                           |
|                  | `flexStart` : flex-start              |
|                  | `flexEnd` : flex-end                  |
|                  | `center` : center                     |
|                  | `between` : space-between             |
|                  | `around` : space-around               |
|                  | `evenly` : space-evenly               |
|                  | `stretch` : stretch                   |
| `justifyItems`   | `start` : start                       |
|                  | `end` : end                           |
|                  | `center` : center                     |
|                  | `stretch` : stretch                   |
|                  | `flexStart` : flex-start              |
|                  | `flexEnd` : flex-end                  |
| `justifySelf`    | `auto` : auto                         |
|                  | `start` : start                       |
|                  | `end` : end                           |
|                  | `center` : center                     |
|                  | `stretch` : stretch                   |
|                  | `flexStart` : flex-start              |
|                  | `flexEnd` : flex-end                  |
| `alignContent`   | `normal` : normal                     |
|                  | `center` : center                     |
|                  | `start` : start                       |
|                  | `end` : end                           |
|                  | `flexStart` : flex-start              |
|                  | `flexEnd` : flex-end                  |
|                  | `between` : space-between             |
|                  | `around` : space-around               |
|                  | `evenly` : space-evenly               |
|                  | `stretch` : stretch                   |
|                  | `baseline` : baseline                 |
| `alignItems`     | `flexStart` : flex-start              |
|                  | `flexEnd` : flex-end                  |
|                  | `start` : start                       |
|                  | `end` : end                           |
|                  | `center` : center                     |
|                  | `baseline` : baseline                 |
|                  | `stretch` : stretch                   |
|                  |                                       |
| `alignSelf`      | `auto` : auto                         |
|                  | `flexStart` : flex-start              |
|                  | `flexEnd` : flex-end                  |
|                  | `start` : start                       |
|                  | `end` : end                           |
|                  | `center` : center                     |
|                  | `baseline` : baseline                 |
|                  | `stretch` : stretch                   |
| `placeContent`   |                                       |
| `placeItems`     |                                       |
| `placeSelf`      |                                       |
| `flexXY`         |                                       |
| `flexRow`        |                                       |
| `flexRowReverse` |                                       |
| `flexCol`        |                                       |
| `flexColReverse` |                                       |

-   ### Spacing props

| **Prop** | **Options**                           |
| -------- | ------------------------------------- |
| `p`      | [REM_OPTIONS](#rem-options)           |
| `pt`     | [REM_OPTIONS](#rem-options)           |
| `pr`     | [REM_OPTIONS](#rem-options)           |
| `pb`     | [REM_OPTIONS](#rem-options)           |
| `pl`     | [REM_OPTIONS](#rem-options)           |
| `py`     | [REM_OPTIONS](#rem-options)           |
| `px`     | [REM_OPTIONS](#rem-options)           |
| `m`      | [REM_OPTIONS](#rem-options)           |
| `mt`     | [REM_OPTIONS](#rem-options)           |
| `mr`     | [REM_OPTIONS](#rem-options)           |
| `mb`     | [REM_OPTIONS](#rem-options)           |
| `ml`     | [REM_OPTIONS](#rem-options)           |
| `my`     | [REM_OPTIONS](#rem-options)           |
| `mx`     | [REM_OPTIONS](#rem-options)           |
| `w`      | [REM_OPTIONS](#rem-options)           |
|          | [FRACTION_OPTIONS](#fraction-options) |
|          | `auto` : auto                         |
|          | `full` : 100%                         |
|          | `screen` : 100vw                      |
|          | `min` : min-content                   |
|          | `max` : max-content                   |
|          | `fit` : fit-content                   |
| `minW`   | [REM_OPTIONS](#rem-options)           |
|          | [FRACTION_OPTIONS](#fraction-options) |
|          | `px` : 1px                            |
|          | `min` : min-content                   |
|          | `max` : max-content                   |
|          | `full` : 100%                         |
|          | `fit` : fit-content                   |
| `maxW`   | [REM_OPTIONS](#rem-options)           |
|          | [FRACTION_OPTIONS](#fraction-options) |
|          | `px` : 1px                            |
|          | `min` : min-content                   |
|          | `max` : max-content                   |
|          | `full` : 100%                         |
|          | `fit` : fit-content                   |
| `h`      | [REM_OPTIONS](#rem-options)           |
|          | [FRACTION_OPTIONS](#fraction-options) |
|          | `auto` : auto                         |
|          | `full` : 100%                         |
|          | `screen` : 100vh                      |
|          | `min` : min-content                   |
|          | `max` : max-content                   |
|          | `fit` : fit-content                   |
| `minH`   | [REM_OPTIONS](#rem-options)           |
|          | [FRACTION_OPTIONS](#fraction-options) |
|          | `px` : 1px                            |
|          | `min` : min-content                   |
|          | `max` : max-content                   |
|          | `full` : 100%                         |
|          | `fit` : fit-content                   |
| `maxH`   | [REM_OPTIONS](#rem-options)           |
|          | [FRACTION_OPTIONS](#fraction-options) |
|          | `px` : 1px                            |
|          | `min` : min-content                   |
|          | `max` : max-content                   |
|          | `full` : 100%                         |
|          | `fit` : fit-content                   |
| `size`   | [REM_OPTIONS](#rem-options)           |
|          | [FRACTION_OPTIONS](#fraction-options) |
|          | `auto` : auto                         |
|          | `full` : 100%                         |
|          | `screen` : 100vw                      |
|          | `min` : min-content                   |
|          | `max` : max-content                   |
|          | `fit` : fit-content                   |

-   ### Typography props

| **Prop**                  | **Options**                                                                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `family`                  | `sans` : ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif |
|                           | `serif` : ui-serif, Georgia, Cambria, "Times New Roman", Times, serif                                                                      |
|                           | `mono` : ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace                                |
| `fs`                      | `xs` : 0.625rem                                                                                                                            |
|                           | `sm` : 0.75rem                                                                                                                             |
|                           | `base` : 1rem                                                                                                                              |
|                           | `lg` : 1.125rem                                                                                                                            |
|                           | `xl` : 1.25rem                                                                                                                             |
|                           | `2xl` : 1.5rem                                                                                                                             |
|                           | `3xl` : 1.875rem                                                                                                                           |
|                           | `4xl` : 2.25rem                                                                                                                            |
|                           | `5xl` : 3rem                                                                                                                               |
|                           | `6xl` : 3.75rem                                                                                                                            |
|                           | `7xl` : 4.5rem                                                                                                                             |
|                           | `8xl` : 6rem                                                                                                                               |
|                           | `9xl` : 8rem                                                                                                                               |
| `fontSmoothing`           | `antialiased` : antialiased                                                                                                                |
|                           | `subpixel` : auto                                                                                                                          |
| `fontStyle`               | `normal` : normal                                                                                                                          |
|                           | `italic` : italic                                                                                                                          |
| `fw`                      | `thin` : 100                                                                                                                               |
|                           | `extraLight` : 200                                                                                                                         |
|                           | `light` : 300                                                                                                                              |
|                           | `normal` : 400                                                                                                                             |
|                           | `medium` : 500                                                                                                                             |
|                           | `semiBold` : 600                                                                                                                           |
|                           | `bold` : 700                                                                                                                               |
|                           | `extraBold` : 800                                                                                                                          |
|                           | `black` : 900                                                                                                                              |
| `fontVariant`             |                                                                                                                                            |
| `fontVariantAlternates`   |                                                                                                                                            |
| `fontVariantCaps`         |                                                                                                                                            |
| `fontVariantEastAsian`    |                                                                                                                                            |
| `fontVariantLigatures`    |                                                                                                                                            |
| `fontVariantNumeric`      |                                                                                                                                            |
| `fontVariantPosition`     |                                                                                                                                            |
| `fontFeatureSettings`     |                                                                                                                                            |
| `fontKerning`             |                                                                                                                                            |
| `fontLanguageOverride`    |                                                                                                                                            |
| `lh`                      | `xs` : 1rem                                                                                                                                |
|                           | `sm` : 1.25rem                                                                                                                             |
|                           | `base` : 1.5rem                                                                                                                            |
|                           | `lg` : 1.75rem                                                                                                                             |
|                           | `xl` : 1.75                                                                                                                                |
|                           | `2xl` : 2rem                                                                                                                               |
|                           | `3xl` : 2.25rem                                                                                                                            |
|                           | `4xl` : 2.5rem                                                                                                                             |
|                           | `5xl` : 1                                                                                                                                  |
|                           | `6xl` : 1                                                                                                                                  |
|                           | `7xl` : 1                                                                                                                                  |
|                           | `8xl` : 1                                                                                                                                  |
|                           | `9xl` : 1                                                                                                                                  |
| `letterSpacing`           | [REM_OPTIONS](#rem-options)                                                                                                                |
| `wordSpacing`             | [REM_OPTIONS](#rem-options)                                                                                                                |
| `listStyle`               |                                                                                                                                            |
| `listStyleType`           | `none` : none                                                                                                                              |
|                           | `disc` : disc                                                                                                                              |
|                           | `decimal` : decimal                                                                                                                        |
| `listStylePosition`       | `inside` : inside                                                                                                                          |
|                           | `outside` : outside                                                                                                                        |
| `listStyleImage`          | `none` : none                                                                                                                              |
| `textAlign`               | `left` : left                                                                                                                              |
|                           | `right` : right                                                                                                                            |
|                           | `center` : center                                                                                                                          |
|                           | `justify` : justify                                                                                                                        |
| `textAlignLast`           | `left` : left                                                                                                                              |
|                           | `right` : right                                                                                                                            |
|                           | `center` : center                                                                                                                          |
|                           | `justify` : justify                                                                                                                        |
| `color`                   | [COLOR OPTIONS](#color-options)                                                                                                            |
| `textDecoration`          | `none` : none                                                                                                                              |
|                           | `underline` : underline                                                                                                                    |
|                           | `overline` : overline                                                                                                                      |
|                           | `lineThrough` : line-through                                                                                                               |
| `textDecorationColor`     | `current` : currentColor                                                                                                                   |
|                           | `transparent` : transparent                                                                                                                |
|                           | [COLOR OPTIONS](#color-options)                                                                                                            |
| `textDecorationLine`      | `none` : none                                                                                                                              |
|                           | `underline` : underline                                                                                                                    |
|                           | `overline` : overline                                                                                                                      |
|                           | `lineThrough` : line-through                                                                                                               |
|                           | `blink` : blink                                                                                                                            |
| `textDecorationStyle`     | `solid` : solid                                                                                                                            |
|                           | `double` : double                                                                                                                          |
|                           | `dotted` : dotted                                                                                                                          |
|                           | `dashed` : dashed                                                                                                                          |
|                           | `wavy` : wavy                                                                                                                              |
| `textDecorationThickness` | `auto` : auto                                                                                                                              |
|                           | `fromFont` : from-font                                                                                                                     |
|                           | `1` : 1px                                                                                                                                  |
|                           | `2` : 2px                                                                                                                                  |
|                           | `3` : 3px                                                                                                                                  |
|                           | `4` : 4px                                                                                                                                  |
|                           | `5` : 5px                                                                                                                                  |
|                           | `6` : 6px                                                                                                                                  |
|                           | `7` : 7px                                                                                                                                  |
|                           | `8` : 8px                                                                                                                                  |
|                           | `9` : 9px                                                                                                                                  |
|                           | `10` : 10px                                                                                                                                |
| `textUnderlineOffset`     | `auto` : auto                                                                                                                              |
|                           | `1` : 1px                                                                                                                                  |
|                           | `2` : 2px                                                                                                                                  |
|                           | `3` : 3px                                                                                                                                  |
|                           | `4` : 4px                                                                                                                                  |
|                           | `5` : 5px                                                                                                                                  |
|                           | `6` : 6px                                                                                                                                  |
|                           | `7` : 7px                                                                                                                                  |
|                           | `8` : 8px                                                                                                                                  |
|                           | `9` : 9px                                                                                                                                  |
|                           | `10` : 10px                                                                                                                                |
| `textTransform`           | `none` : none                                                                                                                              |
|                           | `capitalize` : capitalize                                                                                                                  |
|                           | `uppercase` : uppercase                                                                                                                    |
|                           | `lowercase` : lowercase                                                                                                                    |
| `textOverflow`            | `clip` : clip                                                                                                                              |
|                           | `ellipsis` : ellipsis                                                                                                                      |
| `textEmphasis`            |                                                                                                                                            |
| `textEmphasisColor`       | `current` : currentColor                                                                                                                   |
|                           | `transparent` : transparent                                                                                                                |
|                           | [COLOR OPTIONS](#color-options)                                                                                                            |
| `textEmphasisPosition`    | `over` : over                                                                                                                              |
|                           | `under` : under                                                                                                                            |
|                           | `right` : right                                                                                                                            |
|                           | `left` : left                                                                                                                              |
| `textEmphasisStyle`       | `filled` : filled                                                                                                                          |
|                           | `open` : open                                                                                                                              |
|                           | `dot` : dot                                                                                                                                |
|                           | `circle` : circle                                                                                                                          |
|                           | `doubleCircle` : double-circle                                                                                                             |
|                           | `triangle` : triangle                                                                                                                      |
|                           | `filledSesame` : filled-sesame                                                                                                             |
|                           | `openSesame` : open-sesame                                                                                                                 |
| `textJustify`             | `auto` : auto                                                                                                                              |
|                           | `interWord` : inter-word                                                                                                                   |
|                           | `interCharacter` : inter-character                                                                                                         |
|                           | `distribute` : distribute                                                                                                                  |
|                           | `none` : none                                                                                                                              |
| `textOrientation`         | `mixed` : mixed                                                                                                                            |
|                           | `upright` : upright                                                                                                                        |
|                           | `sideways` : sideways                                                                                                                      |
|                           | `sidewaysRight` : sideways-right                                                                                                           |
|                           | `glyph` : glyph-orientation-vertical                                                                                                       |
| `textShadow`              |                                                                                                                                            |
| `textUnderlinePosition`   | `auto` : auto                                                                                                                              |
|                           | `under` : under                                                                                                                            |
|                           | `left` : left                                                                                                                              |
|                           | `right` : right                                                                                                                            |
| `textWrap`                | `wrap` : wrap                                                                                                                              |
|                           | `nowrap` : nowrap                                                                                                                          |
|                           | `balance` : balance                                                                                                                        |
|                           | `pretty` : pretty                                                                                                                          |
| `textIndent`              | [REM_OPTIONS](#rem-options)                                                                                                                |
| `verticalAlign`           | `baseline` : baseline                                                                                                                      |
|                           | `top` : top                                                                                                                                |
|                           | `middle` : middle                                                                                                                          |
|                           | `bottom` : bottom                                                                                                                          |
|                           | `textTop` : text-top                                                                                                                       |
|                           | `textBottom` : text-bottom                                                                                                                 |
|                           | `super` : super                                                                                                                            |
|                           | `sub` : sub                                                                                                                                |
| `whiteSpace`              | `normal` : normal                                                                                                                          |
|                           | `nowrap` : nowrap                                                                                                                          |
|                           | `pre` : pre                                                                                                                                |
|                           | `preLine` : pre-line                                                                                                                       |
|                           | `preWrap` : pre-wrap                                                                                                                       |
|                           | `breakSpaces` : break-spaces                                                                                                               |
| `wordBreak`               | `normal` : normal                                                                                                                          |
|                           | `breakAll` : break-all                                                                                                                     |
|                           | `keepAll` : keep-all                                                                                                                       |
| `hyphens`                 | `none` : none                                                                                                                              |
|                           | `manual` : manual                                                                                                                          |
|                           | `auto` : auto                                                                                                                              |
| `content`                 |                                                                                                                                            |
| `contentBefore`           | `none` : none                                                                                                                              |
| `contentAfter`            | `none` : none                                                                                                                              |
| `wordWrap`                | `normal` : normal                                                                                                                          |
|                           | `breakWord` : break-word                                                                                                                   |
| `writingMode`             | `horizontal` : horizontal-tb                                                                                                               |
|                           | `vertical` : vertical-rl                                                                                                                   |
|                           | `verticalLr` : vertical-lr                                                                                                                 |

-   ### Background props

| **Prop**       | **Options**                     |
| -------------- | ------------------------------- |
| `bg`           | [COLOR OPTIONS](#color-options) |
| `bgAttachment` | `fixed` : fixed                 |
|                | `local` : local                 |
|                | `scroll` : scroll               |
| `bgBlendMode`  | `normal` : normal               |
|                | `multiply` : multiply           |
|                | `screen` : screen               |
|                | `overlay` : overlay             |
|                | `darken` : darken               |
|                | `lighten` : lighten             |
|                | `colorDodge` : color-dodge      |
|                | `saturation` : saturation       |
|                | `color` : color                 |
|                | `luminosity` : luminosity       |
| `bgClip`       | `borderBox` : border-box        |
|                | `paddingBox` : padding-box      |
|                | `contentBox` : content-box      |
|                | `text` : text                   |
|                | `noClip` : border-area          |
| `bgColor`      | [COLOR OPTIONS](#color-options) |
| `bgImage`      |                                 |
| `bgOrigin`     | `borderBox` : border-box        |
|                | `paddingBox` : padding-box      |
|                | `contentBox` : content-box      |
| `bgPosition`   | `top` : top                     |
|                | `bottom` : bottom               |
|                | `left` : left                   |
|                | `right` : right                 |
|                | `center` : center               |
| `bgPositionX`  | `left` : left                   |
|                | `right` : right                 |
|                | `center` : center               |
| `bgPositionY`  | `top` : top                     |
|                | `bottom` : bottom               |
|                | `center` : center               |
| `bgRepeat`     | `repeat` : repeat               |
|                | `noRepeat` : no-repeat          |
|                | `repeatX` : repeat-x            |
|                | `repeatY` : repeat-y            |
|                | `space` : space                 |
|                | `round` : round                 |
| `bgSize`       | `auto` : auto                   |
|                | `cover` : cover                 |
|                | `contain` : contain             |

-   ### Border props

| **Prop**            | **Options**                     |
| ------------------- | ------------------------------- |
| `border`            |                                 |
| `borderTop`         |                                 |
| `borderRight`       |                                 |
| `borderBottom`      |                                 |
| `borderLeft`        |                                 |
| `borderColor`       | [COLOR OPTIONS](#color-options) |
| `borderWidth`       |                                 |
| `borderStyle`       | `none` : none                   |
|                     | `solid` : solid                 |
|                     | `dotted` : dotted               |
|                     | `dashed` : dashed               |
|                     | `double` : double               |
|                     | `groove` : groove               |
|                     | `ridge` : ridge                 |
|                     | `inset` : inset                 |
|                     | `outset` : outset               |
| `borderCollapse`    | `collapse` : collapse           |
|                     | `separate` : separate           |
| `borderSpacing`     |                                 |
| `borderImage`       |                                 |
| `borderImageOutset` |                                 |
| `borderImageRepeat` | `stretch` : stretch             |
|                     | `repeat` : repeat               |
|                     | `round` : round                 |
|                     | `space` : space                 |
| `borderImageSlice`  |                                 |
| `borderImageSource` |                                 |
| `borderImageWidth`  |                                 |
| `radius`            |                                 |
| `radiusTl`          |                                 |
| `radiusTR`          |                                 |
| `radiusBL`          |                                 |
| `radiusBR`          |                                 |

-   ### Shadow props

| **Prop**       | **Options**                                |
| -------------- | ------------------------------------------ |
| `boxShadow`    | `none` : none                              |
|                | `light` : 0px 1px 3px rgba(0, 0, 0, 0.1)   |
|                | `medium` : 0px 4px 6px rgba(0, 0, 0, 0.1)  |
|                | `heavy` : 0px 10px 20px rgba(0, 0, 0, 0.2) |
| `outline`      | `none` : none                              |
|                | `solid` : 1px solid                        |
|                | `dashed` : 1px dashed                      |
|                | `dotted` : 1px dotted                      |
| `outlineColor` | `primary` : #3498db                        |
|                | `secondary` : #2ecc71                      |
|                | `error` : #e74c3c                          |
|                | `default` : #333                           |
| `outlineStyle` | `solid` : solid                            |
|                | `dashed` : dashed                          |
|                | `dotted` : dotted                          |
|                | `double` : double                          |
| `outlineWidth` | `thin` : 1px                               |
|                | `medium` : 2px                             |
|                | `thick` : 3px                              |

-   ### Animation props

| **Prop**                  | **Options**                            |
| ------------------------- | -------------------------------------- |
| `animation`               |                                        |
| `animationDelay`          |                                        |
| `animationDirection`      | `normal` : normal                      |
|                           | `reverse` : reverse                    |
|                           | `alternate` : alternate                |
|                           | `alternateReverse` : alternate-reverse |
| `animationDuration`       |                                        |
| `animationFillMode`       | `none` : none                          |
|                           | `forwards` : forwards                  |
|                           | `backwards` : backwards                |
|                           | `both` : both                          |
| `animationIterCount`      | `infinite` : infinite                  |
|                           | `once` : 1                             |
|                           | `twice` : 2                            |
|                           | `thrice` : 3                           |
| `animationName`           |                                        |
| `animationPlayState`      | `running` : running                    |
|                           | `paused` : paused                      |
| `animationTimingFunction` | `linear` : linear                      |
|                           | `ease` : ease                          |
|                           | `easeIn` : ease-in                     |
|                           | `easeOut` : ease-out                   |
|                           | `easeInOut` : ease-in-out              |
|                           | `stepStart` : step-start               |
|                           | `stepEnd` : step-end                   |
| `keyframes`               |                                        |

-   ### Transition props

| **Prop**                   | **Options** |
| -------------------------- | ----------- |
| `transition`               |             |
| `transitionDelay`          |             |
| `transitionDuration`       |             |
| `transitionProperty`       |             |
| `transitionTimingFunction` |             |

-   ### Transform props

| **Prop**             | **Options** |
| -------------------- | ----------- |
| `transform`          |             |
| `transformOrigin`    |             |
| `transformStyle`     |             |
| `perspective`        |             |
| `perspectiveOrigin`  |             |
| `backfaceVisibility` |             |

-   ### Filter props

| **Prop**         | **Options** |
| ---------------- | ----------- |
| `filter`         |             |
| `backdropFilter` |             |
| `mixBlendMode`   |             |

-   ### Interaction props

| **Prop**        | **Options** |
| --------------- | ----------- |
| `cursor`        |             |
| `userSelect`    |             |
| `pointerEvents` |             |

-   ### Tables props

| **Prop**      | **Options** |
| ------------- | ----------- |
| `tableLayout` |             |
| `emptyCells`  |             |

-   ### Visibility props

| **Prop**     | **Options** |
| ------------ | ----------- |
| `opacity`    |             |
| `visibility` |             |
| `resize`     |             |

-   ### Clip mask props

| **Prop**     | **Options** |
| ------------ | ----------- |
| `clip`       |             |
| `clipPath`   |             |
| `mask`       |             |
| `maskType`   |             |
| `caretColor` |             |

-   ### Direction quote props

| **Prop**    | **Options** |
| ----------- | ----------- |
| `direction` |             |
| `quotes`    |             |

-   ### Counters props

| **Prop**           | **Options** |
| ------------------ | ----------- |
| `counterIncrement` |             |
| `counterReset`     |             |

-   ### Scroll props

| **Prop**          | **Options** |
| ----------------- | ----------- |
| `scrollBehavior`  |             |
| `scrollSnapAlign` |             |
| `scrollSnapStop`  |             |
| `scrollSnapType`  |             |

-   ### Shape props

| **Prop**              | **Options** |
| --------------------- | ----------- |
| `shapeImageThreshold` |             |
| `shapeMargin`         |             |
| `shapeOutside`        |             |

-   ### Rendering props

| **Prop**         | **Options** |
| ---------------- | ----------- |
| `imageRendering` |             |

-   ### Other props

| **Prop**     | **Options** |
| ------------ | ----------- |
| `willChange` |             |
| `uBidi`      |             |
| `orphans`    |             |
| `widows`     |             |

# REM OPTIONS, FRACTION OPTIONS and COLOR OPTIONS

-   ### REM OPTIONS

| **option** | **Value** |
| ---------- | --------- |
| `0`        | 0px       |
| `1`        | 0.125rem  |
| `2`        | 0.25rem   |
| `3`        | 0.375rem  |
| `4`        | 0.5rem    |
| `5`        | 0.625rem  |
| `6`        | 0.75rem   |
| `7`        | 0.875rem  |
| `8`        | 1rem      |
| `9`        | 1.125rem  |
| `10`       | 1.25rem   |
| `11`       | 1.375rem  |
| `12`       | 1.5rem    |
| `13`       | 1.625rem  |
| `14`       | 1.75rem   |
| `15`       | 1.875rem  |
| `16`       | 2rem      |
| `17`       | 2.125rem  |
| `18`       | 2.25rem   |
| `19`       | 2.375rem  |
| `20`       | 2.5rem    |
| `21`       | 2.625rem  |
| `22`       | 2.75rem   |
| `23`       | 2.875rem  |
| `24`       | 3rem      |
| `25`       | 3.125rem  |
| `26`       | 3.25rem   |
| `27`       | 3.375rem  |
| `28`       | 3.5rem    |
| `29`       | 3.625rem  |
| `30`       | 3.75rem   |
| `31`       | 3.875rem  |
| `32`       | 4rem      |
| `33`       | 4.125rem  |
| `34`       | 4.25rem   |
| `35`       | 4.375rem  |
| `36`       | 4.5rem    |
| `37`       | 4.625rem  |
| `38`       | 4.75rem   |
| `39`       | 4.875rem  |
| `40`       | 5rem      |
| `41`       | 5.125rem  |
| `42`       | 5.25rem   |
| `43`       | 5.375rem  |
| `44`       | 5.5rem    |
| `45`       | 5.625rem  |
| `46`       | 5.75rem   |
| `47`       | 5.875rem  |
| `48`       | 6rem      |
| `49`       | 6.125rem  |
| `50`       | 6.25rem   |
| `51`       | 6.375rem  |
| `52`       | 6.5rem    |
| `53`       | 6.625rem  |
| `54`       | 6.75rem   |
| `55`       | 6.875rem  |
| `56`       | 7rem      |
| `57`       | 7.125rem  |
| `58`       | 7.25rem   |
| `59`       | 7.375rem  |
| `60`       | 7.5rem    |
| `61`       | 7.625rem  |
| `62`       | 7.75rem   |
| `63`       | 7.875rem  |
| `64`       | 8rem      |
| `65`       | 8.125rem  |
| `66`       | 8.25rem   |
| `67`       | 8.375rem  |
| `68`       | 8.5rem    |
| `69`       | 8.625rem  |
| `70`       | 8.75rem   |
| `71`       | 8.875rem  |
| `72`       | 9rem      |
| `73`       | 9.125rem  |
| `74`       | 9.25rem   |
| `75`       | 9.375rem  |
| `76`       | 9.5rem    |
| `77`       | 9.625rem  |
| `78`       | 9.75rem   |
| `79`       | 9.875rem  |
| `80`       | 10rem     |
| `81`       | 10.125rem |
| `82`       | 10.25rem  |
| `83`       | 10.375rem |
| `84`       | 10.5rem   |
| `85`       | 10.625rem |
| `86`       | 10.75rem  |
| `87`       | 10.875rem |
| `88`       | 11rem     |
| `89`       | 11.125rem |
| `90`       | 11.25rem  |
| `91`       | 11.375rem |
| `92`       | 11.5rem   |
| `93`       | 11.625rem |
| `94`       | 11.75rem  |
| `95`       | 11.875rem |
| `96`       | 12rem     |
| `97`       | 12.125rem |
| `98`       | 12.25rem  |
| `99`       | 12.375rem |

-   ### FRACTION OPTIONS

| **option** | **value** |
| ---------- | --------- |
| `1/2`      | 50%       |
| `1/3`      | 33.3333%  |
| `2/3`      | 66.6667%  |
| `1/4`      | 25%       |
| `2/4`      | 50%       |
| `3/4`      | 75%       |
| `1/5`      | 20%       |
| `2/5`      | 40%       |
| `3/5`      | 60%       |
| `4/5`      | 80%       |
| `1/6`      | 16.6667%  |
| `2/6`      | 33.3333%  |
| `3/6`      | 50%       |
| `4/6`      | 66.6667%  |
| `5/6`      | 83.3333%  |
| `1/12`     | 8.3333%   |
| `2/12`     | 16.6667%  |
| `3/12`     | 25%       |
| `4/12`     | 33.3333%  |
| `5/12`     | 41.6667%  |
| `6/12`     | 50%       |
| `7/12`     | 58.3333%  |
| `8/12`     | 66.6667%  |
| `9/12`     | 75%       |
| `10/12`    | 83.3333%  |
| `11/12`    | 91.6667%  |
| `full`     | 100%      |

-   ### COLOR OPTIONS

| **Color Option** | **Hex Value**                                                                                              |
| ---------------- | ---------------------------------------------------------------------------------------------------------- |
| `blue-100`       | <span style="display:block;width:100px; height:20px; background-color:#bfdbfe; border-radius: 5px"></span> |
| `blue-200`       | <span style="display:block;width:100px; height:20px; background-color:#93c5fd; border-radius: 5px"></span> |
| `blue-300`       | <span style="display:block;width:100px; height:20px; background-color:#60a5fa; border-radius: 5px"></span> |
| `blue-400`       | <span style="display:block;width:100px; height:20px; background-color:#3b82f6; border-radius: 5px"></span> |
| `blue-500`       | <span style="display:block;width:100px; height:20px; background-color:#2563eb; border-radius: 5px"></span> |
| `blue-600`       | <span style="display:block;width:100px; height:20px; background-color:#1d4ed8; border-radius: 5px"></span> |
| `blue-700`       | <span style="display:block;width:100px; height:20px; background-color:#1e40af; border-radius: 5px"></span> |
| `blue-800`       | <span style="display:block;width:100px; height:20px; background-color:#1e3a8a; border-radius: 5px"></span> |
| `blue-900`       | <span style="display:block;width:100px; height:20px; background-color:#1e3a73; border-radius: 5px"></span> |
| `indigo-100`     | <span style="display:block;width:100px; height:20px; background-color:#e0e7ff; border-radius: 5px"></span> |
| `indigo-200`     | <span style="display:block;width:100px; height:20px; background-color:#c7d2fe; border-radius: 5px"></span> |
| `indigo-300`     | <span style="display:block;width:100px; height:20px; background-color:#a5b4fc; border-radius: 5px"></span> |
| `indigo-400`     | <span style="display:block;width:100px; height:20px; background-color:#818cf8; border-radius: 5px"></span> |
| `indigo-500`     | <span style="display:block;width:100px; height:20px; background-color:#6366f1; border-radius: 5px"></span> |
| `indigo-600`     | <span style="display:block;width:100px; height:20px; background-color:#4f46e5; border-radius: 5px"></span> |
| `indigo-700`     | <span style="display:block;width:100px; height:20px; background-color:#4338ca; border-radius: 5px"></span> |
| `indigo-800`     | <span style="display:block;width:100px; height:20px; background-color:#3730a3; border-radius: 5px"></span> |
| `indigo-900`     | <span style="display:block;width:100px; height:20px; background-color:#312e81; border-radius: 5px"></span> |
| `purple-100`     | <span style="display:block;width:100px; height:20px; background-color:#f3e8ff; border-radius: 5px"></span> |
| `purple-200`     | <span style="display:block;width:100px; height:20px; background-color:#e9d5ff; border-radius: 5px"></span> |
| `purple-300`     | <span style="display:block;width:100px; height:20px; background-color:#d8b4fe; border-radius: 5px"></span> |
| `purple-400`     | <span style="display:block;width:100px; height:20px; background-color:#c084fc; border-radius: 5px"></span> |
| `purple-500`     | <span style="display:block;width:100px; height:20px; background-color:#a855f7; border-radius: 5px"></span> |
| `purple-600`     | <span style="display:block;width:100px; height:20px; background-color:#9333ea; border-radius: 5px"></span> |
| `purple-700`     | <span style="display:block;width:100px; height:20px; background-color:#7e22ce; border-radius: 5px"></span> |
| `purple-800`     | <span style="display:block;width:100px; height:20px; background-color:#6b21a8; border-radius: 5px"></span> |
| `purple-900`     | <span style="display:block;width:100px; height:20px; background-color:#581c87; border-radius: 5px"></span> |
| `pink-100`       | <span style="display:block;width:100px; height:20px; background-color:#fbcfe8; border-radius: 5px"></span> |
| `pink-200`       | <span style="display:block;width:100px; height:20px; background-color:#f9a8d4; border-radius: 5px"></span> |
| `pink-300`       | <span style="display:block;width:100px; height:20px; background-color:#f472b6; border-radius: 5px"></span> |
| `pink-400`       | <span style="display:block;width:100px; height:20px; background-color:#ec4899; border-radius: 5px"></span> |
| `pink-500`       | <span style="display:block;width:100px; height:20px; background-color:#db2777; border-radius: 5px"></span> |
| `pink-600`       | <span style="display:block;width:100px; height:20px; background-color:#be185d; border-radius: 5px"></span> |
| `pink-700`       | <span style="display:block;width:100px; height:20px; background-color:#9d174d; border-radius: 5px"></span> |
| `pink-800`       | <span style="display:block;width:100px; height:20px; background-color:#831843; border-radius: 5px"></span> |
| `pink-900`       | <span style="display:block;width:100px; height:20px; background-color:#701a3c; border-radius: 5px"></span> |
| `red-100`        | <span style="display:block;width:100px; height:20px; background-color:#fee2e2; border-radius: 5px"></span> |
| `red-200`        | <span style="display:block;width:100px; height:20px; background-color:#fecaca; border-radius: 5px"></span> |
| `red-300`        | <span style="display:block;width:100px; height:20px; background-color:#fca5a5; border-radius: 5px"></span> |
| `red-400`        | <span style="display:block;width:100px; height:20px; background-color:#f87171; border-radius: 5px"></span> |
| `red-500`        | <span style="display:block;width:100px; height:20px; background-color:#ef4444; border-radius: 5px"></span> |
| `red-600`        | <span style="display:block;width:100px; height:20px; background-color:#dc2626; border-radius: 5px"></span> |
| `red-700`        | <span style="display:block;width:100px; height:20px; background-color:#b91c1c; border-radius: 5px"></span> |
| `red-800`        | <span style="display:block;width:100px; height:20px; background-color:#991b1b; border-radius: 5px"></span> |
| `red-900`        | <span style="display:block;width:100px; height:20px; background-color:#7f1d1d; border-radius: 5px"></span> |
| `orange-100`     | <span style="display:block;width:100px; height:20px; background-color:#ffedd5; border-radius: 5px"></span> |
| `orange-200`     | <span style="display:block;width:100px; height:20px; background-color:#fed7aa; border-radius: 5px"></span> |
| `orange-300`     | <span style="display:block;width:100px; height:20px; background-color:#fdba74; border-radius: 5px"></span> |
| `orange-400`     | <span style="display:block;width:100px; height:20px; background-color:#fb923c; border-radius: 5px"></span> |
| `orange-500`     | <span style="display:block;width:100px; height:20px; background-color:#f97316; border-radius: 5px"></span> |
| `orange-600`     | <span style="display:block;width:100px; height:20px; background-color:#ea580c; border-radius: 5px"></span> |
| `orange-700`     | <span style="display:block;width:100px; height:20px; background-color:#c2410c; border-radius: 5px"></span> |
| `orange-800`     | <span style="display:block;width:100px; height:20px; background-color:#9a3412; border-radius: 5px"></span> |
| `orange-900`     | <span style="display:block;width:100px; height:20px; background-color:#7c2d12; border-radius: 5px"></span> |
| `yellow-100`     | <span style="display:block;width:100px; height:20px; background-color:#fef9c3; border-radius: 5px"></span> |
| `yellow-200`     | <span style="display:block;width:100px; height:20px; background-color:#fef08a; border-radius: 5px"></span> |
| `yellow-300`     | <span style="display:block;width:100px; height:20px; background-color:#fde047; border-radius: 5px"></span> |
| `yellow-400`     | <span style="display:block;width:100px; height:20px; background-color:#facc15; border-radius: 5px"></span> |
| `yellow-500`     | <span style="display:block;width:100px; height:20px; background-color:#eab308; border-radius: 5px"></span> |
| `yellow-600`     | <span style="display:block;width:100px; height:20px; background-color:#ca8a04; border-radius: 5px"></span> |
| `yellow-700`     | <span style="display:block;width:100px; height:20px; background-color:#a16207; border-radius: 5px"></span> |
| `yellow-800`     | <span style="display:block;width:100px; height:20px; background-color:#854d0e; border-radius: 5px"></span> |
| `yellow-900`     | <span style="display:block;width:100px; height:20px; background-color:#713f12; border-radius: 5px"></span> |
| `green-100`      | <span style="display:block;width:100px; height:20px; background-color:#d1fae5; border-radius: 5px"></span> |
| `green-200`      | <span style="display:block;width:100px; height:20px; background-color:#a7f3d0; border-radius: 5px"></span> |
| `green-300`      | <span style="display:block;width:100px; height:20px; background-color:#6ee7b7; border-radius: 5px"></span> |
| `green-400`      | <span style="display:block;width:100px; height:20px; background-color:#34d399; border-radius: 5px"></span> |
| `green-500`      | <span style="display:block;width:100px; height:20px; background-color:#10b981; border-radius: 5px"></span> |
| `green-600`      | <span style="display:block;width:100px; height:20px; background-color:#059669; border-radius: 5px"></span> |
| `green-700`      | <span style="display:block;width:100px; height:20px; background-color:#047857; border-radius: 5px"></span> |
| `green-800`      | <span style="display:block;width:100px; height:20px; background-color:#065f46; border-radius: 5px"></span> |
| `green-900`      | <span style="display:block;width:100px; height:20px; background-color:#064e3b; border-radius: 5px"></span> |
| `teal-100`       | <span style="display:block;width:100px; height:20px; background-color:#ccfbf1; border-radius: 5px"></span> |
| `teal-200`       | <span style="display:block;width:100px; height:20px; background-color:#99f6e4; border-radius: 5px"></span> |
| `teal-300`       | <span style="display:block;width:100px; height:20px; background-color:#5eead4; border-radius: 5px"></span> |
| `teal-400`       | <span style="display:block;width:100px; height:20px; background-color:#2dd4bf; border-radius: 5px"></span> |
| `teal-500`       | <span style="display:block;width:100px; height:20px; background-color:#14b8a6; border-radius: 5px"></span> |
| `teal-600`       | <span style="display:block;width:100px; height:20px; background-color:#0d9488; border-radius: 5px"></span> |
| `teal-700`       | <span style="display:block;width:100px; height:20px; background-color:#0f766e; border-radius: 5px"></span> |
| `teal-800`       | <span style="display:block;width:100px; height:20px; background-color:#115e59; border-radius: 5px"></span> |
| `teal-900`       | <span style="display:block;width:100px; height:20px; background-color:#134e4a; border-radius: 5px"></span> |
| `cyan-100`       | <span style="display:block;width:100px; height:20px; background-color:#cffafe; border-radius: 5px"></span> |
| `cyan-200`       | <span style="display:block;width:100px; height:20px; background-color:#a5f3fc; border-radius: 5px"></span> |
| `cyan-300`       | <span style="display:block;width:100px; height:20px; background-color:#67e8f9; border-radius: 5px"></span> |
| `cyan-400`       | <span style="display:block;width:100px; height:20px; background-color:#22d3ee; border-radius: 5px"></span> |
| `cyan-500`       | <span style="display:block;width:100px; height:20px; background-color:#06b6d4; border-radius: 5px"></span> |
| `cyan-600`       | <span style="display:block;width:100px; height:20px; background-color:#0891b2; border-radius: 5px"></span> |
| `cyan-700`       | <span style="display:block;width:100px; height:20px; background-color:#0e7490; border-radius: 5px"></span> |
| `cyan-800`       | <span style="display:block;width:100px; height:20px; background-color:#155e75; border-radius: 5px"></span> |
| `cyan-900`       | <span style="display:block;width:100px; height:20px; background-color:#164e63; border-radius: 5px"></span> |
| `gray-100`       | <span style="display:block;width:100px; height:20px; background-color:#f3f4f6; border-radius: 5px"></span> |
| `gray-200`       | <span style="display:block;width:100px; height:20px; background-color:#e5e7eb; border-radius: 5px"></span> |
| `gray-300`       | <span style="display:block;width:100px; height:20px; background-color:#d1d5db; border-radius: 5px"></span> |
| `gray-400`       | <span style="display:block;width:100px; height:20px; background-color:#9ca3af; border-radius: 5px"></span> |
| `gray-500`       | <span style="display:block;width:100px; height:20px; background-color:#6b7280; border-radius: 5px"></span> |
| `gray-600`       | <span style="display:block;width:100px; height:20px; background-color:#4b5563; border-radius: 5px"></span> |
| `gray-700`       | <span style="display:block;width:100px; height:20px; background-color:#374151; border-radius: 5px"></span> |
| `gray-800`       | <span style="display:block;width:100px; height:20px; background-color:#1f2937; border-radius: 5px"></span> |
| `gray-900`       | <span style="display:block;width:100px; height:20px; background-color:#111827; border-radius: 5px"></span> |
| `gray-dark-100`  | <span style="display:block;width:100px; height:20px; background-color:#d3d3d3; border-radius: 5px"></span> |
| `gray-dark-200`  | <span style="display:block;width:100px; height:20px; background-color:#bababa; border-radius: 5px"></span> |
| `gray-dark-300`  | <span style="display:block;width:100px; height:20px; background-color:#9f9f9f; border-radius: 5px"></span> |
| `gray-dark-400`  | <span style="display:block;width:100px; height:20px; background-color:#7f7f7f; border-radius: 5px"></span> |
| `gray-dark-500`  | <span style="display:block;width:100px; height:20px; background-color:#666666; border-radius: 5px"></span> |
| `gray-dark-600`  | <span style="display:block;width:100px; height:20px; background-color:#4c4c4c; border-radius: 5px"></span> |
| `gray-dark-700`  | <span style="display:block;width:100px; height:20px; background-color:#333333; border-radius: 5px"></span> |
| `gray-dark-800`  | <span style="display:block;width:100px; height:20px; background-color:#1a1a1a; border-radius: 5px"></span> |
| `gray-dark-900`  | <span style="display:block;width:100px; height:20px; background-color:#0d0d0d; border-radius: 5px"></span> |
| `error-100`      | <span style="display:block;width:100px; height:20px; background-color:#f9d4d9; border-radius: 5px"></span> |
| `error-200`      | <span style="display:block;width:100px; height:20px; background-color:#f3a9b2; border-radius: 5px"></span> |
| `error-300`      | <span style="display:block;width:100px; height:20px; background-color:#ec7d8b; border-radius: 5px"></span> |
| `error-400`      | <span style="display:block;width:100px; height:20px; background-color:#e65363; border-radius: 5px"></span> |
| `error-500`      | <span style="display:block;width:100px; height:20px; background-color:#a6192e; border-radius: 5px"></span> |
| `error-600`      | <span style="display:block;width:100px; height:20px; background-color:#850f22; border-radius: 5px"></span> |
| `error-700`      | <span style="display:block;width:100px; height:20px; background-color:#660818; border-radius: 5px"></span> |
| `error-800`      | <span style="display:block;width:100px; height:20px; background-color:#48040f; border-radius: 5px"></span> |
| `error-900`      | <span style="display:block;width:100px; height:20px; background-color:#2f0209; border-radius: 5px"></span> |
| `warning-100`    | <span style="display:block;width:100px; height:20px; background-color:#fff4d4; border-radius: 5px"></span> |
| `warning-200`    | <span style="display:block;width:100px; height:20px; background-color:#ffe9a9; border-radius: 5px"></span> |
| `warning-300`    | <span style="display:block;width:100px; height:20px; background-color:#ffde7d; border-radius: 5px"></span> |
| `warning-400`    | <span style="display:block;width:100px; height:20px; background-color:#ffd353; border-radius: 5px"></span> |
| `warning-500`    | <span style="display:block;width:100px; height:20px; background-color:#ff9900; border-radius: 5px"></span> |
| `warning-600`    | <span style="display:block;width:100px; height:20px; background-color:#cc7a00; border-radius: 5px"></span> |
| `warning-700`    | <span style="display:block;width:100px; height:20px; background-color:#995c00; border-radius: 5px"></span> |
| `warning-800`    | <span style="display:block;width:100px; height:20px; background-color:#663d00; border-radius: 5px"></span> |
| `warning-900`    | <span style="display:block;width:100px; height:20px; background-color:#331f00; border-radius: 5px"></span> |
| `success-100`    | <span style="display:block;width:100px; height:20px; background-color:#d2f7dd; border-radius: 5px"></span> |
| `success-200`    | <span style="display:block;width:100px; height:20px; background-color:#a6efba; border-radius: 5px"></span> |
| `success-300`    | <span style="display:block;width:100px; height:20px; background-color:#79e798; border-radius: 5px"></span> |
| `success-400`    | <span style="display:block;width:100px; height:20px; background-color:#4cdf75; border-radius: 5px"></span> |
| `success-500`    | <span style="display:block;width:100px; height:20px; background-color:#04b34f; border-radius: 5px"></span> |
| `success-600`    | <span style="display:block;width:100px; height:20px; background-color:#038f3e; border-radius: 5px"></span> |
| `success-700`    | <span style="display:block;width:100px; height:20px; background-color:#026b2e; border-radius: 5px"></span> |
| `success-800`    | <span style="display:block;width:100px; height:20px; background-color:#01471d; border-radius: 5px"></span> |
| `success-900`    | <span style="display:block;width:100px; height:20px; background-color:#00230d; border-radius: 5px"></span> |
| `info-100`       | <span style="display:block;width:100px; height:20px; background-color:#d4e6f9; border-radius: 5px"></span> |
| `info-200`       | <span style="display:block;width:100px; height:20px; background-color:#a9cdf3; border-radius: 5px"></span> |
| `info-300`       | <span style="display:block;width:100px; height:20px; background-color:#7db5ec; border-radius: 5px"></span> |
| `info-400`       | <span style="display:block;width:100px; height:20px; background-color:#539ce6; border-radius: 5px"></span> |
| `info-500`       | <span style="display:block;width:100px; height:20px; background-color:#0057b8; border-radius: 5px"></span> |
| `info-600`       | <span style="display:block;width:100px; height:20px; background-color:#004490; border-radius: 5px"></span> |
| `info-700`       | <span style="display:block;width:100px; height:20px; background-color:#003168; border-radius: 5px"></span> |
| `info-800`       | <span style="display:block;width:100px; height:20px; background-color:#001e40; border-radius: 5px"></span> |
| `info-900`       | <span style="display:block;width:100px; height:20px; background-color:#000b20; border-radius: 5px"></span> |

## Web Site

The website for this project is still under construction. It will be available soon!

## Issues

If you find any issues, missing properties or functionalities, or have any suggestions, please open an issue in the repository. Your input is very valuable and will help improve the project!

## Contributing

If you would like to contribute to the project, feel free to create a _pull request_ or open an _issue_ in the repository.

## License

This project is licensed under the MIT License.