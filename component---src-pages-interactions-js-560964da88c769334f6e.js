(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"Y/Do":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return v}));var r=t("q1tI"),n=t.n(r),o=t("rui/"),i=t("zLVn"),l=function(e){var a=e.videoSrcURL,t=e.videoTitle;Object(i.a)(e,["videoSrcURL","videoTitle"]);return n.a.createElement("div",{className:"video embed-responsive embed-responsive-16by9"},n.a.createElement("iframe",{src:a,title:t,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0,autoPlay:!1,autostart:"false"}))},s=t("Bl7J"),c=t("fkrt"),m=t("vrFN"),d=t("ehcJ"),u=t("vguY");function v(){return n.a.createElement(s.a,null,n.a.createElement(o.a,{src:"/teaser_three.mp4"}),n.a.createElement(m.a,{title:"Interactions and video",description:"The Human Touch, a Fitzwilliam Museum exhibition has a variety of interactive components."}),n.a.createElement(u.a,null),n.a.createElement("div",{className:"text-justify container-fluid bg-white text-dark mt-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 p-0 aos-init aos-animate ","data-aos-duration":"600","data-aos":"fade-left","data-aos-delay":"0"},n.a.createElement(l,{videoSrcURL:"https://player.vimeo.com/video/486958174",videoTitle:"The Human Touch video wall film",className:"embed-responsive-item"})),n.a.createElement("div",{className:"col-md-6 p-0 aos-init aos-animate","data-aos-duration":"600","data-aos":"fade-left","data-aos-delay":"0"},n.a.createElement(l,{videoSrcURL:"https://player.vimeo.com/video/483625519",videoTitle:"The Human Touch, Run at the Fitzwilliam Museum",className:"embed-responsive-item"})),n.a.createElement("div",{className:"col-md-6 p-0 aos-init aos-animate ","data-aos-duration":"600","data-aos":"fade-left","data-aos-delay":"0"},n.a.createElement(l,{videoSrcURL:"https://www.youtube.com/embed/3pcPx9lC4F8",videoTitle:"The Human Touch video wall film",className:"embed-responsive-item"})),n.a.createElement("div",{className:"col-md-6 p-0 aos-init aos-animate ","data-aos-duration":"600","data-aos":"fade-left","data-aos-delay":"0"},n.a.createElement(l,{videoSrcURL:"https://www.youtube.com/embed/y52LprXN6_c",videoTitle:"The Human Touch video wall film",className:"embed-responsive-item"})),n.a.createElement("div",{className:"col-md-6 p-0 aos-init aos-animate ","data-aos-duration":"600","data-aos":"fade-left","data-aos-delay":"0"},n.a.createElement(l,{videoSrcURL:"https://www.youtube.com/embed/cgtrc4Cxu2w",videoTitle:"The Human Touch video wall film",className:"embed-responsive-item"})),n.a.createElement("div",{className:"col-md-6 p-0 aos-init aos-animate ","data-aos-duration":"600","data-aos":"fade-left","data-aos-delay":"0"},n.a.createElement(l,{videoSrcURL:"https://www.youtube.com/embed/rMGXSMW_fO4",videoTitle:"The Human Touch video wall film",className:"embed-responsive-item"})))),n.a.createElement("div",{className:"text-justify container-fluid bg-white text-dark mt-5"},n.a.createElement("div",{className:"row"})),n.a.createElement("div",{className:"container",style:{marginTop:"5rem"}},n.a.createElement("div",{className:"themes"},n.a.createElement(d.a,null))),n.a.createElement(c.a,null))}},ehcJ:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),o=t("Wbzz"),i=t("wx14"),l=t("zLVn"),s=t("TSYQ"),c=t.n(s),m=t("vUet"),d=/-(.)/g;var u=function(e){return e[0].toUpperCase()+(a=e,a.replace(d,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function v(e,a){var t=void 0===a?{}:a,r=t.displayName,o=void 0===r?u(e):r,s=t.Component,d=t.defaultProps,v=n.a.forwardRef((function(a,t){var r=a.className,o=a.bsPrefix,d=a.as,u=void 0===d?s||"div":d,v=Object(l.a)(a,["className","bsPrefix","as"]),f=Object(m.a)(o,e);return n.a.createElement(u,Object(i.a)({ref:t,className:c()(r,f)},v))}));return v.defaultProps=d,v.displayName=o,v}var f=function(e){return n.a.forwardRef((function(a,t){return n.a.createElement("div",Object(i.a)({},a,{ref:t,className:c()(a.className,e)}))}))},p=n.a.createContext(null);p.displayName="CardContext";var h=p,b=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.variant,s=e.as,d=void 0===s?"img":s,u=Object(l.a)(e,["bsPrefix","className","variant","as"]),v=Object(m.a)(t,"card-img");return n.a.createElement(d,Object(i.a)({ref:a,className:c()(o?v+"-"+o:v,r)},u))}));b.displayName="CardImg",b.defaultProps={variant:null};var w=b,E=f("h5"),y=f("h6"),N=v("card-body"),g=v("card-title",{Component:E}),T=v("card-subtitle",{Component:y}),x=v("card-link",{Component:"a"}),k=v("card-text",{Component:"p"}),j=v("card-header"),z=v("card-footer"),O=v("card-img-overlay"),C=n.a.forwardRef((function(e,a){var t=e.bsPrefix,o=e.className,s=e.bg,d=e.text,u=e.border,v=e.body,f=e.children,p=e.as,b=void 0===p?"div":p,w=Object(l.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),E=Object(m.a)(t,"card"),y=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:E+"-header"}}),[E]);return n.a.createElement(h.Provider,{value:y},n.a.createElement(b,Object(i.a)({ref:a},w,{className:c()(o,E,s&&"bg-"+s,d&&"text-"+d,u&&"border-"+u)}),v?n.a.createElement(N,null,f):f))}));C.displayName="Card",C.defaultProps={body:!1},C.Img=w,C.Title=g,C.Subtitle=T,C.Body=N,C.Link=x,C.Text=k,C.Header=j,C.Footer=z,C.ImgOverlay=O;var L=C;a.a=function(){var e=Object(o.useStaticQuery)("3075580228");return n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"row justify-content-center"},e.allMarkdownRemark.edges.map((function(e){return n.a.createElement("div",{className:"col-md-4 mb-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0",key:e.node.id},n.a.createElement(L,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement("a",{href:e.node.frontmatter.slug},n.a.createElement(L.Img,{variant:"top",src:e.node.featuredImg.childImageSharp.fixed.src,alt:e.node.frontmatter.featuredImgAlt})),n.a.createElement(L.Body,null,n.a.createElement("a",{href:e.node.frontmatter.slug},n.a.createElement(L.Title,null,e.node.frontmatter.title)))))}))))}},vguY:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var r=t("dI71"),n=t("q1tI"),o=t.n(n),i=t("Wbzz"),l=t("cWnB"),s=function(e){function a(){return e.apply(this,arguments)||this}return Object(r.a)(a,e),a.prototype.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:"https://fitz-cms-images.s3.eu-west-2.amazonaws.com/fv-logo-white.svg",alt:"FitzVirtual Logo",width:"200"}),o.a.createElement("img",{src:"https://fitz-cms-images.s3.eu-west-2.amazonaws.com/fitztht.png",alt:"Fitzwilliam Museum",width:"150"}),o.a.createElement("h1",{className:"cover-heading",style:{fontSize:"4rem"}},"The Human Touch"),o.a.createElement("p",{className:"lead cover"},"Making Art | Leaving Traces"),o.a.createElement(l.a,{variant:"btnBook"},o.a.createElement(i.Link,{to:"https://tickets.museums.cam.ac.uk/overview/thehumantouch"},"Book your tickets")))},a}(n.Component)}}]);
//# sourceMappingURL=component---src-pages-interactions-js-560964da88c769334f6e.js.map