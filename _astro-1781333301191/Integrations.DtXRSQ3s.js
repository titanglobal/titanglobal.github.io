import{_ as d}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{f,o as c,c as C,w as _,y as b,k as o,g as w,d as m,b as u}from"./runtime-core.esm-bundler.BM0OPItf.js";const a=64,r=10,g=m({__name:"Integrations",props:{siteMeta:{},leftPos:{},topPos:{}},setup(p,{expose:s}){s();const e=p,t=u(()=>{if(!e.siteMeta.whatsAppNumber||e.siteMeta.isFloatingWhatsAppWidgetEnabled===!1)return null;const h=e.siteMeta.whatsAppMessage?`?text=${e.siteMeta.whatsAppMessage}`:"";return`https://wa.me/${e.siteMeta.whatsAppNumber}${h}`}),i=u(()=>e.leftPos!==void 0&&e.topPos!==void 0?{left:`${e.leftPos-a-r}px`,top:`${e.topPos-a-r}px`,right:"unset",bottom:"unset"}:{}),n={CHAT_BUBBLE_SIZE:a,PREVIEW_PADDING:r,props:e,whatsAppUrl:t,chatBubblePosition:i};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),v=["href"];function A(p,s,e,t,i,n){const l=f("qa");return c(),C("div",null,[t.whatsAppUrl?_((c(),C("a",{key:0,class:"whats-app-bubble",href:t.whatsAppUrl,rel:"noopener",title:"Open WhatsApp",target:"_blank",style:b(t.chatBubblePosition)},[...s[0]||(s[0]=[o("svg",{width:"64",height:"64",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg"},[o("circle",{cx:"32",cy:"32",r:"32",fill:"var(--color-success-dark)"}),o("path",{d:`M11.375 52.625L14.2745 42.0323C12.4853 38.9317 11.5452 35.4169 11.5469
31.8127C11.552 20.5445 20.7216 11.375 31.988 11.375C37.4553 11.3767 42.5875 13.5062 46.4478 17.37C50.3064
21.2337 52.4308 26.3694 52.4291 31.8316C52.4239 43.1014 43.2544 52.2709 31.988 52.2709C28.5677 52.2692 25.1972
51.4116 22.2117 49.7822L11.375 52.625ZM22.7136 46.0817C25.5942 47.7919 28.3442 48.8162 31.9811 48.818C41.3448 48.818
48.9727 41.197 48.9778 31.8281C48.9813 22.4403 41.3895 14.8297 31.9948 14.8262C22.6242 14.8262 15.0016 22.4472 14.9981
31.8144C14.9964 35.6386 16.117 38.502 17.9991 41.4978L16.282 47.7678L22.7136 46.0817ZM42.285 36.6905C42.1578 36.4773
 41.8175 36.3502 41.3053 36.0941C40.7948 35.838 38.2837 34.6022 37.8145 34.432C37.347 34.2619 37.0067 34.1759 36.6647
 34.6881C36.3244 35.1986 35.3447 36.3502 35.0473 36.6905C34.75 37.0308 34.4509 37.0738 33.9405 36.8177C33.43 36.5616 31.7834
 36.0236 29.8327 34.2825C28.315 32.9281 27.2889 31.2558 26.9916 30.7436C26.6942 30.2331 26.9606 29.9564 27.215
 29.702C27.4453 29.4734 27.7255 29.1056 27.9816 28.8066C28.2411 28.5109 28.3253 28.2978 28.4972 27.9558C28.6673
 27.6155 28.5831 27.3164 28.4542 27.0603C28.3253 26.8059 27.3044 24.2914 26.8798 23.2688C26.4639 22.2736 26.0428
 22.4077 25.73 22.3922L24.7503 22.375C24.41 22.375 23.8566 22.5022 23.3891 23.0144C22.9216 23.5266 21.6016 24.7606
 21.6016 27.2752C21.6016 29.7897 23.432 32.2183 23.6864 32.5586C23.9425 32.8989 27.2872 38.0586 32.4108 40.2706C33.6294
 40.7966 34.5816 41.1111 35.3223 41.3466C36.5461 41.735 37.6598 41.68 38.5398 41.5494C39.5212 41.4033 41.5614 40.3136
 41.9877 39.1208C42.4139 37.9262 42.4139 36.9036 42.285 36.6905Z`,fill:"white"})],-1)])],12,v)),[[l,"whats-app-bubble"]]):w("",!0)])}const x=d(g,[["render",A]]);export{x as default};
