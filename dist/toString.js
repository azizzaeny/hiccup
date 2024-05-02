
var isSelfClosing = (tag) =>  {
  const tags = [
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'
  ];
  return tags.includes(tag.toLowerCase());
}

var toString = (hnode) => {
  if(!hnode) return;
  if (typeof hnode === "string")  return hnode;
  let [tagName, attrs, ...children] = hnode;

  /* create attributes*/
  let attributes = '';
  for (let attrName in attrs) {
    attributes += ` ${attrName}="${attrs[attrName]}"`;
  }
  /*create a whole html tag*/
  let result = `<${tagName}${attributes}`;
  
  /*create children*/
  if (isSelfClosing(tagName)) {
    result += '/>';
  } else {
    let childrenString = children.map(toString).join('');
    result += `>${childrenString}</${tagName}>`;
  }
  return result;
}

module.exports = toString;
