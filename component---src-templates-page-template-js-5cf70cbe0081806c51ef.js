/*! For license information please see component---src-templates-page-template-js-5cf70cbe0081806c51ef.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"6xyR":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),l=t.n(c),i=t("q1tI"),s=t.n(i),o=s.a.createContext({});o.Consumer,o.Provider;function m(e,a){var t=Object(i.useContext)(o);return e||t[a]||a}var d=/-(.)/g;var u=function(e){return e[0].toUpperCase()+(a=e,a.replace(d,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function f(e,a){var t=void 0===a?{}:a,c=t.displayName,i=void 0===c?u(e):c,o=t.Component,d=t.defaultProps,f=s.a.forwardRef((function(a,t){var c=a.className,i=a.bsPrefix,d=a.as,u=void 0===d?o||"div":d,f=Object(n.a)(a,["className","bsPrefix","as"]),v=m(i,e);return s.a.createElement(u,Object(r.a)({ref:t,className:l()(c,v)},f))}));return f.defaultProps=d,f.displayName=i,f}var v=function(e){return s.a.forwardRef((function(a,t){return s.a.createElement("div",Object(r.a)({},a,{ref:t,className:l()(a.className,e)}))}))},p=s.a.createContext(null);p.displayName="CardContext";var h=p,b=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,i=e.variant,o=e.as,d=void 0===o?"img":o,u=Object(n.a)(e,["bsPrefix","className","variant","as"]),f=m(t,"card-img");return s.a.createElement(d,Object(r.a)({ref:a,className:l()(i?f+"-"+i:f,c)},u))}));b.displayName="CardImg",b.defaultProps={variant:null};var g=b,E=v("h5"),y=v("h6"),N=f("card-body"),x=f("card-title",{Component:E}),w=f("card-subtitle",{Component:y}),j=f("card-link",{Component:"a"}),O=f("card-text",{Component:"p"}),k=f("card-header"),C=f("card-footer"),I=f("card-img-overlay"),P=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.bg,d=e.text,u=e.border,f=e.body,v=e.children,p=e.as,b=void 0===p?"div":p,g=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),E=m(t,"card"),y=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:E+"-header"}}),[E]);return s.a.createElement(h.Provider,{value:y},s.a.createElement(b,Object(r.a)({ref:a},g,{className:l()(c,E,o&&"bg-"+o,d&&"text-"+d,u&&"border-"+u)}),f?s.a.createElement(N,null,v):v))}));P.displayName="Card",P.defaultProps={body:!1},P.Img=g,P.Title=x,P.Subtitle=w,P.Body=N,P.Link=j,P.Text=O,P.Header=k,P.Footer=C,P.ImgOverlay=I;a.a=P},LA6i:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return u}));var r=t("q1tI"),n=t.n(r),c=t("Bl7J"),l=t("vrFN"),i=t("ehcJ"),s=t("fkrt"),o=t("rui/"),m=t("sD7D"),d=t("vguY");function u(e){var a=e.data.markdownRemark,t=a.frontmatter,r=a.html,u=a.wordCount;return n.a.createElement(c.a,null,n.a.createElement(o.a,{src:"/teaser_two.mp4",className:"fullscreen"}),n.a.createElement(l.a,{title:t.title,description:t.description}),n.a.createElement(d.a,null),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:" container-fluid bg-white text-dark p-5 ml-0 mr-0 mt-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 p-3 aos-init aos-animate ","data-aos-duration":"600","data-aos":"fade-left","data-aos-delay":"0"},n.a.createElement("h1",null,t.title),n.a.createElement("div",{className:"text blog-post-content text-justify",dangerouslySetInnerHTML:{__html:r}}),n.a.createElement("p",{className:"sr-only"},"Word count ",u.words))))),"interviews"!==t.section&&n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{sectionIn:t.section}),n.a.createElement("div",{className:"bg-white p-2"},n.a.createElement("h2",{className:"text-dark text-center"},"Sections of the exhibition")),n.a.createElement("div",{className:"container",style:{marginTop:"5rem"}},n.a.createElement("div",{className:"themes"},n.a.createElement(i.a,null)))),n.a.createElement(s.a,null))}},TSYQ:function(e,a,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var l=n.apply(null,r);l&&e.push(l)}else if("object"===c)for(var i in r)t.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(a,[]))||(e.exports=r)}()},ehcJ:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),c=t("Wbzz"),l=t("6xyR");a.a=function(){var e=Object(c.useStaticQuery)("1230572432");return n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"row justify-content-center"},e.allMarkdownRemark.edges.map((function(e){return n.a.createElement("div",{className:"col-md-3 mb-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0",key:e.node.id},n.a.createElement(l.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement("a",{href:e.node.frontmatter.slug},n.a.createElement(l.a.Img,{variant:"top",src:e.node.featuredImg.childImageSharp.fixed.src,alt:e.node.frontmatter.featuredImgAlt})),n.a.createElement(l.a.Body,null,n.a.createElement("a",{href:e.node.frontmatter.slug},n.a.createElement(l.a.Title,null,e.node.frontmatter.title)))))}))))}},sD7D:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),c=t("Wbzz"),l=t("6xyR");a.a=function(e){var a=e.sectionIn,t=Object(c.useStaticQuery)("2602105880",{section:a});return n.a.createElement("div",{className:"col-md-12 bg-white pt-3"},n.a.createElement("h2",{className:"text-dark text-center"},"Selected objects from this section"),n.a.createElement("div",{className:"row bg-white p-3 "},t.allDirectusHumantouch.edges.map((function(e){var t="/exhibition/labels/"+e.node.slug;if(e.node.section_name===a)return n.a.createElement("div",{className:"col-md-3 mb-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0",key:e.node.id},n.a.createElement(l.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement("a",{href:t},n.a.createElement(l.a.Img,{variant:"top",src:e.node.hero_image.data.thumbnails[2].url,alt:e.node.title})),n.a.createElement(l.a.Body,null,n.a.createElement("a",{href:t},n.a.createElement(l.a.Title,null,e.node.title)))))}))))}},vguY:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var r=t("dI71"),n=t("q1tI"),c=t.n(n),l=(t("Wbzz"),function(e){function a(){return e.apply(this,arguments)||this}return Object(r.a)(a,e),a.prototype.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:"https://fitz-cms-images.s3.eu-west-2.amazonaws.com/fitztht.png",alt:"Fitzwilliam Museum",width:"150"}),c.a.createElement("h1",{className:"cover-heading",style:{fontSize:"4rem"}},"The Human Touch"),c.a.createElement("p",{className:"lead cover"},"Making Art | Leaving Traces"),c.a.createElement("p",{className:"lead cover"},"This exhibition ran from the 18 May 2021 to 1 August 2021"))},a}(n.Component))},wx14:function(e,a,t){"use strict";function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(a,"a",(function(){return r}))},zLVn:function(e,a,t){"use strict";function r(e,a){if(null==e)return{};var t,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}t.d(a,"a",(function(){return r}))}}]);
//# sourceMappingURL=component---src-templates-page-template-js-5cf70cbe0081806c51ef.js.map