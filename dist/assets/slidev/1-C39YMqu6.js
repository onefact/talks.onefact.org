import{q as v,B as x,C as k}from"../modules/unplugin-icons-BarnseXo.js";import{d as y,y as $,o as u,b as w,e as t,f as C,h as j,c as B,k as P,z as a,a6 as c,l,g as S,q as z,s as E}from"../modules/vue-BNWjpuRG.js";import{u as m,p as I,f as N}from"./context-D75cQaRR.js";import{_ as h,a6 as p}from"../index-joG4pe33.js";import"../modules/shiki-DQGjO4Jx.js";function _(e){return e.startsWith("/")?"/"+e.slice(1):e}function T(e,o=!1){const n=e&&["#","rgb","hsl"].some(i=>e.indexOf(i)===0),s={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?o?`linear-gradient(#0005, #0008), url(${_(e)})`:`url("${_(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return s.background||delete s.background,s}const V={class:"my-auto w-full"},O=y({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){m();const o=e,n=$(()=>T(o.background,!0));return(s,i)=>(u(),w("div",{class:"slidev-layout cover text-center",style:j(n.value)},[t("div",V,[C(s.$slots,"default")])],4))}}),R=h(O,[["__file","/Users/me/projects/talks.onefact.org/node_modules/@slidev/theme-seriph/layouts/cover.vue"]]),q=t("h1",null,"Loving the baseline",-1),G=t("p",null,[c("Main demo: "),t("a",{href:"https://colab.research.google.com/github/onefact/loving-the-baseline/blob/main/nearest-neighbors.ipynb",target:"_blank"},"https://colab.research.google.com/github/onefact/loving-the-baseline/blob/main/nearest-neighbors.ipynb")],-1),H=t("p",null,[c("Twitter: @thejaan Email: "),t("a",{href:"mailto:jaan@onefact.org",target:"_blank"},"jaan@onefact.org")],-1),L={class:"pt-12"},M={class:"abs-br m-6 flex gap-2"},U={href:"https://github.com/slidevjs/slidev",target:"_blank",alt:"GitHub",title:"Open in GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},A={__name:"1",setup(e){I(p);const{$slidev:o,$nav:n,$clicksContext:s,$clicks:i,$page:F,$renderContext:W,$frontmatter:D}=m();return(J,r)=>{const b=v,g=x,f=k;return u(),B(R,z(E(a(N)(a(p),0))),{default:P(()=>[q,G,H,t("div",L,[t("span",{onClick:r[0]||(r[0]=(...d)=>a(o).nav.next&&a(o).nav.next(...d)),class:"px-2 py-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[c(" Press Space for next page "),l(b,{class:"inline"})])]),t("div",M,[t("button",{onClick:r[1]||(r[1]=d=>a(o).nav.openInEditor()),title:"Open in Editor",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},[l(g)]),t("a",U,[l(f)])]),S(`
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
`)]),_:1},16)}}},ee=h(A,[["__file","/@slidev/slides/1.md"]]);export{ee as default};
