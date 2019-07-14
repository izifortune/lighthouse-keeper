(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{178:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return s});var n=a(0),r=a.n(n),i=a(180),o=a(186);var l=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).siteDescription=t.data.site.siteMetadata.description,a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.componentDidMount=function(){this.handleFilesv2=window.handleFiles},l.render=function(){var e=this;return r.a.createElement(o.a,{location:this.props.location},r.a.createElement("h2",null,"Keep your website under budget"),r.a.createElement("p",{className:"description"},"This version of lighthouse keeper works only with audits created with lighthouse v2. If you created reports using v3 please use the following one"," ",r.a.createElement(i.a,{to:"/",style:{color:"white"}}," ","lighthouse-keeper"," ")),r.a.createElement("p",{className:"description"},this.siteDescription),r.a.createElement("div",{id:"drop-area"},r.a.createElement("form",{className:"my-form"},r.a.createElement("p",null,"Select/Drag multiple Lighthouse reports"),r.a.createElement("input",{type:"file",id:"fileElem",multiple:!0,accept:".json",onChange:function(t){return e.handleFiles(t.target.files)}}),r.a.createElement("label",{className:"button",htmlFor:"fileElem"},"Select reports"))),r.a.createElement("div",{id:"charts"},r.a.createElement("div",{className:"score hidden"},r.a.createElement("h2",{className:"score-title"},"Score"),r.a.createElement("div",{id:"chart_score"}),r.a.createElement("div",{id:"legend"}),r.a.createElement("div",{className:"flexy"},r.a.createElement("a",{id:"score__download",className:"button",download:"score.png"},"Download"))),r.a.createElement("div",{className:"bytes hidden"},r.a.createElement("h2",{className:"chart-bytes"},"Bytes"),r.a.createElement("div",{id:"chart_bytes"}),r.a.createElement("div",{className:"flexy"},r.a.createElement("a",{id:"bytes__download",className:"button",download:"bytes.png"},"Download"))),r.a.createElement("div",{className:"timings hidden"},r.a.createElement("h2",{className:"chart-timings"},"Timings"),r.a.createElement("div",{id:"chart_timings"}),r.a.createElement("div",{className:"flexy"},r.a.createElement("a",{id:"timings__download",className:"button",download:"timings.png"},"Download")))),r.a.createElement("div",{id:"parseError",className:"error hidden"},"Oops something wrong happened!!"))},n}(r.a.Component);t.default=l;var s="1047808227"},180:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var n=a(0),r=a.n(n),i=a(58),o=a.n(i);a.d(t,"a",function(){return o.a});a(182);var l=r.a.createContext({});function s(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,o=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var c=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(l.Consumer,null,function(e){return r.a.createElement(s,{data:t,query:a,render:n||i,staticQueryData:e})})}},182:function(e,t,a){var n;e.exports=(n=a(184))&&n.default||n},183:function(e){e.exports={data:{site:{siteMetadata:{title:"Lighthouse Keeper",description:"\nLighthouse Keeper helps you creating performance budgets based on\nlighthouse reports audits from Google. You just select all the\nreports that you are interested and your budget will be calculated.\nNo file is actually uploaded!"}}}}},184:function(e,t,a){"use strict";a.r(t);a(24);var n=a(0),r=a.n(n),i=a(85);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},186:function(e,t,a){"use strict";var n=a(183),r=a(0),i=a.n(r),o=a(188),l=a.n(o),s=a(180),c=function(e){var t=e.siteTitle;e.location;return i.a.createElement("div",null,i.a.createElement("div",{style:{margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-evenly",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"#ff6f43",textDecoration:"none"}},t," ","v4")),i.a.createElement(s.a,{to:"/v2",style:{display:"none",color:"white"}},"v2")))};a(189),t.a=function(e){var t=e.children,a=(e.data,e.location);return i.a.createElement(s.b,{query:"2328579951",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"Lighthouse, perfmatters, web performance"}]}),i.a.createElement(c,{location:a,siteTitle:e.site.siteMetadata.title}),i.a.createElement("a",{style:{position:"absolute",top:0,right:0,display:"block"},href:"https://github.com/izifortune/lighthouse-keeper"},i.a.createElement("img",{style:{border:0},src:"https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67",alt:"Fork me on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"})),i.a.createElement("div",{style:{flex:"1",margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),i.a.createElement("footer",null,i.a.createElement("small",null,"© Copyright 2018, Fabrizio Fortunato MIT")))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-v-2-js-de01597039d17723f090.js.map