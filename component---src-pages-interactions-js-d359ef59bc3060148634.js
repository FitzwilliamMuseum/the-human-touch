(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6xyR":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),l=t("TSYQ"),i=t.n(l),o=t("q1tI"),c=t.n(o),s=t("vUet"),m=/-(.)/g;var d=function(e){return e[0].toUpperCase()+(a=e,a.replace(m,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function u(e,a){var t=void 0===a?{}:a,l=t.displayName,o=void 0===l?d(e):l,m=t.Component,u=t.defaultProps,f=c.a.forwardRef((function(a,t){var l=a.className,o=a.bsPrefix,d=a.as,u=void 0===d?m||"div":d,f=Object(n.a)(a,["className","bsPrefix","as"]),v=Object(s.a)(o,e);return c.a.createElement(u,Object(r.a)({ref:t,className:i()(l,v)},f))}));return f.defaultProps=u,f.displayName=o,f}var f=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(r.a)({},a,{ref:t,className:i()(a.className,e)}))}))},v=c.a.createContext(null);v.displayName="CardContext";var h=v,b=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,o=e.variant,m=e.as,d=void 0===m?"img":m,u=Object(n.a)(e,["bsPrefix","className","variant","as"]),f=Object(s.a)(t,"card-img");return c.a.createElement(d,Object(r.a)({ref:a,className:i()(o?f+"-"+o:f,l)},u))}));b.displayName="CardImg",b.defaultProps={variant:null};var p=b,E=f("h5"),g=f("h6"),y=u("card-body"),N=u("card-title",{Component:E}),w=u("card-subtitle",{Component:g}),k=u("card-link",{Component:"a"}),x=u("card-text",{Component:"p"}),T=u("card-header"),j=u("card-footer"),O=u("card-img-overlay"),R=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,m=e.bg,d=e.text,u=e.border,f=e.body,v=e.children,b=e.as,p=void 0===b?"div":b,E=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=Object(s.a)(t,"card"),N=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return c.a.createElement(h.Provider,{value:N},c.a.createElement(p,Object(r.a)({ref:a},E,{className:i()(l,g,m&&"bg-"+m,d&&"text-"+d,u&&"border-"+u)}),f?c.a.createElement(y,null,v):v))}));R.displayName="Card",R.defaultProps={body:!1},R.Img=p,R.Title=N,R.Subtitle=w,R.Body=y,R.Link=k,R.Text=x,R.Header=T,R.Footer=j,R.ImgOverlay=O;a.a=R},"Y/Do":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return b}));var r=t("q1tI"),n=t.n(r),l=t("rui/"),i=t("zLVn"),o=function(e){var a=e.videoSrcURL,t=e.videoTitle;Object(i.a)(e,["videoSrcURL","videoTitle"]);return n.a.createElement("div",{className:"video embed-responsive embed-responsive-16by9"},n.a.createElement("iframe",{src:a,title:t,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0,autoPlay:!1,autostart:"false"}))},c=t("Bl7J"),s=t("fkrt"),m=t("vrFN"),d=t("ehcJ"),u=t("vguY"),f=t("Wbzz"),v=t("6xyR"),h=function(){var e=Object(f.useStaticQuery)("3108225916");return n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"row justify-content-center"},e.allMarkdownRemark.edges.map((function(e){return n.a.createElement("div",{className:"col-md-3 mb-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0",key:e.node.id},n.a.createElement(v.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement("a",{href:e.node.frontmatter.slug},n.a.createElement(v.a.Img,{variant:"top",src:e.node.featuredImg.childImageSharp.fixed.src,alt:e.node.frontmatter.featuredImgAlt})),n.a.createElement(v.a.Body,null,n.a.createElement("a",{href:e.node.frontmatter.slug},n.a.createElement(v.a.Title,null,e.node.frontmatter.title)))))}))))};function b(){return n.a.createElement(c.a,null,n.a.createElement(l.a,{src:"/teaser_three.mp4"}),n.a.createElement(m.a,{title:"Interactions and video",description:"The Human Touch, a Fitzwilliam Museum exhibition has a variety of interactive components."}),n.a.createElement(u.a,null),n.a.createElement("div",{className:"text-justify container-fluid bg-white text-dark mt-5"},n.a.createElement("h2",{className:"text-center mt-3"},"Interviews"),n.a.createElement(h,null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h2",{className:"text-center mt-3"},"Videography"),n.a.createElement("div",{className:"row justify-content-center "},n.a.createElement("div",{className:"col-md-4 mb-3 mt-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0"},n.a.createElement(v.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement(v.a.Body,null,n.a.createElement(o,{videoSrcURL:"https://player.vimeo.com/video/486958174",videoTitle:"The Human Touch video wall film",className:"embed-responsive-item"})))),n.a.createElement("div",{className:"col-md-4 mb-3 mt-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0"},n.a.createElement(v.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement(v.a.Body,null,n.a.createElement(o,{videoSrcURL:"https://player.vimeo.com/video/483625519",videoTitle:"The Human Touch, Run at the Fitzwilliam Museum",className:"embed-responsive-item"})))),n.a.createElement("div",{className:"col-md-4 mb-3 mt-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0"},n.a.createElement(v.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement(v.a.Body,null,n.a.createElement(o,{videoSrcURL:"https://www.youtube.com/embed/3pcPx9lC4F8",videoTitle:"The Human Touch video wall film",className:"embed-responsive-item"})))),n.a.createElement("div",{className:"col-md-4 mb-3 mt-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0"},n.a.createElement(v.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement(v.a.Body,null,n.a.createElement(o,{videoSrcURL:"https://www.youtube.com/embed/y52LprXN6_c",videoTitle:"The Human Touch video wall film",className:"embed-responsive-item"})))),n.a.createElement("div",{className:"col-md-4 mb-3 mt-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0"},n.a.createElement(v.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement(v.a.Body,null,n.a.createElement(o,{videoSrcURL:"https://www.youtube.com/embed/cgtrc4Cxu2w",videoTitle:"The Human Touch video wall film",className:"embed-responsive-item"})))),n.a.createElement("div",{className:"col-md-4 mb-3 mt-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0"},n.a.createElement(v.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement(v.a.Body,null,n.a.createElement(o,{videoSrcURL:"https://www.youtube.com/embed/rMGXSMW_fO4",videoTitle:"The Human Touch video wall film",className:"embed-responsive-item"})))),n.a.createElement("div",{className:"col-md-4 mb-3 mt-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0"},n.a.createElement(v.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement(v.a.Body,null,n.a.createElement(o,{videoSrcURL:"https://www.youtube.com/embed/YaPPiesRE5I",videoTitle:"Matthew Champion lecture - Medieval graffiti film",className:"embed-responsive-item"})))))))),n.a.createElement("div",{className:"bg-white p-2"},n.a.createElement("h2",{className:"text-dark text-center"},"Sections of the exhibition")),n.a.createElement("div",{className:"container",style:{marginTop:"5rem"}},n.a.createElement("div",{className:"themes"},n.a.createElement(d.a,null))),n.a.createElement(s.a,null))}},ehcJ:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),l=t("Wbzz"),i=t("6xyR");a.a=function(){var e=Object(l.useStaticQuery)("1230572432");return n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"row justify-content-center"},e.allMarkdownRemark.edges.map((function(e){return n.a.createElement("div",{className:"col-md-3 mb-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0",key:e.node.id},n.a.createElement(i.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement("a",{href:e.node.frontmatter.slug},n.a.createElement(i.a.Img,{variant:"top",src:e.node.featuredImg.childImageSharp.fixed.src,alt:e.node.frontmatter.featuredImgAlt})),n.a.createElement(i.a.Body,null,n.a.createElement("a",{href:e.node.frontmatter.slug},n.a.createElement(i.a.Title,null,e.node.frontmatter.title)))))}))))}},vguY:function(e,a,t){"use strict";t.d(a,"a",(function(){return E}));var r=t("dI71"),n=t("q1tI"),l=t.n(n),i=t("Wbzz"),o=t("wx14"),c=t("zLVn"),s=t("TSYQ"),m=t.n(s),d=t("vUet");var u=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return null!=e})).reduce((function(e,a){if("function"!=typeof a)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?a:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];e.apply(this,r),a.apply(this,r)}}),null)};function f(e){return!e||"#"===e.trim()}var v=l.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"a":t,n=e.disabled,i=e.onKeyDown,s=Object(c.a)(e,["as","disabled","onKeyDown"]),m=function(e){var a=s.href,t=s.onClick;(n||f(a))&&e.preventDefault(),n?e.stopPropagation():t&&t(e)};return f(s.href)&&(s.role=s.role||"button",s.href=s.href||"#"),n&&(s.tabIndex=-1,s["aria-disabled"]=!0),l.a.createElement(r,Object(o.a)({ref:a},s,{onClick:m,onKeyDown:u((function(e){" "===e.key&&(e.preventDefault(),m(e))}),i)}))}));v.displayName="SafeAnchor";var h=v,b=l.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.variant,n=e.size,i=e.active,s=e.className,u=e.block,f=e.type,v=e.as,b=Object(c.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),p=Object(d.a)(t,"btn"),E=m()(s,p,i&&"active",r&&p+"-"+r,u&&p+"-block",n&&p+"-"+n);if(b.href)return l.a.createElement(h,Object(o.a)({},b,{as:v,ref:a,className:m()(E,b.disabled&&"disabled")}));a&&(b.ref=a),f?b.type=f:v||(b.type="button");var g=v||"button";return l.a.createElement(g,Object(o.a)({},b,{className:E}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1};var p=b,E=function(e){function a(){return e.apply(this,arguments)||this}return Object(r.a)(a,e),a.prototype.render=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{src:"https://fitz-cms-images.s3.eu-west-2.amazonaws.com/fitztht.png",alt:"Fitzwilliam Museum",width:"150"}),l.a.createElement("h1",{className:"cover-heading",style:{fontSize:"4rem"}},"The Human Touch"),l.a.createElement("p",{className:"lead cover"},"Making Art | Leaving Traces"),l.a.createElement(p,{variant:"btnBook"},l.a.createElement(i.Link,{to:"https://tickets.museums.cam.ac.uk/overview/thehumantouch"},"Book your tickets")),l.a.createElement("p",{className:"lead cover"},"18 May 2021 to 1 August 2021"))},a}(n.Component)}}]);
//# sourceMappingURL=component---src-pages-interactions-js-d359ef59bc3060148634.js.map