import{_ as u}from"./1484.1bc7a2b1.js";import{_ as v,u as w,o as _,r as b,w as f,a as k,b as i,c as o,d as e,F as x,e as y,f as m,t as s,g as S,p as z,h as j,i as C,j as I}from"./index.b1f24ded.js";var V="/Space-tourism-multi-page-website/assets/background-crew-desktop.b41ac858.jpg",D="/Space-tourism-multi-page-website/assets/background-crew-mobile.a393984a.jpg",L="/Space-tourism-multi-page-website/assets/background-crew-tablet.335a7465.jpg",B="/Space-tourism-multi-page-website/assets/image-anousheh-ansari.1c67226f.png",E="/Space-tourism-multi-page-website/assets/image-anousheh-ansari.31e0f886.webp",N="/Space-tourism-multi-page-website/assets/image-douglas-hurley.eefed9f8.png",F="/Space-tourism-multi-page-website/assets/image-douglas-hurley.d49c6980.webp",M="/Space-tourism-multi-page-website/assets/image-mark-shuttleworth.b3fe36f7.png",U="/Space-tourism-multi-page-website/assets/image-mark-shuttleworth.8cb8ff44.webp",H="/Space-tourism-multi-page-website/assets/image-victor-glover.dfbb7281.png",R="/Space-tourism-multi-page-website/assets/image-victor-glover.7debdc8b.webp";const d=n=>(z("data-v-477d9644"),n=n(),j(),n),$={class:"crew-container"},q={key:0,class:"container"},A=d(()=>e("div",{class:"head-container"},[e("span",null,"02"),e("h5",null,"meet your crew")],-1)),G={class:"order-items"},J={class:"image"},K=["src","alt"],O={class:"container-main"},P=d(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-circle",width:"44",height:"44",viewBox:"0 0 24 24","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",stroke:"none",fill:"currentColor"},[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("circle",{cx:"12",cy:"12",r:"9"})],-1)),Q={class:"info-container"},T={class:"role"},W={class:"description"},X={key:1,class:"loading-container"},Y=d(()=>e("p",{class:"loading"},"Loading...",-1)),Z=d(()=>e("img",{class:"load-img",src:u,alt:"loading"},null,-1)),ee=[Y,Z],ae={key:2,class:"error"},te={__name:"CrewView",props:{name:{type:String}},setup(n){const g=n,t=w();_(()=>{t.getCrewData(),t.activeLinks()});const c=r=>r.replace(" ","-").toLowerCase(),a=b();f(async()=>{a.value=t.crewData.filter(r=>c(r.name)===g.name)});function p(r){return new URL({"/src/assets/images/crew/background-crew-desktop.jpg":V,"/src/assets/images/crew/background-crew-mobile.jpg":D,"/src/assets/images/crew/background-crew-tablet.jpg":L,"/src/assets/images/crew/image-anousheh-ansari.png":B,"/src/assets/images/crew/image-anousheh-ansari.webp":E,"/src/assets/images/crew/image-douglas-hurley.png":N,"/src/assets/images/crew/image-douglas-hurley.webp":F,"/src/assets/images/crew/image-mark-shuttleworth.png":M,"/src/assets/images/crew/image-mark-shuttleworth.webp":U,"/src/assets/images/crew/image-victor-glover.png":H,"/src/assets/images/crew/image-victor-glover.webp":R}[`/src/assets/images/crew/${r}`],self.location).href}return(r,re)=>{const h=k("router-link");return i(),o("div",$,[a.value.length?(i(),o("div",q,[A,e("div",G,[e("div",J,[e("img",{src:p(a.value[0].images.png),alt:"Image of "+a.value[0].name},null,8,K)]),e("div",O,[e("ul",null,[(i(!0),o(x,null,y(m(t).crewData,l=>(i(),o("li",{key:l.name},[C(h,{to:{name:"members",params:{name:c(l.name)}}},{default:I(()=>[P]),_:2},1032,["to"])]))),128))]),e("div",Q,[e("h5",T,s(a.value[0].role),1),e("h3",null,s(a.value[0].name),1),e("p",W,s(a.value[0].bio),1)])])])])):(i(),o("div",X,ee)),m(t).crewError?(i(),o("div",ae,s(m(t).crewError),1)):S("",!0)])}}};var ne=v(te,[["__scopeId","data-v-477d9644"]]);export{ne as default};