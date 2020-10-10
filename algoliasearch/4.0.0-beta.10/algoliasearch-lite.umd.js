/*! algoliasearch-lite.umd.js | 4.0.0-beta.10 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).algoliasearch=t()}(this,(function(){"use strict";function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(r){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){e(r,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e){var t=e.localStorage||window.localStorage,r="algoliasearch-client-js-".concat(e.key),n=function(){return JSON.parse(t.getItem(r)||"{}")};return{get:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then((function(){var r=JSON.stringify(e),o=n()[r];return Promise.all([o||t(),void 0!==o])})).then((function(e){var t=o(e,2),n=t[0],a=t[1];return Promise.all([n,a||r.miss(n)])})).then((function(e){return o(e,1)[0]}))},set:function(e,o){return Promise.resolve().then((function(){var a=n();return a[JSON.stringify(e)]=o,t.setItem(r,JSON.stringify(a)),o}))},delete:function(e){return Promise.resolve().then((function(){var o=n();delete o[JSON.stringify(e)],t.setItem(r,JSON.stringify(o))}))}}}function i(e){var t=a(e.caches),r=t.shift();return void 0===r?{get:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},n=t();return n.then((function(e){return Promise.all([e,r.miss(e)])})).then((function(e){return o(e,1)[0]}))},set:function(e,t){return Promise.resolve(t)},delete:function(e){return Promise.resolve()}}:{get:function(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return r.get(e,n,o).catch((function(){return i({caches:t}).get(e,n,o)}))},set:function(e,n){return r.set(e,n).catch((function(){return i({caches:t}).set(e,n)}))},delete:function(e){return r.delete(e).catch((function(){return i({caches:t}).delete(e)}))}}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{serializable:!0},t={};return{get:function(r,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},a=JSON.stringify(r);if(a in t)return Promise.resolve(e.serializable?JSON.parse(t[a]):t[a]);var u=n(),i=o&&o.miss||function(){return Promise.resolve()};return u.then((function(e){return i(e)})).then((function(){return u}))},set:function(r,n){return t[JSON.stringify(r)]=e.serializable?JSON.stringify(n):n,Promise.resolve(n)},delete:function(e){return delete t[JSON.stringify(e)],Promise.resolve()}}}function c(e,t){return Object.keys(void 0!==t?t:{}).forEach((function(r){e[r]=t[r](e)})),e}function l(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=0;return e.replace(/%s/g,(function(){return encodeURIComponent(r[o++])}))}var f="4.0.0-beta.10",d={WithinQueryParameters:0,WithinHeaders:1};function h(e,t){var r=e||{},n={};return Object.keys(r).forEach((function(e){-1===["timeout","headers","queryParameters","data","cacheable"].indexOf(e)&&(n[e]=r[e])})),{data:n,timeout:r.timeout||t,headers:r.headers||{},queryParameters:r.queryParameters||{},cacheable:r.cacheable}}var m={Read:1,Write:2,Any:3},p={Up:1,Down:2,Timeouted:3},g=12e4;function v(e){return r({},e,{status:arguments.length>1&&void 0!==arguments[1]?arguments[1]:p.Up,lastUpdate:Date.now()})}function y(e){return{protocol:e.protocol||"https",url:e.url,accept:e.accept}}function b(e,t){return Promise.all(t.map((function(t){return e.get(t,(function(){return Promise.resolve(v(t))}))}))).then((function(e){var r=e.filter((function(e){return function(e){return e.status===p.Up||Date.now()-e.lastUpdate>g}(e)})),n=e.filter((function(e){return function(e){return e.status===p.Timeouted&&Date.now()-e.lastUpdate<=g}(e)})),o=[].concat(a(r),a(n));return{getTimeout:function(e,t){return(0===n.length&&0===e?1:n.length+3+e)*t},statelessHosts:o.length>0?o.map((function(e){return y(e)})):t}}))}var O=function(e,t){return function(e){var t=e.status;return e.isTimedOut||function(e){var t=e.isTimedOut,r=e.status;return!t&&0==~~r}(e)||2!=~~(t/100)&&4!=~~(t/100)}(e)?t.onRetry(e):2==~~(e.status/100)?t.onSucess(e):t.onFail(e)};function P(e,t,n,o){var u=[],i=function(e,t){var n=Array.isArray(e.data)?e.data:r({},e.data,{},t.data);if(n.constructor===Object&&0===Object.entries(n).length)return"";return JSON.stringify(n)}(n,o),s=r({},e.headers,{},o.headers),c=n.method,l=r({},e.queryParameters,{},o.queryParameters,{"x-algolia-agent":e.userAgent.value}),f=0,d=function t(r,a){var d=r.pop();if(void 0===d)throw function(e){return{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",stackTrace:e}}(u);var h={data:i,headers:s,method:c,url:w(d,n.path,l),connectTimeout:a(f,e.timeouts.connect),responseTimeout:a(f,o.timeout)},m={onSucess:function(e){return function(e){try{return JSON.parse(e.content)}catch(t){throw function(e,t){return{name:"DeserializationError",message:e,response:t}}(t.message,e)}}(e)},onRetry:function(n){var o={request:h,response:n,host:d,triesLeft:r.length};return u.push(o),n.isTimedOut&&f++,Promise.all([e.logger.debug("Retryable failure",o),e.hostsCache.set(d,v(d,n.isTimedOut?p.Timeouted:p.Down))]).then((function(){return t(r,a)}))},onFail:function(e){throw function(e){var t=e.content,r=e.status,n=t;try{n=JSON.parse(t).message}catch(e){}return function(e,t){return{name:"ApiError",message:e,status:t}}(n,r)}(e)}};return e.requester.send(h).then((function(e){return O(e,m)}))};return b(e.hostsCache,t).then((function(e){return d(a(e.statelessHosts).reverse(),e.getTimeout)}))}function j(e){var t={value:"Algolia for JavaScript (".concat(e,")"),add:function(e){var r="; ".concat(e.segment).concat(void 0!==e.version?" (".concat(e.version,")"):"");return-1===t.value.indexOf(r)&&(t.value="".concat(t.value).concat(r)),t}};return t}function w(e,t,r){var n=S(r),o="".concat(e.protocol,"://").concat(e.url,"/").concat("/"===t.charAt(0)?t.substr(1):t);return n.length&&(o+="?".concat(n)),o}function S(e){return Object.keys(e).map((function(t){return l("%s=%s",t,(r=e[t],"[object Object]"===Object.prototype.toString.call(r)||"[object Array]"===Object.prototype.toString.call(r)?JSON.stringify(e[t]):e[t]));var r})).join("&")}var q=function(e){var t=e.appId,n=function(e){var t={hostsCache:e.hostsCache,logger:e.logger,requester:e.requester,requestsCache:e.requestsCache,responsesCache:e.responsesCache,timeouts:e.timeouts,userAgent:e.userAgent,headers:{},queryParameters:{},hosts:[],addHeaders:function(e){Object.assign(t.headers,e)},addQueryParameters:function(e){Object.assign(t.queryParameters,e)},setHosts:function(e){t.hosts=e.map((function(e){return y(e)}))},read:function(e,r){var n=h(r,t.timeouts.read),a=function(){return P(t,t.hosts.filter((function(e){return 0!=(e.accept&m.Read)})),e,n)};if(!0!==(void 0!==n.cacheable?n.cacheable:e.cacheable))return a();var u={request:e,mappedRequestOptions:n,transporter:{queryParameters:t.queryParameters,headers:t.headers}};return t.responsesCache.get(u,(function(){return t.requestsCache.get(u,(function(){return t.requestsCache.set(u,a()).then((function(e){return Promise.all([t.requestsCache.delete(u),e])}),(function(e){return Promise.all([t.requestsCache.delete(u),Promise.reject(e)])})).then((function(e){var t=o(e,2);t[0];return t[1]}))}))}),{miss:function(e){return t.responsesCache.set(u,e)}})},write:function(e,r){return P(t,t.hosts.filter((function(e){return 0!=(e.accept&m.Write)})),e,h(r,t.timeouts.write))}};return t}(e);n.setHosts([{url:"".concat(t,"-dsn.algolia.net"),accept:m.Read},{url:"".concat(t,".algolia.net"),accept:m.Write}].concat(function(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[r],e[r]=n}return e}([{url:"".concat(t,"-1.algolianet.com"),accept:m.Any},{url:"".concat(t,"-2.algolianet.com"),accept:m.Any},{url:"".concat(t,"-3.algolianet.com"),accept:m.Any}])));var a=function(e,t,r){var n={"x-algolia-api-key":r,"x-algolia-application-id":t};return{headers:function(){return e===d.WithinHeaders?n:{}},queryParameters:function(){return e===d.WithinQueryParameters?n:{}}}}(void 0!==e.authMode?e.authMode:d.WithinHeaders,t,e.apiKey);return n.addHeaders(r({},a.headers(),{},{"content-type":"application/x-www-form-urlencoded"})),n.addQueryParameters(a.queryParameters()),c({transporter:n,appId:t,addAlgoliaAgent:function(e,t){n.userAgent.add({segment:e,version:t})}},e.methods)},T="POST",A=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={transporter:e.transporter,appId:e.appId,indexName:t};return c(n,r.methods)}},N=function(e){return function(t,n){var o=t.map((function(e){return r({},e,{params:S(e.params||{})})}));return e.transporter.read({method:T,path:"1/indexes/*/queries",data:{requests:o},cacheable:!0},n)}},x=function(e){return function(t,o){return Promise.all(t.map((function(t){var a=t.params,u=a.facetName,i=a.facetQuery,s=n(a,["facetName","facetQuery"]);return A(e)(t.indexName,{methods:{searchForFacetValues:I}}).searchForFacetValues(u,i,r({},o,{},s))})))}},C=function(e){return function(t,r){return e.transporter.read({method:T,path:l("1/indexes/%s/query",e.indexName),data:{query:t},cacheable:!0},r)}},I=function(e){return function(t,r,n){return e.transporter.read({method:T,path:l("1/indexes/%s/facets/%s/query",e.indexName,t),data:{facetQuery:r},cacheable:!0},n)}},J={Debug:1,Info:2,Error:3};return function(e,t){var r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=(r=n.logLevel||J.Error,{debug:function(e,t){return J.Debug>=r&&console.debug(e,t),Promise.resolve()},info:function(e,t){return J.Info>=r&&console.info(e,t),Promise.resolve()},error:function(e,t){return console.error(e,t),Promise.resolve()}});return q({appId:e,apiKey:t,timeouts:{connect:1,read:2,write:30},requester:{send:function(e){return new Promise((function(t){var r=new XMLHttpRequest;r.open(e.method,e.url,!0),Object.keys(e.headers).forEach((function(t){return r.setRequestHeader(t,e.headers[t])}));var n,o=function(e,n){return setTimeout((function(){r.abort(),t({status:0,content:n,isTimedOut:!0})}),1e3*e)},a=o(e.connectTimeout,"Connection timeout");r.onreadystatechange=function(){r.readyState>r.OPENED&&void 0===n&&(clearTimeout(a),n=o(e.responseTimeout,"Socket timeout"))},r.onerror=function(){0===r.status&&(clearTimeout(a),clearTimeout(n),t({content:r.responseText||"Network request failed",status:r.status,isTimedOut:!1}))},r.onload=function(){clearTimeout(a),clearTimeout(n),t({content:r.responseText,status:r.status,isTimedOut:!1})},r.send(e.data)}))}},logger:o,responsesCache:s(),requestsCache:s({serializable:!1}),hostsCache:i({caches:[u({key:"".concat(f,"-").concat(e)}),s()]}),userAgent:j(f).add({segment:"Browser",version:"lite"}),authMode:d.WithinQueryParameters,methods:{search:N,searchForFacetValues:x,multipleQueries:N,multipleSearchForFacetValues:x,initIndex:function(e){return function(t){return A(e)(t,{methods:{search:C,searchForFacetValues:I}})}}}})}}));
