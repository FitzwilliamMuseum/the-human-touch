(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"6xyR":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),l=t.n(c),i=t("q1tI"),o=t.n(i),s=t("vUet"),m=/-(.)/g;var d=function(e){return e[0].toUpperCase()+(a=e,a.replace(m,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function u(e,a){var t=void 0===a?{}:a,c=t.displayName,i=void 0===c?d(e):c,m=t.Component,u=t.defaultProps,f=o.a.forwardRef((function(a,t){var c=a.className,i=a.bsPrefix,d=a.as,u=void 0===d?m||"div":d,f=Object(n.a)(a,["className","bsPrefix","as"]),v=Object(s.a)(i,e);return o.a.createElement(u,Object(r.a)({ref:t,className:l()(c,v)},f))}));return f.defaultProps=u,f.displayName=i,f}var f=function(e){return o.a.forwardRef((function(a,t){return o.a.createElement("div",Object(r.a)({},a,{ref:t,className:l()(a.className,e)}))}))},v=o.a.createContext(null);v.displayName="CardContext";var b=v,p=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,i=e.variant,m=e.as,d=void 0===m?"img":m,u=Object(n.a)(e,["bsPrefix","className","variant","as"]),f=Object(s.a)(t,"card-img");return o.a.createElement(d,Object(r.a)({ref:a,className:l()(i?f+"-"+i:f,c)},u))}));p.displayName="CardImg",p.defaultProps={variant:null};var h=p,E=f("h5"),y=f("h6"),g=u("card-body"),N=u("card-title",{Component:E}),w=u("card-subtitle",{Component:y}),x=u("card-link",{Component:"a"}),k=u("card-text",{Component:"p"}),j=u("card-header"),O=u("card-footer"),I=u("card-img-overlay"),C=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,m=e.bg,d=e.text,u=e.border,f=e.body,v=e.children,p=e.as,h=void 0===p?"div":p,E=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=Object(s.a)(t,"card"),N=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return o.a.createElement(b.Provider,{value:N},o.a.createElement(h,Object(r.a)({ref:a},E,{className:l()(c,y,m&&"bg-"+m,d&&"text-"+d,u&&"border-"+u)}),f?o.a.createElement(g,null,v):v))}));C.displayName="Card",C.defaultProps={body:!1},C.Img=h,C.Title=N,C.Subtitle=w,C.Body=g,C.Link=x,C.Text=k,C.Header=j,C.Footer=O,C.ImgOverlay=I;a.a=C},LA6i:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return u}));var r=t("q1tI"),n=t.n(r),c=t("Bl7J"),l=t("vrFN"),i=t("ehcJ"),o=t("fkrt"),s=t("rui/"),m=t("sD7D"),d=t("vguY");function u(e){var a=e.data.markdownRemark,t=a.frontmatter,r=a.html,u=a.wordCount;return n.a.createElement(c.a,null,n.a.createElement(s.a,{src:"/teaser_two.mp4",className:"fullscreen"}),n.a.createElement(l.a,{title:t.title,description:t.description}),n.a.createElement(d.a,null),n.a.createElement("div",{className:" container-fluid bg-white text-dark p-5 ml-0 mr-0 mt-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 p-3 aos-init aos-animate ","data-aos-duration":"600","data-aos":"fade-left","data-aos-delay":"0"},n.a.createElement("h1",null,t.title),n.a.createElement("div",{className:"blog-post-content text-justify",dangerouslySetInnerHTML:{__html:r}}),n.a.createElement("p",{className:"sr-only"},"Word count ",u.words)))),n.a.createElement(m.a,{sectionIn:t.section}),n.a.createElement("div",{className:"bg-white p-2"},n.a.createElement("h2",{className:"text-dark text-center"},"Sections of the exhibition")),n.a.createElement("div",{className:"container",style:{marginTop:"5rem"}},n.a.createElement("div",{className:"themes"},n.a.createElement(i.a,null))),n.a.createElement(o.a,null))}},ehcJ:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),c=t("Wbzz"),l=t("6xyR");a.a=function(){var e=Object(c.useStaticQuery)("1230572432");return n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"row justify-content-center"},e.allMarkdownRemark.edges.map((function(e){return n.a.createElement("div",{className:"col-md-3 mb-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0",key:e.node.id},n.a.createElement(l.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement("a",{href:e.node.frontmatter.slug},n.a.createElement(l.a.Img,{variant:"top",src:e.node.featuredImg.childImageSharp.fixed.src,alt:e.node.frontmatter.featuredImgAlt})),n.a.createElement(l.a.Body,null,n.a.createElement("a",{href:e.node.frontmatter.slug},n.a.createElement(l.a.Title,null,e.node.frontmatter.title)))))}))))}},sD7D:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),c=t("Wbzz"),l=t("6xyR");a.a=function(e){var a=e.sectionIn,t=Object(c.useStaticQuery)("2602105880",{section:a});return n.a.createElement("div",{className:"col-md-12 bg-white pt-3"},n.a.createElement("h2",{className:"text-dark text-center"},"Selected objects from this section"),n.a.createElement("div",{className:"row bg-white p-3 "},t.allDirectusHumantouch.edges.map((function(e){var t="/exhibition/labels/"+e.node.slug;if(e.node.section_name===a)return n.a.createElement("div",{className:"col-md-3 mb-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0",key:e.node.id},n.a.createElement(l.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement("a",{href:t},n.a.createElement(l.a.Img,{variant:"top",src:e.node.hero_image.data.thumbnails[2].url,alt:e.node.title})),n.a.createElement(l.a.Body,null,n.a.createElement("a",{href:t},n.a.createElement(l.a.Title,null,e.node.title)))))}))))}},vguY:function(e,a,t){"use strict";t.d(a,"a",(function(){return E}));var r=t("dI71"),n=t("q1tI"),c=t.n(n),l=t("Wbzz"),i=t("wx14"),o=t("zLVn"),s=t("TSYQ"),m=t.n(s),d=t("vUet");var u=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return null!=e})).reduce((function(e,a){if("function"!=typeof a)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?a:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];e.apply(this,r),a.apply(this,r)}}),null)};function f(e){return!e||"#"===e.trim()}var v=c.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"a":t,n=e.disabled,l=e.onKeyDown,s=Object(o.a)(e,["as","disabled","onKeyDown"]),m=function(e){var a=s.href,t=s.onClick;(n||f(a))&&e.preventDefault(),n?e.stopPropagation():t&&t(e)};return f(s.href)&&(s.role=s.role||"button",s.href=s.href||"#"),n&&(s.tabIndex=-1,s["aria-disabled"]=!0),c.a.createElement(r,Object(i.a)({ref:a},s,{onClick:m,onKeyDown:u((function(e){" "===e.key&&(e.preventDefault(),m(e))}),l)}))}));v.displayName="SafeAnchor";var b=v,p=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.variant,n=e.size,l=e.active,s=e.className,u=e.block,f=e.type,v=e.as,p=Object(o.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(d.a)(t,"btn"),E=m()(s,h,l&&"active",r&&h+"-"+r,u&&h+"-block",n&&h+"-"+n);if(p.href)return c.a.createElement(b,Object(i.a)({},p,{as:v,ref:a,className:m()(E,p.disabled&&"disabled")}));a&&(p.ref=a),f?p.type=f:v||(p.type="button");var y=v||"button";return c.a.createElement(y,Object(i.a)({},p,{className:E}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1};var h=p,E=function(e){function a(){return e.apply(this,arguments)||this}return Object(r.a)(a,e),a.prototype.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:"https://fitz-cms-images.s3.eu-west-2.amazonaws.com/fitztht.png",alt:"Fitzwilliam Museum",width:"150"}),c.a.createElement("h1",{className:"cover-heading",style:{fontSize:"4rem"}},"The Human Touch"),c.a.createElement("p",{className:"lead cover"},"Making Art | Leaving Traces"),c.a.createElement(h,{variant:"btnBook"},c.a.createElement(l.Link,{to:"https://tickets.museums.cam.ac.uk/overview/thehumantouch"},"Book your tickets")),c.a.createElement("p",{className:"lead cover"},"18 May 2021 to 1 August 2021"))},a}(n.Component)}}]);
//# sourceMappingURL=component---src-templates-page-template-js-4bad15cab414f367fb70.js.map