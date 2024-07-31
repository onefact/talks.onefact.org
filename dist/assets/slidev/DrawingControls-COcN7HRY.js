import{f as J,D as T,E as Y,F as Q,G as W,H as X,J as Z,K as ee,L as ne,M as te,N as se,O as oe}from"../modules/unplugin-icons-BarnseXo.js";import{d as L,t as $,S as le,aB as ae,o as g,b as B,f as ie,h as z,z as e,c as x,k as o,l as n,i as l,e as r,x as re,aa as m,ab as ue,F as ce,ad as de,an as b,g as _e}from"../modules/vue-BNWjpuRG.js";import{L as pe}from"../modules/shiki-DQGjO4Jx.js";import{c as me}from"./DrawingPreview-C8o48qJc.js";import{V as D}from"./ContextMenu-C2AWNJ1b.js";import{_ as M}from"../index-joG4pe33.js";import{I as a}from"./IconButton-CvZOhvto.js";import"./context-D75cQaRR.js";const ge=L({__name:"Draggable",props:{storageKey:{type:String,required:!1},initial:{type:Object,required:!1}},setup(h){const u=h,f=$(null),w=u.initial??{x:0,y:0},k=u.storageKey?le(u.storageKey,w):$(w),{style:y}=ae(f,{initialValue:k});return(v,d)=>(g(),B("div",{ref_key:"el",ref:f,class:"fixed",style:z(e(y))},[ie(v.$slots,"default")],4))}}),fe=M(ge,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Draggable.vue"]]),we=r("svg",{width:"1em",height:"1em",class:"-mt-0.5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[r("path",{d:"M21.71 3.29a1 1 0 0 0-1.42 0l-18 18a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z",fill:"currentColor"})],-1),ve=r("svg",{viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},[r("line",{x1:"2",y1:"15",x2:"22",y2:"4",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"}),r("line",{x1:"2",y1:"24",x2:"28",y2:"10",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),r("line",{x1:"7",y1:"31",x2:"29",y2:"19",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1),be={class:"flex bg-main p-2"},ke={class:"inline-block w-7 text-center"},ye={class:"pt-.5"},Ce=L({__name:"DrawingControls",setup(h){const{brush:u,canClear:f,canRedo:w,canUndo:k,clear:y,drauu:v,drawingEnabled:d,drawingMode:i,drawingPinned:c,brushColors:S}=me();function V(){v.undo()}function E(){v.redo()}let C="stylus";function _(p){i.value=p,d.value=!0,p!=="eraseLine"&&(C=p)}function K(p){u.color=p,d.value=!0,i.value=C}return(p,t)=>{const N=J,U=T,F=Y,R=Q,j=W,q=X,A=Z,I=ee,O=ne,P=te,G=se,H=oe;return g(),x(fe,{class:l(["flex flex-wrap text-xl p-2 gap-1 rounded-md bg-main shadow transition-opacity duration-200 z-20 border border-main",e(d)?"":e(c)?"opacity-40 hover:opacity-90":"opacity-0 pointer-events-none"]),"storage-key":"slidev-drawing-pos","initial-x":10,"initial-y":10},{default:o(()=>[n(a,{title:"Draw with stylus",class:l({shallow:e(i)!=="stylus"}),onClick:t[0]||(t[0]=s=>_("stylus"))},{default:o(()=>[n(N)]),_:1},8,["class"]),n(a,{title:"Draw a line",class:l({shallow:e(i)!=="line"}),onClick:t[1]||(t[1]=s=>_("line"))},{default:o(()=>[we]),_:1},8,["class"]),n(a,{title:"Draw an arrow",class:l({shallow:e(i)!=="arrow"}),onClick:t[2]||(t[2]=s=>_("arrow"))},{default:o(()=>[n(U)]),_:1},8,["class"]),n(a,{title:"Draw an ellipse",class:l({shallow:e(i)!=="ellipse"}),onClick:t[3]||(t[3]=s=>_("ellipse"))},{default:o(()=>[n(F)]),_:1},8,["class"]),n(a,{title:"Draw a rectangle",class:l({shallow:e(i)!=="rectangle"}),onClick:t[4]||(t[4]=s=>_("rectangle"))},{default:o(()=>[n(R)]),_:1},8,["class"]),n(a,{title:"Erase",class:l({shallow:e(i)!=="eraseLine"}),onClick:t[5]||(t[5]=s=>_("eraseLine"))},{default:o(()=>[n(j)]),_:1},8,["class"]),n(D),n(e(pe),null,{popper:o(()=>[r("div",be,[r("div",ke,re(e(u).size),1),r("div",ye,[m(r("input",{"onUpdate:modelValue":t[6]||(t[6]=s=>e(u).size=s),type:"range",min:"1",max:"15",onChange:t[7]||(t[7]=s=>i.value=e(C))},null,544),[[ue,e(u).size]])])])]),default:o(()=>[n(a,{title:"Adjust stroke width",class:l({shallow:e(i)==="eraseLine"})},{default:o(()=>[ve]),_:1},8,["class"])]),_:1}),(g(!0),B(ce,null,de(e(S),s=>(g(),x(a,{key:s,title:"Set brush color",class:l(e(u).color===s&&e(i)!=="eraseLine"?"active":"shallow"),onClick:xe=>K(s)},{default:o(()=>[r("div",{class:l(["w-6 h-6 transition-all transform border",e(u).color!==s?"rounded-1/2 scale-85 border-white":"rounded-md border-gray-300/50"]),style:z(e(d)?{background:s}:{borderColor:s})},null,6)]),_:2},1032,["class","onClick"]))),128)),n(D),n(a,{title:"Undo",class:l({disabled:!e(k)}),onClick:t[8]||(t[8]=s=>V())},{default:o(()=>[n(q)]),_:1},8,["class"]),n(a,{title:"Redo",class:l({disabled:!e(w)}),onClick:t[9]||(t[9]=s=>E())},{default:o(()=>[n(A)]),_:1},8,["class"]),n(a,{title:"Delete",class:l({disabled:!e(f)}),onClick:t[10]||(t[10]=s=>e(y)())},{default:o(()=>[n(I)]),_:1},8,["class"]),n(D),n(a,{title:e(c)?"Unpin drawing":"Pin drawing",class:l({shallow:!e(c)}),onClick:t[11]||(t[11]=s=>c.value=!e(c))},{default:o(()=>[m(n(O,{class:"transform -rotate-45"},null,512),[[b,e(c)]]),m(n(P,null,null,512),[[b,!e(c)]])]),_:1},8,["title","class"]),e(d)?(g(),x(a,{key:0,title:e(c)?"Drawing pinned":"Drawing unpinned",class:l({shallow:!e(d)}),onClick:t[12]||(t[12]=s=>d.value=!e(d))},{default:o(()=>[m(n(G,null,null,512),[[b,e(c)]]),m(n(H,null,null,512),[[b,!e(c)]])]),_:1},8,["title","class"])):_e("v-if",!0)]),_:1},8,["class"])}}}),Ve=M(Ce,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/DrawingControls.vue"]]);export{Ve as default};
