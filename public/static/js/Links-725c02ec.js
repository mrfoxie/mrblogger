import{P as O,u as q}from"./PostStats-4fbab743.js";import{d as f,_ as v,f as i,o as e,c as o,h as _,u as T,i as y,t as k,j as w,T as x,b as S,k as J,l as n,g as c,F as b,m as $,p as P,w as j,q as A,s as N,v as M,x as R,S as V,r as D,y as E,z as F,e as H,n as I}from"./index_prod-d64bafc2.js";import{u as W,P as G}from"./article-473cd665.js";import{C as K}from"./Comment-f6b897f6.js";import{B as Q}from"./Breadcrumbs-2c8fbbe3.js";import{u as U}from"./usePageTitle-4afc5f75.js";import"https://unpkg.com/@waline/client@v2/dist/waline.mjs";const X=f({name:"ARLinkAvatar",components:{},props:{title:String,link:String,source:{type:String}},setup(){}}),Y=["href","title"],Z=["src","title"];function tt(t,s,r,u,g,h){const d=i("ob-skeleton");return e(),o("a",{class:"links-group-avatar h-[120px] w-[120px] flex items-center justify-center text-white text-6xl font-bold",href:t.link,target:"_blank",title:t.title},[t.source?(e(),o("img",{key:0,class:"h-full w-full shadow-xl m-0 rounded-full",src:t.source,alt:"link-avatar",title:t.title},null,8,Z)):(e(),_(d,{key:1,width:"7rem",height:"7rem",circle:""}))],8,Y)}const et=v(X,[["render",tt]]),nt=f({name:"ARPrimaryButton",components:{},props:{text:String},setup(){const t=T();return{gradientBackground:y(()=>({background:t.themeConfig.theme.header_gradient_css}))}}});function ot(t,s,r,u,g,h){return e(),o("a",{class:"py-2 px-3 text-white flex items-center justify-center z-10 transition cursor-pointer rounded-xl font-semibold select-none",style:w(t.gradientBackground)},k(t.text),5)}const st=v(nt,[["render",ot]]),at=f({name:"ARSecondaryButton",components:{},props:{text:String},setup(){}}),it={class:"py-2 px-3 text-ob-bright flex items-center justify-center z-10 transition cursor-pointer rounded-xl bg-ob-deep-900 border-solid border-ob-bright border-t-2 border-b-2 border-r-2 border-l-2 opacity-80 select-none"};function rt(t,s,r,u,g,h){return e(),o("a",it,k(t.text),1)}const lt=v(at,[["render",rt]]),ct=f({name:"ARLinkBox",components:{LinkAvatar:et,Title:x,PrimaryButton:st,SecondaryButton:lt},emits:["onApplyClicked"],props:{gradientBackground:{type:Object,default:"",required:!0},data:{type:Object,default:[],required:!0}},setup(t,{emit:s}){const{t:r}=S(),u=J();return{applyClicked:()=>{s("onApplyClicked")},randomJump:()=>{u.sendNotification(r("settings.notification-random-jump")),setTimeout(()=>{const l=t.data[Math.floor(Math.random()*24)][Math.floor(Math.random()*2)];window.open(l.link,"_blank")},6e3)},t:r}}});const dt={class:"ob-gradient-plate absolute bg-ob-deep-900 rounded-xl opacity-90 flex justify-center items-center shadow-lg hover:shadow-2xl duration-300 overflow-hidden"},pt={class:"flex w-full relative overflow-hidden"},ut={class:"top-6 left-6 absolute flex flex-col"},mt={class:"text-ob-dim text-sm"},gt={class:"absolute right-8 top-8 flex space-x-3"},ht={class:"link-group-wrapper flex flex-nowrap pt-28 left-0 top-0"},kt={class:"links-group-avatar-pair ml-4 pb-7 pt-4 select-none"},_t={class:"links-group-avatar-pair ml-4 pb-7 pt-4 select-none"};function ft(t,s,r,u,g,h){const d=i("Title"),l=i("SecondaryButton"),a=i("PrimaryButton"),p=i("LinkAvatar");return e(),o("div",{class:"flex h-[25rem] w-full rounded-2xl relative shadow-xl mb-8",style:w(t.gradientBackground)},[n("div",dt,[n("div",pt,[n("div",ut,[n("div",mt,k(t.t("settings.links")),1),c(d,{title:"settings.links-slogan",icon:"friends","text-size":"text-2xl",paddings:"pb-2",margins:"mb-0 mt-0"})]),n("div",gt,[c(l,{text:t.t("settings.links-random-visit"),onClick:s[0]||(s[0]=m=>t.randomJump())},null,8,["text"]),c(a,{text:t.t("settings.links-apply"),onClick:s[1]||(s[1]=m=>t.applyClicked())},null,8,["text"])]),n("div",ht,[t.data.length===0?(e(),o(b,{key:0},$(48,m=>n("div",kt,[c(p),c(p)])),64)):(e(!0),o(b,{key:1},$(t.data,m=>(e(),o("div",_t,[c(p,{title:m[0].nick,link:m[0].link,source:m[0].avatar},null,8,["title","link","source"]),c(p,{title:m[1].nick,link:m[1].link,source:m[1].avatar},null,8,["title","link","source"])]))),256))])])])],4)}const vt=v(ct,[["render",ft]]),yt=f({name:"ARLinkCard",components:{},props:{avatar:String,link:String,nick:String,description:String,type:String,vip:Boolean,categoryMode:Boolean},setup(t){const s=T(),{t:r}=S();return{t:r,titleStyle:{"text-xl":!0,"vip-text":!!t.vip},gradientBackground:y(()=>({background:s.themeConfig.theme.header_gradient_css})),articleClasses:y(()=>({"article-container":!0,highlighted:!!t.vip,"category-mode":!!t.categoryMode}))}}});const bt={class:"article"},$t={class:"article-thumbnail"},Ct={key:0,alt:""},Lt={key:1,src:N},wt={class:"article-content"},St={key:0},Bt=["href"],Tt={key:0};function xt(t,s,r,u,g,h){const d=i("ob-skeleton"),l=P("lazy");return e(),o("li",{id:"link-card",class:A(t.articleClasses)},[n("div",bt,[n("div",$t,[t.avatar?j((e(),o("img",Ct,null,512)),[[l,t.avatar]]):(e(),o("img",Lt)),n("span",{class:"thumbnail-screen",style:w(t.gradientBackground)},null,4)]),n("div",wt,[n("span",null,[t.type&&!t.vip?(e(),o("b",St,k(t.t(t.type)),1)):t.type&&t.vip?(e(),o("b",{key:1,class:"vip",style:w(t.gradientBackground)},k(t.t(t.type)),5)):(e(),_(d,{key:2,tag:"b",height:"20px",width:"35px"}))]),n("a",{href:t.link,target:"_blank"},[n("h1",{class:A(t.titleStyle)},k(t.nick),3)],8,Bt),t.description?(e(),o("p",Tt,k(t.description),1)):(e(),_(d,{key:1,tag:"p",count:4,height:"16px"}))])])],2)}const z=v(yt,[["render",xt]]),At=f({name:"ARLinkCategory",components:{LinkCard:z,Title:x},props:{links:{type:Object,default:{}}},setup(){const{t}=S();return{t,convertToLocale:M}}}),Dt={class:"text-ob-dim mb-8 text-lg"},Pt={class:"grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-8"};function jt(t,s,r,u,g,h){const d=i("Title"),l=i("LinkCard");return t.links?(e(!0),o(b,{key:0},$(Object.keys(t.links),a=>(e(),o(b,null,[c(d,{title:t.convertToLocale(a),count:t.links[a].length,margins:"mb-2"},null,8,["title","count"]),n("span",Dt,k(t.t(`${t.convertToLocale(a)}-desc`)),1),n("ul",Pt,[(e(!0),o(b,null,$(t.links[a],p=>(e(),_(l,{nick:p.nick,link:p.link,avatar:p.avatar,description:p.description,type:t.convertToLocale(p.label),vip:p.label==="links-badge-vip","category-mode":!0},null,8,["nick","link","avatar","description","type","vip"]))),256))])],64))),256)):R("",!0)}const Mt=v(At,[["render",jt]]),Rt=f({name:"ARLinkList",components:{SubTitle:V},props:{links:{type:Array,default:[],required:!0}},setup(){return{convertToLocale:M}}}),zt={class:"grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-8"};function Ot(t,s,r,u,g,h){const d=i("Title"),l=i("LinkCard");return e(),o("div",null,[c(d,{title:"settings.links",icon:"friends",count:t.links.length},null,8,["count"]),n("ul",zt,[(e(!0),o(b,null,$(t.links,a=>(e(),_(l,{nick:a.nick,link:a.link,avatar:a.avatar,description:a.description,type:t.convertToLocale(a.label),vip:a.label==="links-badge-vip"},null,8,["nick","link","avatar","description","type","vip"]))),256))])])}const qt=v(Rt,[["render",Ot]]),Jt=f({name:"Links",components:{PostStats:O,LinkBox:vt,LinkCard:z,Title:x,LinkCategoryList:Mt,LinkList:qt,Comment:K,Breadcrumbs:Q},setup(){const t=W(),s=T(),r=D(new G),u=D(),g=E(),{t:h}=S(),{pageTitle:d,updateTitle:l}=U(),{jumpToEle:a}=q(),{enabledCommentPlugin:p}=F(),m=async()=>{var C,L;r.value=await t.fetchArticle("friends"),l(s.locale),await I(),(C=u.value)==null||C.getCommentCount(),(L=u.value)==null||L.getPostView(),Prism.highlightAll()},B=()=>{a("content")};return H(m),{currentPath:y(()=>g.path),pluginConfigs:y(()=>s.themeConfig.plugins),gradientBackground:y(()=>({background:s.themeConfig.theme.header_gradient_css})),enabledComment:y(()=>r.value.comments&&p.value.plugin!==""),pageTitle:d,jumpToContent:B,postStatsRef:u,pageData:r,t:h}}}),Nt={class:"flex flex-col"},Vt={class:"post-header"},Et={key:0,class:"post-title text-white uppercase"},Ft={class:"flex flex-row items-center justify-start mt-8 mb-4"},Ht={class:"mt-8",id:"content"},It=["innerHTML"],Wt={key:1,class:"bg-ob-deep-800 px-14 py-16 rounded-2xl shadow-xl block min-h-screen"},Gt=n("br",null,null,-1),Kt=n("br",null,null,-1),Qt=n("br",null,null,-1),Ut={key:2,id:"comments"};function Xt(t,s,r,u,g,h){const d=i("Breadcrumbs"),l=i("ob-skeleton"),a=i("PostStats"),p=i("LinkBox"),m=i("LinkCategoryList"),B=i("LinkList"),C=i("Comment"),L=P("scroll-spy");return e(),o("div",null,[c(d,{current:t.pageTitle},null,8,["current"]),n("div",Nt,[n("div",Vt,[t.pageTitle?(e(),o("h1",Et,k(t.pageTitle),1)):(e(),_(l,{key:1,class:"post-title text-white uppercase",width:"100%",height:"clamp(1.2rem, calc(1rem + 3.5vw), 4rem)"})),n("div",Ft,[c(a,{"post-word-count":t.pageData.count_time.symbolsCount,"post-time-count":t.pageData.count_time.symbolsTime,"post-title":t.pageData.title,"current-path":t.currentPath,"plugin-configs":t.pluginConfigs,comments:t.enabledComment,ref:"postStatsRef"},null,8,["post-word-count","post-time-count","post-title","current-path","plugin-configs","comments"])])]),c(p,{"gradient-background":t.gradientBackground,data:t.pageData.avatarWall,onOnApplyClicked:s[0]||(s[0]=Yt=>t.jumpToContent())},null,8,["gradient-background","data"]),t.pageData.categoryMode===!0?(e(),_(m,{key:0,links:t.pageData.data},null,8,["links"])):(e(),_(B,{key:1,links:t.pageData.data},null,8,["links"])),n("div",Ht,[t.pageData.content?j((e(),o("div",{key:0,class:"post-html",innerHTML:t.pageData.content},null,8,It)),[[L,{sectionSelector:"h1, h2, h3, h4, h5, h6"}]]):(e(),o("div",Wt,[c(l,{tag:"div",count:1,height:"36px",width:"150px",class:"mb-6"}),Gt,c(l,{tag:"div",count:35,height:"16px",width:"100px",class:"mr-2"}),Kt,Qt,c(l,{tag:"div",count:25,height:"16px",width:"100px",class:"mr-2"})]))]),t.enabledComment&&t.pageData.title&&t.pageData.text&&t.pageData.uid?(e(),o("div",Ut,[c(C,{title:t.pageData.title,body:t.pageData.text,uid:t.pageData.uid},null,8,["title","body","uid"])])):R("",!0)])])}const ie=v(Jt,[["render",Xt]]);export{ie as default};