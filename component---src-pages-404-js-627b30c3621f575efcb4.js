(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(151);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(144),c=a.n(u);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return u.withPrefix}),a.d(t,"navigate",function(){return u.navigate}),a.d(t,"push",function(){return u.push}),a.d(t,"replace",function(){return u.replace}),a.d(t,"navigateTo",function(){return u.navigateTo});var l=a(26);a.d(t,"waitForRouteChange",function(){return l.c});var s=a(147),d=a.n(s);a.d(t,"PageRenderer",function(){return d.a});var f=a(37);a.d(t,"parsePath",function(){return f.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Lighthouse Keeper",description:"\nLighthouse Keeper helps you creating performance budgets based on\nlighthouse reports audits from Google. You just select all the\nreports that you are interested and your budget will be calculated.\nNo file is actually uploaded!"}}}}},149:function(e,t,a){"use strict";a.r(t);a(38);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(53),c=a(1),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},150:function(e,t,a){},151:function(e,t,a){"use strict";var n=a(148),r=a(0),i=a.n(r),o=a(4),u=a.n(o),c=a(152),l=a.n(c),s=a(145),d=function(e){var t=e.siteTitle;e.location;return i.a.createElement("div",null,i.a.createElement("div",{style:{margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-evenly",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.Link,{to:"/",style:{color:"#ff6f43",textDecoration:"none"}},t," ","v3")),i.a.createElement(s.Link,{to:"/v2",style:{display:"none",color:"white"}},"v2")))},f=(a(150),function(e){var t=e.children,a=(e.data,e.location);return i.a.createElement(s.StaticQuery,{query:"2328579951",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"Lighthouse, perfmatters, web performance"}]}),i.a.createElement(d,{location:a,siteTitle:e.site.siteMetadata.title}),i.a.createElement("a",{style:{position:"absolute",top:0,right:0,display:"block"},href:"https://github.com/izifortune/lighthouse-keeper"},i.a.createElement("img",{style:{border:0},src:"https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67",alt:"Fork me on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"})),i.a.createElement("div",{style:{flex:"1",margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),i.a.createElement("footer",null,i.a.createElement("small",null,"© Copyright 2018, Fabrizio Fortunato MIT")))},data:n})});f.propTypes={children:u.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-404-js-627b30c3621f575efcb4.js.map