import{o as i,c as N,w as e,a as t,r as y,T as x,d as b,e as c,b as o,f as g,g as l,u as n,F as w,h as $,n as C,t as h}from"./app-9368a449.js";import{_ as L}from"./ActionMessage-7eab7109.js";import{_ as z,a as U,b as T}from"./DialogModal-56362f6a.js";import{_ as S}from"./Checkbox-bb7504dc.js";import{_ as W}from"./DangerButton-f9f3ba0a.js";import{_ as E}from"./FormSection-481cc2ac.js";import{_ as H,a as Y}from"./TextInput-27e7314d.js";import{_ as B}from"./InputLabel-bb24c214.js";import{_ as I}from"./PrimaryButton-1f20655f.js";import{_ as A}from"./SecondaryButton-f79cbef1.js";import{S as q}from"./SectionBorder-0d947303.js";import"./SectionTitle-01930234.js";import"./_plugin-vue_export-helper-c27b6911.js";const G={class:"bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},J={class:"sm:flex sm:items-start"},K=t("div",{class:"mx-auto shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},[t("svg",{class:"h-6 w-6 text-red-600 dark:text-red-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"})])],-1),O={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},Q={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},R={class:"mt-4 text-sm text-gray-600 dark:text-gray-400"},X={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 dark:bg-gray-800 text-right"},Z={__name:"ConfirmationModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(d,{emit:P}){const r=P,m=()=>{r("close")};return(u,v)=>(i(),N(z,{show:d.show,"max-width":d.maxWidth,closeable:d.closeable,onClose:m},{default:e(()=>[t("div",G,[t("div",J,[K,t("div",O,[t("h3",Q,[y(u.$slots,"title")]),t("div",R,[y(u.$slots,"content")])])])]),t("div",X,[y(u.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}},ee={class:"col-span-6 sm:col-span-4"},se={key:0,class:"col-span-6"},te={class:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"},oe={class:"flex items-center"},ae={class:"ml-2 text-sm text-gray-600 dark:text-gray-400"},le={key:0},ne={class:"mt-10 sm:mt-0"},ie={class:"space-y-6"},re={class:"break-all dark:text-white"},ce={class:"flex items-center ml-2"},de={key:0,class:"text-sm text-gray-400"},me=["onClick"],ue=["onClick"],pe=t("div",null," Please copy your new API token. For your security, it won't be shown again. ",-1),fe={key:0,class:"mt-4 bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded font-mono text-sm text-gray-500 break-all"},_e={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},ve={class:"flex items-center"},ke={class:"ml-2 text-sm text-gray-600 dark:text-gray-400"},Ie={__name:"ApiTokenManager",props:{tokens:Array,availablePermissions:Array,defaultPermissions:Array},setup(d){const r=x({name:"",permissions:d.defaultPermissions}),m=x({permissions:[]}),u=x({}),v=b(!1),f=b(null),_=b(null),F=()=>{r.post(route("api-tokens.store"),{preserveScroll:!0,onSuccess:()=>{v.value=!0,r.reset()}})},V=p=>{m.permissions=p.abilities,f.value=p},j=()=>{m.put(route("api-tokens.update",f.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>f.value=null})},D=p=>{_.value=p},M=()=>{u.delete(route("api-tokens.destroy",_.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>_.value=null})};return(p,a)=>(i(),c("div",null,[o(E,{onSubmitted:F},{title:e(()=>[l(" Create API Token ")]),description:e(()=>[l(" API tokens allow third-party services to authenticate with our application on your behalf. ")]),form:e(()=>[t("div",ee,[o(B,{for:"name",value:"Name"}),o(H,{id:"name",modelValue:n(r).name,"onUpdate:modelValue":a[0]||(a[0]=s=>n(r).name=s),type:"text",class:"mt-1 block w-full",autofocus:""},null,8,["modelValue"]),o(Y,{message:n(r).errors.name,class:"mt-2"},null,8,["message"])]),d.availablePermissions.length>0?(i(),c("div",se,[o(B,{for:"permissions",value:"Permissions"}),t("div",te,[(i(!0),c(w,null,$(d.availablePermissions,s=>(i(),c("div",{key:s},[t("label",oe,[o(S,{checked:n(r).permissions,"onUpdate:checked":a[1]||(a[1]=k=>n(r).permissions=k),value:s},null,8,["checked","value"]),t("span",ae,h(s),1)])]))),128))])])):g("",!0)]),actions:e(()=>[o(L,{on:n(r).recentlySuccessful,class:"mr-3"},{default:e(()=>[l(" Created. ")]),_:1},8,["on"]),o(I,{class:C({"opacity-25":n(r).processing}),disabled:n(r).processing},{default:e(()=>[l(" Create ")]),_:1},8,["class","disabled"])]),_:1}),d.tokens.length>0?(i(),c("div",le,[o(q),t("div",ne,[o(U,null,{title:e(()=>[l(" Manage API Tokens ")]),description:e(()=>[l(" You may delete any of your existing tokens if they are no longer needed. ")]),content:e(()=>[t("div",ie,[(i(!0),c(w,null,$(d.tokens,s=>(i(),c("div",{key:s.id,class:"flex items-center justify-between"},[t("div",re,h(s.name),1),t("div",ce,[s.last_used_ago?(i(),c("div",de," Last used "+h(s.last_used_ago),1)):g("",!0),d.availablePermissions.length>0?(i(),c("button",{key:1,class:"cursor-pointer ml-6 text-sm text-gray-400 underline",onClick:k=>V(s)}," Permissions ",8,me)):g("",!0),t("button",{class:"cursor-pointer ml-6 text-sm text-red-500",onClick:k=>D(s)}," Delete ",8,ue)])]))),128))])]),_:1})])])):g("",!0),o(T,{show:v.value,onClose:a[3]||(a[3]=s=>v.value=!1)},{title:e(()=>[l(" API Token ")]),content:e(()=>[pe,p.$page.props.jetstream.flash.token?(i(),c("div",fe,h(p.$page.props.jetstream.flash.token),1)):g("",!0)]),footer:e(()=>[o(A,{onClick:a[2]||(a[2]=s=>v.value=!1)},{default:e(()=>[l(" Close ")]),_:1})]),_:1},8,["show"]),o(T,{show:f.value!=null,onClose:a[6]||(a[6]=s=>f.value=null)},{title:e(()=>[l(" API Token Permissions ")]),content:e(()=>[t("div",_e,[(i(!0),c(w,null,$(d.availablePermissions,s=>(i(),c("div",{key:s},[t("label",ve,[o(S,{checked:n(m).permissions,"onUpdate:checked":a[4]||(a[4]=k=>n(m).permissions=k),value:s},null,8,["checked","value"]),t("span",ke,h(s),1)])]))),128))])]),footer:e(()=>[o(A,{onClick:a[5]||(a[5]=s=>f.value=null)},{default:e(()=>[l(" Cancel ")]),_:1}),o(I,{class:C(["ml-3",{"opacity-25":n(m).processing}]),disabled:n(m).processing,onClick:j},{default:e(()=>[l(" Save ")]),_:1},8,["class","disabled"])]),_:1},8,["show"]),o(Z,{show:_.value!=null,onClose:a[8]||(a[8]=s=>_.value=null)},{title:e(()=>[l(" Delete API Token ")]),content:e(()=>[l(" Are you sure you would like to delete this API token? ")]),footer:e(()=>[o(A,{onClick:a[7]||(a[7]=s=>_.value=null)},{default:e(()=>[l(" Cancel ")]),_:1}),o(W,{class:C(["ml-3",{"opacity-25":n(u).processing}]),disabled:n(u).processing,onClick:M},{default:e(()=>[l(" Delete ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{Ie as default};
