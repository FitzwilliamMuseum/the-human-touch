(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6xyR":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),i=t("TSYQ"),o=t.n(i),l=t("q1tI"),c=t.n(l),s=t("vUet"),m=/-(.)/g;var d=function(e){return e[0].toUpperCase()+(a=e,a.replace(m,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function u(e,a){var t=void 0===a?{}:a,i=t.displayName,l=void 0===i?d(e):i,m=t.Component,u=t.defaultProps,f=c.a.forwardRef((function(a,t){var i=a.className,l=a.bsPrefix,d=a.as,u=void 0===d?m||"div":d,f=Object(n.a)(a,["className","bsPrefix","as"]),v=Object(s.a)(l,e);return c.a.createElement(u,Object(r.a)({ref:t,className:o()(i,v)},f))}));return f.defaultProps=u,f.displayName=l,f}var f=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(r.a)({},a,{ref:t,className:o()(a.className,e)}))}))},v=c.a.createContext(null);v.displayName="CardContext";var p=v,b=c.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,l=e.variant,m=e.as,d=void 0===m?"img":m,u=Object(n.a)(e,["bsPrefix","className","variant","as"]),f=Object(s.a)(t,"card-img");return c.a.createElement(d,Object(r.a)({ref:a,className:o()(l?f+"-"+l:f,i)},u))}));b.displayName="CardImg",b.defaultProps={variant:null};var h=b,y=f("h5"),E=f("h6"),N=u("card-body"),w=u("card-title",{Component:y}),g=u("card-subtitle",{Component:E}),j=u("card-link",{Component:"a"}),x=u("card-text",{Component:"p"}),k=u("card-header"),O=u("card-footer"),T=u("card-img-overlay"),C=c.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,m=e.bg,d=e.text,u=e.border,f=e.body,v=e.children,b=e.as,h=void 0===b?"div":b,y=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),E=Object(s.a)(t,"card"),w=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:E+"-header"}}),[E]);return c.a.createElement(p.Provider,{value:w},c.a.createElement(h,Object(r.a)({ref:a},y,{className:o()(i,E,m&&"bg-"+m,d&&"text-"+d,u&&"border-"+u)}),f?c.a.createElement(N,null,v):v))}));C.displayName="Card",C.defaultProps={body:!1},C.Img=h,C.Title=w,C.Subtitle=g,C.Body=N,C.Link=j,C.Text=x,C.Header=k,C.Footer=O,C.ImgOverlay=T;a.a=C},TCjo:function(e,a,t){"use strict";var r=t("zLVn"),n=t("q1tI"),i=t.n(n);a.a=function(e){var a=e.videoSrcURL,t=e.videoTitle;Object(r.a)(e,["videoSrcURL","videoTitle"]);return i.a.createElement("div",{className:"video embed-responsive embed-responsive-16by9"},i.a.createElement("iframe",{src:a,title:t,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0,autoPlay:!1,autostart:"false"}))}},ehcJ:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),i=t("Wbzz"),o=t("6xyR");a.a=function(){var e=Object(i.useStaticQuery)("1230572432");return n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"row justify-content-center"},e.allMarkdownRemark.edges.map((function(e){return n.a.createElement("div",{className:"col-md-3 mb-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0",key:e.node.id},n.a.createElement(o.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement("a",{href:e.node.frontmatter.slug},n.a.createElement(o.a.Img,{variant:"top",src:e.node.featuredImg.childImageSharp.fixed.src,alt:e.node.frontmatter.featuredImgAlt})),n.a.createElement(o.a.Body,null,n.a.createElement("a",{href:e.node.frontmatter.slug},n.a.createElement(o.a.Title,null,e.node.frontmatter.title)),n.a.createElement("p",null,"Section ",e.node.frontmatter.section))))}))))}},jOCj:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return u}));var r=t("q1tI"),n=t.n(r),i=t("rui/"),o=t("TCjo"),l=t("Bl7J"),c=t("fkrt"),s=t("vrFN"),m=t("ehcJ"),d=t("vguY");function u(){return n.a.createElement(l.a,null,n.a.createElement(i.a,{src:"/teaser_three.mp4"}),n.a.createElement(s.a,{title:"Labels",description:"The Human Touch, a Fitzwilliam Museum exhibition has a variety of interactive components."}),n.a.createElement(d.a,null),n.a.createElement("div",{className:"text-justify container-fluid bg-dark text-white mt-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 p-0 aos-init aos-animate ","data-aos-duration":"600","data-aos":"fade-left","data-aos-delay":"0"},n.a.createElement(o.a,{videoSrcURL:"https://player.vimeo.com/video/486958174",videoTitle:"The Human Touch video wall film",className:"embed-responsive-item"})))),n.a.createElement("div",{className:"text-justify container-fluid bg-white text-dark mt-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 p-0 aos-init aos-animate","data-aos-duration":"600","data-aos":"fade-left","data-aos-delay":"0"},n.a.createElement(o.a,{videoSrcURL:"https://player.vimeo.com/video/483625519",videoTitle:"The Human Touch, Run at the Fitzwilliam Museum",className:"embed-responsive-item"})))),n.a.createElement("div",{className:"container",style:{marginTop:"5rem"}},n.a.createElement("div",{className:"themes"},n.a.createElement(m.a,null))),n.a.createElement(c.a,null))}},vguY:function(e,a,t){"use strict";t.d(a,"a",(function(){return y}));var r=t("dI71"),n=t("q1tI"),i=t.n(n),o=t("Wbzz"),l=t("wx14"),c=t("zLVn"),s=t("TSYQ"),m=t.n(s),d=t("vUet");var u=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return null!=e})).reduce((function(e,a){if("function"!=typeof a)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?a:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];e.apply(this,r),a.apply(this,r)}}),null)};function f(e){return!e||"#"===e.trim()}var v=i.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"a":t,n=e.disabled,o=e.onKeyDown,s=Object(c.a)(e,["as","disabled","onKeyDown"]),m=function(e){var a=s.href,t=s.onClick;(n||f(a))&&e.preventDefault(),n?e.stopPropagation():t&&t(e)};return f(s.href)&&(s.role=s.role||"button",s.href=s.href||"#"),n&&(s.tabIndex=-1,s["aria-disabled"]=!0),i.a.createElement(r,Object(l.a)({ref:a},s,{onClick:m,onKeyDown:u((function(e){" "===e.key&&(e.preventDefault(),m(e))}),o)}))}));v.displayName="SafeAnchor";var p=v,b=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.variant,n=e.size,o=e.active,s=e.className,u=e.block,f=e.type,v=e.as,b=Object(c.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(d.a)(t,"btn"),y=m()(s,h,o&&"active",r&&h+"-"+r,u&&h+"-block",n&&h+"-"+n);if(b.href)return i.a.createElement(p,Object(l.a)({},b,{as:v,ref:a,className:m()(y,b.disabled&&"disabled")}));a&&(b.ref=a),f?b.type=f:v||(b.type="button");var E=v||"button";return i.a.createElement(E,Object(l.a)({},b,{className:y}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1};var h=b,y=function(e){function a(){return e.apply(this,arguments)||this}return Object(r.a)(a,e),a.prototype.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{src:"https://fitz-cms-images.s3.eu-west-2.amazonaws.com/fitztht.png",alt:"Fitzwilliam Museum",width:"150"}),i.a.createElement("h1",{className:"cover-heading",style:{fontSize:"4rem"}},"The Human Touch"),i.a.createElement("p",{className:"lead cover"},"Making Art | Leaving Traces"),i.a.createElement(h,{variant:"btnBook"},i.a.createElement(o.Link,{to:"https://tickets.museums.cam.ac.uk/overview/thehumantouch"},"Book your tickets")),i.a.createElement("p",{className:"lead cover"},"18 May 2021 to 1 August 2021"))},a}(n.Component)}}]);
//# sourceMappingURL=component---src-pages-labels-js-7578e5fa283f0b3c38c0.js.map