(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6xyR":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),l=t("TSYQ"),c=t.n(l),s=t("q1tI"),i=t.n(s),o=t("vUet"),m=/-(.)/g;var d=function(e){return e[0].toUpperCase()+(a=e,a.replace(m,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function u(e,a){var t=void 0===a?{}:a,l=t.displayName,s=void 0===l?d(e):l,m=t.Component,u=t.defaultProps,f=i.a.forwardRef((function(a,t){var l=a.className,s=a.bsPrefix,d=a.as,u=void 0===d?m||"div":d,f=Object(n.a)(a,["className","bsPrefix","as"]),v=Object(o.a)(s,e);return i.a.createElement(u,Object(r.a)({ref:t,className:c()(l,v)},f))}));return f.defaultProps=u,f.displayName=s,f}var f=function(e){return i.a.forwardRef((function(a,t){return i.a.createElement("div",Object(r.a)({},a,{ref:t,className:c()(a.className,e)}))}))},v=i.a.createContext(null);v.displayName="CardContext";var p=v,b=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,s=e.variant,m=e.as,d=void 0===m?"img":m,u=Object(n.a)(e,["bsPrefix","className","variant","as"]),f=Object(o.a)(t,"card-img");return i.a.createElement(d,Object(r.a)({ref:a,className:c()(s?f+"-"+s:f,l)},u))}));b.displayName="CardImg",b.defaultProps={variant:null};var E=b,N=f("h5"),g=f("h6"),h=u("card-body"),y=u("card-title",{Component:N}),x=u("card-subtitle",{Component:g}),w=u("card-link",{Component:"a"}),j=u("card-text",{Component:"p"}),O=u("card-header"),k=u("card-footer"),C=u("card-img-overlay"),P=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,m=e.bg,d=e.text,u=e.border,f=e.body,v=e.children,b=e.as,E=void 0===b?"div":b,N=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=Object(o.a)(t,"card"),y=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return i.a.createElement(p.Provider,{value:y},i.a.createElement(E,Object(r.a)({ref:a},N,{className:c()(l,g,m&&"bg-"+m,d&&"text-"+d,u&&"border-"+u)}),f?i.a.createElement(h,null,v):v))}));P.displayName="Card",P.defaultProps={body:!1},P.Img=E,P.Title=y,P.Subtitle=x,P.Body=h,P.Link=w,P.Text=j,P.Header=O,P.Footer=k,P.ImgOverlay=C;a.a=P},Vrzh:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return m}));var r=t("q1tI"),n=t.n(r),l=t("Bl7J"),c=t("fkrt"),s=t("rui/"),i=t("ehcJ"),o=t("vrFN");function m(e){var a=e.data.directusHumantouch,t=a.title,r=a.description,m=a.section,d=a.hero_image;return n.a.createElement(l.a,null,n.a.createElement(o.a,{title:t,description:t}),n.a.createElement(s.a,{src:"/teaser_two.mp4",className:"fullscreen"}),n.a.createElement("h1",{style:{fontSize:"4rem"}},"The Human Touch"),n.a.createElement("p",{className:"lead cover"},"Making Art | Leaving Traces"),n.a.createElement("div",{className:"container-fluid bg-white text-dark p-5 ml-0 mr-0 mt-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"text-justify col-md-6 p-3 aos-init aos-animate ","data-aos-duration":"600","data-aos":"fade-left","data-aos-delay":"0"},n.a.createElement("h2",{className:"lead"},t),n.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:r}}),n.a.createElement("div",{className:"sectionTitle"},n.a.createElement("h4",{className:"lead btn btn-dark"},"Section: ",m))),n.a.createElement("div",{className:"col-md-6 p-3 aos-init aos-animate ","data-aos-duration":"600","data-aos":"fade-left","data-aos-delay":"0"},n.a.createElement("figure",{className:"figure"},n.a.createElement("img",{src:d.data.thumbnails[5].url,className:"img-fluid mx-auto",alt:""}),n.a.createElement("figcaption",{className:"figure-caption mt-2"},n.a.createElement("em",null,t)))))),n.a.createElement("div",{className:"container",style:{marginTop:"5rem"}},n.a.createElement("div",{className:"themes"},n.a.createElement(i.a,null))),n.a.createElement(c.a,null))}},ehcJ:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),l=t("Wbzz"),c=t("6xyR");a.a=function(){var e=Object(l.useStaticQuery)("1230572432");return n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"row justify-content-center"},e.allMarkdownRemark.edges.map((function(e){return n.a.createElement("div",{className:"col-md-3 mb-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0",key:e.node.id},n.a.createElement(c.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement("a",{href:e.node.frontmatter.slug},n.a.createElement(c.a.Img,{variant:"top",src:e.node.featuredImg.childImageSharp.fixed.src,alt:e.node.frontmatter.featuredImgAlt})),n.a.createElement(c.a.Body,null,n.a.createElement("a",{href:e.node.frontmatter.slug},n.a.createElement(c.a.Title,null,e.node.frontmatter.title)),n.a.createElement("p",null,"Section ",e.node.frontmatter.section))))}))))}}}]);
//# sourceMappingURL=component---src-templates-object-template-js-a6e687af1a76920fcdc1.js.map