import{a as Ye}from"./chunk.7KX576SE.js";import{c as j}from"./chunk.D33KHSEJ.js";import{a as L}from"./chunk.T4JXVM2I.js";import{a as R}from"./chunk.3H6YR453.js";import{a as w,b as Ze,c as er,d as h,e as rr,f as tr,g as ir,h as O,i as nr,j as sr,k as or,l as T,m as C,n as ar,o as ur,p as x,q as cr,r as lr,s as fr,t as dr,u as I,w as pr}from"./chunk.OI2NJWH6.js";import{d as a,e as q}from"./chunk.KVVA2TM3.js";var A=a((ci,G)=>{var hr=O(),gr=w();function vr(t,e,r){(r!==void 0&&!gr(t[e],r)||r===void 0&&!(e in t))&&hr(t,e,r)}G.exports=vr});var B=a((g,d)=>{var br=Ze(),z=typeof g=="object"&&g&&!g.nodeType&&g,E=z&&typeof d=="object"&&d&&!d.nodeType&&d,yr=E&&E.exports===z,V=yr?br.Buffer:void 0,D=V?V.allocUnsafe:void 0;function mr(t,e){if(e)return t.slice();var r=t.length,i=D?D(r):new t.constructor(r);return t.copy(i),i}d.exports=mr});var H=a((li,U)=>{var K=sr();function qr(t){var e=new t.constructor(t.byteLength);return new K(e).set(new K(t)),e}U.exports=qr});var W=a((fi,N)=>{var wr=H();function Or(t,e){var r=e?wr(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}N.exports=Or});var X=a((di,$)=>{function xr(t,e){var r=-1,i=t.length;for(e||(e=Array(i));++r<i;)e[r]=t[r];return e}$.exports=xr});var Y=a((pi,Q)=>{var Ar=h(),J=Object.create,Pr=function(){function t(){}return function(e){if(!Ar(e))return{};if(J)return J(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();Q.exports=Pr});var P=a((hi,Z)=>{var _r=or(),kr=_r(Object.getPrototypeOf,Object);Z.exports=kr});var re=a((gi,ee)=>{var Mr=Y(),Sr=P(),Fr=T();function jr(t){return typeof t.constructor=="function"&&!Fr(t)?Mr(Sr(t)):{}}ee.exports=jr});var ie=a((vi,te)=>{var Tr=x(),Cr=C();function Ir(t){return Cr(t)&&Tr(t)}te.exports=Ir});var oe=a((bi,se)=>{var Lr=er(),Rr=P(),Gr=C(),zr="[object Object]",Er=Function.prototype,Vr=Object.prototype,ne=Er.toString,Dr=Vr.hasOwnProperty,Br=ne.call(Object);function Kr(t){if(!Gr(t)||Lr(t)!=zr)return!1;var e=Rr(t);if(e===null)return!0;var r=Dr.call(e,"constructor")&&e.constructor;return typeof r=="function"&&r instanceof r&&ne.call(r)==Br}se.exports=Kr});var _=a((yi,ae)=>{function Ur(t,e){if(!(e==="constructor"&&typeof t[e]=="function")&&e!="__proto__")return t[e]}ae.exports=Ur});var ce=a((mi,ue)=>{var Hr=O(),Nr=w(),Wr=Object.prototype,$r=Wr.hasOwnProperty;function Xr(t,e,r){var i=t[e];(!($r.call(t,e)&&Nr(i,r))||r===void 0&&!(e in t))&&Hr(t,e,r)}ue.exports=Xr});var fe=a((qi,le)=>{var Jr=ce(),Qr=O();function Yr(t,e,r,i){var n=!r;r||(r={});for(var u=-1,c=e.length;++u<c;){var s=e[u],o=i?i(r[s],t[s],s,r,t):void 0;o===void 0&&(o=t[s]),n?Qr(r,s,o):Jr(r,s,o)}return r}le.exports=Yr});var pe=a((wi,de)=>{function Zr(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}de.exports=Zr});var ge=a((Oi,he)=>{var et=h(),rt=T(),tt=pe(),it=Object.prototype,nt=it.hasOwnProperty;function st(t){if(!et(t))return tt(t);var e=rt(t),r=[];for(var i in t)i=="constructor"&&(e||!nt.call(t,i))||r.push(i);return r}he.exports=st});var k=a((xi,ve)=>{var ot=dr(),at=ge(),ut=x();function ct(t){return ut(t)?ot(t,!0):at(t)}ve.exports=ct});var ye=a((Ai,be)=>{var lt=fe(),ft=k();function dt(t){return lt(t,ft(t))}be.exports=dt});var Ae=a((Pi,xe)=>{var me=A(),pt=B(),ht=W(),gt=X(),vt=re(),qe=ar(),we=ur(),bt=ie(),yt=cr(),mt=rr(),qt=h(),wt=oe(),Ot=lr(),Oe=_(),xt=ye();function At(t,e,r,i,n,u,c){var s=Oe(t,r),o=Oe(e,r),b=c.get(o);if(b){me(t,r,b);return}var l=u?u(s,o,r+"",t,e,c):void 0,p=l===void 0;if(p){var y=we(o),m=!y&&yt(o),F=!y&&!m&&Ot(o);l=o,y||m||F?we(s)?l=s:bt(s)?l=gt(s):m?(p=!1,l=pt(o,!0)):F?(p=!1,l=ht(o,!0)):l=[]:wt(o)||qe(o)?(l=s,qe(s)?l=xt(s):(!qt(s)||mt(s))&&(l=vt(o))):p=!1}p&&(c.set(o,l),n(l,o,i,u,c),c.delete(o)),me(t,r,l)}xe.exports=At});var ke=a((_i,_e)=>{var Pt=tr(),_t=A(),kt=nr(),Mt=Ae(),St=h(),Ft=k(),jt=_();function Pe(t,e,r,i,n){t!==e&&kt(e,function(u,c){if(n||(n=new Pt),St(u))Mt(t,e,c,r,Pe,i,n);else{var s=i?i(jt(t,c),u,c+"",t,e,n):void 0;s===void 0&&(s=u),_t(t,c,s)}},Ft)}_e.exports=Pe});var Se=a((ki,Me)=>{function Tt(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}Me.exports=Tt});var Te=a((Mi,je)=>{var Ct=Se(),Fe=Math.max;function It(t,e,r){return e=Fe(e===void 0?t.length-1:e,0),function(){for(var i=arguments,n=-1,u=Fe(i.length-e,0),c=Array(u);++n<u;)c[n]=i[e+n];n=-1;for(var s=Array(e+1);++n<e;)s[n]=i[n];return s[e]=r(c),Ct(t,this,s)}}je.exports=It});var Ie=a((Si,Ce)=>{function Lt(t){return function(){return t}}Ce.exports=Lt});var Ge=a((Fi,Re)=>{var Rt=Ie(),Le=ir(),Gt=I(),zt=Le?function(t,e){return Le(t,"toString",{configurable:!0,enumerable:!1,value:Rt(e),writable:!0})}:Gt;Re.exports=zt});var Ee=a((ji,ze)=>{var Et=800,Vt=16,Dt=Date.now;function Bt(t){var e=0,r=0;return function(){var i=Dt(),n=Vt-(i-r);if(r=i,n>0){if(++e>=Et)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}ze.exports=Bt});var De=a((Ti,Ve)=>{var Kt=Ge(),Ut=Ee(),Ht=Ut(Kt);Ve.exports=Ht});var Ke=a((Ci,Be)=>{var Nt=I(),Wt=Te(),$t=De();function Xt(t,e){return $t(Wt(t,e,Nt),t+"")}Be.exports=Xt});var He=a((Ii,Ue)=>{var Jt=w(),Qt=x(),Yt=fr(),Zt=h();function ei(t,e,r){if(!Zt(r))return!1;var i=typeof e;return(i=="number"?Qt(r)&&Yt(e,r.length):i=="string"&&e in r)?Jt(r[e],t):!1}Ue.exports=ei});var We=a((Li,Ne)=>{var ri=Ke(),ti=He();function ii(t){return ri(function(e,r){var i=-1,n=r.length,u=n>1?r[n-1]:void 0,c=n>2?r[2]:void 0;for(u=t.length>3&&typeof u=="function"?(n--,u):void 0,c&&ti(r[0],r[1],c)&&(u=n<3?void 0:u,n=1),e=Object(e);++i<n;){var s=r[i];s&&t(e,s,i,u)}return e})}Ne.exports=ii});var Xe=a((Ri,$e)=>{var ni=ke(),si=We(),oi=si(function(t,e,r,i){ni(t,e,r,i)});$e.exports=oi});var Je=q(Ye());var f=class{static async bindLiveBoard(e){await import("./mocks.3P3YKP5F.js").then(r=>r.rules(e)).catch(r=>console.error("could not import liveboard mocks",r))}static async bindDesigner(e){await import("./mocks.E5NXW7TU.js").then(r=>r.rules(e)).catch(r=>console.error("could not import designer mocks",r))}static async bindAnalytics(e){await import("./mocks.NJNEJI3W.js").then(r=>r.rules(e)).catch(r=>console.error("could not import analytics mocks",r))}};var Qe=q(Xe()),M=q(pr()),ai={organizationId:-1,useMock:!1,isPreview:!1,config:{baseURL:"/",headers:{}},analyticsServiceEndpoint:""},v=class{constructor(e){this.handleSuccess=e=>{var r,i;return((r=e.headers)==null?void 0:r.authorization)&&(this.jwt=e.headers.authorization.replace("bearer ","")),((i=e.headers)==null?void 0:i["folloze-session-guid"])&&(this.sessionGuid=e.headers["folloze-session-guid"]),e};var i,n;this.useMock=e.useMock,this.options=e,this.organizationId=e.organizationId,e.sessionGuid&&(this.sessionGuid=e.sessionGuid),e.jwt&&(this.jwt=e.jwt),e.flzClientFeature==="embedded"&&(this.isEmbeddedRequest=!0);let r=typeof window!="undefined"&&((i=window.FollozeState.initialState)==null?void 0:i.token)?(n=window.FollozeState.initialState)==null?void 0:n.token:void 0;r&&(this.urlToken=r)}static async create(e){e=(0,Qe.default)(ai,e,(i,n)=>n===null?i:void 0);let r=new v(e);return e.useMock?await r.createMockFetcher(e):r.createAxiosFetcher(e),r}async createMockFetcher(e){return await import("./src.H3ILTLVQ.js").then(async r=>{this.createAxiosFetcher(e),this.fetcher.interceptors.response.use(this.handleSuccess,this.MockHandleError),this.mock=new r.default(this.fetcher),await Promise.all([f.bindLiveBoard(this.mock),f.bindDesigner(this.mock),f.bindAnalytics(this.mock)])}).catch(r=>console.error("could not create mock fetcher",r))}withPartialContent(e,r=2e3,i=1,n){return new Promise((u,c)=>{if(i<=0){console.warn("stop retrying partial content"),c("stop retrying");return}new Promise((o,b)=>e(o,b,n)).then(o=>{o.status==206?(console.debug(`retry partial content ${i}`),i=i-1,setTimeout(()=>{u(this.withPartialContent(e,r,i,o.data.guid))},r)):(console.debug("partial content resolved",o.data),u(o.data))}).catch(o=>{console.error("could not finish partial content request",o),c(o)})})}withDisableOnPreview(e){var r;return((r=this.options)==null?void 0:r.isPreview)?new Promise(i=>i({status:200})):e()}handleError(e){var r;switch((0,M.default)(e,"response.status")){case 410:window.location.reload();break}return console.error(`could not complete axios request to: ${(r=e.config)==null?void 0:r.url}`,e.config),Promise.reject(e)}MockHandleError(e){var r;switch((0,M.default)(e,"response.status")){case 410:window.location.reload();break;case 409:return Promise.reject(e)}return(process==null?void 0:process.env)||console.warn(`could not complete mock request to: ${(r=e.config)==null?void 0:r.url}`,e.config),Promise.reject(e)}createAxiosFetcher(e){e.config.headers["X-Requested-With"]="XMLHttpRequest",e.csrfToken&&(e.config.headers["X-CSRF-Token"]=e.csrfToken),this.fetcher=Je.default.create(e.config),this.fetcher.interceptors.response.use(this.handleSuccess,this.handleError),this.fetcher.interceptors.request.use(r=>(this.sessionGuid&&(r.headers["folloze-session-guid"]=this.sessionGuid),this.jwt&&(r.headers.Authorization=`Bearer ${this.jwt}`),this.isEmbeddedRequest&&(r.headers["flz-client-feature"]="embedded"),r))}};var S=class{constructor(){}static async create(e){let r=new S,i=await v.create(e);return r.fetcher=i,r.analytics=new j(i),r.designer=new L(i),r.liveboard=new R(i),r}};export{v as a,S as b};
