const e={Debug:1,Info:2,Error:3};function t(e,t={debug:(e,t)=>Promise.resolve(),info:(e,t)=>Promise.resolve(),error:(e,t)=>Promise.resolve()},r=window.localStorage){const s=`algoliasearch-client-js-${e}`,a="LocalStorage is not available or json could not be decoded.",o=()=>JSON.parse(r.getItem(s)||"{}");return{get(e,r,s={miss:()=>Promise.resolve()}){try{const t=JSON.stringify(e),r=o()[t];if(void 0!==r)return Promise.resolve(r)}catch(e){t.debug(a)}const n=r();return n.then(e=>s.miss(e)).then(()=>n)},set(e,n){try{const t=o();t[JSON.stringify(e)]=n,r.setItem(s,JSON.stringify(t))}catch(e){t.debug(a)}return Promise.resolve(n)},delete(e){try{const t=o();delete t[JSON.stringify(e)],r.setItem(s,JSON.stringify(t))}catch(e){t.debug(a)}return Promise.resolve()},clear(){try{r.removeItem(s)}catch(e){t.debug(a)}return Promise.resolve()}}}function r(){let e={};return{get(t,r,s={miss:()=>Promise.resolve()}){const a=JSON.stringify(t);if(a in e)return Promise.resolve(Object.assign({},e[a]));const o=r(),n=s&&s.miss||(()=>Promise.resolve());return o.then(e=>n(e)).then(()=>o)},set:(t,r)=>(e[JSON.stringify(t)]=r,Promise.resolve(r)),delete:t=>(delete e[JSON.stringify(t)],Promise.resolve()),clear:()=>(e={},Promise.resolve())}}function s(e,t,r){const s={"x-algolia-api-key":r,"x-algolia-application-id":t};return{headers:()=>e===d.WithinHeaders?s:{},queryParameters:()=>e===d.WithinQueryParameters?s:{}}}function a(e){let t=0;const r=()=>(t++,new Promise(s=>{setTimeout(()=>{s(e(r))},Math.min(100*t,1e3))}));return e(r)}function o(e,t=((e,t)=>Promise.resolve())){return Object.assign(e,{wait:r=>o(e.then(e=>Promise.all([t(e,r),e])).then(e=>e[1]))})}function n(e,t){return Object.keys(void 0!==t?t:{}).forEach(r=>{e[r]=t[r](e)}),e}function i(e,...t){let r=0;return e.replace(/%s/g,()=>encodeURIComponent(t[r++]))}const c="4.0.0-beta.8",d={WithinQueryParameters:0,WithinHeaders:1},u=3e5;const l=(e,t,r)=>(e=>{const t=e.status;return e.isTimedOut||(({isTimedOut:e,status:t})=>!e&&0==~~t)(e)||2!=~~(t/100)&&4!=~~(t/100)})(t)?(t.isTimedOut||e.setAsDown(),r.onRetry(t)):(({status:e})=>2==~~(e/100))(t)?r.onSucess(t):r.onFail(t);function h(e,t,r,s){const a=[];let o=0;const n=function(e,t){const r=Array.isArray(e.data)?e.data:{...e.data,...t.data};if(r.constructor===Object&&0===Object.entries(r).length)return"";return JSON.stringify(r)}(r,s),i={...e.headers,...s.headers},c=r.method,d=t=>{const u=t.pop();if(void 0===u)throw function(e){return{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",stackTrace:e}}(a);const h=o+1,p={data:n,headers:i,method:c,url:b(u,r.path,{...e.queryParameters,...s.queryParameters,"x-algolia-agent":e.userAgent.value}),connectTimeout:h*e.timeouts.connect,socketTimeout:h*(s.timeout||0)},m={onSucess:e=>(function(e){try{return JSON.parse(e.content)}catch(t){throw function(e,t){return{name:"DeserializationError",message:e,response:t}}(t.message,e)}})(e),onRetry(r){const s={request:p,response:r,host:u,triesLeft:t.length,timeoutRetries:o};return a.push(s),r.isTimedOut&&o++,Promise.all([e.logger.debug("Retryable failure",s),e.hostsCache.set({url:u.url},u)]).then(()=>d(t))},onFail(e){throw function({content:e,status:t}){let r=e;try{r=JSON.parse(e).message}catch(e){}return function(e,t){return{name:"ApiError",message:e,status:t}}(r,t)}(e)}};return e.requester.send(p).then(e=>l(u,e,m))};return function(e,t){return Promise.all(t.map(t=>e.get({url:t.url},()=>Promise.resolve(t)).then(e=>Object.assign(t,{downDate:e.downDate,up:e.up})))).then(e=>e.filter(e=>e.isUp()).reverse())}(e.hostsCache,t).then(e=>d(e))}function p(e){const{hostsCache:t,logger:r,requester:s,requestsCache:a,responsesCache:o,timeouts:n,userAgent:i}=e,c={hostsCache:t,logger:r,requester:s,requestsCache:a,responsesCache:o,timeouts:n,userAgent:i,headers:{},queryParameters:{},hosts:[],addHeaders(e){Object.assign(c.headers,e)},addQueryParameters(e){Object.assign(c.queryParameters,e)},setHosts(e){c.hosts=e.map(e=>(function(e){const t={protocol:e.protocol||"https",url:e.url,accept:e.accept,downDate:0,up:!0,setAsDown(){t.downDate=Date.now(),t.up=!1},isUp:()=>(!t.up&&Date.now()-t.downDate>u&&(t.up=!0),t.up)};return t})(e))},read(e,t){const r=y(t,c.timeouts.read),s={request:e,mappedRequestOptions:r},a=()=>h(c,c.hosts.filter(e=>0!=(e.accept&x.Read)),e,r);return!0!==(void 0!==r.cacheable?r.cacheable:e.cacheable)?a():c.responsesCache.get(s,()=>c.requestsCache.get(s,()=>c.requestsCache.set(s,a()).then(e=>Promise.all([c.requestsCache.delete(s),e]),e=>Promise.all([c.requestsCache.delete(s),Promise.reject(e)])).then(e=>e[1])),{miss:e=>c.responsesCache.set(s,e)})},write:(e,t)=>h(c,c.hosts.filter(e=>0!=(e.accept&x.Write)),e,y(t,c.timeouts.write))};return c}function m(e){const t={value:`Algolia for JavaScript (${e})`,add(e){const r=`; ${e.segment}${void 0!==e.version?` (${e.version})`:""}`;return-1===t.value.indexOf(r)&&(t.value=`${t.value}${r}`),t}};return t}function y(e,t){const r=e||{},s={};return Object.keys(r).forEach(e=>{-1===["timeout","headers","queryParameters","data","cacheable"].indexOf(e)&&(s[e]=r[e])}),{data:s,timeout:r.timeout||t,headers:r.headers||{},queryParameters:r.queryParameters||{},cacheable:r.cacheable}}function g(e,t,r){if(void 0!==e&&t in e){const r=e[t];return delete e[t],r}return r}function b(e,t,r){const s=f(r);let a=`${e.protocol}://${e.url}/${"/"===t.charAt(0)?t.substr(1):t}`;return s.length&&(a+=`?${s}`),a}function f(e){return Object.keys(e).map(t=>i("%s=%s",t,(e=>"[object Object]"===Object.prototype.toString.call(e)||"[object Array]"===Object.prototype.toString.call(e))(e[t])?JSON.stringify(e[t]):e[t])).join("&")}const x={Read:1,Write:2,Any:3},P=e=>{const t=e.region||"us",r=s(d.WithinHeaders,e.appId,e.apiKey),a=p(e),o=e.appId;return a.setHosts([{url:`analytics.${t}.algolia.com`,accept:x.Any}]),a.addHeaders({...r.headers(),"content-type":"application/json"}),a.addQueryParameters(r.queryParameters()),n({appId:o,transporter:a},e.methods)},O="DELETE",j="GET",w="POST",v="PUT",I=e=>(t,r)=>e.transporter.write({method:w,path:"2/abtests",data:t},r),D=e=>(t,r)=>e.transporter.write({method:O,path:i("2/abtests/%s",t)},r),k=e=>(t,r)=>e.transporter.read({method:j,path:i("2/abtests/%s",t)},r),q=e=>t=>e.transporter.read({method:j,path:"2/abtests"},t),N=e=>(t,r)=>e.transporter.write({method:w,path:i("2/abtests/%s/stop",t)},r);function S(e){return new Promise(t=>{const r={page:0},s=()=>e.request(r).then(a=>(void 0!==e.batch&&e.batch(a.hits),e.shouldStop(a)?t():(r.page++,s())));return s()})}const T=e=>{const t=e.appId,r=p(e);r.setHosts([{url:`${t}-dsn.algolia.net`,accept:x.Read},{url:`${t}.algolia.net`,accept:x.Write}].concat(function(e){let t=e.length-1;for(;t>0;t--){const r=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[r],e[r]=s}return e}([{url:`${t}-1.algolianet.com`,accept:x.Any},{url:`${t}-2.algolianet.com`,accept:x.Any},{url:`${t}-3.algolianet.com`,accept:x.Any}])));const a=s(void 0!==e.authMode?e.authMode:d.WithinHeaders,t,e.apiKey);return r.addHeaders({...a.headers(),"content-type":"application/x-www-form-urlencoded"}),r.addQueryParameters(a.queryParameters()),n({transporter:r,appId:t,addAlgoliaAgent(e,t){r.userAgent.add({segment:e,version:t})}},e.methods)};const A=e=>(t,r)=>{const s=g(r,"queryParameters"),n={acl:t,...void 0!==s?{queryParameters:s}:{}};return o(e.transporter.write({method:w,path:"1/keys",data:n},r),(t,r)=>a(s=>U(e)(t.key,r).catch(e=>{if(404===e.status)throw e;return s()})))},R=e=>(t,r,s)=>{return o(e.transporter.write({method:w,path:i("1/indexes/%s/operation",t),data:{operation:"copy",destination:r}},s),(r,s)=>F(e)(t,{methods:{waitTask:$e}}).waitTask(r.taskID,s))},E=e=>(t,r,s)=>R(e)(t,r,{...void 0===s?{}:s,scope:[He.Settings]}),C=e=>(t,r,s)=>R(e)(t,r,{...void 0===s?{}:s,scope:[He.Synonyms]}),$=e=>(t,r)=>{return o(e.transporter.write({method:O,path:i("1/keys/%s",t)},r),(r,s)=>a(r=>U(e)(t,s).catch(e=>{if(404!==e.status)throw e}).then(r)))},U=e=>(t,r)=>e.transporter.read({method:j,path:i("1/keys/%s",t)},r),H=e=>t=>{const r=g(t,"length"),s=g(t,"offset"),a=g(t,"type"),o=y(t);return void 0!==r&&(o.queryParameters.length=r),void 0!==s&&(o.queryParameters.offset=s),void 0!==a&&(o.queryParameters.type=a),e.transporter.read({method:j,path:"1/logs"},o)},J=e=>t=>e.transporter.read({method:j,path:"1/recommendation/personalization/strategy"},t),F=e=>(t,r={})=>{return n({transporter:e.transporter,appId:e.appId,indexName:t},r.methods)},Q=e=>t=>e.transporter.read({method:j,path:"1/keys"},t),B=e=>t=>e.transporter.read({method:j,path:"1/clusters"},t),K=e=>t=>e.transporter.read({method:j,path:"1/indexes"},t),W=e=>(t,r,s)=>{return o(e.transporter.write({method:w,path:i("1/indexes/%s/operation",t),data:{operation:"move",destination:r}},s),(r,s)=>F(e)(t,{methods:{waitTask:$e}}).waitTask(r.taskID,s))},M=e=>(t,r)=>{return o(e.transporter.write({method:w,path:"1/indexes/*/batch",data:{requests:t}},r),(t,r)=>Promise.all(Object.keys(t.taskID).map(s=>F(e)(s,{methods:{waitTask:$e}}).waitTask(t.taskID[s],r))))},z=e=>(t,r)=>e.transporter.read({method:w,path:"1/indexes/*/objects",data:{requests:t}},r),L=e=>(t,r)=>{const s=t.map(e=>({...e,params:f(e.params||{})}));return e.transporter.read({method:w,path:"1/indexes/*/queries",data:{requests:s},cacheable:!0},r)},V=e=>(t,r)=>Promise.all(t.map(t=>{const{facetName:s,facetQuery:a,...o}=t.params;return F(e)(t.indexName,{methods:{searchForFacetValues:Ae}}).searchForFacetValues(s,a,{...r,...o})})),G=e=>(t,r)=>{return o(e.transporter.write({method:w,path:i("1/keys/%s/restore",t)},r),(r,s)=>a(r=>U(e)(t,s).catch(e=>{if(404!==e.status)throw e;return r()})))},_=e=>(t,r)=>e.transporter.write({method:w,path:"1/recommendation/personalization/strategy",data:t},r),X=e=>(t,r)=>{const s=Object.assign({},r),n=g(r,"queryParameters"),c=n?{queryParameters:n}:{},d=["acl","indexes","referers","restrictSources","queryParameters","description","maxQueriesPerIPPerHour","maxHitsPerQuery"];return o(e.transporter.write({method:v,path:i("1/keys/%s",t),data:c},r),(r,o)=>a(r=>U(e)(t,o).then(e=>(e=>Object.keys(s).filter(e=>-1!==d.indexOf(e)).every(t=>e[t]===s[t]))(e)?Promise.resolve():r())))},Y=e=>(t,r)=>{return o(e.transporter.write({method:w,path:i("1/indexes/%s/batch",e.indexName),data:{requests:t}},r),(t,r)=>$e(e)(t.taskID,r))},Z=e=>t=>S({...t,shouldStop:e=>void 0===e.cursor,request:r=>e.transporter.read({method:w,path:i("1/indexes/%s/browse",e.indexName),data:r},t)}),ee=e=>t=>{const r={hitsPerPage:1e3,...t};return S({...r,shouldStop:e=>e.hits.length<r.hitsPerPage,request:r=>Re(e)("",{...t,...r}).then(e=>({...e,hits:e.hits.map(e=>(delete e._highlightResult,e))}))})},te=e=>t=>{const r={hitsPerPage:1e3,...t};return S({...r,shouldStop:e=>e.hits.length<r.hitsPerPage,request:r=>Ee(e)("",{...t,...r}).then(e=>({...e,hits:e.hits.map(e=>(delete e._highlightResult,e))}))})},re=e=>(t,r,s)=>{const a=g(s,"batchSize",1e3),n=[],i=(o=0)=>{const c=[];let d;for(d=o;d<t.length&&(c.push(t[d]),c.length!==a);d++);return 0===c.length?Promise.resolve(n):Y(e)(c.map(e=>({action:r,body:e})),s).then(e=>(n.push(e),d++,i(d)))};return o(i(),(t,r)=>Promise.all(t.map(t=>$e(e)(t.taskID,r))))},se=e=>t=>o(e.transporter.write({method:w,path:i("1/indexes/%s/clear",e.indexName)},t),(t,r)=>$e(e)(t.taskID,r)),ae=e=>t=>o(e.transporter.write({method:w,path:i("1/indexes/%s/rules/clear",e.indexName)},t),(t,r)=>$e(e)(t.taskID,r)),oe=e=>t=>o(e.transporter.write({method:w,path:i("1/indexes/%s/synonyms/clear",e.indexName)},t),(t,r)=>$e(e)(t.taskID,r)),ne=e=>(t,r)=>o(e.transporter.write({method:w,path:i("1/indexes/%s/deleteByQuery",e.indexName),data:t},r),(t,r)=>$e(e)(t.taskID,r)),ie=e=>t=>o(e.transporter.write({method:O,path:i("1/indexes/%s",e.indexName)},t),(t,r)=>$e(e)(t.taskID,r)),ce=e=>(t,r)=>o(de(e)([t],r).then(e=>({taskID:e[0].taskID})),(t,r)=>$e(e)(t.taskID,r)),de=e=>(t,r)=>{const s=t.map(e=>({objectID:e}));return re(e)(s,Ue.DeleteObject,r)},ue=e=>(t,r)=>o(e.transporter.write({method:O,path:i("1/indexes/%s/rules/%s",e.indexName,t)},r),(t,r)=>$e(e)(t.taskID,r)),le=e=>(t,r)=>o(e.transporter.write({method:O,path:i("1/indexes/%s/synonyms/%s",e.indexName,t)},r),(t,r)=>$e(e)(t.taskID,r)),he=e=>t=>fe(e)(t).then(()=>!0).catch(e=>{if(404!==e.status)throw e;return!1}),pe=e=>(t,r)=>{const s=g(r,"paginate",!0),a=g(r,"query","");let o=0;const n=()=>Te(e)(a,{...r,page:o}).then(e=>{for(const[r,s]of Object.entries(e.hits))if(t(s))return{object:s,position:parseInt(r,10),page:o};if(o++,!s||o>=e.nbPages)throw{name:"ObjectNotFoundError",message:"Object not found."};return n()});return n()},me=e=>(t,r)=>e.transporter.read({method:j,path:i("1/indexes/%s/%s",e.indexName,t)},r),ye=()=>(e,t)=>{for(const[r,s]of Object.entries(e.hits))if(s.objectID===t)return parseInt(r,10);return-1},ge=e=>(t,r)=>{const s=t.map(t=>({indexName:e.indexName,objectID:t,attributesToRetrieve:g(r,"attributesToRetrieve","*")}));return e.transporter.read({method:w,path:"1/indexes/*/objects",data:{requests:s}},r)},be=e=>(t,r)=>e.transporter.read({method:j,path:i("1/indexes/%s/rules/%s",e.indexName,t)},r),fe=e=>t=>{const r=y(t);return r.queryParameters.getVersion="2",e.transporter.read({method:j,path:i("1/indexes/%s/settings",e.indexName)},r)},xe=e=>(t,r)=>e.transporter.read({method:j,path:i("1/indexes/%s/synonyms/%s",e.indexName,t)},r),Pe=e=>(t,r)=>o(Oe(e)([t],r).then(e=>({objectID:e[0].objectIDs[0],taskID:e[0].taskID})),(t,r)=>$e(e)(t.taskID,r)),Oe=e=>(t,r)=>{const s=g(r,"createIfNotExists",!1)?Ue.PartialUpdateObject:Ue.PartialUpdateObjectNoCreate;return re(e)(t,s,r)},je=e=>(t,r)=>{const s=(t,r,s,a)=>o(e.transporter.write({method:w,path:i("1/indexes/%s/operation",t),data:{operation:s,destination:r}},a),(t,r)=>$e(e)(t.taskID,r)),a=g(r,"safe",!1),n=Math.random().toString(36).substring(7),c=`${e.indexName}_tmp_${n}`,d=De({appId:e.appId,transporter:e.transporter,indexName:c});let u=[];const l=s(e.indexName,c,"copy",{...r,scope:["settings","synonyms","rules"]});return u.push(l),o((a?l.wait(r):l).then(()=>{const e=d(t,r);return u.push(e),a?e.wait(r):e}).then(()=>{const t=s(c,e.indexName,"move",r);return u.push(t),a?t.wait(r):t}).then(()=>Promise.resolve()),(e,t)=>Promise.all(u.map(e=>e.wait(t))))},we=e=>(t,r)=>qe(e)(t,{...r,clearExistingRules:!0}),ve=e=>(t,r)=>Se(e)(t,{...void 0===r?{}:r,replaceExistingSynonyms:!0}),Ie=e=>(t,r)=>o(De(e)([t],r).then(e=>({objectID:e[0].objectIDs[0],taskID:e[0].taskID})),(t,r)=>$e(e)(t.taskID,r)),De=e=>(t,r)=>{const s=g(r,"autoGenerateObjectIDIfNotExist",!1)?Ue.AddObject:Ue.UpdateObject;if(s===Ue.UpdateObject)for(const e of t)if(void 0===e.objectID)return o(Promise.reject({name:"MissingObjectIDError",message:"All objects must have an unique objectID (like a primary key) to be valid. Algolia is also able to generate objectIDs automatically but *it's not recommended*. To do it, use `saveObjects(objects, {'autoGenerateObjectIDIfNotExist': true})`."}));return re(e)(t,s,r)},ke=e=>(t,r)=>o(e.transporter.write({method:v,path:i("1/indexes/%s/rules/%s",e.indexName,t.objectID),data:t},r),(t,r)=>$e(e)(t.taskID,r)),qe=e=>(t,r)=>{const s=y(r);return!0===g(r,"clearExistingRules",!1)&&(s.queryParameters.clearExistingRules="true"),o(e.transporter.write({method:w,path:i("1/indexes/%s/rules/batch",e.indexName),data:t},s),(t,r)=>$e(e)(t.taskID,r))},Ne=e=>(t,r)=>Se(e)([t],r),Se=e=>(t,r)=>{const s=g(r,"forwardToReplicas",void 0),a=g(r,"replaceExistingSynonyms",void 0),n=y(r);return!0===s&&(n.queryParameters.forwardToReplicas="1"),!0===a&&(n.queryParameters.replaceExistingSynonyms="1"),o(e.transporter.write({method:w,path:i("1/indexes/%s/synonyms/batch",e.indexName),data:t},n),(t,r)=>$e(e)(t.taskID,r))},Te=e=>(t,r)=>e.transporter.read({method:w,path:i("1/indexes/%s/query",e.indexName),data:{query:t},cacheable:!0},r),Ae=e=>(t,r,s)=>e.transporter.read({method:w,path:i("1/indexes/%s/facets/%s/query",e.indexName,t),data:{facetQuery:r},cacheable:!0},s),Re=e=>(t,r)=>e.transporter.read({method:w,path:i("1/indexes/%s/rules/search",e.indexName),data:{query:t}},r),Ee=e=>(t,r)=>e.transporter.read({method:w,path:i("1/indexes/%s/synonyms/search",e.indexName),data:{query:t}},r),Ce=e=>(t,r)=>o(e.transporter.write({method:v,path:i("1/indexes/%s/settings",e.indexName),data:t},r),(t,r)=>$e(e)(t.taskID,r)),$e=e=>(t,r)=>a(s=>(e=>(t,r)=>e.transporter.read({method:j,path:i("1/indexes/%s/task/%s",e.indexName,t.toString())},r))(e)(t,r).then(e=>"published"!==e.status?s():void 0)),Ue={AddObject:"addObject",UpdateObject:"updateObject",PartialUpdateObject:"partialUpdateObject",PartialUpdateObjectNoCreate:"partialUpdateObjectNoCreate",DeleteObject:"deleteObject"},He={Settings:"settings",Synonyms:"synonyms",Rules:"rules"};export default function(s,a,o={}){const n=(i=o.logLevel||e.Error,{debug:(t,r)=>(e.Debug>=i&&console.debug(t,r),Promise.resolve()),info:(t,r)=>(e.Info>=i&&console.info(t,r),Promise.resolve()),error:(e,t)=>(console.error(e,t),Promise.resolve())});var i;const d={appId:s,apiKey:a,timeouts:{connect:1,read:2,write:30},requester:{send:e=>new Promise(t=>{const r=new XMLHttpRequest;r.open(e.method,e.url,!0),Object.keys(e.headers).forEach(t=>r.setRequestHeader(t,e.headers[t]));const s=(e,s)=>setTimeout(()=>{r.abort(),t({status:0,content:s,isTimedOut:!0})},1e3*e),a=s(e.connectTimeout,"Connection timeout");let o;r.onreadystatechange=()=>{r.readyState>r.OPENED&&void 0===o&&(clearTimeout(a),o=s(e.socketTimeout,"Socket timeout"))},r.onerror=()=>{0===r.status&&(clearTimeout(a),clearTimeout(o),t({content:r.responseText||"Network request failed",status:r.status,isTimedOut:!1}))},r.onload=()=>{clearTimeout(a),clearTimeout(o),t({content:r.responseText,status:r.status,isTimedOut:!1})},r.send(e.data)})},logger:n,responsesCache:r(),requestsCache:r(),hostsCache:t(c,n),userAgent:m(c).add({segment:"Browser"})};return T({...d,methods:{search:L,searchForFacetValues:V,multipleBatch:M,multipleGetObjects:z,multipleQueries:L,copyIndex:R,copySettings:E,copySynonyms:C,moveIndex:W,getPersonalizationStrategy:J,setPersonalizationStrategy:_,listIndices:K,getLogs:H,listClusters:B,multipleSearchForFacetValues:V,getApiKey:U,addApiKey:A,listApiKeys:Q,updateApiKey:X,deleteApiKey:$,restoreApiKey:G,initIndex:e=>t=>F(e)(t,{methods:{batch:Y,delete:ie,getObject:me,getObjects:ge,saveObject:Ie,saveObjects:De,search:Te,searchForFacetValues:Ae,waitTask:$e,setSettings:Ce,getSettings:fe,partialUpdateObject:Pe,partialUpdateObjects:Oe,deleteObject:ce,deleteObjects:de,deleteBy:ne,clearObjects:se,browseObjects:Z,getObjectPosition:ye,findObject:pe,exists:he,saveSynonym:Ne,saveSynonyms:Se,getSynonym:xe,searchSynonyms:Ee,browseSynonyms:te,deleteSynonym:le,clearSynonyms:oe,replaceAllObjects:je,replaceAllSynonyms:ve,searchRules:Re,getRule:be,deleteRule:ue,saveRule:ke,saveRules:qe,replaceAllRules:we,browseRules:ee,clearRules:ae}}),initAnalytics:()=>e=>P({...d,region:e,methods:{addABTest:I,getABTest:k,getABTests:q,stopABTest:N,deleteABTest:D}})}})}
