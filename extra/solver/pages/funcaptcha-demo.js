(()=>{var I,l,re,Ie,A,ee,ie,j,We,U={},ae=[],Re=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,q=Array.isArray;function x(e,t){for(var n in t)e[n]=t[n];return e}function se(e){var t=e.parentNode;t&&t.removeChild(e)}function m(e,t,n){var r,i,o,u={};for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:u[o]=t[o];if(arguments.length>2&&(u.children=arguments.length>3?I.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)u[o]===void 0&&(u[o]=e.defaultProps[o]);return B(e,u,r,i,null)}function B(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++re};return i==null&&l.vnode!=null&&l.vnode(o),o}function W(e){return e.children}function $(e,t){this.props=e,this.context=t}function w(e,t){if(t==null)return e.__?w(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?w(e):null}function ue(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ue(e)}}function te(e){(!e.__d&&(e.__d=!0)&&A.push(e)&&!N.__r++||ee!==l.debounceRendering)&&((ee=l.debounceRendering)||ie)(N)}function N(){var e,t,n,r,i,o,u,p;for(A.sort(j);e=A.shift();)e.__d&&(t=A.length,r=void 0,i=void 0,u=(o=(n=e).__v).__e,(p=n.__P)&&(r=[],(i=x({},o)).__v=o.__v+1,O(p,o,i,n.__n,p.ownerSVGElement!==void 0,o.__h!=null?[u]:null,r,u??w(o),o.__h),de(r,o),o.__e!=u&&ue(o)),A.length>t&&A.sort(j));N.__r=0}function le(e,t,n,r,i,o,u,p,f,d){var _,h,s,a,c,E,v,g=r&&r.__k||ae,C=g.length;for(n.__k=[],_=0;_<t.length;_++)if((a=n.__k[_]=(a=t[_])==null||typeof a=="boolean"||typeof a=="function"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?B(null,a,null,null,a):q(a)?B(W,{children:a},null,null,null):a.__b>0?B(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a)!=null){if(a.__=n,a.__b=n.__b+1,(s=g[_])===null||s&&a.key==s.key&&a.type===s.type)g[_]=void 0;else for(h=0;h<C;h++){if((s=g[h])&&a.key==s.key&&a.type===s.type){g[h]=void 0;break}s=null}O(e,a,s=s||U,i,o,u,p,f,d),c=a.__e,(h=a.ref)&&s.ref!=h&&(v||(v=[]),s.ref&&v.push(s.ref,null,a),v.push(h,a.__c||c,a)),c!=null?(E==null&&(E=c),typeof a.type=="function"&&a.__k===s.__k?a.__d=f=ce(a,f,e):f=fe(e,a,s,g,c,f),typeof n.type=="function"&&(n.__d=f)):f&&s.__e==f&&f.parentNode!=e&&(f=w(s))}for(n.__e=E,_=C;_--;)g[_]!=null&&(typeof n.type=="function"&&g[_].__e!=null&&g[_].__e==n.__d&&(n.__d=pe(r).nextSibling),he(g[_],g[_]));if(v)for(_=0;_<v.length;_++)me(v[_],v[++_],v[++_])}function ce(e,t,n){for(var r,i=e.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=e,t=typeof r.type=="function"?ce(r,t,n):fe(n,r,r,i,r.__e,t));return t}function fe(e,t,n,r,i,o){var u,p,f;if(t.__d!==void 0)u=t.__d,t.__d=void 0;else if(n==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(i),u=null;else{for(p=o,f=0;(p=p.nextSibling)&&f<r.length;f+=1)if(p==i)break e;e.insertBefore(i,o),u=o}return u!==void 0?u:i.nextSibling}function pe(e){var t,n,r;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(r=pe(n)))return r}return null}function Me(e,t,n,r,i){var o;for(o in n)o==="children"||o==="key"||o in t||T(e,o,null,n[o],r);for(o in t)i&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||T(e,o,t[o],n[o],r)}function ne(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Re.test(t)?n:n+"px"}function T(e,t,n,r,i){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||ne(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||ne(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?oe:_e,o):e.removeEventListener(t,o?oe:_e,o);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function _e(e){return this.l[e.type+!1](l.event?l.event(e):e)}function oe(e){return this.l[e.type+!0](l.event?l.event(e):e)}function O(e,t,n,r,i,o,u,p,f){var d,_,h,s,a,c,E,v,g,C,D,S,Z,P,V,k=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(f=n.__h,p=t.__e=n.__e,t.__h=null,o=[p]),(d=l.__b)&&d(t);try{e:if(typeof k=="function"){if(v=t.props,g=(d=k.contextType)&&r[d.__c],C=d?g?g.props.value:d.__:r,n.__c?E=(_=t.__c=n.__c).__=_.__E:("prototype"in k&&k.prototype.render?t.__c=_=new k(v,C):(t.__c=_=new $(v,C),_.constructor=k,_.render=Ve),g&&g.sub(_),_.props=v,_.state||(_.state={}),_.context=C,_.__n=r,h=_.__d=!0,_.__h=[],_._sb=[]),_.__s==null&&(_.__s=_.state),k.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=x({},_.__s)),x(_.__s,k.getDerivedStateFromProps(v,_.__s))),s=_.props,a=_.state,_.__v=t,h)k.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(k.getDerivedStateFromProps==null&&v!==s&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(v,C),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(v,_.__s,C)===!1||t.__v===n.__v){for(t.__v!==n.__v&&(_.props=v,_.state=_.__s,_.__d=!1),_.__e=!1,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(H){H&&(H.__=t)}),D=0;D<_._sb.length;D++)_.__h.push(_._sb[D]);_._sb=[],_.__h.length&&u.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(v,_.__s,C),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(s,a,c)})}if(_.context=C,_.props=v,_.__P=e,S=l.__r,Z=0,"prototype"in k&&k.prototype.render){for(_.state=_.__s,_.__d=!1,S&&S(t),d=_.render(_.props,_.state,_.context),P=0;P<_._sb.length;P++)_.__h.push(_._sb[P]);_._sb=[]}else do _.__d=!1,S&&S(t),d=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++Z<25);_.state=_.__s,_.getChildContext!=null&&(r=x(x({},r),_.getChildContext())),h||_.getSnapshotBeforeUpdate==null||(c=_.getSnapshotBeforeUpdate(s,a)),le(e,q(V=d!=null&&d.type===W&&d.key==null?d.props.children:d)?V:[V],t,n,r,i,o,u,p,f),_.base=t.__e,t.__h=null,_.__h.length&&u.push(_),E&&(_.__E=_.__=null),_.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Le(n.__e,t,n,r,i,o,u,f);(d=l.diffed)&&d(t)}catch(H){t.__v=null,(f||o!=null)&&(t.__e=p,t.__h=!!f,o[o.indexOf(p)]=null),l.__e(H,t,n)}}function de(e,t){l.__c&&l.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){l.__e(r,n.__v)}})}function Le(e,t,n,r,i,o,u,p){var f,d,_,h=n.props,s=t.props,a=t.type,c=0;if(a==="svg"&&(i=!0),o!=null){for(;c<o.length;c++)if((f=o[c])&&"setAttribute"in f==!!a&&(a?f.localName===a:f.nodeType===3)){e=f,o[c]=null;break}}if(e==null){if(a===null)return document.createTextNode(s);e=i?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a,s.is&&s),o=null,p=!1}if(a===null)h===s||p&&e.data===s||(e.data=s);else{if(o=o&&I.call(e.childNodes),d=(h=n.props||U).dangerouslySetInnerHTML,_=s.dangerouslySetInnerHTML,!p){if(o!=null)for(h={},c=0;c<e.attributes.length;c++)h[e.attributes[c].name]=e.attributes[c].value;(_||d)&&(_&&(d&&_.__html==d.__html||_.__html===e.innerHTML)||(e.innerHTML=_&&_.__html||""))}if(Me(e,s,h,i,p),_)t.__k=[];else if(le(e,q(c=t.props.children)?c:[c],t,n,r,i&&a!=="foreignObject",o,u,o?o[0]:n.__k&&w(n,0),p),o!=null)for(c=o.length;c--;)o[c]!=null&&se(o[c]);p||("value"in s&&(c=s.value)!==void 0&&(c!==e.value||a==="progress"&&!c||a==="option"&&c!==h.value)&&T(e,"value",c,h.value,!1),"checked"in s&&(c=s.checked)!==void 0&&c!==e.checked&&T(e,"checked",c,h.checked,!1))}return e}function me(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){l.__e(r,n)}}function he(e,t,n){var r,i;if(l.unmount&&l.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||me(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){l.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&he(r[i],t,n||typeof e.type!="function");n||e.__e==null||se(e.__e),e.__=e.__e=e.__d=void 0}function Ve(e,t,n){return this.constructor(e,n)}function ve(e,t,n){var r,i,o;l.__&&l.__(e,t),i=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],O(t,e=(!r&&n||t).__k=m(W,null,[e]),i||U,U,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?I.call(t.childNodes):null,o,!r&&n?n:i?i.__e:t.firstChild,r),de(o,e)}I=ae.slice,l={__e:function(e,t,n,r){for(var i,o,u;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),u=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),u=i.__d),u)return i.__E=i}catch(p){e=p}throw e}},re=0,Ie=function(e){return e!=null&&e.constructor===void 0},$.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof e=="function"&&(e=e(x({},n),this.props)),e&&x(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),te(this))},$.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),te(this))},$.prototype.render=W,A=[],ie=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,j=function(e,t){return e.__v.__b-t.__v.__b},N.__r=0,We=0;var ye=[300,400];var z=[{name:"linkedin",sitekey:"3117BF26-4762-4F5A-8ED9-A85E69209A46",loader:1},{name:"rockstar",sitekey:"A5A70501-FCDE-4065-AF18-D9FAF06EF479"},{name:"github",sitekey:"20782B4C-05D0-45D7-97A0-41641055B6F6",dimensions:[654,380]},{name:"demo",sitekey:"D39B0EE3-2973-4147-98EF-C92F93451E2D"},{name:"ea",sitekey:"0F5FE186-B3CA-4EDB-A39B-9B9A3397D01D"},{name:"minecraft",sitekey:"D39B0EE3-2973-4147-98EF-C92F93451E2D"},{name:"blizzard",sitekey:"E8A75615-1CBA-5DFF-8032-D16BCF234E10"},{name:"octocaptcha",sitekey:"69A21A01-CC7B-B9C6-0F9A-E7FA06677FFC",dimensions:[465,320]},{name:"discoveryplus",sitekey:"FE296399-FDEA-2EA2-8CD5-50F6E3157ECA"},{name:"twitter [mobile]",sitekey:"867D55F2-24FD-4C56-AB6D-589EDAF5E7C5",dimensions:ye},{name:"twitter [web]",sitekey:"2CB16598-CB82-4CF7-B332-5990DB66F3AB",dimensions:ye}];var L,y,G,ge,J=0,Se=[],R=[],be=l.__b,ke=l.__r,Ce=l.diffed,xe=l.__c,Ae=l.unmount;function we(e,t){l.__h&&l.__h(y,e,J||t),J=0;var n=y.__H||(y.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:R}),n.__[e]}function F(e){return J=1,je(De,e)}function je(e,t,n){var r=we(L++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):De(void 0,t),function(p){var f=r.__N?r.__N[0]:r.__[0],d=r.t(f,p);f!==d&&(r.__N=[d,r.__[1]],r.__c.setState({}))}],r.__c=y,!y.u)){var i=function(p,f,d){if(!r.__c.__H)return!0;var _=r.__c.__H.__.filter(function(s){return s.__c});if(_.every(function(s){return!s.__N}))return!o||o.call(this,p,f,d);var h=!1;return _.forEach(function(s){if(s.__N){var a=s.__[0];s.__=s.__N,s.__N=void 0,a!==s.__[0]&&(h=!0)}}),!(!h&&r.__c.props===p)&&(!o||o.call(this,p,f,d))};y.u=!0;var o=y.shouldComponentUpdate,u=y.componentWillUpdate;y.componentWillUpdate=function(p,f,d){if(this.__e){var _=o;o=void 0,i(p,f,d),o=_}u&&u.call(this,p,f,d)},y.shouldComponentUpdate=i}return r.__N||r.__}function Fe(e,t){var n=we(L++,3);!l.__s&&ze(n.__H,t)&&(n.__=e,n.i=t,y.__H.__h.push(n))}function qe(){for(var e;e=Se.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(M),e.__H.__h.forEach(Y),e.__H.__h=[]}catch(t){e.__H.__h=[],l.__e(t,e.__v)}}l.__b=function(e){y=null,be&&be(e)},l.__r=function(e){ke&&ke(e),L=0;var t=(y=e.__c).__H;t&&(G===y?(t.__h=[],y.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=R,n.__N=n.i=void 0})):(t.__h.forEach(M),t.__h.forEach(Y),t.__h=[],L=0)),G=y},l.diffed=function(e){Ce&&Ce(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Se.push(t)!==1&&ge===l.requestAnimationFrame||((ge=l.requestAnimationFrame)||Oe)(qe)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==R&&(n.__=n.__V),n.i=void 0,n.__V=R})),G=y=null},l.__c=function(e,t){t.some(function(n){try{n.__h.forEach(M),n.__h=n.__h.filter(function(r){return!r.__||Y(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],l.__e(r,n.__v)}}),xe&&xe(e,t)},l.unmount=function(e){Ae&&Ae(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{M(r)}catch(i){t=i}}),n.__H=void 0,t&&l.__e(t,n.__v))};var Ee=typeof requestAnimationFrame=="function";function Oe(e){var t,n=function(){clearTimeout(r),Ee&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Ee&&(t=requestAnimationFrame(n))}function M(e){var t=y,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),y=t}function Y(e){var t=y;e.__c=e.__(),y=t}function ze(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function De(e,t){return typeof t=="function"?t(e):t}var He=chrome;var K="https://api.nopecha.com",b="https://www.nopecha.com",Pe="https://developers.nopecha.com",Xe={doc:{url:Pe,automation:{url:`${Pe}/guides/extension_advanced/#automation-build`}},api:{url:K,recognition:{url:`${K}/recognition`},status:{url:`${K}/status`}},www:{url:b,annoucement:{url:`${b}/json/announcement.json`},demo:{url:`${b}/demo`,hcaptcha:{url:`${b}/demo/hcaptcha`},recaptcha:{url:`${b}/demo/recaptcha`},funcaptcha:{url:`${b}/demo/funcaptcha`},awscaptcha:{url:`${b}/demo/awscaptcha`},turnstile:{url:`${b}/demo/turnstile`},textcaptcha:{url:`${b}/demo/textcaptcha`},perimeterx:{url:`${b}/demo/perimeterx`}},manage:{url:`${b}/manage`},pricing:{url:`${b}/pricing`},setup:{url:`${b}/setup`}},discord:{url:`${b}/discord`},github:{url:`${b}/github`,release:{url:`${b}/github/release`}}};function Be(e){let t=("0e9b5b9637a155d2f28b824d64749fc4f40c37c7328f4626454bb8ed47be8e94"+e).split("").map(n=>n.charCodeAt(0));return Ue(t)}var $e=new Uint32Array(256);for(let e=256;e--;){let t=e;for(let n=8;n--;)t=t&1?3988292384^t>>>1:t>>>1;$e[e]=t}function Ue(e){let t=-1;for(let n of e)t=t>>>8^$e[t&255^n];return(t^-1)>>>0}async function Ne(e,t){let n=""+[+new Date,performance.now(),Math.random()],[r,i]=await new Promise(o=>{He.runtime.sendMessage([n,e,...t],o)});if(r===Be(n))return i}function X(){let[e,t]=F(1),[n,r]=F(!1),[i,o]=F(null);return m("main",{style:{maxWidth:"100rem",padding:"1rem",margin:"0px auto",fontFamily:'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}},m(Q,null,m("h3",null,"Select FunCAPTCHA site to test"),m("button",{onClick:()=>{r(!n),o(null)},style:{marginBottom:"1rem"}},"Render all of them (laggy!)"),m("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.125rem 0.25rem"}},z.map(u=>m("button",{onClick:()=>{r(!1),o(u)}},u.name)))),m(Q,null,m("h3",null,"How many CAPTCHAs to render at once?"),m("div",{style:{display:"flex"}},m("input",{type:"range",min:1,max:20,value:e,onChange:u=>{t(u.currentTarget.valueAsNumber)}}),e)),m(Q,null,m("h3",null,"CAPTCHAs"),!n&&!i?m("p",null,"You need to select a sitekey!"):n?z.map(u=>m(Te,{sitekey:u,amount:e})):m(Te,{sitekey:i,amount:e})))}function Q({children:e}){return m("section",{style:{margin:"2rem 0px"}},e)}function Te({sitekey:e,amount:t}){return m("div",{style:{margin:"0.25rem 0px"}},m("h4",null,e.name),m("hr",null),m("div",{style:{display:"flex",flexWrap:"wrap"}},Array(t).fill(0).map((n,r)=>m(Ge,{...e}))))}function Ge({sitekey:e,hostname:t="iframe.arkoselabs.com",dimensions:[n,r]=[320,310],loader:i=0}){let[o,u]=F();return Fe(()=>{if(i===0)u(`https://${t}/${e}/index.html?mkt=en`);else if(i===1){let p=`https://api.funcaptcha.com/fc/gt2/public_key/${e}`;Ne("fetch::universalFetch",[p,{method:"POST",body:new URLSearchParams({bda:"",site:"",public_key:e,language:"en",userbrowser:navigator.userAgent,rnd:""+Math.random()}).toString(),headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"}}]).then(({text:f})=>{let d=JSON.parse(f),_={};for(let s of d.token.split("|")){let[a,c]=s.split("=");c||([a,c]=["token",a]),a.endsWith("url")&&(c=decodeURIComponent(c)),_[a]=c}let h=new URLSearchParams(_);u(`https://api.funcaptcha.com/fc/gc/?${h.toString()}`)})}},[e,t,i]),m("div",{style:{width:`${n}px`,height:`${r}px`,border:"1px solid black"}},o?m("iframe",{src:o,style:{width:"100%",height:"100%",border:"none"}}):m("p",null,"Loading..."))}[...document.body.children].forEach(e=>e.remove());ve(m(X,{}),document.body);})();
