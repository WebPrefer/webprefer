import{r as l}from"./index.Xen38xK-.js";var p={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=l,x=Symbol.for("react.element"),_=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,c=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function a(t,e,o){var r,n={},f=null,i=null;o!==void 0&&(f=""+o),e.key!==void 0&&(f=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)y.call(e,r)&&!v.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:x,type:t,key:f,ref:i,props:n,_owner:c.current}}s.Fragment=_;s.jsx=a;s.jsxs=a;p.exports=s;var d=p.exports;function u(t){var e,o,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var n=t.length;for(e=0;e<n;e++)t[e]&&(o=u(t[e]))&&(r&&(r+=" "),r+=o)}else for(o in t)t[o]&&(r&&(r+=" "),r+=o);return r}function j(){for(var t,e,o=0,r="",n=arguments.length;o<n;o++)(t=arguments[o])&&(e=u(t))&&(r&&(r+=" "),r+=e);return r}function O({className:t,...e}){return d.jsx("div",{className:j("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",t),...e})}export{O as C,j as c,d as j};
