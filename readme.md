## @zaeny/hiccup

[![npm version](https://img.shields.io/npm/v/@zaeny/hiccup.svg)](https://www.npmjs.com/package/@zaeny/hiccup)
![npm downloads](https://img.shields.io/npm/dm/@zaeny/hiccup.svg)  


> VDOM representation in hiccup

Simple UI building with hiccup nested data structure     


- [Geting Started](#getting-started)
- [Usage](#usage)
- [API](#api)
- [Related work](#related-work)
- [Changes](#change)

### Getting started 

**npm**

```shell 
npm i @zaeny/hiccup
```
then 

```js
var {render, toHiccup, toString} = require('@zaeny/hiccup');

render(
  ["div", {class: "container"}, 
   ["p", {class: "leading"}, "Hi"],
   ["p", {}, "my name is hiccup"]
  ],
  document.body
);

// render(<<hiccup>>, <<elementContainer>>
```

**in browser**  

```js
<script src="https://cdn.jsdelivr.net/gh/azizzaeny/hiccup@main/dist/index.js"></script>
```

**in browser es6**
```html
<script src="https://cdn.jsdelivr.net/gh/azizzaeny/hiccup@main/dist/index.es6.js"></script>
```
or  in browser es6 

```js
var deps = {
  hiccup : "https://cdn.jsdelivr.net/gh/azizzaeny/hiccup@main/dist/index.es6.js",
}

var assignVar = (global) => res => Object.assign(global, res.default );
import(deps.hiccup).then(assignVar(window));
```

### usage

```js
var component = (props) => (["div", "container", ["div", {class: "w-10"}, "look iam hiccup"]];

render(component(), document.body );

toHiccup('<div>hai</div>'); // ["div", {}, "hai"]
toString(["div", {class: "foo bar"}, ["div", {}, "hail"]]); // <div class="foo bar"><div>hail</div></div>
 
```

### Api
```js
createElement(hnode),
render(container, hnode)
toHiccup(str)
toString(hnode) 
```

### Related work
- [Composable](https://github.com/azizzaeny/composable/tree/main) - Collection of functions to solve programming problem

### Changes
- [1.0.0] add `createElement`, `render`, `toHiccup`
- [1.0.1] add `svg` rendering in renderNode
- [1.0.2] add `toString` to render html string

