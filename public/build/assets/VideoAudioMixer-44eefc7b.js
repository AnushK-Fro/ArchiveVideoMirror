import{I as ue,o as pe,e as he,a as de,t as me}from"./app-9368a449.js";import{_ as ge}from"./_plugin-vue_export-helper-c27b6911.js";var ve={exports:{}};(function(o){var c=function(s){var i=Object.prototype,l=i.hasOwnProperty,u=Object.defineProperty||function(t,e,r){t[e]=r.value},h,g=typeof Symbol=="function"?Symbol:{},E=g.iterator||"@@iterator",G=g.asyncIterator||"@@asyncIterator",O=g.toStringTag||"@@toStringTag";function y(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{y({},"")}catch{y=function(e,r,a){return e[r]=a}}function B(t,e,r,a){var n=e&&e.prototype instanceof d?e:d,p=Object.create(n.prototype),v=new W(a||[]);return u(p,"_invoke",{value:le(t,r,v)}),p}s.wrap=B;function P(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(a){return{type:"throw",arg:a}}}var T="suspendedStart",I="suspendedYield",x="executing",j="completed",f={};function d(){}function m(){}function F(){}var _={};y(_,E,function(){return this});var C=Object.getPrototypeOf,N=C&&C(C(V([])));N&&N!==i&&l.call(N,E)&&(_=N);var S=F.prototype=d.prototype=Object.create(_);m.prototype=F,u(S,"constructor",{value:F,configurable:!0}),u(F,"constructor",{value:m,configurable:!0}),m.displayName=y(F,O,"GeneratorFunction");function K(t){["next","throw","return"].forEach(function(e){y(t,e,function(r){return this._invoke(e,r)})})}s.isGeneratorFunction=function(t){var e=typeof t=="function"&&t.constructor;return e?e===m||(e.displayName||e.name)==="GeneratorFunction":!1},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,F):(t.__proto__=F,y(t,O,"GeneratorFunction")),t.prototype=Object.create(S),t},s.awrap=function(t){return{__await:t}};function D(t,e){function r(p,v,w,L){var b=P(t[p],t,v);if(b.type==="throw")L(b.arg);else{var Y=b.arg,A=Y.value;return A&&typeof A=="object"&&l.call(A,"__await")?e.resolve(A.__await).then(function(k){r("next",k,w,L)},function(k){r("throw",k,w,L)}):e.resolve(A).then(function(k){Y.value=k,w(Y)},function(k){return r("throw",k,w,L)})}}var a;function n(p,v){function w(){return new e(function(L,b){r(p,v,L,b)})}return a=a?a.then(w,w):w()}u(this,"_invoke",{value:n})}K(D.prototype),y(D.prototype,G,function(){return this}),s.AsyncIterator=D,s.async=function(t,e,r,a,n){n===void 0&&(n=Promise);var p=new D(B(t,e,r,a),n);return s.isGeneratorFunction(e)?p:p.next().then(function(v){return v.done?v.value:p.next()})};function le(t,e,r){var a=T;return function(p,v){if(a===x)throw new Error("Generator is already running");if(a===j){if(p==="throw")throw v;return X()}for(r.method=p,r.arg=v;;){var w=r.delegate;if(w){var L=Q(w,r);if(L){if(L===f)continue;return L}}if(r.method==="next")r.sent=r._sent=r.arg;else if(r.method==="throw"){if(a===T)throw a=j,r.arg;r.dispatchException(r.arg)}else r.method==="return"&&r.abrupt("return",r.arg);a=x;var b=P(t,e,r);if(b.type==="normal"){if(a=r.done?j:I,b.arg===f)continue;return{value:b.arg,done:r.done}}else b.type==="throw"&&(a=j,r.method="throw",r.arg=b.arg)}}}function Q(t,e){var r=e.method,a=t.iterator[r];if(a===h)return e.delegate=null,r==="throw"&&t.iterator.return&&(e.method="return",e.arg=h,Q(t,e),e.method==="throw")||r!=="return"&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var n=P(a,t.iterator,e.arg);if(n.type==="throw")return e.method="throw",e.arg=n.arg,e.delegate=null,f;var p=n.arg;if(!p)return e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f;if(p.done)e[t.resultName]=p.value,e.next=t.nextLoc,e.method!=="return"&&(e.method="next",e.arg=h);else return p;return e.delegate=null,f}K(S),y(S,O,"Generator"),y(S,E,function(){return this}),y(S,"toString",function(){return"[object Generator]"});function fe(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function W(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(fe,this),this.reset(!0)}s.keys=function(t){var e=Object(t),r=[];for(var a in e)r.push(a);return r.reverse(),function n(){for(;r.length;){var p=r.pop();if(p in e)return n.value=p,n.done=!1,n}return n.done=!0,n}};function V(t){if(t){var e=t[E];if(e)return e.call(t);if(typeof t.next=="function")return t;if(!isNaN(t.length)){var r=-1,a=function n(){for(;++r<t.length;)if(l.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=h,n.done=!0,n};return a.next=a}}return{next:X}}s.values=V;function X(){return{value:h,done:!0}}return W.prototype={constructor:W,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=h,this.done=!1,this.delegate=null,this.method="next",this.arg=h,this.tryEntries.forEach(M),!t)for(var e in this)e.charAt(0)==="t"&&l.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=h)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if(e.type==="throw")throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(L,b){return p.type="throw",p.arg=t,e.next=L,b&&(e.method="next",e.arg=h),!!b}for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a],p=n.completion;if(n.tryLoc==="root")return r("end");if(n.tryLoc<=this.prev){var v=l.call(n,"catchLoc"),w=l.call(n,"finallyLoc");if(v&&w){if(this.prev<n.catchLoc)return r(n.catchLoc,!0);if(this.prev<n.finallyLoc)return r(n.finallyLoc)}else if(v){if(this.prev<n.catchLoc)return r(n.catchLoc,!0)}else if(w){if(this.prev<n.finallyLoc)return r(n.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&l.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var n=a;break}}n&&(t==="break"||t==="continue")&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var p=n?n.completion:{};return p.type=t,p.arg=e,n?(this.method="next",this.next=n.finallyLoc,f):this.complete(p)},complete:function(t,e){if(t.type==="throw")throw t.arg;return t.type==="break"||t.type==="continue"?this.next=t.arg:t.type==="return"?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):t.type==="normal"&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),M(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if(a.type==="throw"){var n=a.arg;M(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:V(t),resultName:e,nextLoc:r},this.method==="next"&&(this.arg=h),f}},s}(o.exports);try{regeneratorRuntime=c}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=c:Function("r","regeneratorRuntime = r")(c)}})(ve);var we={defaultArgs:["./ffmpeg","-nostdin","-y"],baseOptions:{log:!1,logger:()=>{},progress:()=>{},corePath:""}};let J=!1,ne=()=>{};const be=o=>{J=o},ye=o=>{ne=o},Fe=(o,c)=>{ne({type:o,message:c}),J&&console.log(`[${o}] ${c}`)};var ie={logging:J,setLogging:be,setCustomLogger:ye,log:Fe};let U=0,q=0;const ee=o=>{const[c,s,i]=o.split(":");return parseFloat(c)*60*60+parseFloat(s)*60+parseFloat(i)};var Ee=(o,c)=>{if(typeof o=="string")if(o.startsWith("  Duration")){const s=o.split(", ")[0].split(": ")[1],i=ee(s);c({duration:i,ratio:q}),(U===0||U>i)&&(U=i)}else if(o.startsWith("frame")||o.startsWith("size")){const s=o.split("time=")[1].split(" ")[0],i=ee(s);q=i/U,c({ratio:q,time:i})}else o.startsWith("video:")&&(c({ratio:1}),U=0)},Le=(o,c)=>{const s=o._malloc(c.length*Uint32Array.BYTES_PER_ELEMENT);return c.forEach((i,l)=>{const u=o._malloc(i.length+1);o.writeAsciiToMemory(i,u),o.setValue(s+Uint32Array.BYTES_PER_ELEMENT*l,u,"i32")}),[c.length,s]},se={exports:{}};(function(o,c){(function(s,i){o.exports=i()})(ue,function(){function s(){var i=arguments.length;if(i===0)throw new Error("resolveUrl requires at least one argument; got none.");var l=document.createElement("base");if(l.href=arguments[0],i===1)return l.href;var u=document.getElementsByTagName("head")[0];u.insertBefore(l,u.firstChild);for(var h=document.createElement("a"),g,E=1;E<i;E++)h.href=arguments[E],g=h.href,l.href=g;return u.removeChild(l),g}return s})})(se);var Z=se.exports;const _e="@ffmpeg/ffmpeg",ke="0.9.8",$e="FFmpeg WebAssembly version",je="src/index.js",Se="src/index.d.ts",Oe={example:"examples"},Pe={start:"node scripts/server.js",build:"rimraf dist && webpack --config scripts/webpack.config.prod.js",prepublishOnly:"npm run build",lint:"eslint src",wait:"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js",test:"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:ffmpeg test:node:all","test:node":"node --experimental-wasm-threads --experimental-wasm-bulk-memory node_modules/.bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html"},Ce={"./src/node/index.js":"./src/browser/index.js"},Ae={type:"git",url:"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},Ue=["ffmpeg","WebAssembly","video"],Re="Jerome Wu <jeromewus@gmail.com>",Ge="MIT",Be={url:"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},Te={node:">=12.16.1"},xe="https://github.com/ffmpegwasm/ffmpeg.wasm#readme",Ne={"is-url":"^1.2.4","node-fetch":"^2.6.1","regenerator-runtime":"^0.13.7","resolve-url":"^0.2.1"},De={"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@ffmpeg/core":"^0.9.0","@types/emscripten":"^1.39.4","babel-loader":"^8.1.0",chai:"^4.2.0",cors:"^2.8.5",eslint:"^7.12.1","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.22.1",express:"^4.17.1",mocha:"^8.2.1","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","wait-on":"^5.3.0",webpack:"^5.3.2","webpack-cli":"^4.1.0","webpack-dev-middleware":"^4.0.0"},ae={name:_e,version:ke,description:$e,main:je,types:Se,directories:Oe,scripts:Pe,browser:Ce,repository:Ae,keywords:Ue,author:Re,license:Ge,bugs:Be,engines:Te,homepage:xe,dependencies:Ne,devDependencies:De},Ie=Z,{devDependencies:Me}=ae;var We={corePath:typeof process<"u"&&{}.FFMPEG_ENV==="development"?Ie("/node_modules/@ffmpeg/core/dist/ffmpeg-core.js"):`https://unpkg.com/@ffmpeg/core@${Me["@ffmpeg/core"].substring(1)}/dist/ffmpeg-core.js`};const Ve=Z,{log:R}=ie,z=async(o,c)=>{R("info",`fetch ${o}`);const s=await(await fetch(o)).arrayBuffer();R("info",`${o} file size = ${s.byteLength} bytes`);const i=new Blob([s],{type:c}),l=URL.createObjectURL(i);return R("info",`${o} blob URL = ${l}`),l};var Ye=async({corePath:o})=>{if(typeof o!="string")throw Error("corePath should be a string!");const c=Ve(o),s=await z(c,"application/javascript"),i=await z(c.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm"),l=await z(c.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");return typeof createFFmpegCore>"u"?new Promise(u=>{const h=document.createElement("script"),g=()=>{h.removeEventListener("load",g),R("info","ffmpeg-core.js script loaded"),u({createFFmpegCore,corePath:s,wasmPath:i,workerPath:l})};h.src=s,h.type="text/javascript",h.addEventListener("load",g),document.getElementsByTagName("head")[0].appendChild(h)}):(R("info","ffmpeg-core.js script is loaded already"),Promise.resolve({createFFmpegCore,corePath:s,wasmPath:i,workerPath:l}))};const qe=Z,ze=o=>new Promise((c,s)=>{const i=new FileReader;i.onload=()=>{c(i.result)},i.onerror=({target:{error:{code:l}}})=>{s(Error(`File could not be read! Code=${l}`))},i.readAsArrayBuffer(o)});var He=async o=>{let c=o;return typeof o>"u"?new Uint8Array:(typeof o=="string"?/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(o)?c=atob(o.split(",")[1]).split("").map(s=>s.charCodeAt(0)):c=await(await fetch(qe(o))).arrayBuffer():(o instanceof File||o instanceof Blob)&&(c=await ze(o)),new Uint8Array(c))};const Je=We,Ze=Ye,Ke=He;var ce={defaultOptions:Je,getCreateFFmpegCore:Ze,fetchFile:Ke};const{defaultArgs:Qe,baseOptions:Xe}=we,{setLogging:te,setCustomLogger:re,log:$}=ie,et=Ee,tt=Le,{defaultOptions:rt,getCreateFFmpegCore:ot}=ce,{version:nt}=ae,oe=Error("ffmpeg.wasm is not ready, make sure you have completed load().");var it=(o={})=>{const{log:c,logger:s,progress:i,...l}={...Xe,...rt,...o};let u=null,h=null,g=null,E=!1,G=i;const O=f=>{f==="FFMPEG_END"&&g!==null&&(g(),g=null,E=!1)},y=({type:f,message:d})=>{$(f,d),et(d,G),O(d)},B=async()=>{if($("info","load ffmpeg-core"),u===null){$("info","loading ffmpeg-core");const{createFFmpegCore:f,corePath:d,workerPath:m,wasmPath:F}=await ot(l);u=await f({mainScriptUrlOrBlob:d,printErr:_=>y({type:"fferr",message:_}),print:_=>y({type:"ffout",message:_}),locateFile:(_,C)=>{if(typeof window<"u"){if(typeof F<"u"&&_.endsWith("ffmpeg-core.wasm"))return F;if(typeof m<"u"&&_.endsWith("ffmpeg-core.worker.js"))return m}return C+_}}),h=u.cwrap("proxy_main","number",["number","number"]),$("info","ffmpeg-core loaded")}else throw Error("ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.")},P=()=>u!==null,T=(...f)=>{if($("info",`run ffmpeg command: ${f.join(" ")}`),u===null)throw oe;if(E)throw Error("ffmpeg.wasm can only run one command at a time");return E=!0,new Promise(d=>{const m=[...Qe,...f].filter(F=>F.length!==0);g=d,h(...tt(u,m))})},I=(f,...d)=>{if($("info",`run FS.${f} ${d.map(m=>typeof m=="string"?m:`<${m.length} bytes binary file>`).join(" ")}`),u===null)throw oe;{let m=null;try{m=u.FS[f](...d)}catch{throw Error(f==="readdir"?`ffmpeg.FS('readdir', '${d[0]}') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')`:f==="readFile"?`ffmpeg.FS('readFile', '${d[0]}') error. Check if the path exists`:"Oops, something went wrong in FS operation.")}return m}},x=f=>{G=f},j=f=>{re(f)};return te(c),re(s),$("info",`use ffmpeg.wasm v${nt}`),{setProgress:x,setLogger:j,setLogging:te,load:B,isLoaded:P,run:T,FS:I}};const st=it,{fetchFile:at}=ce;var H={createFFmpeg:st,fetchFile:at};const ct={props:{title:String,video_url:String,has_audio:Boolean},data(){return{processing:!1,ffmpeg:H.createFFmpeg({log:!0})}},methods:{getFileExtension(o){return o.split(".").pop().split(/\#|\?/)[0]},async processFile(){this.processing=!0;try{const o=this.getFileExtension(this.video_url);if(console.log("File extension:",o),["jpeg","jpg","gif","png"].includes(o)){const s=await(await fetch(this.video_url)).blob(),i=document.createElement("a");i.href=URL.createObjectURL(s),i.setAttribute("download",`archivevideomirror_image.${o}`),document.body.appendChild(i),i.click(),document.body.removeChild(i)}else{if(this.ffmpeg.isLoaded()||await this.ffmpeg.load(),this.ffmpeg.FS("writeFile","video.mp4",await H.fetchFile(this.video_url)),this.has_audio){const u=`${this.video_url.substring(0,this.video_url.lastIndexOf("/")+1)}DASH_AUDIO_128.mp4`;console.log("Audio URL:",u),this.ffmpeg.FS("writeFile","audio.mp4",await H.fetchFile(u)),await this.ffmpeg.run("-i","video.mp4","-i","audio.mp4","-c:v","copy","-c:a","aac","output.mp4")}else await this.ffmpeg.run("-i","video.mp4","-c","copy","output.mp4");const c=this.ffmpeg.FS("readFile","output.mp4"),s=new Blob([c.buffer],{type:"video/mp4"}),i=document.createElement("a");i.href=URL.createObjectURL(s),i.setAttribute("download","archivevideomirror_video.mp4"),document.body.appendChild(i),i.click(),document.body.removeChild(i)}}catch(o){console.error("Error processing file:",o),alert("There was an error processing the file.")}finally{this.processing=!1}}}},lt=["disabled"];function ft(o,c,s,i,l,u){return pe(),he("div",null,[de("button",{class:"inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",onClick:c[0]||(c[0]=(...h)=>u.processFile&&u.processFile(...h)),disabled:l.processing},me(l.processing?"Processing...":"Download"),9,lt)])}const ht=ge(ct,[["render",ft]]);export{ht as V};
