require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({5:[function(require,module,exports) {

},{}],17:[function(require,module,exports) {
"use strict";function e(e,n){for(var t,r=[],o=[],i=arguments.length;i-- >2;)r.push(arguments[i]);for(;r.length;)if((t=r.pop())&&t.pop)for(i=t.length;i--;)r.push(t[i]);else null!=t&&!0!==t&&!1!==t&&o.push(t);return"function"==typeof e?e(n||{},o):{nodeName:e,attributes:n||{},children:o,key:n&&n.key}}function n(e,n,t,r){var o,i=[],u=r&&r.children[0]||null,l=u&&function e(n,t){return{nodeName:n.nodeName.toLowerCase(),attributes:{},children:t.call(n.childNodes,function(n){return 3===n.nodeType?n.nodeValue:e(n,t)})}}(u,[].map),a=s(e),f=s(n);return d(function e(n,t,r){for(var o in r)"function"==typeof r[o]?function(e,o){r[e]=function(e){return"function"==typeof(e=o(e))&&(e=e(p(n,a),r)),e&&e!==(t=p(n,a))&&!e.then&&d(a=h(n,s(t,e),a)),e}}(o,r[o]):e(n.concat(o),t[o]=t[o]||{},r[o]=s(r[o]))}([],a,f)),f;function c(){o=!o;var e=t(a,f);for(r&&!o&&(u=function e(n,t,r,o,u,l){if(o===r);else if(null==r)t=n.insertBefore(N(o,u),t);else if(o.nodeName&&o.nodeName===r.nodeName){!function(e,n,t,r){for(var o in s(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&m(e,o,t[o],r,n[o]);t.onupdate&&i.push(function(){t.onupdate(e,n)})}(t,r.attributes,o.attributes,u=u||"svg"===o.nodeName);for(var a=[],f={},c={},d=0;d<r.children.length;d++){a[d]=t.childNodes[d];var h=r.children[d],p=v(h);null!=p&&(f[p]=[a[d],h])}for(var d=0,g=0;g<o.children.length;){var h=r.children[d],y=o.children[g],p=v(h),k=v(y);if(c[p])d++;else if(null==k)null==p&&(e(t,a[d],h,y,u),g++),d++;else{var w=f[k]||[];p===k?(e(t,w[0],w[1],y,u),d++):w[0]?e(t,t.insertBefore(w[0],a[d]),w[1],y,u):e(t,a[d],null,y,u),g++,c[k]=y}}for(;d<r.children.length;){var h=r.children[d];null==v(h)&&b(t,a[d],h),d++}for(var d in f)c[f[d][1].key]||b(t,f[d][0],f[d][1])}else o.nodeName===r.nodeName?t.nodeValue=o:(t=n.insertBefore(N(o,u),l=t),b(n,l,r));return t}(r,u,l,l=e));e=i.pop();)e()}function d(){o||(o=!o,setTimeout(c))}function s(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function h(e,n,t){var r={};return e.length?(r[e[0]]=e.length>1?h(e.slice(1),n,t[e[0]]):n,s(t,r)):n}function p(e,n){for(var t=0;t<e.length;t++)n=n[e[t]];return n}function v(e){return e?e.key:null}function m(e,n,t,r,o){if("key"===n);else if("style"===n)for(var i in s(o,t))e[n][i]=null==t||null==t[i]?"":t[i];else"function"==typeof t||n in e&&!r?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function N(e,n){var t="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName);if(e.attributes){e.attributes.oncreate&&i.push(function(){e.attributes.oncreate(t)});for(var r=0;r<e.children.length;r++)t.appendChild(N(e.children[r],n));for(var o in e.attributes)m(t,o,e.attributes[o],n)}return t}function b(e,n,t,r){function o(){e.removeChild(function e(n,t,r){if(r=t.attributes){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}t.attributes&&(r=t.attributes.onremove)?r(n,o):o()}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.h=e,exports.app=n;
},{}],15:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Brackets=exports.Percent=exports.Equation=exports.Division=exports.Multiplication=exports.Question=void 0;var e=require("hyperapp"),s=require("./topics.js"),r=o(s),n=require("./utils.js");function o(e){return e&&e.__esModule?e:{default:e}}var t=exports.Question=function(s){var n=s.topic,o=s.numbers,t=s.showAnswer,u=s.key,i=r.default[n].component;return(0,e.h)(i,{numbers:o,showAnswer:t,key:u})},u=exports.Multiplication=function(s){var r=s.numbers,n=s.showAnswer,o=void 0===n||n,t=s.key,u=r[2]||0,i=r[3]||0;return(0,e.h)("li",{key:t},r[0]/Math.pow(10,u)," × ",r[1]/Math.pow(10,i)," ",o?(0,e.h)("span",{class:"answer"},"= ",r[0]*r[1]/Math.pow(10,u+i)):null)},i=exports.Division=function(s){var r=s.numbers,n=s.showAnswer,o=void 0===n||n,t=s.key;return(0,e.h)("li",{key:t},r[0]*r[1]," ÷ ",r[1]," ",o?(0,e.h)("span",{class:"answer"},"= ",r[0]):null)},l=exports.Equation=function(s){var r=s.numbers,o=s.showAnswer,t=void 0===o||o,u=s.key;return(0,e.h)("li",{key:u},(0,n.coeff)(r[0]),(0,e.h)("i",null,"x")," ",(0,n.plusorminus)(r[3])," ",r[1]," = ",1===r[3]?r[0]*r[2]+r[1]:r[0]*r[2]-r[1]," ",t?(0,e.h)("span",{class:"answer"},(0,e.h)("i",null,"x")," = ",r[2]):null)},a=exports.Percent=function(s){var r=s.numbers,n=s.showAnswer,o=void 0===n||n,t=s.key;return(0,e.h)("li",{key:t},5*r[0],"% of ",20*r[1]," ",o?(0,e.h)("span",{class:"answer"},"= ",r[1]*r[0]):null)},p=exports.Brackets=function(s){var r=s.numbers,o=s.showAnswer,t=void 0===o||o,u=s.key;return(0,e.h)("li",{key:u},r[0],"(",(0,n.coeff)(r[1]),(0,e.h)("i",null,"x")," ",(0,n.plusorminus)(r[2])," ",Math.abs(r[2]),") ",t?(0,e.h)("span",{class:"answer"}," = ",(0,n.coeff)(r[0]*r[1]),(0,e.h)("i",null,"x")," ",(0,n.plusorminus)(r[2])," ",Math.abs(r[0]*r[2])):null)};
},{"hyperapp":17,"./topics.js":12,"./utils.js":11}],12:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./components.js"),n={mult:{name:"Multiplication",intro:"Evaluate",component:e.Multiplication,numbers:[[-12,12],[-12,12]]},div:{name:"Division",intro:"Evaluate",component:e.Division,numbers:[[1,12],[1,12]]},eqn:{name:"Equations",intro:"Solve the following equations:",component:e.Equation,numbers:[[1,12],[1,12],[1,12],[-1,1]]},percent:{name:"Percentages",intro:"Find the answer to the following questions:",component:e.Percent,numbers:[[1,20],[1,12]]},multdec:{name:"Multiplying Decimals",intro:"Evaluate",component:e.Multiplication,numbers:[[1,12],[1,12],[-3,3],[-3,3]]},brackets:{name:"Expanding Brackets",intro:"Expand the following brackets:",component:e.Brackets,numbers:[[2,12],[1,12],[-12,12]]}};exports.default=n;
},{"./components.js":15}],11:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.plusorminus=exports.coeff=exports.mix=void 0;var r=function(){return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return function(r,t){var n=[],e=!0,o=!1,u=void 0;try{for(var i,a=r[Symbol.iterator]();!(e=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);e=!0);}catch(r){o=!0,u=r}finally{try{!e&&a.return&&a.return()}finally{if(o)throw u}}return n}(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),t=require("./topics.js"),n=e(t);function e(r){return r&&r.__esModule?r:{default:r}}var o=function(r,t){!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return void 0===t&&(t=r,r=1),Math.floor((t-r+1)*Math.random())+r},u=function t(n){var e=r(n,2),o=e[0],u=e[1],i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=Math.floor((u-o+1)*Math.random())+o;return i&&0===a?t([o,u],i):a},i=exports.mix=function(r,t){return Array.from({length:t}).map(function(){return n.default[r].numbers.map(function(r){return u(r)})})},a=exports.coeff=function(r){return 1===r?"":r},f=exports.plusorminus=function(r){return r>0?"+":"-"};
},{"./topics.js":12}],6:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=require("./utils.js"),e=require("./topics.js"),t=u(e);function u(n){return n&&n.__esModule?n:{default:n}}var r={mix:function(){return function(e){return{questions:(0,n.mix)(e.topic,e.numberOfQuestions)}}},toggleShowAnswer:function(){return function(n){return{showAnswer:!n.showAnswer}}},toggleFullScreen:function(){return function(n){return{fullScreen:!n.fullScreen}}},changeTopic:function(e){return function(t){return{questions:(0,n.mix)(e,t.numberOfQuestions),topic:e}}},fontSizeDown:function(n){return function(e){return{fontSize:e.fontSize-n}}},fontSizeUp:function(n){return function(e){return{fontSize:e.fontSize+n}}},removeQuestion:function(){return function(e){return{numberOfQuestions:e.numberOfQuestions-1,questions:(0,n.mix)(e.topic,e.numberOfQuestions-1)}}},addQuestion:function(){return function(e){return{numberOfQuestions:e.numberOfQuestions+1,questions:(0,n.mix)(e.topic,e.numberOfQuestions+1)}}}};exports.default=r;
},{"./utils.js":11,"./topics.js":12}],7:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./utils.js"),s={fullScreen:!1,topic:null,numberOfQuestions:5,fontSize:24,questions:(0,e.mix)("mult",5),showAnswer:!1};exports.default=s;
},{"./utils.js":11}],8:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var l,s=t[Symbol.iterator]();!(o=(l=s.next()).done)&&(n.push(l.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),e=require("hyperapp"),n=require("./components.js"),o=require("./topics.js"),r=i(o);function i(t){return t&&t.__esModule?t:{default:t}}var l=function(o,i){return(0,e.h)("div",{id:"root"},o.fullScreen?"":(0,e.h)("header",null,(0,e.h)("h1",null,"Maths ",(0,e.h)("strong",null,"DJ")),(0,e.h)("div",{id:"topics"},Object.entries(r.default).map(function(n){var o=t(n,2),r=o[0],l=o[1];return(0,e.h)("button",{class:"topic",onclick:function(){return i.changeTopic(r)}},l.name)}))),(0,e.h)("div",{class:"main"},o.topic?(0,e.h)("div",null,(0,e.h)("div",{class:"actions"},(0,e.h)("button",{onclick:i.mix},(0,e.h)("i",{class:"fas fa-sync-alt"}),"MIX"),(0,e.h)("button",{onclick:i.toggleShowAnswer},o.showAnswer?(0,e.h)("i",{class:"fas fa-eye-slash"}):(0,e.h)("i",{class:"fas fa-eye"}),o.showAnswer?"Hide Answers":"Show Answers"),(0,e.h)("button",{onclick:i.toggleFullScreen},o.fullScreen?"Close Full Screen":"Full Screen"),(0,e.h)("button",{onclick:function(){return window.print()}},(0,e.h)("i",{class:"fas fa-print"}),"Print")),(0,e.h)("div",{class:"controls"},(0,e.h)("button",{disabled:o.fontSize<=8,onclick:function(){return i.fontSizeDown(2)}},"-"),"Font Size",(0,e.h)("button",{onclick:function(){return i.fontSizeUp(2)}},"+"),(0,e.h)("button",{disabled:o.numberOfQuestions<=1,onclick:function(){return i.removeQuestion()}},"-"),"Number of Questions",(0,e.h)("button",{onclick:function(){return i.addQuestion()}},"+")),(0,e.h)("h1",{style:{fontSize:1.5*o.fontSize+"px"}},r.default[o.topic].name),(0,e.h)("h3",{style:{fontSize:.75*o.fontSize+"px"}},r.default[o.topic].intro),(0,e.h)("ol",{style:{fontSize:o.fontSize+"px"},id:"questions"},o.questions.map(function(t,r){return(0,e.h)(n.Question,{topic:o.topic,numbers:t,showAnswer:o.showAnswer,key:r})}))):(0,e.h)("div",null,(0,e.h)("h1",null,"Welcome to Maths DJ!"),(0,e.h)("p",null,"Maths DJ makes it easy to generate questions and answers from a variety of mathematical topics."),(0,e.h)("strong",null,"Choose a topic from the list above to get started!"))),o.fullScreen?"":(0,e.h)("footer",null,(0,e.h)("h2",null,"Instructions:"),(0,e.h)("ul",null,(0,e.h)("li",null,"Select a topic from the list at the top of the page."),(0,e.h)("li",null,"Press the MIX button to generate a new set of questions."),(0,e.h)("li",null,"Click on Show Answers to see the answer to each question."),(0,e.h)("li",null,"Press Full Screen to hide the header, footer and all clutter"),(0,e.h)("li",null,"Click on Print to print out the questions as a worksheet.")),(0,e.h)("p",null,"Made in Manchester with ",(0,e.h)("a",{href:"http://hyperapp.js.org"},"Hyperapp")),(0,e.h)("p",null,(0,e.h)("i",{class:"fab fa-twitter"}),(0,e.h)("a",{href:"http://twitter.com/mathsdj"},"@mathsDJ")," on Twitter"),(0,e.h)("p",null,"© MathsDJ 2018")))};exports.default=l;
},{"hyperapp":17,"./components.js":15,"./topics.js":12}],4:[function(require,module,exports) {
"use strict";require("./css/index.scss");var e=require("hyperapp"),r=require("./js/actions.js"),s=d(r),u=require("./js/state.js"),t=d(u),a=require("./js/view.js"),i=d(a);function d(e){return e&&e.__esModule?e:{default:e}}var c=(0,e.app)(t.default,s.default,i.default,document.body);
},{"./css/index.scss":5,"hyperapp":17,"./js/actions.js":6,"./js/state.js":7,"./js/view.js":8}]},{},[4])