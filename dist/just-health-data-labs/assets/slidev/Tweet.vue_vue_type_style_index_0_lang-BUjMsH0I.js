import{d as _,z as w,o as c,b as d,f as v,h as g,t as l,O as h,c as y,k,e as f,l as x,x as T,g as p}from"../modules/vue-Gt8x7WkZ.js";import{A as b}from"../modules/unplugin-icons-C_W_Ciz2.js";import{b as B}from"../index-BkuR0GAn.js";const C=_({__name:"Transform",props:{scale:{},origin:{}},setup(i){const e=i,o=w(()=>{const t=[];return e.scale!=null&&t.push(`scale(${e.scale||1})`),{transform:t.join(" "),"transform-origin":e.origin||"top left"}});return(t,s)=>(c(),d("div",{style:g(o.value)},[v(t.$slots,"default")],4))}}),N={key:0,class:"w-30 h-30 my-10px bg-gray-400 bg-opacity-10 rounded-lg flex opacity-50"},S={class:"m-auto animate-pulse text-4xl"},V={key:0},F=_({__name:"Tweet",props:{id:{},scale:{},conversation:{},cards:{}},setup(i){const e=i,o=l(),t=l(!1),s=l(!1);async function u(a=10){var n,r;if(!((r=(n=window.twttr)==null?void 0:n.widgets)!=null&&r.createTweet)){if(a<=0)return console.error("Failed to load Twitter widget after 10 retries.");setTimeout(()=>u(a-1),1e3);return}const m=await window.twttr.widgets.createTweet(e.id.toString(),o.value,{theme:B.value?"dark":"light",conversation:e.conversation||"none",cards:e.cards});t.value=!0,m===void 0&&(s.value=!0)}return h(()=>{u()}),(a,m)=>{const n=b,r=C;return c(),y(r,{scale:a.scale||1},{default:k(()=>[f("div",{ref_key:"tweet",ref:o,class:"tweet slidev-tweet"},[!t.value||s.value?(c(),d("div",N,[f("div",S,[x(n),s.value?(c(),d("span",V,'Could not load tweet with id="'+T(e.id)+'"',1)):p("v-if",!0)])])):p("v-if",!0)],512)]),_:1},8,["scale"])}}});export{F as _};
