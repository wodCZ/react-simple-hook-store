!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.simpleHookStore=e(require("react")):t.simpleHookStore=e(t.react)}("undefined"!=typeof self?self:this,function(r){return u={},o.m=n=[function(t,e){t.exports=r},function(t,e){},function(t,e,r){"use strict";var d=Array.isArray,b=Object.keys,y=Object.prototype.hasOwnProperty;t.exports=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){var n,o,u,i=d(e),f=d(r);if(i&&f){if((o=e.length)!=r.length)return!1;for(n=o;0!=n--;)if(!t(e[n],r[n]))return!1;return!0}if(i!=f)return!1;var c=e instanceof Date,a=r instanceof Date;if(c!=a)return!1;if(c&&a)return e.getTime()==r.getTime();var s=e instanceof RegExp,l=r instanceof RegExp;if(s!=l)return!1;if(s&&l)return e.toString()==r.toString();var p=b(e);if((o=p.length)!==b(r).length)return!1;for(n=o;0!=n--;)if(!y.call(r,p[n]))return!1;for(n=o;0!=n--;)if(!t(e[u=p[n]],r[u]))return!1;return!0}return e!=e&&r!=r}},function(t,e,r){"use strict";r.r(e),r.d(e,"createStore",function(){return a});var i=r(0),n=r(2),f=r.n(n),o=r(1);for(var u in o)["createStore","default"].indexOf(u)<0&&function(t){r.d(e,t,function(){return o[t]})}(u);var c=function(){return(c=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};var a=function(t,e){if("object"!=typeof t)throw new Error("Only objects are supported as state, e.g. { counter: 0 }");var r={state:t,listeners:[]};return r.setState=function(e,t){e.state=c(c({},e.state),t),e.listeners.forEach(function(t){t.run(e.state)})}.bind(null,r),r.actions=function r(n,o){var u={};return Object.keys(o).forEach(function(t){if("function"==typeof o[t]){var e=o[t];u[t]=e.bind(null,n)}"object"==typeof o[t]&&(u[t]=r(n,o[t]))}),u}(r,e),{useStore:function(t,n,e){var o=n?n(t.state):t.state,r=Object(i.useMemo)(function(){return e?e(t.actions):t.actions},[e,t.actions]),u=Object(i.useState)(o)[1];return Object(i.useEffect)(function(){var r={oldState:o};return r.run=n?function(t){var e=n(t);f()(e,r.oldState)||(r.oldState=e,u(e))}:u,t.listeners.push(r),function(){t.listeners=t.listeners.filter(function(t){return t!==r})}},[]),[o,r]}.bind(null,r),store:r}}}],o.c=u,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=3);function o(t){if(u[t])return u[t].exports;var e=u[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}var n,u});