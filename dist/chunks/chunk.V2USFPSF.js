var m=Object.create;var f=Object.defineProperty,n=Object.defineProperties,k=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,q=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;var j=(b,a,c)=>a in b?f(b,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):b[a]=c,t=(b,a)=>{for(var c in a||(a={}))l.call(a,c)&&j(b,c,a[c]);if(i)for(var c of i(a))r.call(a,c)&&j(b,c,a[c]);return b},u=(b,a)=>n(b,o(a));var v=(b=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(b,{get:(a,c)=>(typeof require!="undefined"?require:a)[c]}):b)(function(b){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+b+'" is not supported')});var w=(b,a)=>()=>(a||b((a={exports:{}}).exports,a),a.exports);var s=(b,a,c,e)=>{if(a&&typeof a=="object"||typeof a=="function")for(let d of p(a))!l.call(b,d)&&d!==c&&f(b,d,{get:()=>a[d],enumerable:!(e=k(a,d))||e.enumerable});return b};var x=(b,a,c)=>(c=b!=null?m(q(b)):{},s(a||!b||!b.__esModule?f(c,"default",{value:b,enumerable:!0}):c,b));var y=(b,a,c,e)=>{for(var d=e>1?void 0:e?k(a,c):a,g=b.length-1,h;g>=0;g--)(h=b[g])&&(d=(e?h(a,c,d):h(d))||d);return e&&d&&f(a,c,d),d};export{t as a,u as b,v as c,w as d,x as e,y as f};
