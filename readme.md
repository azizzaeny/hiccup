## @zaeny/hiccup
> UI building with simple vdom in hiccup  
Provide simple vdom manipulation with array  

- [Geting Started](#getting-started)
- [Usage](#usage)
- [API](#api)

### Getting started 
(status: work in progress)  
**in browser** global vars 

```js
<script src="https://cdn.jsdelivr.net/gh/azizzaeny/hiccup@main/dist/index.js"></script>
```

**in browser es6**
```html
<script src="https://cdn.jsdelivr.net/gh/azizzaeny/hiccup@main/dist/index.es6.js"></script>
```
or 
```js
var deps = {
  hiccup : "https://cdn.jsdelivr.net/gh/azizzaeny/hiccup@main/dist/index.es6.js",
}

var assignVar = (global) => res => Object.assign(global, res.default );

import(deps.hiccup).then(assignVar(window));
```

### usage

```js
var component = (props) => ["div", "container", ["div", {class: "w-10"}, "look iam hiccup"]];

render(document.body,  component());


/*
 toHiccup('<div>hai</div>');
*/
```

### Api
```js
createElement(hnode),
render(container, hnode)
toHiccup(str)
toString(hnode) 
```
