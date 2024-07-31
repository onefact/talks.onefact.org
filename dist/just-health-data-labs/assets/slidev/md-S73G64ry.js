import{B as N,C as E}from"../modules/unplugin-icons-C_W_Ciz2.js";import{d as H,t as P,Q as z,D as w,O as T,z as x,aB as V,o as l,b as S,f as q,B as c,c as f,g as j,i as K,h as M,k as I,l as R,m as W,q as D,s as O,e,aa as d}from"../modules/vue-Gt8x7WkZ.js";import{v as $,aa as G,C as J,ab as Q,ac as U}from"../index-BkuR0GAn.js";import{u as B,f as X}from"./context-B7ameWqG.js";import{I as F}from"./default-CiJznFaH.js";import"../modules/shiki-B04sFV5Z.js";const Y=["title"],Z=H({__name:"CodeBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},lines:{type:Boolean,default:$.lineNumbers},at:{type:[String,Number],default:"+1"},maxHeight:{type:String,default:void 0}},setup(y){const t=y,{$clicksContext:r}=B(),s=P(),u=G();z(()=>{r.unregister(u)}),w(()=>{var o;(o=s.value)==null||o.classList.toggle("slidev-code-line-numbers",t.lines)}),T(()=>{var h;if(!r||!((h=t.ranges)!=null&&h.length))return;const o=r.calculateSince(t.at,t.ranges.length-1);r.register(u,o);const a=x(()=>o?Math.max(0,r.current-o.start+1):J),n=x(()=>t.finally==="last"?t.ranges.at(-1):t.finally.toString());w(()=>{if(!s.value)return;let p=t.ranges[a.value]??n.value;const _=p==="hide";s.value.classList.toggle(Q,_),_&&(p=t.ranges[a.value+1]??n.value);const b=s.value.querySelector(".shiki"),v=Array.from(b.querySelectorAll("code > .line")),A=v.length;if(U(p,A,t.startLine,i=>[v[i]]),t.maxHeight){const i=Array.from(b.querySelectorAll(".line.highlighted"));i.reduce((C,L)=>L.offsetHeight+C,0)>s.value.offsetHeight?i[0].scrollIntoView({behavior:"smooth",block:"start"}):i.length>0&&i[Math.round((i.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}})});const{copied:m,copy:k}=V();function g(){var a,n;const o=(n=(a=s.value)==null?void 0:a.querySelector(".slidev-code"))==null?void 0:n.textContent;o&&k(o)}return(o,a)=>{const n=N,h=E;return l(),S("div",{ref_key:"el",ref:s,class:K(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":t.lines}]),style:M({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0,"--start":t.startLine})},[q(o.$slots,"default"),c($).codeCopy?(l(),S("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:c(m)?"Copied":"Copy",onClick:a[0]||(a[0]=p=>g())},[c(m)?(l(),f(n,{key:0,class:"p-2 w-8 h-8"})):(l(),f(h,{key:1,class:"p-2 w-8 h-8"}))],8,Y)):j("v-if",!0)],6)}}}),ee=e("h2",null,"Examples",-1),te=e("p",null,[e("a",{href:"https://colab.research.google.com/github/onefact/datathinking.org-codespace/blob/main/notebooks/princeton-university/week-1-visualizing-33-million-phone-calls-in-new-york-city.ipynb",target:"_blank"},"https://colab.research.google.com/github/onefact/datathinking.org-codespace/blob/main/notebooks/princeton-university/week-1-visualizing-33-million-phone-calls-in-new-york-city.ipynb")],-1),oe=e("p",null,[d("-> "),e("a",{href:"https://motherduck.com/blog/introducing-column-explorer/",target:"_blank"},"https://motherduck.com/blog/introducing-column-explorer/")],-1),se=e("p",null,[e("a",{href:"https://motherduckcommunity.slack.com/archives/C059BKPAPC5/p1717864545260129",target:"_blank"},"https://motherduckcommunity.slack.com/archives/C059BKPAPC5/p1717864545260129")],-1),ae=e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[e("code",{class:"language-text"},[e("span",{class:"line"},[e("span",null,"Hi Jaan:")]),d(`
`),e("span",{class:"line"},[e("span",null,"There's a lot to discuss here, however generally I agree with the possibility of misaligned incentives. Cloud data companies know there a gravitational force to data due to joins, and many of the easy paths bias toward entirely remote data, transforms, compute. Even the asymmetry of AWS egress/ingress costs shows this bias. To be fair this is often efficient, minimizing data transport. However I think you can see the misalignment in the customer pressure to get data lakes as first class peers to internal tables, and in the workflow of ad hoc notebooks, where roundtripping to local is a common practice for it's flexibility.")]),d(`
`),e("span",{class:"line"},[e("span",null,"We think there's a lot of potential to making it much easier to mix and match local and remote sources in one query, and in easier roundtripping. It certainly makes it easier for my ETL jobs to INSERT INTO instead of always dropping into S3, for example.")]),d(`
`),e("span",{class:"line"},[e("span",null,"Let me discuss internally and come up with more specific response with examples. It's a busy week here with our GA launch, but maybe this is worth a call with you to brainstorm a bit more.")])])],-1),ne={__name:"just-health-data-labs.md__slidev_13",setup(y){const{$slidev:t,$nav:r,$clicksContext:s,$clicks:u,$page:m,$renderContext:k,$frontmatter:g}=B();return s.setup(),(o,a)=>{const n=Z;return l(),f(F,D(O(c(X)(c(g),12))),{default:I(()=>[ee,te,oe,se,R(n,W({},{ranges:[]}),{default:I(()=>[ae]),_:1},16)]),_:1},16)}}},ue=ne;export{ue as default};
