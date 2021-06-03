(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6xyR":function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),i=a("TSYQ"),o=a.n(i),c=a("q1tI"),l=a.n(c),s=a("vUet"),m=/-(.)/g;var d=function(e){return e[0].toUpperCase()+(t=e,t.replace(m,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function u(e,t){var a=void 0===t?{}:t,i=a.displayName,c=void 0===i?d(e):i,m=a.Component,u=a.defaultProps,f=l.a.forwardRef((function(t,a){var i=t.className,c=t.bsPrefix,d=t.as,u=void 0===d?m||"div":d,f=Object(n.a)(t,["className","bsPrefix","as"]),v=Object(s.a)(c,e);return l.a.createElement(u,Object(r.a)({ref:a,className:o()(i,v)},f))}));return f.defaultProps=u,f.displayName=c,f}var f=function(e){return l.a.forwardRef((function(t,a){return l.a.createElement("div",Object(r.a)({},t,{ref:a,className:o()(t.className,e)}))}))},v=l.a.createContext(null);v.displayName="CardContext";var p=v,b=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,c=e.variant,m=e.as,d=void 0===m?"img":m,u=Object(n.a)(e,["bsPrefix","className","variant","as"]),f=Object(s.a)(a,"card-img");return l.a.createElement(d,Object(r.a)({ref:t,className:o()(c?f+"-"+c:f,i)},u))}));b.displayName="CardImg",b.defaultProps={variant:null};var y=b,h=f("h5"),g=f("h6"),w=u("card-body"),E=u("card-title",{Component:h}),N=u("card-subtitle",{Component:g}),j=u("card-link",{Component:"a"}),x=u("card-text",{Component:"p"}),k=u("card-header"),O=u("card-footer"),T=u("card-img-overlay"),z=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,m=e.bg,d=e.text,u=e.border,f=e.body,v=e.children,b=e.as,y=void 0===b?"div":b,h=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=Object(s.a)(a,"card"),E=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return l.a.createElement(p.Provider,{value:E},l.a.createElement(y,Object(r.a)({ref:t},h,{className:o()(i,g,m&&"bg-"+m,d&&"text-"+d,u&&"border-"+u)}),f?l.a.createElement(w,null,v):v))}));z.displayName="Card",z.defaultProps={body:!1},z.Img=y,z.Title=E,z.Subtitle=N,z.Body=w,z.Link=j,z.Text=x,z.Header=k,z.Footer=O,z.ImgOverlay=T;t.a=z},TCjo:function(e,t,a){"use strict";var r=a("zLVn"),n=a("q1tI"),i=a.n(n);t.a=function(e){var t=e.videoSrcURL,a=e.videoTitle;Object(r.a)(e,["videoSrcURL","videoTitle"]);return i.a.createElement("div",{className:"video embed-responsive embed-responsive-16by9"},i.a.createElement("iframe",{src:t,title:a,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0,autoPlay:!1,autostart:"false"}))}},ehcJ:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),o=a("6xyR");t.a=function(){var e=Object(i.useStaticQuery)("1230572432");return n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"row justify-content-center"},e.allMarkdownRemark.edges.map((function(e){return n.a.createElement("div",{className:"col-md-3 mb-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0",key:e.node.id},n.a.createElement(o.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement("a",{href:e.node.frontmatter.slug},n.a.createElement(o.a.Img,{variant:"top",src:e.node.featuredImg.childImageSharp.fixed.src,alt:e.node.frontmatter.featuredImgAlt})),n.a.createElement(o.a.Body,null,n.a.createElement("a",{href:e.node.frontmatter.slug},n.a.createElement(o.a.Title,null,e.node.frontmatter.title)),n.a.createElement("p",null,"Section ",e.node.frontmatter.section))))}))))}},jOCj:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var r=a("q1tI"),n=a.n(r),i=a("rui/"),o=a("TCjo"),c=a("Bl7J"),l=a("fkrt"),s=a("vrFN"),m=a("ehcJ"),d=a("vguY");function u(){return n.a.createElement(c.a,null,n.a.createElement(i.a,{src:"/teaser_three.mp4"}),n.a.createElement(s.a,{title:"Labels",description:"The Human Touch, a Fitzwilliam Museum exhibition has a variety of interactive components."}),n.a.createElement(d.a,null),n.a.createElement("div",{className:"text-justify container-fluid bg-dark text-white mt-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 p-0 aos-init aos-animate ","data-aos-duration":"600","data-aos":"fade-left","data-aos-delay":"0"},n.a.createElement(o.a,{videoSrcURL:"https://player.vimeo.com/video/486958174",videoTitle:"The Human Touch video wall film",className:"embed-responsive-item"})))),n.a.createElement("div",{className:"text-justify container-fluid bg-white text-dark mt-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 p-0 aos-init aos-animate","data-aos-duration":"600","data-aos":"fade-left","data-aos-delay":"0"},n.a.createElement(o.a,{videoSrcURL:"https://player.vimeo.com/video/483625519",videoTitle:"The Human Touch, Run at the Fitzwilliam Museum",className:"embed-responsive-item"})))),n.a.createElement("div",{className:"container",style:{marginTop:"5rem"}},n.a.createElement("div",{className:"themes"},n.a.createElement(m.a,null))),n.a.createElement(l.a,null))}},vguY:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var r=a("dI71"),n=a("q1tI"),i=a.n(n),o=a("Wbzz"),c=a("wx14"),l=a("zLVn"),s=a("TSYQ"),m=a.n(s),d=a("vUet");var u=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];e.apply(this,r),t.apply(this,r)}}),null)};function f(e){return!e||"#"===e.trim()}var v=i.a.forwardRef((function(e,t){var a=e.as,r=void 0===a?"a":a,n=e.disabled,o=e.onKeyDown,s=Object(l.a)(e,["as","disabled","onKeyDown"]),m=function(e){var t=s.href,a=s.onClick;(n||f(t))&&e.preventDefault(),n?e.stopPropagation():a&&a(e)};return f(s.href)&&(s.role=s.role||"button",s.href=s.href||"#"),n&&(s.tabIndex=-1,s["aria-disabled"]=!0),i.a.createElement(r,Object(c.a)({ref:t},s,{onClick:m,onKeyDown:u((function(e){" "===e.key&&(e.preventDefault(),m(e))}),o)}))}));v.displayName="SafeAnchor";var p=v,b=i.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.variant,n=e.size,o=e.active,s=e.className,u=e.block,f=e.type,v=e.as,b=Object(l.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(d.a)(a,"btn"),h=m()(s,y,o&&"active",r&&y+"-"+r,u&&y+"-block",n&&y+"-"+n);if(b.href)return i.a.createElement(p,Object(c.a)({},b,{as:v,ref:t,className:m()(h,b.disabled&&"disabled")}));t&&(b.ref=t),f?b.type=f:v||(b.type="button");var g=v||"button";return i.a.createElement(g,Object(c.a)({},b,{className:h}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1};var y=b,h=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{src:"https://fitz-cms-images.s3.eu-west-2.amazonaws.com/fitztht.png",alt:"Fitzwilliam Museum",width:"150"}),i.a.createElement("h1",{className:"cover-heading",style:{fontSize:"4rem"}},"The Human Touch"),i.a.createElement("p",{className:"lead cover"},"Making Art | Leaving Traces"),i.a.createElement(y,{variant:"btnBook"},i.a.createElement(o.Link,{to:"https://tickets.museums.cam.ac.uk/overview/thehumantouch"},"Book your tickets")),i.a.createElement("p",{className:"lead cover"},"18 May 2021 to 1 August 2021"))},t}(n.Component)},vrFN:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("qhky"),o=a("Wbzz");function c(e){var t,a,r=e.description,c=e.lang,l=e.meta,s=e.title,m=Object(o.useStaticQuery)("32046230").site,d=r||m.siteMetadata.description,u=null===(t=m.siteMetadata)||void 0===t?void 0:t.title,f=m.siteMetadata.image;return n.a.createElement(i.a,{htmlAttributes:{lang:c},title:s,image:f,titleTemplate:u?"%s | "+u:null,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(a=m.siteMetadata)||void 0===a?void 0:a.author)||""},{name:"twitter:image",content:f},{name:"og:image",content:f},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(l)})}c.defaultProps={lang:"en",meta:[],description:"",image:null},t.a=c}}]);
//# sourceMappingURL=component---src-pages-labels-js-967ae4e6217aeef14a2c.js.map