/*! algoliasearch.umd.js | 4.0.0-beta.15 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).algoliasearch=t()}(this,(function(){"use strict";function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(r){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(t){e(r,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))}))}return r}function n(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e){var t=e.localStorage||window.localStorage,r="algoliasearch-client-js-".concat(e.key),n=function(){return JSON.parse(t.getItem(r)||"{}")};return{get:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then((function(){var r=JSON.stringify(e),a=n()[r];return Promise.all([a||t(),void 0!==a])})).then((function(e){var t=a(e,2),n=t[0],o=t[1];return Promise.all([n,o||r.miss(n)])})).then((function(e){return a(e,1)[0]}))},set:function(e,a){return Promise.resolve().then((function(){var o=n();return o[JSON.stringify(e)]=a,t.setItem(r,JSON.stringify(o)),a}))},delete:function(e){return Promise.resolve().then((function(){var a=n();delete a[JSON.stringify(e)],t.setItem(r,JSON.stringify(a))}))},clear:function(){return Promise.resolve().then((function(){t.removeItem(r)}))}}}function i(e){var t=o(e.caches),r=t.shift();return void 0===r?{get:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},n=t();return n.then((function(e){return Promise.all([e,r.miss(e)])})).then((function(e){return a(e,1)[0]}))},set:function(e,t){return Promise.resolve(t)},delete:function(e){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return r.get(e,n,a).catch((function(){return i({caches:t}).get(e,n,a)}))},set:function(e,n){return r.set(e,n).catch((function(){return i({caches:t}).set(e,n)}))},delete:function(e){return r.delete(e).catch((function(){return i({caches:t}).delete(e)}))},clear:function(){return r.clear().catch((function(){return i({caches:t}).clear()}))}}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{serializable:!0},t={};return{get:function(r,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},o=JSON.stringify(r);if(o in t)return Promise.resolve(e.serializable?JSON.parse(t[o]):t[o]);var u=n(),i=a&&a.miss||function(){return Promise.resolve()};return u.then((function(e){return i(e)})).then((function(){return u}))},set:function(r,n){return t[JSON.stringify(r)]=e.serializable?JSON.stringify(n):n,Promise.resolve(n)},delete:function(e){return delete t[JSON.stringify(e)],Promise.resolve()},clear:function(){return t={},Promise.resolve()}}}function c(e,t,r){var n={"x-algolia-api-key":r,"x-algolia-application-id":t};return{headers:function(){return e===m.WithinHeaders?n:{}},queryParameters:function(){return e===m.WithinQueryParameters?n:{}}}}function f(e){var t=0;return e((function r(){return t++,new Promise((function(n){setTimeout((function(){n(e(r))}),Math.min(100*t,1e3))}))}))}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e,t){return Promise.resolve()};return Object.assign(e,{wait:function(r){return d(e.then((function(e){return Promise.all([t(e,r),e])})).then((function(e){return e[1]})))}})}function l(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[r],e[r]=n}return e}function p(e,t){return Object.keys(void 0!==t?t:{}).forEach((function(r){e[r]=t[r](e)})),e}function h(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=0;return e.replace(/%s/g,(function(){return encodeURIComponent(r[a++])}))}var m={WithinQueryParameters:0,WithinHeaders:1};function y(e,t){var r=e||{},n=r.data||{};return Object.keys(r).forEach((function(e){-1===["timeout","headers","queryParameters","data","cacheable"].indexOf(e)&&(n[e]=r[e])})),{data:Object.entries(n).length>0?n:void 0,timeout:r.timeout||t,headers:r.headers||{},queryParameters:r.queryParameters||{},cacheable:r.cacheable}}var g={Read:1,Write:2,Any:3},v=1,b=2,P=3;function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v;return r({},e,{status:t,lastUpdate:Date.now()})}function w(e){return{protocol:e.protocol||"https",url:e.url,accept:e.accept}}var j="DELETE",I="GET",x="POST",D="PUT";function q(e,t){return Promise.all(t.map((function(t){return e.get(t,(function(){return Promise.resolve(O(t))}))}))).then((function(e){var r=e.filter((function(e){return function(e){return e.status===v||Date.now()-e.lastUpdate>12e4}(e)})),n=e.filter((function(e){return function(e){return e.status===P&&Date.now()-e.lastUpdate<=12e4}(e)})),a=[].concat(o(r),o(n));return{getTimeout:function(e,t){return(0===n.length&&0===e?1:n.length+3+e)*t},statelessHosts:a.length>0?a.map((function(e){return w(e)})):t}}))}function S(e,t,n,a){var u=[],i=function(e,t){if(e.method===I||void 0===e.data&&void 0===t.data)return;var n=Array.isArray(e.data)?e.data:r({},e.data,{},t.data);return JSON.stringify(n)}(n,a),s=function(e,t){var n=r({},e.headers,{},t.headers),a={};return Object.keys(n).forEach((function(e){var t=n[e];a[e.toLowerCase()]=t})),a}(e,a),c=n.method,f=n.method!==I?{}:r({},n.data,{},a.data),d=r({"x-algolia-agent":e.userAgent.value},e.queryParameters,{},f,{},a.queryParameters),l=0,p=function t(r,o){var f=r.pop();if(void 0===f)throw{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:A(u)};var p={data:i,headers:s,method:c,url:N(f,n.path,d),connectTimeout:o(l,e.timeouts.connect),responseTimeout:o(l,a.timeout)},h=function(e){var t={request:p,response:e,host:f,triesLeft:r.length};return u.push(t),t},m={onSucess:function(e){return function(e){try{return JSON.parse(e.content)}catch(t){throw function(e,t){return{name:"DeserializationError",message:e,response:t}}(t.message,e)}}(e)},onRetry:function(n){var a=h(n);return n.isTimedOut&&l++,Promise.all([e.logger.info("Retryable failure",E(a)),e.hostsCache.set(f,O(f,n.isTimedOut?P:b))]).then((function(){return t(r,o)}))},onFail:function(e){throw h(e),function(e,t){var r=e.content,n=e.status,a=r;try{a=JSON.parse(r).message}catch(e){}return function(e,t,r){return{name:"ApiError",message:e,status:t,transporterStackTrace:r}}(a,n,t)}(e,A(u))}};return e.requester.send(p).then((function(e){return function(e,t){return function(e){var t=e.status;return e.isTimedOut||function(e){var t=e.isTimedOut,r=e.status;return!t&&0==~~r}(e)||2!=~~(t/100)&&4!=~~(t/100)}(e)?t.onRetry(e):2==~~(e.status/100)?t.onSucess(e):t.onFail(e)}(e,m)}))};return q(e.hostsCache,t).then((function(e){return p(o(e.statelessHosts).reverse(),e.getTimeout)}))}function k(e){var t=e.hostsCache,r=e.logger,n=e.requester,o=e.requestsCache,u=e.responsesCache,i=e.timeouts,s=e.userAgent,c=e.hosts,f=e.queryParameters,d={hostsCache:t,logger:r,requester:n,requestsCache:o,responsesCache:u,timeouts:i,userAgent:s,headers:e.headers,queryParameters:f,hosts:c.map((function(e){return w(e)})),read:function(e,t){var r=y(t,d.timeouts.read),n=function(){return S(d,d.hosts.filter((function(e){return 0!=(e.accept&g.Read)})),e,r)};if(!0!==(void 0!==r.cacheable?r.cacheable:e.cacheable))return n();var o={request:e,mappedRequestOptions:r,transporter:{queryParameters:d.queryParameters,headers:d.headers}};return d.responsesCache.get(o,(function(){return d.requestsCache.get(o,(function(){return d.requestsCache.set(o,n()).then((function(e){return Promise.all([d.requestsCache.delete(o),e])}),(function(e){return Promise.all([d.requestsCache.delete(o),Promise.reject(e)])})).then((function(e){var t=a(e,2);t[0];return t[1]}))}))}),{miss:function(e){return d.responsesCache.set(o,e)}})},write:function(e,t){return S(d,d.hosts.filter((function(e){return 0!=(e.accept&g.Write)})),e,y(t,d.timeouts.write))}};return d}function T(e){var t={value:"Algolia for JavaScript (".concat(e,")"),add:function(e){var r="; ".concat(e.segment).concat(void 0!==e.version?" (".concat(e.version,")"):"");return-1===t.value.indexOf(r)&&(t.value="".concat(t.value).concat(r)),t}};return t}function N(e,t,r){var n=R(r),a="".concat(e.protocol,"://").concat(e.url,"/").concat("/"===t.charAt(0)?t.substr(1):t);return n.length&&(a+="?".concat(n)),a}function R(e){return Object.keys(e).map((function(t){return h("%s=%s",t,(r=e[t],"[object Object]"===Object.prototype.toString.call(r)||"[object Array]"===Object.prototype.toString.call(r)?JSON.stringify(e[t]):e[t]));var r})).join("&")}function A(e){return e.map((function(e){return E(e)}))}function E(e){var t=e.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return r({},e,{request:r({},e.request,{headers:r({},e.request.headers,{},t)})})}var C=function(e){return function(t,r){return e.transporter.write({method:x,path:"2/abtests",data:t},r)}},U=function(e){return function(t,r){return e.transporter.write({method:j,path:h("2/abtests/%s",t)},r)}},J=function(e){return function(t,r){return e.transporter.read({method:I,path:h("2/abtests/%s",t)},r)}},z=function(e){return function(t){return e.transporter.read({method:I,path:"2/abtests"},t)}},F=function(e){return function(t,r){return e.transporter.write({method:x,path:h("2/abtests/%s/stop",t)},r)}},H=function(e){return function(t){return e.transporter.read({method:I,path:"1/strategies/personalization"},t)}},K=function(e){return function(t,r){return e.transporter.write({method:x,path:"1/strategies/personalization",data:t},r)}};function W(e){return new Promise((function(t){var r={page:0};return function n(){return e.request(r).then((function(a){return void 0!==e.batch&&e.batch(a.hits),e.shouldStop(a)?t():(r.page++,n())}))}()}))}var B=function(e){return function(t,a){var o=a||{},u=o.queryParameters,i=n(o,["queryParameters"]),s=r({acl:t},void 0!==u?{queryParameters:u}:{});return d(e.transporter.write({method:x,path:"1/keys",data:s},i),(function(t,r){return f((function(n){return Y(e)(t.key,r).catch((function(e){if(404!==e.status)throw e;return n()}))}))}))}},Q=function(e){return function(t,r,n){var a=y(n);return a.headers["X-Algolia-User-ID"]=t,e.transporter.write({method:x,path:"1/clusters/mapping",data:{cluster:r}},a)}},G=function(e){return function(t,r,n){return e.transporter.write({method:x,path:"1/clusters/mapping/batch",data:{users:t,cluster:r}},n)}},M=function(e){return function(t,r,n){return d(e.transporter.write({method:x,path:h("1/indexes/%s/operation",t),data:{operation:"copy",destination:r}},n),(function(r,n){return te(e)(t,{methods:{waitTask:$e}}).waitTask(r.taskID,n)}))}},V=function(e){return function(t,n,a){return M(e)(t,n,r({},a,{scope:[tt.Rules]}))}},L=function(e){return function(t,n,a){return M(e)(t,n,r({},a,{scope:[tt.Settings]}))}},_=function(e){return function(t,n,a){return M(e)(t,n,r({},a,{scope:[tt.Synonyms]}))}},X=function(e){return function(t,r){return d(e.transporter.write({method:j,path:h("1/keys/%s",t)},r),(function(r,n){return f((function(r){return Y(e)(t,n).then(r).catch((function(e){if(404!==e.status)throw e}))}))}))}},Y=function(e){return function(t,r){return e.transporter.read({method:I,path:h("1/keys/%s",t)},r)}},Z=function(e){return function(t){return e.transporter.read({method:I,path:"1/logs"},t)}},$=function(e){return function(t){return e.transporter.read({method:I,path:"1/clusters/mapping/top"},t)}},ee=function(e){return function(t,r){return e.transporter.read({method:I,path:h("1/clusters/mapping/%s",t)},r)}},te=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={transporter:e.transporter,appId:e.appId,indexName:t};return p(n,r.methods)}},re=function(e){return function(t){return e.transporter.read({method:I,path:"1/keys"},t)}},ne=function(e){return function(t){return e.transporter.read({method:I,path:"1/clusters"},t)}},ae=function(e){return function(t){return e.transporter.read({method:I,path:"1/indexes"},t)}},oe=function(e){return function(t){return e.transporter.read({method:I,path:"1/clusters/mapping"},t)}},ue=function(e){return function(t,r,n){return d(e.transporter.write({method:x,path:h("1/indexes/%s/operation",t),data:{operation:"move",destination:r}},n),(function(r,n){return te(e)(t,{methods:{waitTask:$e}}).waitTask(r.taskID,n)}))}},ie=function(e){return function(t,r){return d(e.transporter.write({method:x,path:"1/indexes/*/batch",data:{requests:t}},r),(function(t,r){return Promise.all(Object.keys(t.taskID).map((function(n){return te(e)(n,{methods:{waitTask:$e}}).waitTask(t.taskID[n],r)})))}))}},se=function(e){return function(t,r){return e.transporter.read({method:x,path:"1/indexes/*/objects",data:{requests:t}},r)}},ce=function(e){return function(t,n){var a=t.map((function(e){return r({},e,{params:R(e.params||{})})}));return e.transporter.read({method:x,path:"1/indexes/*/queries",data:{requests:a},cacheable:!0},n)}},fe=function(e){return function(t,a){return Promise.all(t.map((function(t){var o=t.params,u=o.facetName,i=o.facetQuery,s=n(o,["facetName","facetQuery"]);return te(e)(t.indexName,{methods:{searchForFacetValues:_e}}).searchForFacetValues(u,i,r({},a,{},s))})))}},de=function(e){return function(t,r){var n=y(r);return n.headers["X-Algolia-User-ID"]=t,e.transporter.write({method:j,path:"1/clusters/mapping"},n)}},le=function(e){return function(t,r){return d(e.transporter.write({method:x,path:h("1/keys/%s/restore",t)},r),(function(r,n){return f((function(r){return Y(e)(t,n).catch((function(e){if(404!==e.status)throw e;return r()}))}))}))}},pe=function(e){return function(t,r){return e.transporter.read({method:x,path:"1/clusters/mapping/search",data:{query:t}},r)}},he=function(e){return function(t,r){var a=Object.assign({},r),o=r||{},u=o.queryParameters,i=n(o,["queryParameters"]),s=u?{queryParameters:u}:{},c=["acl","indexes","referers","restrictSources","queryParameters","description","maxQueriesPerIPPerHour","maxHitsPerQuery"];return d(e.transporter.write({method:D,path:h("1/keys/%s",t),data:s},i),(function(r,n){return f((function(r){return Y(e)(t,n).then((function(e){return function(e){return Object.keys(a).filter((function(e){return-1!==c.indexOf(e)})).every((function(t){return e[t]===a[t]}))}(e)?Promise.resolve():r()}))}))}))}},me=function(e){return function(t,r){return d(e.transporter.write({method:x,path:h("1/indexes/%s/batch",e.indexName),data:{requests:t}},r),(function(t,r){return $e(e)(t.taskID,r)}))}},ye=function(e){return function(t){return W(r({},t,{shouldStop:function(e){return void 0===e.cursor},request:function(r){return e.transporter.read({method:x,path:h("1/indexes/%s/browse",e.indexName),data:r},t)}}))}},ge=function(e){return function(t){var n=r({hitsPerPage:1e3},t);return W(r({},n,{shouldStop:function(e){return e.hits.length<n.hitsPerPage},request:function(n){return Xe(e)("",r({},t,{},n)).then((function(e){return r({},e,{hits:e.hits.map((function(e){return delete e._highlightResult,e}))})}))}}))}},ve=function(e){return function(t){var n=r({hitsPerPage:1e3},t);return W(r({},n,{shouldStop:function(e){return e.hits.length<n.hitsPerPage},request:function(n){return Ye(e)("",r({},t,{},n)).then((function(e){return r({},e,{hits:e.hits.map((function(e){return delete e._highlightResult,e}))})}))}}))}},be=function(e){return function(t,r,a){var o=a||{},u=o.batchSize,i=n(o,["batchSize"]),s={taskIDs:[],objectIDs:[]};return d(function n(){var a,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,c=[];for(a=o;a<t.length&&(c.push(t[a]),c.length!==(u||1e3));a++);return 0===c.length?Promise.resolve(s):me(e)(c.map((function(e){return{action:r,body:e}})),i).then((function(e){return s.objectIDs=s.objectIDs.concat(e.objectIDs),s.taskIDs.push(e.taskID),a++,n(a)}))}(),(function(t,r){return Promise.all(t.taskIDs.map((function(t){return $e(e)(t,r)})))}))}},Pe=function(e){return function(t){return d(e.transporter.write({method:x,path:h("1/indexes/%s/clear",e.indexName)},t),(function(t,r){return $e(e)(t.taskID,r)}))}},Oe=function(e){return function(t){var r=t||{},a=r.forwardToReplicas,o=y(n(r,["forwardToReplicas"]));return a&&(o.queryParameters.forwardToReplicas=1),d(e.transporter.write({method:x,path:h("1/indexes/%s/rules/clear",e.indexName)},o),(function(t,r){return $e(e)(t.taskID,r)}))}},we=function(e){return function(t){var r=t||{},a=r.forwardToReplicas,o=y(n(r,["forwardToReplicas"]));return a&&(o.queryParameters.forwardToReplicas=1),d(e.transporter.write({method:x,path:h("1/indexes/%s/synonyms/clear",e.indexName)},o),(function(t,r){return $e(e)(t.taskID,r)}))}},je=function(e){return function(t,r){return d(e.transporter.write({method:x,path:h("1/indexes/%s/deleteByQuery",e.indexName),data:t},r),(function(t,r){return $e(e)(t.taskID,r)}))}},Ie=function(e){return function(t){return d(e.transporter.write({method:j,path:h("1/indexes/%s",e.indexName)},t),(function(t,r){return $e(e)(t.taskID,r)}))}},xe=function(e){return function(t,r){return d(De(e)([t],r).then((function(e){return{taskID:e.taskIDs[0]}})),(function(t,r){return $e(e)(t.taskID,r)}))}},De=function(e){return function(t,r){var n=t.map((function(e){return{objectID:e}}));return be(e)(n,et.DeleteObject,r)}},qe=function(e){return function(t,r){var a=r||{},o=a.forwardToReplicas,u=y(n(a,["forwardToReplicas"]));return o&&(u.queryParameters.forwardToReplicas=1),d(e.transporter.write({method:j,path:h("1/indexes/%s/rules/%s",e.indexName,t)},u),(function(t,r){return $e(e)(t.taskID,r)}))}},Se=function(e){return function(t,r){var a=r||{},o=a.forwardToReplicas,u=y(n(a,["forwardToReplicas"]));return o&&(u.queryParameters.forwardToReplicas=1),d(e.transporter.write({method:j,path:h("1/indexes/%s/synonyms/%s",e.indexName,t)},u),(function(t,r){return $e(e)(t.taskID,r)}))}},ke=function(e){return function(t){return Ce(e)(t).then((function(){return!0})).catch((function(e){if(404!==e.status)throw e;return!1}))}},Te=function(e){return function(t,o){var u=o||{},i=u.query,s=u.paginate,c=n(u,["query","paginate"]),f=0;return function n(){return Le(e)(i||"",r({},c,{page:f})).then((function(e){for(var r=0,o=Object.entries(e.hits);r<o.length;r++){var u=a(o[r],2),i=u[0],c=u[1];if(t(c))return{object:c,position:parseInt(i,10),page:f}}if(f++,!1===s||f>=e.nbPages)throw{name:"ObjectNotFoundError",message:"Object not found."};return n()}))}()}},Ne=function(e){return function(t,r){return e.transporter.read({method:I,path:h("1/indexes/%s/%s",e.indexName,t)},r)}},Re=function(){return function(e,t){for(var r=0,n=Object.entries(e.hits);r<n.length;r++){var o=a(n[r],2),u=o[0];if(o[1].objectID===t)return parseInt(u,10)}return-1}},Ae=function(e){return function(t,a){var o=a||{},u=o.attributesToRetrieve,i=n(o,["attributesToRetrieve"]),s=t.map((function(t){return r({indexName:e.indexName,objectID:t},u?{attributesToRetrieve:u}:{})}));return e.transporter.read({method:x,path:"1/indexes/*/objects",data:{requests:s}},i)}},Ee=function(e){return function(t,r){return e.transporter.read({method:I,path:h("1/indexes/%s/rules/%s",e.indexName,t)},r)}},Ce=function(e){return function(t){return e.transporter.read({method:I,path:h("1/indexes/%s/settings",e.indexName),data:{getVersion:2}},t)}},Ue=function(e){return function(t,r){return e.transporter.read({method:I,path:h("1/indexes/%s/synonyms/%s",e.indexName,t)},r)}},Je=function(e){return function(t,r){return d(ze(e)([t],r).then((function(e){return{objectID:e.objectIDs[0],taskID:e.taskIDs[0]}})),(function(t,r){return $e(e)(t.taskID,r)}))}},ze=function(e){return function(t,r){var a=r||{},o=a.createIfNotExists,u=n(a,["createIfNotExists"]),i=o?et.PartialUpdateObject:et.PartialUpdateObjectNoCreate;return be(e)(t,i,u)}},Fe=function(e){return function(t,u){var i=u||{},s=i.safe,c=i.autoGenerateObjectIDIfNotExist,f=i.batchSize,l=n(i,["safe","autoGenerateObjectIDIfNotExist","batchSize"]),p=function(t,r,n,a){return d(e.transporter.write({method:x,path:h("1/indexes/%s/operation",t),data:{operation:n,destination:r}},a),(function(t,r){return $e(e)(t.taskID,r)}))},m=Math.random().toString(36).substring(7),y="".concat(e.indexName,"_tmp_").concat(m),g=Be({appId:e.appId,transporter:e.transporter,indexName:y}),v=[],b=p(e.indexName,y,"copy",r({},l,{scope:["settings","synonyms","rules"]}));return v.push(b),d((s?b.wait(l):b).then((function(){var e=g(t,r({},l,{autoGenerateObjectIDIfNotExist:c,batchSize:f}));return v.push(e),s?e.wait(l):e})).then((function(){var t=p(y,e.indexName,"move",l);return v.push(t),s?t.wait(l):t})).then((function(){return Promise.all(v)})).then((function(e){var t=a(e,3),r=t[0],n=t[1],u=t[2];return{objectIDs:n.objectIDs,taskIDs:[r.taskID].concat(o(n.taskIDs),[u.taskID])}})),(function(e,t){return Promise.all(v.map((function(e){return e.wait(t)})))}))}},He=function(e){return function(t,n){return Ge(e)(t,r({},n,{clearExistingRules:!0}))}},Ke=function(e){return function(t,n){return Ve(e)(t,r({},n,{replaceExistingSynonyms:!0}))}},We=function(e){return function(t,r){return d(Be(e)([t],r).then((function(e){return{objectID:e.objectIDs[0],taskID:e.taskIDs[0]}})),(function(t,r){return $e(e)(t.taskID,r)}))}},Be=function(e){return function(t,r){var a=r||{},o=a.autoGenerateObjectIDIfNotExist,u=n(a,["autoGenerateObjectIDIfNotExist"]),i=o?et.AddObject:et.UpdateObject;if(i===et.UpdateObject){var s=!0,c=!1,f=void 0;try{for(var l,p=t[Symbol.iterator]();!(s=(l=p.next()).done);s=!0){if(void 0===l.value.objectID)return d(Promise.reject({name:"MissingObjectIDError",message:"All objects must have an unique objectID (like a primary key) to be valid. Algolia is also able to generate objectIDs automatically but *it's not recommended*. To do it, use the `{'autoGenerateObjectIDIfNotExist': true}` option."}))}}catch(e){c=!0,f=e}finally{try{s||null==p.return||p.return()}finally{if(c)throw f}}}return be(e)(t,i,u)}},Qe=function(e){return function(t,r){return Ge(e)([t],r)}},Ge=function(e){return function(t,r){var a=r||{},o=a.forwardToReplicas,u=a.clearExistingRules,i=y(n(a,["forwardToReplicas","clearExistingRules"]));return o&&(i.queryParameters.forwardToReplicas=1),u&&(i.queryParameters.clearExistingRules=1),d(e.transporter.write({method:x,path:h("1/indexes/%s/rules/batch",e.indexName),data:t},i),(function(t,r){return $e(e)(t.taskID,r)}))}},Me=function(e){return function(t,r){return Ve(e)([t],r)}},Ve=function(e){return function(t,r){var a=r||{},o=a.forwardToReplicas,u=a.replaceExistingSynonyms,i=y(n(a,["forwardToReplicas","replaceExistingSynonyms"]));return o&&(i.queryParameters.forwardToReplicas=1),u&&(i.queryParameters.replaceExistingSynonyms=1),d(e.transporter.write({method:x,path:h("1/indexes/%s/synonyms/batch",e.indexName),data:t},i),(function(t,r){return $e(e)(t.taskID,r)}))}},Le=function(e){return function(t,r){return e.transporter.read({method:x,path:h("1/indexes/%s/query",e.indexName),data:{query:t},cacheable:!0},r)}},_e=function(e){return function(t,r,n){return e.transporter.read({method:x,path:h("1/indexes/%s/facets/%s/query",e.indexName,t),data:{facetQuery:r},cacheable:!0},n)}},Xe=function(e){return function(t,r){return e.transporter.read({method:x,path:h("1/indexes/%s/rules/search",e.indexName),data:{query:t}},r)}},Ye=function(e){return function(t,r){return e.transporter.read({method:x,path:h("1/indexes/%s/synonyms/search",e.indexName),data:{query:t}},r)}},Ze=function(e){return function(t,r){var a=r||{},o=a.forwardToReplicas,u=y(n(a,["forwardToReplicas"]));return o&&(u.queryParameters.forwardToReplicas=1),d(e.transporter.write({method:D,path:h("1/indexes/%s/settings",e.indexName),data:t},u),(function(t,r){return $e(e)(t.taskID,r)}))}},$e=function(e){return function(t,r){return f((function(n){return function(e){return function(t,r){return e.transporter.read({method:I,path:h("1/indexes/%s/task/%s",e.indexName,t.toString())},r)}}(e)(t,r).then((function(e){return"published"!==e.status?n():void 0}))}))}},et={AddObject:"addObject",UpdateObject:"updateObject",PartialUpdateObject:"partialUpdateObject",PartialUpdateObjectNoCreate:"partialUpdateObjectNoCreate",DeleteObject:"deleteObject"},tt={Settings:"settings",Synonyms:"synonyms",Rules:"rules"},rt=1,nt=2,at=3;function ot(e,t,n){var a,o={appId:e,apiKey:t,timeouts:{connect:1,read:2,write:30},requester:{send:function(e){return new Promise((function(t){var r=new XMLHttpRequest;r.open(e.method,e.url,!0),Object.keys(e.headers).forEach((function(t){return r.setRequestHeader(t,e.headers[t])}));var n,a=function(e,n){return setTimeout((function(){r.abort(),t({status:0,content:n,isTimedOut:!0})}),1e3*e)},o=a(e.connectTimeout,"Connection timeout");r.onreadystatechange=function(){r.readyState>r.OPENED&&void 0===n&&(clearTimeout(o),n=a(e.responseTimeout,"Socket timeout"))},r.onerror=function(){0===r.status&&(clearTimeout(o),clearTimeout(n),t({content:r.responseText||"Network request failed",status:r.status,isTimedOut:!1}))},r.onload=function(){clearTimeout(o),clearTimeout(n),t({content:r.responseText,status:r.status,isTimedOut:!1})},r.send(e.data)}))}},logger:(a=at,{debug:function(e,t){return rt>=a&&console.debug(e,t),Promise.resolve()},info:function(e,t){return nt>=a&&console.info(e,t),Promise.resolve()},error:function(e,t){return console.error(e,t),Promise.resolve()}}),responsesCache:s(),requestsCache:s({serializable:!1}),hostsCache:i({caches:[u({key:"".concat("4.0.0-beta.15","-").concat(e)}),s()]}),userAgent:T("4.0.0-beta.15").add({segment:"Browser"})};return function(e){var t=e.appId,n=c(void 0!==e.authMode?e.authMode:m.WithinHeaders,t,e.apiKey),a=k(r({hosts:[{url:"".concat(t,"-dsn.algolia.net"),accept:g.Read},{url:"".concat(t,".algolia.net"),accept:g.Write}].concat(l([{url:"".concat(t,"-1.algolianet.com"),accept:g.Any},{url:"".concat(t,"-2.algolianet.com"),accept:g.Any},{url:"".concat(t,"-3.algolianet.com"),accept:g.Any}]))},e,{headers:r({},n.headers(),{},{"content-type":"application/x-www-form-urlencoded"},{},e.headers),queryParameters:r({},n.queryParameters(),{},e.queryParameters)}));return p({transporter:a,appId:t,addAlgoliaAgent:function(e,t){a.userAgent.add({segment:e,version:t})},clearCache:function(){return Promise.all([a.requestsCache.clear(),a.responsesCache.clear()]).then((function(){}))}},e.methods)}(r({},o,{},n,{methods:{search:ce,searchForFacetValues:fe,multipleBatch:ie,multipleGetObjects:se,multipleQueries:ce,copyIndex:M,copySettings:L,copySynonyms:_,copyRules:V,moveIndex:ue,listIndices:ae,getLogs:Z,listClusters:ne,multipleSearchForFacetValues:fe,getApiKey:Y,addApiKey:B,listApiKeys:re,updateApiKey:he,deleteApiKey:X,restoreApiKey:le,assignUserID:Q,assignUserIDs:G,getUserID:ee,searchUserIDs:pe,listUserIDs:oe,getTopUserIDs:$,removeUserID:de,initIndex:function(e){return function(t){return te(e)(t,{methods:{batch:me,delete:Ie,getObject:Ne,getObjects:Ae,saveObject:We,saveObjects:Be,search:Le,searchForFacetValues:_e,waitTask:$e,setSettings:Ze,getSettings:Ce,partialUpdateObject:Je,partialUpdateObjects:ze,deleteObject:xe,deleteObjects:De,deleteBy:je,clearObjects:Pe,browseObjects:ye,getObjectPosition:Re,findObject:Te,exists:ke,saveSynonym:Me,saveSynonyms:Ve,getSynonym:Ue,searchSynonyms:Ye,browseSynonyms:ve,deleteSynonym:Se,clearSynonyms:we,replaceAllObjects:Fe,replaceAllSynonyms:Ke,searchRules:Xe,getRule:Ee,deleteRule:qe,saveRule:Qe,saveRules:Ge,replaceAllRules:He,browseRules:ge,clearRules:Oe}})}},initAnalytics:function(){return function(e){return function(e){var t=e.region||"us",n=c(m.WithinHeaders,e.appId,e.apiKey),a=k(r({hosts:[{url:"analytics.".concat(t,".algolia.com"),accept:g.Any}]},e,{headers:r({},n.headers(),{},{"content-type":"application/json"},{},e.headers),queryParameters:r({},n.queryParameters(),{},e.queryParameters)}));return p({appId:e.appId,transporter:a},e.methods)}(r({},o,{},e,{methods:{addABTest:C,getABTest:J,getABTests:z,stopABTest:F,deleteABTest:U}}))}},initRecommendation:function(){return function(e){return function(e){var t=e.region||"us",n=c(m.WithinHeaders,e.appId,e.apiKey),a=k(r({hosts:[{url:"recommendation.".concat(t,".algolia.com"),accept:g.Any}]},e,{headers:r({},n.headers(),{},{"content-type":"application/json"},{},e.headers),queryParameters:r({},n.queryParameters(),{},e.queryParameters)}));return p({appId:e.appId,transporter:a},e.methods)}(r({},o,{},e,{methods:{getPersonalizationStrategy:H,setPersonalizationStrategy:K}}))}}}}))}return ot.version="4.0.0-beta.15",ot}));
