(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(e,t,a){"use strict";a.r(t);var n=a(156),r=a.n(n),c=(a(154),a(157)),o=a.n(c),i=(a(168),a(8)),s=a.n(i),l=a(52),u=a.n(l),d=a(0),m=a.n(d),b=a(146),f=(a(55),a(30),a(78),a(56),a(85),a(170),Object(b.p)(b.i,1/0)),g=Object(b.j)(.8),p=Object(b.p)(b.h,-1/0),h=Object(b.b)(Object(b.n)("finalUrl"),Object(b.g)(Object(b.m)(Object(b.q)("/"),Object(b.k)(2)))),j=function(e,t){window.google.visualization.events.addListener(e,"ready",function(){document.getElementById(t).href=e.getImageURI()})},O=function(e,t,a){window.resize=function(){e.draw(t,a)}},y=function(e){return document.querySelectorAll(e)[0].classList.remove("hidden")},v=function(e){return document.querySelectorAll(e)[0].classList.add("hidden")},w=function(){var e=o()(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(Array.from(t).map(function(e){return new Promise(function(t,a){var n=new FileReader;n.onload=function(){try{var e=JSON.parse(n.result);t(e)}catch(e){a(e)}},n.readAsText(e)})})));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),E=function(e){return["Metrics"].concat(Object(b.f)([],h,e))},x=Object(b.o)("categories"),T=Object(b.m)(x,Object(b.l)(["performance","score"])),C=Object(b.m)(x,Object(b.l)(["pwa","score"])),F=Object(b.m)(x,Object(b.l)(["accessibility","score"])),N=Object(b.m)(x,Object(b.l)(["best-practices","score"])),k=Object(b.m)(x,Object(b.l)(["seo","score"])),L=Object(b.m)(p,function(e){return e.toFixed(2)},parseFloat);function _(e){var t=Object(b.g)(T,e),a=Object(b.g)(C,e),n=Object(b.g)(N,e),r=Object(b.g)(F,e),c=Object(b.g)(k,e),o=L(t),i=L(a),s=L(n),l=L(r),u=L(c);return[["Performance\n "+o].concat(t,[o]),["PWA\n "+i].concat(a,[i]),["Best Practice\n "+s].concat(n,[s]),["Accessibility\n "+l].concat(r,[l]),["SEO\n "+u].concat(c,[u])]}function q(e,t){var a,n;(a=console).log.apply(a,_(t));var r=window.google.visualization.arrayToDataTable([E(t).concat(["Budget"])].concat(_(t))),c={legend:{position:"top",maxLines:1},bar:{groupWidth:"75%"},seriesType:"bars",series:(n={},n[t.length]={type:"line"},n),animation:{startup:!0}};y(".score");var o=new window.google.visualization.ComboChart(document.getElementById(e));j(o,"score__download"),o.draw(r,c),O(o,r,c)}a(79);var S=Object(b.o)("audits"),B=Object(b.m)(S,Object(b.l)(["first-meaningful-paint","rawValue"])),I=Object(b.m)(S,Object(b.l)(["first-interactive","rawValue"])),z=Object(b.l)(["speed-index-metric","extendedInfo","value","timings"]),P=Object(b.m)(S,z,Object(b.o)("visuallyComplete")),D=Object(b.m)(S,z,Object(b.o)("firstVisualChange")),M=Object(b.l)(["mainthread-work-breakdown","extendedInfo","value"]),R=Object(b.m)(S,M,Object(b.o)("Evaluate Script")),A=Object(b.m)(S,M,Object(b.o)("Compile Script")),G=Object(b.m)(S,M,Object(b.o)("Minor GC")),V=Object(b.c)(function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return Object(b.r)(t)},[R,A,G]),J=Object(b.m)(S,Object(b.l)(["time-to-first-byte","rawValue"])),W=Object(b.m)(f,g,function(e){return e.toFixed(2)},parseFloat),K=function(e){var t=Object(b.g)(B,e),a=Object(b.g)(D,e),n=Object(b.g)(I,e),r=Object(b.g)(P,e),c=Object(b.g)(J,e),o=Object(b.g)(V,e),i=W(t),s=W(a),l=W(n),u=W(r),d=W(c),m=W(o);return[["First MeaningfulPaint\n "+i].concat(t,[i]),["First Visual Change\n "+s].concat(a,[s]),["First Interactive\n "+l].concat(n,[l]),["Visually Complete\n "+u].concat(r,[u]),["Time to first byte\n "+d].concat(c,[d]),["JS Parse & Compile\n "+m].concat(o,[m])]},Q=function(e){return new window.google.visualization.NumberFormat({suffix:e})};function U(e,t){var a,n=window.google.visualization.arrayToDataTable([E(t).concat(["Budget"])].concat(K(t))),r={legend:{position:"top",maxLines:1},bar:{groupWidth:"75%"},seriesType:"bars",series:(a={},a[t.length]={type:"line"},a)};y(".timings");var c=new window.google.visualization.ComboChart(document.getElementById(e)),o=new Q(" ms");t.forEach(function(e,t){o.format(n,t+1)}),o.format(n,t.length+1),j(c,"timings__download"),c.draw(n,r),O(c,n,r)}var $=Object(b.m)(S,Object(b.o)("total-byte-weight")),H=Object(b.m)($,Object(b.l)(["details","items"])),Y=Object(b.m)($,Object(b.o)("rawValue")),X=Object(b.s)(/\.js$/g),Z=Object(b.s)(/\.css$/g),ee=Object(b.s)(/\.json$/g),te=Object(b.s)(/\.(png|jpg|jpeg|svg|webp|gif)/g),ae=Object(b.s)(/\.(ttf|woff|woff2|otf|eot)/g),ne=Object(b.m)(Object(b.o)("url"),X),re=Object(b.m)(Object(b.o)("url"),Z),ce=Object(b.m)(Object(b.o)("url"),ee),oe=Object(b.m)(Object(b.o)("url"),te),ie=Object(b.m)(Object(b.o)("url"),ae),se=Object(b.m)(H,Object(b.e)(ne),Object(b.n)("totalBytes"),b.r),le=Object(b.m)(H,Object(b.e)(re),Object(b.n)("totalBytes"),b.r),ue=Object(b.m)(H,Object(b.e)(ce),Object(b.n)("totalBytes"),b.r),de=Object(b.m)(H,Object(b.e)(oe),Object(b.n)("totalBytes"),b.r),me=Object(b.m)(H,Object(b.e)(ie),Object(b.n)("totalBytes"),b.r),be=(Object(b.m)(S,Object(b.l)(["total-byte-weight","extendedInfo","value","totalCompletedRequests"])),Object(b.d)(b.a,1e3)),fe=Object(b.m)(f,g,function(e){return e.toFixed(2)},parseFloat),ge=function(e){var t=Object(b.g)(Object(b.m)(Y,be),e),a=Object(b.g)(Object(b.m)(se,be),e),n=Object(b.g)(Object(b.m)(le,be),e),r=Object(b.g)(Object(b.m)(de,be),e),c=Object(b.g)(Object(b.m)(me,be),e),o=Object(b.g)(Object(b.m)(ue,be),e),i=fe(t),s=fe(a),l=fe(n),u=fe(r),d=fe(c),m=fe(o);return[["Total Size\n "+i].concat(t,[i]),["Total JS\n "+s].concat(a,[s]),["Total CSS\n "+l].concat(n,[l]),["Total IMG\n "+u].concat(r,[u]),["Total Font\n "+d].concat(c,[d]),["Total JSON\n "+m].concat(o,[m])]};function pe(e,t){var a,n=window.google.visualization.arrayToDataTable([E(t).concat(["Budget"])].concat(ge(t))),r={legend:{position:"top",maxLines:1},bar:{groupWidth:"75%"},seriesType:"bars",series:(a={},a[t.length]={type:"line"},a)},c=Q(" KB");t.forEach(function(e,t){c.format(n,t+1)}),c.format(n,t.length+1),y(".bytes");var o=new window.google.visualization.ComboChart(document.getElementById(e));j(o,"bytes__download"),o.draw(n,r),O(o,n,r)}var he=function(e){e.preventDefault(),e.stopPropagation()},je=a(151);a.d(t,"query",function(){return ye});var Oe=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleFiles=a.handleFiles.bind(u()(u()(a))),a.siteDescription=t.data.site.siteMetadata.description,a}s()(t,e);var a=t.prototype;return a.handleFiles=function(){var e=o()(r.a.mark(function e(t){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:a=e.sent,n=function(){try{v("#parseError"),y("#charts"),q("chart_score",a),pe("chart_bytes",a),U("chart_timings",a)}catch(e){v("#charts"),y("#parseError")}},window.requestIdleCallback?requestIdleCallback(n):requestAnimationFrame(n);case 4:case"end":return e.stop()}var n},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.componentDidMount=function(){var e,t,a,n,r,c;e="www.gstatic.com/charts/loader.js",t=function(){window.google.charts.load("current",{packages:["corechart"]})},a=document,n="script",r=a.createElement(n),c=a.getElementsByTagName(n)[0],r.src="//"+e,t&&r.addEventListener("load",function(e){t(null,e)},!1),c.parentNode.insertBefore(r,c),function(e,t){var a=document.getElementById(e);function n(e){a.classList.add("highlight")}function r(e){a.classList.remove("highlight")}["dragenter","dragover","dragleave","drop"].forEach(function(e){a.addEventListener(e,he,!1)}),["dragenter","dragover"].forEach(function(e){a.addEventListener(e,n,!1)}),["dragleave","drop"].forEach(function(e){a.addEventListener(e,r,!1)});a.addEventListener("drop",function(e){return function(t){var a=t.dataTransfer.files;e(a)}}(t),!1)}("drop-area",this.handleFiles)},a.render=function(){var e=this;return m.a.createElement(je.a,{location:this.props.location},m.a.createElement("h2",null,"Keep your website under budget"),m.a.createElement("p",{className:"description"},this.siteDescription),m.a.createElement("div",{id:"drop-area"},m.a.createElement("form",{className:"my-form"},m.a.createElement("p",null,"Select/Drag multiple Lighthouse reports"),m.a.createElement("input",{type:"file",id:"fileElem",multiple:!0,accept:".json",onChange:function(t){return e.handleFiles(t.target.files)}}),m.a.createElement("label",{className:"button",htmlFor:"fileElem"},"Select reports"))),m.a.createElement("div",{id:"charts"},m.a.createElement("div",{className:"score hidden"},m.a.createElement("h2",{className:"score-title"},"Score"),m.a.createElement("div",{id:"chart_score"}),m.a.createElement("div",{id:"legend"}),m.a.createElement("div",{className:"flexy"},m.a.createElement("a",{id:"score__download",className:"button",download:"score.png"},"Download"))),m.a.createElement("div",{className:"bytes hidden"},m.a.createElement("h2",{className:"chart-bytes"},"Bytes"),m.a.createElement("div",{id:"chart_bytes"}),m.a.createElement("div",{className:"flexy"},m.a.createElement("a",{id:"bytes__download",className:"button",download:"bytes.png"},"Download"))),m.a.createElement("div",{className:"timings hidden"},m.a.createElement("h2",{className:"chart-timings"},"Timings"),m.a.createElement("div",{id:"chart_timings"}),m.a.createElement("div",{className:"flexy"},m.a.createElement("a",{id:"timings__download",className:"button",download:"timings.png"},"Download")))),m.a.createElement("div",{id:"parseError",className:"error hidden"},"Oops something wrong happened!!"))},t}(m.a.Component),ye=(t.default=Oe,"479944824")},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return b}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),c=a(4),o=a.n(c),i=a(144),s=a.n(i);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var l=a(26);a.d(t,"waitForRouteChange",function(){return l.c});var u=a(147),d=a.n(u);a.d(t,"PageRenderer",function(){return d.a});var m=a(37);a.d(t,"parsePath",function(){return m.a});var b=r.a.createContext({}),f=function(e){return r.a.createElement(b.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Lighthouse Keeper",description:"\nLighthouse Keeper helps you creating performance budgets based on\nlighthouse reports audits from Google. You just select all the\nreports that you are interested and your budget will be calculated.\nNo file is actually uploaded!"}}}}},149:function(e,t,a){"use strict";a.r(t);a(38);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),i=a(53),s=a(1),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},150:function(e,t,a){},151:function(e,t,a){"use strict";var n=a(148),r=a(0),c=a.n(r),o=a(4),i=a.n(o),s=a(152),l=a.n(s),u=a(145),d=function(e){var t=e.siteTitle;e.location;return c.a.createElement("div",null,c.a.createElement("div",{style:{margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-evenly",maxWidth:960,padding:"1.45rem 1.0875rem"}},c.a.createElement("h1",{style:{margin:0}},c.a.createElement(u.Link,{to:"/",style:{color:"#ff6f43",textDecoration:"none"}},t," ","v3")),c.a.createElement(u.Link,{to:"/v2",style:{display:"none",color:"white"}},"v2")))},m=(a(150),function(e){var t=e.children,a=(e.data,e.location);return c.a.createElement(u.StaticQuery,{query:"2328579951",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"Lighthouse, perfmatters, web performance"}]}),c.a.createElement(d,{location:a,siteTitle:e.site.siteMetadata.title}),c.a.createElement("a",{style:{position:"absolute",top:0,right:0,display:"block"},href:"https://github.com/izifortune/lighthouse-keeper"},c.a.createElement("img",{style:{border:0},src:"https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67",alt:"Fork me on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"})),c.a.createElement("div",{style:{flex:"1",margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),c.a.createElement("footer",null,c.a.createElement("small",null,"© Copyright 2018, Fabrizio Fortunato MIT")))},data:n})});m.propTypes={children:i.a.node.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-pages-index-js-54862a7fe461bf2a3bad.js.map