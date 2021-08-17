/*! For license information please see component---src-pages-exhibition-labels-js-0491bf0d4729f3393714.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6xyR":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),i=t("TSYQ"),c=t.n(i),l=t("q1tI"),o=t.n(l),s=o.a.createContext({});s.Consumer,s.Provider;function u(e,a){var t=Object(l.useContext)(s);return e||t[a]||a}var m=/-(.)/g;var d=function(e){return e[0].toUpperCase()+(a=e,a.replace(m,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function f(e,a){var t=void 0===a?{}:a,i=t.displayName,l=void 0===i?d(e):i,s=t.Component,m=t.defaultProps,f=o.a.forwardRef((function(a,t){var i=a.className,l=a.bsPrefix,m=a.as,d=void 0===m?s||"div":m,f=Object(n.a)(a,["className","bsPrefix","as"]),v=u(l,e);return o.a.createElement(d,Object(r.a)({ref:t,className:c()(i,v)},f))}));return f.defaultProps=m,f.displayName=l,f}var v=function(e){return o.a.forwardRef((function(a,t){return o.a.createElement("div",Object(r.a)({},a,{ref:t,className:c()(a.className,e)}))}))},p=o.a.createContext(null);p.displayName="CardContext";var h=p,b=o.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,l=e.variant,s=e.as,m=void 0===s?"img":s,d=Object(n.a)(e,["bsPrefix","className","variant","as"]),f=u(t,"card-img");return o.a.createElement(m,Object(r.a)({ref:a,className:c()(l?f+"-"+l:f,i)},d))}));b.displayName="CardImg",b.defaultProps={variant:null};var g=b,y=v("h5"),E=v("h6"),x=f("card-body"),N=f("card-title",{Component:y}),w=f("card-subtitle",{Component:E}),O=f("card-link",{Component:"a"}),j=f("card-text",{Component:"p"}),C=f("card-header"),P=f("card-footer"),k=f("card-img-overlay"),z=o.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,s=e.bg,m=e.text,d=e.border,f=e.body,v=e.children,p=e.as,b=void 0===p?"div":p,g=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=u(t,"card"),E=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return o.a.createElement(h.Provider,{value:E},o.a.createElement(b,Object(r.a)({ref:a},g,{className:c()(i,y,s&&"bg-"+s,m&&"text-"+m,d&&"border-"+d)}),f?o.a.createElement(x,null,v):v))}));z.displayName="Card",z.defaultProps={body:!1},z.Img=g,z.Title=N,z.Subtitle=w,z.Body=x,z.Link=O,z.Text=j,z.Header=C,z.Footer=P,z.ImgOverlay=k;a.a=z},TSYQ:function(e,a,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var c=n.apply(null,r);c&&e.push(c)}else if("object"===i)for(var l in r)t.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(a,[]))||(e.exports=r)}()},ehcJ:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),i=t("Wbzz"),c=t("6xyR");a.a=function(){var e=Object(i.useStaticQuery)("1230572432");return n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"row justify-content-center"},e.allMarkdownRemark.edges.map((function(e){return n.a.createElement("div",{className:"col-md-3 mb-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0",key:e.node.id},n.a.createElement(c.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement("a",{href:e.node.frontmatter.slug},n.a.createElement(c.a.Img,{variant:"top",src:e.node.featuredImg.childImageSharp.fixed.src,alt:e.node.frontmatter.featuredImgAlt})),n.a.createElement(c.a.Body,null,n.a.createElement("a",{href:e.node.frontmatter.slug},n.a.createElement(c.a.Title,null,e.node.frontmatter.title)))))}))))}},kF6P:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return v}));var r=t("q1tI"),n=t.n(r),i=t("rui/"),c=t("Bl7J"),l=t("fkrt"),o=t("vrFN"),s=t("ehcJ"),u=t("vguY"),m=t("Wbzz"),d=t("6xyR"),f=function(e){var a=e.sectionIn,t=Object(m.useStaticQuery)("2602105880",{section:a});return n.a.createElement("div",{className:"col-md-12 bg-white pt-3"},n.a.createElement("h2",{className:"text-dark text-center"},"Object labels from the exhibition"),n.a.createElement("div",{className:"row bg-white p-3 "},t.allDirectusHumantouch.edges.map((function(e){var a="/exhibition/labels/"+e.node.slug;return n.a.createElement("div",{className:"col-md-3 mb-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0",key:e.node.id},n.a.createElement(d.a,{className:"no-radius bg-dark h-100 highlight"},n.a.createElement("a",{href:a},n.a.createElement(d.a.Img,{variant:"top",src:e.node.hero_image.data.thumbnails[2].url,alt:e.node.title})),n.a.createElement(d.a.Body,null,n.a.createElement("a",{href:a},n.a.createElement(d.a.Title,null,e.node.title)))))}))))};function v(){return n.a.createElement(c.a,null,n.a.createElement(i.a,{src:"/teaser_three.mp4"}),n.a.createElement(o.a,{title:"Labels",description:"The Human Touch, a Fitzwilliam Museum exhibition has a variety of interactive components."}),n.a.createElement(u.a,null),n.a.createElement(f,null),n.a.createElement("div",{className:"container",style:{marginTop:"5rem"}},n.a.createElement("div",{className:"themes"},n.a.createElement(s.a,null))),n.a.createElement(l.a,null))}},vguY:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t("dI71"),n=t("q1tI"),i=t.n(n),c=(t("Wbzz"),function(e){function a(){return e.apply(this,arguments)||this}return Object(r.a)(a,e),a.prototype.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{src:"https://fitz-cms-images.s3.eu-west-2.amazonaws.com/fitztht.png",alt:"Fitzwilliam Museum",width:"150"}),i.a.createElement("h1",{className:"cover-heading",style:{fontSize:"4rem"}},"The Human Touch"),i.a.createElement("p",{className:"lead cover"},"Making Art | Leaving Traces"),i.a.createElement("p",{className:"lead cover"},"This exhibition ran from the 18 May 2021 to 1 August 2021"))},a}(n.Component))},wx14:function(e,a,t){"use strict";function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(a,"a",(function(){return r}))},zLVn:function(e,a,t){"use strict";function r(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}t.d(a,"a",(function(){return r}))}}]);
//# sourceMappingURL=component---src-pages-exhibition-labels-js-0491bf0d4729f3393714.js.map