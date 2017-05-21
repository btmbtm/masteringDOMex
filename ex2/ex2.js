var DOC = document;
dCSS = document.createElement('style');
DOC.head.appendChild(dCSS);
dCSS = dCSS.sheet;
dCSS.insertRule('body { background-color: snow; }', dCSS.cssRules.length);
dCSS.insertRule('ul { list-style: none; }', dCSS.cssRules.length);
dCSS.insertRule('h3 { text-align: center; }', dCSS.cssRules.length);
dCSS.insertRule('.stk { background-color: gray; }', dCSS.cssRules.length);
dCSS.insertRule('.gre { width:200px; height: 200px; }', dCSS.cssRules.length);
