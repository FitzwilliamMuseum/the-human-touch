/*! For license information please see component---src-pages-interactions-js-f0646ff065078af75694.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6xyR":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),i=t("TSYQ"),l=t.n(i),o=t("q1tI"),s=t.n(o),c=s.a.createContext({});c.Consumer,c.Provider;function m(e,a){var t=Object(o.useContext)(c);return e||t[a]||a}var d=/-(.)/g;var u=function(e){return e[0].toUpperCase()+(a=e,a.replace(d,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function f(e,a){var t=void 0===a?{}:a,i=t.displayName,o=void 0===i?u(e):i,c=t.Component,d=t.defaultProps,f=s.a.forwardRef((function(a,t){var i=a.className,o=a.bsPrefix,d=a.as,u=void 0===d?c||"div":d,f=Object(n.a)(a,["className","bsPrefix","as"]),h=m(o,e);return s.a.createElement(u,Object(r.a)({ref:t,className:l()(i,h)},f))}));return f.defaultProps=d,f.displayName=o,f}var h=function(e){return s.a.forwardRef((function(a,t){return s.a.createElement("div",Object(r.a)({},a,{ref:t,className:l()(a.className,e)}))}))},v=s.a.createContext(null);v.displayName="CardContext";var p=v,b=s.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.variant,c=e.as,d=void 0===c?"img":c,u=Object(n.a)(e,["bsPrefix","className","variant","as"]),f=m(t,"card-img");return s.a.createElement(d,Object(r.a)({ref:a,className:l()(o?f+"-"+o:f,i)},u))}));b.displayName="CardImg",b.defaultProps={variant:null};var g=b,E=h("h5"),y=h("h6"),N=f("card-body"),w=f("card-title",{Component:E}),x=f("card-subtitle",{Component:y}),T=f("card-link",{Component:"a"}),k=f("card-text",{Component:"p"}),j=f("card-header"),O=f("card-footer"),R=f("card-img-overlay"),S=s.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,c=e.bg,d=e.text,u=e.border,f=e.body,h=e.children,v=e.as,b=void 0===v?"div":v,g=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),E=m(t,"card"),y=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:E+"-header"}}),[E]);return s.a.createElement(p.Provider,{value:y},s.a.createElement(b,Object(r.a)({ref:a},g,{className:l()(i,E,c&&"bg-"+c,d&&"text-"+d,u&&"border-"+u)}),f?s.a.createElement(N,null,h):h))}));S.displayName="Card",S.defaultProps={body:!1},S.Img=g,S.Title=w,S.Subtitle=x,S.Body=N,S.Link=T,S.Text=k,S.Header=j,S.Footer=O,S.ImgOverlay=R;a.a=S},TSYQ:function(e,a,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var l=n.apply(null,r);l&&e.push(l)}else if("object"===i)for(var o in r)t.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(a,[]))||(e.exports=r)}()},"Y/Do":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var r=t("q1tI"),n=t.n(r),i=t("rui/"),l=t("zLVn"),o=function(e){var a=e.videoSrcURL,t=e.videoTitle;Object(l.a)(e,["videoSrcURL","videoTitle"]);return n.a.createElement("div",{className:"video embed-responsive embed-responsive-16by9"},n.a.createElement("iframe",{src:a,title:t,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0,autoPlay:!1,autostart:"false"}))},s=t("Bl7J"),c=t("fkrt"),m=t("vrFN"),d=t("ehcJ"),u=t("vguY"),f=t("Wbzz"),h=t("6xyR"),v=function(){var e=Object(f.useStaticQuery)("3108225916");return n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"row justify-content-center"},e.allMarkdownRemark.edges.map((function(e){return n.a.createElement("div",{className:"col-md-3 mb-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0",key:e.node.id},n.a.createElement(h.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement("a",{href:e.node.frontmatter.slug},n.a.createElement(h.a.Img,{variant:"top",src:e.node.featuredImg.childImageSharp.fixed.src,alt:e.node.frontmatter.featuredImgAlt})),n.a.createElement(h.a.Body,null,n.a.createElement("a",{href:e.node.frontmatter.slug},n.a.createElement(h.a.Title,null,e.node.frontmatter.title)))))}))))};function p(){return n.a.createElement(s.a,null,n.a.createElement(i.a,{src:"/teaser_three.mp4"}),n.a.createElement(m.a,{title:"Interactions and video",description:"The Human Touch, a Fitzwilliam Museum exhibition has a variety of interactive components."}),n.a.createElement(u.a,null),n.a.createElement("div",{className:"text-justify container-fluid bg-white text-dark mt-5"},n.a.createElement("h2",{className:"text-center mt-3"},"Interviews"),n.a.createElement(v,null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h2",{className:"text-center mt-3"},"Videography"),n.a.createElement("div",{className:"row justify-content-center "},n.a.createElement("div",{className:"col-md-4 mb-3 mt-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0"},n.a.createElement(h.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement(h.a.Body,null,n.a.createElement(o,{videoSrcURL:"https://player.vimeo.com/video/486958174",videoTitle:"The Human Touch video wall film",className:"embed-responsive-item"})))),n.a.createElement("div",{className:"col-md-4 mb-3 mt-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0"},n.a.createElement(h.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement(h.a.Body,null,n.a.createElement(o,{videoSrcURL:"https://player.vimeo.com/video/483625519",videoTitle:"The Human Touch, Run at the Fitzwilliam Museum",className:"embed-responsive-item"})))),n.a.createElement("div",{className:"col-md-4 mb-3 mt-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0"},n.a.createElement(h.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement(h.a.Body,null,n.a.createElement(o,{videoSrcURL:"https://www.youtube.com/embed/3pcPx9lC4F8",videoTitle:"The Human Touch video wall film",className:"embed-responsive-item"})))),n.a.createElement("div",{className:"col-md-4 mb-3 mt-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0"},n.a.createElement(h.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement(h.a.Body,null,n.a.createElement(o,{videoSrcURL:"https://www.youtube.com/embed/y52LprXN6_c",videoTitle:"The Human Touch video wall film",className:"embed-responsive-item"})))),n.a.createElement("div",{className:"col-md-4 mb-3 mt-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0"},n.a.createElement(h.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement(h.a.Body,null,n.a.createElement(o,{videoSrcURL:"https://www.youtube.com/embed/cgtrc4Cxu2w",videoTitle:"The Human Touch video wall film",className:"embed-responsive-item"})))),n.a.createElement("div",{className:"col-md-4 mb-3 mt-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0"},n.a.createElement(h.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement(h.a.Body,null,n.a.createElement(o,{videoSrcURL:"https://www.youtube.com/embed/rMGXSMW_fO4",videoTitle:"The Human Touch video wall film",className:"embed-responsive-item"})))),n.a.createElement("div",{className:"col-md-4 mb-3 mt-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0"},n.a.createElement(h.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement(h.a.Body,null,n.a.createElement(o,{videoSrcURL:"https://www.youtube.com/embed/YaPPiesRE5I",videoTitle:"Matthew Champion lecture - Medieval graffiti film",className:"embed-responsive-item"})))))))),n.a.createElement("div",{className:"bg-white p-2"},n.a.createElement("h2",{className:"text-dark text-center"},"Sections of the exhibition")),n.a.createElement("div",{className:"container",style:{marginTop:"5rem"}},n.a.createElement("div",{className:"themes"},n.a.createElement(d.a,null))),n.a.createElement(c.a,null))}},ehcJ:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),i=t("Wbzz"),l=t("6xyR");a.a=function(){var e=Object(i.useStaticQuery)("1230572432");return n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"row justify-content-center"},e.allMarkdownRemark.edges.map((function(e){return n.a.createElement("div",{className:"col-md-3 mb-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0",key:e.node.id},n.a.createElement(l.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement("a",{href:e.node.frontmatter.slug},n.a.createElement(l.a.Img,{variant:"top",src:e.node.featuredImg.childImageSharp.fixed.src,alt:e.node.frontmatter.featuredImgAlt})),n.a.createElement(l.a.Body,null,n.a.createElement("a",{href:e.node.frontmatter.slug},n.a.createElement(l.a.Title,null,e.node.frontmatter.title)))))}))))}},vguY:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var r=t("dI71"),n=t("q1tI"),i=t.n(n),l=(t("Wbzz"),function(e){function a(){return e.apply(this,arguments)||this}return Object(r.a)(a,e),a.prototype.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{src:"https://fitz-cms-images.s3.eu-west-2.amazonaws.com/fitztht.png",alt:"Fitzwilliam Museum",width:"150"}),i.a.createElement("h1",{className:"cover-heading",style:{fontSize:"4rem"}},"The Human Touch"),i.a.createElement("p",{className:"lead cover"},"Making Art | Leaving Traces"),i.a.createElement("p",{className:"lead cover"},"This exhibition ran from the 18 May 2021 to 1 August 2021"))},a}(n.Component))},wx14:function(e,a,t){"use strict";function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(a,"a",(function(){return r}))},zLVn:function(e,a,t){"use strict";function r(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}t.d(a,"a",(function(){return r}))}}]);
//# sourceMappingURL=component---src-pages-interactions-js-f0646ff065078af75694.js.map