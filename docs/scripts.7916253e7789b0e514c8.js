!function(E,L){if("object"==typeof exports)"object"==typeof module?module.exports=L(require("js-sha256"),require("base64-js")):exports.keycloak=L(require("js-sha256"),require("base64-js"));else{!function(){function d(e,t){t?(n[0]=n[16]=n[1]=n[2]=n[3]=n[4]=n[5]=n[6]=n[7]=n[8]=n[9]=n[10]=n[11]=n[12]=n[13]=n[14]=n[15]=0,this.blocks=n):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}function C(e,t,r){var n;if("string"==(n=typeof e)){var o,i=[],s=e.length,a=0;for(n=0;n<s;++n)128>(o=e.charCodeAt(n))?i[a++]=o:2048>o?(i[a++]=192|o>>6,i[a++]=128|63&o):55296>o||57344<=o?(i[a++]=224|o>>12,i[a++]=128|o>>6&63,i[a++]=128|63&o):(o=65536+((1023&o)<<10|1023&e.charCodeAt(++n)),i[a++]=240|o>>18,i[a++]=128|o>>12&63,i[a++]=128|o>>6&63,i[a++]=128|63&o);e=i}else{if("object"!==n)throw Error(l);if(null===e)throw Error(l);if(D&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||D&&ArrayBuffer.isView(e)))throw Error(l)}for(64<e.length&&(e=new d(t,!0).update(e).array()),o=[],i=[],n=0;64>n;++n)o[n]=92^(s=e[n]||0),i[n]=54^s;d.call(this,t,r),this.update(i),this.oKeyPad=o,this.inner=!0,this.sharedMemory=r}var l="input is invalid type",z="object"==typeof window,u=z?window:{};u.JS_SHA256_NO_WINDOW&&(z=!1);var z=!z&&"object"==typeof self,v=!u.JS_SHA256_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;v?u=global:z&&(u=self);var z=!u.JS_SHA256_NO_COMMON_JS&&"object"==typeof module&&module.exports,q="function"==typeof define&&define.amd,D=!u.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,c="0123456789abcdef".split(""),t=[-2147483648,8388608,32768,128],g=[24,16,8,0],I=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],J=["hex","array","digest","arrayBuffer"],n=[];!u.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),!D||!u.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});var K=function(e,t){return function(r){return new d(t,!0).update(r)[e]()}},G=function(e){var t=K("hex",e);v&&(t=F(t,e)),t.create=function(){return new d(e)},t.update=function(e){return t.create().update(e)};for(var r=0;r<J.length;++r){var n=J[r];t[n]=K(n,e)}return t},F=function(a,c){var e=eval("require('crypto')"),x=eval("require('buffer').Buffer"),f=c?"sha224":"sha256";return function(t){if("string"==typeof t)return e.createHash(f).update(t,"utf8").digest("hex");if(null==t)throw Error(l);return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===x?e.createHash(f).update(new x(t)).digest("hex"):a(t)}},E=function(e,t){return function(r,n){return new C(r,t,!0).update(n)[e]()}},a=function(e){var t=E("hex",e);t.create=function(t){return new C(t,e)},t.update=function(e,r){return t.create(e).update(r)};for(var r=0;r<J.length;++r){var n=J[r];t[n]=E(n,e)}return t};d.prototype.update=function(e){if(!this.finalized){var t,r=typeof e;if("string"!==r){if("object"!==r)throw Error(l);if(null===e)throw Error(l);if(D&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||D&&ArrayBuffer.isView(e)))throw Error(l);t=!0}for(var n,o=0,i=e.length,s=this.blocks;o<i;){if(this.hashed&&(this.hashed=!1,s[0]=this.block,s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0),t)for(r=this.start;o<i&&64>r;++o)s[r>>2]|=e[o]<<g[3&r++];else for(r=this.start;o<i&&64>r;++o)128>(n=e.charCodeAt(o))?s[r>>2]|=n<<g[3&r++]:2048>n?(s[r>>2]|=(192|n>>6)<<g[3&r++],s[r>>2]|=(128|63&n)<<g[3&r++]):55296>n||57344<=n?(s[r>>2]|=(224|n>>12)<<g[3&r++],s[r>>2]|=(128|n>>6&63)<<g[3&r++],s[r>>2]|=(128|63&n)<<g[3&r++]):(n=65536+((1023&n)<<10|1023&e.charCodeAt(++o)),s[r>>2]|=(240|n>>18)<<g[3&r++],s[r>>2]|=(128|n>>12&63)<<g[3&r++],s[r>>2]|=(128|n>>6&63)<<g[3&r++],s[r>>2]|=(128|63&n)<<g[3&r++]);this.lastByteIndex=r,this.bytes+=r-this.start,64<=r?(this.block=s[16],this.start=r-64,this.hash(),this.hashed=!0):this.start=r}return 4294967295<this.bytes&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes%=4294967296),this}},d.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,r=this.lastByteIndex;e[16]=this.block,e[r>>2]|=t[3&r],this.block=e[16],56<=r&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}},d.prototype.hash=function(){var e,t,r,n,o,i,s,a=this.h0,c=this.h1,u=this.h2,d=this.h3,l=this.h4,f=this.h5,h=this.h6,p=this.h7,m=this.blocks;for(e=16;64>e;++e)t=((o=m[e-15])>>>7|o<<25)^(o>>>18|o<<14)^o>>>3,r=((o=m[e-2])>>>17|o<<15)^(o>>>19|o<<13)^o>>>10,m[e]=m[e-16]+t+m[e-7]+r<<0;for(s=c&u,e=0;64>e;e+=4)this.first?(this.is224?(i=300032,p=(o=m[0]-1413257819)-150054599<<0,d=o+24177077<<0):(i=704751109,p=(o=m[0]-210244248)-1521486534<<0,d=o+143694565<<0),this.first=!1):(n=(i=a&c)^a&u^s,p=d+(o=p+((l>>>6|l<<26)^(l>>>11|l<<21)^(l>>>25|l<<7))+(l&f^~l&h)+I[e]+m[e])<<0,d=o+((t=(a>>>2|a<<30)^(a>>>13|a<<19)^(a>>>22|a<<10))+n)<<0),n=(s=d&a)^d&c^i,h=u+(o=h+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+(p&l^~p&f)+I[e+1]+m[e+1])<<0,t=((u=o+((t=(d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+n)<<0)>>>2|u<<30)^(u>>>13|u<<19)^(u>>>22|u<<10),n=(r=u&d)^u&a^s,f=c+(o=f+((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))+(h&p^~h&l)+I[e+2]+m[e+2])<<0,t=((c=o+(t+n)<<0)>>>2|c<<30)^(c>>>13|c<<19)^(c>>>22|c<<10),n=(s=c&u)^c&d^r,l=a+(o=l+((f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7))+(f&h^~f&p)+I[e+3]+m[e+3])<<0,a=o+(t+n)<<0;this.h0=this.h0+a<<0,this.h1=this.h1+c<<0,this.h2=this.h2+u<<0,this.h3=this.h3+d<<0,this.h4=this.h4+l<<0,this.h5=this.h5+f<<0,this.h6=this.h6+h<<0,this.h7=this.h7+p<<0},d.prototype.hex=function(){this.finalize();var e=this.h1,t=this.h2,r=this.h3,n=this.h4,o=this.h5,i=this.h6,s=this.h7,a=c[(a=this.h0)>>28&15]+c[a>>24&15]+c[a>>20&15]+c[a>>16&15]+c[a>>12&15]+c[a>>8&15]+c[a>>4&15]+c[15&a]+c[e>>28&15]+c[e>>24&15]+c[e>>20&15]+c[e>>16&15]+c[e>>12&15]+c[e>>8&15]+c[e>>4&15]+c[15&e]+c[t>>28&15]+c[t>>24&15]+c[t>>20&15]+c[t>>16&15]+c[t>>12&15]+c[t>>8&15]+c[t>>4&15]+c[15&t]+c[r>>28&15]+c[r>>24&15]+c[r>>20&15]+c[r>>16&15]+c[r>>12&15]+c[r>>8&15]+c[r>>4&15]+c[15&r]+c[n>>28&15]+c[n>>24&15]+c[n>>20&15]+c[n>>16&15]+c[n>>12&15]+c[n>>8&15]+c[n>>4&15]+c[15&n]+c[o>>28&15]+c[o>>24&15]+c[o>>20&15]+c[o>>16&15]+c[o>>12&15]+c[o>>8&15]+c[o>>4&15]+c[15&o]+c[i>>28&15]+c[i>>24&15]+c[i>>20&15]+c[i>>16&15]+c[i>>12&15]+c[i>>8&15]+c[i>>4&15]+c[15&i];return this.is224||(a+=c[s>>28&15]+c[s>>24&15]+c[s>>20&15]+c[s>>16&15]+c[s>>12&15]+c[s>>8&15]+c[s>>4&15]+c[15&s]),a},d.prototype.toString=d.prototype.hex,d.prototype.digest=function(){this.finalize();var e=this.h1,t=this.h2,r=this.h3,n=this.h4,o=this.h5,i=this.h6,s=this.h7,a=[(a=this.h0)>>24&255,a>>16&255,a>>8&255,255&a,e>>24&255,e>>16&255,e>>8&255,255&e,t>>24&255,t>>16&255,t>>8&255,255&t,r>>24&255,r>>16&255,r>>8&255,255&r,n>>24&255,n>>16&255,n>>8&255,255&n,o>>24&255,o>>16&255,o>>8&255,255&o,i>>24&255,i>>16&255,i>>8&255,255&i];return this.is224||a.push(s>>24&255,s>>16&255,s>>8&255,255&s),a},d.prototype.array=d.prototype.digest,d.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e},C.prototype=new d,C.prototype.finalize=function(){if(d.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();d.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),d.prototype.finalize.call(this)}};var A=G();A.sha256=A,A.sha224=G(!0),A.sha256.hmac=a(),A.sha224.hmac=a(!0),z?module.exports=A:(u.sha256=A.sha256,u.sha224=A.sha224,q&&define((function(){return A})))}(),function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).base64js=e()}((function(){return function e(t,r,n){function o(s,a){if(!r[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);throw(a=Error("Cannot find module '"+s+"'")).code="MODULE_NOT_FOUND",a}a=r[s]={exports:{}},t[s][0].call(a.exports,(function(e){return o(t[s][1][e]||e)}),a,a.exports,e,t,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({"/":[function(e,t,r){function n(e){var t=e.length;if(0<t%4)throw Error("Invalid string. Length must be a multiple of 4");return-1===(e=e.indexOf("="))&&(e=t),[e,e===t?0:4-e%4]}function o(e,t,r){for(var n=[],o=t;o<r;o+=3)n.push(i[(t=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]))>>18&63]+i[t>>12&63]+i[t>>6&63]+i[63&t]);return n.join("")}r.byteLength=function(e){var t=(e=n(e))[1];return 3*(e[0]+t)/4-t},r.toByteArray=function(e){for(var t,r=n(e),o=new a(3*((t=r[0])+(r=r[1]))/4-r),i=0,c=0<r?t-4:t,u=0;u<c;u+=4)t=s[e.charCodeAt(u)]<<18|s[e.charCodeAt(u+1)]<<12|s[e.charCodeAt(u+2)]<<6|s[e.charCodeAt(u+3)],o[i++]=t>>16&255,o[i++]=t>>8&255,o[i++]=255&t;return 2===r&&(t=s[e.charCodeAt(u)]<<2|s[e.charCodeAt(u+1)]>>4,o[i++]=255&t),1===r&&(t=s[e.charCodeAt(u)]<<10|s[e.charCodeAt(u+1)]<<4|s[e.charCodeAt(u+2)]>>2,o[i++]=t>>8&255,o[i++]=255&t),o},r.fromByteArray=function(e){for(var t=e.length,r=t%3,n=[],s=0,a=t-r;s<a;s+=16383)n.push(o(e,s,s+16383>a?a:s+16383));return 1===r?n.push(i[(e=e[t-1])>>2]+i[e<<4&63]+"=="):2===r&&n.push(i[(e=(e[t-2]<<8)+e[t-1])>>10]+i[e>>4&63]+i[e<<2&63]+"="),n.join("")};var i=[],s=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array;for(e=0;64>e;++e)i[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e],s["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(e)]=e;s[45]=62,s[95]=63},{}]},{},[])("/")}));var F=L(E.sha256,E.base64js);E.Keycloak=F,"function"==typeof define&&define.amd&&define("keycloak",[],(function(){return F}))}}(window,(function(e,t){return function r(n){function o(e,t){var r;if((n=window.crypto||window.msCrypto)&&n.getRandomValues&&window.Uint8Array)r=new Uint8Array(e),n.getRandomValues(r);else for(r=Array(e),n=0;n<r.length;n++)r[n]=Math.floor(256*Math.random());for(var n=Array(e),o=0;o<e;o++)n[o]=t.charCodeAt(r[o]%t.length);return String.fromCharCode.apply(null,n)}function i(){if(void 0!==y.authServerUrl)return"/"==y.authServerUrl.charAt(y.authServerUrl.length-1)?y.authServerUrl+"realms/"+encodeURIComponent(y.realm):y.authServerUrl+"/realms/"+encodeURIComponent(y.realm)}function s(e,t){function r(r,n,o,i){a(r,n,o,s=(s+(new Date).getTime())/2),_&&(y.tokenParsed&&y.tokenParsed.nonce!=e.storedNonce||y.refreshTokenParsed&&y.refreshTokenParsed.nonce!=e.storedNonce||y.idTokenParsed&&y.idTokenParsed.nonce!=e.storedNonce)?(C("[KEYCLOAK] Invalid nonce, clearing token"),y.clearToken(),t&&t.setError()):i&&(y.onAuthSuccess&&y.onAuthSuccess(),t&&t.setSuccess())}var n=e.code,o=e.error,i=e.prompt,s=(new Date).getTime();if(o)"none"!=i?(n={error:o,error_description:e.error_description},y.onAuthError&&y.onAuthError(n),t&&t.setError(n)):t&&t.setSuccess();else if("standard"!=y.flow&&(e.access_token||e.id_token)&&r(e.access_token,null,e.id_token,!0),"implicit"!=y.flow&&n){n="code="+n+"&grant_type=authorization_code",o=y.endpoints.token();var c=new XMLHttpRequest;c.open("POST",o,!0),c.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n+="&client_id="+encodeURIComponent(y.clientId),n+="&redirect_uri="+e.redirectUri,e.pkceCodeVerifier&&(n+="&code_verifier="+e.pkceCodeVerifier),c.withCredentials=!0,c.onreadystatechange=function(){if(4==c.readyState)if(200==c.status){var e=JSON.parse(c.responseText);r(e.access_token,e.refresh_token,e.id_token,"standard"===y.flow),p()}else y.onAuthError&&y.onAuthError(),t&&t.setError()},c.send(n)}}function a(e,t,r,n){y.tokenTimeoutHandle&&(clearTimeout(y.tokenTimeoutHandle),y.tokenTimeoutHandle=null),t?(y.refreshToken=t,y.refreshTokenParsed=c(t)):(delete y.refreshToken,delete y.refreshTokenParsed),r?(y.idToken=r,y.idTokenParsed=c(r)):(delete y.idToken,delete y.idTokenParsed),e?(y.token=e,y.tokenParsed=c(e),y.sessionId=y.tokenParsed.session_state,y.authenticated=!0,y.subject=y.tokenParsed.sub,y.realmAccess=y.tokenParsed.realm_access,y.resourceAccess=y.tokenParsed.resource_access,n&&(y.timeSkew=Math.floor(n/1e3)-y.tokenParsed.iat),null!=y.timeSkew&&(C("[KEYCLOAK] Estimated time difference between browser and server is "+y.timeSkew+" seconds"),y.onTokenExpired)&&(e=1e3*(y.tokenParsed.exp-(new Date).getTime()/1e3+y.timeSkew),C("[KEYCLOAK] Token expires in "+Math.round(e/1e3)+" s"),0>=e?y.onTokenExpired():y.tokenTimeoutHandle=setTimeout(y.onTokenExpired,e))):(delete y.token,delete y.tokenParsed,delete y.subject,delete y.realmAccess,delete y.resourceAccess,y.authenticated=!1)}function c(e){switch((e=(e=(e=e.split(".")[1]).replace("/-/g","+")).replace("/_/g","/")).length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Invalid token"}return e=(e=(e+"===").slice(0,e.length+e.length%4)).replace(/-/g,"+").replace(/_/g,"/"),e=decodeURIComponent(escape(atob(e))),JSON.parse(e)}function u(){var e=o(36,"0123456789abcdef").split("");return e[14]="4",e[19]="0123456789abcdef".substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}function d(e){e:{var t;switch(y.flow){case"standard":t=["code","state","session_state"];break;case"implicit":t="access_token token_type id_token state session_state expires_in".split(" ");break;case"hybrid":t=["access_token","id_token","code","state","session_state"]}t.push("error"),t.push("error_description"),t.push("error_uri");var r,n,o=e.indexOf("?"),i=e.indexOf("#");if("query"===y.responseMode&&-1!==o?(r=e.substring(0,o),""!==(n=l(e.substring(o+1,-1!==i?i:e.length),t)).paramsString&&(r+="?"+n.paramsString),-1!==i&&(r+=e.substring(i))):"fragment"===y.responseMode&&-1!==i&&(r=e.substring(0,i),""!==(n=l(e.substring(i+1),t)).paramsString&&(r+="#"+n.paramsString)),n&&n.oauthParams)if("standard"===y.flow||"hybrid"===y.flow){if((n.oauthParams.code||n.oauthParams.error)&&n.oauthParams.state){n.oauthParams.newUrl=r,e=n.oauthParams;break e}}else if("implicit"===y.flow&&(n.oauthParams.access_token||n.oauthParams.error)&&n.oauthParams.state){n.oauthParams.newUrl=r,e=n.oauthParams;break e}e=void 0}if(e)return(t=w.get(e.state))&&(e.valid=!0,e.redirectUri=t.redirectUri,e.storedNonce=t.nonce,e.prompt=t.prompt,e.pkceCodeVerifier=t.pkceCodeVerifier),e}function l(e,t){e=e.split("&");for(var r={paramsString:"",oauthParams:{}},n=0;n<e.length;n++){var o=e[n].split("=");-1!==t.indexOf(o[0])?r.oauthParams[o[0]]=o[1]:(""!==r.paramsString&&(r.paramsString+="&"),r.paramsString+=e[n])}return r}function f(e){return!e&&y.useNativePromise?function(){var e={setSuccess:function(t){e.resolve(t)},setError:function(t){e.reject(t)}};return e.promise=new Promise((function(t,r){e.resolve=t,e.reject=r})),e}():function(){var e={setSuccess:function(t){e.success=!0,e.result=t,e.successCallback&&e.successCallback(t)},setError:function(t){e.error=!0,e.result=t,e.errorCallback&&e.errorCallback(t)},promise:{success:function(t){return e.success?t(e.result):e.error||(e.successCallback=t),e.promise},error:function(t){return e.error?t(e.result):e.success||(e.errorCallback=t),e.promise}}};return e}()}function h(){var e=f(!0);if(!A.enable||A.iframe)return e.setSuccess(),e.promise;var t=document.createElement("iframe");A.iframe=t,t.onload=function(){var t=y.endpoints.authorize();"/"===t.charAt(0)?(t=window.location.origin?window.location.origin:window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""),A.iframeOrigin=t):A.iframeOrigin=t.substring(0,t.indexOf("/",8)),e.setSuccess()};var r=y.endpoints.checkSessionIframe();return t.setAttribute("src",r),t.setAttribute("title","keycloak-session-iframe"),t.style.display="none",document.body.appendChild(t),window.addEventListener("message",(function(e){if(e.origin===A.iframeOrigin&&A.iframe.contentWindow===e.source&&("unchanged"==e.data||"changed"==e.data||"error"==e.data)){"unchanged"!=e.data&&y.clearToken();for(var t=A.callbackList.splice(0,A.callbackList.length),r=t.length-1;0<=r;--r){var n=t[r];"error"==e.data?n.setError():n.setSuccess("unchanged"==e.data)}}}),!1),e.promise}function p(){A.enable&&y.token&&setTimeout((function(){m().success((function(e){e&&p()}))}),1e3*A.interval)}function m(){var e=f(!0);if(A.iframe&&A.iframeOrigin){var t=y.clientId+" "+(y.sessionId?y.sessionId:"");A.callbackList.push(e),1==A.callbackList.length&&A.iframe.contentWindow.postMessage(t,A.iframeOrigin)}else e.setSuccess();return e.promise}function g(e){if(!e||"default"==e)return{login:function(e){return window.location.replace(y.createLoginUrl(e)),f(!1).promise},logout:function(e){return window.location.replace(y.createLogoutUrl(e)),f(!1).promise},register:function(e){return window.location.replace(y.createRegisterUrl(e)),f(!1).promise},accountManagement:function(){var e=y.createAccountUrl();if(void 0===e)throw"Not supported by the OIDC server";return window.location.href=e,f(!1).promise},redirectUri:function(e,t){return 1==arguments.length&&(t=!0),e&&e.redirectUri?e.redirectUri:y.redirectUri?y.redirectUri:location.href}};if("cordova"==e){A.enable=!1;var t=function(e,t,r){return window.cordova&&window.cordova.InAppBrowser?window.cordova.InAppBrowser.open(e,t,r):window.open(e,t,r)},r=function(e){var t=function(e){return e&&e.cordovaOptions?Object.keys(e.cordovaOptions).reduce((function(t,r){return t[r]=e.cordovaOptions[r],t}),{}):{}}(e);return t.location="no",e&&"none"==e.prompt&&(t.hidden="yes"),function(e){return Object.keys(e).reduce((function(t,r){return t.push(r+"="+e[r]),t}),[]).join(",")}(t)};return{login:function(e){var n=f(!1),o=r(e);e=y.createLoginUrl(e);var i=t(e,"_blank",o),a=!1,c=!1;return i.addEventListener("loadstart",(function(e){0==e.url.indexOf("http://localhost")&&(s(e=d(e.url),n),c=!0,i.close(),a=!0)})),i.addEventListener("loaderror",(function(e){a||(0==e.url.indexOf("http://localhost")?(s(e=d(e.url),n),c=!0,i.close(),a=!0):(n.setError(),c=!0,i.close()))})),i.addEventListener("exit",(function(e){c||n.setError({reason:"closed_by_user"})})),n.promise},logout:function(e){var r=f(!1);e=y.createLogoutUrl(e);var n,o=t(e,"_blank","location=no,hidden=yes");return o.addEventListener("loadstart",(function(e){0==e.url.indexOf("http://localhost")&&o.close()})),o.addEventListener("loaderror",(function(e){0!=e.url.indexOf("http://localhost")&&(n=!0),o.close()})),o.addEventListener("exit",(function(e){n?r.setError():(y.clearToken(),r.setSuccess())})),r.promise},register:function(e){var n=f(!1),o=y.createRegisterUrl();e=r(e);var i=t(o,"_blank",e);return i.addEventListener("loadstart",(function(e){0==e.url.indexOf("http://localhost")&&(i.close(),s(e=d(e.url),n))})),n.promise},accountManagement:function(){var e=y.createAccountUrl();if(void 0===e)throw"Not supported by the OIDC server";var r=t(e,"_blank","location=no");r.addEventListener("loadstart",(function(e){0==e.url.indexOf("http://localhost")&&r.close()}))},redirectUri:function(e){return"http://localhost"}}}if("cordova-native"==e)return A.enable=!1,{login:function(e){var t=f(!1);return e=y.createLoginUrl(e),universalLinks.subscribe("keycloak",(function(e){universalLinks.unsubscribe("keycloak"),window.cordova.plugins.browsertab.close(),s(e=d(e.url),t)})),window.cordova.plugins.browsertab.openUrl(e),t.promise},logout:function(e){var t=f(!1);return e=y.createLogoutUrl(e),universalLinks.subscribe("keycloak",(function(e){universalLinks.unsubscribe("keycloak"),window.cordova.plugins.browsertab.close(),y.clearToken(),t.setSuccess()})),window.cordova.plugins.browsertab.openUrl(e),t.promise},register:function(e){var t=f(!1);return e=y.createRegisterUrl(e),universalLinks.subscribe("keycloak",(function(e){universalLinks.unsubscribe("keycloak"),window.cordova.plugins.browsertab.close(),s(e=d(e.url),t)})),window.cordova.plugins.browsertab.openUrl(e),t.promise},accountManagement:function(){var e=y.createAccountUrl();if(void 0===e)throw"Not supported by the OIDC server";window.cordova.plugins.browsertab.openUrl(e)},redirectUri:function(e){return e&&e.redirectUri?e.redirectUri:y.redirectUri?y.redirectUri:"http://localhost"}};throw"invalid adapter type: "+e}function k(e){return function(){y.enableLogging&&e.apply(console,Array.prototype.slice.call(arguments))}}if(!(this instanceof r))return new r(n);for(var v,w,y=this,b=[],A={enable:!0,callbackList:[],interval:5},S=document.getElementsByTagName("script"),U=0;U<S.length;U++)-1===S[U].src.indexOf("keycloak.js")&&-1===S[U].src.indexOf("keycloak.min.js")||-1===S[U].src.indexOf("version=")||(y.iframeVersion=S[U].src.substring(S[U].src.indexOf("version=")+8).split("&")[0]);var _=!0,C=k(console.info),E=k(console.warn);y.init=function(e){function t(){var t=function(e){e||(n.prompt="none"),y.useNativePromise?y.login(n).then((function(){c.setSuccess()})).catch((function(){c.setError()})):y.login(n).success((function(){c.setSuccess()})).error((function(){c.setError()}))},r=function(){var e=document.createElement("iframe"),t=y.createLoginUrl({prompt:"none",redirectUri:y.silentCheckSsoRedirectUri});e.setAttribute("src",t),e.setAttribute("title","keycloak-silent-check-sso"),e.style.display="none",document.body.appendChild(e);var r=function(t){t.origin===window.location.origin&&e.contentWindow===t.source&&(s(t=d(t.data),c),document.body.removeChild(e),window.removeEventListener("message",r))};window.addEventListener("message",r)},n={};switch(e.onLoad){case"check-sso":A.enable?h().success((function(){m().success((function(e){e?c.setSuccess():y.silentCheckSsoRedirectUri?r():t(!1)})).error((function(){c.setError()}))})):y.silentCheckSsoRedirectUri?r():t(!1);break;case"login-required":t(!0);break;default:throw"Invalid value for onLoad"}}y.authenticated=!1;e:{try{w=new I;break e}catch(u){}w=new O}var r=["default","cordova","cordova-native"];if(v=e&&-1<r.indexOf(e.adapter)?g(e.adapter):e&&"object"==typeof e.adapter?e.adapter:window.Cordova||window.cordova?g("cordova"):g(),e){if(void 0!==e.useNonce&&(_=e.useNonce),void 0!==e.checkLoginIframe&&(A.enable=e.checkLoginIframe),e.checkLoginIframeInterval&&(A.interval=e.checkLoginIframeInterval),"native"===e.promiseType?y.useNativePromise=!0:(console.warn("[KEYCLOAK] Using legacy promises is deprecated and will be removed in future versions. You can opt in to using native promises by setting `promiseType` to 'native' when initializing Keycloak."),y.useNativePromise=!1),"login-required"===e.onLoad&&(y.loginRequired=!0),e.responseMode){if("query"!==e.responseMode&&"fragment"!==e.responseMode)throw"Invalid value for responseMode";y.responseMode=e.responseMode}if(e.flow){switch(e.flow){case"standard":y.responseType="code";break;case"implicit":y.responseType="id_token token";break;case"hybrid":y.responseType="code id_token token";break;default:throw"Invalid value for flow"}y.flow=e.flow}if(null!=e.timeSkew&&(y.timeSkew=e.timeSkew),e.redirectUri&&(y.redirectUri=e.redirectUri),e.silentCheckSsoRedirectUri&&(y.silentCheckSsoRedirectUri=e.silentCheckSsoRedirectUri),e.pkceMethod){if("S256"!==e.pkceMethod)throw"Invalid value for pkceMethod";y.pkceMethod=e.pkceMethod}y.enableLogging="boolean"==typeof e.enableLogging&&e.enableLogging}y.responseMode||(y.responseMode="fragment"),y.responseType||(y.responseType="code",y.flow="standard");var o=f(!1),c=f(!0);return c.promise.success((function(){y.onReady&&y.onReady(y.authenticated),o.setSuccess(y.authenticated)})).error((function(e){o.setError(e)})),(r=function(e){function t(e){y.endpoints=e?{authorize:function(){return e.authorization_endpoint},token:function(){return e.token_endpoint},logout:function(){if(!e.end_session_endpoint)throw"Not supported by the OIDC server";return e.end_session_endpoint},checkSessionIframe:function(){if(!e.check_session_iframe)throw"Not supported by the OIDC server";return e.check_session_iframe},register:function(){throw'Redirection to "Register user" page not supported in standard OIDC mode'},userinfo:function(){if(!e.userinfo_endpoint)throw"Not supported by the OIDC server";return e.userinfo_endpoint}}:{authorize:function(){return i()+"/protocol/openid-connect/auth"},token:function(){return i()+"/protocol/openid-connect/token"},logout:function(){return i()+"/protocol/openid-connect/logout"},checkSessionIframe:function(){var e=i()+"/protocol/openid-connect/login-status-iframe.html";return y.iframeVersion&&(e=e+"?version="+y.iframeVersion),e},register:function(){return i()+"/protocol/openid-connect/registrations"},userinfo:function(){return i()+"/protocol/openid-connect/userinfo"}}}var r,o=f(!0);if(n?"string"==typeof n&&(r=n):r="keycloak.json",r){var s=new XMLHttpRequest;s.open("GET",r,!0),s.setRequestHeader("Accept","application/json"),s.onreadystatechange=function(){if(4==s.readyState)if(200==s.status||0==s.status&&s.responseText&&s.responseURL.startsWith("file:")){var e=JSON.parse(s.responseText);y.authServerUrl=e["auth-server-url"],y.realm=e.realm,y.clientId=e.resource,t(null),o.setSuccess()}else o.setError()},s.send()}else{if(!n.clientId)throw"clientId missing";if(y.clientId=n.clientId,e=n.oidcProvider)"string"==typeof e?(e="/"==e.charAt(e.length-1)?e+".well-known/openid-configuration":e+"/.well-known/openid-configuration",(s=new XMLHttpRequest).open("GET",e,!0),s.setRequestHeader("Accept","application/json"),s.onreadystatechange=function(){4==s.readyState&&(200==s.status||0==s.status&&s.responseText&&s.responseURL.startsWith("file:")?(t(JSON.parse(s.responseText)),o.setSuccess()):o.setError())},s.send()):(t(e),o.setSuccess());else{if(!n.url)for(e=document.getElementsByTagName("script"),r=0;r<e.length;r++)if(e[r].src.match(/.*keycloak\.js/)){n.url=e[r].src.substr(0,e[r].src.indexOf("/js/keycloak.js"));break}if(!n.realm)throw"realm missing";y.authServerUrl=n.url,y.realm=n.realm,t(null),o.setSuccess()}}return o.promise}(n)).success((function(){var r=d(window.location.href);if(r&&window.history.replaceState(window.history.state,null,r.newUrl),r&&r.valid)return h().success((function(){s(r,c)})).error((function(e){c.setError()}));e?e.token&&e.refreshToken?(a(e.token,e.refreshToken,e.idToken),A.enable?h().success((function(){m().success((function(e){e?(y.onAuthSuccess&&y.onAuthSuccess(),c.setSuccess(),p()):c.setSuccess()})).error((function(){c.setError()}))})):y.updateToken(-1).success((function(){y.onAuthSuccess&&y.onAuthSuccess(),c.setSuccess()})).error((function(){y.onAuthError&&y.onAuthError(),e.onLoad?t():c.setError()}))):e.onLoad?t():c.setSuccess():c.setSuccess()})),r.error((function(){o.setError()})),o.promise},y.login=function(e){return v.login(e)},y.createLoginUrl=function(r){var n,i,s=u(),a=u(),c=v.redirectUri(r),d={state:s,nonce:a,redirectUri:encodeURIComponent(c)};if(r&&r.prompt&&(d.prompt=r.prompt),n=r&&"register"==r.action?y.endpoints.register():y.endpoints.authorize(),i=r&&r.scope?-1!=r.scope.indexOf("openid")?r.scope:"openid "+r.scope:"openid",s=n+"?client_id="+encodeURIComponent(y.clientId)+"&redirect_uri="+encodeURIComponent(c)+"&state="+encodeURIComponent(s)+"&response_mode="+encodeURIComponent(y.responseMode)+"&response_type="+encodeURIComponent(y.responseType)+"&scope="+encodeURIComponent(i),_&&(s=s+"&nonce="+encodeURIComponent(a)),r&&r.prompt&&(s+="&prompt="+encodeURIComponent(r.prompt)),r&&r.maxAge&&(s+="&max_age="+encodeURIComponent(r.maxAge)),r&&r.loginHint&&(s+="&login_hint="+encodeURIComponent(r.loginHint)),r&&r.idpHint&&(s+="&kc_idp_hint="+encodeURIComponent(r.idpHint)),r&&r.locale&&(s+="&ui_locales="+encodeURIComponent(r.locale)),r&&r.kcLocale&&(s+="&kc_locale="+encodeURIComponent(r.kcLocale)),y.pkceMethod){r=o(96,"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"),d.pkceCodeVerifier=r;e:switch(y.pkceMethod){case"S256":r=new Uint8Array(e.arrayBuffer(r)),r=t.fromByteArray(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,"");break e;default:throw"Invalid value for pkceMethod"}s=s+"&code_challenge="+r+"&code_challenge_method="+y.pkceMethod}return w.add(d),s},y.logout=function(e){return v.logout(e)},y.createLogoutUrl=function(e){return y.endpoints.logout()+"?redirect_uri="+encodeURIComponent(v.redirectUri(e,!1))},y.register=function(e){return v.register(e)},y.createRegisterUrl=function(e){return e||(e={}),e.action="register",y.createLoginUrl(e)},y.createAccountUrl=function(e){var t=i(),r=void 0;return void 0!==t&&(r=t+"/account?referrer="+encodeURIComponent(y.clientId)+"&referrer_uri="+encodeURIComponent(v.redirectUri(e))),r},y.accountManagement=function(){return v.accountManagement()},y.hasRealmRole=function(e){var t=y.realmAccess;return!!t&&0<=t.roles.indexOf(e)},y.hasResourceRole=function(e,t){return!!y.resourceAccess&&!!(t=y.resourceAccess[t||y.clientId])&&0<=t.roles.indexOf(e)},y.loadUserProfile=function(){var e=i()+"/account",t=new XMLHttpRequest;t.open("GET",e,!0),t.setRequestHeader("Accept","application/json"),t.setRequestHeader("Authorization","bearer "+y.token);var r=f(!1);return t.onreadystatechange=function(){4==t.readyState&&(200==t.status?(y.profile=JSON.parse(t.responseText),r.setSuccess(y.profile)):r.setError())},t.send(),r.promise},y.loadUserInfo=function(){var e=y.endpoints.userinfo(),t=new XMLHttpRequest;t.open("GET",e,!0),t.setRequestHeader("Accept","application/json"),t.setRequestHeader("Authorization","bearer "+y.token);var r=f(!1);return t.onreadystatechange=function(){4==t.readyState&&(200==t.status?(y.userInfo=JSON.parse(t.responseText),r.setSuccess(y.userInfo)):r.setError())},t.send(),r.promise},y.isTokenExpired=function(e){if(!y.tokenParsed||!y.refreshToken&&"implicit"!=y.flow)throw"Not authenticated";if(null==y.timeSkew)return C("[KEYCLOAK] Unable to determine if token is expired as timeskew is not set"),!0;var t=y.tokenParsed.exp-Math.ceil((new Date).getTime()/1e3)+y.timeSkew;if(e){if(isNaN(e))throw"Invalid minValidity";t-=e}return 0>t},y.updateToken=function(e){var t=f(!1);if(!y.refreshToken)return t.setError(),t.promise;e=e||5;var r=function(){var r=!1;if(-1==e?(r=!0,C("[KEYCLOAK] Refreshing token: forced refresh")):y.tokenParsed&&!y.isTokenExpired(e)||(r=!0,C("[KEYCLOAK] Refreshing token: token expired")),r){r="grant_type=refresh_token&refresh_token="+y.refreshToken;var n=y.endpoints.token();if(b.push(t),1==b.length){var o=new XMLHttpRequest;o.open("POST",n,!0),o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.withCredentials=!0,r=r+"&client_id="+encodeURIComponent(y.clientId);var i=(new Date).getTime();o.onreadystatechange=function(){if(4==o.readyState)if(200==o.status){C("[KEYCLOAK] Token refreshed"),i=(i+(new Date).getTime())/2;var e=JSON.parse(o.responseText);for(a(e.access_token,e.refresh_token,e.id_token,i),y.onAuthRefreshSuccess&&y.onAuthRefreshSuccess(),e=b.pop();null!=e;e=b.pop())e.setSuccess(!0)}else for(E("[KEYCLOAK] Failed to refresh token"),400==o.status&&y.clearToken(),y.onAuthRefreshError&&y.onAuthRefreshError(),e=b.pop();null!=e;e=b.pop())e.setError(!0)},o.send(r)}}else t.setSuccess(!1)};return A.enable?m().success((function(){r()})).error((function(){t.setError()})):r(),t.promise},y.clearToken=function(){y.token&&(a(null,null,null),y.onAuthLogout&&y.onAuthLogout(),y.loginRequired&&y.login())};var I=function(){function e(){for(var e=(new Date).getTime(),t=0;t<localStorage.length;t++){var r=localStorage.key(t);if(r&&0==r.indexOf("kc-callback-")){var n=localStorage.getItem(r);if(n)try{var o=JSON.parse(n).expires;(!o||o<e)&&localStorage.removeItem(r)}catch(i){localStorage.removeItem(r)}}}}if(!(this instanceof I))return new I;localStorage.setItem("kc-test","test"),localStorage.removeItem("kc-test"),this.get=function(t){if(t){t="kc-callback-"+t;var r=localStorage.getItem(t);return r&&(localStorage.removeItem(t),r=JSON.parse(r)),e(),r}},this.add=function(t){e();var r="kc-callback-"+t.state;t.expires=(new Date).getTime()+36e5,localStorage.setItem(r,JSON.stringify(t))}},O=function(){if(!(this instanceof O))return new O;this.get=function(r){if(r){var n;e:{n="kc-callback-"+r+"=";for(var o=document.cookie.split(";"),i=0;i<o.length;i++){for(var s=o[i];" "==s.charAt(0);)s=s.substring(1);if(0==s.indexOf(n)){n=s.substring(n.length,s.length);break e}}n=""}if(t("kc-callback-"+r,"",e(-100)),n)return JSON.parse(n)}},this.add=function(r){t("kc-callback-"+r.state,JSON.stringify(r),e(60))},this.removeItem=function(r){t(r,"",e(-100))};var e=function(e){var t=new Date;return t.setTime(t.getTime()+6e4*e),t},t=function(e,t,r){e=e+"="+t+"; expires="+r.toUTCString()+"; ",document.cookie=e}}}}));