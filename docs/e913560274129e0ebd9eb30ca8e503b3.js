require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({3:[function(require,module,exports) {

},{}],14:[function(require,module,exports) {
"use strict";function e(e,n){for(var t,r=[],o=[],i=arguments.length;i-- >2;)r.push(arguments[i]);for(;r.length;)if((t=r.pop())&&t.pop)for(i=t.length;i--;)r.push(t[i]);else null!=t&&!0!==t&&!1!==t&&o.push(t);return"function"==typeof e?e(n||{},o):{nodeName:e,attributes:n||{},children:o,key:n&&n.key}}function n(e,n,t,r){var o,i=[],u=r&&r.children[0]||null,l=u&&function e(n,t){return{nodeName:n.nodeName.toLowerCase(),attributes:{},children:t.call(n.childNodes,function(n){return 3===n.nodeType?n.nodeValue:e(n,t)})}}(u,[].map),a=s(e),f=s(n);return d(function e(n,t,r){for(var o in r)"function"==typeof r[o]?function(e,o){r[e]=function(e){return"function"==typeof(e=o(e))&&(e=e(p(n,a),r)),e&&e!==(t=p(n,a))&&!e.then&&d(a=h(n,s(t,e),a)),e}}(o,r[o]):e(n.concat(o),t[o]=t[o]||{},r[o]=s(r[o]))}([],a,f)),f;function c(){o=!o;var e=t(a,f);for(r&&!o&&(u=function e(n,t,r,o,u,l){if(o===r);else if(null==r)t=n.insertBefore(N(o,u),t);else if(o.nodeName&&o.nodeName===r.nodeName){!function(e,n,t,r){for(var o in s(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&m(e,o,t[o],r,n[o]);t.onupdate&&i.push(function(){t.onupdate(e,n)})}(t,r.attributes,o.attributes,u=u||"svg"===o.nodeName);for(var a=[],f={},c={},d=0;d<r.children.length;d++){a[d]=t.childNodes[d];var h=r.children[d],p=v(h);null!=p&&(f[p]=[a[d],h])}for(var d=0,g=0;g<o.children.length;){var h=r.children[d],y=o.children[g],p=v(h),k=v(y);if(c[p])d++;else if(null==k)null==p&&(e(t,a[d],h,y,u),g++),d++;else{var w=f[k]||[];p===k?(e(t,w[0],w[1],y,u),d++):w[0]?e(t,t.insertBefore(w[0],a[d]),w[1],y,u):e(t,a[d],null,y,u),g++,c[k]=y}}for(;d<r.children.length;){var h=r.children[d];null==v(h)&&b(t,a[d],h),d++}for(var d in f)c[f[d][1].key]||b(t,f[d][0],f[d][1])}else o.nodeName===r.nodeName?t.nodeValue=o:(t=n.insertBefore(N(o,u),l=t),b(n,l,r));return t}(r,u,l,l=e));e=i.pop();)e()}function d(){o||(o=!o,setTimeout(c))}function s(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function h(e,n,t){var r={};return e.length?(r[e[0]]=e.length>1?h(e.slice(1),n,t[e[0]]):n,s(t,r)):n}function p(e,n){for(var t=0;t<e.length;t++)n=n[e[t]];return n}function v(e){return e?e.key:null}function m(e,n,t,r,o){if("key"===n);else if("style"===n)for(var i in s(o,t))e[n][i]=null==t||null==t[i]?"":t[i];else"function"==typeof t||n in e&&!r?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function N(e,n){var t="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName);if(e.attributes){e.attributes.oncreate&&i.push(function(){e.attributes.oncreate(t)});for(var r=0;r<e.children.length;r++)t.appendChild(N(e.children[r],n));for(var o in e.attributes)m(t,o,e.attributes[o],n)}return t}function b(e,n,t,r){function o(){e.removeChild(function e(n,t,r){if(r=t.attributes){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}t.attributes&&(r=t.attributes.onremove)?r(n,o):o()}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.h=e,exports.app=n;
},{}],12:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Percent=exports.Equation=exports.Division=exports.MultDec=exports.Multiplication=exports.Question=void 0;var e=require("hyperapp"),n=require("./topics.js"),r=s(n);function s(e){return e&&e.__esModule?e:{default:e}}var o=exports.Question=function(n){var s=n.topic,o=n.numbers,t=n.showAnswer,u=n.key,i=r.default[s].component;return(0,e.h)(i,{numbers:o,showAnswer:t,key:u})},t=exports.Multiplication=function(n){var r=n.numbers,s=n.showAnswer,o=void 0===s||s,t=n.key;return(0,e.h)("li",{key:t},r[0]," × ",r[1]," ",o?(0,e.h)("span",{class:"answer"},"= ",r[0]*r[1]):null)},u=exports.MultDec=function(n){var r=n.numbers,s=n.showAnswer,o=void 0===s||s,t=n.key;return(0,e.h)("li",{key:t},r[0]/Math.pow(10,r[1]-3)," × ",r[2]/Math.pow(10,r[3]-3)," ",o?(0,e.h)("span",{class:"answer"},"= ",r[0]*r[2]/Math.pow(10,r[1]+r[3]-6)):null)},i=exports.Division=function(n){var r=n.numbers,s=n.showAnswer,o=void 0===s||s,t=n.key;return(0,e.h)("li",{key:t},r[0]*r[1]," ÷ ",r[1]," ",o?(0,e.h)("span",{class:"answer"},"= ",r[0]):null)},l=exports.Equation=function(n){var r=n.numbers,s=n.showAnswer,o=void 0===s||s,t=n.key;return(0,e.h)("li",{key:t},1===r[0]?"":r[0],(0,e.h)("i",null,"x")," + ",r[1]," = ",r[0]*r[2]+r[1]," ",o?(0,e.h)("div",{class:"answer"},(0,e.h)("i",null,"x")," = ",r[2]):null)},a=exports.Percent=function(n){var r=n.numbers,s=n.showAnswer,o=void 0===s||s,t=n.key;return(0,e.h)("li",{key:t},5*r[0],"% of ",20*r[1]," ",o?(0,e.h)("span",{class:"answer"},"= ",r[1]*r[0]):null)};
},{"hyperapp":14,"./topics.js":10}],10:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./components.js"),n={mult:{name:"Multiplication",component:e.Multiplication,numbers:[12,12]},div:{name:"Division",component:e.Division,numbers:[12,12]},eqn:{name:"Equations",component:e.Equation,numbers:[12,12,12]},percent:{name:"Percentages",component:e.Percent,numbers:[20,12]},multdec:{name:"Multiplying Decimals",component:e.MultDec,numbers:[12,6,12,6]}};exports.default=n;
},{"./components.js":12}],9:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.uuid=exports.mix=void 0;var e=require("./topics.js"),r=t(e);function t(e){return e&&e.__esModule?e:{default:e}}var n=function(e,r){!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return void 0===r&&(r=e,e=1),Math.floor((r-e+1)*Math.random())+e},u=exports.mix=function(e){return Array.from({length:10}).map(function(){return r.default[e].numbers.map(function(e){return n(e)})})},o=exports.uuid=function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})};
},{"./topics.js":10}],4:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=require("./utils.js"),t={mix:function(t){return function(e){return{questions:(0,n.mix)(t)}}},toggleShowAnswer:function(){return function(n){return{showAnswer:!n.showAnswer}}},mathJaxify:function(){return function(n,t){console.log("mathjaxifying")}},changeTopic:function(t){return function(e){return{questions:(0,n.mix)(t),topic:t}}}};exports.default=t;
},{"./utils.js":9}],5:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./utils.js"),t={topic:"mult",questions:(0,e.mix)("mult"),showAnswer:!1};exports.default=t;
},{"./utils.js":9}],6:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,o=!1,s=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,s=t}finally{try{!n&&a.return&&a.return()}finally{if(o)throw s}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),e=require("hyperapp"),r=require("./components.js"),n=require("./topics.js"),o=s(n);function s(t){return t&&t.__esModule?t:{default:t}}var i=function(n,s){return(0,e.h)("div",{id:"root"},(0,e.h)("header",null,(0,e.h)("h1",null,"Maths ",(0,e.h)("strong",null,"DJ")),(0,e.h)("div",{id:"topics"},Object.entries(o.default).map(function(r){var n=t(r,2),o=n[0],i=n[1];return(0,e.h)("button",{class:"topic pure-button",onclick:function(){return s.changeTopic(o)}},i.name)}))),(0,e.h)("div",{class:"main"},(0,e.h)("button",{class:"pure-button",onclick:function(){return s.mix(n.topic)}},(0,e.h)("i",{class:"fa fa-sync-alt"}),"MIX"),(0,e.h)("button",{class:"pure-button",onclick:s.toggleShowAnswer},n.showAnswer?(0,e.h)("i",{class:"fa fa-eye-slash"}):(0,e.h)("i",{class:"fa fa-eye"}),n.showAnswer?"Hide Answers":"Show Answers"),(0,e.h)("ol",{id:"questions"},n.questions.map(function(t,o){return(0,e.h)(r.Question,{topic:n.topic,numbers:t,showAnswer:n.showAnswer,key:o})}))),(0,e.h)("footer",null,(0,e.h)("p",null,"Made in Manchester with ",(0,e.h)("i",{class:"fa fa-heart"})," & Hyperapp"),(0,e.h)("p",null,(0,e.h)("i",{class:"fa fa-copyright"})," Maths DJ 2018")))};exports.default=i;
},{"hyperapp":14,"./components.js":12,"./topics.js":10}],2:[function(require,module,exports) {
"use strict";require("./css/index.scss");var e=require("hyperapp"),r=require("./js/actions.js"),s=d(r),u=require("./js/state.js"),t=d(u),a=require("./js/view.js"),i=d(a);function d(e){return e&&e.__esModule?e:{default:e}}var c=(0,e.app)(t.default,s.default,i.default,document.body);
},{"./css/index.scss":3,"hyperapp":14,"./js/actions.js":4,"./js/state.js":5,"./js/view.js":6}]},{},[2])