!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react"),require("redux-query"),require("react-redux")):"function"==typeof define&&define.amd?define(["react","redux-query","react-redux"],r):"object"==typeof exports?exports.ReduxQueryReact=r(require("react"),require("redux-query"),require("react-redux")):e.ReduxQueryReact=r(e.React,e.ReduxQuery,e.ReactRedux)}(window,function(e,r,t){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=6)}([function(r,t){r.exports=e},function(e,t){e.exports=r},function(e,r){e.exports=t},function(e,r,t){"use strict";var n=t(4),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function f(e){return n.isMemo(e)?c:i[e.$$typeof]||o}i[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var a=Object.defineProperty,l=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,y=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,b=Object.prototype;e.exports=function e(r,t,n){if("string"!=typeof t){if(b){var o=p(t);o&&o!==b&&e(r,o,n)}var c=l(t);s&&(c=c.concat(s(t)));for(var i=f(r),d=f(t),m=0;m<c.length;++m){var v=c[m];if(!(u[v]||n&&n[v]||d&&d[v]||i&&i[v])){var O=y(t,v);try{a(r,v,O)}catch(e){}}}return r}return r}},function(e,r,t){"use strict";e.exports=t(5)},function(e,r,t){"use strict";
/** @license React v16.8.6
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(r,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,u=n?Symbol.for("react.portal"):60106,c=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,f=n?Symbol.for("react.profiler"):60114,a=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,s=n?Symbol.for("react.async_mode"):60111,y=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,b=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116;function v(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case o:switch(e=e.type){case s:case y:case c:case f:case i:case b:return e;default:switch(e=e&&e.$$typeof){case l:case p:case a:return e;default:return r}}case m:case d:case u:return r}}}function O(e){return v(e)===y}r.typeOf=v,r.AsyncMode=s,r.ConcurrentMode=y,r.ContextConsumer=l,r.ContextProvider=a,r.Element=o,r.ForwardRef=p,r.Fragment=c,r.Lazy=m,r.Memo=d,r.Portal=u,r.Profiler=f,r.StrictMode=i,r.Suspense=b,r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===y||e===f||e===i||e===b||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===d||e.$$typeof===a||e.$$typeof===l||e.$$typeof===p)},r.isAsyncMode=function(e){return O(e)||v(e)===s},r.isConcurrentMode=O,r.isContextConsumer=function(e){return v(e)===l},r.isContextProvider=function(e){return v(e)===a},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},r.isForwardRef=function(e){return v(e)===p},r.isFragment=function(e){return v(e)===c},r.isLazy=function(e){return v(e)===m},r.isMemo=function(e){return v(e)===d},r.isPortal=function(e){return v(e)===u},r.isProfiler=function(e){return v(e)===f},r.isStrictMode=function(e){return v(e)===i},r.isSuspense=function(e){return v(e)===b}},function(e,r,t){"use strict";t.r(r);var n=t(3),o=t.n(n),u=t(0),c=t.n(u),i=t(2),f=t(1),a=function(e){return c.a.useRef(e).current};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=function(e,r){for(var t=0;t<e.length;t++)if(r[t]&&e[t]&&r[t].options&&e[t].options){var n=r[t].options.headers,o=e[t].options.headers;if(null!=n&&null!=o){var u=function(){var e=Object.values(n);if(Object.values(o).some(function(r,t){return e[t]!=r}))return{v:!0}}();if("object"===l(u))return u.v}}};function y(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,o=!1,u=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(t.push(c.value),!r||t.length!==r);n=!0);}catch(e){o=!0,u=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw u}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=function(e){return e},b=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p,t=e?e.map(function(e){if(Object(f.getQueryKey)(e))return r(e)}).filter(Boolean):[],n=y(u.useState(t),2),o=n[0],c=n[1],i=u.useRef(t),a=u.useRef(t.map(f.getQueryKey).filter(Boolean));return u.useEffect(function(){var e=t.map(f.getQueryKey).filter(Boolean);(e.length!==a.current.length||e.some(function(e,r){return a.current[r]!==e})||s(t,i.current))&&(a.current=e,i.current=t,c(t))},[t,i]),o};function d(){return(d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function m(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){O(e,r,t[r])})}return e}function O(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var g=function(e,r){var t=new Set(r);return e.filter(function(e){return!t.has(e)})},h=function(e,r){var t,n=Object(i.useDispatch)(),o=u.useRef([]),c=u.useRef(new Set),l=a(function(e){if(n(Object(f.requestAsync)(e))){var r=Object(f.getQueryKey)(e);r&&c.current.add(r)}}),s=a(function(e){c.current.has(e)&&(n(Object(f.cancelQuery)(e)),c.current.delete(e))}),y=a(function(){}),p=a(function(e){return v({},e,{unstable_preDispatchCallback:y,retry:!0})}),d=b((t=e(r),(Array.isArray(t)?t:[t]).filter(Boolean)),p),O=u.useCallback(function(){d.forEach(function(e){l(v({},e,{force:!0}))})},[l,d]);return u.useEffect(function(){var e=function(e,r){var t=e.map(function(e){return Object(f.getQueryKey)(e)}),n=r.map(function(e){return Object(f.getQueryKey)(e)}),o=n.reduce(function(e,t,n){var o=r[n];return o&&e.set(t,o),e},new Map);return{cancelKeys:g(t,n).filter(Boolean),requestQueryConfigs:g(n,t).filter(Boolean).map(function(e){return o.get(e)}).filter(Boolean)}}(o.current,d),r=e.cancelKeys;e.requestQueryConfigs.forEach(l),r.forEach(function(e){return s(e)}),o.current=d},[s,l,d]),u.useEffect(function(){return function(){m(c.current).forEach(s)}},[s]),O},j=function(e,r){return function(t){var n=r||{},c=n.pure,i=void 0===c||c,f=n.forwardRef,a=void 0!==f&&f,l=function(r){var n=h(e,r);return u.createElement(t,d({},r,{forceRequest:n}))},s=i?u.memo(l):l,y=t.displayName||t.name||"Component",p="ConnectRequest(".concat(y,")");if(s.displayName=p,a){var b=u.forwardRef(function(e,r){return u.createElement(s,d({},e,{forwardedRef:r}))});return b.displayName=p,o()(b,t)}return o()(s,t)}},S=c.a.createContext(null),w=u.memo(function(e){var r=e.queriesSelector,t=u.useMemo(function(){return{queriesSelector:r}},[r]);return u.createElement(S.Provider,{value:t},e.children)}),x=function(e){var r=u.useContext(S);if(!r)throw new Error("Could not find redux-query-react's context. Be sure to render a redux-query <Provider> near the root of your React tree.");var t=r.queriesSelector,n=Object(i.useSelector)(function(r){return f.querySelectors.isPending(t(r),e)}),o=Object(i.useSelector)(function(r){return f.querySelectors.isFinished(t(r),e)}),c=Object(i.useSelector)(function(r){return f.querySelectors.status(t(r),e)}),a=Object(i.useSelector)(function(r){return f.querySelectors.headers(t(r),e)}),l=Object(i.useSelector)(function(r){return f.querySelectors.lastUpdated(t(r),e)}),s=Object(i.useSelector)(function(r){return f.querySelectors.queryCount(t(r),e)});return u.useMemo(function(){return{isPending:n,isFinished:o,status:c,headers:a,lastUpdated:l,queryCount:s}},[a,o,n,l,s,c])};function P(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,o=!1,u=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(t.push(c.value),!r||t.length!==r);n=!0);}catch(e){o=!0,u=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw u}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var q=function(e){var r=Object(i.useDispatch)(),t=P(u.useState(null),2),n=t[0],o=t[1];return[x(n),u.useCallback(function(){var t=e.apply(void 0,arguments);return o(t),r(Object(f.mutateAsync)(t))},[e,r])]};function E(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,o=!1,u=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(t.push(c.value),!r||t.length!==r);n=!0);}catch(e){o=!0,u=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw u}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var R=function(e){return e},C=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:R,t=E(u.useState(e?r(e):null),2),n=t[0],o=t[1],c=u.useRef(Object(f.getQueryKey)(e)),i=u.useRef(e);return u.useEffect(function(){var t=Object(f.getQueryKey)(e);(t!==c.current||s([n],[i.current]))&&(c.current=t,i.current=n,o(e?r(e):null))},[e,r]),n};function A(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){Q(e,r,t[r])})}return e}function Q(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var $=function(e){var r=Object(i.useDispatch)(),t=u.useRef(!1),n=a(function(){t.current=!1}),o=a(function(e){return A({},e,{unstable_preDispatchCallback:n,retry:!0})}),c=C(e,o),l=x(c),s=a(function(e){var n=r(Object(f.requestAsync)(e));return n&&(t.current=!0),n}),y=a(function(e){r(Object(f.cancelQuery)(e)),t.current=!1}),p=u.useCallback(function(){if(c)return s(A({},c,{force:!0}))},[s,c]);return u.useEffect(function(){return c&&s(c),function(){if(t.current){var e=Object(f.getQueryKey)(c);e&&y(e)}}},[y,s,c]),[l,p]},M=function(e){var r=u.useContext(S);if(!r)throw new Error("Could not find redux-query-react's context. Be sure to render a redux-query <Provider> near the root of your React tree.");var t=r.queriesSelector,n=Object(i.useSelector)(t),o=e.some(function(e){return f.querySelectors.isPending(n,e)}),c=e.every(function(e){return f.querySelectors.isFinished(n,e)});return u.useMemo(function(){return{isPending:o,isFinished:c}},[c,o])};function K(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){D(e,r,t[r])})}return e}function D(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var T=function(e,r){var t=new Set(r);return e.filter(function(e){return!t.has(e)})},B=function(e){var r=Object(i.useDispatch)(),t=u.useRef([]),n=u.useRef(new Set),o=a(function(e){if(r(Object(f.requestAsync)(e))){var t=Object(f.getQueryKey)(e);t&&n.current.add(t)}}),c=a(function(e){n.current.has(e)&&(r(Object(f.cancelQuery)(e)),n.current.delete(e))}),l=a(function(){}),s=a(function(e){return _({},e,{unstable_preDispatchCallback:l,retry:!0})}),y=b(e,s),p=M(y),d=u.useCallback(function(){y.forEach(function(e){o(_({},e,{force:!0}))})},[o,y]);return u.useEffect(function(){var e=function(e,r){var t=e.map(function(e){return Object(f.getQueryKey)(e)}),n=r.map(function(e){return Object(f.getQueryKey)(e)}),o=n.reduce(function(e,t,n){var o=r[n];return o&&e.set(t,o),e},new Map);return{cancelKeys:T(t,n).filter(Boolean),requestQueryConfigs:T(n,t).filter(Boolean).map(function(e){return o.get(e)}).filter(Boolean)}}(t.current,y),r=e.cancelKeys;e.requestQueryConfigs.forEach(o),r.forEach(function(e){return c(e)}),t.current=y},[c,o,y]),u.useEffect(function(){return function(){K(n.current).forEach(c)}},[c]),[p,d]};t.d(r,"connectRequest",function(){return j}),t.d(r,"Provider",function(){return w}),t.d(r,"useMutation",function(){return q}),t.d(r,"useRequest",function(){return $}),t.d(r,"useRequests",function(){return B})}])});