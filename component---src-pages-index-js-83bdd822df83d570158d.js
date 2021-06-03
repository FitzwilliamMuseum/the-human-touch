/*! For license information please see component---src-pages-index-js-83bdd822df83d570158d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RXBc:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),r=n.n(a),i=n("Bl7J"),o=n("vrFN"),c=n("vguY");e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Home",description:"The background to the Fitzwilliam Museum's brand new exhibition, the Human Touch"}),r.a.createElement(c.a,null))}},TSYQ:function(t,e,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var i=typeof a;if("string"===i||"number"===i)t.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&t.push(o)}else if("object"===i)for(var c in a)n.call(a,c)&&a[c]&&t.push(c)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(a=function(){return r}.apply(e,[]))||(t.exports=a)}()},cWnB:function(t,e,n){"use strict";var a=n("wx14"),r=n("zLVn"),i=n("TSYQ"),o=n.n(i),c=n("q1tI"),u=n.n(c),s=n("vUet");var l=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter((function(t){return null!=t})).reduce((function(t,e){if("function"!=typeof e)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===t?e:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];t.apply(this,a),e.apply(this,a)}}),null)};function f(t){return!t||"#"===t.trim()}var m=u.a.forwardRef((function(t,e){var n=t.as,i=void 0===n?"a":n,o=t.disabled,c=t.onKeyDown,s=Object(r.a)(t,["as","disabled","onKeyDown"]),m=function(t){var e=s.href,n=s.onClick;(o||f(e))&&t.preventDefault(),o?t.stopPropagation():n&&n(t)};return f(s.href)&&(s.role=s.role||"button",s.href=s.href||"#"),o&&(s.tabIndex=-1,s["aria-disabled"]=!0),u.a.createElement(i,Object(a.a)({ref:e},s,{onClick:m,onKeyDown:l((function(t){" "===t.key&&(t.preventDefault(),m(t))}),c)}))}));m.displayName="SafeAnchor";var p=m,d=u.a.forwardRef((function(t,e){var n=t.bsPrefix,i=t.variant,c=t.size,l=t.active,f=t.className,m=t.block,d=t.type,v=t.as,h=Object(r.a)(t,["bsPrefix","variant","size","active","className","block","type","as"]),b=Object(s.a)(n,"btn"),y=o()(f,b,l&&"active",i&&b+"-"+i,m&&b+"-block",c&&b+"-"+c);if(h.href)return u.a.createElement(p,Object(a.a)({},h,{as:v,ref:e,className:o()(y,h.disabled&&"disabled")}));e&&(h.ref=e),d?h.type=d:v||(h.type="button");var g=v||"button";return u.a.createElement(g,Object(a.a)({},h,{className:y}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1};e.a=d},vUet:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("wx14");var a=n("q1tI"),r=n.n(a),i=r.a.createContext({});i.Consumer,i.Provider;function o(t,e){var n=Object(a.useContext)(i);return t||n[e]||e}},vguY:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n("dI71"),r=n("q1tI"),i=n.n(r),o=n("Wbzz"),c=n("cWnB"),u=function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{src:"https://fitz-cms-images.s3.eu-west-2.amazonaws.com/fitztht.png",alt:"Fitzwilliam Museum",width:"150"}),i.a.createElement("h1",{className:"cover-heading",style:{fontSize:"4rem"}},"The Human Touch"),i.a.createElement("p",{className:"lead cover"},"Making Art | Leaving Traces"),i.a.createElement(c.a,{variant:"btnBook"},i.a.createElement(o.Link,{to:"https://tickets.museums.cam.ac.uk/overview/thehumantouch"},"Book your tickets")),i.a.createElement("p",{className:"lead cover"},"18 May 2021 to 1 August 2021"))},e}(r.Component)},vrFN:function(t,e,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("qhky"),o=n("Wbzz");function c(t){var e,n,a=t.description,c=t.lang,u=t.meta,s=t.title,l=Object(o.useStaticQuery)("32046230").site,f=a||l.siteMetadata.description,m=null===(e=l.siteMetadata)||void 0===e?void 0:e.title,p=l.siteMetadata.image;return r.a.createElement(i.a,{htmlAttributes:{lang:c},title:s,image:p,titleTemplate:m?"%s | "+m:null,meta:[{name:"description",content:f},{property:"og:title",content:s},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=l.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:image",content:p},{name:"og:image",content:p},{name:"twitter:title",content:s},{name:"twitter:description",content:f}].concat(u)})}c.defaultProps={lang:"en",meta:[],description:"",image:null},e.a=c},wx14:function(t,e,n){"use strict";function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return a}))},zLVn:function(t,e,n){"use strict";function a(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}n.d(e,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-index-js-83bdd822df83d570158d.js.map