import{a as Ye}from"./chunk.EUG532GC.js";import{c as I}from"./chunk.6USUV4SD.js";import{a as G}from"./chunk.FAIT5GAJ.js";import{a as R}from"./chunk.FDZZXAEU.js";import{a as y,b as Ze,c as er,d as v,e as rr,f as tr,g as ir,h as x,i as nr,j as or,k as sr,l as C,m as j,n as ar,o as ur,p as O,q as cr,r as lr,s as fr,t as pr,u as L,w as dr}from"./chunk.BQ5K2J73.js";import{d as s,e as b}from"./chunk.V2USFPSF.js";var P=s((ci,z)=>{var hr=x(),vr=y();function gr(t,e,r){(r!==void 0&&!vr(t[e],r)||r===void 0&&!(e in t))&&hr(t,e,r)}z.exports=gr});var U=s((g,p)=>{var qr=Ze(),H=typeof g=="object"&&g&&!g.nodeType&&g,E=H&&typeof p=="object"&&p&&!p.nodeType&&p,mr=E&&E.exports===H,D=mr?qr.Buffer:void 0,B=D?D.allocUnsafe:void 0;function wr(t,e){if(e)return t.slice();var r=t.length,i=B?B(r):new t.constructor(r);return t.copy(i),i}p.exports=wr});var N=s((li,K)=>{var V=or();function br(t){var e=new t.constructor(t.byteLength);return new V(e).set(new V(t)),e}K.exports=br});var $=s((fi,_)=>{var yr=N();function xr(t,e){var r=e?yr(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}_.exports=xr});var X=s((pi,W)=>{function Or(t,e){var r=-1,i=t.length;for(e||(e=Array(i));++r<i;)e[r]=t[r];return e}W.exports=Or});var Y=s((di,Q)=>{var Pr=v(),J=Object.create,Ar=function(){function t(){}return function(e){if(!Pr(e))return{};if(J)return J(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();Q.exports=Ar});var A=s((hi,Z)=>{var Mr=sr(),Sr=Mr(Object.getPrototypeOf,Object);Z.exports=Sr});var re=s((vi,ee)=>{var Fr=Y(),kr=A(),Tr=C();function Ir(t){return typeof t.constructor=="function"&&!Tr(t)?Fr(kr(t)):{}}ee.exports=Ir});var ie=s((gi,te)=>{var Cr=O(),jr=j();function Lr(t){return jr(t)&&Cr(t)}te.exports=Lr});var se=s((qi,oe)=>{var Gr=er(),Rr=A(),zr=j(),Er="[object Object]",Dr=Function.prototype,Br=Object.prototype,ne=Dr.toString,Hr=Br.hasOwnProperty,Ur=ne.call(Object);function Vr(t){if(!zr(t)||Gr(t)!=Er)return!1;var e=Rr(t);if(e===null)return!0;var r=Hr.call(e,"constructor")&&e.constructor;return typeof r=="function"&&r instanceof r&&ne.call(r)==Ur}oe.exports=Vr});var M=s((mi,ae)=>{function Kr(t,e){if(!(e==="constructor"&&typeof t[e]=="function")&&e!="__proto__")return t[e]}ae.exports=Kr});var ce=s((wi,ue)=>{var Nr=x(),_r=y(),$r=Object.prototype,Wr=$r.hasOwnProperty;function Xr(t,e,r){var i=t[e];(!(Wr.call(t,e)&&_r(i,r))||r===void 0&&!(e in t))&&Nr(t,e,r)}ue.exports=Xr});var fe=s((bi,le)=>{var Jr=ce(),Qr=x();function Yr(t,e,r,i){var o=!r;r||(r={});for(var a=-1,u=e.length;++a<u;){var n=e[a],c=i?i(r[n],t[n],n,r,t):void 0;c===void 0&&(c=t[n]),o?Qr(r,n,c):Jr(r,n,c)}return r}le.exports=Yr});var de=s((yi,pe)=>{function Zr(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}pe.exports=Zr});var ve=s((xi,he)=>{var et=v(),rt=C(),tt=de(),it=Object.prototype,nt=it.hasOwnProperty;function ot(t){if(!et(t))return tt(t);var e=rt(t),r=[];for(var i in t)i=="constructor"&&(e||!nt.call(t,i))||r.push(i);return r}he.exports=ot});var S=s((Oi,ge)=>{var st=pr(),at=ve(),ut=O();function ct(t){return ut(t)?st(t,!0):at(t)}ge.exports=ct});var me=s((Pi,qe)=>{var lt=fe(),ft=S();function pt(t){return lt(t,ft(t))}qe.exports=pt});var Pe=s((Ai,Oe)=>{var we=P(),dt=U(),ht=$(),vt=X(),gt=re(),be=ar(),ye=ur(),qt=ie(),mt=cr(),wt=rr(),bt=v(),yt=se(),xt=lr(),xe=M(),Ot=me();function Pt(t,e,r,i,o,a,u){var n=xe(t,r),c=xe(e,r),k=u.get(c);if(k){we(t,r,k);return}var l=a?a(n,c,r+"",t,e,u):void 0,h=l===void 0;if(h){var m=ye(c),w=!m&&mt(c),T=!m&&!w&&xt(c);l=c,m||w||T?ye(n)?l=n:qt(n)?l=vt(n):w?(h=!1,l=dt(c,!0)):T?(h=!1,l=ht(c,!0)):l=[]:yt(c)||be(c)?(l=n,be(n)?l=Ot(n):(!bt(n)||wt(n))&&(l=gt(c))):h=!1}h&&(u.set(c,l),o(l,c,i,a,u),u.delete(c)),we(t,r,l)}Oe.exports=Pt});var Se=s((Mi,Me)=>{var At=tr(),Mt=P(),St=nr(),Ft=Pe(),kt=v(),Tt=S(),It=M();function Ae(t,e,r,i,o){t!==e&&St(e,function(a,u){if(o||(o=new At),kt(a))Ft(t,e,u,r,Ae,i,o);else{var n=i?i(It(t,u),a,u+"",t,e,o):void 0;n===void 0&&(n=a),Mt(t,u,n)}},Tt)}Me.exports=Ae});var ke=s((Si,Fe)=>{function Ct(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}Fe.exports=Ct});var Ce=s((Fi,Ie)=>{var jt=ke(),Te=Math.max;function Lt(t,e,r){return e=Te(e===void 0?t.length-1:e,0),function(){for(var i=arguments,o=-1,a=Te(i.length-e,0),u=Array(a);++o<a;)u[o]=i[e+o];o=-1;for(var n=Array(e+1);++o<e;)n[o]=i[o];return n[e]=r(u),jt(t,this,n)}}Ie.exports=Lt});var Le=s((ki,je)=>{function Gt(t){return function(){return t}}je.exports=Gt});var ze=s((Ti,Re)=>{var Rt=Le(),Ge=ir(),zt=L(),Et=Ge?function(t,e){return Ge(t,"toString",{configurable:!0,enumerable:!1,value:Rt(e),writable:!0})}:zt;Re.exports=Et});var De=s((Ii,Ee)=>{var Dt=800,Bt=16,Ht=Date.now;function Ut(t){var e=0,r=0;return function(){var i=Ht(),o=Bt-(i-r);if(r=i,o>0){if(++e>=Dt)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}Ee.exports=Ut});var He=s((Ci,Be)=>{var Vt=ze(),Kt=De(),Nt=Kt(Vt);Be.exports=Nt});var Ve=s((ji,Ue)=>{var _t=L(),$t=Ce(),Wt=He();function Xt(t,e){return Wt($t(t,e,_t),t+"")}Ue.exports=Xt});var Ne=s((Li,Ke)=>{var Jt=y(),Qt=O(),Yt=fr(),Zt=v();function ei(t,e,r){if(!Zt(r))return!1;var i=typeof e;return(i=="number"?Qt(r)&&Yt(e,r.length):i=="string"&&e in r)?Jt(r[e],t):!1}Ke.exports=ei});var $e=s((Gi,_e)=>{var ri=Ve(),ti=Ne();function ii(t){return ri(function(e,r){var i=-1,o=r.length,a=o>1?r[o-1]:void 0,u=o>2?r[2]:void 0;for(a=t.length>3&&typeof a=="function"?(o--,a):void 0,u&&ti(r[0],r[1],u)&&(a=o<3?void 0:a,o=1),e=Object(e);++i<o;){var n=r[i];n&&t(e,n,i,a)}return e})}_e.exports=ii});var Xe=s((Ri,We)=>{var ni=Se(),oi=$e(),si=oi(function(t,e,r,i){ni(t,e,r,i)});We.exports=si});var Je=b(Ye(),1);var f=class{static async bindLiveBoard(e){await import("./mocks.F42UJBHI.js").then(r=>r.rules(e)).catch(r=>console.error("could not import liveboard mocks",r))}static async bindDesigner(e){await import("./mocks.TMFGKNC2.js").then(r=>r.rules(e)).catch(r=>console.error("could not import designer mocks",r))}static async bindAnalytics(e){await import("./mocks.535F4SD5.js").then(r=>r.rules(e)).catch(r=>console.error("could not import analytics mocks",r))}};var Qe=b(Xe(),1),F=b(dr(),1),ai={organizationId:-1,useMock:!1,isPreview:!1,config:{baseURL:"/",headers:{}},analyticsServiceEndpoint:""},d=class{constructor(e){this.handleSuccess=e=>{var r,i;return(r=e.headers)!=null&&r.authorization&&(this.jwt=e.headers.authorization.replace("bearer ","")),(i=e.headers)!=null&&i["folloze-session-guid"]&&(this.sessionGuid=e.headers["folloze-session-guid"]),e};var i,o;this.useMock=e.useMock,this.options=e,this.organizationId=e.organizationId,e.sessionGuid&&(this.sessionGuid=e.sessionGuid),e.jwt&&(this.jwt=e.jwt);let r=typeof window!="undefined"&&((i=window.FollozeState.initialState)==null?void 0:i.token)?(o=window.FollozeState.initialState)==null?void 0:o.token:void 0;r&&(this.urlToken=r)}static async create(e){e=(0,Qe.default)(ai,e,(i,o)=>o===null?i:void 0);let r=new d(e);return e.useMock?await r.createMockFetcher(e):r.createAxiosFetcher(e),r}async createMockFetcher(e){return await import("./src.TIUBDR6P.js").then(async r=>{this.createAxiosFetcher(e),this.fetcher.interceptors.response.use(this.handleSuccess,this.MockHandleError),this.mock=new r.default(this.fetcher),await Promise.all([f.bindLiveBoard(this.mock),f.bindDesigner(this.mock),f.bindAnalytics(this.mock)])}).catch(r=>console.error("could not create mock fetcher",r))}withPartialContent(e,r=2e3,i=1){return new Promise((o,a)=>{if(i<=0){console.warn("stop retrying partial content"),a("stop retrying");return}new Promise(e).then(n=>{n.status==206?(console.debug(`retry partial content ${i}`),i=i-1,setTimeout(()=>{o(this.withPartialContent(e,r,i))},r)):(console.debug("partial content resolved",n.data),o(n.data))}).catch(n=>{console.error("could not finish partial content request",n),a(n)})})}withDisableOnPreview(e){var r;return(r=this.options)!=null&&r.isPreview?new Promise(i=>i({status:200})):e()}handleError(e){var r;switch((0,F.default)(e,"response.status")){case 410:window.location.reload();break}return console.error(`could not complete axios request to: ${(r=e.config)==null?void 0:r.url}`,e.config),Promise.reject(e)}MockHandleError(e){var r;switch((0,F.default)(e,"response.status")){case 410:window.location.reload();break;case 409:return Promise.reject(e)}return process!=null&&process.env||console.warn(`could not complete mock request to: ${(r=e.config)==null?void 0:r.url}`,e.config),Promise.reject(e)}createAxiosFetcher(e){e.config.headers["X-Requested-With"]="XMLHttpRequest",e.csrfToken&&(e.config.headers["X-CSRF-Token"]=e.csrfToken),this.fetcher=Je.default.create(e.config),this.fetcher.interceptors.response.use(this.handleSuccess,this.handleError),this.fetcher.interceptors.request.use(r=>(this.sessionGuid&&(r.headers["folloze-session-guid"]=this.sessionGuid),this.jwt&&(r.headers.Authorization=`Bearer ${this.jwt}`),r))}};var q=class{constructor(){}static async create(e){let r=new q,i=await d.create(e);return r.fetcher=i,r.analytics=new I(i),r.designer=new G(i),r.liveboard=new R(i),r}};export{d as a,q as b};
