import{t as f,E as d,F as i,_ as c,G as m,u as h,g as _,h as a,b as y,H as v,r as g,I as E,a as p,R}from"./clientConfigs.6d3ff291.js";const V=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};V();const l=f(d),b={ce39ad2a:i(()=>c(()=>import("./demo-basic.47b45052.js"),["assets/demo-basic.47b45052.js","assets/clientConfigs.6d3ff291.js"])),"1bbe0e37":i(()=>c(()=>import("./demo-iframe.86b883cc.js"),["assets/demo-iframe.86b883cc.js","assets/clientConfigs.6d3ff291.js","assets/error2.e19f91a3.js"])),"3e7944d1":i(()=>c(()=>import("./demo-tabs.e0ce97f6.js"),["assets/demo-tabs.e0ce97f6.js","assets/clientConfigs.6d3ff291.js","assets/error2.e19f91a3.js"]))},A=m({name:"Vuepress",setup(){const n=h(),t=_(()=>b[n.params.name]);return()=>t.value?a(t.value):a("div","404 Not Found")}}),L=()=>y({history:v(g(l.value.base)),routes:[{path:"/:name",component:A}],scrollBehavior:(t,s,r)=>r||(t.hash?{el:t.hash}:{top:0})}),O=async()=>{var s;const n=E({name:"VuepressApp",setup(){return()=>[a(R),...p.flatMap(({rootComponents:r=[]})=>r.map(e=>a(e)))]}}),t=L();for(const r of p)await((s=r.enhance)==null?void 0:s.call(r,{app:n,router:t,siteData:l}));return n.use(t),{app:n,router:t}};O().then(({app:n,router:t})=>{t.isReady().then(()=>{n.mount("#app")})});
