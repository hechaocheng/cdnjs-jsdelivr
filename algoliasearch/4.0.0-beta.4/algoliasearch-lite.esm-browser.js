const e={Debug:1,Info:2,Error:3};function t(e,t={debug:(e,t)=>Promise.resolve(),info:(e,t)=>Promise.resolve(),error:(e,t)=>Promise.resolve()},r=window.localStorage){const s=`algoliasearch-client-js-${e}`,a="LocalStorage is not available or json could not be decoded.",o=()=>JSON.parse(r.getItem(s)||"{}");return{get(e,r,s={miss:()=>Promise.resolve()}){try{const t=JSON.stringify(e),r=o()[t];if(void 0!==r)return Promise.resolve(r)}catch(e){t.debug(a)}const n=r();return n.then(e=>s.miss(e)).then(()=>n)},set(e,n){try{const t=o();t[JSON.stringify(e)]=n,r.setItem(s,JSON.stringify(t))}catch(e){t.debug(a)}return Promise.resolve(n)},delete(e){try{const t=o();delete t[JSON.stringify(e)],r.setItem(s,JSON.stringify(t))}catch(e){t.debug(a)}return Promise.resolve()},clear(){try{r.removeItem(s)}catch(e){t.debug(a)}return Promise.resolve()}}}function r(){let e={};return{get(t,r,s={miss:()=>Promise.resolve()}){const a=JSON.stringify(t);if(a in e)return Promise.resolve(e[a]);const o=r(),n=s&&s.miss||(()=>Promise.resolve());return o.then(e=>n(e)).then(()=>o)},set:(t,r)=>(e[JSON.stringify(t)]=r,Promise.resolve(r)),delete:t=>(delete e[JSON.stringify(t)],Promise.resolve()),clear:()=>(e={},Promise.resolve())}}function s(e,t){return Object.keys(void 0!==t?t:{}).forEach(r=>{e[r]=t[r](e)}),e}function a(e,...t){let r=0;return e.replace(/%s/g,()=>encodeURIComponent(t[r++]))}const o="4.0.0-beta.4",n={WithinQueryParameters:0,WithinHeaders:1};const i=(e,t,r)=>(e=>{const t=e.status;return e.isTimedOut||(({isTimedOut:e,status:t})=>!e&&0==~~t)(e)||2!=~~(t/100)&&4!=~~(t/100)})(t)?(t.isTimedOut||e.setAsDown(),r.onRetry(t)):(({status:e})=>2==~~(e/100))(t)?r.onSucess(t):r.onFail(t);function c(e,t,r,s){const a=[];let o=0;const n=function(e,t){const r=Array.isArray(e.data)?e.data:{...e.data,...t.data};if(r.constructor===Object&&0===Object.entries(r).length)return"";return JSON.stringify(r)}(r,s),c={...e.headers,...s.headers},u=r.method,l=t=>{const d=t.pop();if(void 0===d)throw function(e){return{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",stackTrace:e}}(a);const h={data:n,headers:c,method:u,url:m(d,r.path,{...e.queryParameters,...s.queryParameters,"x-algolia-agent":e.userAgent.value}),timeout:(o+1)*(s.timeout?s.timeout:0)},p={onSucess:e=>(function(e){try{return JSON.parse(e.content)}catch(t){throw function(e,t){return{name:"DeserializationError",message:e,response:t}}(t.message,e)}})(e),onRetry(r){const s={request:h,response:r,host:d,triesLeft:t.length,timeoutRetries:o};return a.push(s),r.isTimedOut&&o++,Promise.all([e.logger.debug("Retryable failure",s),e.hostsCache.set({url:d.url},d)]).then(()=>l(t))},onFail(e){throw function({content:e,status:t}){let r=e;try{r=JSON.parse(e).message}catch(e){}return function(e,t){return{name:"ApiError",message:e,status:t}}(r,t)}(e)}};return e.requester.send(h).then(e=>i(d,e,p))};return function(e,t){return Promise.all(t.map(t=>e.get({url:t.url},()=>Promise.resolve(t)).then(e=>Object.assign(t,{downDate:e.downDate,up:e.up})))).then(e=>e.filter(e=>e.isUp()).reverse())}(e.hostsCache,t).then(e=>l(e))}function u(e){const{hostsCache:t,logger:r,requester:s,requestsCache:a,responsesCache:o,timeouts:n,userAgent:i}=e,u={hostsCache:t,logger:r,requester:s,requestsCache:a,responsesCache:o,timeouts:n,userAgent:i,headers:{},queryParameters:{},hosts:[],addHeaders(e){Object.assign(u.headers,e)},addQueryParameters(e){Object.assign(u.queryParameters,e)},setHosts(e){u.hosts=e.map(e=>(function(e,t){const r={url:e,accept:t,downDate:0,up:!0,setAsDown(){r.downDate=Date.now(),r.up=!1},isUp:()=>(!r.up&&Date.now()-r.downDate>3e5&&(r.up=!0),r.up)};return r})(e.url,e.accept))},read(e,t){const r=d(t,u.timeouts.read),s={request:e,mappedRequestOptions:r},a=()=>c(u,u.hosts.filter(e=>0!=(e.accept&p.Read)),e,r);return!0!==(void 0!==r.cacheable?r.cacheable:e.cacheable)?a():u.responsesCache.get(s,()=>u.requestsCache.get(s,()=>u.requestsCache.set(s,a()).then(e=>Promise.all([u.requestsCache.delete(s),e]),e=>Promise.all([u.requestsCache.delete(s),Promise.reject(e)])).then(e=>e[1])),{miss:e=>u.responsesCache.set(s,e)})},write:(e,t)=>c(u,u.hosts.filter(e=>0!=(e.accept&p.Write)),e,d(t,u.timeouts.write))};return u}function l(e){const t={value:`Algolia for JavaScript (${e})`,add:e=>(t.value=`${t.value}; ${e.segment}${void 0!==e.version?` (${e.version})`:""}`,t)};return t}function d(e,t){const r=e||{},s={};return Object.keys(r).forEach(e=>{-1===["timeout","headers","queryParameters","data","cacheable"].indexOf(e)&&(s[e]=r[e])}),{data:s,timeout:r.timeout||t,headers:r.headers||{},queryParameters:r.queryParameters||{},cacheable:r.cacheable}}function m(e,t,r){const s=h(r);let a=`https://${e.url}/${t}`;return s.length&&(a+=`?${s}`),a}function h(e){return Object.keys(e).map(t=>a("%s=%s",t,(e=>"[object Object]"===Object.prototype.toString.call(e)||"[object Array]"===Object.prototype.toString.call(e))(e[t])?JSON.stringify(e[t]):e[t])).join("&")}const p={Read:1,Write:2,Any:3},g=e=>{const t=e.appId,r=u(e);r.setHosts([{url:`${t}-dsn.algolia.net`,accept:p.Read},{url:`${t}.algolia.net`,accept:p.Write}].concat(function(e){let t=e.length-1;for(;t>0;t--){const r=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[r],e[r]=s}return e}([{url:`${t}-1.algolianet.com`,accept:p.Any},{url:`${t}-2.algolianet.com`,accept:p.Any},{url:`${t}-3.algolianet.com`,accept:p.Any}])));const a=function(e,t,r){const s={"x-algolia-api-key":r,"x-algolia-application-id":t};return{headers:()=>e===n.WithinHeaders?s:{},queryParameters:()=>e===n.WithinQueryParameters?s:{}}}(void 0!==e.authMode?e.authMode:n.WithinHeaders,t,e.apiKey);return r.addHeaders({...a.headers(),"content-type":"application/x-www-form-urlencoded"}),r.addQueryParameters(a.queryParameters()),s({transporter:r,appId:t,addAlgoliaAgent(e,t){r.userAgent.add({segment:e,version:t})}},e.methods)},f="POST",y=e=>(t,r={})=>{return s({transporter:e.transporter,appId:e.appId,indexName:t},r.methods)},b=e=>(t,r)=>{const s=t.map(e=>({...e,params:h(e.params||{})}));return e.transporter.read({method:f,path:"1/indexes/*/queries",data:{requests:s},cacheable:!0},r)},P=e=>(t,r)=>Promise.all(t.map(t=>{const{facetName:s,facetQuery:a,...o}=t.params;return y(e)(t.indexName,{methods:{searchForFacetValues:O}}).searchForFacetValues(s,a,{...r,...o})})),v=e=>(t,r)=>e.transporter.read({method:f,path:a("1/indexes/%s/query",e.indexName),data:{query:t},cacheable:!0},r),O=e=>(t,r,s)=>e.transporter.read({method:f,path:a("1/indexes/%s/facets/%s/query",e.indexName,t),data:{facetQuery:r},cacheable:!0},s);function q(s,a,i={}){const c=(u=i.logLevel||e.Error,{debug:(t,r)=>(e.Debug>=u&&console.debug(t,r),Promise.resolve()),info:(t,r)=>(e.Info>=u&&console.info(t,r),Promise.resolve()),error:(e,t)=>(console.error(e,t),Promise.resolve())});var u;return g({appId:s,apiKey:a,timeouts:{read:1,write:30},requester:{send:e=>new Promise(t=>{const r=new XMLHttpRequest;r.open(e.method,e.url,!0),Object.keys(e.headers).forEach(t=>r.setRequestHeader(t,e.headers[t]));const s=setTimeout(()=>{r.abort(),t({status:0,content:"",isTimedOut:!0})},1e3*e.timeout);r.onerror=()=>{0===r.status&&(clearTimeout(s),t({content:r.responseText||"Network request failed",status:r.status,isTimedOut:!1}))},r.onload=()=>{clearTimeout(s),t({content:r.responseText,status:r.status,isTimedOut:!1})},r.send(e.data)})},logger:c,responsesCache:r(),requestsCache:r(),hostsCache:t(o,c),userAgent:l(o).add({segment:"Browser",version:"lite"}),authMode:n.WithinQueryParameters,methods:{search:b,searchForFacetValues:P,multipleQueries:b,multipleSearchForFacetValues:P,initIndex:e=>t=>y(e)(t,{methods:{search:v,searchForFacetValues:O}})}})}window.algoliasearch=q;export default q;
