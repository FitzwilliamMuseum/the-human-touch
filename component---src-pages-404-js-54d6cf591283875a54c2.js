(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{cWnB:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),i=a("TSYQ"),o=a.n(i),c=a("q1tI"),l=a.n(c),s=a("vUet");var u=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}}),null)};function m(e){return!e||"#"===e.trim()}var d=l.a.forwardRef((function(e,t){var a=e.as,i=void 0===a?"a":a,o=e.disabled,c=e.onKeyDown,s=Object(r.a)(e,["as","disabled","onKeyDown"]),d=function(e){var t=s.href,a=s.onClick;(o||m(t))&&e.preventDefault(),o?e.stopPropagation():a&&a(e)};return m(s.href)&&(s.role=s.role||"button",s.href=s.href||"#"),o&&(s.tabIndex=-1,s["aria-disabled"]=!0),l.a.createElement(i,Object(n.a)({ref:t},s,{onClick:d,onKeyDown:u((function(e){" "===e.key&&(e.preventDefault(),d(e))}),c)}))}));d.displayName="SafeAnchor";var f=d,p=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.variant,c=e.size,u=e.active,m=e.className,d=e.block,p=e.type,v=e.as,b=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(s.a)(a,"btn"),y=o()(m,h,u&&"active",i&&h+"-"+i,d&&h+"-block",c&&h+"-"+c);if(b.href)return l.a.createElement(f,Object(n.a)({},b,{as:v,ref:t,className:o()(y,b.disabled&&"disabled")}));t&&(b.ref=t),p?b.type=p:v||(b.type="button");var w=v||"button";return l.a.createElement(w,Object(n.a)({},b,{className:y}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=p},vguY:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("dI71"),r=a("q1tI"),i=a.n(r),o=a("Wbzz"),c=a("cWnB"),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{src:"https://fitz-cms-images.s3.eu-west-2.amazonaws.com/fitztht.png",alt:"Fitzwilliam Museum",width:"150"}),i.a.createElement("h1",{className:"cover-heading",style:{fontSize:"4rem"}},"The Human Touch"),i.a.createElement("p",{className:"lead cover"},"Making Art | Leaving Traces"),i.a.createElement(c.a,{variant:"btnBook"},i.a.createElement(o.Link,{to:"https://tickets.museums.cam.ac.uk/overview/thehumantouch"},"Book your tickets")),i.a.createElement("p",{className:"lead cover"},"18 May 2021 to 1 August 2021"))},t}(r.Component)},vrFN:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("qhky"),o=a("Wbzz");function c(e){var t,a,n=e.description,c=e.lang,l=e.meta,s=e.title,u=Object(o.useStaticQuery)("32046230").site,m=n||u.siteMetadata.description,d=null===(t=u.siteMetadata)||void 0===t?void 0:t.title,f=u.siteMetadata.image;return r.a.createElement(i.a,{htmlAttributes:{lang:c},title:s,image:f,titleTemplate:d?"%s | "+d:null,meta:[{name:"description",content:m},{property:"og:title",content:s},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(a=u.siteMetadata)||void 0===a?void 0:a.author)||""},{name:"twitter:image",content:f},{name:"og:image",content:f},{name:"twitter:title",content:s},{name:"twitter:description",content:m}].concat(l)})}c.defaultProps={lang:"en",meta:[],description:"",image:null},t.a=c},w2l6:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("Bl7J"),o=a("vrFN"),c=a("vguY"),l=a("fkrt");t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement(c.a,null),r.a.createElement("div",{className:"text-justify container-fluid bg-white text-dark p-5 ml-0 mr-0 mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 p-3 aos-init aos-animate text-center","data-aos-duration":"600","data-aos":"fade-left","data-aos-delay":"0"},r.a.createElement("h1",null,"404: Not Found"),r.a.createElement("p",null,"You just hit a route that doesn't exist...")))),r.a.createElement(l.a,null))}}}]);
//# sourceMappingURL=component---src-pages-404-js-54d6cf591283875a54c2.js.map