function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(n)}function n(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function t(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function r(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?t(o,!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(o).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function o(e){function n(e,n){Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.message=e,this.code=n}return n.prototype=new Error,n.prototype.name=e,n.prototype.constructor=n,n}var i=o("LaunchDarklyUnexpectedResponseError"),a=o("LaunchDarklyInvalidEnvironmentIdError"),u=o("LaunchDarklyInvalidUserError"),c=o("LaunchDarklyInvalidEventKeyError"),s=o("LaunchDarklyInvalidArgumentError"),l=o("LaunchDarklyFlagFetchError");function f(e){return!(e>=400&&e<500)||400===e||408===e||429===e}for(var v=Object.freeze({__proto__:null,LDUnexpectedResponseError:i,LDInvalidEnvironmentIdError:a,LDInvalidUserError:u,LDInvalidEventKeyError:c,LDInvalidArgumentError:s,LDFlagFetchError:l,isHttpErrorRecoverable:f}),d=function(e){for(var n,t=e.length,r=t%3,o=[],i=0,a=t-r;i<a;i+=16383)o.push(w(e,i,i+16383>a?a:i+16383));return 1===r?(n=e[t-1],o.push(g[n>>2]+g[n<<4&63]+"==")):2===r&&(n=(e[t-2]<<8)+e[t-1],o.push(g[n>>10]+g[n>>4&63]+g[n<<2&63]+"=")),o.join("")},g=[],p=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m=0,y=h.length;m<y;++m)g[m]=h[m],p[h.charCodeAt(m)]=m;function w(e,n,t){for(var r,o,i=[],a=n;a<t;a+=3)r=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),i.push(g[(o=r)>>18&63]+g[o>>12&63]+g[o>>6&63]+g[63&o]);return i.join("")}p["-".charCodeAt(0)]=62,p["_".charCodeAt(0)]=63;var b=Array.isArray,k=Object.keys,E=Object.prototype.hasOwnProperty,S=function e(n,t){if(n===t)return!0;if(n&&t&&"object"==typeof n&&"object"==typeof t){var r,o,i,a=b(n),u=b(t);if(a&&u){if((o=n.length)!=t.length)return!1;for(r=o;0!=r--;)if(!e(n[r],t[r]))return!1;return!0}if(a!=u)return!1;var c=n instanceof Date,s=t instanceof Date;if(c!=s)return!1;if(c&&s)return n.getTime()==t.getTime();var l=n instanceof RegExp,f=t instanceof RegExp;if(l!=f)return!1;if(l&&f)return n.toString()==t.toString();var v=k(n);if((o=v.length)!==k(t).length)return!1;for(r=o;0!=r--;)if(!E.call(t,v[r]))return!1;for(r=o;0!=r--;)if(!e(n[i=v[r]],t[i]))return!1;return!0}return n!=n&&t!=t},P=["key","secondary","ip","country","email","firstName","lastName","avatar","name"];function O(e){var n=unescape(encodeURIComponent(e));return d(function(e){for(var n=[],t=0;t<e.length;t++)n.push(e.charCodeAt(t));return n}(n))}function D(e){return O(e).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function U(e){return JSON.parse(JSON.stringify(e))}function R(e,n){return S(e,n)}function j(e){setTimeout(e,0)}function I(e,n){var t=e.then((function(e){return n&&setTimeout((function(){n(null,e)}),0),e}),(function(e){if(!n)return Promise.reject(e);setTimeout((function(){n(e,null)}),0)}));return n?void 0:t}function N(e){var n={};for(var t in e)e.hasOwnProperty(t)&&(n[t]={value:e[t],version:0});return n}function T(e){var n={};for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t].value);return n}function L(e,n){for(var t,r=n.slice(0),o=[],i=e;r.length>0;){for(t=[];i>0;){var a=r.shift();if(!a)break;(i-=D(JSON.stringify(a)).length)<0&&t.length>0?r.unshift(a):t.push(a)}i=e,o.push(t)}return o}function F(e){var n=e.version||"2.14.1";return e.userAgent+"/"+n}function x(e){return{"X-LaunchDarkly-User-Agent":F(e)}}function A(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce((function(e,n){return r({},e,{},n)}),{})}function C(e){if(!e)return e;var n;for(var t in P){var o=P[t],i=e[o];void 0!==i&&"string"!=typeof i&&((n=n||r({},e))[o]=String(i))}return n||e}Object.freeze({__proto__:null,btoa:O,base64URLEncode:D,clone:U,deepEquals:R,onNextTick:j,wrapPromiseCallback:I,transformValuesToVersionedValues:N,transformVersionedValuesToValues:T,chunkUserEventsForUrl:L,getLDUserAgentString:F,getLDHeaders:x,extend:A,sanitizeUser:C});var q=2e3;function J(e){return e&&e.message?e.message:"string"==typeof e||e instanceof String?e:JSON.stringify(e)}var _=function(){return"LaunchDarkly client initialized"},V=" Please see https://docs.launchdarkly.com/docs/js-sdk-reference#section-initializing-the-client for instructions on SDK initialization.",z=function(){return"Be sure to call `identify` in the LaunchDarkly client: https://docs.launchdarkly.com/docs/js-sdk-reference#section-analytics-events"},H=function(e){return'Expected application/json content type but got "'+e+'"'},$=function(){return"localStorage is unavailable"},K=function(){return"localStorage is unavailable, so anonymous user ID cannot be cached"},M=function(e){return"network error"+(e?" ("+e+")":"")},G=function(e){return'Custom event "'+e+'" does not exist'},X=function(){return"Environment not found. Double check that you specified a valid environment/client-side ID."+V},B=function(){return"No environment/client-side ID was specified."+V},W=function(e){return"Error fetching flag settings: "+J(e)},Q=function(){return"No user specified."+V},Y=function(){return"Invalid user specified."+V},Z=function(){return"LaunchDarkly client was initialized with bootstrap data that did not include flag metadata. Events may not be sent correctly."+V},ee=function(){return"LaunchDarkly bootstrap data is not available because the back end could not read the flags."},ne=function(e,n){return n?'[LaunchDarkly] "'+e+'" is deprecated, please use "'+n+'"':'[LaunchDarkly] "'+e+'" is deprecated'},te=function(e,n,t){return"Received error "+e+(401===e?" (invalid SDK key)":"")+" for "+n+" - "+(f(e)?t:"giving up permanently")},re=function(){return"Cannot make HTTP requests in this environment."+V},oe=function(){return"identify() has no effect here; it must be called on the main client instance"},ie=function(){return"Closing stream connection"},ae=function(e){return"Opening stream connection to "+e},ue=function(e,n){return"Error on stream connection: "+J(e)+", will continue retrying every "+n+" milliseconds."},ce=function(e){return"polling for feature flags at "+e},se=function(){return"received ping message from stream"},le=function(){return"received streaming update for all flags"},fe=function(e){return'received streaming update for flag "'+e+'"'},ve=function(e){return'received streaming update for flag "'+e+'" but ignored due to version check'},de=function(e){return'received streaming deletion for flag "'+e+'"'},ge=function(e){return'received streaming deletion for flag "'+e+'" but ignored due to version check'},pe=function(e){return'enqueueing "'+e+'" event'},he=function(e){return"sending "+e+" events"},me=Object.freeze({__proto__:null,clientInitialized:_,clientNotReady:function(){return"LaunchDarkly client is not ready"},eventWithoutUser:z,invalidContentType:H,invalidKey:function(){return"Event key must be a string"},localStorageUnavailable:$,localStorageUnavailableForUserId:K,networkError:M,unknownCustomEventKey:G,environmentNotFound:X,environmentNotSpecified:B,errorFetchingFlags:W,userNotSpecified:Q,invalidUser:Y,bootstrapOldFormat:Z,bootstrapInvalid:ee,deprecated:ne,httpErrorMessage:te,httpUnavailable:re,identifyDisabled:oe,streamClosing:ie,streamConnecting:ae,streamError:ue,debugPolling:ce,debugStreamPing:se,debugStreamPut:le,debugStreamPatch:fe,debugStreamPatchIgnored:ve,debugStreamDelete:de,debugStreamDeleteIgnored:ge,debugEnqueueingEvent:pe,debugPostingEvents:he});function ye(e,n,t){var r,o,a,u,c,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,v={},d=l||function(e,n,t,r){var o=n+"/events/bulk/"+t,i=n+"/a/"+t+".gif",a={};function u(e){(new window.Image).src=e}function c(n,t){var a=r||u,c=JSON.stringify(n);return t?function n(t){var r=A({"Content-Type":"application/json","X-LaunchDarkly-Event-Schema":"3"},x(e));return e.httpRequest("POST",o,r,c).promise.then((function(e){if(e)return e.status>=400&&f(e.status)&&t?n(!1):function(e){var n={status:e.status},t=e.header("date");if(t){var r=Date.parse(t);r&&(n.serverTime=r)}return n}(e)})).catch((function(){return t?n(!1):Promise.reject()}))}(!0).catch((function(){})):(a(i+"?d="+D(c)),Promise.resolve())}return a.sendEvents=function(t){if(!e.httpRequest)return Promise.resolve();var r,o=e.httpAllowsPost();r=o?[t]:L(q-n.length,t);for(var i=[],a=0;a<r.length;a++)i.push(c(r[a],o));return Promise.all(i)},a}(e,n.eventsUrl,t),g=(o=0,a=0,u={},(r={}).summarizeEvent=function(e){if("feature"===e.kind){var n=e.key+":"+(null!==e.variation&&void 0!==e.variation?e.variation:"")+":"+(null!==e.version&&void 0!==e.version?e.version:""),t=u[n];t?t.count=t.count+1:u[n]={count:1,key:e.key,variation:e.variation,version:e.version,value:e.value,default:e.default},(0===o||e.creationDate<o)&&(o=e.creationDate),e.creationDate>a&&(a=e.creationDate)}},r.getSummary=function(){var e={},n=!0;for(var t in u){var r=u[t],i=e[r.key];i||(i={default:r.default,counters:[]},e[r.key]=i);var c={value:r.value,count:r.count};void 0!==r.variation&&null!==r.variation&&(c.variation=r.variation),r.version?c.version=r.version:c.unknown=!0,i.counters.push(c),n=!1}return n?null:{startDate:o,endDate:a,features:e}},r.clearSummary=function(){o=0,a=0,u={}},r),p=function(e){var n={},t=e.allAttributesPrivate,r=e.privateAttributeNames||[],o={key:!0,custom:!0,anonymous:!0},i={key:!0,secondary:!0,ip:!0,country:!0,email:!0,firstName:!0,lastName:!0,avatar:!0,name:!0,anonymous:!0,custom:!0};return n.filterUser=function(e){if(!e)return null;var n=e.privateAttributeNames||[],a=function(e,i){return Object.keys(e).reduce((function(a,u){var c=a;return i(u)&&(function(e){return!o[e]&&(t||-1!==n.indexOf(e)||-1!==r.indexOf(e))}(u)?c[1][u]=!0:c[0][u]=e[u]),c}),[{},{}])},u=a(e,(function(e){return i[e]})),c=u[0],s=u[1];if(e.custom){var l=a(e.custom,(function(){return!0}));c.custom=l[0],s=A({},s,l[1])}var f=Object.keys(s);return f.length&&(f.sort(),c.privateAttrs=f),c},n}(n),h=n.inlineUsersInEvents,m=n.samplingInterval,y=n.flushInterval,w=n.logger,b=[],k=0,E=!1;function S(){return 0===m||0===Math.floor(Math.random()*m)}return v.enqueue=function(e){if(!E){var n,t=!1,r=!1;if(g.summarizeEvent(e),"feature"===e.kind?S()&&(t=!!e.trackEvents,r=!!(n=e).debugEventsUntilDate&&n.debugEventsUntilDate>k&&n.debugEventsUntilDate>(new Date).getTime()):t=S(),t&&b.push(function(e){var n=A({},e);return h||"identify"===e.kind?n.user=p.filterUser(e.user):(n.userKey=e.user.key,delete n.user),"feature"===e.kind&&(delete n.trackEvents,delete n.debugEventsUntilDate),n}(e)),r){var o=A({},e,{kind:"debug"});delete o.trackEvents,delete o.debugEventsUntilDate,delete o.variation,b.push(o)}}},v.flush=function(){if(E)return Promise.resolve();var e=b,n=g.getSummary();return g.clearSummary(),n&&(n.kind="summary",e.push(n)),0===e.length?Promise.resolve():(b=[],w.debug(he(e.length)),d.sendEvents(e).then((function(e){e&&(e.serverTime&&(k=e.serverTime),f(e.status)||(E=!0),e.status>=400&&j((function(){s.maybeReportError(new i(te(e.status,"event posting","some events were dropped")))})))})))},v.start=function(){c=setTimeout((function e(){v.flush(),c=setTimeout(e,y)}),y)},v.stop=function(){clearTimeout(c)},v}function we(e,n,t,r,o){var i={};function a(){var e="",o=r.getUser();return o&&(e=t||O(JSON.stringify(o))),"ld:"+n+":"+e}return i.loadFlags=function(){return e.get(a()).then((function(e){if(null==e)return null;try{var n=JSON.parse(e);if(n){var t=n.$schema;void 0===t||t<1?n=N(n):delete n.$schema}return n}catch(e){return i.clearFlags().then((function(){return Promise.reject(e)}))}})).catch((function(e){return o.warn($()),Promise.reject(e)}))},i.saveFlags=function(n){var t=A({},n,{$schema:1});return e.set(a(),JSON.stringify(t)).catch((function(e){return o.warn($()),Promise.reject(e)}))},i.clearFlags=function(){return e.clear(a()).catch((function(e){return o.warn($()),Promise.reject(e)}))},i}var be="application/json";function ke(e,n,t){var r=n.baseUrl,o=n.useReport,i=n.evaluationReasons,u=n.sendLDHeaders,c=n.logger,s={},f={};function v(n,t){if(!e.httpRequest)return new Promise((function(e,n){n(new l(re()))}));var r=t?"REPORT":"GET",o=u?x(e):{};t&&(o["Content-Type"]="application/json");var i=f[n];i||(i=function(e){var n,t,r,o,i={addPromise:function(i,a){n=i,t&&t(),t=a,i.then((function(t){n===i&&(r(t),e&&e())}),(function(t){n===i&&(o(t),e&&e())}))}};return i.resultPromise=new Promise((function(e,n){r=e,o=n})),i}((function(){delete f[n]})),f[n]=i);var c=e.httpRequest(r,n,o,t),s=c.promise.then((function(e){if(200===e.status){if(e.header("content-type")&&0===e.header("content-type").lastIndexOf(be))return JSON.parse(e.body);var n=H(e.header("content-type")||"");return Promise.reject(new l(n))}return Promise.reject(function(e){return 404===e.status?new a(X()):new l(W(e.statusText||String(e.status)))}(e))}),(function(e){return Promise.reject(new l(M(e)))}));return i.addPromise(s,(function(){c.cancel&&c.cancel()})),i.resultPromise}return s.fetchJSON=function(e){return v(r+e,null)},s.fetchFlagSettings=function(e,n){var a,u,s,l="";return o?(u=[r,"/sdk/evalx/",t,"/user"].join(""),s=JSON.stringify(e)):(a=D(JSON.stringify(e)),u=[r,"/sdk/evalx/",t,"/users/",a].join("")),n&&(l="h="+n),i&&(l=l+(l?"&":"")+"withReasons=true"),u=u+(l?"?":"")+l,c.debug(ce(u)),v(u,s)},s}for(var Ee=function(e,n){return function(e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var t=new Uint8Array(16);e.exports=function(){return n(t),t}}else{var r=new Array(16);e.exports=function(){for(var e,n=0;n<16;n++)0==(3&n)&&(e=4294967296*Math.random()),r[n]=e>>>((3&n)<<3)&255;return r}}}(n={exports:{}}),n.exports}(),Se=[],Pe=0;Pe<256;++Pe)Se[Pe]=(Pe+256).toString(16).substr(1);var Oe,De,Ue=0,Re=0,je=function(e,n,t){var r=n&&t||0,o=n||[],i=(e=e||{}).node||Oe,a=void 0!==e.clockseq?e.clockseq:De;if(null==i||null==a){var u=Ee();null==i&&(i=Oe=[1|u[0],u[1],u[2],u[3],u[4],u[5]]),null==a&&(a=De=16383&(u[6]<<8|u[7]))}var c=void 0!==e.msecs?e.msecs:(new Date).getTime(),s=void 0!==e.nsecs?e.nsecs:Re+1,l=c-Ue+(s-Re)/1e4;if(l<0&&void 0===e.clockseq&&(a=a+1&16383),(l<0||c>Ue)&&void 0===e.nsecs&&(s=0),s>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");Ue=c,Re=s,De=a;var f=(1e4*(268435455&(c+=122192928e5))+s)%4294967296;o[r++]=f>>>24&255,o[r++]=f>>>16&255,o[r++]=f>>>8&255,o[r++]=255&f;var v=c/4294967296*1e4&268435455;o[r++]=v>>>8&255,o[r++]=255&v,o[r++]=v>>>24&15|16,o[r++]=v>>>16&255,o[r++]=a>>>8|128,o[r++]=255&a;for(var d=0;d<6;++d)o[r+d]=i[d];return n||function(e,n){var t=n||0,r=Se;return[r[e[t++]],r[e[t++]],r[e[t++]],r[e[t++]],"-",r[e[t++]],r[e[t++]],"-",r[e[t++]],r[e[t++]],"-",r[e[t++]],r[e[t++]],"-",r[e[t++]],r[e[t++]],r[e[t++]],r[e[t++]],r[e[t++]],r[e[t++]]].join("")}(o)},Ie="ld:$anonUserId";function Ne(e,n){var t={validateUser:function(t){if(!t)return Promise.reject(new u(Q()));var r=U(t);return null!==r.key&&void 0!==r.key?(r.key=r.key.toString(),Promise.resolve(r)):r.anonymous?(e?e.get(Ie).catch((function(){return null})):Promise.resolve(null)).then((function(t){if(t)return r.key=t,r;var o=je();return r.key=o,function(t){return e?e.set(Ie,t).catch((function(){n.warn(K())})):Promise.resolve()}(o).then((function(){return r}))})):Promise.reject(new u(Y()))}};return t}function Te(e,n){var t,r=["debug","info","warn","error"];t=null!=n?""===n?"":n+" ":"LD: ";var o=0;e&&(o="none"===e?100:r.indexOf(e));var i={};function a(e,n,i){if(e>=o){var a=e<r.length?r[e]:"?";n(t+"["+a+"] "+i)}}return i.debug=function(e){return a(0,console.log,e)},i.info=function(e){return a(1,console.info,e)},i.warn=function(e){return a(2,console.warn,e)},i.error=function(e){return a(3,console.error,e)},i}var Le="ready",Fe="initialized",xe="failed",Ae="change",Ce="internal-change";function qe(n,t,o,i,u){var f,v,d,g,p=o&&o.logger?o.logger:u&&u.logger||Te("warn"),h=function(e){var n={},t={};return n.on=function(e,n,r){t[e]=t[e]||[],t[e]=t[e].concat({handler:n,context:r})},n.off=function(e,n,r){if(t[e])for(var o=0;o<t[e].length;o++)t[e][o].handler===n&&t[e][o].context===r&&(t[e]=t[e].slice(0,o).concat(t[e].slice(o+1)))},n.emit=function(e){if(t[e])for(var n=0;n<t[e].length;n++)t[e][n].handler.apply(t[e][n].context,Array.prototype.slice.call(arguments,1))},n.getEvents=function(){return Object.keys(t)},n.getEventListenerCount=function(e){return t[e]?t[e].length:0},n.maybeReportError=function(n){n&&(t.error?this.emit("error",n):(e||console).error(n.message))},n}(p),m=function(e,n,t,r){var o=A({logger:r},{baseUrl:"https://app.launchdarkly.com",streamUrl:"https://clientstream.launchdarkly.com",eventsUrl:"https://events.launchdarkly.com",sendEvents:!0,sendLDHeaders:!0,inlineUsersInEvents:!1,allowFrequentDuplicateEvents:!1,sendEventsOnlyForVariation:!1,useReport:!1,evaluationReasons:!1,flushInterval:2e3,samplingInterval:0,streamReconnectDelay:1e3,allAttributesPrivate:!1,privateAttributeNames:[]},t),i={all_attributes_private:"allAttributesPrivate",private_attribute_names:"privateAttributeNames",samplingInterval:null};function a(e){j((function(){n&&n.maybeReportError(new s(e))}))}var u=A({},e||{});return function(e){var n=e;Object.keys(i).forEach((function(e){if(void 0!==n[e]){var t=i[e];r&&r.warn(ne(e,t)),t&&(void 0===n[t]&&(n[t]=n[e]),delete n[e])}}))}(u),u=function(e,n){var t=A({},e);return Object.keys(n).forEach((function(e){void 0!==t[e]&&null!==t[e]||(t[e]=n[e])})),t}(u,o),(isNaN(u.flushInterval)||u.flushInterval<2e3)&&(u.flushInterval=2e3,a("Invalid flush interval configured. Must be an integer >= 2000 (milliseconds).")),(isNaN(u.samplingInterval)||u.samplingInterval<0)&&(u.samplingInterval=0,a("Invalid sampling interval configured. Sampling interval must be an integer >= 0.")),u}(o,h,u,p),y=m.hash,w=m.sendEvents,b=n,k=function(e,n,t,r){var o=n.streamUrl,i=n.logger,a={},u=o+"/eval/"+t,c=n.useReport,s=n.evaluationReasons,l=n.streamReconnectDelay,f=!1,v=null,d=null,g=null,p=null;function h(e){f||(i.warn(ue(e,l)),f=!0),w(),m(l)}function m(e){d||(e?d=setTimeout(y,e):y())}function y(){var n;d=null;var a="",l={};if(e.eventSourceFactory){for(var f in null!=r&&(a="h="+r),c?e.eventSourceAllowsReport?(n=u,l.method="REPORT",l.headers={"Content-Type":"application/json"},l.body=JSON.stringify(g)):(n=o+"/ping/"+t,a=""):n=u+"/"+D(JSON.stringify(g)),s&&(a=a+(a?"&":"")+"withReasons=true"),n=n+(a?"?":"")+a,w(),i.info(ae(n)),v=e.eventSourceFactory(n,l),p)p.hasOwnProperty(f)&&v.addEventListener(f,p[f]);v.onerror=h}}function w(){v&&(i.info(ie()),v.close(),v=null)}return a.connect=function(e,n){g=e,p={};var t=function(e){p[e]=function(t){f=!1,n[e]&&n[e](t)}};for(var r in n||{})t(r);m()},a.disconnect=function(){clearTimeout(d),d=null,w()},a.isConnected=function(){return!!(v&&e.eventSourceIsActive&&e.eventSourceIsActive(v))},a}(i,m,b,y),E=m.eventProcessor||ye(i,m,b,h),S=ke(i,m,b),P={},O={},N=m.streaming,L=!1,F=!1,x=!0,q=m.stateProvider,J=function(e,n){var t,r={setUser:function(e){(t=C(e))&&n&&n(U(t))},getUser:function(){return t?U(t):null}};return r}(0,(function(e){q||e&&H({kind:"identify",key:e.key,user:e,creationDate:(new Date).getTime()})})),V=Ne(i.localStorage,p);function H(e){b&&(q&&q.enqueueEvent&&q.enqueueEvent(e)||(e.user?(x=!1,!w||F||i.isDoNotTrack()||(p.debug(pe(e.kind)),E.enqueue(e))):x&&(p.warn(z()),x=!1)))}function K(e,n,t,r){var o=J.getUser(),i=new Date,a=n?n.value:null;if(!m.allowFrequentDuplicateEvents){var u=JSON.stringify(a)+(o&&o.key?o.key:"")+e,c=P[u];if(c&&i-c<3e5)return;P[u]=i}var s={kind:"feature",key:e,user:o,value:a,variation:n?n.variationIndex:null,default:t,creationDate:i.getTime()},l=O[e];l&&(s.version=l.flagVersion?l.flagVersion:l.version,s.trackEvents=l.trackEvents,s.debugEventsUntilDate=l.debugEventsUntilDate),(r||l&&l.trackReason)&&n&&(s.reason=n.reason),H(s)}function M(e,n,t,r){var o;if(O&&O.hasOwnProperty(e)&&O[e]&&!O[e].deleted){var i=O[e];o=X(i),null!==i.value&&void 0!==i.value||(o.value=n)}else o={value:n,variationIndex:null,reason:{kind:"ERROR",errorKind:"FLAG_NOT_FOUND"}};return t&&K(e,o,n,r),o}function X(e){return{value:e.value,variationIndex:void 0===e.variation?null:e.variation,reason:e.reason||null}}function Q(){v=!0,J.getUser()&&k.connect(J.getUser(),{ping:function(){p.debug(se()),S.fetchFlagSettings(J.getUser(),y).then((function(e){return te(e||{})})).catch((function(e){h.maybeReportError(new l(W(e)))}))},put:function(e){var n=JSON.parse(e.data);p.debug(le()),te(n)},patch:function(e){var n=JSON.parse(e.data),t=O[n.key];if(!t||!t.version||!n.version||t.version<n.version){p.debug(fe(n.key));var r={},o=A({},n);delete o.key,O[n.key]=o;var i=X(o);r[n.key]=t?{previous:t.value,current:i}:{current:i},re(r)}else p.debug(ve(n.key))},delete:function(e){var n=JSON.parse(e.data);if(!O[n.key]||O[n.key].version<n.version){p.debug(de(n.key));var t={};O[n.key]&&!O[n.key].deleted&&(t[n.key]={previous:O[n.key].value}),O[n.key]={version:n.version,deleted:!0},re(t)}else p.debug(ge(n.key))}})}function Y(){v&&(k.disconnect(),v=!1)}function te(e){var n={};if(!e)return Promise.resolve();for(var t in O)O.hasOwnProperty(t)&&O[t]&&(e[t]&&!R(e[t].value,O[t].value)?n[t]={previous:O[t].value,current:X(e[t])}:e[t]&&!e[t].deleted||(n[t]={previous:O[t].value}));for(var o in e)e.hasOwnProperty(o)&&e[o]&&(!O[o]||O[o].deleted)&&(n[o]={current:X(e[o])});return O=r({},e),re(n).catch((function(){}))}function re(e){var n=Object.keys(e);if(n.length>0){var t={};n.forEach((function(n){var r=e[n].current,o=r?r.value:void 0,i=e[n].previous;h.emit(Ae+":"+n,o,i),t[n]=r?{current:o,previous:i}:{previous:i}})),h.emit(Ae,t),h.emit(Ce,O),m.sendEventsOnlyForVariation||q||n.forEach((function(n){K(n,e[n].current)}))}return f&&g?g.saveFlags(O).catch((function(){return null})):Promise.resolve()}function ce(){var e=N||d&&void 0===N;e&&!v?Q():!e&&v&&Y()}function he(e){return e===Ae||e.substr(0,Ae.length+1)===Ae+":"}i.localStorage&&(g=new we(i.localStorage,b,y,J,p));var me=new Promise((function(e){var n=h.on(Le,(function(){h.off(Le,n),e()}))})),be=new Promise((function(e,n){var t=h.on(Fe,(function(){h.off(Fe,t),e()})),r=h.on(xe,(function(e){h.off(xe,r),n(e)}))}));if("string"==typeof m.bootstrap&&"LOCALSTORAGE"===m.bootstrap.toUpperCase()&&(g?f=!0:p.warn($())),"object"===e(m.bootstrap)&&(O=function(e){var n=Object.keys(e),t=e.$flagsState;!t&&n.length&&p.warn(Z()),!1===e.$valid&&p.warn(ee());var r={};return n.forEach((function(n){if("$flagsState"!==n&&"$valid"!==n){var o={value:e[n]};t&&t[n]?o=A(o,t[n]):o.version=0,r[n]=o}})),r}(m.bootstrap)),q){var Ee=q.getInitialState();Ee?Se(Ee):q.on("init",Se),q.on("update",(function(e){e.user&&J.setUser(e.user),e.flags&&te(e.flags)}))}else(n?V.validateUser(t).then((function(n){return J.setUser(n),"object"===e(m.bootstrap)?Pe():f?g.loadFlags().catch((function(){return null})).then((function(e){return null==e?(O={},S.fetchFlagSettings(J.getUser(),y).then((function(e){return te(e||{})})).then(Pe).catch((function(e){Oe(new l(W(e)))}))):(O=e,j(Pe),S.fetchFlagSettings(J.getUser(),y).then((function(e){return te(e)})).catch((function(e){return h.maybeReportError(e)})))})):S.fetchFlagSettings(J.getUser(),y).then((function(e){O=e||{},Pe()})).catch((function(e){O={},Oe(e)}))})):Promise.reject(new a(B()))).catch((function(e){return h.maybeReportError(e)}));function Se(e){b=e.environment,J.setUser(e.user),O=r({},e.flags),j(Pe)}function Pe(){p.info(_()),L=!0,ce(),h.emit(Le),h.emit(Fe)}function Oe(e){h.maybeReportError(e),h.emit(xe,e),h.emit(Le)}return{client:{waitForInitialization:function(){return be},waitUntilReady:function(){return me},identify:function(e,n,t){return F?I(Promise.resolve({}),t):q?(p.warn(oe()),I(Promise.resolve(T(O)),t)):I((f&&g?g.clearFlags():Promise.resolve()).then((function(){return V.validateUser(e)})).then((function(e){return J.setUser(e)})).then((function(){return S.fetchFlagSettings(J.getUser(),n)})).then((function(e){var n=T(e);return e?te(e).then((function(){return n})):n})).then((function(e){return v&&Q(),e})).catch((function(e){return h.maybeReportError(e),Promise.reject(e)})),t)},getUser:function(){return J.getUser()},variation:function(e,n){return M(e,n,!0,!1).value},variationDetail:function(e,n){return M(e,n,!0,!0)},track:function(e,n,t){if("string"==typeof e){i.customEventFilter&&!i.customEventFilter(e)&&p.warn(G(e));var r={kind:"custom",key:e,user:J.getUser(),url:i.getCurrentUrl(),creationDate:(new Date).getTime()};null!=n&&(r.data=n),null!=t&&(r.metricValue=t),H(r)}else h.maybeReportError(new c(G(e)))},on:function(e,n,t){he(e)?(d=!0,L&&ce(),h.on(e,n,t)):h.on.apply(h,arguments)},off:function(e){if(h.off.apply(h,arguments),he(e)){var n=!1;h.getEvents().forEach((function(e){he(e)&&h.getEventListenerCount(e)>0&&(n=!0)})),n||(d=!1,v&&void 0===N&&Y())}},setStreaming:function(e){var n=null===e?void 0:e;n!==N&&(N=n,ce())},flush:function(e){return I(w?E.flush():Promise.resolve(),e)},allFlags:function(){var e={};if(!O)return e;for(var n in O)O.hasOwnProperty(n)&&(e[n]=M(n,null,!m.sendEventsOnlyForVariation).value);return e},close:function(e){if(F)return I(Promise.resolve(),e);var n=function(){F=!0,O={}};return I(Promise.resolve().then((function(){if(Y(),w)return E.stop(),E.flush()})).then(n).catch(n),e)}},options:m,emitter:h,ident:J,logger:p,requestor:S,start:function(){w&&E.start()},enqueueEvent:H,getFlagsInternal:function(){return O},getEnvironmentId:function(){return b},internalChangeEventName:Ce}}function Je(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _e(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var Ve={promise:Promise.resolve({status:200,header:function(){return null},body:null})};function ze(e,n,t,r,o){if(o&&!function(){var e=window.navigator&&window.navigator.userAgent;if(e){var n=e.match(/Chrom(e|ium)\/([0-9]+)\./);if(n)return parseInt(n[2],10)<73}return!0}())return Ve;var i=new window.XMLHttpRequest;for(var a in i.open(e,n,!o),t||{})t.hasOwnProperty(a)&&i.setRequestHeader(a,t[a]);if(o)return i.send(r),Ve;var u;return{promise:new Promise((function(e,n){i.addEventListener("load",(function(){u||e({status:i.status,header:function(e){return i.getResponseHeader(e)},body:i.responseText})})),i.addEventListener("error",(function(){u||n(new Error)})),i.send(r)})),cancel:function(){u=!0,i.abort()}}}function He(e){var n,t={};t.synchronousFlush=!1,window.XMLHttpRequest&&(t.httpRequest=function(e,n,r,o){var i=t.synchronousFlush;return t.synchronousFlush=!1,ze(e,n,r,o,i)}),t.httpAllowsPost=function(){return void 0===n&&(n=!!window.XMLHttpRequest&&"withCredentials"in new window.XMLHttpRequest),n};var r,o=e&&e.eventUrlTransformer;t.getCurrentUrl=function(){return o?o(window.location.href):window.location.href},t.isDoNotTrack=function(){var e;return 1===(e=window.navigator&&void 0!==window.navigator.doNotTrack?window.navigator.doNotTrack:window.navigator&&void 0!==window.navigator.msDoNotTrack?window.navigator.msDoNotTrack:window.doNotTrack)||!0===e||"1"===e||"yes"===e};try{window.localStorage&&(t.localStorage={get:function(e){return new Promise((function(n){n(window.localStorage.getItem(e))}))},set:function(e,n){return new Promise((function(t){window.localStorage.setItem(e,n),t()}))},clear:function(e){return new Promise((function(n){window.localStorage.removeItem(e),n()}))}})}catch(e){t.localStorage=null}if(e&&e.useReport&&"function"==typeof window.EventSourcePolyfill&&window.EventSourcePolyfill.supportedOptions&&window.EventSourcePolyfill.supportedOptions.method?(t.eventSourceAllowsReport=!0,r=window.EventSourcePolyfill):(t.eventSourceAllowsReport=!1,r=window.EventSource),window.EventSource){t.eventSourceFactory=function(e,n){var t=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_e(t,!0).forEach((function(n){Je(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_e(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},{heartbeatTimeout:3e5,silentTimeout:3e5,skipDefaultHeaders:!0},{},n);return new r(e,t)},t.eventSourceIsActive=function(e){return e.readyState===window.EventSource.OPEN||e.readyState===window.EventSource.CONNECTING}}return t.userAgent="JSClient",t}var $e=/[|\\{}()[\]^$+*?.]/g,Ke=function(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace($e,"\\$&")};function Me(e,n,t,r){var o,i,a=n.replace(t,"").replace(r,"");switch(e.kind){case"exact":i=n,o=new RegExp("^"+Ke(e.url)+"/?$");break;case"canonical":i=a,o=new RegExp("^"+Ke(e.url)+"/?$");break;case"substring":i=a,o=new RegExp(".*"+Ke(e.substring)+".*$");break;case"regex":i=a,o=new RegExp(e.pattern);break;default:return!1}return o.test(i)}function Ge(e,n){for(var t={},r=null,o=[],i=0;i<e.length;i++)for(var a=e[i],u=a.urls||[],c=0;c<u.length;c++)if(Me(u[c],window.location.href,window.location.search,window.location.hash)){"pageview"===a.kind?n("pageview",a):(o.push(a),n("click_pageview",a));break}return o.length>0&&(r=function(e){for(var t=function(e,n){for(var t=[],r=0;r<n.length;r++)for(var o=e.target,i=n[r],a=i.selector,u=document.querySelectorAll(a);o&&u.length>0;){for(var c=0;c<u.length;c++)o===u[c]&&t.push(i);o=o.parentNode}return t}(e,o),r=0;r<t.length;r++)n("click",t[r])},document.addEventListener("click",r)),t.dispose=function(){document.removeEventListener("click",r)},t}var Xe=300;function Be(e,n){var t,r,o={};function i(){r&&r.dispose(),t&&t.length&&(r=Ge(t,a))}function a(n,t){var r={kind:n,key:t.key,data:null,url:window.location.href,user:e.ident.getUser(),creationDate:(new Date).getTime()};return"click"===n&&(r.selector=t.selector),e.enqueueEvent(r)}return o.goalKeyExists=function(e){if(!t)return!0;for(var n=0;n<t.length;n++)if("custom"===t[n].kind&&t[n].key===e)return!0;return!1},e.requestor.fetchJSON("/sdk/goals/"+e.getEnvironmentId()).then((function(e){e&&e.length>0&&(r=Ge(t=e,a),function(e,n){var t,r=window.location.href;function o(){(t=window.location.href)!==r&&(r=t,n())}!function e(n,t){n(),setTimeout((function(){e(n,t)}),t)}(o,e),window.history&&window.history.pushState?window.addEventListener("popstate",o):window.addEventListener("hashchange",o)}(Xe,i)),n()})).catch((function(t){e.emitter.maybeReportError(new v.LDUnexpectedResponseError((t&&t.message,t.message))),n()})),o}var We="goalsReady",Qe={fetchGoals:!0};function Ye(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=He(t),o=qe(e,n,t,r,Qe),i=o.client,a=o.options,u=o.emitter,c=new Promise((function(e){var n=u.on(We,(function(){u.off(We,n),e()}))}));if(i.waitUntilGoalsReady=function(){return c},a.fetchGoals){var s=Be(o,(function(){return u.emit(We)}));r.customEventFilter=s.goalKeyExists}else u.emit(We);"complete"!==document.readyState?window.addEventListener("load",o.start):o.start();var l=function(){r.synchronousFlush=!0,i.flush().catch((function(){}))};return window.addEventListener("beforeunload",l),window.addEventListener("unload",l),i}var Ze=Te,en="2.15.2";var nn={initialize:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return console&&console.warn&&console.warn(me.deprecated("default export","named LDClient export")),Ye(e,n,t)},version:"2.15.2"};export default nn;export{Ze as createConsoleLogger,Ye as initialize,en as version};
//# sourceMappingURL=ldclient.es.js.map
