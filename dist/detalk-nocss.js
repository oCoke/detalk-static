/*! For license information please see detalk-nocss.js.LICENSE.txt */
(()=>{var __webpack_modules__={495:(module,exports,__webpack_require__)=>{var __WEBPACK_AMD_DEFINE_RESULT__;(function(){"use strict";var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_MD5_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS?root=__webpack_require__.g:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_MD5_NO_COMMON_JS&&module.exports,AMD=__webpack_require__.amdO,ARRAY_BUFFER=!root.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[128,32768,8388608,-2147483648],SHIFT=[0,8,16,24],OUTPUT_TYPES=["hex","array","digest","buffer","arrayBuffer","base64"],BASE64_ENCODE_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),blocks=[],buffer8;if(ARRAY_BUFFER){var buffer=new ArrayBuffer(68);buffer8=new Uint8Array(buffer),blocks=new Uint32Array(buffer)}!root.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),!ARRAY_BUFFER||!root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});var createOutputMethod=function(e){return function(t){return new Md5(!0).update(t)[e]()}},createMethod=function(){var e=createOutputMethod("hex");NODE_JS&&(e=nodeWrap(e)),e.create=function(){return new Md5},e.update=function(t){return e.create().update(t)};for(var t=0;t<OUTPUT_TYPES.length;++t){var r=OUTPUT_TYPES[t];e[r]=createOutputMethod(r)}return e},nodeWrap=function(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(e){if("string"==typeof e)return crypto.createHash("md5").update(e,"utf8").digest("hex");if(null==e)throw ERROR;return e.constructor===ArrayBuffer&&(e=new Uint8Array(e)),Array.isArray(e)||ArrayBuffer.isView(e)||e.constructor===Buffer?crypto.createHash("md5").update(new Buffer(e)).digest("hex"):method(e)};return nodeMethod};function Md5(e){if(e)blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks,this.buffer8=buffer8;else if(ARRAY_BUFFER){var t=new ArrayBuffer(68);this.buffer8=new Uint8Array(t),this.blocks=new Uint32Array(t)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Md5.prototype.update=function(e){if(!this.finalized){var t,r=typeof e;if("string"!==r){if("object"!==r)throw ERROR;if(null===e)throw ERROR;if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||ARRAY_BUFFER&&ArrayBuffer.isView(e)))throw ERROR;t=!0}for(var a,i,n=0,s=e.length,l=this.blocks,o=this.buffer8;n<s;){if(this.hashed&&(this.hashed=!1,l[0]=l[16],l[16]=l[1]=l[2]=l[3]=l[4]=l[5]=l[6]=l[7]=l[8]=l[9]=l[10]=l[11]=l[12]=l[13]=l[14]=l[15]=0),t)if(ARRAY_BUFFER)for(i=this.start;n<s&&i<64;++n)o[i++]=e[n];else for(i=this.start;n<s&&i<64;++n)l[i>>2]|=e[n]<<SHIFT[3&i++];else if(ARRAY_BUFFER)for(i=this.start;n<s&&i<64;++n)(a=e.charCodeAt(n))<128?o[i++]=a:a<2048?(o[i++]=192|a>>6,o[i++]=128|63&a):a<55296||a>=57344?(o[i++]=224|a>>12,o[i++]=128|a>>6&63,o[i++]=128|63&a):(a=65536+((1023&a)<<10|1023&e.charCodeAt(++n)),o[i++]=240|a>>18,o[i++]=128|a>>12&63,o[i++]=128|a>>6&63,o[i++]=128|63&a);else for(i=this.start;n<s&&i<64;++n)(a=e.charCodeAt(n))<128?l[i>>2]|=a<<SHIFT[3&i++]:a<2048?(l[i>>2]|=(192|a>>6)<<SHIFT[3&i++],l[i>>2]|=(128|63&a)<<SHIFT[3&i++]):a<55296||a>=57344?(l[i>>2]|=(224|a>>12)<<SHIFT[3&i++],l[i>>2]|=(128|a>>6&63)<<SHIFT[3&i++],l[i>>2]|=(128|63&a)<<SHIFT[3&i++]):(a=65536+((1023&a)<<10|1023&e.charCodeAt(++n)),l[i>>2]|=(240|a>>18)<<SHIFT[3&i++],l[i>>2]|=(128|a>>12&63)<<SHIFT[3&i++],l[i>>2]|=(128|a>>6&63)<<SHIFT[3&i++],l[i>>2]|=(128|63&a)<<SHIFT[3&i++]);this.lastByteIndex=i,this.bytes+=i-this.start,i>=64?(this.start=i-64,this.hash(),this.hashed=!0):this.start=i}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Md5.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[t>>2]|=EXTRA[3&t],t>=56&&(this.hashed||this.hash(),e[0]=e[16],e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.bytes<<3,e[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},Md5.prototype.hash=function(){var e,t,r,a,i,n,s=this.blocks;this.first?t=((t=((e=((e=s[0]-680876937)<<7|e>>>25)-271733879<<0)^(r=((r=(-271733879^(a=((a=(-1732584194^2004318071&e)+s[1]-117830708)<<12|a>>>20)+e<<0)&(-271733879^e))+s[2]-1126478375)<<17|r>>>15)+a<<0)&(a^e))+s[3]-1316259209)<<22|t>>>10)+r<<0:(e=this.h0,t=this.h1,r=this.h2,t=((t+=((e=((e+=((a=this.h3)^t&(r^a))+s[0]-680876936)<<7|e>>>25)+t<<0)^(r=((r+=(t^(a=((a+=(r^e&(t^r))+s[1]-389564586)<<12|a>>>20)+e<<0)&(e^t))+s[2]+606105819)<<17|r>>>15)+a<<0)&(a^e))+s[3]-1044525330)<<22|t>>>10)+r<<0),t=((t+=((e=((e+=(a^t&(r^a))+s[4]-176418897)<<7|e>>>25)+t<<0)^(r=((r+=(t^(a=((a+=(r^e&(t^r))+s[5]+1200080426)<<12|a>>>20)+e<<0)&(e^t))+s[6]-1473231341)<<17|r>>>15)+a<<0)&(a^e))+s[7]-45705983)<<22|t>>>10)+r<<0,t=((t+=((e=((e+=(a^t&(r^a))+s[8]+1770035416)<<7|e>>>25)+t<<0)^(r=((r+=(t^(a=((a+=(r^e&(t^r))+s[9]-1958414417)<<12|a>>>20)+e<<0)&(e^t))+s[10]-42063)<<17|r>>>15)+a<<0)&(a^e))+s[11]-1990404162)<<22|t>>>10)+r<<0,t=((t+=((e=((e+=(a^t&(r^a))+s[12]+1804603682)<<7|e>>>25)+t<<0)^(r=((r+=(t^(a=((a+=(r^e&(t^r))+s[13]-40341101)<<12|a>>>20)+e<<0)&(e^t))+s[14]-1502002290)<<17|r>>>15)+a<<0)&(a^e))+s[15]+1236535329)<<22|t>>>10)+r<<0,t=((t+=((a=((a+=(t^r&((e=((e+=(r^a&(t^r))+s[1]-165796510)<<5|e>>>27)+t<<0)^t))+s[6]-1069501632)<<9|a>>>23)+e<<0)^e&((r=((r+=(e^t&(a^e))+s[11]+643717713)<<14|r>>>18)+a<<0)^a))+s[0]-373897302)<<20|t>>>12)+r<<0,t=((t+=((a=((a+=(t^r&((e=((e+=(r^a&(t^r))+s[5]-701558691)<<5|e>>>27)+t<<0)^t))+s[10]+38016083)<<9|a>>>23)+e<<0)^e&((r=((r+=(e^t&(a^e))+s[15]-660478335)<<14|r>>>18)+a<<0)^a))+s[4]-405537848)<<20|t>>>12)+r<<0,t=((t+=((a=((a+=(t^r&((e=((e+=(r^a&(t^r))+s[9]+568446438)<<5|e>>>27)+t<<0)^t))+s[14]-1019803690)<<9|a>>>23)+e<<0)^e&((r=((r+=(e^t&(a^e))+s[3]-187363961)<<14|r>>>18)+a<<0)^a))+s[8]+1163531501)<<20|t>>>12)+r<<0,t=((t+=((a=((a+=(t^r&((e=((e+=(r^a&(t^r))+s[13]-1444681467)<<5|e>>>27)+t<<0)^t))+s[2]-51403784)<<9|a>>>23)+e<<0)^e&((r=((r+=(e^t&(a^e))+s[7]+1735328473)<<14|r>>>18)+a<<0)^a))+s[12]-1926607734)<<20|t>>>12)+r<<0,t=((t+=((n=(a=((a+=((i=t^r)^(e=((e+=(i^a)+s[5]-378558)<<4|e>>>28)+t<<0))+s[8]-2022574463)<<11|a>>>21)+e<<0)^e)^(r=((r+=(n^t)+s[11]+1839030562)<<16|r>>>16)+a<<0))+s[14]-35309556)<<23|t>>>9)+r<<0,t=((t+=((n=(a=((a+=((i=t^r)^(e=((e+=(i^a)+s[1]-1530992060)<<4|e>>>28)+t<<0))+s[4]+1272893353)<<11|a>>>21)+e<<0)^e)^(r=((r+=(n^t)+s[7]-155497632)<<16|r>>>16)+a<<0))+s[10]-1094730640)<<23|t>>>9)+r<<0,t=((t+=((n=(a=((a+=((i=t^r)^(e=((e+=(i^a)+s[13]+681279174)<<4|e>>>28)+t<<0))+s[0]-358537222)<<11|a>>>21)+e<<0)^e)^(r=((r+=(n^t)+s[3]-722521979)<<16|r>>>16)+a<<0))+s[6]+76029189)<<23|t>>>9)+r<<0,t=((t+=((n=(a=((a+=((i=t^r)^(e=((e+=(i^a)+s[9]-640364487)<<4|e>>>28)+t<<0))+s[12]-421815835)<<11|a>>>21)+e<<0)^e)^(r=((r+=(n^t)+s[15]+530742520)<<16|r>>>16)+a<<0))+s[2]-995338651)<<23|t>>>9)+r<<0,t=((t+=((a=((a+=(t^((e=((e+=(r^(t|~a))+s[0]-198630844)<<6|e>>>26)+t<<0)|~r))+s[7]+1126891415)<<10|a>>>22)+e<<0)^((r=((r+=(e^(a|~t))+s[14]-1416354905)<<15|r>>>17)+a<<0)|~e))+s[5]-57434055)<<21|t>>>11)+r<<0,t=((t+=((a=((a+=(t^((e=((e+=(r^(t|~a))+s[12]+1700485571)<<6|e>>>26)+t<<0)|~r))+s[3]-1894986606)<<10|a>>>22)+e<<0)^((r=((r+=(e^(a|~t))+s[10]-1051523)<<15|r>>>17)+a<<0)|~e))+s[1]-2054922799)<<21|t>>>11)+r<<0,t=((t+=((a=((a+=(t^((e=((e+=(r^(t|~a))+s[8]+1873313359)<<6|e>>>26)+t<<0)|~r))+s[15]-30611744)<<10|a>>>22)+e<<0)^((r=((r+=(e^(a|~t))+s[6]-1560198380)<<15|r>>>17)+a<<0)|~e))+s[13]+1309151649)<<21|t>>>11)+r<<0,t=((t+=((a=((a+=(t^((e=((e+=(r^(t|~a))+s[4]-145523070)<<6|e>>>26)+t<<0)|~r))+s[11]-1120210379)<<10|a>>>22)+e<<0)^((r=((r+=(e^(a|~t))+s[2]+718787259)<<15|r>>>17)+a<<0)|~e))+s[9]-343485551)<<21|t>>>11)+r<<0,this.first?(this.h0=e+1732584193<<0,this.h1=t-271733879<<0,this.h2=r-1732584194<<0,this.h3=a+271733878<<0,this.first=!1):(this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+r<<0,this.h3=this.h3+a<<0)},Md5.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,r=this.h2,a=this.h3;return HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[a>>4&15]+HEX_CHARS[15&a]+HEX_CHARS[a>>12&15]+HEX_CHARS[a>>8&15]+HEX_CHARS[a>>20&15]+HEX_CHARS[a>>16&15]+HEX_CHARS[a>>28&15]+HEX_CHARS[a>>24&15]},Md5.prototype.toString=Md5.prototype.hex,Md5.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,r=this.h2,a=this.h3;return[255&e,e>>8&255,e>>16&255,e>>24&255,255&t,t>>8&255,t>>16&255,t>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255,255&a,a>>8&255,a>>16&255,a>>24&255]},Md5.prototype.array=Md5.prototype.digest,Md5.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(16),t=new Uint32Array(e);return t[0]=this.h0,t[1]=this.h1,t[2]=this.h2,t[3]=this.h3,e},Md5.prototype.buffer=Md5.prototype.arrayBuffer,Md5.prototype.base64=function(){for(var e,t,r,a="",i=this.array(),n=0;n<15;)e=i[n++],t=i[n++],r=i[n++],a+=BASE64_ENCODE_CHAR[e>>>2]+BASE64_ENCODE_CHAR[63&(e<<4|t>>>4)]+BASE64_ENCODE_CHAR[63&(t<<2|r>>>6)]+BASE64_ENCODE_CHAR[63&r];return e=i[n],a+(BASE64_ENCODE_CHAR[e>>>2]+BASE64_ENCODE_CHAR[e<<4&63]+"==")};var exports=createMethod();COMMON_JS?module.exports=exports:(root.md5=exports,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.exports}__webpack_require__.amdO={},__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var t=__webpack_require__.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})();var __webpack_exports__={};(()=>{"use strict";function e(e){let t=new Date(e),r=t.getFullYear(),a=t.getMonth()+1,i=t.getDate(),n=t.getHours(),s=t.getMinutes(),l=t.getSeconds(),o=new Date;return o.getMinutes()==s&&o.getHours()==n&&o.getDate()==i&&o.getMonth()+1==a&&o.getFullYear()==r?"刚刚":o.getHours()==n&&o.getDate()==i&&o.getMonth()+1==a&&o.getFullYear()==r?o.getMinutes()-s+" 分钟前":o.getDate()==i&&o.getMonth()+1==a&&o.getFullYear()==r?o.getHours()-n+" 小时前":o.getMonth()+1==a&&o.getDate()-i<14&&o.getFullYear()==r?o.getDate()-i+" 天前":(a<10&&(a="0"+a),i<10&&(i="0"+i),n<10&&(n="0"+n),s<10&&(s="0"+s),l<10&&(l="0"+l),`${r}-${a}-${i} ${n}:${s}:${l}`)}function t(e,t){for(let r of e)if(r==t)return!0;return!1}function r(e){return document.getElementById(e)}async function a(a,i,n=1){r("_detalk_detail").classList.add("_detalk_loading_container"),r("_detalk_detail").innerHTML='<svg width="30px" height="30px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">\n    <g>\n        <animateTransform attributeName="transform" type="rotate" values="0 33 33;270 33 33" begin="0s" dur="1.4s" fill="freeze" repeatCount="indefinite"></animateTransform>\n        <circle fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30" stroke-dasharray="187" stroke-dashoffset="610">\n            <animate attributeName="stroke" values="#4285F4;#DE3E35;#F7C223;#1B9A59;#4285F4" begin="0s" dur="5.6s" fill="freeze" repeatCount="indefinite"></animate>\n            <animateTransform attributeName="transform" type="rotate" values="0 33 33;135 33 33;450 33 33" begin="0s" dur="1.4s" fill="freeze" repeatCount="indefinite"></animateTransform>\n            <animate attributeName="stroke-dashoffset" values="187;46.75;187" begin="0s" dur="1.4s" fill="freeze" repeatCount="indefinite"></animate>\n        </circle>\n    </g>\n    </svg>';let s=await fetch(a+"/_api/comment?id="+i,{method:"GET"}).then((e=>e.json()));s=s.value;let l=0,o=[];if(n){for(let e=s.length-1;e>=0;e--)if(!s[e].deleted&&(l++,o.push(s[e]),s[e].replies))for(let t in s[e].replies)s[e].replies[t].deleted||l++}else for(let e in s)if(!s[e].deleted&&(l++,o.push(s[e]),s[e].replies))for(let t in s[e].replies)s[e].replies[t].deleted||l++;r("_detalk_detail").innerHTML=function(r,a,i){let n="";for(let r in a){let i="";if(a[r].replies){i+="<hr/>";for(let n of a[r].replies)if(!n.deleted){let s="";t(JSON.parse(localStorage.getItem("DETALK_CAN_DELETE")||"[]"),n.rpid)&&(s=`<span class="hover_show" onclick="detalk.delete('${n.rpid}')">删除</span>`),i+=`\n                    <div class="reply">\n                        <div class="avatar">\n                            <img src="${n.avatar||"https://cravatar.cn/avatar/?d=mp"}" class="avatar-img">\n                        </div>\n                        <div class="cmt-main" style="display: inline;">\n                            <div class="cmt-data">\n                                <span style="margin-right:1rem;"><strong>${n.nickname}</strong> · <span class="cmt_date">${e(n.timestamp)}</span></span>\n                                <span class="hover_show" onclick="detalk.reply('${a[r].rpid}', '${n.nickname}')">回复</span>\n                                ${s}\n                            </div>\n                            <div class="cmt-content">\n                                ${n.content}\n                            </div>\n                        </div>\n                    </div>`}}let s="";t(JSON.parse(localStorage.getItem("DETALK_CAN_DELETE")||"[]"),a[r].rpid)&&(s=`<span class="hover_show" onclick="detalk.delete('${a[r].rpid}')">删除</span>`),n+=`\n            <div class="mr-cmt">\n                <div class="avatar">\n                    <img src="${"https://cravatar.cn/avatar/"+a[r].email+"?d=mp"||0}" class="avatar-img">\n                </div>\n                <div class="cmt-main">\n                    <div class="cmt-data">\n                        <span style="margin-right:1rem;"><strong><a href="${a[r].url||"#"}" target="_blank" style="color: unset;text-decoration:none;">${a[r].nickname}</a></strong> · <span class="cmt_date">${e(a[r].timestamp)}</span></span>\n                        <span class="hover_show" onclick="detalk.reply('${a[r].rpid}', '${a[r].nickname}')">回复</span>\n                        ${s}\n                    </div>\n                    <div class="cmt-content">\n                        ${a[r].content}\n                    </div>\n                    <div class="replies">\n                        ${i}\n                    </div>\n                </div>\n            </div>`}return`\n    <div class="comment-title">\n        <h3>共 ${r} 条评论<span class="filter" onclick="detalk.load('${i.url}','${i.path}',${i.mode?0:1});">${i.mode?"正序":"倒序"}</span></h3>\n    </div>\n    <div class="comment-list">\n        ${n}\n    </div>\n    `}(l,o,{mode:n,url:a,path:i}),r("_detalk_detail").classList.remove("_detalk_loading_container"),DETALK_INIT.onCommentLoaded&&DETALK_INIT.onCommentLoaded()}__webpack_require__.p;var i=__webpack_require__(495),n=__webpack_require__.n(i);async function s(e){if("block"==r("detalk_content_preview").style.display&&!e&&!r("detalk_input_content").value)return r("detalk_content_preview").style.display="none",!0;r("detalk_content_preview").innerHTML="[ Loading ]";let t=await detalk.parse(r("detalk_input_content").value);return r("detalk_content_preview").innerHTML=t,e||(r("detalk_content_preview").style.display="block"),!0}window.detalk={init:async function(e={}){if(!e.url)throw new Error("Backend URL is required!");let t=new URL(e.url).protocol+"//"+new URL(e.url).host,i=document.querySelector(e.el),n=e.path;if(!i)throw new Error("Element is required!");return n||(n=window.DETALK_PATH||window.location.pathname),window.DETALK_INIT=e,DETALK_INIT.url=t,i.innerHTML='\n<div class="input-data">\n    <div class="avatar">\n        <img src="https://cravatar.cn/avatar/?d=mp" class="avatar-img" id="_detalk_myavatar">\n    </div>\n    <div class="input-area">\n        <div class="inline-input">\n            <div class="input-label">\n                <label>昵称</label>\n                <input id="detalk_input_nickname" placeholder="必填" type="text" class="mgr-2p" oninput="detalk.oninput(this, \'nickname\')"></div>\n            <div class="input-label">\n                <label>邮箱</label>\n                <input id="detalk_input_email" placeholder="必填" type="email" class="mgr-2p" oninput="detalk.oninput(this, \'email\')"></div>\n            <div class="input-label">\n                <label>网址</label>\n                <input id="detalk_input_link" placeholder="选填 [http(s)://]" type="url" oninput="detalk.oninput(this, \'link\')"></div>\n        </div>\n        <div class="comment-text">\n            <textarea oninput="detalk.oninput(this, \'content\')" autocomplete="off" placeholder="" maxlength="500" style="min-height: 75px; height: 75px;" id="detalk_input_content"></textarea>\n        </div>\n        <div class="comment-text content-preview cmt-content" id="detalk_content_preview"></div>\n    </div>\n</div>\n<div class="action-btn-group">\n    <div class="action-btn">\n        <p class="word-limit"><span id="_detalk_word_limit">0</span> / 500</p>\n        <button class="sec-btn cm-btn" id="_detalk_preview" onclick="detalk.preview();">预览</button>\n        <button onclick="detalk.send();" class="fst-btn cm-btn disabled" id="_detalk_submit" disabled>发送</button>\n    </div>\n</div>\n<div class="comment-container _detalk_loading_container" id="_detalk_detail"></div>\n<div class="detalk_copyright">\n    <p>Powered by <a href="https://github.com/oCoke/detalk" target="_blank">Detalk</a> & <a href="https://github.com/oCoke/detalk-static" target="_blank">Detalk Static</a></p>\n</div>\n',i.classList.add("detalk-container"),a(t,n),localStorage.getItem("DETALK_AUTH")||localStorage.setItem("DETALK_AUTH","xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))),r("detalk_input_nickname").value=localStorage.getItem("DETALK_NICKNAME")||"",r("detalk_input_email").value=localStorage.getItem("DETALK_EMAIL")||"",r("detalk_input_link").value=localStorage.getItem("DETALK_LINK")||"",!0},send:async function(e,t){r("_detalk_submit").disabled=!0,r("_detalk_submit").classList.add("disabled"),r("_detalk_submit").classList.remove("enabled"),e||(e=window.DETALK_INIT);let i=new URL(e.url).protocol+"//"+new URL(e.url).host,n=(document.querySelector(e.el),e.path),s=r("detalk_input_nickname").value,l=r("detalk_input_email").value,o=r("detalk_input_link").value,_=r("detalk_input_content").value;if(!s||!l||!_||s.length>=15||_.length>=500||l.length>=50||o.length>=100)return!1;localStorage.setItem("DETALK_NICKNAME",s),localStorage.setItem("DETALK_EMAIL",l),o.startsWith("#ReplyTo:")||localStorage.setItem("DETALK_LINK",o);let d=localStorage.getItem("DETALK_AUTH"),c=await fetch(i+"/_api/comment",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({nickname:s,email:l,id:n,url:o,replyTo:t||null,content:_,auth:d})}).then((e=>e.json()));if(c.success){a(i,n);let e=JSON.parse(localStorage.getItem("DETALK_CAN_DELETE")||"[]");e.push(c.rpid),localStorage.setItem("DETALK_CAN_DELETE",JSON.stringify(e))}else alert(c.message);r("_detalk_submit").disabled=!1,r("_detalk_submit").classList.remove("disabled"),r("_detalk_submit").classList.add("enabled"),t&&c.success&&(r("detalk_input_content").value="",r("_detalk_submit").setAttribute("onclick","detalk.send(null)"),r("_detalk_submit").innerText="发送",r("_detalk_preview").innerText="预览",r("_detalk_preview").setAttribute("onclick","detalk.preview()"))},reply:async function(e,t){if(!e)return!1;location.hash="#detalk_input_content",r("detalk_input_content").value=`回复 @${t}: `,r("detalk_input_content").focus(),r("detalk_input_link").value=`#ReplyTo:${e}`,r("_detalk_submit").setAttribute("onclick",`detalk.send(null, '${e}')`),r("_detalk_submit").innerText="回复",r("_detalk_preview").innerText="取消",r("_detalk_preview").setAttribute("onclick",'document.getElementById("detalk_input_link").value="";document.getElementById("_detalk_submit").innerText="发送";document.getElementById("_detalk_preview").innerText="预览";document.getElementById("_detalk_preview").setAttribute("onclick", "detalk.preview()");document.getElementById("_detalk_submit").setAttribute("onclick", "detalk.send()");')},load:a,oninput:function(e,t){"content"==t&&(r("_detalk_word_limit").innerText=e.value.length,e.value.length>0&&e.value.length<500?(e.classList.remove("border_error"),DETALK_INIT.previewOnInput&&s(!0),window.TEMP_CONTENT=!0):e.classList.add("border_error")),"nickname"==t&&(r("_detalk_word_limit").innerText=e.value.length,e.value.length>0&&e.value.length<15?(e.classList.remove("border_error"),window.TEMP_NICKNAME=!0):e.classList.add("border_error")),"email"==t&&(!e.value.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)||e.value.length>50?e.classList.add("border_error"):(e.classList.remove("border_error"),window.TEMP_EMAIL=!0,r("_detalk_myavatar").src=`https://cravatar.cn/avatar/${n()(e.value)}?d=mp`)),"link"==t&&(e.value.length>100?e.classList.add("border_error"):e.classList.remove("border_error")),(window.TEMP_NICKNAME||r("detalk_input_nickname"))&&(window.TEMP_EMAIL||r("detalk_input_email"))&&(window.TEMP_CONTENT||r("detalk_input_content"))?(r("_detalk_submit").classList.remove("disabled"),r("_detalk_submit").classList.add("enabled"),r("_detalk_submit").disabled=!1):(r("_detalk_submit").classList.remove("enabled"),r("_detalk_submit").classList.add("disabled"),r("_detalk_submit").disabled=!0)},delete:async function(e,t=localStorage.getItem("DETALK_AUTH")){if(!e)return!1;if(!confirm("即将删除 ID: "+e+" 评论，是否继续？"))return!1;let r=window.DETALK_INIT.url,i=window.DETALK_INIT.path,n=await fetch(r+`/_api/comment?id=${i}&rpid=${e}&auth=${t}`,{method:"DELETE"}).then((e=>e.json()));n.success?(JSON.parse(localStorage.getItem("DETALK_CAN_DELETE")||"[]").forEach((t=>{if(t==e){let t=JSON.parse(localStorage.getItem("DETALK_CAN_DELETE")||"[]");t.splice(t.indexOf(e),1),localStorage.setItem("DETALK_CAN_DELETE",JSON.stringify(t))}})),a(r,i)):alert(n.error)},preview:s,parse:async function(e){let t=await fetch(window.DETALK_INIT.url+"/_api/markdown",{method:"POST",body:e}).then((e=>e.json()));return t.success?t.html:t.error}}})()})();