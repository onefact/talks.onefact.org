import{d as i,z as n,o as c,b as d,e as a,h as u,f,i as p}from"../modules/vue-Gt8x7WkZ.js";function r(e){return e.startsWith("/")?"/"+e.slice(1):e}function g(e,t=!1,l="cover"){const s=e&&(e[0]==="#"||e.startsWith("rgb")),o={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?t?`linear-gradient(#0005, #0008), url(${r(e)})`:`url("${r(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:l};return o.background||delete o.background,o}const m={class:"grid grid-cols-2 w-full h-full auto-rows-fr"},h=i({__name:"image-left",props:{image:{type:String},class:{type:String},backgroundSize:{type:String,default:"cover"}},setup(e){const t=e,l=n(()=>g(t.image,!1,t.backgroundSize));return(s,o)=>(c(),d("div",m,[a("div",{class:"w-full h-full",style:u(l.value)},null,4),a("div",{class:p(["slidev-layout default",t.class])},[f(s.$slots,"default")],2)]))}});export{h as _};