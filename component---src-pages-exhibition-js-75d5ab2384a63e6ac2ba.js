/*! For license information please see component---src-pages-exhibition-js-75d5ab2384a63e6ac2ba.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"6xyR":function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),i=a("TSYQ"),o=a.n(i),c=a("q1tI"),s=a.n(c),l=s.a.createContext({});l.Consumer,l.Provider;function u(e,t){var a=Object(c.useContext)(l);return e||a[t]||t}var m=/-(.)/g;var d=["className","bsPrefix","as"],f=function(e){return e[0].toUpperCase()+(t=e,t.replace(m,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function p(e,t){var a=void 0===t?{}:t,i=a.displayName,c=void 0===i?f(e):i,l=a.Component,m=a.defaultProps,p=s.a.forwardRef((function(t,a){var i=t.className,c=t.bsPrefix,m=t.as,f=void 0===m?l||"div":m,p=Object(n.a)(t,d),v=u(c,e);return s.a.createElement(f,Object(r.a)({ref:a,className:o()(i,v)},p))}));return p.defaultProps=m,p.displayName=c,p}var v=function(e){return s.a.forwardRef((function(t,a){return s.a.createElement("div",Object(r.a)({},t,{ref:a,className:o()(t.className,e)}))}))},h=s.a.createContext(null);h.displayName="CardContext";var b=h,g=["bsPrefix","className","variant","as"],y=s.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,c=e.variant,l=e.as,m=void 0===l?"img":l,d=Object(n.a)(e,g),f=u(a,"card-img");return s.a.createElement(m,Object(r.a)({ref:t,className:o()(c?f+"-"+c:f,i)},d))}));y.displayName="CardImg",y.defaultProps={variant:null};var x=y,E=["bsPrefix","className","bg","text","border","body","children","as"],N=v("h5"),w=v("h6"),O=p("card-body"),j=p("card-title",{Component:N}),C=p("card-subtitle",{Component:w}),P=p("card-link",{Component:"a"}),k=p("card-text",{Component:"p"}),I=p("card-header"),T=p("card-footer"),z=p("card-img-overlay"),S=s.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,l=e.bg,m=e.text,d=e.border,f=e.body,p=e.children,v=e.as,h=void 0===v?"div":v,g=Object(n.a)(e,E),y=u(a,"card"),x=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return s.a.createElement(b.Provider,{value:x},s.a.createElement(h,Object(r.a)({ref:t},g,{className:o()(i,y,l&&"bg-"+l,m&&"text-"+m,d&&"border-"+d)}),f?s.a.createElement(O,null,p):p))}));S.displayName="Card",S.defaultProps={body:!1},S.Img=x,S.Title=j,S.Subtitle=C,S.Body=O,S.Link=P,S.Text=k,S.Header=I,S.Footer=T,S.ImgOverlay=z;t.a=S},TSYQ:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var o=n.apply(null,r);o&&e.push(o)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var c in r)a.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},ehcJ:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),o=a("6xyR");t.a=function(){var e=Object(i.useStaticQuery)("1230572432");return n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"row justify-content-center"},e.allMarkdownRemark.edges.map((function(e){return n.a.createElement("div",{className:"col-md-3 mb-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0",key:e.node.id},n.a.createElement(o.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement("a",{href:e.node.frontmatter.slug},n.a.createElement(o.a.Img,{variant:"top",src:e.node.featuredImg.childImageSharp.fixed.src,alt:e.node.frontmatter.featuredImgAlt})),n.a.createElement(o.a.Body,null,n.a.createElement("a",{href:e.node.frontmatter.slug},n.a.createElement(o.a.Title,null,e.node.frontmatter.title)))))}))))}},un8b:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=a("Bl7J"),o=a("vrFN"),c=a("vguY"),s=a("fkrt"),l=a("ehcJ");t.default=function(){return n.a.createElement(i.a,null,n.a.createElement(o.a,{title:"Home",description:"The background to the Fitzwilliam Museum's brand new exhibition, the Human Touch"}),n.a.createElement(c.a,null),n.a.createElement("div",{className:"bg-white p-2"},n.a.createElement("h2",{className:"text-dark text-center"},"Sections of the exhibition")),n.a.createElement("div",{className:"container",style:{marginTop:"5rem"}},n.a.createElement("div",{className:"themes"},n.a.createElement(l.a,null))),n.a.createElement(s.a,null))}},vguY:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("dI71"),n=a("q1tI"),i=a.n(n),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{src:"https://fitz-cms-images.s3.eu-west-2.amazonaws.com/fitztht.png",alt:"Fitzwilliam Museum",width:"150"}),i.a.createElement("h1",{className:"cover-heading",style:{fontSize:"4rem"}},"The Human Touch"),i.a.createElement("p",{className:"lead cover"},"Making Art | Leaving Traces"),i.a.createElement("p",{className:"lead cover"},"This exhibition ran from the 18 May 2021 to 1 August 2021"))},t}(n.Component)},wx14:function(e,t,a){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return r}))},zLVn:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=component---src-pages-exhibition-js-75d5ab2384a63e6ac2ba.js.map