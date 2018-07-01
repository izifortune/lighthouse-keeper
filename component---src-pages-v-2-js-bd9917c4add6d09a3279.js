(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{216:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return d});var n=a(34),r=a.n(n),i=a(1),l=a.n(i),o=a(219),s=a(220),c=function(e){function t(t){var a;return(a=e.call(this,t)||this).siteDescription=t.data.site.siteMetadata.description,a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.handleFilesv2=window.handleFiles},a.render=function(){var e=this;return l.a.createElement(s.a,{location:this.props.location},l.a.createElement("h2",null,"Keep your website under budget"),l.a.createElement("p",{className:"description"},"This version of lighthouse keeper works only with audits created with lighthouse v2. If you created reports using v3 please use the following one"," ",l.a.createElement(o.Link,{to:"/",style:{color:"white"}}," ","lighthouse-keeper"," ")),l.a.createElement("p",{className:"description"},this.siteDescription),l.a.createElement("div",{id:"drop-area"},l.a.createElement("form",{className:"my-form"},l.a.createElement("p",null,"Select/Drag multiple Lighthouse reports"),l.a.createElement("input",{type:"file",id:"fileElem",multiple:!0,accept:".json",onChange:function(t){return e.handleFiles(t.target.files)}}),l.a.createElement("label",{className:"button",htmlFor:"fileElem"},"Select reports"))),l.a.createElement("div",{id:"charts"},l.a.createElement("div",{className:"score hidden"},l.a.createElement("h2",{className:"score-title"},"Score"),l.a.createElement("div",{id:"chart_score"}),l.a.createElement("div",{id:"legend"}),l.a.createElement("div",{className:"flexy"},l.a.createElement("a",{id:"score__download",className:"button",download:"score.png"},"Download"))),l.a.createElement("div",{className:"bytes hidden"},l.a.createElement("h2",{className:"chart-bytes"},"Bytes"),l.a.createElement("div",{id:"chart_bytes"}),l.a.createElement("div",{className:"flexy"},l.a.createElement("a",{id:"bytes__download",className:"button",download:"bytes.png"},"Download"))),l.a.createElement("div",{className:"timings hidden"},l.a.createElement("h2",{className:"chart-timings"},"Timings"),l.a.createElement("div",{id:"chart_timings"}),l.a.createElement("div",{className:"flexy"},l.a.createElement("a",{id:"timings__download",className:"button",download:"timings.png"},"Download")))),l.a.createElement("div",{id:"parseError",className:"error hidden"},"Oops something wrong happened!!"))},t}(l.a.Component);t.default=c;var d="1419765655"},219:function(e,t,a){"use strict";a(55);var n=a(54),r=a(5);t.__esModule=!0,t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},t.StaticQuery=t.StaticQueryContext=void 0;var i=r(a(1)),l=r(a(0)),o=n(a(231));t.Link=o.default,t.withPrefix=o.withPrefix,t.push=o.push,t.replace=o.replace,t.navigateTo=o.navigateTo;var s=r(a(225));t.PageRenderer=s.default;var c=i.default.createContext({});t.StaticQueryContext=c;var d=function(e){return i.default.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=d,d.propTypes={data:l.default.object,query:l.default.string.isRequired,render:l.default.func,children:l.default.func}},220:function(e,t,a){"use strict";var n=a(226),r=a(1),i=a.n(r),l=a(0),o=a.n(l),s=a(232),c=a.n(s),d=a(219),u=function(e){var t=e.siteTitle,a=e.location.pathname===Object(d.withPrefix)("/");return i.a.createElement("div",null,i.a.createElement("div",{style:{margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-evenly",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(d.Link,{to:"/",style:{color:"#ff6f43",textDecoration:"none"}},t," ",a?"v3":"v2")),a?i.a.createElement(d.Link,{to:"/v2",style:{display:"none",color:"white"}},"v2"):i.a.createElement(d.Link,{to:"/v3",style:{color:"white"}},"v3")))},m=(a(223),function(e){var t=e.children,a=(e.data,e.location);return i.a.createElement(d.StaticQuery,{query:"2562398822",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"Lighthouse, perfmatters, web performance"}]}),i.a.createElement(u,{location:a,siteTitle:e.site.siteMetadata.title}),i.a.createElement("a",{style:{position:"absolute",top:0,right:0,display:"block"},href:"https://github.com/izifortune/lighthouse-keeper"},i.a.createElement("img",{style:{border:0},src:"https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67",alt:"Fork me on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"})),i.a.createElement("div",{style:{flex:"1",margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),i.a.createElement("footer",null,i.a.createElement("small",null,"© Copyright 2018, Fabrizio Fortunato MIT")))},data:n})});m.propTypes={children:o.a.node.isRequired},t.a=m},223:function(e,t,a){},224:function(e,t,a){"use strict";var n=a(5);t.__esModule=!0,t.default=void 0;var r=n(a(1)),i=n(a(0)),l=n(a(107)),o=n(a(52)),s=function(e){var t=e.location,a=o.default.getResourcesForPathname(t.pathname);return r.default.createElement(l.default,{location:t,pageResources:a})};s.propTypes={location:i.default.shape({pathname:i.default.string.isRequired}).isRequired};var c=s;t.default=c},225:function(e,t,a){"use strict";var n;e.exports=(n=a(224))&&n.default||n},226:function(e){e.exports={data:{site:{siteMetadata:{title:"Lighthouse Keeper",description:"\nLighthouse Keeper helps you creating performance budgets based on\nlighthouse reports audits from Google. You just select all the\nreports that you are interested and your budget will be calculated.\nNo file is actually uploaded!"}}}}}}]);
//# sourceMappingURL=component---src-pages-v-2-js-bd9917c4add6d09a3279.js.map