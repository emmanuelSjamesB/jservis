function ky(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Iy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Cu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Up={exports:{}},Fs={},zp={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qi=Symbol.for("react.element"),xy=Symbol.for("react.portal"),Ty=Symbol.for("react.fragment"),Cy=Symbol.for("react.strict_mode"),by=Symbol.for("react.profiler"),Py=Symbol.for("react.provider"),Ny=Symbol.for("react.context"),Ay=Symbol.for("react.forward_ref"),Oy=Symbol.for("react.suspense"),Ry=Symbol.for("react.memo"),Ly=Symbol.for("react.lazy"),sf=Symbol.iterator;function Dy(e){return e===null||typeof e!="object"?null:(e=sf&&e[sf]||e["@@iterator"],typeof e=="function"?e:null)}var $p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bp=Object.assign,Vp={};function jr(e,t,n){this.props=e,this.context=t,this.refs=Vp,this.updater=n||$p}jr.prototype.isReactComponent={};jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hp(){}Hp.prototype=jr.prototype;function bu(e,t,n){this.props=e,this.context=t,this.refs=Vp,this.updater=n||$p}var Pu=bu.prototype=new Hp;Pu.constructor=bu;Bp(Pu,jr.prototype);Pu.isPureReactComponent=!0;var af=Array.isArray,Wp=Object.prototype.hasOwnProperty,Nu={current:null},Gp={key:!0,ref:!0,__self:!0,__source:!0};function Kp(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Wp.call(t,r)&&!Gp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Qi,type:e,key:o,ref:s,props:i,_owner:Nu.current}}function My(e,t){return{$$typeof:Qi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Au(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qi}function jy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var lf=/\/+/g;function ga(e,t){return typeof e=="object"&&e!==null&&e.key!=null?jy(""+e.key):t.toString(36)}function Ro(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Qi:case xy:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+ga(s,0):r,af(i)?(n="",e!=null&&(n=e.replace(lf,"$&/")+"/"),Ro(i,t,n,"",function(u){return u})):i!=null&&(Au(i)&&(i=My(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(lf,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",af(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+ga(o,a);s+=Ro(o,t,n,l,i)}else if(l=Dy(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+ga(o,a++),s+=Ro(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ho(e,t,n){if(e==null)return e;var r=[],i=0;return Ro(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Fy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Lo={transition:null},Uy={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Lo,ReactCurrentOwner:Nu};function Yp(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:ho,forEach:function(e,t,n){ho(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ho(e,function(){t++}),t},toArray:function(e){return ho(e,function(t){return t})||[]},only:function(e){if(!Au(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=jr;z.Fragment=Ty;z.Profiler=by;z.PureComponent=bu;z.StrictMode=Cy;z.Suspense=Oy;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uy;z.act=Yp;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Bp({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Nu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Wp.call(t,l)&&!Gp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Qi,type:e.type,key:i,ref:o,props:r,_owner:s}};z.createContext=function(e){return e={$$typeof:Ny,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Py,_context:e},e.Consumer=e};z.createElement=Kp;z.createFactory=function(e){var t=Kp.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Ay,render:e}};z.isValidElement=Au;z.lazy=function(e){return{$$typeof:Ly,_payload:{_status:-1,_result:e},_init:Fy}};z.memo=function(e,t){return{$$typeof:Ry,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Lo.transition;Lo.transition={};try{e()}finally{Lo.transition=t}};z.unstable_act=Yp;z.useCallback=function(e,t){return xe.current.useCallback(e,t)};z.useContext=function(e){return xe.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};z.useEffect=function(e,t){return xe.current.useEffect(e,t)};z.useId=function(){return xe.current.useId()};z.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return xe.current.useMemo(e,t)};z.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};z.useRef=function(e){return xe.current.useRef(e)};z.useState=function(e){return xe.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return xe.current.useTransition()};z.version="18.3.1";zp.exports=z;var T=zp.exports;const dt=Cu(T),zy=ky({__proto__:null,default:dt},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $y=T,By=Symbol.for("react.element"),Vy=Symbol.for("react.fragment"),Hy=Object.prototype.hasOwnProperty,Wy=$y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gy={key:!0,ref:!0,__self:!0,__source:!0};function qp(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Hy.call(t,r)&&!Gy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:By,type:e,key:o,ref:s,props:i,_owner:Wy.current}}Fs.Fragment=Vy;Fs.jsx=qp;Fs.jsxs=qp;Up.exports=Fs;var v=Up.exports,Qp={exports:{}},$e={},Xp={exports:{}},Jp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,L){var g=S.length;S.push(L);e:for(;0<g;){var J=g-1>>>1,b=S[J];if(0<i(b,L))S[J]=L,S[g]=b,g=J;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var L=S[0],g=S.pop();if(g!==L){S[0]=g;e:for(var J=0,b=S.length,H=b>>>1;J<H;){var Z=2*(J+1)-1,le=S[Z],V=Z+1,he=S[V];if(0>i(le,g))V<b&&0>i(he,le)?(S[J]=he,S[V]=g,J=V):(S[J]=le,S[Z]=g,J=Z);else if(V<b&&0>i(he,g))S[J]=he,S[V]=g,J=V;else break e}}return L}function i(S,L){var g=S.sortIndex-L.sortIndex;return g!==0?g:S.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,p=3,y=!1,_=!1,E=!1,k=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(S){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=S)r(u),L.sortIndex=L.expirationTime,t(l,L);else break;L=n(u)}}function w(S){if(E=!1,m(S),!_)if(n(l)!==null)_=!0,R(x);else{var L=n(u);L!==null&&F(w,L.startTime-S)}}function x(S,L){_=!1,E&&(E=!1,h(A),A=-1),y=!0;var g=p;try{for(m(L),f=n(l);f!==null&&(!(f.expirationTime>L)||S&&!Re());){var J=f.callback;if(typeof J=="function"){f.callback=null,p=f.priorityLevel;var b=J(f.expirationTime<=L);L=e.unstable_now(),typeof b=="function"?f.callback=b:f===n(l)&&r(l),m(L)}else r(l);f=n(l)}if(f!==null)var H=!0;else{var Z=n(u);Z!==null&&F(w,Z.startTime-L),H=!1}return H}finally{f=null,p=g,y=!1}}var C=!1,P=null,A=-1,$=5,M=-1;function Re(){return!(e.unstable_now()-M<$)}function W(){if(P!==null){var S=e.unstable_now();M=S;var L=!0;try{L=P(!0,S)}finally{L?$t():(C=!1,P=null)}}else C=!1}var $t;if(typeof d=="function")$t=function(){d(W)};else if(typeof MessageChannel<"u"){var co=new MessageChannel,j=co.port2;co.port1.onmessage=W,$t=function(){j.postMessage(null)}}else $t=function(){k(W,0)};function R(S){P=S,C||(C=!0,$t())}function F(S,L){A=k(function(){S(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){_||y||(_=!0,R(x))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(S){switch(p){case 1:case 2:case 3:var L=3;break;default:L=p}var g=p;p=L;try{return S()}finally{p=g}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,L){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var g=p;p=S;try{return L()}finally{p=g}},e.unstable_scheduleCallback=function(S,L,g){var J=e.unstable_now();switch(typeof g=="object"&&g!==null?(g=g.delay,g=typeof g=="number"&&0<g?J+g:J):g=J,S){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=g+b,S={id:c++,callback:L,priorityLevel:S,startTime:g,expirationTime:b,sortIndex:-1},g>J?(S.sortIndex=g,t(u,S),n(l)===null&&S===n(u)&&(E?(h(A),A=-1):E=!0,F(w,g-J))):(S.sortIndex=b,t(l,S),_||y||(_=!0,R(x))),S},e.unstable_shouldYield=Re,e.unstable_wrapCallback=function(S){var L=p;return function(){var g=p;p=L;try{return S.apply(this,arguments)}finally{p=g}}}})(Jp);Xp.exports=Jp;var Ky=Xp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yy=T,ze=Ky;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zp=new Set,Ii={};function Xn(e,t){br(e,t),br(e+"Capture",t)}function br(e,t){for(Ii[e]=t,e=0;e<t.length;e++)Zp.add(t[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ol=Object.prototype.hasOwnProperty,qy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uf={},cf={};function Qy(e){return ol.call(cf,e)?!0:ol.call(uf,e)?!1:qy.test(e)?cf[e]=!0:(uf[e]=!0,!1)}function Xy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Jy(e,t,n,r){if(t===null||typeof t>"u"||Xy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ve[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ou=/[\-:]([a-z])/g;function Ru(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ou,Ru);ve[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ou,Ru);ve[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ou,Ru);ve[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function Lu(e,t,n,r){var i=ve.hasOwnProperty(t)?ve[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Jy(t,n,i,r)&&(n=null),r||i===null?Qy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ut=Yy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mo=Symbol.for("react.element"),rr=Symbol.for("react.portal"),ir=Symbol.for("react.fragment"),Du=Symbol.for("react.strict_mode"),sl=Symbol.for("react.profiler"),eh=Symbol.for("react.provider"),th=Symbol.for("react.context"),Mu=Symbol.for("react.forward_ref"),al=Symbol.for("react.suspense"),ll=Symbol.for("react.suspense_list"),ju=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),nh=Symbol.for("react.offscreen"),ff=Symbol.iterator;function Yr(e){return e===null||typeof e!="object"?null:(e=ff&&e[ff]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,va;function ni(e){if(va===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);va=t&&t[1]||""}return`
`+va+e}var ya=!1;function wa(e,t){if(!e||ya)return"";ya=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{ya=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ni(e):""}function Zy(e){switch(e.tag){case 5:return ni(e.type);case 16:return ni("Lazy");case 13:return ni("Suspense");case 19:return ni("SuspenseList");case 0:case 2:case 15:return e=wa(e.type,!1),e;case 11:return e=wa(e.type.render,!1),e;case 1:return e=wa(e.type,!0),e;default:return""}}function ul(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ir:return"Fragment";case rr:return"Portal";case sl:return"Profiler";case Du:return"StrictMode";case al:return"Suspense";case ll:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case th:return(e.displayName||"Context")+".Consumer";case eh:return(e._context.displayName||"Context")+".Provider";case Mu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ju:return t=e.displayName||null,t!==null?t:ul(e.type)||"Memo";case Wt:t=e._payload,e=e._init;try{return ul(e(t))}catch{}}return null}function e0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ul(t);case 8:return t===Du?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function t0(e){var t=rh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function go(e){e._valueTracker||(e._valueTracker=t0(e))}function ih(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=rh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cl(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function df(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function oh(e,t){t=t.checked,t!=null&&Lu(e,"checked",t,!1)}function fl(e,t){oh(e,t);var n=gn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?dl(e,t.type,n):t.hasOwnProperty("defaultValue")&&dl(e,t.type,gn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function dl(e,t,n){(t!=="number"||Xo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ri=Array.isArray;function yr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function pl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(ri(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gn(n)}}function sh(e,t){var n=gn(t.value),r=gn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function mf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ah(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ah(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vo,lh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vo=vo||document.createElement("div"),vo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},n0=["Webkit","ms","Moz","O"];Object.keys(fi).forEach(function(e){n0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fi[t]=fi[e]})});function uh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||fi.hasOwnProperty(e)&&fi[e]?(""+t).trim():t+"px"}function ch(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=uh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var r0=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ml(e,t){if(t){if(r0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function gl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vl=null;function Fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yl=null,wr=null,_r=null;function gf(e){if(e=Zi(e)){if(typeof yl!="function")throw Error(I(280));var t=e.stateNode;t&&(t=Vs(t),yl(e.stateNode,e.type,t))}}function fh(e){wr?_r?_r.push(e):_r=[e]:wr=e}function dh(){if(wr){var e=wr,t=_r;if(_r=wr=null,gf(e),t)for(e=0;e<t.length;e++)gf(t[e])}}function ph(e,t){return e(t)}function hh(){}var _a=!1;function mh(e,t,n){if(_a)return e(t,n);_a=!0;try{return ph(e,t,n)}finally{_a=!1,(wr!==null||_r!==null)&&(hh(),dh())}}function Ti(e,t){var n=e.stateNode;if(n===null)return null;var r=Vs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var wl=!1;if(Nt)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){wl=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{wl=!1}function i0(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var di=!1,Jo=null,Zo=!1,_l=null,o0={onError:function(e){di=!0,Jo=e}};function s0(e,t,n,r,i,o,s,a,l){di=!1,Jo=null,i0.apply(o0,arguments)}function a0(e,t,n,r,i,o,s,a,l){if(s0.apply(this,arguments),di){if(di){var u=Jo;di=!1,Jo=null}else throw Error(I(198));Zo||(Zo=!0,_l=u)}}function Jn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vf(e){if(Jn(e)!==e)throw Error(I(188))}function l0(e){var t=e.alternate;if(!t){if(t=Jn(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return vf(i),e;if(o===r)return vf(i),t;o=o.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function vh(e){return e=l0(e),e!==null?yh(e):null}function yh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=yh(e);if(t!==null)return t;e=e.sibling}return null}var wh=ze.unstable_scheduleCallback,yf=ze.unstable_cancelCallback,u0=ze.unstable_shouldYield,c0=ze.unstable_requestPaint,se=ze.unstable_now,f0=ze.unstable_getCurrentPriorityLevel,Uu=ze.unstable_ImmediatePriority,_h=ze.unstable_UserBlockingPriority,es=ze.unstable_NormalPriority,d0=ze.unstable_LowPriority,Eh=ze.unstable_IdlePriority,Us=null,pt=null;function p0(e){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Us,e,void 0,(e.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:g0,h0=Math.log,m0=Math.LN2;function g0(e){return e>>>=0,e===0?32:31-(h0(e)/m0|0)|0}var yo=64,wo=4194304;function ii(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ts(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ii(a):(o&=s,o!==0&&(r=ii(o)))}else s=n&~i,s!==0?r=ii(s):o!==0&&(r=ii(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-et(t),i=1<<n,r|=e[n],t&=~i;return r}function v0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function y0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-et(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=v0(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function El(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sh(){var e=yo;return yo<<=1,!(yo&4194240)&&(yo=64),e}function Ea(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-et(t),e[t]=n}function w0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-et(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function zu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-et(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var G=0;function kh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ih,$u,xh,Th,Ch,Sl=!1,_o=[],on=null,sn=null,an=null,Ci=new Map,bi=new Map,Kt=[],_0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wf(e,t){switch(e){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":Ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bi.delete(t.pointerId)}}function Qr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Zi(t),t!==null&&$u(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function E0(e,t,n,r,i){switch(t){case"focusin":return on=Qr(on,e,t,n,r,i),!0;case"dragenter":return sn=Qr(sn,e,t,n,r,i),!0;case"mouseover":return an=Qr(an,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ci.set(o,Qr(Ci.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,bi.set(o,Qr(bi.get(o)||null,e,t,n,r,i)),!0}return!1}function bh(e){var t=On(e.target);if(t!==null){var n=Jn(t);if(n!==null){if(t=n.tag,t===13){if(t=gh(n),t!==null){e.blockedOn=t,Ch(e.priority,function(){xh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Do(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=kl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vl=r,n.target.dispatchEvent(r),vl=null}else return t=Zi(n),t!==null&&$u(t),e.blockedOn=n,!1;t.shift()}return!0}function _f(e,t,n){Do(e)&&n.delete(t)}function S0(){Sl=!1,on!==null&&Do(on)&&(on=null),sn!==null&&Do(sn)&&(sn=null),an!==null&&Do(an)&&(an=null),Ci.forEach(_f),bi.forEach(_f)}function Xr(e,t){e.blockedOn===t&&(e.blockedOn=null,Sl||(Sl=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,S0)))}function Pi(e){function t(i){return Xr(i,e)}if(0<_o.length){Xr(_o[0],e);for(var n=1;n<_o.length;n++){var r=_o[n];r.blockedOn===e&&(r.blockedOn=null)}}for(on!==null&&Xr(on,e),sn!==null&&Xr(sn,e),an!==null&&Xr(an,e),Ci.forEach(t),bi.forEach(t),n=0;n<Kt.length;n++)r=Kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)bh(n),n.blockedOn===null&&Kt.shift()}var Er=Ut.ReactCurrentBatchConfig,ns=!0;function k0(e,t,n,r){var i=G,o=Er.transition;Er.transition=null;try{G=1,Bu(e,t,n,r)}finally{G=i,Er.transition=o}}function I0(e,t,n,r){var i=G,o=Er.transition;Er.transition=null;try{G=4,Bu(e,t,n,r)}finally{G=i,Er.transition=o}}function Bu(e,t,n,r){if(ns){var i=kl(e,t,n,r);if(i===null)Aa(e,t,r,rs,n),wf(e,r);else if(E0(i,e,t,n,r))r.stopPropagation();else if(wf(e,r),t&4&&-1<_0.indexOf(e)){for(;i!==null;){var o=Zi(i);if(o!==null&&Ih(o),o=kl(e,t,n,r),o===null&&Aa(e,t,r,rs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Aa(e,t,r,null,n)}}var rs=null;function kl(e,t,n,r){if(rs=null,e=Fu(r),e=On(e),e!==null)if(t=Jn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return rs=e,null}function Ph(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(f0()){case Uu:return 1;case _h:return 4;case es:case d0:return 16;case Eh:return 536870912;default:return 16}default:return 16}}var en=null,Vu=null,Mo=null;function Nh(){if(Mo)return Mo;var e,t=Vu,n=t.length,r,i="value"in en?en.value:en.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Mo=i.slice(e,1<r?1-r:void 0)}function jo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Eo(){return!0}function Ef(){return!1}function Be(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Eo:Ef,this.isPropagationStopped=Ef,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),t}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hu=Be(Fr),Ji=ie({},Fr,{view:0,detail:0}),x0=Be(Ji),Sa,ka,Jr,zs=ie({},Ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(Sa=e.screenX-Jr.screenX,ka=e.screenY-Jr.screenY):ka=Sa=0,Jr=e),Sa)},movementY:function(e){return"movementY"in e?e.movementY:ka}}),Sf=Be(zs),T0=ie({},zs,{dataTransfer:0}),C0=Be(T0),b0=ie({},Ji,{relatedTarget:0}),Ia=Be(b0),P0=ie({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),N0=Be(P0),A0=ie({},Fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),O0=Be(A0),R0=ie({},Fr,{data:0}),kf=Be(R0),L0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=M0[e])?!!t[e]:!1}function Wu(){return j0}var F0=ie({},Ji,{key:function(e){if(e.key){var t=L0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?D0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),U0=Be(F0),z0=ie({},zs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),If=Be(z0),$0=ie({},Ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),B0=Be($0),V0=ie({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),H0=Be(V0),W0=ie({},zs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),G0=Be(W0),K0=[9,13,27,32],Gu=Nt&&"CompositionEvent"in window,pi=null;Nt&&"documentMode"in document&&(pi=document.documentMode);var Y0=Nt&&"TextEvent"in window&&!pi,Ah=Nt&&(!Gu||pi&&8<pi&&11>=pi),xf=" ",Tf=!1;function Oh(e,t){switch(e){case"keyup":return K0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var or=!1;function q0(e,t){switch(e){case"compositionend":return Rh(t);case"keypress":return t.which!==32?null:(Tf=!0,xf);case"textInput":return e=t.data,e===xf&&Tf?null:e;default:return null}}function Q0(e,t){if(or)return e==="compositionend"||!Gu&&Oh(e,t)?(e=Nh(),Mo=Vu=en=null,or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ah&&t.locale!=="ko"?null:t.data;default:return null}}var X0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!X0[e.type]:t==="textarea"}function Lh(e,t,n,r){fh(r),t=is(t,"onChange"),0<t.length&&(n=new Hu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var hi=null,Ni=null;function J0(e){Wh(e,0)}function $s(e){var t=lr(e);if(ih(t))return e}function Z0(e,t){if(e==="change")return t}var Dh=!1;if(Nt){var xa;if(Nt){var Ta="oninput"in document;if(!Ta){var bf=document.createElement("div");bf.setAttribute("oninput","return;"),Ta=typeof bf.oninput=="function"}xa=Ta}else xa=!1;Dh=xa&&(!document.documentMode||9<document.documentMode)}function Pf(){hi&&(hi.detachEvent("onpropertychange",Mh),Ni=hi=null)}function Mh(e){if(e.propertyName==="value"&&$s(Ni)){var t=[];Lh(t,Ni,e,Fu(e)),mh(J0,t)}}function e1(e,t,n){e==="focusin"?(Pf(),hi=t,Ni=n,hi.attachEvent("onpropertychange",Mh)):e==="focusout"&&Pf()}function t1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $s(Ni)}function n1(e,t){if(e==="click")return $s(t)}function r1(e,t){if(e==="input"||e==="change")return $s(t)}function i1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:i1;function Ai(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ol.call(t,i)||!nt(e[i],t[i]))return!1}return!0}function Nf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Af(e,t){var n=Nf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nf(n)}}function jh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fh(){for(var e=window,t=Xo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xo(e.document)}return t}function Ku(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function o1(e){var t=Fh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&jh(n.ownerDocument.documentElement,n)){if(r!==null&&Ku(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Af(n,o);var s=Af(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var s1=Nt&&"documentMode"in document&&11>=document.documentMode,sr=null,Il=null,mi=null,xl=!1;function Of(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xl||sr==null||sr!==Xo(r)||(r=sr,"selectionStart"in r&&Ku(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mi&&Ai(mi,r)||(mi=r,r=is(Il,"onSelect"),0<r.length&&(t=new Hu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=sr)))}function So(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ar={animationend:So("Animation","AnimationEnd"),animationiteration:So("Animation","AnimationIteration"),animationstart:So("Animation","AnimationStart"),transitionend:So("Transition","TransitionEnd")},Ca={},Uh={};Nt&&(Uh=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function Bs(e){if(Ca[e])return Ca[e];if(!ar[e])return e;var t=ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Uh)return Ca[e]=t[n];return e}var zh=Bs("animationend"),$h=Bs("animationiteration"),Bh=Bs("animationstart"),Vh=Bs("transitionend"),Hh=new Map,Rf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(e,t){Hh.set(e,t),Xn(t,[e])}for(var ba=0;ba<Rf.length;ba++){var Pa=Rf[ba],a1=Pa.toLowerCase(),l1=Pa[0].toUpperCase()+Pa.slice(1);En(a1,"on"+l1)}En(zh,"onAnimationEnd");En($h,"onAnimationIteration");En(Bh,"onAnimationStart");En("dblclick","onDoubleClick");En("focusin","onFocus");En("focusout","onBlur");En(Vh,"onTransitionEnd");br("onMouseEnter",["mouseout","mouseover"]);br("onMouseLeave",["mouseout","mouseover"]);br("onPointerEnter",["pointerout","pointerover"]);br("onPointerLeave",["pointerout","pointerover"]);Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u1=new Set("cancel close invalid load scroll toggle".split(" ").concat(oi));function Lf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,a0(r,t,void 0,e),e.currentTarget=null}function Wh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Lf(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Lf(i,a,u),o=l}}}if(Zo)throw e=_l,Zo=!1,_l=null,e}function q(e,t){var n=t[Nl];n===void 0&&(n=t[Nl]=new Set);var r=e+"__bubble";n.has(r)||(Gh(t,e,2,!1),n.add(r))}function Na(e,t,n){var r=0;t&&(r|=4),Gh(n,e,r,t)}var ko="_reactListening"+Math.random().toString(36).slice(2);function Oi(e){if(!e[ko]){e[ko]=!0,Zp.forEach(function(n){n!=="selectionchange"&&(u1.has(n)||Na(n,!1,e),Na(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ko]||(t[ko]=!0,Na("selectionchange",!1,t))}}function Gh(e,t,n,r){switch(Ph(t)){case 1:var i=k0;break;case 4:i=I0;break;default:i=Bu}n=i.bind(null,t,n,e),i=void 0,!wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Aa(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=On(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}mh(function(){var u=o,c=Fu(n),f=[];e:{var p=Hh.get(e);if(p!==void 0){var y=Hu,_=e;switch(e){case"keypress":if(jo(n)===0)break e;case"keydown":case"keyup":y=U0;break;case"focusin":_="focus",y=Ia;break;case"focusout":_="blur",y=Ia;break;case"beforeblur":case"afterblur":y=Ia;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Sf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=C0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=B0;break;case zh:case $h:case Bh:y=N0;break;case Vh:y=H0;break;case"scroll":y=x0;break;case"wheel":y=G0;break;case"copy":case"cut":case"paste":y=O0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=If}var E=(t&4)!==0,k=!E&&e==="scroll",h=E?p!==null?p+"Capture":null:p;E=[];for(var d=u,m;d!==null;){m=d;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,h!==null&&(w=Ti(d,h),w!=null&&E.push(Ri(d,w,m)))),k)break;d=d.return}0<E.length&&(p=new y(p,_,null,n,c),f.push({event:p,listeners:E}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==vl&&(_=n.relatedTarget||n.fromElement)&&(On(_)||_[At]))break e;if((y||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,y?(_=n.relatedTarget||n.toElement,y=u,_=_?On(_):null,_!==null&&(k=Jn(_),_!==k||_.tag!==5&&_.tag!==6)&&(_=null)):(y=null,_=u),y!==_)){if(E=Sf,w="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(E=If,w="onPointerLeave",h="onPointerEnter",d="pointer"),k=y==null?p:lr(y),m=_==null?p:lr(_),p=new E(w,d+"leave",y,n,c),p.target=k,p.relatedTarget=m,w=null,On(c)===u&&(E=new E(h,d+"enter",_,n,c),E.target=m,E.relatedTarget=k,w=E),k=w,y&&_)t:{for(E=y,h=_,d=0,m=E;m;m=nr(m))d++;for(m=0,w=h;w;w=nr(w))m++;for(;0<d-m;)E=nr(E),d--;for(;0<m-d;)h=nr(h),m--;for(;d--;){if(E===h||h!==null&&E===h.alternate)break t;E=nr(E),h=nr(h)}E=null}else E=null;y!==null&&Df(f,p,y,E,!1),_!==null&&k!==null&&Df(f,k,_,E,!0)}}e:{if(p=u?lr(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var x=Z0;else if(Cf(p))if(Dh)x=r1;else{x=t1;var C=e1}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(x=n1);if(x&&(x=x(e,u))){Lh(f,x,n,c);break e}C&&C(e,p,u),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&dl(p,"number",p.value)}switch(C=u?lr(u):window,e){case"focusin":(Cf(C)||C.contentEditable==="true")&&(sr=C,Il=u,mi=null);break;case"focusout":mi=Il=sr=null;break;case"mousedown":xl=!0;break;case"contextmenu":case"mouseup":case"dragend":xl=!1,Of(f,n,c);break;case"selectionchange":if(s1)break;case"keydown":case"keyup":Of(f,n,c)}var P;if(Gu)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else or?Oh(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Ah&&n.locale!=="ko"&&(or||A!=="onCompositionStart"?A==="onCompositionEnd"&&or&&(P=Nh()):(en=c,Vu="value"in en?en.value:en.textContent,or=!0)),C=is(u,A),0<C.length&&(A=new kf(A,e,null,n,c),f.push({event:A,listeners:C}),P?A.data=P:(P=Rh(n),P!==null&&(A.data=P)))),(P=Y0?q0(e,n):Q0(e,n))&&(u=is(u,"onBeforeInput"),0<u.length&&(c=new kf("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=P))}Wh(f,t)})}function Ri(e,t,n){return{instance:e,listener:t,currentTarget:n}}function is(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ti(e,n),o!=null&&r.unshift(Ri(e,o,i)),o=Ti(e,t),o!=null&&r.push(Ri(e,o,i))),e=e.return}return r}function nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Df(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ti(n,o),l!=null&&s.unshift(Ri(n,l,a))):i||(l=Ti(n,o),l!=null&&s.push(Ri(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var c1=/\r\n?/g,f1=/\u0000|\uFFFD/g;function Mf(e){return(typeof e=="string"?e:""+e).replace(c1,`
`).replace(f1,"")}function Io(e,t,n){if(t=Mf(t),Mf(e)!==t&&n)throw Error(I(425))}function os(){}var Tl=null,Cl=null;function bl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pl=typeof setTimeout=="function"?setTimeout:void 0,d1=typeof clearTimeout=="function"?clearTimeout:void 0,jf=typeof Promise=="function"?Promise:void 0,p1=typeof queueMicrotask=="function"?queueMicrotask:typeof jf<"u"?function(e){return jf.resolve(null).then(e).catch(h1)}:Pl;function h1(e){setTimeout(function(){throw e})}function Oa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Pi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Pi(t)}function ln(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ur=Math.random().toString(36).slice(2),lt="__reactFiber$"+Ur,Li="__reactProps$"+Ur,At="__reactContainer$"+Ur,Nl="__reactEvents$"+Ur,m1="__reactListeners$"+Ur,g1="__reactHandles$"+Ur;function On(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[At]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ff(e);e!==null;){if(n=e[lt])return n;e=Ff(e)}return t}e=n,n=e.parentNode}return null}function Zi(e){return e=e[lt]||e[At],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function Vs(e){return e[Li]||null}var Al=[],ur=-1;function Sn(e){return{current:e}}function Q(e){0>ur||(e.current=Al[ur],Al[ur]=null,ur--)}function Y(e,t){ur++,Al[ur]=e.current,e.current=t}var vn={},Ee=Sn(vn),Pe=Sn(!1),zn=vn;function Pr(e,t){var n=e.type.contextTypes;if(!n)return vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function ss(){Q(Pe),Q(Ee)}function Uf(e,t,n){if(Ee.current!==vn)throw Error(I(168));Y(Ee,t),Y(Pe,n)}function Kh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(I(108,e0(e)||"Unknown",i));return ie({},n,r)}function as(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vn,zn=Ee.current,Y(Ee,e),Y(Pe,Pe.current),!0}function zf(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=Kh(e,t,zn),r.__reactInternalMemoizedMergedChildContext=e,Q(Pe),Q(Ee),Y(Ee,e)):Q(Pe),Y(Pe,n)}var St=null,Hs=!1,Ra=!1;function Yh(e){St===null?St=[e]:St.push(e)}function v1(e){Hs=!0,Yh(e)}function kn(){if(!Ra&&St!==null){Ra=!0;var e=0,t=G;try{var n=St;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,Hs=!1}catch(i){throw St!==null&&(St=St.slice(e+1)),wh(Uu,kn),i}finally{G=t,Ra=!1}}return null}var cr=[],fr=0,ls=null,us=0,He=[],We=0,$n=null,kt=1,It="";function bn(e,t){cr[fr++]=us,cr[fr++]=ls,ls=e,us=t}function qh(e,t,n){He[We++]=kt,He[We++]=It,He[We++]=$n,$n=e;var r=kt;e=It;var i=32-et(r)-1;r&=~(1<<i),n+=1;var o=32-et(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,kt=1<<32-et(t)+i|n<<i|r,It=o+e}else kt=1<<o|n<<i|r,It=e}function Yu(e){e.return!==null&&(bn(e,1),qh(e,1,0))}function qu(e){for(;e===ls;)ls=cr[--fr],cr[fr]=null,us=cr[--fr],cr[fr]=null;for(;e===$n;)$n=He[--We],He[We]=null,It=He[--We],He[We]=null,kt=He[--We],He[We]=null}var Me=null,De=null,ee=!1,Ze=null;function Qh(e,t){var n=Ge(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $f(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Me=e,De=ln(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Me=e,De=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$n!==null?{id:kt,overflow:It}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ge(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Me=e,De=null,!0):!1;default:return!1}}function Ol(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rl(e){if(ee){var t=De;if(t){var n=t;if(!$f(e,t)){if(Ol(e))throw Error(I(418));t=ln(n.nextSibling);var r=Me;t&&$f(e,t)?Qh(r,n):(e.flags=e.flags&-4097|2,ee=!1,Me=e)}}else{if(Ol(e))throw Error(I(418));e.flags=e.flags&-4097|2,ee=!1,Me=e}}}function Bf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function xo(e){if(e!==Me)return!1;if(!ee)return Bf(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!bl(e.type,e.memoizedProps)),t&&(t=De)){if(Ol(e))throw Xh(),Error(I(418));for(;t;)Qh(e,t),t=ln(t.nextSibling)}if(Bf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){De=ln(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}De=null}}else De=Me?ln(e.stateNode.nextSibling):null;return!0}function Xh(){for(var e=De;e;)e=ln(e.nextSibling)}function Nr(){De=Me=null,ee=!1}function Qu(e){Ze===null?Ze=[e]:Ze.push(e)}var y1=Ut.ReactCurrentBatchConfig;function Zr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function To(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vf(e){var t=e._init;return t(e._payload)}function Jh(e){function t(h,d){if(e){var m=h.deletions;m===null?(h.deletions=[d],h.flags|=16):m.push(d)}}function n(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function i(h,d){return h=dn(h,d),h.index=0,h.sibling=null,h}function o(h,d,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<d?(h.flags|=2,d):m):(h.flags|=2,d)):(h.flags|=1048576,d)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,d,m,w){return d===null||d.tag!==6?(d=za(m,h.mode,w),d.return=h,d):(d=i(d,m),d.return=h,d)}function l(h,d,m,w){var x=m.type;return x===ir?c(h,d,m.props.children,w,m.key):d!==null&&(d.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Wt&&Vf(x)===d.type)?(w=i(d,m.props),w.ref=Zr(h,d,m),w.return=h,w):(w=Ho(m.type,m.key,m.props,null,h.mode,w),w.ref=Zr(h,d,m),w.return=h,w)}function u(h,d,m,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=$a(m,h.mode,w),d.return=h,d):(d=i(d,m.children||[]),d.return=h,d)}function c(h,d,m,w,x){return d===null||d.tag!==7?(d=jn(m,h.mode,w,x),d.return=h,d):(d=i(d,m),d.return=h,d)}function f(h,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=za(""+d,h.mode,m),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case mo:return m=Ho(d.type,d.key,d.props,null,h.mode,m),m.ref=Zr(h,null,d),m.return=h,m;case rr:return d=$a(d,h.mode,m),d.return=h,d;case Wt:var w=d._init;return f(h,w(d._payload),m)}if(ri(d)||Yr(d))return d=jn(d,h.mode,m,null),d.return=h,d;To(h,d)}return null}function p(h,d,m,w){var x=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return x!==null?null:a(h,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case mo:return m.key===x?l(h,d,m,w):null;case rr:return m.key===x?u(h,d,m,w):null;case Wt:return x=m._init,p(h,d,x(m._payload),w)}if(ri(m)||Yr(m))return x!==null?null:c(h,d,m,w,null);To(h,m)}return null}function y(h,d,m,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(m)||null,a(d,h,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case mo:return h=h.get(w.key===null?m:w.key)||null,l(d,h,w,x);case rr:return h=h.get(w.key===null?m:w.key)||null,u(d,h,w,x);case Wt:var C=w._init;return y(h,d,m,C(w._payload),x)}if(ri(w)||Yr(w))return h=h.get(m)||null,c(d,h,w,x,null);To(d,w)}return null}function _(h,d,m,w){for(var x=null,C=null,P=d,A=d=0,$=null;P!==null&&A<m.length;A++){P.index>A?($=P,P=null):$=P.sibling;var M=p(h,P,m[A],w);if(M===null){P===null&&(P=$);break}e&&P&&M.alternate===null&&t(h,P),d=o(M,d,A),C===null?x=M:C.sibling=M,C=M,P=$}if(A===m.length)return n(h,P),ee&&bn(h,A),x;if(P===null){for(;A<m.length;A++)P=f(h,m[A],w),P!==null&&(d=o(P,d,A),C===null?x=P:C.sibling=P,C=P);return ee&&bn(h,A),x}for(P=r(h,P);A<m.length;A++)$=y(P,h,A,m[A],w),$!==null&&(e&&$.alternate!==null&&P.delete($.key===null?A:$.key),d=o($,d,A),C===null?x=$:C.sibling=$,C=$);return e&&P.forEach(function(Re){return t(h,Re)}),ee&&bn(h,A),x}function E(h,d,m,w){var x=Yr(m);if(typeof x!="function")throw Error(I(150));if(m=x.call(m),m==null)throw Error(I(151));for(var C=x=null,P=d,A=d=0,$=null,M=m.next();P!==null&&!M.done;A++,M=m.next()){P.index>A?($=P,P=null):$=P.sibling;var Re=p(h,P,M.value,w);if(Re===null){P===null&&(P=$);break}e&&P&&Re.alternate===null&&t(h,P),d=o(Re,d,A),C===null?x=Re:C.sibling=Re,C=Re,P=$}if(M.done)return n(h,P),ee&&bn(h,A),x;if(P===null){for(;!M.done;A++,M=m.next())M=f(h,M.value,w),M!==null&&(d=o(M,d,A),C===null?x=M:C.sibling=M,C=M);return ee&&bn(h,A),x}for(P=r(h,P);!M.done;A++,M=m.next())M=y(P,h,A,M.value,w),M!==null&&(e&&M.alternate!==null&&P.delete(M.key===null?A:M.key),d=o(M,d,A),C===null?x=M:C.sibling=M,C=M);return e&&P.forEach(function(W){return t(h,W)}),ee&&bn(h,A),x}function k(h,d,m,w){if(typeof m=="object"&&m!==null&&m.type===ir&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case mo:e:{for(var x=m.key,C=d;C!==null;){if(C.key===x){if(x=m.type,x===ir){if(C.tag===7){n(h,C.sibling),d=i(C,m.props.children),d.return=h,h=d;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Wt&&Vf(x)===C.type){n(h,C.sibling),d=i(C,m.props),d.ref=Zr(h,C,m),d.return=h,h=d;break e}n(h,C);break}else t(h,C);C=C.sibling}m.type===ir?(d=jn(m.props.children,h.mode,w,m.key),d.return=h,h=d):(w=Ho(m.type,m.key,m.props,null,h.mode,w),w.ref=Zr(h,d,m),w.return=h,h=w)}return s(h);case rr:e:{for(C=m.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(h,d.sibling),d=i(d,m.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else t(h,d);d=d.sibling}d=$a(m,h.mode,w),d.return=h,h=d}return s(h);case Wt:return C=m._init,k(h,d,C(m._payload),w)}if(ri(m))return _(h,d,m,w);if(Yr(m))return E(h,d,m,w);To(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(h,d.sibling),d=i(d,m),d.return=h,h=d):(n(h,d),d=za(m,h.mode,w),d.return=h,h=d),s(h)):n(h,d)}return k}var Ar=Jh(!0),Zh=Jh(!1),cs=Sn(null),fs=null,dr=null,Xu=null;function Ju(){Xu=dr=fs=null}function Zu(e){var t=cs.current;Q(cs),e._currentValue=t}function Ll(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Sr(e,t){fs=e,Xu=dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(be=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(Xu!==e)if(e={context:e,memoizedValue:t,next:null},dr===null){if(fs===null)throw Error(I(308));dr=e,fs.dependencies={lanes:0,firstContext:e}}else dr=dr.next=e;return t}var Rn=null;function ec(e){Rn===null?Rn=[e]:Rn.push(e)}function em(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ec(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gt=!1;function tc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ot(e,n)}return i=r.interleaved,i===null?(t.next=t,ec(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ot(e,n)}function Fo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zu(e,n)}}function Hf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ds(e,t,n,r){var i=e.updateQueue;Gt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var p=a.lane,y=a.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=e,E=a;switch(p=t,y=n,E.tag){case 1:if(_=E.payload,typeof _=="function"){f=_.call(y,f,p);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=E.payload,p=typeof _=="function"?_.call(y,f,p):_,p==null)break e;f=ie({},f,p);break e;case 2:Gt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=f):c=c.next=y,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Vn|=s,e.lanes=s,e.memoizedState=f}}function Wf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var eo={},ht=Sn(eo),Di=Sn(eo),Mi=Sn(eo);function Ln(e){if(e===eo)throw Error(I(174));return e}function nc(e,t){switch(Y(Mi,t),Y(Di,e),Y(ht,eo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hl(t,e)}Q(ht),Y(ht,t)}function Or(){Q(ht),Q(Di),Q(Mi)}function nm(e){Ln(Mi.current);var t=Ln(ht.current),n=hl(t,e.type);t!==n&&(Y(Di,e),Y(ht,n))}function rc(e){Di.current===e&&(Q(ht),Q(Di))}var ne=Sn(0);function ps(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var La=[];function ic(){for(var e=0;e<La.length;e++)La[e]._workInProgressVersionPrimary=null;La.length=0}var Uo=Ut.ReactCurrentDispatcher,Da=Ut.ReactCurrentBatchConfig,Bn=0,re=null,ce=null,de=null,hs=!1,gi=!1,ji=0,w1=0;function ye(){throw Error(I(321))}function oc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function sc(e,t,n,r,i,o){if(Bn=o,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Uo.current=e===null||e.memoizedState===null?k1:I1,e=n(r,i),gi){o=0;do{if(gi=!1,ji=0,25<=o)throw Error(I(301));o+=1,de=ce=null,t.updateQueue=null,Uo.current=x1,e=n(r,i)}while(gi)}if(Uo.current=ms,t=ce!==null&&ce.next!==null,Bn=0,de=ce=re=null,hs=!1,t)throw Error(I(300));return e}function ac(){var e=ji!==0;return ji=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?re.memoizedState=de=e:de=de.next=e,de}function qe(){if(ce===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=de===null?re.memoizedState:de.next;if(t!==null)de=t,ce=e;else{if(e===null)throw Error(I(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},de===null?re.memoizedState=de=e:de=de.next=e}return de}function Fi(e,t){return typeof t=="function"?t(e):t}function Ma(e){var t=qe(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=ce,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Bn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,re.lanes|=c,Vn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,nt(r,t.memoizedState)||(be=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,re.lanes|=o,Vn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ja(e){var t=qe(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);nt(o,t.memoizedState)||(be=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function rm(){}function im(e,t){var n=re,r=qe(),i=t(),o=!nt(r.memoizedState,i);if(o&&(r.memoizedState=i,be=!0),r=r.queue,lc(am.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,Ui(9,sm.bind(null,n,r,i,t),void 0,null),pe===null)throw Error(I(349));Bn&30||om(n,t,i)}return i}function om(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sm(e,t,n,r){t.value=n,t.getSnapshot=r,lm(t)&&um(e)}function am(e,t,n){return n(function(){lm(t)&&um(e)})}function lm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function um(e){var t=Ot(e,1);t!==null&&tt(t,e,1,-1)}function Gf(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:e},t.queue=e,e=e.dispatch=S1.bind(null,re,e),[t.memoizedState,e]}function Ui(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cm(){return qe().memoizedState}function zo(e,t,n,r){var i=st();re.flags|=e,i.memoizedState=Ui(1|t,n,void 0,r===void 0?null:r)}function Ws(e,t,n,r){var i=qe();r=r===void 0?null:r;var o=void 0;if(ce!==null){var s=ce.memoizedState;if(o=s.destroy,r!==null&&oc(r,s.deps)){i.memoizedState=Ui(t,n,o,r);return}}re.flags|=e,i.memoizedState=Ui(1|t,n,o,r)}function Kf(e,t){return zo(8390656,8,e,t)}function lc(e,t){return Ws(2048,8,e,t)}function fm(e,t){return Ws(4,2,e,t)}function dm(e,t){return Ws(4,4,e,t)}function pm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hm(e,t,n){return n=n!=null?n.concat([e]):null,Ws(4,4,pm.bind(null,t,e),n)}function uc(){}function mm(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gm(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vm(e,t,n){return Bn&21?(nt(n,t)||(n=Sh(),re.lanes|=n,Vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=n)}function _1(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=Da.transition;Da.transition={};try{e(!1),t()}finally{G=n,Da.transition=r}}function ym(){return qe().memoizedState}function E1(e,t,n){var r=fn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wm(e))_m(t,n);else if(n=em(e,t,n,r),n!==null){var i=ke();tt(n,e,r,i),Em(n,t,r)}}function S1(e,t,n){var r=fn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wm(e))_m(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,nt(a,s)){var l=t.interleaved;l===null?(i.next=i,ec(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=em(e,t,i,r),n!==null&&(i=ke(),tt(n,e,r,i),Em(n,t,r))}}function wm(e){var t=e.alternate;return e===re||t!==null&&t===re}function _m(e,t){gi=hs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Em(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zu(e,n)}}var ms={readContext:Ye,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},k1={readContext:Ye,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:Kf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zo(4194308,4,pm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zo(4194308,4,e,t)},useInsertionEffect:function(e,t){return zo(4,2,e,t)},useMemo:function(e,t){var n=st();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=st();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=E1.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:Gf,useDebugValue:uc,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=Gf(!1),t=e[0];return e=_1.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=re,i=st();if(ee){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),pe===null)throw Error(I(349));Bn&30||om(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Kf(am.bind(null,r,o,e),[e]),r.flags|=2048,Ui(9,sm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=st(),t=pe.identifierPrefix;if(ee){var n=It,r=kt;n=(r&~(1<<32-et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ji++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=w1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},I1={readContext:Ye,useCallback:mm,useContext:Ye,useEffect:lc,useImperativeHandle:hm,useInsertionEffect:fm,useLayoutEffect:dm,useMemo:gm,useReducer:Ma,useRef:cm,useState:function(){return Ma(Fi)},useDebugValue:uc,useDeferredValue:function(e){var t=qe();return vm(t,ce.memoizedState,e)},useTransition:function(){var e=Ma(Fi)[0],t=qe().memoizedState;return[e,t]},useMutableSource:rm,useSyncExternalStore:im,useId:ym,unstable_isNewReconciler:!1},x1={readContext:Ye,useCallback:mm,useContext:Ye,useEffect:lc,useImperativeHandle:hm,useInsertionEffect:fm,useLayoutEffect:dm,useMemo:gm,useReducer:ja,useRef:cm,useState:function(){return ja(Fi)},useDebugValue:uc,useDeferredValue:function(e){var t=qe();return ce===null?t.memoizedState=e:vm(t,ce.memoizedState,e)},useTransition:function(){var e=ja(Fi)[0],t=qe().memoizedState;return[e,t]},useMutableSource:rm,useSyncExternalStore:im,useId:ym,unstable_isNewReconciler:!1};function Xe(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Dl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gs={isMounted:function(e){return(e=e._reactInternals)?Jn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),i=fn(e),o=bt(r,i);o.payload=t,n!=null&&(o.callback=n),t=un(e,o,i),t!==null&&(tt(t,e,i,r),Fo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),i=fn(e),o=bt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=un(e,o,i),t!==null&&(tt(t,e,i,r),Fo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=fn(e),i=bt(n,r);i.tag=2,t!=null&&(i.callback=t),t=un(e,i,r),t!==null&&(tt(t,e,r,n),Fo(t,e,r))}};function Yf(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ai(n,r)||!Ai(i,o):!0}function Sm(e,t,n){var r=!1,i=vn,o=t.contextType;return typeof o=="object"&&o!==null?o=Ye(o):(i=Ne(t)?zn:Ee.current,r=t.contextTypes,o=(r=r!=null)?Pr(e,i):vn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Gs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function qf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Gs.enqueueReplaceState(t,t.state,null)}function Ml(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},tc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ye(o):(o=Ne(t)?zn:Ee.current,i.context=Pr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Dl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Gs.enqueueReplaceState(i,i.state,null),ds(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Rr(e,t){try{var n="",r=t;do n+=Zy(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Fa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function jl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var T1=typeof WeakMap=="function"?WeakMap:Map;function km(e,t,n){n=bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vs||(vs=!0,Kl=r),jl(e,t)},n}function Im(e,t,n){n=bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){jl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){jl(e,t),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Qf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new T1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=z1.bind(null,e,t,n),t.then(e,e))}function Xf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Jf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=bt(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e)}var C1=Ut.ReactCurrentOwner,be=!1;function Se(e,t,n,r){t.child=e===null?Zh(t,null,n,r):Ar(t,e.child,n,r)}function Zf(e,t,n,r,i){n=n.render;var o=t.ref;return Sr(t,i),r=sc(e,t,n,r,o,i),n=ac(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rt(e,t,i)):(ee&&n&&Yu(t),t.flags|=1,Se(e,t,r,i),t.child)}function ed(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!vc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,xm(e,t,o,r,i)):(e=Ho(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ai,n(s,r)&&e.ref===t.ref)return Rt(e,t,i)}return t.flags|=1,e=dn(o,r),e.ref=t.ref,e.return=t,t.child=e}function xm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ai(o,r)&&e.ref===t.ref)if(be=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(be=!0);else return t.lanes=e.lanes,Rt(e,t,i)}return Fl(e,t,n,r,i)}function Tm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(hr,Le),Le|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(hr,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Y(hr,Le),Le|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Y(hr,Le),Le|=r;return Se(e,t,i,n),t.child}function Cm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fl(e,t,n,r,i){var o=Ne(n)?zn:Ee.current;return o=Pr(t,o),Sr(t,i),n=sc(e,t,n,r,o,i),r=ac(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rt(e,t,i)):(ee&&r&&Yu(t),t.flags|=1,Se(e,t,n,i),t.child)}function td(e,t,n,r,i){if(Ne(n)){var o=!0;as(t)}else o=!1;if(Sr(t,i),t.stateNode===null)$o(e,t),Sm(t,n,r),Ml(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=Ne(n)?zn:Ee.current,u=Pr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&qf(t,s,r,u),Gt=!1;var p=t.memoizedState;s.state=p,ds(t,r,s,i),l=t.memoizedState,a!==r||p!==l||Pe.current||Gt?(typeof c=="function"&&(Dl(t,n,c,r),l=t.memoizedState),(a=Gt||Yf(t,n,a,r,p,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,tm(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Xe(t.type,a),s.props=u,f=t.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ye(l):(l=Ne(n)?zn:Ee.current,l=Pr(t,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||p!==l)&&qf(t,s,r,l),Gt=!1,p=t.memoizedState,s.state=p,ds(t,r,s,i);var _=t.memoizedState;a!==f||p!==_||Pe.current||Gt?(typeof y=="function"&&(Dl(t,n,y,r),_=t.memoizedState),(u=Gt||Yf(t,n,u,r,p,_,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,_,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),s.props=r,s.state=_,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ul(e,t,n,r,o,i)}function Ul(e,t,n,r,i,o){Cm(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&zf(t,n,!1),Rt(e,t,o);r=t.stateNode,C1.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Ar(t,e.child,null,o),t.child=Ar(t,null,a,o)):Se(e,t,a,o),t.memoizedState=r.state,i&&zf(t,n,!0),t.child}function bm(e){var t=e.stateNode;t.pendingContext?Uf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Uf(e,t.context,!1),nc(e,t.containerInfo)}function nd(e,t,n,r,i){return Nr(),Qu(i),t.flags|=256,Se(e,t,n,r),t.child}var zl={dehydrated:null,treeContext:null,retryLane:0};function $l(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pm(e,t,n){var r=t.pendingProps,i=ne.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(ne,i&1),e===null)return Rl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=qs(s,r,0,null),e=jn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=$l(n),t.memoizedState=zl,e):cc(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return b1(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=dn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=dn(a,o):(o=jn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?$l(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=zl,r}return o=e.child,e=o.sibling,r=dn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function cc(e,t){return t=qs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Co(e,t,n,r){return r!==null&&Qu(r),Ar(t,e.child,null,n),e=cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function b1(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Fa(Error(I(422))),Co(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=qs({mode:"visible",children:r.children},i,0,null),o=jn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ar(t,e.child,null,s),t.child.memoizedState=$l(s),t.memoizedState=zl,o);if(!(t.mode&1))return Co(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(I(419)),r=Fa(o,r,void 0),Co(e,t,s,r)}if(a=(s&e.childLanes)!==0,be||a){if(r=pe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ot(e,i),tt(r,e,i,-1))}return gc(),r=Fa(Error(I(421))),Co(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=$1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,De=ln(i.nextSibling),Me=t,ee=!0,Ze=null,e!==null&&(He[We++]=kt,He[We++]=It,He[We++]=$n,kt=e.id,It=e.overflow,$n=t),t=cc(t,r.children),t.flags|=4096,t)}function rd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ll(e.return,t,n)}function Ua(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Nm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Se(e,t,r.children,n),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rd(e,n,t);else if(e.tag===19)rd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(ne,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ps(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ua(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ps(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ua(t,!0,n,null,o);break;case"together":Ua(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $o(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function P1(e,t,n){switch(t.tag){case 3:bm(t),Nr();break;case 5:nm(t);break;case 1:Ne(t.type)&&as(t);break;case 4:nc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Y(cs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?Pm(e,t,n):(Y(ne,ne.current&1),e=Rt(e,t,n),e!==null?e.sibling:null);Y(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Nm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,Tm(e,t,n)}return Rt(e,t,n)}var Am,Bl,Om,Rm;Am=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bl=function(){};Om=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ln(ht.current);var o=null;switch(n){case"input":i=cl(e,i),r=cl(e,r),o=[];break;case"select":i=ie({},i,{value:void 0}),r=ie({},r,{value:void 0}),o=[];break;case"textarea":i=pl(e,i),r=pl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=os)}ml(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ii.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ii.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&q("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Rm=function(e,t,n,r){n!==r&&(t.flags|=4)};function ei(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function N1(e,t,n){var r=t.pendingProps;switch(qu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return Ne(t.type)&&ss(),we(t),null;case 3:return r=t.stateNode,Or(),Q(Pe),Q(Ee),ic(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(Ql(Ze),Ze=null))),Bl(e,t),we(t),null;case 5:rc(t);var i=Ln(Mi.current);if(n=t.type,e!==null&&t.stateNode!=null)Om(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return we(t),null}if(e=Ln(ht.current),xo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[lt]=t,r[Li]=o,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(i=0;i<oi.length;i++)q(oi[i],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":df(r,o),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},q("invalid",r);break;case"textarea":hf(r,o),q("invalid",r)}ml(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Io(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Io(r.textContent,a,e),i=["children",""+a]):Ii.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&q("scroll",r)}switch(n){case"input":go(r),pf(r,o,!0);break;case"textarea":go(r),mf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=os)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ah(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[lt]=t,e[Li]=r,Am(e,t,!1,!1),t.stateNode=e;e:{switch(s=gl(n,r),n){case"dialog":q("cancel",e),q("close",e),i=r;break;case"iframe":case"object":case"embed":q("load",e),i=r;break;case"video":case"audio":for(i=0;i<oi.length;i++)q(oi[i],e);i=r;break;case"source":q("error",e),i=r;break;case"img":case"image":case"link":q("error",e),q("load",e),i=r;break;case"details":q("toggle",e),i=r;break;case"input":df(e,r),i=cl(e,r),q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ie({},r,{value:void 0}),q("invalid",e);break;case"textarea":hf(e,r),i=pl(e,r),q("invalid",e);break;default:i=r}ml(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?ch(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xi(e,l):typeof l=="number"&&xi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ii.hasOwnProperty(o)?l!=null&&o==="onScroll"&&q("scroll",e):l!=null&&Lu(e,o,l,s))}switch(n){case"input":go(e),pf(e,r,!1);break;case"textarea":go(e),mf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?yr(e,!!r.multiple,o,!1):r.defaultValue!=null&&yr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=os)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)Rm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=Ln(Mi.current),Ln(ht.current),xo(t)){if(r=t.stateNode,n=t.memoizedProps,r[lt]=t,(o=r.nodeValue!==n)&&(e=Me,e!==null))switch(e.tag){case 3:Io(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Io(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[lt]=t,t.stateNode=r}return we(t),null;case 13:if(Q(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&De!==null&&t.mode&1&&!(t.flags&128))Xh(),Nr(),t.flags|=98560,o=!1;else if(o=xo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(I(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[lt]=t}else Nr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;we(t),o=!1}else Ze!==null&&(Ql(Ze),Ze=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?fe===0&&(fe=3):gc())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return Or(),Bl(e,t),e===null&&Oi(t.stateNode.containerInfo),we(t),null;case 10:return Zu(t.type._context),we(t),null;case 17:return Ne(t.type)&&ss(),we(t),null;case 19:if(Q(ne),o=t.memoizedState,o===null)return we(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)ei(o,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ps(e),s!==null){for(t.flags|=128,ei(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(ne,ne.current&1|2),t.child}e=e.sibling}o.tail!==null&&se()>Lr&&(t.flags|=128,r=!0,ei(o,!1),t.lanes=4194304)}else{if(!r)if(e=ps(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ei(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ee)return we(t),null}else 2*se()-o.renderingStartTime>Lr&&n!==1073741824&&(t.flags|=128,r=!0,ei(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=se(),t.sibling=null,n=ne.current,Y(ne,r?n&1|2:n&1),t):(we(t),null);case 22:case 23:return mc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Le&1073741824&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function A1(e,t){switch(qu(t),t.tag){case 1:return Ne(t.type)&&ss(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Or(),Q(Pe),Q(Ee),ic(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return rc(t),null;case 13:if(Q(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));Nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(ne),null;case 4:return Or(),null;case 10:return Zu(t.type._context),null;case 22:case 23:return mc(),null;case 24:return null;default:return null}}var bo=!1,_e=!1,O1=typeof WeakSet=="function"?WeakSet:Set,N=null;function pr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function Vl(e,t,n){try{n()}catch(r){oe(e,t,r)}}var id=!1;function R1(e,t){if(Tl=ns,e=Fh(),Ku(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,p=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(y=f.firstChild)!==null;)p=f,f=y;for(;;){if(f===e)break t;if(p===n&&++u===i&&(a=s),p===o&&++c===r&&(l=s),(y=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cl={focusedElem:e,selectionRange:n},ns=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var E=_.memoizedProps,k=_.memoizedState,h=t.stateNode,d=h.getSnapshotBeforeUpdate(t.elementType===t.type?E:Xe(t.type,E),k);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(w){oe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return _=id,id=!1,_}function vi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Vl(t,n,o)}i=i.next}while(i!==r)}}function Ks(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Hl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Lm(e){var t=e.alternate;t!==null&&(e.alternate=null,Lm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[lt],delete t[Li],delete t[Nl],delete t[m1],delete t[g1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dm(e){return e.tag===5||e.tag===3||e.tag===4}function od(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=os));else if(r!==4&&(e=e.child,e!==null))for(Wl(e,t,n),e=e.sibling;e!==null;)Wl(e,t,n),e=e.sibling}function Gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gl(e,t,n),e=e.sibling;e!==null;)Gl(e,t,n),e=e.sibling}var me=null,Je=!1;function Bt(e,t,n){for(n=n.child;n!==null;)Mm(e,t,n),n=n.sibling}function Mm(e,t,n){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Us,n)}catch{}switch(n.tag){case 5:_e||pr(n,t);case 6:var r=me,i=Je;me=null,Bt(e,t,n),me=r,Je=i,me!==null&&(Je?(e=me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(Je?(e=me,n=n.stateNode,e.nodeType===8?Oa(e.parentNode,n):e.nodeType===1&&Oa(e,n),Pi(e)):Oa(me,n.stateNode));break;case 4:r=me,i=Je,me=n.stateNode.containerInfo,Je=!0,Bt(e,t,n),me=r,Je=i;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Vl(n,t,s),i=i.next}while(i!==r)}Bt(e,t,n);break;case 1:if(!_e&&(pr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){oe(n,t,a)}Bt(e,t,n);break;case 21:Bt(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,Bt(e,t,n),_e=r):Bt(e,t,n);break;default:Bt(e,t,n)}}function sd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new O1),t.forEach(function(r){var i=B1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:me=a.stateNode,Je=!1;break e;case 3:me=a.stateNode.containerInfo,Je=!0;break e;case 4:me=a.stateNode.containerInfo,Je=!0;break e}a=a.return}if(me===null)throw Error(I(160));Mm(o,s,i),me=null,Je=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){oe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jm(t,e),t=t.sibling}function jm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),ot(e),r&4){try{vi(3,e,e.return),Ks(3,e)}catch(E){oe(e,e.return,E)}try{vi(5,e,e.return)}catch(E){oe(e,e.return,E)}}break;case 1:Qe(t,e),ot(e),r&512&&n!==null&&pr(n,n.return);break;case 5:if(Qe(t,e),ot(e),r&512&&n!==null&&pr(n,n.return),e.flags&32){var i=e.stateNode;try{xi(i,"")}catch(E){oe(e,e.return,E)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&oh(i,o),gl(a,s);var u=gl(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?ch(i,f):c==="dangerouslySetInnerHTML"?lh(i,f):c==="children"?xi(i,f):Lu(i,c,f,u)}switch(a){case"input":fl(i,o);break;case"textarea":sh(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?yr(i,!!o.multiple,y,!1):p!==!!o.multiple&&(o.defaultValue!=null?yr(i,!!o.multiple,o.defaultValue,!0):yr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Li]=o}catch(E){oe(e,e.return,E)}}break;case 6:if(Qe(t,e),ot(e),r&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(E){oe(e,e.return,E)}}break;case 3:if(Qe(t,e),ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pi(t.containerInfo)}catch(E){oe(e,e.return,E)}break;case 4:Qe(t,e),ot(e);break;case 13:Qe(t,e),ot(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(pc=se())),r&4&&sd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(u=_e)||c,Qe(t,e),_e=u):Qe(t,e),ot(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(N=e,c=e.child;c!==null;){for(f=N=c;N!==null;){switch(p=N,y=p.child,p.tag){case 0:case 11:case 14:case 15:vi(4,p,p.return);break;case 1:pr(p,p.return);var _=p.stateNode;if(typeof _.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(E){oe(r,n,E)}}break;case 5:pr(p,p.return);break;case 22:if(p.memoizedState!==null){ld(f);continue}}y!==null?(y.return=p,N=y):ld(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=uh("display",s))}catch(E){oe(e,e.return,E)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(E){oe(e,e.return,E)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Qe(t,e),ot(e),r&4&&sd(e);break;case 21:break;default:Qe(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Dm(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xi(i,""),r.flags&=-33);var o=od(e);Gl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=od(e);Wl(e,a,s);break;default:throw Error(I(161))}}catch(l){oe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function L1(e,t,n){N=e,Fm(e)}function Fm(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||bo;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||_e;a=bo;var u=_e;if(bo=s,(_e=l)&&!u)for(N=i;N!==null;)s=N,l=s.child,s.tag===22&&s.memoizedState!==null?ud(i):l!==null?(l.return=s,N=l):ud(i);for(;o!==null;)N=o,Fm(o),o=o.sibling;N=i,bo=a,_e=u}ad(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):ad(e)}}function ad(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_e||Ks(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Wf(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wf(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Pi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}_e||t.flags&512&&Hl(t)}catch(p){oe(t,t.return,p)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function ld(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function ud(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ks(4,t)}catch(l){oe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){oe(t,i,l)}}var o=t.return;try{Hl(t)}catch(l){oe(t,o,l)}break;case 5:var s=t.return;try{Hl(t)}catch(l){oe(t,s,l)}}}catch(l){oe(t,t.return,l)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var D1=Math.ceil,gs=Ut.ReactCurrentDispatcher,fc=Ut.ReactCurrentOwner,Ke=Ut.ReactCurrentBatchConfig,B=0,pe=null,ue=null,ge=0,Le=0,hr=Sn(0),fe=0,zi=null,Vn=0,Ys=0,dc=0,yi=null,Ce=null,pc=0,Lr=1/0,Et=null,vs=!1,Kl=null,cn=null,Po=!1,tn=null,ys=0,wi=0,Yl=null,Bo=-1,Vo=0;function ke(){return B&6?se():Bo!==-1?Bo:Bo=se()}function fn(e){return e.mode&1?B&2&&ge!==0?ge&-ge:y1.transition!==null?(Vo===0&&(Vo=Sh()),Vo):(e=G,e!==0||(e=window.event,e=e===void 0?16:Ph(e.type)),e):1}function tt(e,t,n,r){if(50<wi)throw wi=0,Yl=null,Error(I(185));Xi(e,n,r),(!(B&2)||e!==pe)&&(e===pe&&(!(B&2)&&(Ys|=n),fe===4&&Yt(e,ge)),Ae(e,r),n===1&&B===0&&!(t.mode&1)&&(Lr=se()+500,Hs&&kn()))}function Ae(e,t){var n=e.callbackNode;y0(e,t);var r=ts(e,e===pe?ge:0);if(r===0)n!==null&&yf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&yf(n),t===1)e.tag===0?v1(cd.bind(null,e)):Yh(cd.bind(null,e)),p1(function(){!(B&6)&&kn()}),n=null;else{switch(kh(r)){case 1:n=Uu;break;case 4:n=_h;break;case 16:n=es;break;case 536870912:n=Eh;break;default:n=es}n=Gm(n,Um.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Um(e,t){if(Bo=-1,Vo=0,B&6)throw Error(I(327));var n=e.callbackNode;if(kr()&&e.callbackNode!==n)return null;var r=ts(e,e===pe?ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ws(e,r);else{t=r;var i=B;B|=2;var o=$m();(pe!==e||ge!==t)&&(Et=null,Lr=se()+500,Mn(e,t));do try{F1();break}catch(a){zm(e,a)}while(!0);Ju(),gs.current=o,B=i,ue!==null?t=0:(pe=null,ge=0,t=fe)}if(t!==0){if(t===2&&(i=El(e),i!==0&&(r=i,t=ql(e,i))),t===1)throw n=zi,Mn(e,0),Yt(e,r),Ae(e,se()),n;if(t===6)Yt(e,r);else{if(i=e.current.alternate,!(r&30)&&!M1(i)&&(t=ws(e,r),t===2&&(o=El(e),o!==0&&(r=o,t=ql(e,o))),t===1))throw n=zi,Mn(e,0),Yt(e,r),Ae(e,se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:Pn(e,Ce,Et);break;case 3:if(Yt(e,r),(r&130023424)===r&&(t=pc+500-se(),10<t)){if(ts(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Pl(Pn.bind(null,e,Ce,Et),t);break}Pn(e,Ce,Et);break;case 4:if(Yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-et(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*D1(r/1960))-r,10<r){e.timeoutHandle=Pl(Pn.bind(null,e,Ce,Et),r);break}Pn(e,Ce,Et);break;case 5:Pn(e,Ce,Et);break;default:throw Error(I(329))}}}return Ae(e,se()),e.callbackNode===n?Um.bind(null,e):null}function ql(e,t){var n=yi;return e.current.memoizedState.isDehydrated&&(Mn(e,t).flags|=256),e=ws(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&Ql(t)),e}function Ql(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function M1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!nt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Yt(e,t){for(t&=~dc,t&=~Ys,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-et(t),r=1<<n;e[n]=-1,t&=~r}}function cd(e){if(B&6)throw Error(I(327));kr();var t=ts(e,0);if(!(t&1))return Ae(e,se()),null;var n=ws(e,t);if(e.tag!==0&&n===2){var r=El(e);r!==0&&(t=r,n=ql(e,r))}if(n===1)throw n=zi,Mn(e,0),Yt(e,t),Ae(e,se()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pn(e,Ce,Et),Ae(e,se()),null}function hc(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(Lr=se()+500,Hs&&kn())}}function Hn(e){tn!==null&&tn.tag===0&&!(B&6)&&kr();var t=B;B|=1;var n=Ke.transition,r=G;try{if(Ke.transition=null,G=1,e)return e()}finally{G=r,Ke.transition=n,B=t,!(B&6)&&kn()}}function mc(){Le=hr.current,Q(hr)}function Mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,d1(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(qu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ss();break;case 3:Or(),Q(Pe),Q(Ee),ic();break;case 5:rc(r);break;case 4:Or();break;case 13:Q(ne);break;case 19:Q(ne);break;case 10:Zu(r.type._context);break;case 22:case 23:mc()}n=n.return}if(pe=e,ue=e=dn(e.current,null),ge=Le=t,fe=0,zi=null,dc=Ys=Vn=0,Ce=yi=null,Rn!==null){for(t=0;t<Rn.length;t++)if(n=Rn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Rn=null}return e}function zm(e,t){do{var n=ue;try{if(Ju(),Uo.current=ms,hs){for(var r=re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hs=!1}if(Bn=0,de=ce=re=null,gi=!1,ji=0,fc.current=null,n===null||n.return===null){fe=1,zi=t,ue=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=ge,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Xf(s);if(y!==null){y.flags&=-257,Jf(y,s,a,o,t),y.mode&1&&Qf(o,u,t),t=y,l=u;var _=t.updateQueue;if(_===null){var E=new Set;E.add(l),t.updateQueue=E}else _.add(l);break e}else{if(!(t&1)){Qf(o,u,t),gc();break e}l=Error(I(426))}}else if(ee&&a.mode&1){var k=Xf(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Jf(k,s,a,o,t),Qu(Rr(l,a));break e}}o=l=Rr(l,a),fe!==4&&(fe=2),yi===null?yi=[o]:yi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=km(o,l,t);Hf(o,h);break e;case 1:a=l;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(cn===null||!cn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Im(o,a,t);Hf(o,w);break e}}o=o.return}while(o!==null)}Vm(n)}catch(x){t=x,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function $m(){var e=gs.current;return gs.current=ms,e===null?ms:e}function gc(){(fe===0||fe===3||fe===2)&&(fe=4),pe===null||!(Vn&268435455)&&!(Ys&268435455)||Yt(pe,ge)}function ws(e,t){var n=B;B|=2;var r=$m();(pe!==e||ge!==t)&&(Et=null,Mn(e,t));do try{j1();break}catch(i){zm(e,i)}while(!0);if(Ju(),B=n,gs.current=r,ue!==null)throw Error(I(261));return pe=null,ge=0,fe}function j1(){for(;ue!==null;)Bm(ue)}function F1(){for(;ue!==null&&!u0();)Bm(ue)}function Bm(e){var t=Wm(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?Vm(e):ue=t,fc.current=null}function Vm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=A1(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,ue=null;return}}else if(n=N1(n,t,Le),n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);fe===0&&(fe=5)}function Pn(e,t,n){var r=G,i=Ke.transition;try{Ke.transition=null,G=1,U1(e,t,n,r)}finally{Ke.transition=i,G=r}return null}function U1(e,t,n,r){do kr();while(tn!==null);if(B&6)throw Error(I(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(w0(e,o),e===pe&&(ue=pe=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Po||(Po=!0,Gm(es,function(){return kr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ke.transition,Ke.transition=null;var s=G;G=1;var a=B;B|=4,fc.current=null,R1(e,n),jm(n,e),o1(Cl),ns=!!Tl,Cl=Tl=null,e.current=n,L1(n),c0(),B=a,G=s,Ke.transition=o}else e.current=n;if(Po&&(Po=!1,tn=e,ys=i),o=e.pendingLanes,o===0&&(cn=null),p0(n.stateNode),Ae(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(vs)throw vs=!1,e=Kl,Kl=null,e;return ys&1&&e.tag!==0&&kr(),o=e.pendingLanes,o&1?e===Yl?wi++:(wi=0,Yl=e):wi=0,kn(),null}function kr(){if(tn!==null){var e=kh(ys),t=Ke.transition,n=G;try{if(Ke.transition=null,G=16>e?16:e,tn===null)var r=!1;else{if(e=tn,tn=null,ys=0,B&6)throw Error(I(331));var i=B;for(B|=4,N=e.current;N!==null;){var o=N,s=o.child;if(N.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:vi(8,c,o)}var f=c.child;if(f!==null)f.return=c,N=f;else for(;N!==null;){c=N;var p=c.sibling,y=c.return;if(Lm(c),c===u){N=null;break}if(p!==null){p.return=y,N=p;break}N=y}}}var _=o.alternate;if(_!==null){var E=_.child;if(E!==null){_.child=null;do{var k=E.sibling;E.sibling=null,E=k}while(E!==null)}}N=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,N=s;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:vi(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,N=h;break e}N=o.return}}var d=e.current;for(N=d;N!==null;){s=N;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,N=m;else e:for(s=d;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ks(9,a)}}catch(x){oe(a,a.return,x)}if(a===s){N=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,N=w;break e}N=a.return}}if(B=i,kn(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Us,e)}catch{}r=!0}return r}finally{G=n,Ke.transition=t}}return!1}function fd(e,t,n){t=Rr(n,t),t=km(e,t,1),e=un(e,t,1),t=ke(),e!==null&&(Xi(e,1,t),Ae(e,t))}function oe(e,t,n){if(e.tag===3)fd(e,e,n);else for(;t!==null;){if(t.tag===3){fd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){e=Rr(n,e),e=Im(t,e,1),t=un(t,e,1),e=ke(),t!==null&&(Xi(t,1,e),Ae(t,e));break}}t=t.return}}function z1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(ge&n)===n&&(fe===4||fe===3&&(ge&130023424)===ge&&500>se()-pc?Mn(e,0):dc|=n),Ae(e,t)}function Hm(e,t){t===0&&(e.mode&1?(t=wo,wo<<=1,!(wo&130023424)&&(wo=4194304)):t=1);var n=ke();e=Ot(e,t),e!==null&&(Xi(e,t,n),Ae(e,n))}function $1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hm(e,n)}function B1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),Hm(e,n)}var Wm;Wm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return be=!1,P1(e,t,n);be=!!(e.flags&131072)}else be=!1,ee&&t.flags&1048576&&qh(t,us,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$o(e,t),e=t.pendingProps;var i=Pr(t,Ee.current);Sr(t,n),i=sc(null,t,r,e,i,n);var o=ac();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(o=!0,as(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tc(t),i.updater=Gs,t.stateNode=i,i._reactInternals=t,Ml(t,r,e,n),t=Ul(null,t,r,!0,o,n)):(t.tag=0,ee&&o&&Yu(t),Se(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($o(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=H1(r),e=Xe(r,e),i){case 0:t=Fl(null,t,r,e,n);break e;case 1:t=td(null,t,r,e,n);break e;case 11:t=Zf(null,t,r,e,n);break e;case 14:t=ed(null,t,r,Xe(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Fl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),td(e,t,r,i,n);case 3:e:{if(bm(t),e===null)throw Error(I(387));r=t.pendingProps,o=t.memoizedState,i=o.element,tm(e,t),ds(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Rr(Error(I(423)),t),t=nd(e,t,r,n,i);break e}else if(r!==i){i=Rr(Error(I(424)),t),t=nd(e,t,r,n,i);break e}else for(De=ln(t.stateNode.containerInfo.firstChild),Me=t,ee=!0,Ze=null,n=Zh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Nr(),r===i){t=Rt(e,t,n);break e}Se(e,t,r,n)}t=t.child}return t;case 5:return nm(t),e===null&&Rl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,bl(r,i)?s=null:o!==null&&bl(r,o)&&(t.flags|=32),Cm(e,t),Se(e,t,s,n),t.child;case 6:return e===null&&Rl(t),null;case 13:return Pm(e,t,n);case 4:return nc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ar(t,null,r,n):Se(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Zf(e,t,r,i,n);case 7:return Se(e,t,t.pendingProps,n),t.child;case 8:return Se(e,t,t.pendingProps.children,n),t.child;case 12:return Se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Y(cs,r._currentValue),r._currentValue=s,o!==null)if(nt(o.value,s)){if(o.children===i.children&&!Pe.current){t=Rt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=bt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ll(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(I(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ll(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Se(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Sr(t,n),i=Ye(i),r=r(i),t.flags|=1,Se(e,t,r,n),t.child;case 14:return r=t.type,i=Xe(r,t.pendingProps),i=Xe(r.type,i),ed(e,t,r,i,n);case 15:return xm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),$o(e,t),t.tag=1,Ne(r)?(e=!0,as(t)):e=!1,Sr(t,n),Sm(t,r,i),Ml(t,r,i,n),Ul(null,t,r,!0,e,n);case 19:return Nm(e,t,n);case 22:return Tm(e,t,n)}throw Error(I(156,t.tag))};function Gm(e,t){return wh(e,t)}function V1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(e,t,n,r){return new V1(e,t,n,r)}function vc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function H1(e){if(typeof e=="function")return vc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Mu)return 11;if(e===ju)return 14}return 2}function dn(e,t){var n=e.alternate;return n===null?(n=Ge(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ho(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")vc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ir:return jn(n.children,i,o,t);case Du:s=8,i|=8;break;case sl:return e=Ge(12,n,t,i|2),e.elementType=sl,e.lanes=o,e;case al:return e=Ge(13,n,t,i),e.elementType=al,e.lanes=o,e;case ll:return e=Ge(19,n,t,i),e.elementType=ll,e.lanes=o,e;case nh:return qs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case eh:s=10;break e;case th:s=9;break e;case Mu:s=11;break e;case ju:s=14;break e;case Wt:s=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=Ge(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function jn(e,t,n,r){return e=Ge(7,e,r,t),e.lanes=n,e}function qs(e,t,n,r){return e=Ge(22,e,r,t),e.elementType=nh,e.lanes=n,e.stateNode={isHidden:!1},e}function za(e,t,n){return e=Ge(6,e,null,t),e.lanes=n,e}function $a(e,t,n){return t=Ge(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function W1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ea(0),this.expirationTimes=Ea(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ea(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yc(e,t,n,r,i,o,s,a,l){return e=new W1(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ge(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tc(o),e}function G1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Km(e){if(!e)return vn;e=e._reactInternals;e:{if(Jn(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Kh(e,n,t)}return t}function Ym(e,t,n,r,i,o,s,a,l){return e=yc(n,r,!0,e,i,o,s,a,l),e.context=Km(null),n=e.current,r=ke(),i=fn(n),o=bt(r,i),o.callback=t??null,un(n,o,i),e.current.lanes=i,Xi(e,i,r),Ae(e,r),e}function Qs(e,t,n,r){var i=t.current,o=ke(),s=fn(i);return n=Km(n),t.context===null?t.context=n:t.pendingContext=n,t=bt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=un(i,t,s),e!==null&&(tt(e,i,s,o),Fo(e,i,s)),s}function _s(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wc(e,t){dd(e,t),(e=e.alternate)&&dd(e,t)}function K1(){return null}var qm=typeof reportError=="function"?reportError:function(e){console.error(e)};function _c(e){this._internalRoot=e}Xs.prototype.render=_c.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));Qs(e,t,null,null)};Xs.prototype.unmount=_c.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hn(function(){Qs(null,e,null,null)}),t[At]=null}};function Xs(e){this._internalRoot=e}Xs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Th();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kt.length&&t!==0&&t<Kt[n].priority;n++);Kt.splice(n,0,e),n===0&&bh(e)}};function Ec(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Js(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pd(){}function Y1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=_s(s);o.call(u)}}var s=Ym(t,r,e,0,null,!1,!1,"",pd);return e._reactRootContainer=s,e[At]=s.current,Oi(e.nodeType===8?e.parentNode:e),Hn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=_s(l);a.call(u)}}var l=yc(e,0,!1,null,null,!1,!1,"",pd);return e._reactRootContainer=l,e[At]=l.current,Oi(e.nodeType===8?e.parentNode:e),Hn(function(){Qs(t,l,n,r)}),l}function Zs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=_s(s);a.call(l)}}Qs(t,s,e,i)}else s=Y1(n,t,e,i,r);return _s(s)}Ih=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ii(t.pendingLanes);n!==0&&(zu(t,n|1),Ae(t,se()),!(B&6)&&(Lr=se()+500,kn()))}break;case 13:Hn(function(){var r=Ot(e,1);if(r!==null){var i=ke();tt(r,e,1,i)}}),wc(e,1)}};$u=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=ke();tt(t,e,134217728,n)}wc(e,134217728)}};xh=function(e){if(e.tag===13){var t=fn(e),n=Ot(e,t);if(n!==null){var r=ke();tt(n,e,t,r)}wc(e,t)}};Th=function(){return G};Ch=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};yl=function(e,t,n){switch(t){case"input":if(fl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Vs(r);if(!i)throw Error(I(90));ih(r),fl(r,i)}}}break;case"textarea":sh(e,n);break;case"select":t=n.value,t!=null&&yr(e,!!n.multiple,t,!1)}};ph=hc;hh=Hn;var q1={usingClientEntryPoint:!1,Events:[Zi,lr,Vs,fh,dh,hc]},ti={findFiberByHostInstance:On,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Q1={bundleType:ti.bundleType,version:ti.version,rendererPackageName:ti.rendererPackageName,rendererConfig:ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vh(e),e===null?null:e.stateNode},findFiberByHostInstance:ti.findFiberByHostInstance||K1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var No=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!No.isDisabled&&No.supportsFiber)try{Us=No.inject(Q1),pt=No}catch{}}$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q1;$e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ec(t))throw Error(I(200));return G1(e,t,null,n)};$e.createRoot=function(e,t){if(!Ec(e))throw Error(I(299));var n=!1,r="",i=qm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=yc(e,1,!1,null,null,n,!1,r,i),e[At]=t.current,Oi(e.nodeType===8?e.parentNode:e),new _c(t)};$e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=vh(t),e=e===null?null:e.stateNode,e};$e.flushSync=function(e){return Hn(e)};$e.hydrate=function(e,t,n){if(!Js(t))throw Error(I(200));return Zs(null,e,t,!0,n)};$e.hydrateRoot=function(e,t,n){if(!Ec(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=qm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Ym(t,null,e,1,n??null,i,!1,o,s),e[At]=t.current,Oi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Xs(t)};$e.render=function(e,t,n){if(!Js(t))throw Error(I(200));return Zs(null,e,t,!1,n)};$e.unmountComponentAtNode=function(e){if(!Js(e))throw Error(I(40));return e._reactRootContainer?(Hn(function(){Zs(null,null,e,!1,function(){e._reactRootContainer=null,e[At]=null})}),!0):!1};$e.unstable_batchedUpdates=hc;$e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Js(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return Zs(e,t,n,!1,r)};$e.version="18.3.1-next-f1338f8080-20240426";function Qm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qm)}catch(e){console.error(e)}}Qm(),Qp.exports=$e;var X1=Qp.exports,Xm,hd=X1;Xm=hd.createRoot,hd.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $i(){return $i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$i.apply(this,arguments)}var nn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(nn||(nn={}));const md="popstate";function J1(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Xl("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Es(i)}return ew(t,n,null,e)}function ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Jm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Z1(){return Math.random().toString(36).substr(2,8)}function gd(e,t){return{usr:e.state,key:e.key,idx:t}}function Xl(e,t,n,r){return n===void 0&&(n=null),$i({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zr(t):t,{state:n,key:t&&t.key||r||Z1()})}function Es(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ew(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=nn.Pop,l=null,u=c();u==null&&(u=0,s.replaceState($i({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function f(){a=nn.Pop;let k=c(),h=k==null?null:k-u;u=k,l&&l({action:a,location:E.location,delta:h})}function p(k,h){a=nn.Push;let d=Xl(E.location,k,h);u=c()+1;let m=gd(d,u),w=E.createHref(d);try{s.pushState(m,"",w)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(w)}o&&l&&l({action:a,location:E.location,delta:1})}function y(k,h){a=nn.Replace;let d=Xl(E.location,k,h);u=c();let m=gd(d,u),w=E.createHref(d);s.replaceState(m,"",w),o&&l&&l({action:a,location:E.location,delta:0})}function _(k){let h=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof k=="string"?k:Es(k);return d=d.replace(/ $/,"%20"),ae(h,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,h)}let E={get action(){return a},get location(){return e(i,s)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(md,f),l=k,()=>{i.removeEventListener(md,f),l=null}},createHref(k){return t(i,k)},createURL:_,encodeLocation(k){let h=_(k);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:y,go(k){return s.go(k)}};return E}var vd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(vd||(vd={}));function tw(e,t,n){return n===void 0&&(n="/"),nw(e,t,n,!1)}function nw(e,t,n,r){let i=typeof t=="string"?zr(t):t,o=Sc(i.pathname||"/",n);if(o==null)return null;let s=Zm(e);rw(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=hw(o);a=dw(s[l],u,r)}return a}function Zm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(ae(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=pn([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(ae(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Zm(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:cw(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of eg(o.path))i(o,s,l)}),t}function eg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=eg(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function rw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:fw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const iw=/^:[\w-]+$/,ow=3,sw=2,aw=1,lw=10,uw=-2,yd=e=>e==="*";function cw(e,t){let n=e.split("/"),r=n.length;return n.some(yd)&&(r+=uw),t&&(r+=sw),n.filter(i=>!yd(i)).reduce((i,o)=>i+(iw.test(o)?ow:o===""?aw:lw),r)}function fw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function dw(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,c=o==="/"?t:t.slice(o.length)||"/",f=wd({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),p=l.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=wd({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:pn([o,f.pathname]),pathnameBase:yw(pn([o,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(o=pn([o,f.pathnameBase]))}return s}function wd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=pw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:p,isOptional:y}=c;if(p==="*"){let E=a[f]||"";s=o.slice(0,o.length-E.length).replace(/(.)\/+$/,"$1")}const _=a[f];return y&&!_?u[p]=void 0:u[p]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function pw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Jm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function hw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Jm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Sc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function mw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?zr(e):e;return{pathname:n?n.startsWith("/")?n:gw(n,t):t,search:ww(r),hash:_w(i)}}function gw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ba(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function kc(e,t){let n=vw(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ic(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=zr(e):(i=$i({},e),ae(!i.pathname||!i.pathname.includes("?"),Ba("?","pathname","search",i)),ae(!i.pathname||!i.pathname.includes("#"),Ba("#","pathname","hash",i)),ae(!i.search||!i.search.includes("#"),Ba("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?t[f]:"/"}let l=mw(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const pn=e=>e.join("/").replace(/\/\/+/g,"/"),yw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ww=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_w=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ew(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const tg=["post","put","patch","delete"];new Set(tg);const Sw=["get",...tg];new Set(Sw);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bi(){return Bi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bi.apply(this,arguments)}const xc=T.createContext(null),kw=T.createContext(null),In=T.createContext(null),ea=T.createContext(null),xn=T.createContext({outlet:null,matches:[],isDataRoute:!1}),ng=T.createContext(null);function Iw(e,t){let{relative:n}=t===void 0?{}:t;$r()||ae(!1);let{basename:r,navigator:i}=T.useContext(In),{hash:o,pathname:s,search:a}=ig(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:pn([r,s])),i.createHref({pathname:l,search:a,hash:o})}function $r(){return T.useContext(ea)!=null}function to(){return $r()||ae(!1),T.useContext(ea).location}function rg(e){T.useContext(In).static||T.useLayoutEffect(e)}function ta(){let{isDataRoute:e}=T.useContext(xn);return e?jw():xw()}function xw(){$r()||ae(!1);let e=T.useContext(xc),{basename:t,future:n,navigator:r}=T.useContext(In),{matches:i}=T.useContext(xn),{pathname:o}=to(),s=JSON.stringify(kc(i,n.v7_relativeSplatPath)),a=T.useRef(!1);return rg(()=>{a.current=!0}),T.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=Ic(u,JSON.parse(s),o,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:pn([t,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[t,r,s,o,e])}function ig(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=T.useContext(In),{matches:i}=T.useContext(xn),{pathname:o}=to(),s=JSON.stringify(kc(i,r.v7_relativeSplatPath));return T.useMemo(()=>Ic(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function Tw(e,t){return Cw(e,t)}function Cw(e,t,n,r){$r()||ae(!1);let{navigator:i}=T.useContext(In),{matches:o}=T.useContext(xn),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=to(),c;if(t){var f;let k=typeof t=="string"?zr(t):t;l==="/"||(f=k.pathname)!=null&&f.startsWith(l)||ae(!1),c=k}else c=u;let p=c.pathname||"/",y=p;if(l!=="/"){let k=l.replace(/^\//,"").split("/");y="/"+p.replace(/^\//,"").split("/").slice(k.length).join("/")}let _=tw(e,{pathname:y}),E=Ow(_&&_.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:pn([l,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:pn([l,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),o,n,r);return t&&E?T.createElement(ea.Provider,{value:{location:Bi({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:nn.Pop}},E):E}function bw(){let e=Mw(),t=Ew(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,null)}const Pw=T.createElement(bw,null);class Nw extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?T.createElement(xn.Provider,{value:this.props.routeContext},T.createElement(ng.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Aw(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(xc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(xn.Provider,{value:t},r)}function Ow(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);c>=0||ae(!1),s=s.slice(0,Math.min(s.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let f=s[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:p,errors:y}=n,_=f.route.loader&&p[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||_){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,f,p)=>{let y,_=!1,E=null,k=null;n&&(y=a&&f.route.id?a[f.route.id]:void 0,E=f.route.errorElement||Pw,l&&(u<0&&p===0?(_=!0,k=null):u===p&&(_=!0,k=f.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,p+1)),d=()=>{let m;return y?m=E:_?m=k:f.route.Component?m=T.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=c,T.createElement(Aw,{match:f,routeContext:{outlet:c,matches:h,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?T.createElement(Nw,{location:n.location,revalidation:n.revalidation,component:E,error:y,children:d(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):d()},null)}var og=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(og||{}),Ss=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ss||{});function Rw(e){let t=T.useContext(xc);return t||ae(!1),t}function Lw(e){let t=T.useContext(kw);return t||ae(!1),t}function Dw(e){let t=T.useContext(xn);return t||ae(!1),t}function sg(e){let t=Dw(),n=t.matches[t.matches.length-1];return n.route.id||ae(!1),n.route.id}function Mw(){var e;let t=T.useContext(ng),n=Lw(Ss.UseRouteError),r=sg(Ss.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function jw(){let{router:e}=Rw(og.UseNavigateStable),t=sg(Ss.UseNavigateStable),n=T.useRef(!1);return rg(()=>{n.current=!0}),T.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Bi({fromRouteId:t},o)))},[e,t])}function Fw(e){let{to:t,replace:n,state:r,relative:i}=e;$r()||ae(!1);let{future:o,static:s}=T.useContext(In),{matches:a}=T.useContext(xn),{pathname:l}=to(),u=ta(),c=Ic(t,kc(a,o.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(c);return T.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function si(e){ae(!1)}function Uw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=nn.Pop,navigator:o,static:s=!1,future:a}=e;$r()&&ae(!1);let l=t.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:l,navigator:o,static:s,future:Bi({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=zr(r));let{pathname:c="/",search:f="",hash:p="",state:y=null,key:_="default"}=r,E=T.useMemo(()=>{let k=Sc(c,l);return k==null?null:{location:{pathname:k,search:f,hash:p,state:y,key:_},navigationType:i}},[l,c,f,p,y,_,i]);return E==null?null:T.createElement(In.Provider,{value:u},T.createElement(ea.Provider,{children:n,value:E}))}function zw(e){let{children:t,location:n}=e;return Tw(Jl(t),n)}new Promise(()=>{});function Jl(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;let o=[...t,i];if(r.type===T.Fragment){n.push.apply(n,Jl(r.props.children,o));return}r.type!==si&&ae(!1),!r.props.index||!r.props.children||ae(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Jl(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zl(){return Zl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zl.apply(this,arguments)}function $w(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Bw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Vw(e,t){return e.button===0&&(!t||t==="_self")&&!Bw(e)}const Hw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Ww="6";try{window.__reactRouterVersion=Ww}catch{}const Gw="startTransition",_d=zy[Gw];function Kw(e){let{basename:t,children:n,future:r,window:i}=e,o=T.useRef();o.current==null&&(o.current=J1({window:i,v5Compat:!0}));let s=o.current,[a,l]=T.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=T.useCallback(f=>{u&&_d?_d(()=>l(f)):l(f)},[l,u]);return T.useLayoutEffect(()=>s.listen(c),[s,c]),T.createElement(Uw,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const Yw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qt=T.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:f}=t,p=$w(t,Hw),{basename:y}=T.useContext(In),_,E=!1;if(typeof u=="string"&&qw.test(u)&&(_=u,Yw))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),x=Sc(w.pathname,y);w.origin===m.origin&&x!=null?u=x+w.search+w.hash:E=!0}catch{}let k=Iw(u,{relative:i}),h=Qw(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:f});function d(m){r&&r(m),m.defaultPrevented||h(m)}return T.createElement("a",Zl({},p,{href:_||k,onClick:E||o?r:d,ref:n,target:l}))});var Ed;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ed||(Ed={}));var Sd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Sd||(Sd={}));function Qw(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,l=ta(),u=to(),c=ig(e,{relative:s});return T.useCallback(f=>{if(Vw(f,n)){f.preventDefault();let p=r!==void 0?r:Es(u)===Es(c);l(e,{replace:p,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[u,l,c,r,i,n,e,o,s,a])}var ag={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},kd=dt.createContext&&dt.createContext(ag),Xw=["attr","size","title"];function Jw(e,t){if(e==null)return{};var n=Zw(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Zw(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function ks(){return ks=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ks.apply(this,arguments)}function Id(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Is(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Id(Object(n),!0).forEach(function(r){e_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Id(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function e_(e,t,n){return t=t_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t_(e){var t=n_(e,"string");return typeof t=="symbol"?t:t+""}function n_(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function lg(e){return e&&e.map((t,n)=>dt.createElement(t.tag,Is({key:n},t.attr),lg(t.child)))}function na(e){return t=>dt.createElement(r_,ks({attr:Is({},e.attr)},t),lg(e.child))}function r_(e){var t=n=>{var{attr:r,size:i,title:o}=e,s=Jw(e,Xw),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),dt.createElement("svg",ks({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Is(Is({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&dt.createElement("title",null,o),e.children)};return kd!==void 0?dt.createElement(kd.Consumer,null,n=>t(n)):t(ag)}function i_(e){return na({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(e)}function o_(e){return na({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(e)}function s_(e){return na({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function xd(e){return na({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}const a_=e=>v.jsx("svg",{...e,xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6 text-white text-shadow-neonpurple",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:v.jsx("path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"})});var Td={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},l_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},cg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4;let p=(a&15)<<2|u>>6,y=u&63;l||(y=64,s||(p=64)),r.push(n[c],n[f],n[p],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ug(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):l_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw new u_;const p=o<<2|a>>4;if(r.push(p),u!==64){const y=a<<4&240|u>>2;if(r.push(y),f!==64){const _=u<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class u_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c_=function(e){const t=ug(e);return cg.encodeByteArray(t,!0)},fg=function(e){return c_(e).replace(/\./g,"")},dg=function(e){try{return cg.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=()=>f_().__FIREBASE_DEFAULTS__,p_=()=>{if(typeof process>"u"||typeof Td>"u")return;const e=Td.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},h_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&dg(e[1]);return t&&JSON.parse(t)},Tc=()=>{try{return d_()||p_()||h_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},m_=e=>{var t,n;return(n=(t=Tc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},pg=()=>{var e;return(e=Tc())===null||e===void 0?void 0:e.config},hg=e=>{var t;return(t=Tc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function v_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function y_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mg(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function w_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function __(){const e=Ie();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function gg(){try{return typeof indexedDB=="object"}catch{return!1}}function vg(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function E_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="FirebaseError";class _t extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=S_,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zn.prototype.create)}}class Zn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?k_(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new _t(i,a,r)}}function k_(e,t){return e.replace(I_,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const I_=/\{\$([^}]+)}/g;function x_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Vi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Cd(o)&&Cd(s)){if(!Vi(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cd(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ai(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function li(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function T_(e,t){const n=new C_(e,t);return n.subscribe.bind(n)}class C_{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");b_(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Va),i.error===void 0&&(i.error=Va),i.complete===void 0&&(i.complete=Va);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function b_(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Va(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=1e3,N_=2,A_=4*60*60*1e3,O_=.5;function bd(e,t=P_,n=N_){const r=t*Math.pow(n,e),i=Math.round(O_*r*(Math.random()-.5)*2);return Math.min(A_,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(e){return e&&e._delegate?e._delegate:e}class yt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new g_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(D_(t))try{this.getOrInitializeService({instanceIdentifier:Nn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Nn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Nn){return this.instances.has(t)}getOptions(t=Nn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:L_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Nn){return this.component?this.component.multipleInstances?t:Nn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function L_(e){return e===Nn?void 0:e}function D_(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new R_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(K||(K={}));const j_={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},F_=K.INFO,U_={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},z_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=U_[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Cc{constructor(t){this.name=t,this._logLevel=F_,this._logHandler=z_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?j_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const $_=(e,t)=>t.some(n=>e instanceof n);let Pd,Nd;function B_(){return Pd||(Pd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function V_(){return Nd||(Nd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yg=new WeakMap,eu=new WeakMap,wg=new WeakMap,Ha=new WeakMap,bc=new WeakMap;function H_(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(hn(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&yg.set(n,e)}).catch(()=>{}),bc.set(t,e),t}function W_(e){if(eu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});eu.set(e,t)}let tu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return eu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||wg.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function G_(e){tu=e(tu)}function K_(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Wa(this),t,...n);return wg.set(r,t.sort?t.sort():[t]),hn(r)}:V_().includes(e)?function(...t){return e.apply(Wa(this),t),hn(yg.get(this))}:function(...t){return hn(e.apply(Wa(this),t))}}function Y_(e){return typeof e=="function"?K_(e):(e instanceof IDBTransaction&&W_(e),$_(e,B_())?new Proxy(e,tu):e)}function hn(e){if(e instanceof IDBRequest)return H_(e);if(Ha.has(e))return Ha.get(e);const t=Y_(e);return t!==e&&(Ha.set(e,t),bc.set(t,e)),t}const Wa=e=>bc.get(e);function _g(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=hn(s);return r&&s.addEventListener("upgradeneeded",l=>{r(hn(s.result),l.oldVersion,l.newVersion,hn(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const q_=["get","getKey","getAll","getAllKeys","count"],Q_=["put","add","delete","clear"],Ga=new Map;function Ad(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ga.get(t))return Ga.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Q_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||q_.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ga.set(t,o),o}G_(e=>({...e,get:(t,n,r)=>Ad(t,n)||e.get(t,n,r),has:(t,n)=>!!Ad(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(J_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function J_(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const nu="@firebase/app",Od="0.10.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new Cc("@firebase/app"),Z_="@firebase/app-compat",eE="@firebase/analytics-compat",tE="@firebase/analytics",nE="@firebase/app-check-compat",rE="@firebase/app-check",iE="@firebase/auth",oE="@firebase/auth-compat",sE="@firebase/database",aE="@firebase/data-connect",lE="@firebase/database-compat",uE="@firebase/functions",cE="@firebase/functions-compat",fE="@firebase/installations",dE="@firebase/installations-compat",pE="@firebase/messaging",hE="@firebase/messaging-compat",mE="@firebase/performance",gE="@firebase/performance-compat",vE="@firebase/remote-config",yE="@firebase/remote-config-compat",wE="@firebase/storage",_E="@firebase/storage-compat",EE="@firebase/firestore",SE="@firebase/vertexai-preview",kE="@firebase/firestore-compat",IE="firebase",xE="10.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="[DEFAULT]",TE={[nu]:"fire-core",[Z_]:"fire-core-compat",[tE]:"fire-analytics",[eE]:"fire-analytics-compat",[rE]:"fire-app-check",[nE]:"fire-app-check-compat",[iE]:"fire-auth",[oE]:"fire-auth-compat",[sE]:"fire-rtdb",[aE]:"fire-data-connect",[lE]:"fire-rtdb-compat",[uE]:"fire-fn",[cE]:"fire-fn-compat",[fE]:"fire-iid",[dE]:"fire-iid-compat",[pE]:"fire-fcm",[hE]:"fire-fcm-compat",[mE]:"fire-perf",[gE]:"fire-perf-compat",[vE]:"fire-rc",[yE]:"fire-rc-compat",[wE]:"fire-gcs",[_E]:"fire-gcs-compat",[EE]:"fire-fst",[kE]:"fire-fst-compat",[SE]:"fire-vertex","fire-js":"fire-js",[IE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=new Map,CE=new Map,iu=new Map;function Rd(e,t){try{e.container.addComponent(t)}catch(n){Lt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Dt(e){const t=e.name;if(iu.has(t))return Lt.debug(`There were multiple attempts to register component ${t}.`),!1;iu.set(t,e);for(const n of xs.values())Rd(n,e);for(const n of CE.values())Rd(n,e);return!0}function Br(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function ut(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mn=new Zn("app","Firebase",bE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=xE;function Eg(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ru,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw mn.create("bad-app-name",{appName:String(i)});if(n||(n=pg()),!n)throw mn.create("no-options");const o=xs.get(i);if(o){if(Vi(n,o.options)&&Vi(r,o.config))return o;throw mn.create("duplicate-app",{appName:i})}const s=new M_(i);for(const l of iu.values())s.addComponent(l);const a=new PE(n,r,s);return xs.set(i,a),a}function Sg(e=ru){const t=xs.get(e);if(!t&&e===ru&&pg())return Eg();if(!t)throw mn.create("no-app",{appName:e});return t}function mt(e,t,n){var r;let i=(r=TE[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Lt.warn(a.join(" "));return}Dt(new yt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="firebase-heartbeat-database",AE=1,Hi="firebase-heartbeat-store";let Ka=null;function kg(){return Ka||(Ka=_g(NE,AE,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Hi)}catch(n){console.warn(n)}}}}).catch(e=>{throw mn.create("idb-open",{originalErrorMessage:e.message})})),Ka}async function OE(e){try{const n=(await kg()).transaction(Hi),r=await n.objectStore(Hi).get(Ig(e));return await n.done,r}catch(t){if(t instanceof _t)Lt.warn(t.message);else{const n=mn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Lt.warn(n.message)}}}async function Ld(e,t){try{const r=(await kg()).transaction(Hi,"readwrite");await r.objectStore(Hi).put(t,Ig(e)),await r.done}catch(n){if(n instanceof _t)Lt.warn(n.message);else{const r=mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Lt.warn(r.message)}}}function Ig(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE=1024,LE=30*24*60*60*1e3;class DE{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Dd();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=LE}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Lt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Dd(),{heartbeatsToSend:r,unsentEntries:i}=ME(this._heartbeatsCache.heartbeats),o=fg(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Lt.warn(n),""}}}function Dd(){return new Date().toISOString().substring(0,10)}function ME(e,t=RE){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Md(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Md(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jE{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gg()?vg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await OE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ld(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ld(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Md(e){return fg(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(e){Dt(new yt("platform-logger",t=>new X_(t),"PRIVATE")),Dt(new yt("heartbeat",t=>new DE(t),"PRIVATE")),mt(nu,Od,e),mt(nu,Od,"esm2017"),mt("fire-js","")}FE("");function Pc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function xg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UE=xg,Tg=new Zn("auth","Firebase",xg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new Cc("@firebase/auth");function zE(e,...t){Ts.logLevel<=K.WARN&&Ts.warn(`Auth (${ro}): ${e}`,...t)}function Wo(e,...t){Ts.logLevel<=K.ERROR&&Ts.error(`Auth (${ro}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(e,...t){throw Nc(e,...t)}function gt(e,...t){return Nc(e,...t)}function Cg(e,t,n){const r=Object.assign(Object.assign({},UE()),{[t]:n});return new Zn("auth","Firebase",r).create(t,{appName:e.name})}function Pt(e){return Cg(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Tg.create(e,...t)}function D(e,t,...n){if(!e)throw Nc(t,...n)}function xt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Wo(t),new Error(t)}function Mt(e,t){e||xt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function $E(){return jd()==="http:"||jd()==="https:"}function jd(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($E()||mg()||"connection"in navigator)?navigator.onLine:!0}function VE(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(t,n){this.shortDelay=t,this.longDelay=n,Mt(n>t,"Short delay should be less than long delay!"),this.isMobile=v_()||w_()}get(){return BE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(e,t){Mt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE=new io(3e4,6e4);function Tn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Cn(e,t,n,r,i={}){return Pg(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=no(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:l},o);return y_()||(u.referrerPolicy="no-referrer"),bg.fetch()(Ng(e,e.config.apiHost,n,a),u)})}async function Pg(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},HE),t);try{const i=new KE(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Ao(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ao(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Ao(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Ao(e,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Cg(e,c,u);rt(e,c)}}catch(i){if(i instanceof _t)throw i;rt(e,"network-request-failed",{message:String(i)})}}async function oo(e,t,n,r,i={}){const o=await Cn(e,t,n,r,i);return"mfaPendingCredential"in o&&rt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Ng(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Ac(e.config,i):`${e.config.apiScheme}://${i}`}function GE(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class KE{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gt(this.auth,"network-request-failed")),WE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ao(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=gt(e,t,r);return i.customData._tokenResponse=n,i}function Fd(e){return e!==void 0&&e.enterprise!==void 0}class YE{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return GE(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function qE(e,t){return Cn(e,"GET","/v2/recaptchaConfig",Tn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QE(e,t){return Cn(e,"POST","/v1/accounts:delete",t)}async function Ag(e,t){return Cn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function XE(e,t=!1){const n=it(e),r=await n.getIdToken(t),i=Oc(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:_i(Ya(i.auth_time)),issuedAtTime:_i(Ya(i.iat)),expirationTime:_i(Ya(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ya(e){return Number(e)*1e3}function Oc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Wo("JWT malformed, contained fewer than 3 sections"),null;try{const i=dg(n);return i?JSON.parse(i):(Wo("Failed to decode base64 JWT payload"),null)}catch(i){return Wo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ud(e){const t=Oc(e);return D(t,"internal-error"),D(typeof t.exp<"u","internal-error"),D(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof _t&&JE(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function JE({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_i(this.lastLoginAt),this.creationTime=_i(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Wi(e,Ag(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Og(o.providerUserInfo):[],a=tS(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new su(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function eS(e){const t=it(e);await Cs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function tS(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Og(e){return e.map(t=>{var{providerId:n}=t,r=Pc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nS(e,t){const n=await Pg(e,{},async()=>{const r=no({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=Ng(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bg.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rS(e,t){return Cn(e,"POST","/v2/accounts:revokeToken",Tn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){D(t.idToken,"internal-error"),D(typeof t.idToken<"u","internal-error"),D(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ud(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){D(t.length!==0,"internal-error");const n=Ud(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(D(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await nS(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Ir;return r&&(D(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(D(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ir,this.toJSON())}_performRefresh(){return xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(e,t){D(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Tt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Pc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new su(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Wi(this,this.stsTokenManager.getToken(this.auth,t));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return XE(this,t)}reload(){return eS(this)}_assign(t){this!==t&&(D(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Tt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Cs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ut(this.auth.app))return Promise.reject(Pt(this.auth));const t=await this.getIdToken();return await Wi(this,QE(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,y=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,_=(s=n.photoURL)!==null&&s!==void 0?s:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:x,providerData:C,stsTokenManager:P}=n;D(m&&P,t,"internal-error");const A=Ir.fromJSON(this.name,P);D(typeof m=="string",t,"internal-error"),Vt(f,t.name),Vt(p,t.name),D(typeof w=="boolean",t,"internal-error"),D(typeof x=="boolean",t,"internal-error"),Vt(y,t.name),Vt(_,t.name),Vt(E,t.name),Vt(k,t.name),Vt(h,t.name),Vt(d,t.name);const $=new Tt({uid:m,auth:t,email:p,emailVerified:w,displayName:f,isAnonymous:x,photoURL:_,phoneNumber:y,tenantId:E,stsTokenManager:A,createdAt:h,lastLoginAt:d});return C&&Array.isArray(C)&&($.providerData=C.map(M=>Object.assign({},M))),k&&($._redirectEventId=k),$}static async _fromIdTokenResponse(t,n,r=!1){const i=new Ir;i.updateFromServerResponse(n);const o=new Tt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Cs(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];D(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Og(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new Ir;a.updateFromIdToken(r);const l=new Tt({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new su(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=new Map;function Ct(e){Mt(e instanceof Function,"Expected a class definition");let t=zd.get(e);return t?(Mt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,zd.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Rg.type="NONE";const $d=Rg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(e,t,n){return`firebase:${e}:${t}:${n}`}class xr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Go(this.userKey,i.apiKey,o),this.fullPersistenceKey=Go("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Tt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new xr(Ct($d),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Ct($d);const s=Go(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const f=Tt._fromJSON(t,c);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new xr(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new xr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(jg(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Lg(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ug(t))return"Blackberry";if(zg(t))return"Webos";if(Dg(t))return"Safari";if((t.includes("chrome/")||Mg(t))&&!t.includes("edge/"))return"Chrome";if(Fg(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Lg(e=Ie()){return/firefox\//i.test(e)}function Dg(e=Ie()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Mg(e=Ie()){return/crios\//i.test(e)}function jg(e=Ie()){return/iemobile/i.test(e)}function Fg(e=Ie()){return/android/i.test(e)}function Ug(e=Ie()){return/blackberry/i.test(e)}function zg(e=Ie()){return/webos/i.test(e)}function Rc(e=Ie()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function iS(e=Ie()){var t;return Rc(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function oS(){return __()&&document.documentMode===10}function $g(e=Ie()){return Rc(e)||Fg(e)||zg(e)||Ug(e)||/windows phone/i.test(e)||jg(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(e,t=[]){let n;switch(e){case"Browser":n=Bd(Ie());break;case"Worker":n=`${Bd(Ie())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ro}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aS(e,t={}){return Cn(e,"GET","/v2/passwordPolicy",Tn(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=6;class uS{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:lS,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vd(this),this.idTokenSubscription=new Vd(this),this.beforeStateQueue=new sS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ct(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Ag(this,{idToken:t}),r=await Tt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(ut(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Cs(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=VE()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(ut(this.app))return Promise.reject(Pt(this));const n=t?it(t):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&D(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return ut(this.app)?Promise.reject(Pt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return ut(this.app)?Promise.reject(Pt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ct(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await aS(this),n=new uS(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Zn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await rS(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ct(t)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await xr.create(this,[Ct(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(D(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Bg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&zE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function er(e){return it(e)}class Vd{constructor(t){this.auth=t,this.observer=null,this.addObserver=T_(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fS(e){ra=e}function Vg(e){return ra.loadJS(e)}function dS(){return ra.recaptchaEnterpriseScript}function pS(){return ra.gapiScript}function hS(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const mS="recaptcha-enterprise",gS="NO_RECAPTCHA";class vS{constructor(t){this.type=mS,this.auth=er(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{qE(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new YE(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Fd(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(gS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Fd(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=dS();l.length!==0&&(l+=a),Vg(l).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function Hd(e,t,n,r=!1){const i=new vS(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function au(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Hd(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Hd(e,t,n,n==="getOobCode");return r(e,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(e,t){const n=Br(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Vi(o,t??{}))return i;rt(i,"already-initialized")}return n.initialize({options:t})}function wS(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ct);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function _S(e,t,n){const r=er(e);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=Hg(t),{host:s,port:a}=ES(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),SS()}function Hg(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ES(e){const t=Hg(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Wd(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Wd(s)}}}function Wd(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function SS(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return xt("not implemented")}_getIdTokenResponse(t){return xt("not implemented")}_linkToIdToken(t,n){return xt("not implemented")}_getReauthenticationResolver(t){return xt("not implemented")}}async function kS(e,t){return Cn(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IS(e,t){return oo(e,"POST","/v1/accounts:signInWithPassword",Tn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xS(e,t){return oo(e,"POST","/v1/accounts:signInWithEmailLink",Tn(e,t))}async function TS(e,t){return oo(e,"POST","/v1/accounts:signInWithEmailLink",Tn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends Lc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Gi(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Gi(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return au(t,n,"signInWithPassword",IS);case"emailLink":return xS(t,{email:this._email,oobCode:this._password});default:rt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return au(t,r,"signUpPassword",kS);case"emailLink":return TS(t,{idToken:n,email:this._email,oobCode:this._password});default:rt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(e,t){return oo(e,"POST","/v1/accounts:signInWithIdp",Tn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS="http://localhost";class Wn extends Lc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Wn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Pc(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Wn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return Tr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Tr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Tr(t,n)}buildRequest(){const t={requestUri:CS,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=no(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function PS(e){const t=ai(li(e)).link,n=t?ai(li(t)).deep_link_id:null,r=ai(li(e)).deep_link_id;return(r?ai(li(r)).link:null)||r||n||t||e}class Dc{constructor(t){var n,r,i,o,s,a;const l=ai(li(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=bS((i=l.mode)!==null&&i!==void 0?i:null);D(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=PS(t);try{return new Dc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this.providerId=Vr.PROVIDER_ID}static credential(t,n){return Gi._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Dc.parseLink(n);return D(r,"argument-error"),Gi._fromEmailAndCode(t,r.code,r.tenantId)}}Vr.PROVIDER_ID="password";Vr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends Wg{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends so{constructor(){super("facebook.com")}static credential(t){return Wn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Qt.credentialFromTaggedObject(t)}static credentialFromError(t){return Qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Qt.credential(t.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends so{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Wn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Xt.credential(n,r)}catch{return null}}}Xt.GOOGLE_SIGN_IN_METHOD="google.com";Xt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends so{constructor(){super("github.com")}static credential(t){return Wn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Jt.credential(t.oauthAccessToken)}catch{return null}}}Jt.GITHUB_SIGN_IN_METHOD="github.com";Jt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends so{constructor(){super("twitter.com")}static credential(t,n){return Wn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Zt.credentialFromTaggedObject(t)}static credentialFromError(t){return Zt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Zt.credential(n,r)}catch{return null}}}Zt.TWITTER_SIGN_IN_METHOD="twitter.com";Zt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NS(e,t){return oo(e,"POST","/v1/accounts:signUp",Tn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Tt._fromIdTokenResponse(t,r,i),s=Gd(r);return new Gn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Gd(r);return new Gn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Gd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends _t{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,bs.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new bs(t,n,r,i)}}function Gg(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?bs._fromErrorAndOperation(e,o,t,r):o})}async function AS(e,t,n=!1){const r=await Wi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Gn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(e,t,n=!1){const{auth:r}=e;if(ut(r.app))return Promise.reject(Pt(r));const i="reauthenticate";try{const o=await Wi(e,Gg(r,i,t,e),n);D(o.idToken,r,"internal-error");const s=Oc(o.idToken);D(s,r,"internal-error");const{sub:a}=s;return D(e.uid===a,r,"user-mismatch"),Gn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&rt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kg(e,t,n=!1){if(ut(e.app))return Promise.reject(Pt(e));const r="signIn",i=await Gg(e,r,t),o=await Gn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function RS(e,t){return Kg(er(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yg(e){const t=er(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function LS(e,t,n){if(ut(e.app))return Promise.reject(Pt(e));const r=er(e),s=await au(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",NS).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Yg(e),l}),a=await Gn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function DS(e,t,n){return ut(e.app)?Promise.reject(Pt(e)):RS(it(e),Vr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Yg(e),r})}function MS(e,t,n,r){return it(e).onIdTokenChanged(t,n,r)}function jS(e,t,n){return it(e).beforeAuthStateChanged(t,n)}function FS(e,t,n,r){return it(e).onAuthStateChanged(t,n,r)}function US(e){return it(e).signOut()}const Ps="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ps,"1"),this.storage.removeItem(Ps),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=1e3,$S=10;class Qg extends qg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$g(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);oS()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,$S):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},zS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Qg.type="LOCAL";const BS=Qg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg extends qg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Xg.type="SESSION";const Jg=Xg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new ia(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await VS(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ia.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Mc("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(p.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return window}function WS(e){vt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(){return typeof vt().WorkerGlobalScope<"u"&&typeof vt().importScripts=="function"}async function GS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KS(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function YS(){return Zg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="firebaseLocalStorageDb",qS=1,Ns="firebaseLocalStorage",tv="fbase_key";class ao{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function oa(e,t){return e.transaction([Ns],t?"readwrite":"readonly").objectStore(Ns)}function QS(){const e=indexedDB.deleteDatabase(ev);return new ao(e).toPromise()}function lu(){const e=indexedDB.open(ev,qS);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ns,{keyPath:tv})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ns)?t(r):(r.close(),await QS(),t(await lu()))})})}async function Kd(e,t,n){const r=oa(e,!0).put({[tv]:t,value:n});return new ao(r).toPromise()}async function XS(e,t){const n=oa(e,!1).get(t),r=await new ao(n).toPromise();return r===void 0?null:r.value}function Yd(e,t){const n=oa(e,!0).delete(t);return new ao(n).toPromise()}const JS=800,ZS=3;class nv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>ZS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ia._getInstance(YS()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await GS(),!this.activeServiceWorker)return;this.sender=new HS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||KS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await lu();return await Kd(t,Ps,"1"),await Yd(t,Ps),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kd(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>XS(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yd(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=oa(i,!1).getAll();return new ao(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nv.type="LOCAL";const ek=nv;new io(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(e,t){return t?Ct(t):(D(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc extends Lc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Tr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Tr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Tr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function nk(e){return Kg(e.auth,new jc(e),e.bypassAuthState)}function rk(e){const{auth:t,user:n}=e;return D(n,t,"internal-error"),OS(n,new jc(e),e.bypassAuthState)}async function ik(e){const{auth:t,user:n}=e;return D(n,t,"internal-error"),AS(n,new jc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return nk;case"linkViaPopup":case"linkViaRedirect":return ik;case"reauthViaPopup":case"reauthViaRedirect":return rk;default:rt(this.auth,"internal-error")}}resolve(t){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=new io(2e3,1e4);class mr extends rv{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,mr.currentPopupAction&&mr.currentPopupAction.cancel(),mr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return D(t,this.auth,"internal-error"),t}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const t=Mc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,ok.get())};t()}}mr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk="pendingRedirect",Ko=new Map;class ak extends rv{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ko.get(this.auth._key());if(!t){try{const r=await lk(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ko.set(this.auth._key(),t)}return this.bypassAuthState||Ko.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lk(e,t){const n=fk(t),r=ck(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function uk(e,t){Ko.set(e._key(),t)}function ck(e){return Ct(e._redirectPersistence)}function fk(e){return Go(sk,e.config.apiKey,e.name)}async function dk(e,t,n=!1){if(ut(e.app))return Promise.reject(Pt(e));const r=er(e),i=tk(r,t),s=await new ak(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk=10*60*1e3;class hk{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!mk(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!iv(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=pk&&this.cachedEventUids.clear(),this.cachedEventUids.has(qd(t))}saveEventToCache(t){this.cachedEventUids.add(qd(t)),this.lastProcessedEventTime=Date.now()}}function qd(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function iv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function mk(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iv(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gk(e,t={}){return Cn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yk=/^https?/;async function wk(e){if(e.config.emulator)return;const{authorizedDomains:t}=await gk(e);for(const n of t)try{if(_k(n))return}catch{}rt(e,"unauthorized-domain")}function _k(e){const t=ou(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!yk.test(n))return!1;if(vk.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=new io(3e4,6e4);function Qd(){const e=vt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Sk(e){return new Promise((t,n)=>{var r,i,o;function s(){Qd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Qd(),n(gt(e,"network-request-failed"))},timeout:Ek.get()})}if(!((i=(r=vt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=vt().gapi)===null||o===void 0)&&o.load)s();else{const a=hS("iframefcb");return vt()[a]=()=>{gapi.load?s():n(gt(e,"network-request-failed"))},Vg(`${pS()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Yo=null,t})}let Yo=null;function kk(e){return Yo=Yo||Sk(e),Yo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik=new io(5e3,15e3),xk="__/auth/iframe",Tk="emulator/auth/iframe",Ck={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pk(e){const t=e.config;D(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ac(t,Tk):`https://${e.config.authDomain}/${xk}`,r={apiKey:t.apiKey,appName:e.name,v:ro},i=bk.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${no(r).slice(1)}`}async function Nk(e){const t=await kk(e),n=vt().gapi;return D(n,e,"internal-error"),t.open({where:document.body,url:Pk(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ck,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=gt(e,"network-request-failed"),a=vt().setTimeout(()=>{o(s)},Ik.get());function l(){vt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ok=500,Rk=600,Lk="_blank",Dk="http://localhost";class Xd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Mk(e,t,n,r=Ok,i=Rk){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ak),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Ie().toLowerCase();n&&(a=Mg(u)?Lk:n),Lg(u)&&(t=t||Dk,l.scrollbars="yes");const c=Object.entries(l).reduce((p,[y,_])=>`${p}${y}=${_},`,"");if(iS(u)&&a!=="_self")return jk(t||"",a),new Xd(null);const f=window.open(t||"",a,c);D(f,e,"popup-blocked");try{f.focus()}catch{}return new Xd(f)}function jk(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk="__/auth/handler",Uk="emulator/auth/handler",zk=encodeURIComponent("fac");async function Jd(e,t,n,r,i,o){D(e.config.authDomain,e,"auth-domain-config-required"),D(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ro,eventId:i};if(t instanceof Wg){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",x_(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,f]of Object.entries({}))s[c]=f}if(t instanceof so){const c=t.getScopes().filter(f=>f!=="");c.length>0&&(s.scopes=c.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${zk}=${encodeURIComponent(l)}`:"";return`${$k(e)}?${no(a).slice(1)}${u}`}function $k({config:e}){return e.emulator?Ac(e,Uk):`https://${e.authDomain}/${Fk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa="webStorageSupport";class Bk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jg,this._completeRedirectFn=dk,this._overrideRedirectResult=uk}async _openPopup(t,n,r,i){var o;Mt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Jd(t,n,r,ou(),i);return Mk(t,s,Mc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await Jd(t,n,r,ou(),i);return WS(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Mt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Nk(t),r=new hk(t);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(qa,{type:qa},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[qa];s!==void 0&&n(!!s),rt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wk(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return $g()||Dg()||Rc()}}const Vk=Bk;var Zd="@firebase/auth",ep="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Gk(e){Dt(new yt("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;D(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bg(e)},u=new cS(r,i,o,l);return wS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Dt(new yt("auth-internal",t=>{const n=er(t.getProvider("auth").getImmediate());return(r=>new Hk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mt(Zd,ep,Wk(e)),mt(Zd,ep,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk=5*60,Yk=hg("authIdTokenMaxAge")||Kk;let tp=null;const qk=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Yk)return;const i=n==null?void 0:n.token;tp!==i&&(tp=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Qk(e=Sg()){const t=Br(e,"auth");if(t.isInitialized())return t.getImmediate();const n=yS(e,{popupRedirectResolver:Vk,persistence:[ek,BS,Jg]}),r=hg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=qk(o.toString());jS(n,s,()=>s(n.currentUser)),MS(n,a=>s(a))}}const i=m_("auth");return i&&_S(n,`http://${i}`),n}function Xk(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}fS({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=gt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",Xk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Gk("Browser");var Jk="firebase",Zk="10.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mt(Jk,Zk,"app");const ov="@firebase/installations",Fc="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=1e4,av=`w:${Fc}`,lv="FIS_v2",eI="https://firebaseinstallations.googleapis.com/v1",tI=60*60*1e3,nI="installations",rI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Kn=new Zn(nI,rI,iI);function uv(e){return e instanceof _t&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv({projectId:e}){return`${eI}/projects/${e}/installations`}function fv(e){return{token:e.token,requestStatus:2,expiresIn:sI(e.expiresIn),creationTime:Date.now()}}async function dv(e,t){const r=(await t.json()).error;return Kn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function pv({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function oI(e,{refreshToken:t}){const n=pv(e);return n.append("Authorization",aI(t)),n}async function hv(e){const t=await e();return t.status>=500&&t.status<600?e():t}function sI(e){return Number(e.replace("s","000"))}function aI(e){return`${lv} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=cv(e),i=pv(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:lv,appId:e.appId,sdkVersion:av},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await hv(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:fv(u.authToken)}}else throw await dv("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=/^[cdef][\w-]{21}$/,uu="";function fI(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=dI(e);return cI.test(n)?n:uu}catch{return uu}}function dI(e){return uI(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=new Map;function vv(e,t){const n=sa(e);yv(n,t),pI(n,t)}function yv(e,t){const n=gv.get(e);if(n)for(const r of n)r(t)}function pI(e,t){const n=hI();n&&n.postMessage({key:e,fid:t}),mI()}let Dn=null;function hI(){return!Dn&&"BroadcastChannel"in self&&(Dn=new BroadcastChannel("[Firebase] FID Change"),Dn.onmessage=e=>{yv(e.data.key,e.data.fid)}),Dn}function mI(){gv.size===0&&Dn&&(Dn.close(),Dn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI="firebase-installations-database",vI=1,Yn="firebase-installations-store";let Qa=null;function Uc(){return Qa||(Qa=_g(gI,vI,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Yn)}}})),Qa}async function As(e,t){const n=sa(e),i=(await Uc()).transaction(Yn,"readwrite"),o=i.objectStore(Yn),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&vv(e,t.fid),t}async function wv(e){const t=sa(e),r=(await Uc()).transaction(Yn,"readwrite");await r.objectStore(Yn).delete(t),await r.done}async function aa(e,t){const n=sa(e),i=(await Uc()).transaction(Yn,"readwrite"),o=i.objectStore(Yn),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&vv(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zc(e){let t;const n=await aa(e.appConfig,r=>{const i=yI(r),o=wI(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===uu?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function yI(e){const t=e||{fid:fI(),registrationStatus:0};return _v(t)}function wI(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Kn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=_I(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:EI(e)}:{installationEntry:t}}async function _I(e,t){try{const n=await lI(e,t);return As(e.appConfig,n)}catch(n){throw uv(n)&&n.customData.serverCode===409?await wv(e.appConfig):await As(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function EI(e){let t=await np(e.appConfig);for(;t.registrationStatus===1;)await mv(100),t=await np(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await zc(e);return r||n}return t}function np(e){return aa(e,t=>{if(!t)throw Kn.create("installation-not-found");return _v(t)})}function _v(e){return SI(e)?{fid:e.fid,registrationStatus:0}:e}function SI(e){return e.registrationStatus===1&&e.registrationTime+sv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kI({appConfig:e,heartbeatServiceProvider:t},n){const r=II(e,n),i=oI(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:av,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await hv(()=>fetch(r,a));if(l.ok){const u=await l.json();return fv(u)}else throw await dv("Generate Auth Token",l)}function II(e,{fid:t}){return`${cv(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $c(e,t=!1){let n;const r=await aa(e.appConfig,o=>{if(!Ev(o))throw Kn.create("not-registered");const s=o.authToken;if(!t&&CI(s))return o;if(s.requestStatus===1)return n=xI(e,t),o;{if(!navigator.onLine)throw Kn.create("app-offline");const a=PI(o);return n=TI(e,a),a}});return n?await n:r.authToken}async function xI(e,t){let n=await rp(e.appConfig);for(;n.authToken.requestStatus===1;)await mv(100),n=await rp(e.appConfig);const r=n.authToken;return r.requestStatus===0?$c(e,t):r}function rp(e){return aa(e,t=>{if(!Ev(t))throw Kn.create("not-registered");const n=t.authToken;return NI(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function TI(e,t){try{const n=await kI(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await As(e.appConfig,r),n}catch(n){if(uv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await wv(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await As(e.appConfig,r)}throw n}}function Ev(e){return e!==void 0&&e.registrationStatus===2}function CI(e){return e.requestStatus===2&&!bI(e)}function bI(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+tI}function PI(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function NI(e){return e.requestStatus===1&&e.requestTime+sv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AI(e){const t=e,{installationEntry:n,registrationPromise:r}=await zc(t);return r?r.catch(console.error):$c(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OI(e,t=!1){const n=e;return await RI(n),(await $c(n,t)).token}async function RI(e){const{registrationPromise:t}=await zc(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(e){if(!e||!e.options)throw Xa("App Configuration");if(!e.name)throw Xa("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Xa(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Xa(e){return Kn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv="installations",DI="installations-internal",MI=e=>{const t=e.getProvider("app").getImmediate(),n=LI(t),r=Br(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},jI=e=>{const t=e.getProvider("app").getImmediate(),n=Br(t,Sv).getImmediate();return{getId:()=>AI(n),getToken:i=>OI(n,i)}};function FI(){Dt(new yt(Sv,MI,"PUBLIC")),Dt(new yt(DI,jI,"PRIVATE"))}FI();mt(ov,Fc);mt(ov,Fc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="analytics",UI="firebase_id",zI="origin",$I=60*1e3,BI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Bc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=new Cc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},je=new Zn("analytics","Analytics",VI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(e){if(!e.startsWith(Bc)){const t=je.create("invalid-gtag-resource",{gtagURL:e});return Oe.warn(t.message),""}return e}function kv(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function WI(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function GI(e,t){const n=WI("firebase-js-sdk-policy",{createScriptURL:HI}),r=document.createElement("script"),i=`${Bc}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function KI(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function YI(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await kv(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){Oe.error(a)}e("config",i,o)}async function qI(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await kv(n);for(const l of s){const u=a.find(f=>f.measurementId===l),c=u&&t[u.appId];if(c)o.push(c);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){Oe.error(o)}}function QI(e,t,n,r){async function i(o,...s){try{if(o==="event"){const[a,l]=s;await qI(e,t,n,a,l)}else if(o==="config"){const[a,l]=s;await YI(e,t,n,r,a,l)}else if(o==="consent"){const[a,l]=s;e("consent",a,l)}else if(o==="get"){const[a,l,u]=s;e("get",a,l,u)}else if(o==="set"){const[a]=s;e("set",a)}else e(o,...s)}catch(a){Oe.error(a)}}return i}function XI(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=QI(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function JI(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Bc)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=30,ex=1e3;class tx{constructor(t={},n=ex){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Iv=new tx;function nx(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function rx(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:nx(r)},o=BI.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw je.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function ix(e,t=Iv,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw je.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw je.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ax;return setTimeout(async()=>{a.abort()},$I),xv({appId:r,apiKey:i,measurementId:o},s,a,t)}async function xv(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Iv){var o;const{appId:s,measurementId:a}=e;try{await ox(r,t)}catch(l){if(a)return Oe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await rx(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!sx(u)){if(i.deleteThrottleMetadata(s),a)return Oe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const c=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?bd(n,i.intervalMillis,ZI):bd(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(s,f),Oe.debug(`Calling attemptFetch again in ${c} millis`),xv(e,f,r,i)}}function ox(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(je.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function sx(e){if(!(e instanceof _t)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class ax{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function lx(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ux(){if(gg())try{await vg()}catch(e){return Oe.warn(je.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Oe.warn(je.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function cx(e,t,n,r,i,o,s){var a;const l=ix(e);l.then(y=>{n[y.measurementId]=y.appId,e.options.measurementId&&y.measurementId!==e.options.measurementId&&Oe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>Oe.error(y)),t.push(l);const u=ux().then(y=>{if(y)return r.getId()}),[c,f]=await Promise.all([l,u]);JI(o)||GI(o,c.measurementId),i("js",new Date);const p=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return p[zI]="firebase",p.update=!0,f!=null&&(p[UI]=f),i("config",c.measurementId,p),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(t){this.app=t}_delete(){return delete Ei[this.app.options.appId],Promise.resolve()}}let Ei={},ip=[];const op={};let Ja="dataLayer",dx="gtag",sp,Tv,ap=!1;function px(){const e=[];if(mg()&&e.push("This is a browser extension environment."),E_()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=je.create("invalid-analytics-context",{errorInfo:t});Oe.warn(n.message)}}function hx(e,t,n){px();const r=e.options.appId;if(!r)throw je.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Oe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw je.create("no-api-key");if(Ei[r]!=null)throw je.create("already-exists",{id:r});if(!ap){KI(Ja);const{wrappedGtag:o,gtagCore:s}=XI(Ei,ip,op,Ja,dx);Tv=o,sp=s,ap=!0}return Ei[r]=cx(e,ip,op,t,sp,Ja,n),new fx(e)}function mx(e=Sg()){e=it(e);const t=Br(e,Os);return t.isInitialized()?t.getImmediate():gx(e)}function gx(e,t={}){const n=Br(e,Os);if(n.isInitialized()){const i=n.getImmediate();if(Vi(t,n.getOptions()))return i;throw je.create("already-initialized")}return n.initialize({options:t})}function vx(e,t,n,r){e=it(e),lx(Tv,Ei[e.app.options.appId],t,n,r).catch(i=>Oe.error(i))}const lp="@firebase/analytics",up="0.10.8";function yx(){Dt(new yt(Os,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return hx(r,i,n)},"PUBLIC")),Dt(new yt("analytics-internal",e,"PRIVATE")),mt(lp,up),mt(lp,up,"esm2017");function e(t){try{const n=t.getProvider(Os).getImmediate();return{logEvent:(r,i,o)=>vx(n,r,i,o)}}catch(n){throw je.create("interop-component-reg-failed",{reason:n})}}}yx();const wx={apiKey:"AIzaSyDYu3DRnqoay0hsyURuPoCVZGSl11DhJyg",authDomain:"nuevo-d7374.firebaseapp.com",databaseURL:"https://nuevo-d7374.firebaseio.com",projectId:"nuevo-d7374",storageBucket:"nuevo-d7374.appspot.com",messagingSenderId:"574051116511",appId:"1:574051116511:web:de7eacc2d2401c6ec8106a",measurementId:"G-TN49B5ME39"},Cv=Eg(wx),Rs=Qk(Cv);mx(Cv);const _x=()=>{const[e,t]=T.useState(""),[n,r]=T.useState(""),i=async()=>{try{await LS(Rs,e,n),alert("User registered successfully!")}catch(o){console.error("Error registering user:",o)}};return v.jsxs("div",{className:"max-w-md mx-auto mt-10",children:[v.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Register"}),v.jsx("input",{type:"email",placeholder:"Email",value:e,onChange:o=>t(o.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),v.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:o=>r(o.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),v.jsx("button",{onClick:i,className:"w-full bg-blue-500 text-white p-2 rounded",children:"Register"})]})},Ex=()=>{const[e,t]=T.useState(""),[n,r]=T.useState(""),i=ta(),o=async()=>{try{await DS(Rs,e,n),alert("User logged in successfully!"),i("/dashboard")}catch(s){console.error("Error logging in user:",s)}};return v.jsxs("div",{className:"max-w-md mx-auto mt-10",children:[v.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Login"}),v.jsx("input",{type:"email",placeholder:"Email",value:e,onChange:s=>t(s.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),v.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:s=>r(s.target.value),className:"w-full p-2 mb-4 border border-gray-300 rounded"}),v.jsx("button",{onClick:o,className:"w-full bg-blue-500 text-white p-2 rounded",children:"Login"})]})},bv=T.createContext({user:null,logout:async()=>{}}),Vc=()=>T.useContext(bv),Sx=({children:e})=>{const[t,n]=T.useState(null);T.useEffect(()=>{const i=FS(Rs,o=>{n(o)});return()=>i()},[]);const r=async()=>{try{await US(Rs),n(null)}catch(i){console.error("Error logging out:",i)}};return v.jsx(bv.Provider,{value:{user:t,logout:r},children:e})},kx=()=>v.jsx("header",{className:"flex items-center justify-center h-screen bg-black w-full",children:v.jsx("div",{className:"p-5 text-3xl text-green-500 bg-black bg-opacity-50 rounded-xl w-full mx-auto font-mono",children:v.jsxs("div",{className:"text-center",children:[v.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Servicio de Mantenimiento de PC y Redes"}),v.jsx("p",{className:"text-lg mb-8",children:"Soluciones rápidas y efectivas para tus necesidades tecnológicas."}),v.jsx("a",{href:"#contact",className:"bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600",children:"Contáctanos"})]})})}),Ix=()=>v.jsx("section",{id:"services",className:" flex items-center justify-center h-screen bg-black w-screen ",children:v.jsx("div",{className:"p-5 text-2xl text-green-500 bg-black  rounded-xl w-screen  mx-auto font-mono",children:v.jsxs("div",{className:"text-center",children:[v.jsx("h2",{className:"text-3xl font-bold mb-8",children:"Nuestros Servicios"}),v.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[v.jsxs("div",{className:"p-4 rounded border border-green-500 transform transition duration-500 hover:scale-105",children:[v.jsx("h3",{className:"text-xl font-bold mb-2",children:"Mantenimiento de PC"}),v.jsx("p",{children:"Reparación y optimización de equipos de escritorio y portátiles."})]}),v.jsxs("div",{className:"p-4 border rounded border-green-500 transform transition duration-500 hover:scale-105",children:[v.jsx("h3",{className:"text-xl font-bold mb-2",children:"Soporte Técnico"}),v.jsx("p",{children:"Asistencia remota y presencial para resolver problemas técnicos."})]}),v.jsxs("div",{className:"p-4 border rounded border-green-500 transform transition duration-500 hover:scale-105",children:[v.jsx("h3",{className:"text-xl font-bold mb-2",children:"Instalación de Redes"}),v.jsx("p",{children:"Configuración y mantenimiento de redes domésticas y empresariales."})]})]})]})})});var Pv={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(typeof self<"u"?self:Iy,()=>(()=>{var n={75:function(s){(function(){var a,l,u,c,f,p;typeof performance<"u"&&performance!==null&&performance.now?s.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(s.exports=function(){return(a()-f)/1e6},l=process.hrtime,c=(a=function(){var y;return 1e9*(y=l())[0]+y[1]})(),p=1e9*process.uptime(),f=c-p):Date.now?(s.exports=function(){return Date.now()-u},u=Date.now()):(s.exports=function(){return new Date().getTime()-u},u=new Date().getTime())}).call(this)},4087:(s,a,l)=>{for(var u=l(75),c=typeof window>"u"?l.g:window,f=["moz","webkit"],p="AnimationFrame",y=c["request"+p],_=c["cancel"+p]||c["cancelRequest"+p],E=0;!y&&E<f.length;E++)y=c[f[E]+"Request"+p],_=c[f[E]+"Cancel"+p]||c[f[E]+"CancelRequest"+p];if(!y||!_){var k=0,h=0,d=[];y=function(m){if(d.length===0){var w=u(),x=Math.max(0,16.666666666666668-(w-k));k=x+w,setTimeout(function(){var C=d.slice(0);d.length=0;for(var P=0;P<C.length;P++)if(!C[P].cancelled)try{C[P].callback(k)}catch(A){setTimeout(function(){throw A},0)}},Math.round(x))}return d.push({handle:++h,callback:m,cancelled:!1}),h},_=function(m){for(var w=0;w<d.length;w++)d[w].handle===m&&(d[w].cancelled=!0)}}s.exports=function(m){return y.call(c,m)},s.exports.cancel=function(){_.apply(c,arguments)},s.exports.polyfill=function(m){m||(m=c),m.requestAnimationFrame=y,m.cancelAnimationFrame=_}}},r={};function i(s){var a=r[s];if(a!==void 0)return a.exports;var l=r[s]={exports:{}};return n[s].call(l.exports,l,l.exports,i),l.exports}i.n=s=>{var a=s&&s.__esModule?()=>s.default:()=>s;return i.d(a,{a}),a},i.d=(s,a)=>{for(var l in a)i.o(a,l)&&!i.o(s,l)&&Object.defineProperty(s,l,{enumerable:!0,get:a[l]})},i.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),i.o=(s,a)=>Object.prototype.hasOwnProperty.call(s,a);var o={};return(()=>{i.d(o,{default:()=>co});var s=i(4087),a=i.n(s);const l=function(j){return new RegExp(/<[a-z][\s\S]*>/i).test(j)},u=function(j,R){return Math.floor(Math.random()*(R-j+1))+j};var c="TYPE_CHARACTER",f="REMOVE_CHARACTER",p="REMOVE_ALL",y="REMOVE_LAST_VISIBLE_NODE",_="PAUSE_FOR",E="CALL_FUNCTION",k="ADD_HTML_TAG_ELEMENT",h="CHANGE_DELETE_SPEED",d="CHANGE_DELAY",m="CHANGE_CURSOR",w="PASTE_STRING",x="HTML_TAG";function C(j){return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(R){return typeof R}:function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R},C(j)}function P(j,R){var F=Object.keys(j);if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(j);R&&(S=S.filter(function(L){return Object.getOwnPropertyDescriptor(j,L).enumerable})),F.push.apply(F,S)}return F}function A(j){for(var R=1;R<arguments.length;R++){var F=arguments[R]!=null?arguments[R]:{};R%2?P(Object(F),!0).forEach(function(S){W(j,S,F[S])}):Object.getOwnPropertyDescriptors?Object.defineProperties(j,Object.getOwnPropertyDescriptors(F)):P(Object(F)).forEach(function(S){Object.defineProperty(j,S,Object.getOwnPropertyDescriptor(F,S))})}return j}function $(j){return function(R){if(Array.isArray(R))return M(R)}(j)||function(R){if(typeof Symbol<"u"&&R[Symbol.iterator]!=null||R["@@iterator"]!=null)return Array.from(R)}(j)||function(R,F){if(R){if(typeof R=="string")return M(R,F);var S=Object.prototype.toString.call(R).slice(8,-1);return S==="Object"&&R.constructor&&(S=R.constructor.name),S==="Map"||S==="Set"?Array.from(R):S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S)?M(R,F):void 0}}(j)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function M(j,R){(R==null||R>j.length)&&(R=j.length);for(var F=0,S=new Array(R);F<R;F++)S[F]=j[F];return S}function Re(j,R){for(var F=0;F<R.length;F++){var S=R[F];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(j,$t(S.key),S)}}function W(j,R,F){return(R=$t(R))in j?Object.defineProperty(j,R,{value:F,enumerable:!0,configurable:!0,writable:!0}):j[R]=F,j}function $t(j){var R=function(F,S){if(C(F)!=="object"||F===null)return F;var L=F[Symbol.toPrimitive];if(L!==void 0){var g=L.call(F,"string");if(C(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(F)}(j);return C(R)==="symbol"?R:String(R)}const co=function(){function j(S,L){var g=this;if(function(b,H){if(!(b instanceof H))throw new TypeError("Cannot call a class as a function")}(this,j),W(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),W(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),W(this,"setupWrapperElement",function(){g.state.elements.container&&(g.state.elements.wrapper.className=g.options.wrapperClassName,g.state.elements.cursor.className=g.options.cursorClassName,g.state.elements.cursor.innerHTML=g.options.cursor,g.state.elements.container.innerHTML="",g.state.elements.container.appendChild(g.state.elements.wrapper),g.state.elements.container.appendChild(g.state.elements.cursor))}),W(this,"start",function(){return g.state.eventLoopPaused=!1,g.runEventLoop(),g}),W(this,"pause",function(){return g.state.eventLoopPaused=!0,g}),W(this,"stop",function(){return g.state.eventLoop&&((0,s.cancel)(g.state.eventLoop),g.state.eventLoop=null),g}),W(this,"pauseFor",function(b){return g.addEventToQueue(_,{ms:b}),g}),W(this,"typeOutAllStrings",function(){return typeof g.options.strings=="string"?(g.typeString(g.options.strings).pauseFor(g.options.pauseFor),g):(g.options.strings.forEach(function(b){g.typeString(b).pauseFor(g.options.pauseFor).deleteAll(g.options.deleteSpeed)}),g)}),W(this,"typeString",function(b){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(l(b))return g.typeOutHTMLString(b,H);if(b){var Z=(g.options||{}).stringSplitter,le=typeof Z=="function"?Z(b):b.split("");g.typeCharacters(le,H)}return g}),W(this,"pasteString",function(b){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return l(b)?g.typeOutHTMLString(b,H,!0):(b&&g.addEventToQueue(w,{character:b,node:H}),g)}),W(this,"typeOutHTMLString",function(b){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,Z=arguments.length>2?arguments[2]:void 0,le=function(Wr){var Gr=document.createElement("div");return Gr.innerHTML=Wr,Gr.childNodes}(b);if(le.length>0)for(var V=0;V<le.length;V++){var he=le[V],tr=he.innerHTML;he&&he.nodeType!==3?(he.innerHTML="",g.addEventToQueue(k,{node:he,parentNode:H}),Z?g.pasteString(tr,he):g.typeString(tr,he)):he.textContent&&(Z?g.pasteString(he.textContent,H):g.typeString(he.textContent,H))}return g}),W(this,"deleteAll",function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return g.addEventToQueue(p,{speed:b}),g}),W(this,"changeDeleteSpeed",function(b){if(!b)throw new Error("Must provide new delete speed");return g.addEventToQueue(h,{speed:b}),g}),W(this,"changeDelay",function(b){if(!b)throw new Error("Must provide new delay");return g.addEventToQueue(d,{delay:b}),g}),W(this,"changeCursor",function(b){if(!b)throw new Error("Must provide new cursor");return g.addEventToQueue(m,{cursor:b}),g}),W(this,"deleteChars",function(b){if(!b)throw new Error("Must provide amount of characters to delete");for(var H=0;H<b;H++)g.addEventToQueue(f);return g}),W(this,"callFunction",function(b,H){if(!b||typeof b!="function")throw new Error("Callback must be a function");return g.addEventToQueue(E,{cb:b,thisArg:H}),g}),W(this,"typeCharacters",function(b){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!b||!Array.isArray(b))throw new Error("Characters must be an array");return b.forEach(function(Z){g.addEventToQueue(c,{character:Z,node:H})}),g}),W(this,"removeCharacters",function(b){if(!b||!Array.isArray(b))throw new Error("Characters must be an array");return b.forEach(function(){g.addEventToQueue(f)}),g}),W(this,"addEventToQueue",function(b,H){var Z=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return g.addEventToStateProperty(b,H,Z,"eventQueue")}),W(this,"addReverseCalledEvent",function(b,H){var Z=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return g.options.loop?g.addEventToStateProperty(b,H,Z,"reverseCalledEvents"):g}),W(this,"addEventToStateProperty",function(b,H){var Z=arguments.length>2&&arguments[2]!==void 0&&arguments[2],le=arguments.length>3?arguments[3]:void 0,V={eventName:b,eventArgs:H||{}};return g.state[le]=Z?[V].concat($(g.state[le])):[].concat($(g.state[le]),[V]),g}),W(this,"runEventLoop",function(){g.state.lastFrameTime||(g.state.lastFrameTime=Date.now());var b=Date.now(),H=b-g.state.lastFrameTime;if(!g.state.eventQueue.length){if(!g.options.loop)return;g.state.eventQueue=$(g.state.calledEvents),g.state.calledEvents=[],g.options=A({},g.state.initialOptions)}if(g.state.eventLoop=a()(g.runEventLoop),!g.state.eventLoopPaused){if(g.state.pauseUntil){if(b<g.state.pauseUntil)return;g.state.pauseUntil=null}var Z,le=$(g.state.eventQueue),V=le.shift();if(!(H<=(Z=V.eventName===y||V.eventName===f?g.options.deleteSpeed==="natural"?u(40,80):g.options.deleteSpeed:g.options.delay==="natural"?u(120,160):g.options.delay))){var he=V.eventName,tr=V.eventArgs;switch(g.logInDevMode({currentEvent:V,state:g.state,delay:Z}),he){case w:case c:var Wr=tr.character,Gr=tr.node,tf=document.createTextNode(Wr),Kr=tf;g.options.onCreateTextNode&&typeof g.options.onCreateTextNode=="function"&&(Kr=g.options.onCreateTextNode(Wr,tf)),Kr&&(Gr?Gr.appendChild(Kr):g.state.elements.wrapper.appendChild(Kr)),g.state.visibleNodes=[].concat($(g.state.visibleNodes),[{type:"TEXT_NODE",character:Wr,node:Kr}]);break;case f:le.unshift({eventName:y,eventArgs:{removingCharacterNode:!0}});break;case _:var my=V.eventArgs.ms;g.state.pauseUntil=Date.now()+parseInt(my);break;case E:var nf=V.eventArgs,gy=nf.cb,vy=nf.thisArg;gy.call(vy,{elements:g.state.elements});break;case k:var rf=V.eventArgs,da=rf.node,pa=rf.parentNode;pa?pa.appendChild(da):g.state.elements.wrapper.appendChild(da),g.state.visibleNodes=[].concat($(g.state.visibleNodes),[{type:x,node:da,parentNode:pa||g.state.elements.wrapper}]);break;case p:var yy=g.state.visibleNodes,ha=tr.speed,fo=[];ha&&fo.push({eventName:h,eventArgs:{speed:ha,temp:!0}});for(var of=0,wy=yy.length;of<wy;of++)fo.push({eventName:y,eventArgs:{removingCharacterNode:!1}});ha&&fo.push({eventName:h,eventArgs:{speed:g.options.deleteSpeed,temp:!0}}),le.unshift.apply(le,fo);break;case y:var _y=V.eventArgs.removingCharacterNode;if(g.state.visibleNodes.length){var ma=g.state.visibleNodes.pop(),Ey=ma.type,po=ma.node,Sy=ma.character;g.options.onRemoveNode&&typeof g.options.onRemoveNode=="function"&&g.options.onRemoveNode({node:po,character:Sy}),po&&po.parentNode.removeChild(po),Ey===x&&_y&&le.unshift({eventName:y,eventArgs:{}})}break;case h:g.options.deleteSpeed=V.eventArgs.speed;break;case d:g.options.delay=V.eventArgs.delay;break;case m:g.options.cursor=V.eventArgs.cursor,g.state.elements.cursor.innerHTML=V.eventArgs.cursor}g.options.loop&&(V.eventName===y||V.eventArgs&&V.eventArgs.temp||(g.state.calledEvents=[].concat($(g.state.calledEvents),[V]))),g.state.eventQueue=le,g.state.lastFrameTime=b}}}),S)if(typeof S=="string"){var J=document.querySelector(S);if(!J)throw new Error("Could not find container element");this.state.elements.container=J}else this.state.elements.container=S;L&&(this.options=A(A({},this.options),L)),this.state.initialOptions=A({},this.options),this.init()}var R,F;return R=j,(F=[{key:"init",value:function(){var S,L;this.setupWrapperElement(),this.addEventToQueue(m,{cursor:this.options.cursor},!0),this.addEventToQueue(p,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(S=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(L=document.createElement("style")).appendChild(document.createTextNode(S)),document.head.appendChild(L),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(S){this.options.devMode&&console.log(S)}}])&&Re(R.prototype,F),Object.defineProperty(R,"prototype",{writable:!1}),j}()})(),o.default})())})(Pv);var xx=Pv.exports;const Tx=Cu(xx),Cx=()=>{const e=T.useRef(null);return T.useEffect(()=>{e.current&&new Tx(e.current,{strings:["Soluciones tecnológicas de alta calidad."],autoStart:!0,loop:!0,delay:75,deleteSpeed:50,pauseFor:2e3})},[]),v.jsx("section",{id:"about",className:"py-16 w-screen bg-black text-green-500",children:v.jsxs("div",{className:"container mx-auto text-center",children:[v.jsx("h2",{className:"text-3xl font-bold mb-8 font-ibm",children:"Sobre Nosotros"}),v.jsxs("div",{className:"text-lg flex justify-center items-center",children:[v.jsx("p",{className:"inline-block font-mono"}),v.jsx("span",{ref:e,className:"inline-block font-mono"})]})]})})},bx="https://i.postimg.cc/J4LHWrsP/r1.jpg",Px="https://i.postimg.cc/BnnJH6YY/r2.jpg",Nx="https://i.postimg.cc/50V4HmZv/pc1.jpg",Ax="https://i.postimg.cc/nLwWgV1L/pc2.jpg",Ox="https://i.postimg.cc/QCMHtbTm/3.jpg",Rx="https://i.postimg.cc/7hvJB7Gn/back.jpg",Lx=()=>v.jsx("div",{className:"w-full flex flex-wrap bg-black px-5 py-2 lg:px-32 lg:pt-24",children:v.jsxs("div",{className:"-m-1 flex flex-wrap md:-m-2 w-full",children:[v.jsxs("div",{className:"flex w-full md:w-1/2 flex-wrap",children:[v.jsx("div",{className:"w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-105",children:v.jsx("img",{alt:"gallery",className:"block h-full w-full rounded-lg object-cover object-center pointer-events-none select-none",src:Ox})}),v.jsx("div",{className:"w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-105",children:v.jsx("img",{alt:"gallery",className:"block h-full w-full rounded-lg object-cover object-center pointer-events-none select-none",src:Nx})}),v.jsx("div",{className:"w-full p-1 md:p-2 transform transition duration-500 hover:scale-105",children:v.jsx("img",{alt:"gallery",className:"block h-full w-full rounded-lg object-cover object-center pointer-events-none select-none",src:bx})})]}),v.jsxs("div",{className:"flex w-full md:w-1/2 flex-wrap",children:[v.jsx("div",{className:"w-full p-1 md:p-2 transform transition duration-500 hover:scale-105",children:v.jsx("img",{alt:"gallery",className:"block h-full w-full rounded-lg object-cover object-center pointer-events-none select-none",src:Ax})}),v.jsx("div",{className:"w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-105",children:v.jsx("img",{alt:"gallery",className:"block h-full w-full rounded-lg object-cover object-center pointer-events-none select-none",src:Px})}),v.jsx("div",{className:"w-1/2 p-1 md:p-2 transform transition duration-500 hover:scale-105",children:v.jsx("img",{alt:"gallery",className:"block h-full w-full rounded-lg object-cover object-center pointer-events-none select-none",src:Rx})})]})]})}),Ki={_origin:"https://api.emailjs.com"},Dx=(e,t="https://api.emailjs.com")=>{Ki._userID=e,Ki._origin=t},Nv=(e,t,n)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class cp{constructor(t){this.status=t.status,this.text=t.responseText}}const Av=(e,t,n={})=>new Promise((r,i)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:s})=>{const a=new cp(s);a.status===200||a.text==="OK"?r(a):i(a)}),o.addEventListener("error",({target:s})=>{i(new cp(s))}),o.open("POST",Ki._origin+e,!0),Object.keys(n).forEach(s=>{o.setRequestHeader(s,n[s])}),o.send(t)}),Mx=(e,t,n,r)=>{const i=r||Ki._userID;return Nv(i,e,t),Av("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:i,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"})},jx=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},Fx=(e,t,n,r)=>{const i=r||Ki._userID,o=jx(n);Nv(i,e,t);const s=new FormData(o);return s.append("lib_version","3.2.0"),s.append("service_id",e),s.append("template_id",t),s.append("user_id",i),Av("/api/v1.0/email/send-form",s)},fp={init:Dx,send:Mx,sendForm:Fx},Ux=()=>{const e=T.useRef(null);T.useEffect(()=>{fp.init("q6ziyJHHAmVKFmMGh")},[]);const t=n=>{n.preventDefault(),e.current&&fp.sendForm("service_jtzc24k","contact_form",e.current).then(()=>{alert("Correo enviado exitosamente")},r=>{alert("Error al enviar el correo")})};return v.jsx("section",{id:"contact",className:"py-16 bg-black w-screen font-sans",children:v.jsx("div",{className:"container mx-auto text-center",children:v.jsxs("form",{ref:e,onSubmit:t,className:"max-w-md mx-auto bg-black text-green-500 p-8 rounded shadow-lg font-mono",children:[v.jsx("h2",{className:"text-3xl font-bold mb-6 font-sans",children:"Contáctanos"}),v.jsx("input",{type:"hidden",name:"contact_number",value:"697483"}),v.jsxs("div",{className:"mb-4",children:[v.jsx("label",{className:"block  text-green-500 text-sm font-bold mb-2",children:"Nombre"}),v.jsx("input",{type:"text",name:"user_name",className:" bg-black border-green-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0})]}),v.jsxs("div",{className:"mb-4",children:[v.jsx("label",{className:"block text-green-500 text-sm font-bold mb-2",children:"Email"}),v.jsx("input",{type:"email",name:"user_email",className:" bg-black border-green-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0})]}),v.jsxs("div",{className:"mb-4",children:[v.jsx("label",{className:"block text-green-500 text-sm font-bold mb-2",children:"Mensaje"}),v.jsx("textarea",{name:"message",className:" bg-black border-green-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0})]}),v.jsx("div",{className:" items-center justify-between",children:v.jsx("button",{type:"submit",value:"Enviar",className:"bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500",children:"Enviar"})})]})})})},dp=()=>{};let Hc={},Ov={},Rv=null,Lv={mark:dp,measure:dp};try{typeof window<"u"&&(Hc=window),typeof document<"u"&&(Ov=document),typeof MutationObserver<"u"&&(Rv=MutationObserver),typeof performance<"u"&&(Lv=performance)}catch{}const{userAgent:pp=""}=Hc.navigator||{},yn=Hc,X=Ov,hp=Rv,Oo=Lv;yn.document;const zt=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",Dv=~pp.indexOf("MSIE")||~pp.indexOf("Trident/");var te="classic",Mv="duotone",Fe="sharp",Ue="sharp-duotone",zx=[te,Mv,Fe,Ue],$x={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},mp={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Bx=["kit"],Vx=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Hx=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Wx={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Gx={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Kx={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Yx={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},qx={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Qx={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},jv={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Xx=["solid","regular","light","thin","duotone","brands"],Fv=[1,2,3,4,5,6,7,8,9,10],Jx=Fv.concat([11,12,13,14,15,16,17,18,19,20]),ui={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zx=[...Object.keys(Yx),...Xx,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ui.GROUP,ui.SWAP_OPACITY,ui.PRIMARY,ui.SECONDARY].concat(Fv.map(e=>"".concat(e,"x"))).concat(Jx.map(e=>"w-".concat(e))),e2={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},t2={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},n2={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},gp={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const jt="___FONT_AWESOME___",cu=16,Uv="fa",zv="svg-inline--fa",qn="data-fa-i2svg",fu="data-fa-pseudo-element",r2="data-fa-pseudo-element-pending",Wc="data-prefix",Gc="data-icon",vp="fontawesome-i2svg",i2="async",o2=["HTML","HEAD","STYLE","SCRIPT"],$v=(()=>{try{return!0}catch{return!1}})(),Bv=[te,Fe,Ue];function lo(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[te]}})}const Vv={...jv};Vv[te]={...jv[te],...mp.kit,...mp["kit-duotone"]};const Fn=lo(Vv),du={...Qx};du[te]={...du[te],...gp.kit,...gp["kit-duotone"]};const Yi=lo(du),pu={...qx};pu[te]={...pu[te],...n2.kit};const Un=lo(pu),hu={...Kx};hu[te]={...hu[te],...t2.kit};const s2=lo(hu),a2=Vx,Hv="fa-layers-text",l2=Hx,u2={...$x};lo(u2);const c2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Za=ui,Dr=new Set;Object.keys(Yi[te]).map(Dr.add.bind(Dr));Object.keys(Yi[Fe]).map(Dr.add.bind(Dr));Object.keys(Yi[Ue]).map(Dr.add.bind(Dr));const f2=[...Bx,...Zx],Si=yn.FontAwesomeConfig||{};function d2(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function p2(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}X&&typeof X.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const i=p2(d2(n));i!=null&&(Si[r]=i)});const Wv={styleDefault:"solid",familyDefault:"classic",cssPrefix:Uv,replacementClass:zv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Si.familyPrefix&&(Si.cssPrefix=Si.familyPrefix);const Mr={...Wv,...Si};Mr.autoReplaceSvg||(Mr.observeMutations=!1);const O={};Object.keys(Wv).forEach(e=>{Object.defineProperty(O,e,{enumerable:!0,set:function(t){Mr[e]=t,ki.forEach(n=>n(O))},get:function(){return Mr[e]}})});Object.defineProperty(O,"familyPrefix",{enumerable:!0,set:function(e){Mr.cssPrefix=e,ki.forEach(t=>t(O))},get:function(){return Mr.cssPrefix}});yn.FontAwesomeConfig=O;const ki=[];function h2(e){return ki.push(e),()=>{ki.splice(ki.indexOf(e),1)}}const Ht=cu,ct={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function m2(e){if(!e||!zt)return;const t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=X.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return X.head.insertBefore(t,r),e}const g2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function qi(){let e=12,t="";for(;e-- >0;)t+=g2[Math.random()*62|0];return t}function Hr(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Kc(e){return e.classList?Hr(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Gv(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function v2(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Gv(e[n]),'" '),"").trim()}function la(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Yc(e){return e.size!==ct.size||e.x!==ct.x||e.y!==ct.y||e.rotate!==ct.rotate||e.flipX||e.flipY}function y2(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function w2(e){let{transform:t,width:n=cu,height:r=cu,startCentered:i=!1}=e,o="";return i&&Dv?o+="translate(".concat(t.x/Ht-n/2,"em, ").concat(t.y/Ht-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(t.x/Ht,"em), calc(-50% + ").concat(t.y/Ht,"em)) "):o+="translate(".concat(t.x/Ht,"em, ").concat(t.y/Ht,"em) "),o+="scale(".concat(t.size/Ht*(t.flipX?-1:1),", ").concat(t.size/Ht*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var _2=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Kv(){const e=Uv,t=zv,n=O.cssPrefix,r=O.replacementClass;let i=_2;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let yp=!1;function el(){O.autoAddCss&&!yp&&(m2(Kv()),yp=!0)}var E2={mixout(){return{dom:{css:Kv,insertCss:el}}},hooks(){return{beforeDOMElementCreation(){el()},beforeI2svg(){el()}}}};const Ft=yn||{};Ft[jt]||(Ft[jt]={});Ft[jt].styles||(Ft[jt].styles={});Ft[jt].hooks||(Ft[jt].hooks={});Ft[jt].shims||(Ft[jt].shims=[]);var ft=Ft[jt];const Yv=[],qv=function(){X.removeEventListener("DOMContentLoaded",qv),Ls=1,Yv.map(e=>e())};let Ls=!1;zt&&(Ls=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),Ls||X.addEventListener("DOMContentLoaded",qv));function S2(e){zt&&(Ls?setTimeout(e,0):Yv.push(e))}function uo(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Gv(e):"<".concat(t," ").concat(v2(n),">").concat(r.map(uo).join(""),"</").concat(t,">")}function wp(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var tl=function(t,n,r,i){var o=Object.keys(t),s=o.length,a=n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<s;l++)u=o[l],c=a(c,t[u],u,t);return c};function k2(e){const t=[];let n=0;const r=e.length;for(;n<r;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function mu(e){const t=k2(e);return t.length===1?t[0].toString(16):null}function I2(e,t){const n=e.length;let r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function _p(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function gu(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=_p(t);typeof ft.hooks.addPack=="function"&&!r?ft.hooks.addPack(e,_p(t)):ft.styles[e]={...ft.styles[e]||{},...i},e==="fas"&&gu("fa",t)}const{styles:An,shims:x2}=ft,T2={[te]:Object.values(Un[te]),[Fe]:Object.values(Un[Fe]),[Ue]:Object.values(Un[Ue])};let qc=null,Qv={},Xv={},Jv={},Zv={},ey={};const C2={[te]:Object.keys(Fn[te]),[Fe]:Object.keys(Fn[Fe]),[Ue]:Object.keys(Fn[Ue])};function b2(e){return~f2.indexOf(e)}function P2(e,t){const n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!b2(i)?i:null}const ty=()=>{const e=r=>tl(An,(i,o,s)=>(i[s]=tl(o,r,{}),i),{});Qv=e((r,i,o)=>(i[3]&&(r[i[3]]=o),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=o}),r)),Xv=e((r,i,o)=>(r[o]=o,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=o}),r)),ey=e((r,i,o)=>{const s=i[2];return r[o]=o,s.forEach(a=>{r[a]=o}),r});const t="far"in An||O.autoFetchSvg,n=tl(x2,(r,i)=>{const o=i[0];let s=i[1];const a=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:a}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:a}),r},{names:{},unicodes:{}});Jv=n.names,Zv=n.unicodes,qc=ua(O.styleDefault,{family:O.familyDefault})};h2(e=>{qc=ua(e.styleDefault,{family:O.familyDefault})});ty();function Qc(e,t){return(Qv[e]||{})[t]}function N2(e,t){return(Xv[e]||{})[t]}function rn(e,t){return(ey[e]||{})[t]}function ny(e){return Jv[e]||{prefix:null,iconName:null}}function A2(e){const t=Zv[e],n=Qc("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function wn(){return qc}const Xc=()=>({prefix:null,iconName:null,rest:[]});function ua(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=te}=t,r=Fn[n][e],i=Yi[n][e]||Yi[n][r],o=e in ft.styles?e:null;return i||o||null}const O2={[te]:Object.keys(Un[te]),[Fe]:Object.keys(Un[Fe]),[Ue]:Object.keys(Un[Ue])};function ca(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[te]:"".concat(O.cssPrefix,"-").concat(te),[Fe]:"".concat(O.cssPrefix,"-").concat(Fe),[Ue]:"".concat(O.cssPrefix,"-").concat(Ue)};let i=null,o=te;const s=zx.filter(l=>l!==Mv);s.forEach(l=>{(e.includes(r[l])||e.some(u=>O2[l].includes(u)))&&(o=l)});const a=e.reduce((l,u)=>{const c=P2(O.cssPrefix,u);if(An[u]?(u=T2[o].includes(u)?s2[o][u]:u,i=u,l.prefix=u):C2[o].indexOf(u)>-1?(i=u,l.prefix=ua(u,{family:o})):c?l.iconName=c:u!==O.replacementClass&&!s.some(f=>u===r[f])&&l.rest.push(u),!n&&l.prefix&&l.iconName){const f=i==="fa"?ny(l.iconName):{},p=rn(l.prefix,l.iconName);f.prefix&&(i=null),l.iconName=f.iconName||p||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!An.far&&An.fas&&!O.autoFetchSvg&&(l.prefix="fas")}return l},Xc());return(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(a.prefix="fad"),!a.prefix&&o===Fe&&(An.fass||O.autoFetchSvg)&&(a.prefix="fass",a.iconName=rn(a.prefix,a.iconName)||a.iconName),!a.prefix&&o===Ue&&(An.fasds||O.autoFetchSvg)&&(a.prefix="fasds",a.iconName=rn(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=wn()||"fas"),a}class R2{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...i[o]},gu(o,i[o]);const s=Un[te][o];s&&gu(s,i[o]),ty()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:o,iconName:s,icon:a}=r[i],l=a[2];t[o]||(t[o]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(t[o][u]=a)}),t[o][s]=a}),t}}let Ep=[],gr={};const Cr={},L2=Object.keys(Cr);function D2(e,t){let{mixoutsTo:n}=t;return Ep=e,gr={},Object.keys(Cr).forEach(r=>{L2.indexOf(r)===-1&&delete Cr[r]}),Ep.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(o=>{typeof i[o]=="function"&&(n[o]=i[o]),typeof i[o]=="object"&&Object.keys(i[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(s=>{gr[s]||(gr[s]=[]),gr[s].push(o[s])})}r.provides&&r.provides(Cr)}),n}function vu(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(gr[e]||[]).forEach(s=>{t=s.apply(null,[t,...r])}),t}function Qn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(gr[e]||[]).forEach(o=>{o.apply(null,n)})}function _n(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Cr[e]?Cr[e].apply(null,t):void 0}function yu(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||wn();if(t)return t=rn(n,t)||t,wp(ry.definitions,n,t)||wp(ft.styles,n,t)}const ry=new R2,M2=()=>{O.autoReplaceSvg=!1,O.observeMutations=!1,Qn("noAuto")},j2={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return zt?(Qn("beforeI2svg",e),_n("pseudoElements2svg",e),_n("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;O.autoReplaceSvg===!1&&(O.autoReplaceSvg=!0),O.observeMutations=!0,S2(()=>{U2({autoReplaceSvgRoot:t}),Qn("watch",e)})}},F2={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:rn(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=ua(e[0]);return{prefix:n,iconName:rn(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(O.cssPrefix,"-"))>-1||e.match(a2))){const t=ca(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||wn(),iconName:rn(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=wn();return{prefix:t,iconName:rn(t,e)||e}}}},Ve={noAuto:M2,config:O,dom:j2,parse:F2,library:ry,findIconDefinition:yu,toHtml:uo},U2=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=X}=e;(Object.keys(ft.styles).length>0||O.autoFetchSvg)&&zt&&O.autoReplaceSvg&&Ve.dom.i2svg({node:t})};function fa(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>uo(n))}}),Object.defineProperty(e,"node",{get:function(){if(!zt)return;const n=X.createElement("div");return n.innerHTML=e.html,n.children}}),e}function z2(e){let{children:t,main:n,mask:r,attributes:i,styles:o,transform:s}=e;if(Yc(s)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};i.style=la({...o,"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")})}return[{tag:"svg",attributes:i,children:t}]}function $2(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:o}=e;const s=o===!0?"".concat(t,"-").concat(O.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:s},children:r}]}]}function Jc(e){const{icons:{main:t,mask:n},prefix:r,iconName:i,transform:o,symbol:s,title:a,maskId:l,titleId:u,extra:c,watchable:f=!1}=e,{width:p,height:y}=n.found?n:t,_=r==="fak",E=[O.replacementClass,i?"".concat(O.cssPrefix,"-").concat(i):""].filter(x=>c.classes.indexOf(x)===-1).filter(x=>x!==""||!!x).concat(c.classes).join(" ");let k={children:[],attributes:{...c.attributes,"data-prefix":r,"data-icon":i,class:E,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(y)}};const h=_&&!~c.classes.indexOf("fa-fw")?{width:"".concat(p/y*16*.0625,"em")}:{};f&&(k.attributes[qn]=""),a&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||qi())},children:[a]}),delete k.attributes.title);const d={...k,prefix:r,iconName:i,main:t,mask:n,maskId:l,transform:o,symbol:s,styles:{...h,...c.styles}},{children:m,attributes:w}=n.found&&t.found?_n("generateAbstractMask",d)||{children:[],attributes:{}}:_n("generateAbstractIcon",d)||{children:[],attributes:{}};return d.children=m,d.attributes=w,s?$2(d):z2(d)}function Sp(e){const{content:t,width:n,height:r,transform:i,title:o,extra:s,watchable:a=!1}=e,l={...s.attributes,...o?{title:o}:{},class:s.classes.join(" ")};a&&(l[qn]="");const u={...s.styles};Yc(i)&&(u.transform=w2({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const c=la(u);c.length>0&&(l.style=c);const f=[];return f.push({tag:"span",attributes:l,children:[t]}),o&&f.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),f}function B2(e){const{content:t,title:n,extra:r}=e,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},o=la(r.styles);o.length>0&&(i.style=o);const s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:nl}=ft;function wu(e){const t=e[0],n=e[1],[r]=e.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(O.cssPrefix,"-").concat(Za.GROUP)},children:[{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(Za.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(Za.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:i}}const V2={found:!1,width:512,height:512};function H2(e,t){!$v&&!O.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function _u(e,t){let n=t;return t==="fa"&&O.styleDefault!==null&&(t=wn()),new Promise((r,i)=>{if(n==="fa"){const o=ny(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&nl[t]&&nl[t][e]){const o=nl[t][e];return r(wu(o))}H2(e,t),r({...V2,icon:O.showMissingIcons&&e?_n("missingIconAbstract")||{}:{}})})}const kp=()=>{},Eu=O.measurePerformance&&Oo&&Oo.mark&&Oo.measure?Oo:{mark:kp,measure:kp},ci='FA "6.6.0"',W2=e=>(Eu.mark("".concat(ci," ").concat(e," begins")),()=>iy(e)),iy=e=>{Eu.mark("".concat(ci," ").concat(e," ends")),Eu.measure("".concat(ci," ").concat(e),"".concat(ci," ").concat(e," begins"),"".concat(ci," ").concat(e," ends"))};var Zc={begin:W2,end:iy};const qo=()=>{};function Ip(e){return typeof(e.getAttribute?e.getAttribute(qn):null)=="string"}function G2(e){const t=e.getAttribute?e.getAttribute(Wc):null,n=e.getAttribute?e.getAttribute(Gc):null;return t&&n}function K2(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(O.replacementClass)}function Y2(){return O.autoReplaceSvg===!0?Qo.replace:Qo[O.autoReplaceSvg]||Qo.replace}function q2(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function Q2(e){return X.createElement(e)}function oy(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?q2:Q2}=t;if(typeof e=="string")return X.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(oy(o,{ceFn:n}))}),r}function X2(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Qo={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(oy(n),t)}),t.getAttribute(qn)===null&&O.keepOriginalSource){let n=X.createComment(X2(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Kc(t).indexOf(O.replacementClass))return Qo.replace(e);const r=new RegExp("".concat(O.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,a)=>(a===O.replacementClass||a.match(r)?s.toSvg.push(a):s.toNode.push(a),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const i=n.map(o=>uo(o)).join(`
`);t.setAttribute(qn,""),t.innerHTML=i}};function xp(e){e()}function sy(e,t){const n=typeof t=="function"?t:qo;if(e.length===0)n();else{let r=xp;O.mutateApproach===i2&&(r=yn.requestAnimationFrame||xp),r(()=>{const i=Y2(),o=Zc.begin("mutate");e.map(i),o(),n()})}}let ef=!1;function ay(){ef=!0}function Su(){ef=!1}let Ds=null;function Tp(e){if(!hp||!O.observeMutations)return;const{treeCallback:t=qo,nodeCallback:n=qo,pseudoElementsCallback:r=qo,observeMutationsRoot:i=X}=e;Ds=new hp(o=>{if(ef)return;const s=wn();Hr(o).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Ip(a.addedNodes[0])&&(O.searchPseudoElements&&r(a.target),t(a.target)),a.type==="attributes"&&a.target.parentNode&&O.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Ip(a.target)&&~c2.indexOf(a.attributeName))if(a.attributeName==="class"&&G2(a.target)){const{prefix:l,iconName:u}=ca(Kc(a.target));a.target.setAttribute(Wc,l||s),u&&a.target.setAttribute(Gc,u)}else K2(a.target)&&n(a.target)})}),zt&&Ds.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function J2(){Ds&&Ds.disconnect()}function Z2(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,i)=>{const o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function eT(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let i=ca(Kc(e));return i.prefix||(i.prefix=wn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=N2(i.prefix,e.innerText)||Qc(i.prefix,mu(e.innerText))),!i.iconName&&O.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function tT(e){const t=Hr(e.attributes).reduce((i,o)=>(i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return O.autoA11y&&(n?t["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(r||qi()):(t["aria-hidden"]="true",t.focusable="false")),t}function nT(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ct,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Cp(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=eT(e),o=tT(e),s=vu("parseNodeAttributes",{},e);let a=t.styleParser?Z2(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:ct,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:o},...s}}const{styles:rT}=ft;function ly(e){const t=O.autoReplaceSvg==="nest"?Cp(e,{styleParser:!1}):Cp(e);return~t.extra.classes.indexOf(Hv)?_n("generateLayersText",e,t):_n("generateSvgReplacementMutation",e,t)}let wt=new Set;Bv.map(e=>{wt.add("fa-".concat(e))});Object.keys(Fn[te]).map(wt.add.bind(wt));Object.keys(Fn[Fe]).map(wt.add.bind(wt));Object.keys(Fn[Ue]).map(wt.add.bind(wt));wt=[...wt];function bp(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!zt)return Promise.resolve();const n=X.documentElement.classList,r=c=>n.add("".concat(vp,"-").concat(c)),i=c=>n.remove("".concat(vp,"-").concat(c)),o=O.autoFetchSvg?wt:Bv.map(c=>"fa-".concat(c)).concat(Object.keys(rT));o.includes("fa")||o.push("fa");const s=[".".concat(Hv,":not([").concat(qn,"])")].concat(o.map(c=>".".concat(c,":not([").concat(qn,"])"))).join(", ");if(s.length===0)return Promise.resolve();let a=[];try{a=Hr(e.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const l=Zc.begin("onTree"),u=a.reduce((c,f)=>{try{const p=ly(f);p&&c.push(p)}catch(p){$v||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise((c,f)=>{Promise.all(u).then(p=>{sy(p,()=>{r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(p=>{l(),f(p)})})}function iT(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ly(e).then(n=>{n&&sy([n],t)})}function oT(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:yu(t||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:yu(i||{})),e(r,{...n,mask:i})}}const sT=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ct,symbol:r=!1,mask:i=null,maskId:o=null,title:s=null,titleId:a=null,classes:l=[],attributes:u={},styles:c={}}=t;if(!e)return;const{prefix:f,iconName:p,icon:y}=e;return fa({type:"icon",...e},()=>(Qn("beforeDOMElementCreation",{iconDefinition:e,params:t}),O.autoA11y&&(s?u["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(a||qi()):(u["aria-hidden"]="true",u.focusable="false")),Jc({icons:{main:wu(y),mask:i?wu(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:p,transform:{...ct,...n},symbol:r,title:s,maskId:o,titleId:a,extra:{attributes:u,styles:c,classes:l}})))};var aT={mixout(){return{icon:oT(sT)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=bp,e.nodeCallback=iT,e}}},provides(e){e.i2svg=function(t){const{node:n=X,callback:r=()=>{}}=t;return bp(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:i,titleId:o,prefix:s,transform:a,symbol:l,mask:u,maskId:c,extra:f}=n;return new Promise((p,y)=>{Promise.all([_u(r,s),u.iconName?_u(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(_=>{let[E,k]=_;p([t,Jc({icons:{main:E,mask:k},prefix:s,iconName:r,transform:a,symbol:l,maskId:c,title:i,titleId:o,extra:f,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:i,transform:o,styles:s}=t;const a=la(s);a.length>0&&(r.style=a);let l;return Yc(o)&&(l=_n("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:r}}}},lT={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return fa({type:"layer"},()=>{Qn("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(i=>{Array.isArray(i)?i.map(o=>{r=r.concat(o.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(O.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},uT={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:o={}}=t;return fa({type:"counter",content:e},()=>(Qn("beforeDOMElementCreation",{content:e,params:t}),B2({content:e.toString(),title:n,extra:{attributes:i,styles:o,classes:["".concat(O.cssPrefix,"-layers-counter"),...r]}})))}}}},cT={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ct,title:r=null,classes:i=[],attributes:o={},styles:s={}}=t;return fa({type:"text",content:e},()=>(Qn("beforeDOMElementCreation",{content:e,params:t}),Sp({content:e,transform:{...ct,...n},title:r,extra:{attributes:o,styles:s,classes:["".concat(O.cssPrefix,"-layers-text"),...i]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:i,extra:o}=n;let s=null,a=null;if(Dv){const l=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();s=u.width/l,a=u.height/l}return O.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,Sp({content:t.innerHTML,width:s,height:a,transform:i,title:r,extra:o,watchable:!0})])}}};const fT=new RegExp('"',"ug"),Pp=[1105920,1112319],Np={FontAwesome:{normal:"fas",400:"fas"},...Gx,...Wx,...e2},ku=Object.keys(Np).reduce((e,t)=>(e[t.toLowerCase()]=Np[t],e),{}),dT=Object.keys(ku).reduce((e,t)=>{const n=ku[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function pT(e){const t=e.replace(fT,""),n=I2(t,0),r=n>=Pp[0]&&n<=Pp[1],i=t.length===2?t[0]===t[1]:!1;return{value:mu(i?t[0]:t),isSecondary:r||i}}function hT(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),i=isNaN(r)?"normal":r;return(ku[n]||{})[i]||dT[n]}function Ap(e,t){const n="".concat(r2).concat(t.replace(":","-"));return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();const s=Hr(e.children).filter(p=>p.getAttribute(fu)===t)[0],a=yn.getComputedStyle(e,t),l=a.getPropertyValue("font-family"),u=l.match(l2),c=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(s&&!u)return e.removeChild(s),r();if(u&&f!=="none"&&f!==""){const p=a.getPropertyValue("content");let y=hT(l,c);const{value:_,isSecondary:E}=pT(p),k=u[0].startsWith("FontAwesome");let h=Qc(y,_),d=h;if(k){const m=A2(_);m.iconName&&m.prefix&&(h=m.iconName,y=m.prefix)}if(h&&!E&&(!s||s.getAttribute(Wc)!==y||s.getAttribute(Gc)!==d)){e.setAttribute(n,d),s&&e.removeChild(s);const m=nT(),{extra:w}=m;w.attributes[fu]=t,_u(h,y).then(x=>{const C=Jc({...m,icons:{main:x,mask:Xc()},prefix:y,iconName:d,extra:w,watchable:!0}),P=X.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(P,e.firstChild):e.appendChild(P),P.outerHTML=C.map(A=>uo(A)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function mT(e){return Promise.all([Ap(e,"::before"),Ap(e,"::after")])}function gT(e){return e.parentNode!==document.head&&!~o2.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(fu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Op(e){if(zt)return new Promise((t,n)=>{const r=Hr(e.querySelectorAll("*")).filter(gT).map(mT),i=Zc.begin("searchPseudoElements");ay(),Promise.all(r).then(()=>{i(),Su(),t()}).catch(()=>{i(),Su(),n()})})}var vT={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Op,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=X}=t;O.searchPseudoElements&&Op(n)}}};let Rp=!1;var yT={mixout(){return{dom:{unwatch(){ay(),Rp=!0}}}},hooks(){return{bootstrap(){Tp(vu("mutationObserverCallbacks",{}))},noAuto(){J2()},watch(e){const{observeMutationsRoot:t}=e;Rp?Su():Tp(vu("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Lp=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),o=i[0];let s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)};var wT={mixout(){return{parse:{transform:e=>Lp(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Lp(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:i,iconWidth:o}=t;const s={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(a," ").concat(l," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:c,path:f};return{tag:"g",attributes:{...p.outer},children:[{tag:"g",attributes:{...p.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...p.path}}]}]}}}};const rl={x:0,y:0,width:"100%",height:"100%"};function Dp(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function _T(e){return e.tag==="g"?e.children:[e]}var ET={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?ca(n.split(" ").map(i=>i.trim())):Xc();return r.prefix||(r.prefix=wn()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:i,mask:o,maskId:s,transform:a}=t;const{width:l,icon:u}=i,{width:c,icon:f}=o,p=y2({transform:a,containerWidth:c,iconWidth:l}),y={tag:"rect",attributes:{...rl,fill:"white"}},_=u.children?{children:u.children.map(Dp)}:{},E={tag:"g",attributes:{...p.inner},children:[Dp({tag:u.tag,attributes:{...u.attributes,...p.path},..._})]},k={tag:"g",attributes:{...p.outer},children:[E]},h="mask-".concat(s||qi()),d="clip-".concat(s||qi()),m={tag:"mask",attributes:{...rl,id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[y,k]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:_T(f)},m]};return n.push(w,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(h,")"),...rl}}),{children:n,attributes:r}}}},ST={provides(e){let t=!1;yn.matchMedia&&(t=yn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...i,attributeName:"opacity"},s={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||s.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},kT={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},IT=[E2,aT,lT,uT,cT,vT,yT,wT,ET,ST,kT];D2(IT,{mixoutsTo:Ve});Ve.noAuto;Ve.config;Ve.library;Ve.dom;const Iu=Ve.parse;Ve.findIconDefinition;Ve.toHtml;const xT=Ve.icon;Ve.layer;Ve.text;Ve.counter;var uy={exports:{}},TT="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",CT=TT,bT=CT;function cy(){}function fy(){}fy.resetWarningCache=cy;var PT=function(){function e(r,i,o,s,a,l){if(l!==bT){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:fy,resetWarningCache:cy};return n.PropTypes=n,n};uy.exports=PT();var NT=uy.exports;const U=Cu(NT);function Mp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function at(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mp(Object(n),!0).forEach(function(r){vr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ms(e){"@babel/helpers - typeof";return Ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ms(e)}function vr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function AT(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function OT(e,t){if(e==null)return{};var n=AT(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function xu(e){return RT(e)||LT(e)||DT(e)||MT()}function RT(e){if(Array.isArray(e))return Tu(e)}function LT(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function DT(e,t){if(e){if(typeof e=="string")return Tu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tu(e,t)}}function Tu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function MT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jT(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,p=e.fixedWidth,y=e.inverse,_=e.border,E=e.listItem,k=e.flip,h=e.size,d=e.rotation,m=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":p,"fa-inverse":y,"fa-border":_,"fa-li":E,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},vr(t,"fa-".concat(h),typeof h<"u"&&h!==null),vr(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),vr(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),vr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(x){return w[x]?x:null}).filter(function(x){return x})}function FT(e){return e=e-0,e===e}function dy(e){return FT(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var UT=["style"];function zT(e){return e.charAt(0).toUpperCase()+e.slice(1)}function $T(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=dy(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[zT(i)]=o:t[i]=o,t},{})}function py(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return py(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=$T(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[dy(u)]=c}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=OT(n,UT);return i.attrs.style=at(at({},i.attrs.style),s),e.apply(void 0,[t.tag,at(at({},i.attrs),a)].concat(xu(r)))}var hy=!1;try{hy=!0}catch{}function BT(){if(!hy&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function jp(e){if(e&&Ms(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Iu.icon)return Iu.icon(e);if(e===null)return null;if(e&&Ms(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function il(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?vr({},e,t):{}}var Fp={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},js=dt.forwardRef(function(e,t){var n=at(at({},Fp),e),r=n.icon,i=n.mask,o=n.symbol,s=n.className,a=n.title,l=n.titleId,u=n.maskId,c=jp(r),f=il("classes",[].concat(xu(jT(n)),xu((s||"").split(" ")))),p=il("transform",typeof n.transform=="string"?Iu.transform(n.transform):n.transform),y=il("mask",jp(i)),_=xT(c,at(at(at(at({},f),p),y),{},{symbol:o,title:a,titleId:l,maskId:u}));if(!_)return BT("Could not find icon",c),null;var E=_.abstract,k={ref:t};return Object.keys(n).forEach(function(h){Fp.hasOwnProperty(h)||(k[h]=n[h])}),VT(E[0],k)});js.displayName="FontAwesomeIcon";js.propTypes={beat:U.bool,border:U.bool,beatFade:U.bool,bounce:U.bool,className:U.string,fade:U.bool,flash:U.bool,mask:U.oneOfType([U.object,U.array,U.string]),maskId:U.string,fixedWidth:U.bool,inverse:U.bool,flip:U.oneOf([!0,!1,"horizontal","vertical","both"]),icon:U.oneOfType([U.object,U.array,U.string]),listItem:U.bool,pull:U.oneOf(["right","left"]),pulse:U.bool,rotation:U.oneOf([0,90,180,270]),shake:U.bool,size:U.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:U.bool,spinPulse:U.bool,spinReverse:U.bool,symbol:U.oneOfType([U.bool,U.string]),title:U.string,titleId:U.string,transform:U.oneOfType([U.string,U.object]),swapOpacity:U.bool};var VT=py.bind(null,dt.createElement);const HT={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},WT={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]},GT="https://wa.me/930722994? text=hola",KT="https://www.facebook.com",YT=()=>v.jsxs("div",{className:"flex justify-center space-x-8 pb-6 bg-black ",children:[v.jsx("a",{href:GT,target:"_blank",rel:"noopener noreferrer",className:"text-green-500 text-6xl",children:v.jsx(js,{icon:WT})}),v.jsx("a",{href:KT,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 text-6xl",children:v.jsx(js,{icon:HT})})]}),qT="https://wa.me/930722994? text=hola",QT="https://www.facebook.com",XT=()=>v.jsxs("footer",{className:"flex justify-between items-center p-4 border-t border-green-500 bg-black text-green-500 relative bottom-0 w-full",children:[v.jsx("div",{className:"ml-2",children:"jservis copyride"}),v.jsxs("div",{className:"flex space-x-4 mr-2",children:[v.jsx("a",{href:qT,target:"_blank",rel:"noopener noreferrer",className:"text-green-500 hover:text-green-300",children:v.jsx(o_,{size:24})}),v.jsx("a",{href:QT,target:"_blank",rel:"noopener noreferrer",className:"text-green-500 hover:text-green-300",children:v.jsx(i_,{size:24})})]})]}),JT=()=>Array.from({length:80},(n,r)=>v.jsx("div",{className:"column flex flex-col items-center",children:Array.from({length:10},(i,o)=>{const s=Math.random()>.5?"1":"0";return v.jsx("span",{className:`text-green-500 text-lg animate-pulse transition-all duration-1000 delay-[${o*20}ms]`,style:{animationDuration:`${Math.random()*4+1}s`},children:s},o)})},r)),ZT=()=>v.jsxs("div",{className:"codematrix flex justify-center items-center min-h-screen w-full bg-black relative",children:[v.jsx("div",{className:`absolute text-green-300 text-center uppercase font-bold \r
                      text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-full`,children:"REPARACION Y MANTENIMIENTO"}),v.jsx("div",{className:"flex space-x-1 z-0 w-full",children:JT()})]}),eC=()=>{const{user:e}=Vc();return v.jsxs(v.Fragment,{children:[e&&v.jsx("div",{className:"flex justify-center my-4 ",children:v.jsx(qt,{to:"/dashboard",children:v.jsx("button",{className:"bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-200",children:"Ir a Dashboard"})})}),v.jsx(ZT,{}),v.jsx(kx,{}),v.jsx(YT,{}),v.jsx(Ix,{}),v.jsx(Cx,{}),v.jsx(Lx,{}),v.jsx(Ux,{}),v.jsx(XT,{})]})},tC=()=>v.jsxs("div",{className:"text-center",children:[v.jsx("h1",{className:"text-4xl font-bold",children:"Dashboard"}),v.jsx("p",{className:"mt-4",children:"Welcome to your dashboard!"})]}),nC=()=>{const{user:e,logout:t}=Vc(),n=ta(),r=()=>{t(),n("/jservis")};return v.jsxs("div",{className:"flex items-center space-x-4",children:[v.jsx("span",{className:"text-white",children:e?`Hello, ${e.email}`:"Not logged in"}),e?v.jsx("button",{onClick:r,className:"text-white hover:text-green-300 font-mono",children:"Logout"}):v.jsxs(v.Fragment,{children:[v.jsx(qt,{to:"/login",className:"hover:text-green-300 font-mono text-white",children:"Login"}),v.jsx(qt,{to:"/register",className:"hover:text-green-300 font-mono text-white",children:"Register"})]})]})},rC=({children:e})=>{const{user:t}=Vc();return t?e:v.jsx(Fw,{to:"/login"})},iC=()=>{const[e,t]=T.useState(!1),[n,r]=T.useState(!1),i=()=>{t(!e)};return T.useEffect(()=>{let o;const s=()=>{clearTimeout(o),o=setTimeout(()=>{r(window.scrollY>0)},50)};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s),clearTimeout(o)}},[]),v.jsx(Sx,{children:v.jsxs(Kw,{children:[v.jsxs("nav",{className:`sticky top-0  w-screen transition-opacity duration-150 ${n?"bg-black p-4 border-b-2 z-40 border-dashed border-green-500 opacity-100":"bg-gradient-to-r z-40 from-gray-900 via-blue-800 to-blue-500 p-4 mb-0 opacity-100"}`,children:[v.jsxs("div",{className:"container mx-auto flex justify-between items-center",children:[v.jsxs("div",{className:"flex items-center",children:[v.jsx(a_,{}),v.jsx(qt,{to:"/",className:`hover:text-green-300 font-mono ${n?"text-green-500":"text-white hover:text-shadow-neon2"}`,children:"JServis"})]}),v.jsx("div",{className:"hidden md:flex space-x-4",children:v.jsx(nC,{})}),v.jsx("div",{className:"md:hidden pe-4",children:v.jsx("button",{onClick:i,className:`${n?"text-green-500":"text-white"}`,children:e?v.jsx(xd,{size:24}):v.jsx(s_,{size:24})})})]}),v.jsxs("div",{className:`fixed top-0 right-0 w-64 h-full transform ${e?"translate-x-0":"translate-x-full"} transition-transform duration-150 ease-in-out ${n?"bg-black":"bg-gradient-to-r from-gray-900 via-blue-800 to-blue-500"}`,children:[v.jsx("div",{className:"flex justify-end p-4",children:v.jsx("button",{onClick:i,className:`${n?"text-green-500":"text-white"}`,children:v.jsx(xd,{size:24})})}),v.jsxs("div",{className:"flex flex-col items-center mt-8 space-y-4",children:[v.jsx(qt,{to:"/jservis",className:`text-lg font-mono ${n?"text-green-500 hover:text-green-300":"text-white hover:text-shadow-neon2"}`,onClick:i,children:"Home"}),v.jsx(qt,{to:"/dashboard",className:`text-lg font-mono ${n?"text-green-500 hover:text-green-300":"text-white hover:text-shadow-neon2"}`,onClick:i,children:"Dashboard"}),v.jsx(qt,{to:"/login",className:`text-lg font-mono ${n?"text-green-500 hover:text-green-300":"text-white hover:text-shadow-neon2"}`,onClick:i,children:"Login"}),v.jsx(qt,{to:"/register",className:`text-lg font-mono ${n?"text-green-500 hover:text-green-300":"text-white hover:text-shadow-neon2"}`,onClick:i,children:"Register"})]})]})]}),v.jsx("div",{className:"container mx-auto mt-10",children:v.jsxs(zw,{children:[v.jsx(si,{path:"/login",element:v.jsx(Ex,{})}),v.jsx(si,{path:"/register",element:v.jsx(_x,{})}),v.jsx(si,{path:"/jservis",element:v.jsx(eC,{})}),v.jsx(si,{path:"/dashboard",element:v.jsx(rC,{children:v.jsx(tC,{})})})]})})]})})},oC=()=>v.jsx(v.Fragment,{children:v.jsx(iC,{})});Xm(document.getElementById("root")).render(v.jsx(T.StrictMode,{children:v.jsx(oC,{})}));
