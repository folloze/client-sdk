import{a as Ye}from"./chunk.7KX576SE.js";import{c as F}from"./chunk.FNWCYPSB.js";import{a as C}from"./chunk.J2YZ3XEF.js";import{a as G}from"./chunk.RCKOYMXG.js";import{a as m,b as Ze,c as er,d as h,e as rr,f as tr,g as ir,h as w,i as nr,j as sr,k as or,l as T,m as I,n as ar,o as cr,p as O,q as ur,r as lr,s as fr,t as pr,u as L,w as dr}from"./chunk.TGN3ZZKD.js";import{d as o,e as q}from"./chunk.KVVA2TM3.js";var x=o((ui,R)=>{var hr=w(),gr=m();function vr(t,e,r){(r!==void 0&&!gr(t[e],r)||r===void 0&&!(e in t))&&hr(t,e,r)}R.exports=vr});var E=o((g,p)=>{var yr=Ze(),V=typeof g=="object"&&g&&!g.nodeType&&g,D=V&&typeof p=="object"&&p&&!p.nodeType&&p,br=D&&D.exports===V,z=br?yr.Buffer:void 0,B=z?z.allocUnsafe:void 0;function qr(t,e){if(e)return t.slice();var r=t.length,i=B?B(r):new t.constructor(r);return t.copy(i),i}p.exports=qr});var H=o((li,U)=>{var K=sr();function mr(t){var e=new t.constructor(t.byteLength);return new K(e).set(new K(t)),e}U.exports=mr});var W=o((fi,N)=>{var wr=H();function Or(t,e){var r=e?wr(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}N.exports=Or});var X=o((pi,$)=>{function xr(t,e){var r=-1,i=t.length;for(e||(e=Array(i));++r<i;)e[r]=t[r];return e}$.exports=xr});var Y=o((di,Q)=>{var Ar=h(),J=Object.create,Pr=function(){function t(){}return function(e){if(!Ar(e))return{};if(J)return J(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();Q.exports=Pr});var A=o((hi,Z)=>{var _r=or(),kr=_r(Object.getPrototypeOf,Object);Z.exports=kr});var re=o((gi,ee)=>{var Mr=Y(),Sr=A(),jr=T();function Fr(t){return typeof t.constructor=="function"&&!jr(t)?Mr(Sr(t)):{}}ee.exports=Fr});var ie=o((vi,te)=>{var Tr=O(),Ir=I();function Lr(t){return Ir(t)&&Tr(t)}te.exports=Lr});var oe=o((yi,se)=>{var Cr=er(),Gr=A(),Rr=I(),Vr="[object Object]",Dr=Function.prototype,zr=Object.prototype,ne=Dr.toString,Br=zr.hasOwnProperty,Er=ne.call(Object);function Kr(t){if(!Rr(t)||Cr(t)!=Vr)return!1;var e=Gr(t);if(e===null)return!0;var r=Br.call(e,"constructor")&&e.constructor;return typeof r=="function"&&r instanceof r&&ne.call(r)==Er}se.exports=Kr});var P=o((bi,ae)=>{function Ur(t,e){if(!(e==="constructor"&&typeof t[e]=="function")&&e!="__proto__")return t[e]}ae.exports=Ur});var ue=o((qi,ce)=>{var Hr=w(),Nr=m(),Wr=Object.prototype,$r=Wr.hasOwnProperty;function Xr(t,e,r){var i=t[e];(!($r.call(t,e)&&Nr(i,r))||r===void 0&&!(e in t))&&Hr(t,e,r)}ce.exports=Xr});var fe=o((mi,le)=>{var Jr=ue(),Qr=w();function Yr(t,e,r,i){var s=!r;r||(r={});for(var a=-1,c=e.length;++a<c;){var n=e[a],u=i?i(r[n],t[n],n,r,t):void 0;u===void 0&&(u=t[n]),s?Qr(r,n,u):Jr(r,n,u)}return r}le.exports=Yr});var de=o((wi,pe)=>{function Zr(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}pe.exports=Zr});var ge=o((Oi,he)=>{var et=h(),rt=T(),tt=de(),it=Object.prototype,nt=it.hasOwnProperty;function st(t){if(!et(t))return tt(t);var e=rt(t),r=[];for(var i in t)i=="constructor"&&(e||!nt.call(t,i))||r.push(i);return r}he.exports=st});var _=o((xi,ve)=>{var ot=pr(),at=ge(),ct=O();function ut(t){return ct(t)?ot(t,!0):at(t)}ve.exports=ut});var be=o((Ai,ye)=>{var lt=fe(),ft=_();function pt(t){return lt(t,ft(t))}ye.exports=pt});var Ae=o((Pi,xe)=>{var qe=x(),dt=E(),ht=W(),gt=X(),vt=re(),me=ar(),we=cr(),yt=ie(),bt=ur(),qt=rr(),mt=h(),wt=oe(),Ot=lr(),Oe=P(),xt=be();function At(t,e,r,i,s,a,c){var n=Oe(t,r),u=Oe(e,r),S=c.get(u);if(S){qe(t,r,S);return}var l=a?a(n,u,r+"",t,e,c):void 0,d=l===void 0;if(d){var y=we(u),b=!y&&bt(u),j=!y&&!b&&Ot(u);l=u,y||b||j?we(n)?l=n:yt(n)?l=gt(n):b?(d=!1,l=dt(u,!0)):j?(d=!1,l=ht(u,!0)):l=[]:wt(u)||me(u)?(l=n,me(n)?l=xt(n):(!mt(n)||qt(n))&&(l=vt(u))):d=!1}d&&(c.set(u,l),s(l,u,i,a,c),c.delete(u)),qe(t,r,l)}xe.exports=At});var ke=o((_i,_e)=>{var Pt=tr(),_t=x(),kt=nr(),Mt=Ae(),St=h(),jt=_(),Ft=P();function Pe(t,e,r,i,s){t!==e&&kt(e,function(a,c){if(s||(s=new Pt),St(a))Mt(t,e,c,r,Pe,i,s);else{var n=i?i(Ft(t,c),a,c+"",t,e,s):void 0;n===void 0&&(n=a),_t(t,c,n)}},jt)}_e.exports=Pe});var Se=o((ki,Me)=>{function Tt(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}Me.exports=Tt});var Te=o((Mi,Fe)=>{var It=Se(),je=Math.max;function Lt(t,e,r){return e=je(e===void 0?t.length-1:e,0),function(){for(var i=arguments,s=-1,a=je(i.length-e,0),c=Array(a);++s<a;)c[s]=i[e+s];s=-1;for(var n=Array(e+1);++s<e;)n[s]=i[s];return n[e]=r(c),It(t,this,n)}}Fe.exports=Lt});var Le=o((Si,Ie)=>{function Ct(t){return function(){return t}}Ie.exports=Ct});var Re=o((ji,Ge)=>{var Gt=Le(),Ce=ir(),Rt=L(),Vt=Ce?function(t,e){return Ce(t,"toString",{configurable:!0,enumerable:!1,value:Gt(e),writable:!0})}:Rt;Ge.exports=Vt});var De=o((Fi,Ve)=>{var Dt=800,zt=16,Bt=Date.now;function Et(t){var e=0,r=0;return function(){var i=Bt(),s=zt-(i-r);if(r=i,s>0){if(++e>=Dt)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}Ve.exports=Et});var Be=o((Ti,ze)=>{var Kt=Re(),Ut=De(),Ht=Ut(Kt);ze.exports=Ht});var Ke=o((Ii,Ee)=>{var Nt=L(),Wt=Te(),$t=Be();function Xt(t,e){return $t(Wt(t,e,Nt),t+"")}Ee.exports=Xt});var He=o((Li,Ue)=>{var Jt=m(),Qt=O(),Yt=fr(),Zt=h();function ei(t,e,r){if(!Zt(r))return!1;var i=typeof e;return(i=="number"?Qt(r)&&Yt(e,r.length):i=="string"&&e in r)?Jt(r[e],t):!1}Ue.exports=ei});var We=o((Ci,Ne)=>{var ri=Ke(),ti=He();function ii(t){return ri(function(e,r){var i=-1,s=r.length,a=s>1?r[s-1]:void 0,c=s>2?r[2]:void 0;for(a=t.length>3&&typeof a=="function"?(s--,a):void 0,c&&ti(r[0],r[1],c)&&(a=s<3?void 0:a,s=1),e=Object(e);++i<s;){var n=r[i];n&&t(e,n,i,a)}return e})}Ne.exports=ii});var Xe=o((Gi,$e)=>{var ni=ke(),si=We(),oi=si(function(t,e,r,i){ni(t,e,r,i)});$e.exports=oi});var Je=q(Ye());var f=class{static async bindLiveBoard(e){await import("./mocks.JA3YWDBG.js").then(r=>r.rules(e)).catch(r=>console.error("could not import liveboard mocks",r))}static async bindDesigner(e){await import("./mocks.LPWLK2YG.js").then(r=>r.rules(e)).catch(r=>console.error("could not import designer mocks",r))}static async bindAnalytics(e){await import("./mocks.VVQ5ZNII.js").then(r=>r.rules(e)).catch(r=>console.error("could not import analytics mocks",r))}};var Qe=q(Xe()),k=q(dr()),ai={organizationId:-1,useMock:!1,isPreview:!1,config:{baseURL:"/",headers:{}},analyticsServiceEndpoint:""},v=class{constructor(e){this.handleSuccess=e=>{var r,i;return((r=e.headers)==null?void 0:r.authorization)&&(this.jwt=e.headers.authorization.replace("bearer ","")),((i=e.headers)==null?void 0:i["folloze-session-guid"])&&(this.sessionGuid=e.headers["folloze-session-guid"]),e};var i,s;this.useMock=e.useMock,this.options=e,this.organizationId=e.organizationId,e.sessionGuid&&(this.sessionGuid=e.sessionGuid),e.jwt&&(this.jwt=e.jwt);let r=typeof window!="undefined"&&((i=window.FollozeState.initialState)==null?void 0:i.token)?(s=window.FollozeState.initialState)==null?void 0:s.token:void 0;r&&(this.urlToken=r)}static async create(e){e=(0,Qe.default)(ai,e,(i,s)=>s===null?i:void 0);let r=new v(e);return e.useMock?await r.createMockFetcher(e):r.createAxiosFetcher(e),r}async createMockFetcher(e){return await import("./src.H3ILTLVQ.js").then(async r=>{this.createAxiosFetcher(e),this.fetcher.interceptors.response.use(this.handleSuccess,this.MockHandleError),this.mock=new r.default(this.fetcher),await Promise.all([f.bindLiveBoard(this.mock),f.bindDesigner(this.mock),f.bindAnalytics(this.mock)])}).catch(r=>console.error("could not create mock fetcher",r))}withPartialContent(e,r=2e3,i=1){return new Promise((s,a)=>{if(i<=0){console.warn("stop retrying partial content"),a("stop retrying");return}new Promise(e).then(n=>{n.status==206?(console.debug(`retry partial content ${i}`),i=i-1,setTimeout(()=>{s(this.withPartialContent(e,r,i))},r)):(console.debug("partial content resolved",n.data),s(n.data))}).catch(n=>{console.error("could not finish partial content request",n),a(n)})})}withDisableOnPreview(e){var r;return((r=this.options)==null?void 0:r.isPreview)?new Promise(i=>i({status:200})):e()}handleError(e){var r;switch((0,k.default)(e,"response.status")){case 410:window.location.reload();break}return console.error(`could not complete axios request to: ${(r=e.config)==null?void 0:r.url}`,e.config),Promise.reject(e)}MockHandleError(e){var r;switch((0,k.default)(e,"response.status")){case 410:window.location.reload();break;case 409:return Promise.reject(e)}return(process==null?void 0:process.env)||console.warn(`could not complete mock request to: ${(r=e.config)==null?void 0:r.url}`,e.config),Promise.reject(e)}createAxiosFetcher(e){e.config.headers["X-Requested-With"]="XMLHttpRequest",e.csrfToken&&(e.config.headers["X-CSRF-Token"]=e.csrfToken),this.fetcher=Je.default.create(e.config),this.fetcher.interceptors.response.use(this.handleSuccess,this.handleError),this.fetcher.interceptors.request.use(r=>(this.sessionGuid&&(r.headers["folloze-session-guid"]=this.sessionGuid),this.jwt&&(r.headers.Authorization=`Bearer ${this.jwt}`),r))}};var M=class{constructor(){}static async create(e){let r=new M,i=await v.create(e);return r.fetcher=i,r.analytics=new F(i),r.designer=new C(i),r.liveboard=new G(i),r}};export{v as a,M as b};
