(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,a){"use strict";a.r(t);var n=a(150),r=a.n(n),c=(a(151),a(152)),o=a.n(c),i=a(34),l=a.n(i),s=a(6),d=a.n(s),u=a(0),m=a.n(u),f=a(141),b=(a(32),a(73),a(53),a(33),a(74),a(163),Object(f.p)(f.h,1/0)),p=Object(f.i)(.8),g=Object(f.p)(f.g,-1/0),h=Object(f.b)(Object(f.m)("finalUrl"),Object(f.f)(Object(f.l)(Object(f.q)("/"),Object(f.j)(2)))),j=function(e,t){window.google.visualization.events.addListener(e,"ready",function(){document.getElementById(t).href=e.getImageURI()})},O=function(e,t,a){window.resize=function(){e.draw(t,a)}},v=function(e){return document.querySelectorAll(e)[0].classList.remove("hidden")},y=function(e){return document.querySelectorAll(e)[0].classList.add("hidden")},w=function(){var e=o()(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(Array.from(t).map(function(e){return new Promise(function(t,a){var n=new FileReader;n.onload=function(){try{var e=JSON.parse(n.result);t(e)}catch(r){a(r)}},n.readAsText(e)})})));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),E=function(e){return["Metrics"].concat(Object(f.e)([],h,e))},T=Object(f.n)("categories"),S=Object(f.l)(T,Object(f.k)(["performance","score"])),k=Object(f.l)(T,Object(f.k)(["pwa","score"])),x=Object(f.l)(T,Object(f.k)(["accessibility","score"])),F=Object(f.l)(T,Object(f.k)(["best-practices","score"])),N=Object(f.l)(T,Object(f.k)(["seo","score"])),_=Object(f.l)(g,function(e){return e.toFixed(2)},parseFloat);function z(e,t){var a,n=window.google.visualization.arrayToDataTable([[].concat(E(t),["Budget"])].concat(function(e){var t=Object(f.f)(S,e),a=Object(f.f)(k,e),n=Object(f.f)(F,e),r=Object(f.f)(x,e),c=Object(f.f)(N,e),o=_(t),i=_(a),l=_(n),s=_(r),d=_(c);return[["Performance\n "+o].concat(t,[o]),["PWA\n "+i].concat(a,[i]),["Best Practice\n "+l].concat(n,[l]),["Accessibility\n "+s].concat(r,[s]),["SEO\n "+d].concat(c,[d])]}(t))),r={legend:{position:"top",maxLines:1},bar:{groupWidth:"75%"},seriesType:"bars",series:(a={},a[t.length]={type:"line"},a),animation:{startup:!0}};v(".score");var c=new window.google.visualization.ComboChart(document.getElementById(e));j(c,"score__download"),c.draw(n,r),O(c,n,r)}var C=Object(f.n)("audits"),L=Object(f.l)(C,Object(f.k)(["first-meaningful-paint","rawValue"])),q=Object(f.l)(C,Object(f.k)(["first-cpu-idle","rawValue"])),I=Object(f.l)(C,Object(f.k)(["first-contentful-paint","rawValue"])),P=Object(f.l)(C,Object(f.k)(["bootup-time","rawValue"])),B=(Object(f.k)(["speed-index-metric","extendedInfo","value","timings"]),Object(f.k)(["mainthread-work-breakdown","extendedInfo","value"])),D=(Object(f.l)(C,B,Object(f.n)("Evaluate Script")),Object(f.l)(C,B,Object(f.n)("Compile Script")),Object(f.l)(C,B,Object(f.n)("Minor GC")),Object(f.l)(C,Object(f.k)(["time-to-first-byte","rawValue"]))),M=Object(f.l)(b,p,function(e){return e.toFixed(2)},parseFloat),R=function(e){var t=Object(f.f)(L,e),a=Object(f.f)(I,e),n=Object(f.f)(q,e),r=Object(f.f)(D,e),c=Object(f.f)(P,e),o=M(t),i=M(a),l=M(n),s=M(r),d=M(c);return[["First MeaningfulPaint\n "+o].concat(t,[o]),["First Contentful Paint\n "+i].concat(a,[i]),["CpuIdle\n "+l].concat(n,[l]),["Time to first byte\n "+s].concat(r,[s]),["Bootup Time\n "+d].concat(c,[d])]},A=function(e){return new window.google.visualization.NumberFormat({suffix:e})};function Y(e,t){var a,n=window.google.visualization.arrayToDataTable([[].concat(E(t),["Budget"])].concat(R(t))),r={legend:{position:"top",maxLines:1},bar:{groupWidth:"75%"},seriesType:"bars",series:(a={},a[t.length]={type:"line"},a)};v(".timings");var c=new window.google.visualization.ComboChart(document.getElementById(e)),o=new A(" ms");t.forEach(function(e,t){o.format(n,t+1)}),o.format(n,t.length+1),j(c,"timings__download"),c.draw(n,r),O(c,n,r)}var V=a(165),W=a.n(V),G=Object(f.l)(C,Object(f.n)("network-requests")),J=Object(f.l)(G,Object(f.k)(["details","items"])),K=(Object(f.l)(G,Object(f.n)("rawValue")),Object(f.o)("resourceType",W.a.TYPES.Script)),H=Object(f.o)("resourceType",W.a.TYPES.Stylesheet),U=Object(f.o)("resourceType",W.a.TYPES.XHR),X=Object(f.o)("resourceType",W.a.TYPES.Document),Q=Object(f.o)("resourceType",W.a.TYPES.Image),Z=Object(f.o)("resourceType",W.a.TYPES.Font),$=Object(f.l)(J,Object(f.m)("transferSize"),f.r),ee=Object(f.l)(J,Object(f.d)(X),Object(f.m)("transferSize"),f.r),te=Object(f.l)(J,Object(f.d)(K),Object(f.m)("transferSize"),f.r),ae=Object(f.l)(J,Object(f.d)(H),Object(f.m)("transferSize"),f.r),ne=Object(f.l)(J,Object(f.d)(U),Object(f.m)("transferSize"),f.r),re=Object(f.l)(J,Object(f.d)(Q),Object(f.m)("transferSize"),f.r),ce=Object(f.l)(J,Object(f.d)(Z),Object(f.m)("transferSize"),f.r),oe=Object(f.c)(f.a,1e3),ie=Object(f.l)(b,p,function(e){return e.toFixed(2)},parseFloat),le=function(e){var t=Object(f.f)(Object(f.l)($,oe),e),a=Object(f.f)(Object(f.l)(ee,oe),e),n=Object(f.f)(Object(f.l)(te,oe),e),r=Object(f.f)(Object(f.l)(ae,oe),e),c=Object(f.f)(Object(f.l)(re,oe),e),o=Object(f.f)(Object(f.l)(ce,oe),e),i=Object(f.f)(Object(f.l)(ne,oe),e),l=ie(t),s=ie(n),d=ie(r),u=ie(c),m=ie(o),b=ie(i),p=ie(a);return[["Total Size\n "+l].concat(t,[l]),["Total Document\n "+p].concat(a,[p]),["Total JS\n "+s].concat(n,[s]),["Total CSS\n "+d].concat(r,[d]),["Total IMG\n "+u].concat(c,[u]),["Total Font\n "+m].concat(o,[m]),["Total XHR\n "+b].concat(i,[b])]};function se(e,t){var a,n=window.google.visualization.arrayToDataTable([[].concat(E(t),["Budget"])].concat(le(t))),r={legend:{position:"top",maxLines:1},bar:{groupWidth:"75%"},seriesType:"bars",series:(a={},a[t.length]={type:"line"},a)},c=A(" KB");t.forEach(function(e,t){c.format(n,t+1)}),c.format(n,t.length+1),v(".bytes");var o=new window.google.visualization.ComboChart(document.getElementById(e));j(o,"bytes__download"),o.draw(n,r),O(o,n,r)}var de=function(e){e.preventDefault(),e.stopPropagation()},ue=a(145);a.d(t,"query",function(){return fe});var me=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleFiles=a.handleFiles.bind(l()(a)),a.siteDescription=t.data.site.siteMetadata.description,a}d()(t,e);var a=t.prototype;return a.handleFiles=function(){var e=o()(r.a.mark(function e(t){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:a=e.sent,n=function(){try{y("#parseError"),v("#charts"),z("chart_score",a),se("chart_bytes",a),Y("chart_timings",a)}catch(e){console.error(e),y("#charts"),v("#parseError")}},window.requestIdleCallback?requestIdleCallback(n):requestAnimationFrame(n);case 4:case"end":return e.stop()}var n},e)}));return function(t){return e.apply(this,arguments)}}(),a.componentDidMount=function(){var e,t,a,n,r,c;e="www.gstatic.com/charts/loader.js",t=function(){window.google.charts.load("current",{packages:["corechart"]})},a=document,n="script",r=a.createElement(n),c=a.getElementsByTagName(n)[0],r.src="//"+e,t&&r.addEventListener("load",function(e){t(null,e)},!1),c.parentNode.insertBefore(r,c),function(e,t){var a=document.getElementById(e);function n(e){a.classList.add("highlight")}function r(e){a.classList.remove("highlight")}["dragenter","dragover","dragleave","drop"].forEach(function(e){a.addEventListener(e,de,!1)}),["dragenter","dragover"].forEach(function(e){a.addEventListener(e,n,!1)}),["dragleave","drop"].forEach(function(e){a.addEventListener(e,r,!1)});a.addEventListener("drop",function(e){return function(t){var a=t.dataTransfer.files;e(a)}}(t),!1)}("drop-area",this.handleFiles)},a.render=function(){var e=this;return m.a.createElement(ue.a,{location:this.props.location},m.a.createElement("h2",null,"Keep your website under budget"),m.a.createElement("p",{className:"description"},this.siteDescription),m.a.createElement("div",{id:"drop-area"},m.a.createElement("form",{className:"my-form"},m.a.createElement("p",null,"Select/Drag multiple Lighthouse reports"),m.a.createElement("input",{type:"file",id:"fileElem",multiple:!0,onChange:function(t){return e.handleFiles(t.target.files)}}),m.a.createElement("label",{className:"button",htmlFor:"fileElem"},"Select reports"))),m.a.createElement("div",{id:"charts"},m.a.createElement("div",{className:"score hidden"},m.a.createElement("h2",{className:"score-title"},"Score"),m.a.createElement("div",{id:"chart_score"}),m.a.createElement("div",{id:"legend"}),m.a.createElement("div",{className:"flexy"},m.a.createElement("a",{id:"score__download",className:"button",download:"score.png"},"Download"))),m.a.createElement("div",{className:"bytes hidden"},m.a.createElement("h2",{className:"chart-bytes"},"Bytes"),m.a.createElement("div",{id:"chart_bytes"}),m.a.createElement("div",{className:"flexy"},m.a.createElement("a",{id:"bytes__download",className:"button",download:"bytes.png"},"Download"))),m.a.createElement("div",{className:"timings hidden"},m.a.createElement("h2",{className:"chart-timings"},"Timings"),m.a.createElement("div",{id:"chart_timings"}),m.a.createElement("div",{className:"flexy"},m.a.createElement("a",{id:"timings__download",className:"button",download:"timings.png"},"Download")))),m.a.createElement("div",{id:"parseError",className:"error hidden"},"Oops something wrong happened!!"))},t}(m.a.Component),fe=(t.default=me,"479944824")},140:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),c=a(4),o=a.n(c),i=a(28),l=a.n(i);a.d(t,"a",function(){return l.a});a(142);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},142:function(e,t,a){var n;e.exports=(n=a(144))&&n.default||n},143:function(e){e.exports={data:{site:{siteMetadata:{title:"Lighthouse Keeper",description:"\nLighthouse Keeper helps you creating performance budgets based on\nlighthouse reports audits from Google. You just select all the\nreports that you are interested and your budget will be calculated.\nNo file is actually uploaded!"}}}}},144:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),i=a(51),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},145:function(e,t,a){"use strict";var n=a(143),r=a(0),c=a.n(r),o=a(4),i=a.n(o),l=a(146),s=a.n(l),d=a(140),u=function(e){var t=e.siteTitle;e.location;return c.a.createElement("div",null,c.a.createElement("div",{style:{margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-evenly",maxWidth:960,padding:"1.45rem 1.0875rem"}},c.a.createElement("h1",{style:{margin:0}},c.a.createElement(d.a,{to:"/",style:{color:"#ff6f43",textDecoration:"none"}},t," ","v3")),c.a.createElement(d.a,{to:"/v2",style:{display:"none",color:"white"}},"v2")))},m=(a(148),function(e){var t=e.children,a=(e.data,e.location);return c.a.createElement(d.b,{query:"2328579951",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"Lighthouse, perfmatters, web performance"}]}),c.a.createElement(u,{location:a,siteTitle:e.site.siteMetadata.title}),c.a.createElement("a",{style:{position:"absolute",top:0,right:0,display:"block"},href:"https://github.com/izifortune/lighthouse-keeper"},c.a.createElement("img",{style:{border:0},src:"https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67",alt:"Fork me on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"})),c.a.createElement("div",{style:{flex:"1",margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),c.a.createElement("footer",null,c.a.createElement("small",null,"© Copyright 2018, Fabrizio Fortunato MIT")))},data:n})});m.propTypes={children:i.a.node.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-pages-index-js-a05db79bc2e522cbaf0c.js.map