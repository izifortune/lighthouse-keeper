(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,t,n){"use strict";n.r(t);var a=n(153),r=n.n(a),c=(n(151),n(154)),o=n.n(c),i=(n(166),n(7)),s=n.n(i),l=n(48),u=n.n(l),d=n(0),m=n.n(d),b=n(143),f=(n(51),n(36),n(75),n(52),n(82),n(168),Object(b.q)(b.i,1/0)),p=Object(b.j)(.8),g=Object(b.q)(b.h,-1/0),h=Object(b.b)(Object(b.n)("finalUrl"),Object(b.g)(Object(b.m)(Object(b.r)("/"),Object(b.k)(2)))),j=function(e,t){window.google.visualization.events.addListener(e,"ready",function(){document.getElementById(t).href=e.getImageURI()})},O=function(e,t,n){window.resize=function(){e.draw(t,n)}},y=function(e){return document.querySelectorAll(e)[0].classList.remove("hidden")},v=function(e){return document.querySelectorAll(e)[0].classList.add("hidden")},w=function(){var e=o()(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(Array.from(t).map(function(e){return new Promise(function(t,n){var a=new FileReader;a.onload=function(){try{var e=JSON.parse(a.result);t(e)}catch(e){n(e)}},a.readAsText(e)})})));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),E=function(e){return["Metrics"].concat(Object(b.f)([],h,e))},T=Object(b.o)("categories"),S=Object(b.m)(T,Object(b.l)(["performance","score"])),x=Object(b.m)(T,Object(b.l)(["pwa","score"])),F=Object(b.m)(T,Object(b.l)(["accessibility","score"])),C=Object(b.m)(T,Object(b.l)(["best-practices","score"])),k=Object(b.m)(T,Object(b.l)(["seo","score"])),q=Object(b.m)(g,function(e){return e.toFixed(2)},parseFloat);function L(e,t){var n,a=window.google.visualization.arrayToDataTable([E(t).concat(["Budget"])].concat(function(e){var t=Object(b.g)(S,e),n=Object(b.g)(x,e),a=Object(b.g)(C,e),r=Object(b.g)(F,e),c=Object(b.g)(k,e),o=q(t),i=q(n),s=q(a),l=q(r),u=q(c);return[["Performance\n "+o].concat(t,[o]),["PWA\n "+i].concat(n,[i]),["Best Practice\n "+s].concat(a,[s]),["Accessibility\n "+l].concat(r,[l]),["SEO\n "+u].concat(c,[u])]}(t))),r={legend:{position:"top",maxLines:1},bar:{groupWidth:"75%"},seriesType:"bars",series:(n={},n[t.length]={type:"line"},n),animation:{startup:!0}};y(".score");var c=new window.google.visualization.ComboChart(document.getElementById(e));j(c,"score__download"),c.draw(a,r),O(c,a,r)}n(76);var N=Object(b.o)("audits"),_=Object(b.m)(N,Object(b.l)(["first-meaningful-paint","rawValue"])),z=Object(b.m)(N,Object(b.l)(["first-interactive","rawValue"])),P=Object(b.l)(["speed-index-metric","extendedInfo","value","timings"]),I=Object(b.m)(N,P,Object(b.o)("visuallyComplete")),D=Object(b.m)(N,P,Object(b.o)("firstVisualChange")),B=Object(b.l)(["mainthread-work-breakdown","extendedInfo","value"]),M=Object(b.m)(N,B,Object(b.o)("Evaluate Script")),R=Object(b.m)(N,B,Object(b.o)("Compile Script")),A=Object(b.m)(N,B,Object(b.o)("Minor GC")),G=Object(b.c)(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(b.s)(t)},[M,R,A]),V=Object(b.m)(N,Object(b.l)(["time-to-first-byte","rawValue"])),Y=Object(b.m)(f,p,function(e){return e.toFixed(2)},parseFloat),W=function(e){var t=Object(b.g)(_,e),n=Object(b.g)(D,e),a=Object(b.g)(z,e),r=Object(b.g)(I,e),c=Object(b.g)(V,e),o=Object(b.g)(G,e),i=Y(t),s=Y(n),l=Y(a),u=Y(r),d=Y(c),m=Y(o);return[["First MeaningfulPaint\n "+i].concat(t,[i]),["First Visual Change\n "+s].concat(n,[s]),["First Interactive\n "+l].concat(a,[l]),["Visually Complete\n "+u].concat(r,[u]),["Time to first byte\n "+d].concat(c,[d]),["JS Parse & Compile\n "+m].concat(o,[m])]},J=function(e){return new window.google.visualization.NumberFormat({suffix:e})};function K(e,t){var n,a=window.google.visualization.arrayToDataTable([E(t).concat(["Budget"])].concat(W(t))),r={legend:{position:"top",maxLines:1},bar:{groupWidth:"75%"},seriesType:"bars",series:(n={},n[t.length]={type:"line"},n)};y(".timings");var c=new window.google.visualization.ComboChart(document.getElementById(e)),o=new J(" ms");t.forEach(function(e,t){o.format(a,t+1)}),o.format(a,t.length+1),j(c,"timings__download"),c.draw(a,r),O(c,a,r)}var Q=n(170),U=n.n(Q),H=Object(b.m)(N,Object(b.o)("network-requests")),X=Object(b.m)(H,Object(b.l)(["details","items"])),Z=(Object(b.m)(H,Object(b.o)("rawValue")),Object(b.p)("resourceType",U.a.TYPES.Script)),$=Object(b.p)("resourceType",U.a.TYPES.Stylesheet),ee=Object(b.p)("resourceType",U.a.TYPES.XHR),te=Object(b.p)("resourceType",U.a.TYPES.Document),ne=Object(b.p)("resourceType",U.a.TYPES.Image),ae=Object(b.p)("resourceType",U.a.TYPES.Font),re=Object(b.m)(X,Object(b.n)("transferSize"),b.s),ce=Object(b.m)(X,Object(b.e)(te),Object(b.n)("transferSize"),b.s),oe=Object(b.m)(X,Object(b.e)(Z),Object(b.n)("transferSize"),b.s),ie=Object(b.m)(X,Object(b.e)($),Object(b.n)("transferSize"),b.s),se=Object(b.m)(X,Object(b.e)(ee),Object(b.n)("transferSize"),b.s),le=Object(b.m)(X,Object(b.e)(ne),Object(b.n)("transferSize"),b.s),ue=Object(b.m)(X,Object(b.e)(ae),Object(b.n)("transferSize"),b.s),de=Object(b.d)(b.a,1e3),me=Object(b.m)(f,p,function(e){return e.toFixed(2)},parseFloat),be=function(e){var t=Object(b.g)(Object(b.m)(re,de),e),n=Object(b.g)(Object(b.m)(ce,de),e),a=Object(b.g)(Object(b.m)(oe,de),e),r=Object(b.g)(Object(b.m)(ie,de),e),c=Object(b.g)(Object(b.m)(le,de),e),o=Object(b.g)(Object(b.m)(ue,de),e),i=Object(b.g)(Object(b.m)(se,de),e),s=me(t),l=me(a),u=me(r),d=me(c),m=me(o),f=me(i),p=me(n);return[["Total Size\n "+s].concat(t,[s]),["Total Document\n "+p].concat(n,[p]),["Total JS\n "+l].concat(a,[l]),["Total CSS\n "+u].concat(r,[u]),["Total IMG\n "+d].concat(c,[d]),["Total Font\n "+m].concat(o,[m]),["Total XHR\n "+f].concat(i,[f])]};function fe(e,t){var n,a=window.google.visualization.arrayToDataTable([E(t).concat(["Budget"])].concat(be(t))),r={legend:{position:"top",maxLines:1},bar:{groupWidth:"75%"},seriesType:"bars",series:(n={},n[t.length]={type:"line"},n)},c=J(" KB");t.forEach(function(e,t){c.format(a,t+1)}),c.format(a,t.length+1),y(".bytes");var o=new window.google.visualization.ComboChart(document.getElementById(e));j(o,"bytes__download"),o.draw(a,r),O(o,a,r)}var pe=function(e){e.preventDefault(),e.stopPropagation()},ge=n(148);n.d(t,"query",function(){return je});var he=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleFiles=n.handleFiles.bind(u()(u()(n))),n.siteDescription=t.data.site.siteMetadata.description,n}s()(t,e);var n=t.prototype;return n.handleFiles=function(){var e=o()(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:n=e.sent,a=function(){try{v("#parseError"),y("#charts"),L("chart_score",n),fe("chart_bytes",n),K("chart_timings",n)}catch(e){console.error(e),v("#charts"),y("#parseError")}},window.requestIdleCallback?requestIdleCallback(a):requestAnimationFrame(a);case 4:case"end":return e.stop()}var a},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.componentDidMount=function(){var e,t,n,a,r,c;e="www.gstatic.com/charts/loader.js",t=function(){window.google.charts.load("current",{packages:["corechart"]})},n=document,a="script",r=n.createElement(a),c=n.getElementsByTagName(a)[0],r.src="//"+e,t&&r.addEventListener("load",function(e){t(null,e)},!1),c.parentNode.insertBefore(r,c),function(e,t){var n=document.getElementById(e);function a(e){n.classList.add("highlight")}function r(e){n.classList.remove("highlight")}["dragenter","dragover","dragleave","drop"].forEach(function(e){n.addEventListener(e,pe,!1)}),["dragenter","dragover"].forEach(function(e){n.addEventListener(e,a,!1)}),["dragleave","drop"].forEach(function(e){n.addEventListener(e,r,!1)});n.addEventListener("drop",function(e){return function(t){var n=t.dataTransfer.files;e(n)}}(t),!1)}("drop-area",this.handleFiles)},n.render=function(){var e=this;return m.a.createElement(ge.a,{location:this.props.location},m.a.createElement("h2",null,"Keep your website under budget"),m.a.createElement("p",{className:"description"},this.siteDescription),m.a.createElement("div",{id:"drop-area"},m.a.createElement("form",{className:"my-form"},m.a.createElement("p",null,"Select/Drag multiple Lighthouse reports"),m.a.createElement("input",{type:"file",id:"fileElem",multiple:!0,onChange:function(t){return e.handleFiles(t.target.files)}}),m.a.createElement("label",{className:"button",htmlFor:"fileElem"},"Select reports"))),m.a.createElement("div",{id:"charts"},m.a.createElement("div",{className:"score hidden"},m.a.createElement("h2",{className:"score-title"},"Score"),m.a.createElement("div",{id:"chart_score"}),m.a.createElement("div",{id:"legend"}),m.a.createElement("div",{className:"flexy"},m.a.createElement("a",{id:"score__download",className:"button",download:"score.png"},"Download"))),m.a.createElement("div",{className:"bytes hidden"},m.a.createElement("h2",{className:"chart-bytes"},"Bytes"),m.a.createElement("div",{id:"chart_bytes"}),m.a.createElement("div",{className:"flexy"},m.a.createElement("a",{id:"bytes__download",className:"button",download:"bytes.png"},"Download"))),m.a.createElement("div",{className:"timings hidden"},m.a.createElement("h2",{className:"chart-timings"},"Timings"),m.a.createElement("div",{id:"chart_timings"}),m.a.createElement("div",{className:"flexy"},m.a.createElement("a",{id:"timings__download",className:"button",download:"timings.png"},"Download")))),m.a.createElement("div",{id:"parseError",className:"error hidden"},"Oops something wrong happened!!"))},t}(m.a.Component),je=(t.default=he,"479944824")},142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return b});var a=n(0),r=n.n(a),c=n(4),o=n.n(c),i=n(141),s=n.n(i);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var l=n(144),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),b=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}b.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,n){var a;e.exports=(a=n(146))&&a.default||a},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Lighthouse Keeper",description:"\nLighthouse Keeper helps you creating performance budgets based on\nlighthouse reports audits from Google. You just select all the\nreports that you are interested and your budget will be calculated.\nNo file is actually uploaded!"}}}}},146:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),i=n(49),s=n(2),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},147:function(e,t,n){},148:function(e,t,n){"use strict";var a=n(145),r=n(0),c=n.n(r),o=n(4),i=n.n(o),s=n(149),l=n.n(s),u=n(142),d=function(e){var t=e.siteTitle;e.location;return c.a.createElement("div",null,c.a.createElement("div",{style:{margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-evenly",maxWidth:960,padding:"1.45rem 1.0875rem"}},c.a.createElement("h1",{style:{margin:0}},c.a.createElement(u.Link,{to:"/",style:{color:"#ff6f43",textDecoration:"none"}},t," ","v3")),c.a.createElement(u.Link,{to:"/v2",style:{display:"none",color:"white"}},"v2")))},m=(n(147),function(e){var t=e.children,n=(e.data,e.location);return c.a.createElement(u.StaticQuery,{query:"2328579951",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"Lighthouse, perfmatters, web performance"}]}),c.a.createElement(d,{location:n,siteTitle:e.site.siteMetadata.title}),c.a.createElement("a",{style:{position:"absolute",top:0,right:0,display:"block"},href:"https://github.com/izifortune/lighthouse-keeper"},c.a.createElement("img",{style:{border:0},src:"https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67",alt:"Fork me on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"})),c.a.createElement("div",{style:{flex:"1",margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),c.a.createElement("footer",null,c.a.createElement("small",null,"© Copyright 2018, Fabrizio Fortunato MIT")))},data:a})});m.propTypes={children:i.a.node.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-pages-index-js-b806d9b741cf2627f1d0.js.map