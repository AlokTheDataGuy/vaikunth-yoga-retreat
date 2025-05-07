(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function r(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(l){if(l.ep)return;l.ep=!0;const d=r(l);fetch(l.href,d)}})();function lw(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Mf={exports:{}},Bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function cw(){if(J0)return Bo;J0=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(o,l,d){var f=null;if(d!==void 0&&(f=""+d),l.key!==void 0&&(f=""+l.key),"key"in l){d={};for(var p in l)p!=="key"&&(d[p]=l[p])}else d=l;return l=d.ref,{$$typeof:e,type:o,key:f,ref:l!==void 0?l:null,props:d}}return Bo.Fragment=i,Bo.jsx=r,Bo.jsxs=r,Bo}var e1;function uw(){return e1||(e1=1,Mf.exports=cw()),Mf.exports}var c=uw(),Of={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t1;function dw(){if(t1)return fe;t1=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function w(C){return C===null||typeof C!="object"?null:(C=b&&C[b]||C["@@iterator"],typeof C=="function"?C:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,R={};function T(C,G,Q){this.props=C,this.context=G,this.refs=R,this.updater=Q||j}T.prototype.isReactComponent={},T.prototype.setState=function(C,G){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,G,"setState")},T.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function E(){}E.prototype=T.prototype;function k(C,G,Q){this.props=C,this.context=G,this.refs=R,this.updater=Q||j}var M=k.prototype=new E;M.constructor=k,$(M,T.prototype),M.isPureReactComponent=!0;var H=Array.isArray,_={H:null,A:null,T:null,S:null,V:null},X=Object.prototype.hasOwnProperty;function K(C,G,Q,I,ne,ye){return Q=ye.ref,{$$typeof:e,type:C,key:G,ref:Q!==void 0?Q:null,props:ye}}function W(C,G){return K(C.type,G,void 0,void 0,void 0,C.props)}function re(C){return typeof C=="object"&&C!==null&&C.$$typeof===e}function $e(C){var G={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(Q){return G[Q]})}var Qe=/\/+/g;function Ie(C,G){return typeof C=="object"&&C!==null&&C.key!=null?$e(""+C.key):G.toString(36)}function dn(){}function Kt(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(dn,dn):(C.status="pending",C.then(function(G){C.status==="pending"&&(C.status="fulfilled",C.value=G)},function(G){C.status==="pending"&&(C.status="rejected",C.reason=G)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function rt(C,G,Q,I,ne){var ye=typeof C;(ye==="undefined"||ye==="boolean")&&(C=null);var oe=!1;if(C===null)oe=!0;else switch(ye){case"bigint":case"string":case"number":oe=!0;break;case"object":switch(C.$$typeof){case e:case i:oe=!0;break;case y:return oe=C._init,rt(oe(C._payload),G,Q,I,ne)}}if(oe)return ne=ne(C),oe=I===""?"."+Ie(C,0):I,H(ne)?(Q="",oe!=null&&(Q=oe.replace(Qe,"$&/")+"/"),rt(ne,G,Q,"",function(bt){return bt})):ne!=null&&(re(ne)&&(ne=W(ne,Q+(ne.key==null||C&&C.key===ne.key?"":(""+ne.key).replace(Qe,"$&/")+"/")+oe)),G.push(ne)),1;oe=0;var lt=I===""?".":I+":";if(H(C))for(var Ee=0;Ee<C.length;Ee++)I=C[Ee],ye=lt+Ie(I,Ee),oe+=rt(I,G,Q,ye,ne);else if(Ee=w(C),typeof Ee=="function")for(C=Ee.call(C),Ee=0;!(I=C.next()).done;)I=I.value,ye=lt+Ie(I,Ee++),oe+=rt(I,G,Q,ye,ne);else if(ye==="object"){if(typeof C.then=="function")return rt(Kt(C),G,Q,I,ne);throw G=String(C),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return oe}function P(C,G,Q){if(C==null)return C;var I=[],ne=0;return rt(C,I,"","",function(ye){return G.call(Q,ye,ne++)}),I}function Z(C){if(C._status===-1){var G=C._result;G=G(),G.then(function(Q){(C._status===0||C._status===-1)&&(C._status=1,C._result=Q)},function(Q){(C._status===0||C._status===-1)&&(C._status=2,C._result=Q)}),C._status===-1&&(C._status=0,C._result=G)}if(C._status===1)return C._result.default;throw C._result}var ee=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function de(){}return fe.Children={map:P,forEach:function(C,G,Q){P(C,function(){G.apply(this,arguments)},Q)},count:function(C){var G=0;return P(C,function(){G++}),G},toArray:function(C){return P(C,function(G){return G})||[]},only:function(C){if(!re(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},fe.Component=T,fe.Fragment=r,fe.Profiler=l,fe.PureComponent=k,fe.StrictMode=o,fe.Suspense=m,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_,fe.__COMPILER_RUNTIME={__proto__:null,c:function(C){return _.H.useMemoCache(C)}},fe.cache=function(C){return function(){return C.apply(null,arguments)}},fe.cloneElement=function(C,G,Q){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var I=$({},C.props),ne=C.key,ye=void 0;if(G!=null)for(oe in G.ref!==void 0&&(ye=void 0),G.key!==void 0&&(ne=""+G.key),G)!X.call(G,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&G.ref===void 0||(I[oe]=G[oe]);var oe=arguments.length-2;if(oe===1)I.children=Q;else if(1<oe){for(var lt=Array(oe),Ee=0;Ee<oe;Ee++)lt[Ee]=arguments[Ee+2];I.children=lt}return K(C.type,ne,void 0,void 0,ye,I)},fe.createContext=function(C){return C={$$typeof:f,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:d,_context:C},C},fe.createElement=function(C,G,Q){var I,ne={},ye=null;if(G!=null)for(I in G.key!==void 0&&(ye=""+G.key),G)X.call(G,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(ne[I]=G[I]);var oe=arguments.length-2;if(oe===1)ne.children=Q;else if(1<oe){for(var lt=Array(oe),Ee=0;Ee<oe;Ee++)lt[Ee]=arguments[Ee+2];ne.children=lt}if(C&&C.defaultProps)for(I in oe=C.defaultProps,oe)ne[I]===void 0&&(ne[I]=oe[I]);return K(C,ye,void 0,void 0,null,ne)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(C){return{$$typeof:p,render:C}},fe.isValidElement=re,fe.lazy=function(C){return{$$typeof:y,_payload:{_status:-1,_result:C},_init:Z}},fe.memo=function(C,G){return{$$typeof:g,type:C,compare:G===void 0?null:G}},fe.startTransition=function(C){var G=_.T,Q={};_.T=Q;try{var I=C(),ne=_.S;ne!==null&&ne(Q,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(de,ee)}catch(ye){ee(ye)}finally{_.T=G}},fe.unstable_useCacheRefresh=function(){return _.H.useCacheRefresh()},fe.use=function(C){return _.H.use(C)},fe.useActionState=function(C,G,Q){return _.H.useActionState(C,G,Q)},fe.useCallback=function(C,G){return _.H.useCallback(C,G)},fe.useContext=function(C){return _.H.useContext(C)},fe.useDebugValue=function(){},fe.useDeferredValue=function(C,G){return _.H.useDeferredValue(C,G)},fe.useEffect=function(C,G,Q){var I=_.H;if(typeof Q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return I.useEffect(C,G)},fe.useId=function(){return _.H.useId()},fe.useImperativeHandle=function(C,G,Q){return _.H.useImperativeHandle(C,G,Q)},fe.useInsertionEffect=function(C,G){return _.H.useInsertionEffect(C,G)},fe.useLayoutEffect=function(C,G){return _.H.useLayoutEffect(C,G)},fe.useMemo=function(C,G){return _.H.useMemo(C,G)},fe.useOptimistic=function(C,G){return _.H.useOptimistic(C,G)},fe.useReducer=function(C,G,Q){return _.H.useReducer(C,G,Q)},fe.useRef=function(C){return _.H.useRef(C)},fe.useState=function(C){return _.H.useState(C)},fe.useSyncExternalStore=function(C,G,Q){return _.H.useSyncExternalStore(C,G,Q)},fe.useTransition=function(){return _.H.useTransition()},fe.version="19.1.0",fe}var n1;function dp(){return n1||(n1=1,Of.exports=dw()),Of.exports}var z=dp();const pt=lw(z);var kf={exports:{}},No={},Bf={exports:{}},Nf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i1;function fw(){return i1||(i1=1,function(e){function i(P,Z){var ee=P.length;P.push(Z);e:for(;0<ee;){var de=ee-1>>>1,C=P[de];if(0<l(C,Z))P[de]=Z,P[ee]=C,ee=de;else break e}}function r(P){return P.length===0?null:P[0]}function o(P){if(P.length===0)return null;var Z=P[0],ee=P.pop();if(ee!==Z){P[0]=ee;e:for(var de=0,C=P.length,G=C>>>1;de<G;){var Q=2*(de+1)-1,I=P[Q],ne=Q+1,ye=P[ne];if(0>l(I,ee))ne<C&&0>l(ye,I)?(P[de]=ye,P[ne]=ee,de=ne):(P[de]=I,P[Q]=ee,de=Q);else if(ne<C&&0>l(ye,ee))P[de]=ye,P[ne]=ee,de=ne;else break e}}return Z}function l(P,Z){var ee=P.sortIndex-Z.sortIndex;return ee!==0?ee:P.id-Z.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;e.unstable_now=function(){return d.now()}}else{var f=Date,p=f.now();e.unstable_now=function(){return f.now()-p}}var m=[],g=[],y=1,b=null,w=3,j=!1,$=!1,R=!1,T=!1,E=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function H(P){for(var Z=r(g);Z!==null;){if(Z.callback===null)o(g);else if(Z.startTime<=P)o(g),Z.sortIndex=Z.expirationTime,i(m,Z);else break;Z=r(g)}}function _(P){if(R=!1,H(P),!$)if(r(m)!==null)$=!0,X||(X=!0,Ie());else{var Z=r(g);Z!==null&&rt(_,Z.startTime-P)}}var X=!1,K=-1,W=5,re=-1;function $e(){return T?!0:!(e.unstable_now()-re<W)}function Qe(){if(T=!1,X){var P=e.unstable_now();re=P;var Z=!0;try{e:{$=!1,R&&(R=!1,k(K),K=-1),j=!0;var ee=w;try{t:{for(H(P),b=r(m);b!==null&&!(b.expirationTime>P&&$e());){var de=b.callback;if(typeof de=="function"){b.callback=null,w=b.priorityLevel;var C=de(b.expirationTime<=P);if(P=e.unstable_now(),typeof C=="function"){b.callback=C,H(P),Z=!0;break t}b===r(m)&&o(m),H(P)}else o(m);b=r(m)}if(b!==null)Z=!0;else{var G=r(g);G!==null&&rt(_,G.startTime-P),Z=!1}}break e}finally{b=null,w=ee,j=!1}Z=void 0}}finally{Z?Ie():X=!1}}}var Ie;if(typeof M=="function")Ie=function(){M(Qe)};else if(typeof MessageChannel<"u"){var dn=new MessageChannel,Kt=dn.port2;dn.port1.onmessage=Qe,Ie=function(){Kt.postMessage(null)}}else Ie=function(){E(Qe,0)};function rt(P,Z){K=E(function(){P(e.unstable_now())},Z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_next=function(P){switch(w){case 1:case 2:case 3:var Z=3;break;default:Z=w}var ee=w;w=Z;try{return P()}finally{w=ee}},e.unstable_requestPaint=function(){T=!0},e.unstable_runWithPriority=function(P,Z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var ee=w;w=P;try{return Z()}finally{w=ee}},e.unstable_scheduleCallback=function(P,Z,ee){var de=e.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?de+ee:de):ee=de,P){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=ee+C,P={id:y++,callback:Z,priorityLevel:P,startTime:ee,expirationTime:C,sortIndex:-1},ee>de?(P.sortIndex=ee,i(g,P),r(m)===null&&P===r(g)&&(R?(k(K),K=-1):R=!0,rt(_,ee-de))):(P.sortIndex=C,i(m,P),$||j||($=!0,X||(X=!0,Ie()))),P},e.unstable_shouldYield=$e,e.unstable_wrapCallback=function(P){var Z=w;return function(){var ee=w;w=Z;try{return P.apply(this,arguments)}finally{w=ee}}}}(Nf)),Nf}var a1;function hw(){return a1||(a1=1,Bf.exports=fw()),Bf.exports}var Lf={exports:{}},$t={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r1;function pw(){if(r1)return $t;r1=1;var e=dp();function i(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var o={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},l=Symbol.for("react.portal");function d(m,g,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:m,containerInfo:g,implementation:y}}var f=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return $t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,$t.createPortal=function(m,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(i(299));return d(m,g,null,y)},$t.flushSync=function(m){var g=f.T,y=o.p;try{if(f.T=null,o.p=2,m)return m()}finally{f.T=g,o.p=y,o.d.f()}},$t.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,o.d.C(m,g))},$t.prefetchDNS=function(m){typeof m=="string"&&o.d.D(m)},$t.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var y=g.as,b=p(y,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,j=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?o.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:w,fetchPriority:j}):y==="script"&&o.d.X(m,{crossOrigin:b,integrity:w,fetchPriority:j,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},$t.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=p(g.as,g.crossOrigin);o.d.M(m,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&o.d.M(m)},$t.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,b=p(y,g.crossOrigin);o.d.L(m,y,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},$t.preloadModule=function(m,g){if(typeof m=="string")if(g){var y=p(g.as,g.crossOrigin);o.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else o.d.m(m)},$t.requestFormReset=function(m){o.d.r(m)},$t.unstable_batchedUpdates=function(m,g){return m(g)},$t.useFormState=function(m,g,y){return f.H.useFormState(m,g,y)},$t.useFormStatus=function(){return f.H.useHostTransitionStatus()},$t.version="19.1.0",$t}var o1;function mw(){if(o1)return Lf.exports;o1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(i){console.error(i)}}return e(),Lf.exports=pw(),Lf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s1;function gw(){if(s1)return No;s1=1;var e=hw(),i=dp(),r=mw();function o(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(d(t)!==t)throw Error(o(188))}function m(t){var n=t.alternate;if(!n){if(n=d(t),n===null)throw Error(o(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return p(u),t;if(h===s)return p(u),n;h=h.sibling}throw Error(o(188))}if(a.return!==s.return)a=u,s=h;else{for(var x=!1,S=u.child;S;){if(S===a){x=!0,a=u,s=h;break}if(S===s){x=!0,s=u,a=h;break}S=S.sibling}if(!x){for(S=h.child;S;){if(S===a){x=!0,a=h,s=u;break}if(S===s){x=!0,s=h,a=u;break}S=S.sibling}if(!x)throw Error(o(189))}}if(a.alternate!==s)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),k=Symbol.for("react.consumer"),M=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),re=Symbol.for("react.activity"),$e=Symbol.for("react.memo_cache_sentinel"),Qe=Symbol.iterator;function Ie(t){return t===null||typeof t!="object"?null:(t=Qe&&t[Qe]||t["@@iterator"],typeof t=="function"?t:null)}var dn=Symbol.for("react.client.reference");function Kt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===dn?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $:return"Fragment";case T:return"Profiler";case R:return"StrictMode";case _:return"Suspense";case X:return"SuspenseList";case re:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case j:return"Portal";case M:return(t.displayName||"Context")+".Provider";case k:return(t._context.displayName||"Context")+".Consumer";case H:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case K:return n=t.displayName||null,n!==null?n:Kt(t.type)||"Memo";case W:n=t._payload,t=t._init;try{return Kt(t(n))}catch{}}return null}var rt=Array.isArray,P=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},de=[],C=-1;function G(t){return{current:t}}function Q(t){0>C||(t.current=de[C],de[C]=null,C--)}function I(t,n){C++,de[C]=t.current,t.current=n}var ne=G(null),ye=G(null),oe=G(null),lt=G(null);function Ee(t,n){switch(I(oe,n),I(ye,t),I(ne,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?E0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=E0(n),t=R0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(ne),I(ne,t)}function bt(){Q(ne),Q(ye),Q(oe)}function ki(t){t.memoizedState!==null&&I(lt,t);var n=ne.current,a=R0(n,t.type);n!==a&&(I(ye,t),I(ne,a))}function Bn(t){ye.current===t&&(Q(ne),Q(ye)),lt.current===t&&(Q(lt),zo._currentValue=ee)}var Zt=Object.prototype.hasOwnProperty,xu=e.unstable_scheduleCallback,vu=e.unstable_cancelCallback,U4=e.unstable_shouldYield,H4=e.unstable_requestPaint,vn=e.unstable_now,P4=e.unstable_getCurrentPriorityLevel,sm=e.unstable_ImmediatePriority,lm=e.unstable_UserBlockingPriority,bs=e.unstable_NormalPriority,F4=e.unstable_LowPriority,cm=e.unstable_IdlePriority,Y4=e.log,q4=e.unstable_setDisableYieldValue,Lr=null,Vt=null;function ii(t){if(typeof Y4=="function"&&q4(t),Vt&&typeof Vt.setStrictMode=="function")try{Vt.setStrictMode(Lr,t)}catch{}}var _t=Math.clz32?Math.clz32:K4,G4=Math.log,X4=Math.LN2;function K4(t){return t>>>=0,t===0?32:31-(G4(t)/X4|0)|0}var Ss=256,ws=4194304;function Bi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function $s(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,h=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var S=s&134217727;return S!==0?(s=S&~h,s!==0?u=Bi(s):(x&=S,x!==0?u=Bi(x):a||(a=S&~t,a!==0&&(u=Bi(a))))):(S=s&~h,S!==0?u=Bi(S):x!==0?u=Bi(x):a||(a=s&~t,a!==0&&(u=Bi(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Vr(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Z4(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function um(){var t=Ss;return Ss<<=1,(Ss&4194048)===0&&(Ss=256),t}function dm(){var t=ws;return ws<<=1,(ws&62914560)===0&&(ws=4194304),t}function bu(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function _r(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Q4(t,n,a,s,u,h){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var S=t.entanglements,A=t.expirationTimes,N=t.hiddenUpdates;for(a=x&~a;0<a;){var F=31-_t(a),q=1<<F;S[F]=0,A[F]=-1;var L=N[F];if(L!==null)for(N[F]=null,F=0;F<L.length;F++){var V=L[F];V!==null&&(V.lane&=-536870913)}a&=~q}s!==0&&fm(t,s,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(x&~n))}function fm(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-_t(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function hm(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-_t(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function Su(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function wu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function pm(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:X0(t.type))}function I4(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var ai=Math.random().toString(36).slice(2),St="__reactFiber$"+ai,zt="__reactProps$"+ai,pa="__reactContainer$"+ai,$u="__reactEvents$"+ai,W4="__reactListeners$"+ai,J4="__reactHandles$"+ai,mm="__reactResources$"+ai,Ur="__reactMarker$"+ai;function ju(t){delete t[St],delete t[zt],delete t[$u],delete t[W4],delete t[J4]}function ma(t){var n=t[St];if(n)return n;for(var a=t.parentNode;a;){if(n=a[pa]||a[St]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=M0(t);t!==null;){if(a=t[St])return a;t=M0(t)}return n}t=a,a=t.parentNode}return null}function ga(t){if(t=t[St]||t[pa]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Hr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(o(33))}function ya(t){var n=t[mm];return n||(n=t[mm]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ct(t){t[Ur]=!0}var gm=new Set,ym={};function Ni(t,n){xa(t,n),xa(t+"Capture",n)}function xa(t,n){for(ym[t]=n,t=0;t<n.length;t++)gm.add(n[t])}var eS=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xm={},vm={};function tS(t){return Zt.call(vm,t)?!0:Zt.call(xm,t)?!1:eS.test(t)?vm[t]=!0:(xm[t]=!0,!1)}function js(t,n,a){if(tS(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ts(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Nn(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var Tu,bm;function va(t){if(Tu===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Tu=n&&n[1]||"",bm=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Tu+t+bm}var Au=!1;function Eu(t,n){if(!t||Au)return"";Au=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(V){var L=V}Reflect.construct(t,[],q)}else{try{q.call()}catch(V){L=V}t.call(q.prototype)}}else{try{throw Error()}catch(V){L=V}(q=t())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(V){if(V&&L&&typeof V.stack=="string")return[V.stack,L.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=s.DetermineComponentFrameRoot(),x=h[0],S=h[1];if(x&&S){var A=x.split(`
`),N=S.split(`
`);for(u=s=0;s<A.length&&!A[s].includes("DetermineComponentFrameRoot");)s++;for(;u<N.length&&!N[u].includes("DetermineComponentFrameRoot");)u++;if(s===A.length||u===N.length)for(s=A.length-1,u=N.length-1;1<=s&&0<=u&&A[s]!==N[u];)u--;for(;1<=s&&0<=u;s--,u--)if(A[s]!==N[u]){if(s!==1||u!==1)do if(s--,u--,0>u||A[s]!==N[u]){var F=`
`+A[s].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=s&&0<=u);break}}}finally{Au=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?va(a):""}function nS(t){switch(t.tag){case 26:case 27:case 5:return va(t.type);case 16:return va("Lazy");case 13:return va("Suspense");case 19:return va("SuspenseList");case 0:case 15:return Eu(t.type,!1);case 11:return Eu(t.type.render,!1);case 1:return Eu(t.type,!0);case 31:return va("Activity");default:return""}}function Sm(t){try{var n="";do n+=nS(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Qt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function iS(t){var n=wm(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){s=""+x,h.call(this,x)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function As(t){t._valueTracker||(t._valueTracker=iS(t))}function $m(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=wm(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Es(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var aS=/[\n"\\]/g;function It(t){return t.replace(aS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ru(t,n,a,s,u,h,x,S){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Qt(n)):t.value!==""+Qt(n)&&(t.value=""+Qt(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?Cu(t,x,Qt(n)):a!=null?Cu(t,x,Qt(a)):s!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.name=""+Qt(S):t.removeAttribute("name")}function jm(t,n,a,s,u,h,x,S){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+Qt(a):"",n=n!=null?""+Qt(n):a,S||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=S?t.checked:!!s,t.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x)}function Cu(t,n,a){n==="number"&&Es(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ba(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Qt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Tm(t,n,a){if(n!=null&&(n=""+Qt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Qt(a):""}function Am(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(o(92));if(rt(s)){if(1<s.length)throw Error(o(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Qt(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function Sa(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var rS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Em(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||rS.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Rm(t,n,a){if(n!=null&&typeof n!="object")throw Error(o(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&Em(t,u,s)}else for(var h in n)n.hasOwnProperty(h)&&Em(t,h,n[h])}function zu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rs(t){return sS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Du=null;function Mu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wa=null,$a=null;function Cm(t){var n=ga(t);if(n&&(t=n.stateNode)){var a=t[zt]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ru(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+It(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[zt]||null;if(!u)throw Error(o(90));Ru(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&$m(s)}break e;case"textarea":Tm(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ba(t,!!a.multiple,n,!1)}}}var Ou=!1;function zm(t,n,a){if(Ou)return t(n,a);Ou=!0;try{var s=t(n);return s}finally{if(Ou=!1,(wa!==null||$a!==null)&&(hl(),wa&&(n=wa,t=$a,$a=wa=null,Cm(n),t)))for(n=0;n<t.length;n++)Cm(t[n])}}function Pr(t,n){var a=t.stateNode;if(a===null)return null;var s=a[zt]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(o(231,n,typeof a));return a}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ku=!1;if(Ln)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){ku=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{ku=!1}var ri=null,Bu=null,Cs=null;function Dm(){if(Cs)return Cs;var t,n=Bu,a=n.length,s,u="value"in ri?ri.value:ri.textContent,h=u.length;for(t=0;t<a&&n[t]===u[t];t++);var x=a-t;for(s=1;s<=x&&n[a-s]===u[h-s];s++);return Cs=u.slice(t,1<s?1-s:void 0)}function zs(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ds(){return!0}function Mm(){return!1}function Dt(t){function n(a,s,u,h,x){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var S in t)t.hasOwnProperty(S)&&(a=t[S],this[S]=a?a(h):h[S]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ds:Mm,this.isPropagationStopped=Mm,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ds)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ds)},persist:function(){},isPersistent:Ds}),n}var Li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ms=Dt(Li),Yr=y({},Li,{view:0,detail:0}),lS=Dt(Yr),Nu,Lu,qr,Os=y({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qr&&(qr&&t.type==="mousemove"?(Nu=t.screenX-qr.screenX,Lu=t.screenY-qr.screenY):Lu=Nu=0,qr=t),Nu)},movementY:function(t){return"movementY"in t?t.movementY:Lu}}),Om=Dt(Os),cS=y({},Os,{dataTransfer:0}),uS=Dt(cS),dS=y({},Yr,{relatedTarget:0}),Vu=Dt(dS),fS=y({},Li,{animationName:0,elapsedTime:0,pseudoElement:0}),hS=Dt(fS),pS=y({},Li,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mS=Dt(pS),gS=y({},Li,{data:0}),km=Dt(gS),yS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=vS[t])?!!n[t]:!1}function _u(){return bS}var SS=y({},Yr,{key:function(t){if(t.key){var n=yS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=zs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(t){return t.type==="keypress"?zs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wS=Dt(SS),$S=y({},Os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bm=Dt($S),jS=y({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),TS=Dt(jS),AS=y({},Li,{propertyName:0,elapsedTime:0,pseudoElement:0}),ES=Dt(AS),RS=y({},Os,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),CS=Dt(RS),zS=y({},Li,{newState:0,oldState:0}),DS=Dt(zS),MS=[9,13,27,32],Uu=Ln&&"CompositionEvent"in window,Gr=null;Ln&&"documentMode"in document&&(Gr=document.documentMode);var OS=Ln&&"TextEvent"in window&&!Gr,Nm=Ln&&(!Uu||Gr&&8<Gr&&11>=Gr),Lm=" ",Vm=!1;function _m(t,n){switch(t){case"keyup":return MS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Um(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ja=!1;function kS(t,n){switch(t){case"compositionend":return Um(n);case"keypress":return n.which!==32?null:(Vm=!0,Lm);case"textInput":return t=n.data,t===Lm&&Vm?null:t;default:return null}}function BS(t,n){if(ja)return t==="compositionend"||!Uu&&_m(t,n)?(t=Dm(),Cs=Bu=ri=null,ja=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Nm&&n.locale!=="ko"?null:n.data;default:return null}}var NS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!NS[t.type]:n==="textarea"}function Pm(t,n,a,s){wa?$a?$a.push(s):$a=[s]:wa=s,n=vl(n,"onChange"),0<n.length&&(a=new Ms("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Xr=null,Kr=null;function LS(t){w0(t,0)}function ks(t){var n=Hr(t);if($m(n))return t}function Fm(t,n){if(t==="change")return n}var Ym=!1;if(Ln){var Hu;if(Ln){var Pu="oninput"in document;if(!Pu){var qm=document.createElement("div");qm.setAttribute("oninput","return;"),Pu=typeof qm.oninput=="function"}Hu=Pu}else Hu=!1;Ym=Hu&&(!document.documentMode||9<document.documentMode)}function Gm(){Xr&&(Xr.detachEvent("onpropertychange",Xm),Kr=Xr=null)}function Xm(t){if(t.propertyName==="value"&&ks(Kr)){var n=[];Pm(n,Kr,t,Mu(t)),zm(LS,n)}}function VS(t,n,a){t==="focusin"?(Gm(),Xr=n,Kr=a,Xr.attachEvent("onpropertychange",Xm)):t==="focusout"&&Gm()}function _S(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ks(Kr)}function US(t,n){if(t==="click")return ks(n)}function HS(t,n){if(t==="input"||t==="change")return ks(n)}function PS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Ut=typeof Object.is=="function"?Object.is:PS;function Zr(t,n){if(Ut(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Zt.call(n,u)||!Ut(t[u],n[u]))return!1}return!0}function Km(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zm(t,n){var a=Km(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Km(a)}}function Qm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Qm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Im(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Es(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Es(t.document)}return n}function Fu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var FS=Ln&&"documentMode"in document&&11>=document.documentMode,Ta=null,Yu=null,Qr=null,qu=!1;function Wm(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qu||Ta==null||Ta!==Es(s)||(s=Ta,"selectionStart"in s&&Fu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Qr&&Zr(Qr,s)||(Qr=s,s=vl(Yu,"onSelect"),0<s.length&&(n=new Ms("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Ta)))}function Vi(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Aa={animationend:Vi("Animation","AnimationEnd"),animationiteration:Vi("Animation","AnimationIteration"),animationstart:Vi("Animation","AnimationStart"),transitionrun:Vi("Transition","TransitionRun"),transitionstart:Vi("Transition","TransitionStart"),transitioncancel:Vi("Transition","TransitionCancel"),transitionend:Vi("Transition","TransitionEnd")},Gu={},Jm={};Ln&&(Jm=document.createElement("div").style,"AnimationEvent"in window||(delete Aa.animationend.animation,delete Aa.animationiteration.animation,delete Aa.animationstart.animation),"TransitionEvent"in window||delete Aa.transitionend.transition);function _i(t){if(Gu[t])return Gu[t];if(!Aa[t])return t;var n=Aa[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Jm)return Gu[t]=n[a];return t}var eg=_i("animationend"),tg=_i("animationiteration"),ng=_i("animationstart"),YS=_i("transitionrun"),qS=_i("transitionstart"),GS=_i("transitioncancel"),ig=_i("transitionend"),ag=new Map,Xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xu.push("scrollEnd");function fn(t,n){ag.set(t,n),Ni(n,[t])}var rg=new WeakMap;function Wt(t,n){if(typeof t=="object"&&t!==null){var a=rg.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Sm(n)},rg.set(t,n),n)}return{value:t,source:n,stack:Sm(n)}}var Jt=[],Ea=0,Ku=0;function Bs(){for(var t=Ea,n=Ku=Ea=0;n<t;){var a=Jt[n];Jt[n++]=null;var s=Jt[n];Jt[n++]=null;var u=Jt[n];Jt[n++]=null;var h=Jt[n];if(Jt[n++]=null,s!==null&&u!==null){var x=s.pending;x===null?u.next=u:(u.next=x.next,x.next=u),s.pending=u}h!==0&&og(a,u,h)}}function Ns(t,n,a,s){Jt[Ea++]=t,Jt[Ea++]=n,Jt[Ea++]=a,Jt[Ea++]=s,Ku|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Zu(t,n,a,s){return Ns(t,n,a,s),Ls(t)}function Ra(t,n){return Ns(t,null,null,n),Ls(t)}function og(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,h=t.return;h!==null;)h.childLanes|=a,s=h.alternate,s!==null&&(s.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&n!==null&&(u=31-_t(a),t=h.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),h):null}function Ls(t){if(50<wo)throw wo=0,tf=null,Error(o(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ca={};function XS(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,n,a,s){return new XS(t,n,a,s)}function Qu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vn(t,n){var a=t.alternate;return a===null?(a=Ht(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function sg(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Vs(t,n,a,s,u,h){var x=0;if(s=t,typeof t=="function")Qu(t)&&(x=1);else if(typeof t=="string")x=Z3(t,a,ne.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case re:return t=Ht(31,a,n,u),t.elementType=re,t.lanes=h,t;case $:return Ui(a.children,u,h,n);case R:x=8,u|=24;break;case T:return t=Ht(12,a,n,u|2),t.elementType=T,t.lanes=h,t;case _:return t=Ht(13,a,n,u),t.elementType=_,t.lanes=h,t;case X:return t=Ht(19,a,n,u),t.elementType=X,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E:case M:x=10;break e;case k:x=9;break e;case H:x=11;break e;case K:x=14;break e;case W:x=16,s=null;break e}x=29,a=Error(o(130,t===null?"null":typeof t,"")),s=null}return n=Ht(x,a,n,u),n.elementType=t,n.type=s,n.lanes=h,n}function Ui(t,n,a,s){return t=Ht(7,t,s,n),t.lanes=a,t}function Iu(t,n,a){return t=Ht(6,t,null,n),t.lanes=a,t}function Wu(t,n,a){return n=Ht(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var za=[],Da=0,_s=null,Us=0,en=[],tn=0,Hi=null,_n=1,Un="";function Pi(t,n){za[Da++]=Us,za[Da++]=_s,_s=t,Us=n}function lg(t,n,a){en[tn++]=_n,en[tn++]=Un,en[tn++]=Hi,Hi=t;var s=_n;t=Un;var u=32-_t(s)-1;s&=~(1<<u),a+=1;var h=32-_t(n)+u;if(30<h){var x=u-u%5;h=(s&(1<<x)-1).toString(32),s>>=x,u-=x,_n=1<<32-_t(n)+u|a<<u|s,Un=h+t}else _n=1<<h|a<<u|s,Un=t}function Ju(t){t.return!==null&&(Pi(t,1),lg(t,1,0))}function ed(t){for(;t===_s;)_s=za[--Da],za[Da]=null,Us=za[--Da],za[Da]=null;for(;t===Hi;)Hi=en[--tn],en[tn]=null,Un=en[--tn],en[tn]=null,_n=en[--tn],en[tn]=null}var Et=null,Ge=null,Ae=!1,Fi=null,bn=!1,td=Error(o(519));function Yi(t){var n=Error(o(418,""));throw Jr(Wt(n,t)),td}function cg(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[St]=t,n[zt]=s,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<jo.length;a++)ve(jo[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),jm(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),As(n);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Am(n,s.value,s.defaultValue,s.children),As(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||A0(n.textContent,a)?(s.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),s.onScroll!=null&&ve("scroll",n),s.onScrollEnd!=null&&ve("scrollend",n),s.onClick!=null&&(n.onclick=bl),n=!0):n=!1,n||Yi(t)}function ug(t){for(Et=t.return;Et;)switch(Et.tag){case 5:case 13:bn=!1;return;case 27:case 3:bn=!0;return;default:Et=Et.return}}function Ir(t){if(t!==Et)return!1;if(!Ae)return ug(t),Ae=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||xf(t.type,t.memoizedProps)),a=!a),a&&Ge&&Yi(t),ug(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Ge=pn(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Ge=null}}else n===27?(n=Ge,Si(t.type)?(t=wf,wf=null,Ge=t):Ge=n):Ge=Et?pn(t.stateNode.nextSibling):null;return!0}function Wr(){Ge=Et=null,Ae=!1}function dg(){var t=Fi;return t!==null&&(kt===null?kt=t:kt.push.apply(kt,t),Fi=null),t}function Jr(t){Fi===null?Fi=[t]:Fi.push(t)}var nd=G(null),qi=null,Hn=null;function oi(t,n,a){I(nd,n._currentValue),n._currentValue=a}function Pn(t){t._currentValue=nd.current,Q(nd)}function id(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function ad(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var x=u.child;h=h.firstContext;e:for(;h!==null;){var S=h;h=u;for(var A=0;A<n.length;A++)if(S.context===n[A]){h.lanes|=a,S=h.alternate,S!==null&&(S.lanes|=a),id(h.return,a,t),s||(x=null);break e}h=S.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(o(341));x.lanes|=a,h=x.alternate,h!==null&&(h.lanes|=a),id(x,a,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function eo(t,n,a,s){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(o(387));if(x=x.memoizedProps,x!==null){var S=u.type;Ut(u.pendingProps.value,x.value)||(t!==null?t.push(S):t=[S])}}else if(u===lt.current){if(x=u.alternate,x===null)throw Error(o(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(zo):t=[zo])}u=u.return}t!==null&&ad(n,t,a,s),n.flags|=262144}function Hs(t){for(t=t.firstContext;t!==null;){if(!Ut(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Gi(t){qi=t,Hn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wt(t){return fg(qi,t)}function Ps(t,n){return qi===null&&Gi(t),fg(t,n)}function fg(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hn===null){if(t===null)throw Error(o(308));Hn=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Hn=Hn.next=n;return a}var KS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ZS=e.unstable_scheduleCallback,QS=e.unstable_NormalPriority,ot={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rd(){return{controller:new KS,data:new Map,refCount:0}}function to(t){t.refCount--,t.refCount===0&&ZS(QS,function(){t.controller.abort()})}var no=null,od=0,Ma=0,Oa=null;function IS(t,n){if(no===null){var a=no=[];od=0,Ma=cf(),Oa={status:"pending",value:void 0,then:function(s){a.push(s)}}}return od++,n.then(hg,hg),n}function hg(){if(--od===0&&no!==null){Oa!==null&&(Oa.status="fulfilled");var t=no;no=null,Ma=0,Oa=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function WS(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var pg=P.S;P.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&IS(t,n),pg!==null&&pg(t,n)};var Xi=G(null);function sd(){var t=Xi.current;return t!==null?t:Ve.pooledCache}function Fs(t,n){n===null?I(Xi,Xi.current):I(Xi,n.pool)}function mg(){var t=sd();return t===null?null:{parent:ot._currentValue,pool:t}}var io=Error(o(460)),gg=Error(o(474)),Ys=Error(o(542)),ld={then:function(){}};function yg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function qs(){}function xg(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(qs,qs),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,bg(t),t;default:if(typeof n.status=="string")n.then(qs,qs);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,bg(t),t}throw ao=n,io}}var ao=null;function vg(){if(ao===null)throw Error(o(459));var t=ao;return ao=null,t}function bg(t){if(t===io||t===Ys)throw Error(o(483))}var si=!1;function cd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ud(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function li(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ci(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(ze&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Ls(t),og(t,null,a),n}return Ns(t,s,n,a),Ls(t)}function ro(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,hm(t,a)}}function dd(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=x:h=h.next=x,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var fd=!1;function oo(){if(fd){var t=Oa;if(t!==null)throw t}}function so(t,n,a,s){fd=!1;var u=t.updateQueue;si=!1;var h=u.firstBaseUpdate,x=u.lastBaseUpdate,S=u.shared.pending;if(S!==null){u.shared.pending=null;var A=S,N=A.next;A.next=null,x===null?h=N:x.next=N,x=A;var F=t.alternate;F!==null&&(F=F.updateQueue,S=F.lastBaseUpdate,S!==x&&(S===null?F.firstBaseUpdate=N:S.next=N,F.lastBaseUpdate=A))}if(h!==null){var q=u.baseState;x=0,F=N=A=null,S=h;do{var L=S.lane&-536870913,V=L!==S.lane;if(V?(Se&L)===L:(s&L)===L){L!==0&&L===Ma&&(fd=!0),F!==null&&(F=F.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var le=t,ae=S;L=n;var Be=a;switch(ae.tag){case 1:if(le=ae.payload,typeof le=="function"){q=le.call(Be,q,L);break e}q=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ae.payload,L=typeof le=="function"?le.call(Be,q,L):le,L==null)break e;q=y({},q,L);break e;case 2:si=!0}}L=S.callback,L!==null&&(t.flags|=64,V&&(t.flags|=8192),V=u.callbacks,V===null?u.callbacks=[L]:V.push(L))}else V={lane:L,tag:S.tag,payload:S.payload,callback:S.callback,next:null},F===null?(N=F=V,A=q):F=F.next=V,x|=L;if(S=S.next,S===null){if(S=u.shared.pending,S===null)break;V=S,S=V.next,V.next=null,u.lastBaseUpdate=V,u.shared.pending=null}}while(!0);F===null&&(A=q),u.baseState=A,u.firstBaseUpdate=N,u.lastBaseUpdate=F,h===null&&(u.shared.lanes=0),yi|=x,t.lanes=x,t.memoizedState=q}}function Sg(t,n){if(typeof t!="function")throw Error(o(191,t));t.call(n)}function wg(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Sg(a[t],n)}var ka=G(null),Gs=G(0);function $g(t,n){t=Zn,I(Gs,t),I(ka,n),Zn=t|n.baseLanes}function hd(){I(Gs,Zn),I(ka,ka.current)}function pd(){Zn=Gs.current,Q(ka),Q(Gs)}var ui=0,me=null,Oe=null,nt=null,Xs=!1,Ba=!1,Ki=!1,Ks=0,lo=0,Na=null,JS=0;function We(){throw Error(o(321))}function md(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Ut(t[a],n[a]))return!1;return!0}function gd(t,n,a,s,u,h){return ui=h,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?oy:sy,Ki=!1,h=a(s,u),Ki=!1,Ba&&(h=Tg(n,a,s,u)),jg(t),h}function jg(t){P.H=el;var n=Oe!==null&&Oe.next!==null;if(ui=0,nt=Oe=me=null,Xs=!1,lo=0,Na=null,n)throw Error(o(300));t===null||ut||(t=t.dependencies,t!==null&&Hs(t)&&(ut=!0))}function Tg(t,n,a,s){me=t;var u=0;do{if(Ba&&(Na=null),lo=0,Ba=!1,25<=u)throw Error(o(301));if(u+=1,nt=Oe=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=o3,h=n(a,s)}while(Ba);return h}function e3(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?co(n):n,t=t.useState()[0],(Oe!==null?Oe.memoizedState:null)!==t&&(me.flags|=1024),n}function yd(){var t=Ks!==0;return Ks=0,t}function xd(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function vd(t){if(Xs){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Xs=!1}ui=0,nt=Oe=me=null,Ba=!1,lo=Ks=0,Na=null}function Mt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?me.memoizedState=nt=t:nt=nt.next=t,nt}function it(){if(Oe===null){var t=me.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var n=nt===null?me.memoizedState:nt.next;if(n!==null)nt=n,Oe=t;else{if(t===null)throw me.alternate===null?Error(o(467)):Error(o(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},nt===null?me.memoizedState=nt=t:nt=nt.next=t}return nt}function bd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(t){var n=lo;return lo+=1,Na===null&&(Na=[]),t=xg(Na,t,n),n=me,(nt===null?n.memoizedState:nt.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?oy:sy),t}function Zs(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return co(t);if(t.$$typeof===M)return wt(t)}throw Error(o(438,String(t)))}function Sd(t){var n=null,a=me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=me.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=bd(),me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=$e;return n.index++,a}function Fn(t,n){return typeof n=="function"?n(t):n}function Qs(t){var n=it();return wd(n,Oe,t)}function wd(t,n,a){var s=t.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=a;var u=t.baseQueue,h=s.pending;if(h!==null){if(u!==null){var x=u.next;u.next=h.next,h.next=x}n.baseQueue=u=h,s.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var S=x=null,A=null,N=n,F=!1;do{var q=N.lane&-536870913;if(q!==N.lane?(Se&q)===q:(ui&q)===q){var L=N.revertLane;if(L===0)A!==null&&(A=A.next={lane:0,revertLane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),q===Ma&&(F=!0);else if((ui&L)===L){N=N.next,L===Ma&&(F=!0);continue}else q={lane:0,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},A===null?(S=A=q,x=h):A=A.next=q,me.lanes|=L,yi|=L;q=N.action,Ki&&a(h,q),h=N.hasEagerState?N.eagerState:a(h,q)}else L={lane:q,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},A===null?(S=A=L,x=h):A=A.next=L,me.lanes|=q,yi|=q;N=N.next}while(N!==null&&N!==n);if(A===null?x=h:A.next=S,!Ut(h,t.memoizedState)&&(ut=!0,F&&(a=Oa,a!==null)))throw a;t.memoizedState=h,t.baseState=x,t.baseQueue=A,s.lastRenderedState=h}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function $d(t){var n=it(),a=n.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do h=t(h,x.action),x=x.next;while(x!==u);Ut(h,n.memoizedState)||(ut=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,s]}function Ag(t,n,a){var s=me,u=it(),h=Ae;if(h){if(a===void 0)throw Error(o(407));a=a()}else a=n();var x=!Ut((Oe||u).memoizedState,a);x&&(u.memoizedState=a,ut=!0),u=u.queue;var S=Cg.bind(null,s,u,t);if(uo(2048,8,S,[t]),u.getSnapshot!==n||x||nt!==null&&nt.memoizedState.tag&1){if(s.flags|=2048,La(9,Is(),Rg.bind(null,s,u,a,n),null),Ve===null)throw Error(o(349));h||(ui&124)!==0||Eg(s,n,a)}return a}function Eg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=me.updateQueue,n===null?(n=bd(),me.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Rg(t,n,a,s){n.value=a,n.getSnapshot=s,zg(n)&&Dg(t)}function Cg(t,n,a){return a(function(){zg(n)&&Dg(t)})}function zg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Ut(t,a)}catch{return!0}}function Dg(t){var n=Ra(t,2);n!==null&&Gt(n,t,2)}function jd(t){var n=Mt();if(typeof t=="function"){var a=t;if(t=a(),Ki){ii(!0);try{a()}finally{ii(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:t},n}function Mg(t,n,a,s){return t.baseState=a,wd(t,Oe,typeof s=="function"?s:Fn)}function t3(t,n,a,s,u){if(Js(t))throw Error(o(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};P.T!==null?a(!0):h.isTransition=!1,s(h),a=n.pending,a===null?(h.next=n.pending=h,Og(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Og(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var h=P.T,x={};P.T=x;try{var S=a(u,s),A=P.S;A!==null&&A(x,S),kg(t,n,S)}catch(N){Td(t,n,N)}finally{P.T=h}}else try{h=a(u,s),kg(t,n,h)}catch(N){Td(t,n,N)}}function kg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Bg(t,n,s)},function(s){return Td(t,n,s)}):Bg(t,n,a)}function Bg(t,n,a){n.status="fulfilled",n.value=a,Ng(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Og(t,a)))}function Td(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Ng(n),n=n.next;while(n!==s)}t.action=null}function Ng(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Lg(t,n){return n}function Vg(t,n){if(Ae){var a=Ve.formState;if(a!==null){e:{var s=me;if(Ae){if(Ge){t:{for(var u=Ge,h=bn;u.nodeType!==8;){if(!h){u=null;break t}if(u=pn(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Ge=pn(u.nextSibling),s=u.data==="F!";break e}}Yi(s)}s=!1}s&&(n=a[0])}}return a=Mt(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lg,lastRenderedState:n},a.queue=s,a=iy.bind(null,me,s),s.dispatch=a,s=jd(!1),h=zd.bind(null,me,!1,s.queue),s=Mt(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=t3.bind(null,me,u,h,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function _g(t){var n=it();return Ug(n,Oe,t)}function Ug(t,n,a){if(n=wd(t,n,Lg)[0],t=Qs(Fn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=co(n)}catch(x){throw x===io?Ys:x}else s=n;n=it();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(me.flags|=2048,La(9,Is(),n3.bind(null,u,a),null)),[s,h,t]}function n3(t,n){t.action=n}function Hg(t){var n=it(),a=Oe;if(a!==null)return Ug(n,a,t);it(),n=n.memoizedState,a=it();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function La(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=me.updateQueue,n===null&&(n=bd(),me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Is(){return{destroy:void 0,resource:void 0}}function Pg(){return it().memoizedState}function Ws(t,n,a,s){var u=Mt();s=s===void 0?null:s,me.flags|=t,u.memoizedState=La(1|n,Is(),a,s)}function uo(t,n,a,s){var u=it();s=s===void 0?null:s;var h=u.memoizedState.inst;Oe!==null&&s!==null&&md(s,Oe.memoizedState.deps)?u.memoizedState=La(n,h,a,s):(me.flags|=t,u.memoizedState=La(1|n,h,a,s))}function Fg(t,n){Ws(8390656,8,t,n)}function Yg(t,n){uo(2048,8,t,n)}function qg(t,n){return uo(4,2,t,n)}function Gg(t,n){return uo(4,4,t,n)}function Xg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Kg(t,n,a){a=a!=null?a.concat([t]):null,uo(4,4,Xg.bind(null,n,t),a)}function Ad(){}function Zg(t,n){var a=it();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&md(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Qg(t,n){var a=it();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&md(n,s[1]))return s[0];if(s=t(),Ki){ii(!0);try{t()}finally{ii(!1)}}return a.memoizedState=[s,n],s}function Ed(t,n,a){return a===void 0||(ui&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Jy(),me.lanes|=t,yi|=t,a)}function Ig(t,n,a,s){return Ut(a,n)?a:ka.current!==null?(t=Ed(t,a,s),Ut(t,n)||(ut=!0),t):(ui&42)===0?(ut=!0,t.memoizedState=a):(t=Jy(),me.lanes|=t,yi|=t,n)}function Wg(t,n,a,s,u){var h=Z.p;Z.p=h!==0&&8>h?h:8;var x=P.T,S={};P.T=S,zd(t,!1,n,a);try{var A=u(),N=P.S;if(N!==null&&N(S,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var F=WS(A,s);fo(t,n,F,qt(t))}else fo(t,n,s,qt(t))}catch(q){fo(t,n,{then:function(){},status:"rejected",reason:q},qt())}finally{Z.p=h,P.T=x}}function i3(){}function Rd(t,n,a,s){if(t.tag!==5)throw Error(o(476));var u=Jg(t).queue;Wg(t,u,n,ee,a===null?i3:function(){return ey(t),a(s)})}function Jg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function ey(t){var n=Jg(t).next.queue;fo(t,n,{},qt())}function Cd(){return wt(zo)}function ty(){return it().memoizedState}function ny(){return it().memoizedState}function a3(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=qt();t=li(a);var s=ci(n,t,a);s!==null&&(Gt(s,n,a),ro(s,n,a)),n={cache:rd()},t.payload=n;return}n=n.return}}function r3(t,n,a){var s=qt();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Js(t)?ay(n,a):(a=Zu(t,n,a,s),a!==null&&(Gt(a,t,s),ry(a,n,s)))}function iy(t,n,a){var s=qt();fo(t,n,a,s)}function fo(t,n,a,s){var u={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Js(t))ay(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var x=n.lastRenderedState,S=h(x,a);if(u.hasEagerState=!0,u.eagerState=S,Ut(S,x))return Ns(t,n,u,0),Ve===null&&Bs(),!1}catch{}finally{}if(a=Zu(t,n,u,s),a!==null)return Gt(a,t,s),ry(a,n,s),!0}return!1}function zd(t,n,a,s){if(s={lane:2,revertLane:cf(),action:s,hasEagerState:!1,eagerState:null,next:null},Js(t)){if(n)throw Error(o(479))}else n=Zu(t,a,s,2),n!==null&&Gt(n,t,2)}function Js(t){var n=t.alternate;return t===me||n!==null&&n===me}function ay(t,n){Ba=Xs=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function ry(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,hm(t,a)}}var el={readContext:wt,use:Zs,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useLayoutEffect:We,useInsertionEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useSyncExternalStore:We,useId:We,useHostTransitionStatus:We,useFormState:We,useActionState:We,useOptimistic:We,useMemoCache:We,useCacheRefresh:We},oy={readContext:wt,use:Zs,useCallback:function(t,n){return Mt().memoizedState=[t,n===void 0?null:n],t},useContext:wt,useEffect:Fg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ws(4194308,4,Xg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ws(4194308,4,t,n)},useInsertionEffect:function(t,n){Ws(4,2,t,n)},useMemo:function(t,n){var a=Mt();n=n===void 0?null:n;var s=t();if(Ki){ii(!0);try{t()}finally{ii(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Mt();if(a!==void 0){var u=a(n);if(Ki){ii(!0);try{a(n)}finally{ii(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=r3.bind(null,me,t),[s.memoizedState,t]},useRef:function(t){var n=Mt();return t={current:t},n.memoizedState=t},useState:function(t){t=jd(t);var n=t.queue,a=iy.bind(null,me,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Ad,useDeferredValue:function(t,n){var a=Mt();return Ed(a,t,n)},useTransition:function(){var t=jd(!1);return t=Wg.bind(null,me,t.queue,!0,!1),Mt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=me,u=Mt();if(Ae){if(a===void 0)throw Error(o(407));a=a()}else{if(a=n(),Ve===null)throw Error(o(349));(Se&124)!==0||Eg(s,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Fg(Cg.bind(null,s,h,t),[t]),s.flags|=2048,La(9,Is(),Rg.bind(null,s,h,a,n),null),a},useId:function(){var t=Mt(),n=Ve.identifierPrefix;if(Ae){var a=Un,s=_n;a=(s&~(1<<32-_t(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=Ks++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=JS++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Cd,useFormState:Vg,useActionState:Vg,useOptimistic:function(t){var n=Mt();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=zd.bind(null,me,!0,a),a.dispatch=n,[t,n]},useMemoCache:Sd,useCacheRefresh:function(){return Mt().memoizedState=a3.bind(null,me)}},sy={readContext:wt,use:Zs,useCallback:Zg,useContext:wt,useEffect:Yg,useImperativeHandle:Kg,useInsertionEffect:qg,useLayoutEffect:Gg,useMemo:Qg,useReducer:Qs,useRef:Pg,useState:function(){return Qs(Fn)},useDebugValue:Ad,useDeferredValue:function(t,n){var a=it();return Ig(a,Oe.memoizedState,t,n)},useTransition:function(){var t=Qs(Fn)[0],n=it().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:Ag,useId:ty,useHostTransitionStatus:Cd,useFormState:_g,useActionState:_g,useOptimistic:function(t,n){var a=it();return Mg(a,Oe,t,n)},useMemoCache:Sd,useCacheRefresh:ny},o3={readContext:wt,use:Zs,useCallback:Zg,useContext:wt,useEffect:Yg,useImperativeHandle:Kg,useInsertionEffect:qg,useLayoutEffect:Gg,useMemo:Qg,useReducer:$d,useRef:Pg,useState:function(){return $d(Fn)},useDebugValue:Ad,useDeferredValue:function(t,n){var a=it();return Oe===null?Ed(a,t,n):Ig(a,Oe.memoizedState,t,n)},useTransition:function(){var t=$d(Fn)[0],n=it().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:Ag,useId:ty,useHostTransitionStatus:Cd,useFormState:Hg,useActionState:Hg,useOptimistic:function(t,n){var a=it();return Oe!==null?Mg(a,Oe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Sd,useCacheRefresh:ny},Va=null,ho=0;function tl(t){var n=ho;return ho+=1,Va===null&&(Va=[]),xg(Va,t,n)}function po(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function nl(t,n){throw n.$$typeof===b?Error(o(525)):(t=Object.prototype.toString.call(n),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function ly(t){var n=t._init;return n(t._payload)}function cy(t){function n(O,D){if(t){var B=O.deletions;B===null?(O.deletions=[D],O.flags|=16):B.push(D)}}function a(O,D){if(!t)return null;for(;D!==null;)n(O,D),D=D.sibling;return null}function s(O){for(var D=new Map;O!==null;)O.key!==null?D.set(O.key,O):D.set(O.index,O),O=O.sibling;return D}function u(O,D){return O=Vn(O,D),O.index=0,O.sibling=null,O}function h(O,D,B){return O.index=B,t?(B=O.alternate,B!==null?(B=B.index,B<D?(O.flags|=67108866,D):B):(O.flags|=67108866,D)):(O.flags|=1048576,D)}function x(O){return t&&O.alternate===null&&(O.flags|=67108866),O}function S(O,D,B,Y){return D===null||D.tag!==6?(D=Iu(B,O.mode,Y),D.return=O,D):(D=u(D,B),D.return=O,D)}function A(O,D,B,Y){var J=B.type;return J===$?F(O,D,B.props.children,Y,B.key):D!==null&&(D.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===W&&ly(J)===D.type)?(D=u(D,B.props),po(D,B),D.return=O,D):(D=Vs(B.type,B.key,B.props,null,O.mode,Y),po(D,B),D.return=O,D)}function N(O,D,B,Y){return D===null||D.tag!==4||D.stateNode.containerInfo!==B.containerInfo||D.stateNode.implementation!==B.implementation?(D=Wu(B,O.mode,Y),D.return=O,D):(D=u(D,B.children||[]),D.return=O,D)}function F(O,D,B,Y,J){return D===null||D.tag!==7?(D=Ui(B,O.mode,Y,J),D.return=O,D):(D=u(D,B),D.return=O,D)}function q(O,D,B){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=Iu(""+D,O.mode,B),D.return=O,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case w:return B=Vs(D.type,D.key,D.props,null,O.mode,B),po(B,D),B.return=O,B;case j:return D=Wu(D,O.mode,B),D.return=O,D;case W:var Y=D._init;return D=Y(D._payload),q(O,D,B)}if(rt(D)||Ie(D))return D=Ui(D,O.mode,B,null),D.return=O,D;if(typeof D.then=="function")return q(O,tl(D),B);if(D.$$typeof===M)return q(O,Ps(O,D),B);nl(O,D)}return null}function L(O,D,B,Y){var J=D!==null?D.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return J!==null?null:S(O,D,""+B,Y);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case w:return B.key===J?A(O,D,B,Y):null;case j:return B.key===J?N(O,D,B,Y):null;case W:return J=B._init,B=J(B._payload),L(O,D,B,Y)}if(rt(B)||Ie(B))return J!==null?null:F(O,D,B,Y,null);if(typeof B.then=="function")return L(O,D,tl(B),Y);if(B.$$typeof===M)return L(O,D,Ps(O,B),Y);nl(O,B)}return null}function V(O,D,B,Y,J){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return O=O.get(B)||null,S(D,O,""+Y,J);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case w:return O=O.get(Y.key===null?B:Y.key)||null,A(D,O,Y,J);case j:return O=O.get(Y.key===null?B:Y.key)||null,N(D,O,Y,J);case W:var ge=Y._init;return Y=ge(Y._payload),V(O,D,B,Y,J)}if(rt(Y)||Ie(Y))return O=O.get(B)||null,F(D,O,Y,J,null);if(typeof Y.then=="function")return V(O,D,B,tl(Y),J);if(Y.$$typeof===M)return V(O,D,B,Ps(D,Y),J);nl(D,Y)}return null}function le(O,D,B,Y){for(var J=null,ge=null,te=D,se=D=0,ft=null;te!==null&&se<B.length;se++){te.index>se?(ft=te,te=null):ft=te.sibling;var je=L(O,te,B[se],Y);if(je===null){te===null&&(te=ft);break}t&&te&&je.alternate===null&&n(O,te),D=h(je,D,se),ge===null?J=je:ge.sibling=je,ge=je,te=ft}if(se===B.length)return a(O,te),Ae&&Pi(O,se),J;if(te===null){for(;se<B.length;se++)te=q(O,B[se],Y),te!==null&&(D=h(te,D,se),ge===null?J=te:ge.sibling=te,ge=te);return Ae&&Pi(O,se),J}for(te=s(te);se<B.length;se++)ft=V(te,O,se,B[se],Y),ft!==null&&(t&&ft.alternate!==null&&te.delete(ft.key===null?se:ft.key),D=h(ft,D,se),ge===null?J=ft:ge.sibling=ft,ge=ft);return t&&te.forEach(function(Ai){return n(O,Ai)}),Ae&&Pi(O,se),J}function ae(O,D,B,Y){if(B==null)throw Error(o(151));for(var J=null,ge=null,te=D,se=D=0,ft=null,je=B.next();te!==null&&!je.done;se++,je=B.next()){te.index>se?(ft=te,te=null):ft=te.sibling;var Ai=L(O,te,je.value,Y);if(Ai===null){te===null&&(te=ft);break}t&&te&&Ai.alternate===null&&n(O,te),D=h(Ai,D,se),ge===null?J=Ai:ge.sibling=Ai,ge=Ai,te=ft}if(je.done)return a(O,te),Ae&&Pi(O,se),J;if(te===null){for(;!je.done;se++,je=B.next())je=q(O,je.value,Y),je!==null&&(D=h(je,D,se),ge===null?J=je:ge.sibling=je,ge=je);return Ae&&Pi(O,se),J}for(te=s(te);!je.done;se++,je=B.next())je=V(te,O,se,je.value,Y),je!==null&&(t&&je.alternate!==null&&te.delete(je.key===null?se:je.key),D=h(je,D,se),ge===null?J=je:ge.sibling=je,ge=je);return t&&te.forEach(function(sw){return n(O,sw)}),Ae&&Pi(O,se),J}function Be(O,D,B,Y){if(typeof B=="object"&&B!==null&&B.type===$&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case w:e:{for(var J=B.key;D!==null;){if(D.key===J){if(J=B.type,J===$){if(D.tag===7){a(O,D.sibling),Y=u(D,B.props.children),Y.return=O,O=Y;break e}}else if(D.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===W&&ly(J)===D.type){a(O,D.sibling),Y=u(D,B.props),po(Y,B),Y.return=O,O=Y;break e}a(O,D);break}else n(O,D);D=D.sibling}B.type===$?(Y=Ui(B.props.children,O.mode,Y,B.key),Y.return=O,O=Y):(Y=Vs(B.type,B.key,B.props,null,O.mode,Y),po(Y,B),Y.return=O,O=Y)}return x(O);case j:e:{for(J=B.key;D!==null;){if(D.key===J)if(D.tag===4&&D.stateNode.containerInfo===B.containerInfo&&D.stateNode.implementation===B.implementation){a(O,D.sibling),Y=u(D,B.children||[]),Y.return=O,O=Y;break e}else{a(O,D);break}else n(O,D);D=D.sibling}Y=Wu(B,O.mode,Y),Y.return=O,O=Y}return x(O);case W:return J=B._init,B=J(B._payload),Be(O,D,B,Y)}if(rt(B))return le(O,D,B,Y);if(Ie(B)){if(J=Ie(B),typeof J!="function")throw Error(o(150));return B=J.call(B),ae(O,D,B,Y)}if(typeof B.then=="function")return Be(O,D,tl(B),Y);if(B.$$typeof===M)return Be(O,D,Ps(O,B),Y);nl(O,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,D!==null&&D.tag===6?(a(O,D.sibling),Y=u(D,B),Y.return=O,O=Y):(a(O,D),Y=Iu(B,O.mode,Y),Y.return=O,O=Y),x(O)):a(O,D)}return function(O,D,B,Y){try{ho=0;var J=Be(O,D,B,Y);return Va=null,J}catch(te){if(te===io||te===Ys)throw te;var ge=Ht(29,te,null,O.mode);return ge.lanes=Y,ge.return=O,ge}finally{}}}var _a=cy(!0),uy=cy(!1),nn=G(null),Sn=null;function di(t){var n=t.alternate;I(st,st.current&1),I(nn,t),Sn===null&&(n===null||ka.current!==null||n.memoizedState!==null)&&(Sn=t)}function dy(t){if(t.tag===22){if(I(st,st.current),I(nn,t),Sn===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Sn=t)}}else fi()}function fi(){I(st,st.current),I(nn,nn.current)}function Yn(t){Q(nn),Sn===t&&(Sn=null),Q(st)}var st=G(0);function il(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Sf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Dd(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:y({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Md={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=qt(),u=li(s);u.payload=n,a!=null&&(u.callback=a),n=ci(t,u,s),n!==null&&(Gt(n,t,s),ro(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=qt(),u=li(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ci(t,u,s),n!==null&&(Gt(n,t,s),ro(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=qt(),s=li(a);s.tag=2,n!=null&&(s.callback=n),n=ci(t,s,a),n!==null&&(Gt(n,t,a),ro(n,t,a))}};function fy(t,n,a,s,u,h,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,h,x):n.prototype&&n.prototype.isPureReactComponent?!Zr(a,s)||!Zr(u,h):!0}function hy(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Md.enqueueReplaceState(n,n.state,null)}function Zi(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=y({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var al=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function py(t){al(t)}function my(t){console.error(t)}function gy(t){al(t)}function rl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function yy(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Od(t,n,a){return a=li(a),a.tag=3,a.payload={element:null},a.callback=function(){rl(t,n)},a}function xy(t){return t=li(t),t.tag=3,t}function vy(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=s.value;t.payload=function(){return u(h)},t.callback=function(){yy(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){yy(n,a,s),typeof u!="function"&&(xi===null?xi=new Set([this]):xi.add(this));var S=s.stack;this.componentDidCatch(s.value,{componentStack:S!==null?S:""})})}function s3(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&eo(n,a,u,!0),a=nn.current,a!==null){switch(a.tag){case 13:return Sn===null?af():a.alternate===null&&Xe===0&&(Xe=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===ld?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),of(t,s,u)),!1;case 22:return a.flags|=65536,s===ld?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),of(t,s,u)),!1}throw Error(o(435,a.tag))}return of(t,s,u),af(),!1}if(Ae)return n=nn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==td&&(t=Error(o(422),{cause:s}),Jr(Wt(t,a)))):(s!==td&&(n=Error(o(423),{cause:s}),Jr(Wt(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=Wt(s,a),u=Od(t.stateNode,s,u),dd(t,u),Xe!==4&&(Xe=2)),!1;var h=Error(o(520),{cause:s});if(h=Wt(h,a),So===null?So=[h]:So.push(h),Xe!==4&&(Xe=2),n===null)return!0;s=Wt(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Od(a.stateNode,s,t),dd(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(xi===null||!xi.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=xy(u),vy(u,t,a,s),dd(a,u),!1}a=a.return}while(a!==null);return!1}var by=Error(o(461)),ut=!1;function gt(t,n,a,s){n.child=t===null?uy(n,null,a,s):_a(n,t.child,a,s)}function Sy(t,n,a,s,u){a=a.render;var h=n.ref;if("ref"in s){var x={};for(var S in s)S!=="ref"&&(x[S]=s[S])}else x=s;return Gi(n),s=gd(t,n,a,x,h,u),S=yd(),t!==null&&!ut?(xd(t,n,u),qn(t,n,u)):(Ae&&S&&Ju(n),n.flags|=1,gt(t,n,s,u),n.child)}function wy(t,n,a,s,u){if(t===null){var h=a.type;return typeof h=="function"&&!Qu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,$y(t,n,h,s,u)):(t=Vs(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Hd(t,u)){var x=h.memoizedProps;if(a=a.compare,a=a!==null?a:Zr,a(x,s)&&t.ref===n.ref)return qn(t,n,u)}return n.flags|=1,t=Vn(h,s),t.ref=n.ref,t.return=n,n.child=t}function $y(t,n,a,s,u){if(t!==null){var h=t.memoizedProps;if(Zr(h,s)&&t.ref===n.ref)if(ut=!1,n.pendingProps=s=h,Hd(t,u))(t.flags&131072)!==0&&(ut=!0);else return n.lanes=t.lanes,qn(t,n,u)}return kd(t,n,a,s,u)}function jy(t,n,a){var s=n.pendingProps,u=s.children,h=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=h!==null?h.baseLanes|a:a,t!==null){for(u=n.child=t.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~s}else n.childLanes=0,n.child=null;return Ty(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Fs(n,h!==null?h.cachePool:null),h!==null?$g(n,h):hd(),dy(n);else return n.lanes=n.childLanes=536870912,Ty(t,n,h!==null?h.baseLanes|a:a,a)}else h!==null?(Fs(n,h.cachePool),$g(n,h),fi(),n.memoizedState=null):(t!==null&&Fs(n,null),hd(),fi());return gt(t,n,u,a),n.child}function Ty(t,n,a,s){var u=sd();return u=u===null?null:{parent:ot._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&Fs(n,null),hd(),dy(n),t!==null&&eo(t,n,s,!0),null}function ol(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function kd(t,n,a,s,u){return Gi(n),a=gd(t,n,a,s,void 0,u),s=yd(),t!==null&&!ut?(xd(t,n,u),qn(t,n,u)):(Ae&&s&&Ju(n),n.flags|=1,gt(t,n,a,u),n.child)}function Ay(t,n,a,s,u,h){return Gi(n),n.updateQueue=null,a=Tg(n,s,a,u),jg(t),s=yd(),t!==null&&!ut?(xd(t,n,h),qn(t,n,h)):(Ae&&s&&Ju(n),n.flags|=1,gt(t,n,a,h),n.child)}function Ey(t,n,a,s,u){if(Gi(n),n.stateNode===null){var h=Ca,x=a.contextType;typeof x=="object"&&x!==null&&(h=wt(x)),h=new a(s,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Md,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=s,h.state=n.memoizedState,h.refs={},cd(n),x=a.contextType,h.context=typeof x=="object"&&x!==null?wt(x):Ca,h.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Dd(n,a,x,s),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&Md.enqueueReplaceState(h,h.state,null),so(n,s,h,u),oo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){h=n.stateNode;var S=n.memoizedProps,A=Zi(a,S);h.props=A;var N=h.context,F=a.contextType;x=Ca,typeof F=="object"&&F!==null&&(x=wt(F));var q=a.getDerivedStateFromProps;F=typeof q=="function"||typeof h.getSnapshotBeforeUpdate=="function",S=n.pendingProps!==S,F||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S||N!==x)&&hy(n,h,s,x),si=!1;var L=n.memoizedState;h.state=L,so(n,s,h,u),oo(),N=n.memoizedState,S||L!==N||si?(typeof q=="function"&&(Dd(n,a,q,s),N=n.memoizedState),(A=si||fy(n,a,A,s,L,N,x))?(F||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=N),h.props=s,h.state=N,h.context=x,s=A):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{h=n.stateNode,ud(t,n),x=n.memoizedProps,F=Zi(a,x),h.props=F,q=n.pendingProps,L=h.context,N=a.contextType,A=Ca,typeof N=="object"&&N!==null&&(A=wt(N)),S=a.getDerivedStateFromProps,(N=typeof S=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==q||L!==A)&&hy(n,h,s,A),si=!1,L=n.memoizedState,h.state=L,so(n,s,h,u),oo();var V=n.memoizedState;x!==q||L!==V||si||t!==null&&t.dependencies!==null&&Hs(t.dependencies)?(typeof S=="function"&&(Dd(n,a,S,s),V=n.memoizedState),(F=si||fy(n,a,F,s,L,V,A)||t!==null&&t.dependencies!==null&&Hs(t.dependencies))?(N||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(s,V,A),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(s,V,A)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===t.memoizedProps&&L===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&L===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=V),h.props=s,h.state=V,h.context=A,s=F):(typeof h.componentDidUpdate!="function"||x===t.memoizedProps&&L===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&L===t.memoizedState||(n.flags|=1024),s=!1)}return h=s,ol(t,n),s=(n.flags&128)!==0,h||s?(h=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&s?(n.child=_a(n,t.child,null,u),n.child=_a(n,null,a,u)):gt(t,n,a,u),n.memoizedState=h.state,t=n.child):t=qn(t,n,u),t}function Ry(t,n,a,s){return Wr(),n.flags|=256,gt(t,n,a,s),n.child}var Bd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nd(t){return{baseLanes:t,cachePool:mg()}}function Ld(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=an),t}function Cy(t,n,a){var s=n.pendingProps,u=!1,h=(n.flags&128)!==0,x;if((x=h)||(x=t!==null&&t.memoizedState===null?!1:(st.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ae){if(u?di(n):fi(),Ae){var S=Ge,A;if(A=S){e:{for(A=S,S=bn;A.nodeType!==8;){if(!S){S=null;break e}if(A=pn(A.nextSibling),A===null){S=null;break e}}S=A}S!==null?(n.memoizedState={dehydrated:S,treeContext:Hi!==null?{id:_n,overflow:Un}:null,retryLane:536870912,hydrationErrors:null},A=Ht(18,null,null,0),A.stateNode=S,A.return=n,n.child=A,Et=n,Ge=null,A=!0):A=!1}A||Yi(n)}if(S=n.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return Sf(S)?n.lanes=32:n.lanes=536870912,null;Yn(n)}return S=s.children,s=s.fallback,u?(fi(),u=n.mode,S=sl({mode:"hidden",children:S},u),s=Ui(s,u,a,null),S.return=n,s.return=n,S.sibling=s,n.child=S,u=n.child,u.memoizedState=Nd(a),u.childLanes=Ld(t,x,a),n.memoizedState=Bd,s):(di(n),Vd(n,S))}if(A=t.memoizedState,A!==null&&(S=A.dehydrated,S!==null)){if(h)n.flags&256?(di(n),n.flags&=-257,n=_d(t,n,a)):n.memoizedState!==null?(fi(),n.child=t.child,n.flags|=128,n=null):(fi(),u=s.fallback,S=n.mode,s=sl({mode:"visible",children:s.children},S),u=Ui(u,S,a,null),u.flags|=2,s.return=n,u.return=n,s.sibling=u,n.child=s,_a(n,t.child,null,a),s=n.child,s.memoizedState=Nd(a),s.childLanes=Ld(t,x,a),n.memoizedState=Bd,n=u);else if(di(n),Sf(S)){if(x=S.nextSibling&&S.nextSibling.dataset,x)var N=x.dgst;x=N,s=Error(o(419)),s.stack="",s.digest=x,Jr({value:s,source:null,stack:null}),n=_d(t,n,a)}else if(ut||eo(t,n,a,!1),x=(a&t.childLanes)!==0,ut||x){if(x=Ve,x!==null&&(s=a&-a,s=(s&42)!==0?1:Su(s),s=(s&(x.suspendedLanes|a))!==0?0:s,s!==0&&s!==A.retryLane))throw A.retryLane=s,Ra(t,s),Gt(x,t,s),by;S.data==="$?"||af(),n=_d(t,n,a)}else S.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=A.treeContext,Ge=pn(S.nextSibling),Et=n,Ae=!0,Fi=null,bn=!1,t!==null&&(en[tn++]=_n,en[tn++]=Un,en[tn++]=Hi,_n=t.id,Un=t.overflow,Hi=n),n=Vd(n,s.children),n.flags|=4096);return n}return u?(fi(),u=s.fallback,S=n.mode,A=t.child,N=A.sibling,s=Vn(A,{mode:"hidden",children:s.children}),s.subtreeFlags=A.subtreeFlags&65011712,N!==null?u=Vn(N,u):(u=Ui(u,S,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,s=u,u=n.child,S=t.child.memoizedState,S===null?S=Nd(a):(A=S.cachePool,A!==null?(N=ot._currentValue,A=A.parent!==N?{parent:N,pool:N}:A):A=mg(),S={baseLanes:S.baseLanes|a,cachePool:A}),u.memoizedState=S,u.childLanes=Ld(t,x,a),n.memoizedState=Bd,s):(di(n),a=t.child,t=a.sibling,a=Vn(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Vd(t,n){return n=sl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function sl(t,n){return t=Ht(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function _d(t,n,a){return _a(n,t.child,null,a),t=Vd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function zy(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),id(t.return,n,a)}function Ud(t,n,a,s,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=s,h.tail=a,h.tailMode=u)}function Dy(t,n,a){var s=n.pendingProps,u=s.revealOrder,h=s.tail;if(gt(t,n,s.children,a),s=st.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zy(t,a,n);else if(t.tag===19)zy(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(I(st,s),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&il(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Ud(n,!1,u,a,h);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&il(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Ud(n,!0,a,null,h);break;case"together":Ud(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qn(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),yi|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(eo(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(o(153));if(n.child!==null){for(t=n.child,a=Vn(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Vn(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Hd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Hs(t)))}function l3(t,n,a){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),oi(n,ot,t.memoizedState.cache),Wr();break;case 27:case 5:ki(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:oi(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(di(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Cy(t,n,a):(di(n),t=qn(t,n,a),t!==null?t.sibling:null);di(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(eo(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Dy(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),I(st,st.current),s)break;return null;case 22:case 23:return n.lanes=0,jy(t,n,a);case 24:oi(n,ot,t.memoizedState.cache)}return qn(t,n,a)}function My(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)ut=!0;else{if(!Hd(t,a)&&(n.flags&128)===0)return ut=!1,l3(t,n,a);ut=(t.flags&131072)!==0}else ut=!1,Ae&&(n.flags&1048576)!==0&&lg(n,Us,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var s=n.elementType,u=s._init;if(s=u(s._payload),n.type=s,typeof s=="function")Qu(s)?(t=Zi(s,t),n.tag=1,n=Ey(null,n,s,t,a)):(n.tag=0,n=kd(null,n,s,t,a));else{if(s!=null){if(u=s.$$typeof,u===H){n.tag=11,n=Sy(null,n,s,t,a);break e}else if(u===K){n.tag=14,n=wy(null,n,s,t,a);break e}}throw n=Kt(s)||s,Error(o(306,n,""))}}return n;case 0:return kd(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Zi(s,n.pendingProps),Ey(t,n,s,u,a);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(o(387));s=n.pendingProps;var h=n.memoizedState;u=h.element,ud(t,n),so(n,s,null,a);var x=n.memoizedState;if(s=x.cache,oi(n,ot,s),s!==h.cache&&ad(n,[ot],a,!0),oo(),s=x.element,h.isDehydrated)if(h={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Ry(t,n,s,a);break e}else if(s!==u){u=Wt(Error(o(424)),n),Jr(u),n=Ry(t,n,s,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ge=pn(t.firstChild),Et=n,Ae=!0,Fi=null,bn=!0,a=uy(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Wr(),s===u){n=qn(t,n,a);break e}gt(t,n,s,a)}n=n.child}return n;case 26:return ol(t,n),t===null?(a=N0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,t=n.pendingProps,s=Sl(oe.current).createElement(a),s[St]=n,s[zt]=t,xt(s,a,t),ct(s),n.stateNode=s):n.memoizedState=N0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ki(n),t===null&&Ae&&(s=n.stateNode=O0(n.type,n.pendingProps,oe.current),Et=n,bn=!0,u=Ge,Si(n.type)?(wf=u,Ge=pn(s.firstChild)):Ge=u),gt(t,n,n.pendingProps.children,a),ol(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ae&&((u=s=Ge)&&(s=N3(s,n.type,n.pendingProps,bn),s!==null?(n.stateNode=s,Et=n,Ge=pn(s.firstChild),bn=!1,u=!0):u=!1),u||Yi(n)),ki(n),u=n.type,h=n.pendingProps,x=t!==null?t.memoizedProps:null,s=h.children,xf(u,h)?s=null:x!==null&&xf(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=gd(t,n,e3,null,null,a),zo._currentValue=u),ol(t,n),gt(t,n,s,a),n.child;case 6:return t===null&&Ae&&((t=a=Ge)&&(a=L3(a,n.pendingProps,bn),a!==null?(n.stateNode=a,Et=n,Ge=null,t=!0):t=!1),t||Yi(n)),null;case 13:return Cy(t,n,a);case 4:return Ee(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=_a(n,null,s,a):gt(t,n,s,a),n.child;case 11:return Sy(t,n,n.type,n.pendingProps,a);case 7:return gt(t,n,n.pendingProps,a),n.child;case 8:return gt(t,n,n.pendingProps.children,a),n.child;case 12:return gt(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,oi(n,n.type,s.value),gt(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,Gi(n),u=wt(u),s=s(u),n.flags|=1,gt(t,n,s,a),n.child;case 14:return wy(t,n,n.type,n.pendingProps,a);case 15:return $y(t,n,n.type,n.pendingProps,a);case 19:return Dy(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=sl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Vn(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return jy(t,n,a);case 24:return Gi(n),s=wt(ot),t===null?(u=sd(),u===null&&(u=Ve,h=rd(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:s,cache:u},cd(n),oi(n,ot,u)):((t.lanes&a)!==0&&(ud(t,n),so(n,null,null,a),oo()),u=t.memoizedState,h=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),oi(n,ot,s)):(s=h.cache,oi(n,ot,s),s!==u.cache&&ad(n,[ot],a,!0))),gt(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(o(156,n.tag))}function Gn(t){t.flags|=4}function Oy(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!H0(n)){if(n=nn.current,n!==null&&((Se&4194048)===Se?Sn!==null:(Se&62914560)!==Se&&(Se&536870912)===0||n!==Sn))throw ao=ld,gg;t.flags|=8192}}function ll(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?dm():536870912,t.lanes|=n,Fa|=n)}function mo(t,n){if(!Ae)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Pe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function c3(t,n,a){var s=n.pendingProps;switch(ed(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(n),null;case 1:return Pe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Pn(ot),bt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ir(n)?Gn(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,dg())),Pe(n),null;case 26:return a=n.memoizedState,t===null?(Gn(n),a!==null?(Pe(n),Oy(n,a)):(Pe(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Gn(n),Pe(n),Oy(n,a)):(Pe(n),n.flags&=-16777217):(t.memoizedProps!==s&&Gn(n),Pe(n),n.flags&=-16777217),null;case 27:Bn(n),a=oe.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Gn(n);else{if(!s){if(n.stateNode===null)throw Error(o(166));return Pe(n),null}t=ne.current,Ir(n)?cg(n):(t=O0(u,s,a),n.stateNode=t,Gn(n))}return Pe(n),null;case 5:if(Bn(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Gn(n);else{if(!s){if(n.stateNode===null)throw Error(o(166));return Pe(n),null}if(t=ne.current,Ir(n))cg(n);else{switch(u=Sl(oe.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?u.createElement(a,{is:s.is}):u.createElement(a)}}t[St]=n,t[zt]=s;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(xt(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Gn(n)}}return Pe(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Gn(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(o(166));if(t=oe.current,Ir(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=Et,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[St]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||A0(t.nodeValue,a)),t||Yi(n)}else t=Sl(t).createTextNode(s),t[St]=n,n.stateNode=t}return Pe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ir(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(o(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[St]=n}else Wr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Pe(n),u=!1}else u=dg(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Yn(n),n):(Yn(n),null)}if(Yn(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var h=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(h=s.memoizedState.cachePool.pool),h!==u&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),ll(n,n.updateQueue),Pe(n),null;case 4:return bt(),t===null&&hf(n.stateNode.containerInfo),Pe(n),null;case 10:return Pn(n.type),Pe(n),null;case 19:if(Q(st),u=n.memoizedState,u===null)return Pe(n),null;if(s=(n.flags&128)!==0,h=u.rendering,h===null)if(s)mo(u,!1);else{if(Xe!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=il(t),h!==null){for(n.flags|=128,mo(u,!1),t=h.updateQueue,n.updateQueue=t,ll(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)sg(a,t),a=a.sibling;return I(st,st.current&1|2),n.child}t=t.sibling}u.tail!==null&&vn()>dl&&(n.flags|=128,s=!0,mo(u,!1),n.lanes=4194304)}else{if(!s)if(t=il(h),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,ll(n,t),mo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!Ae)return Pe(n),null}else 2*vn()-u.renderingStartTime>dl&&a!==536870912&&(n.flags|=128,s=!0,mo(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(t=u.last,t!==null?t.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=vn(),n.sibling=null,t=st.current,I(st,s?t&1|2:t&1),n):(Pe(n),null);case 22:case 23:return Yn(n),pd(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Pe(n),n.subtreeFlags&6&&(n.flags|=8192)):Pe(n),a=n.updateQueue,a!==null&&ll(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Q(Xi),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Pn(ot),Pe(n),null;case 25:return null;case 30:return null}throw Error(o(156,n.tag))}function u3(t,n){switch(ed(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Pn(ot),bt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Bn(n),null;case 13:if(Yn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(o(340));Wr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Q(st),null;case 4:return bt(),null;case 10:return Pn(n.type),null;case 22:case 23:return Yn(n),pd(),t!==null&&Q(Xi),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Pn(ot),null;case 25:return null;default:return null}}function ky(t,n){switch(ed(n),n.tag){case 3:Pn(ot),bt();break;case 26:case 27:case 5:Bn(n);break;case 4:bt();break;case 13:Yn(n);break;case 19:Q(st);break;case 10:Pn(n.type);break;case 22:case 23:Yn(n),pd(),t!==null&&Q(Xi);break;case 24:Pn(ot)}}function go(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var h=a.create,x=a.inst;s=h(),x.destroy=s}a=a.next}while(a!==u)}}catch(S){Le(n,n.return,S)}}function hi(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var h=u.next;s=h;do{if((s.tag&t)===t){var x=s.inst,S=x.destroy;if(S!==void 0){x.destroy=void 0,u=n;var A=a,N=S;try{N()}catch(F){Le(u,A,F)}}}s=s.next}while(s!==h)}}catch(F){Le(n,n.return,F)}}function By(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{wg(n,a)}catch(s){Le(t,t.return,s)}}}function Ny(t,n,a){a.props=Zi(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Le(t,n,s)}}function yo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Le(t,n,u)}}function wn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Le(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Le(t,n,u)}else a.current=null}function Ly(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Le(t,t.return,u)}}function Pd(t,n,a){try{var s=t.stateNode;D3(s,t.type,a,n),s[zt]=n}catch(u){Le(t,t.return,u)}}function Vy(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Si(t.type)||t.tag===4}function Fd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Si(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yd(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=bl));else if(s!==4&&(s===27&&Si(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Yd(t,n,a),t=t.sibling;t!==null;)Yd(t,n,a),t=t.sibling}function cl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Si(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(cl(t,n,a),t=t.sibling;t!==null;)cl(t,n,a),t=t.sibling}function _y(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);xt(n,s,a),n[St]=t,n[zt]=a}catch(h){Le(t,t.return,h)}}var Xn=!1,Je=!1,qd=!1,Uy=typeof WeakSet=="function"?WeakSet:Set,dt=null;function d3(t,n){if(t=t.containerInfo,gf=El,t=Im(t),Fu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,h=s.focusNode;s=s.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var x=0,S=-1,A=-1,N=0,F=0,q=t,L=null;t:for(;;){for(var V;q!==a||u!==0&&q.nodeType!==3||(S=x+u),q!==h||s!==0&&q.nodeType!==3||(A=x+s),q.nodeType===3&&(x+=q.nodeValue.length),(V=q.firstChild)!==null;)L=q,q=V;for(;;){if(q===t)break t;if(L===a&&++N===u&&(S=x),L===h&&++F===s&&(A=x),(V=q.nextSibling)!==null)break;q=L,L=q.parentNode}q=V}a=S===-1||A===-1?null:{start:S,end:A}}else a=null}a=a||{start:0,end:0}}else a=null;for(yf={focusedElem:t,selectionRange:a},El=!1,dt=n;dt!==null;)if(n=dt,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,dt=t;else for(;dt!==null;){switch(n=dt,h=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,s=a.stateNode;try{var le=Zi(a.type,u,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(le,h),s.__reactInternalSnapshotBeforeUpdate=t}catch(ae){Le(a,a.return,ae)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)bf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":bf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=n.sibling,t!==null){t.return=n.return,dt=t;break}dt=n.return}}function Hy(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:pi(t,a),s&4&&go(5,a);break;case 1:if(pi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Le(a,a.return,x)}else{var u=Zi(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Le(a,a.return,x)}}s&64&&By(a),s&512&&yo(a,a.return);break;case 3:if(pi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{wg(t,n)}catch(x){Le(a,a.return,x)}}break;case 27:n===null&&s&4&&_y(a);case 26:case 5:pi(t,a),n===null&&s&4&&Ly(a),s&512&&yo(a,a.return);break;case 12:pi(t,a);break;case 13:pi(t,a),s&4&&Yy(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=b3.bind(null,a),V3(t,a))));break;case 22:if(s=a.memoizedState!==null||Xn,!s){n=n!==null&&n.memoizedState!==null||Je,u=Xn;var h=Je;Xn=s,(Je=n)&&!h?mi(t,a,(a.subtreeFlags&8772)!==0):pi(t,a),Xn=u,Je=h}break;case 30:break;default:pi(t,a)}}function Py(t){var n=t.alternate;n!==null&&(t.alternate=null,Py(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ju(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var He=null,Ot=!1;function Kn(t,n,a){for(a=a.child;a!==null;)Fy(t,n,a),a=a.sibling}function Fy(t,n,a){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(Lr,a)}catch{}switch(a.tag){case 26:Je||wn(a,n),Kn(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Je||wn(a,n);var s=He,u=Ot;Si(a.type)&&(He=a.stateNode,Ot=!1),Kn(t,n,a),Ao(a.stateNode),He=s,Ot=u;break;case 5:Je||wn(a,n);case 6:if(s=He,u=Ot,He=null,Kn(t,n,a),He=s,Ot=u,He!==null)if(Ot)try{(He.nodeType===9?He.body:He.nodeName==="HTML"?He.ownerDocument.body:He).removeChild(a.stateNode)}catch(h){Le(a,n,h)}else try{He.removeChild(a.stateNode)}catch(h){Le(a,n,h)}break;case 18:He!==null&&(Ot?(t=He,D0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ko(t)):D0(He,a.stateNode));break;case 4:s=He,u=Ot,He=a.stateNode.containerInfo,Ot=!0,Kn(t,n,a),He=s,Ot=u;break;case 0:case 11:case 14:case 15:Je||hi(2,a,n),Je||hi(4,a,n),Kn(t,n,a);break;case 1:Je||(wn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Ny(a,n,s)),Kn(t,n,a);break;case 21:Kn(t,n,a);break;case 22:Je=(s=Je)||a.memoizedState!==null,Kn(t,n,a),Je=s;break;default:Kn(t,n,a)}}function Yy(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ko(t)}catch(a){Le(n,n.return,a)}}function f3(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Uy),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Uy),n;default:throw Error(o(435,t.tag))}}function Gd(t,n){var a=f3(t);n.forEach(function(s){var u=S3.bind(null,t,s);a.has(s)||(a.add(s),s.then(u,u))})}function Pt(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],h=t,x=n,S=x;e:for(;S!==null;){switch(S.tag){case 27:if(Si(S.type)){He=S.stateNode,Ot=!1;break e}break;case 5:He=S.stateNode,Ot=!1;break e;case 3:case 4:He=S.stateNode.containerInfo,Ot=!0;break e}S=S.return}if(He===null)throw Error(o(160));Fy(h,x,u),He=null,Ot=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)qy(n,t),n=n.sibling}var hn=null;function qy(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Pt(n,t),Ft(t),s&4&&(hi(3,t,t.return),go(3,t),hi(5,t,t.return));break;case 1:Pt(n,t),Ft(t),s&512&&(Je||a===null||wn(a,a.return)),s&64&&Xn&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=hn;if(Pt(n,t),Ft(t),s&512&&(Je||a===null||wn(a,a.return)),s&4){var h=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){e:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(s){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Ur]||h[St]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(s),u.head.insertBefore(h,u.querySelector("head > title"))),xt(h,s,a),h[St]=t,ct(h),s=h;break e;case"link":var x=_0("link","href",u).get(s+(a.href||""));if(x){for(var S=0;S<x.length;S++)if(h=x[S],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(S,1);break t}}h=u.createElement(s),xt(h,s,a),u.head.appendChild(h);break;case"meta":if(x=_0("meta","content",u).get(s+(a.content||""))){for(S=0;S<x.length;S++)if(h=x[S],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(S,1);break t}}h=u.createElement(s),xt(h,s,a),u.head.appendChild(h);break;default:throw Error(o(468,s))}h[St]=t,ct(h),s=h}t.stateNode=s}else U0(u,t.type,t.stateNode);else t.stateNode=V0(u,s,t.memoizedProps);else h!==s?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,s===null?U0(u,t.type,t.stateNode):V0(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Pd(t,t.memoizedProps,a.memoizedProps)}break;case 27:Pt(n,t),Ft(t),s&512&&(Je||a===null||wn(a,a.return)),a!==null&&s&4&&Pd(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Pt(n,t),Ft(t),s&512&&(Je||a===null||wn(a,a.return)),t.flags&32){u=t.stateNode;try{Sa(u,"")}catch(V){Le(t,t.return,V)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,Pd(t,u,a!==null?a.memoizedProps:u)),s&1024&&(qd=!0);break;case 6:if(Pt(n,t),Ft(t),s&4){if(t.stateNode===null)throw Error(o(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(V){Le(t,t.return,V)}}break;case 3:if(jl=null,u=hn,hn=wl(n.containerInfo),Pt(n,t),hn=u,Ft(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ko(n.containerInfo)}catch(V){Le(t,t.return,V)}qd&&(qd=!1,Gy(t));break;case 4:s=hn,hn=wl(t.stateNode.containerInfo),Pt(n,t),Ft(t),hn=s;break;case 12:Pt(n,t),Ft(t);break;case 13:Pt(n,t),Ft(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wd=vn()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Gd(t,s)));break;case 22:u=t.memoizedState!==null;var A=a!==null&&a.memoizedState!==null,N=Xn,F=Je;if(Xn=N||u,Je=F||A,Pt(n,t),Je=F,Xn=N,Ft(t),s&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||A||Xn||Je||Qi(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){A=a=n;try{if(h=A.stateNode,u)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{S=A.stateNode;var q=A.memoizedProps.style,L=q!=null&&q.hasOwnProperty("display")?q.display:null;S.style.display=L==null||typeof L=="boolean"?"":(""+L).trim()}}catch(V){Le(A,A.return,V)}}}else if(n.tag===6){if(a===null){A=n;try{A.stateNode.nodeValue=u?"":A.memoizedProps}catch(V){Le(A,A.return,V)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Gd(t,a))));break;case 19:Pt(n,t),Ft(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Gd(t,s)));break;case 30:break;case 21:break;default:Pt(n,t),Ft(t)}}function Ft(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Vy(s)){a=s;break}s=s.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var u=a.stateNode,h=Fd(t);cl(t,h,u);break;case 5:var x=a.stateNode;a.flags&32&&(Sa(x,""),a.flags&=-33);var S=Fd(t);cl(t,S,x);break;case 3:case 4:var A=a.stateNode.containerInfo,N=Fd(t);Yd(t,N,A);break;default:throw Error(o(161))}}catch(F){Le(t,t.return,F)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Gy(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Gy(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function pi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Hy(t,n.alternate,n),n=n.sibling}function Qi(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:hi(4,n,n.return),Qi(n);break;case 1:wn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ny(n,n.return,a),Qi(n);break;case 27:Ao(n.stateNode);case 26:case 5:wn(n,n.return),Qi(n);break;case 22:n.memoizedState===null&&Qi(n);break;case 30:Qi(n);break;default:Qi(n)}t=t.sibling}}function mi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,h=n,x=h.flags;switch(h.tag){case 0:case 11:case 15:mi(u,h,a),go(4,h);break;case 1:if(mi(u,h,a),s=h,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(N){Le(s,s.return,N)}if(s=h,u=s.updateQueue,u!==null){var S=s.stateNode;try{var A=u.shared.hiddenCallbacks;if(A!==null)for(u.shared.hiddenCallbacks=null,u=0;u<A.length;u++)Sg(A[u],S)}catch(N){Le(s,s.return,N)}}a&&x&64&&By(h),yo(h,h.return);break;case 27:_y(h);case 26:case 5:mi(u,h,a),a&&s===null&&x&4&&Ly(h),yo(h,h.return);break;case 12:mi(u,h,a);break;case 13:mi(u,h,a),a&&x&4&&Yy(u,h);break;case 22:h.memoizedState===null&&mi(u,h,a),yo(h,h.return);break;case 30:break;default:mi(u,h,a)}n=n.sibling}}function Xd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&to(a))}function Kd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t))}function $n(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Xy(t,n,a,s),n=n.sibling}function Xy(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:$n(t,n,a,s),u&2048&&go(9,n);break;case 1:$n(t,n,a,s);break;case 3:$n(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t)));break;case 12:if(u&2048){$n(t,n,a,s),t=n.stateNode;try{var h=n.memoizedProps,x=h.id,S=h.onPostCommit;typeof S=="function"&&S(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(A){Le(n,n.return,A)}}else $n(t,n,a,s);break;case 13:$n(t,n,a,s);break;case 23:break;case 22:h=n.stateNode,x=n.alternate,n.memoizedState!==null?h._visibility&2?$n(t,n,a,s):xo(t,n):h._visibility&2?$n(t,n,a,s):(h._visibility|=2,Ua(t,n,a,s,(n.subtreeFlags&10256)!==0)),u&2048&&Xd(x,n);break;case 24:$n(t,n,a,s),u&2048&&Kd(n.alternate,n);break;default:$n(t,n,a,s)}}function Ua(t,n,a,s,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=t,x=n,S=a,A=s,N=x.flags;switch(x.tag){case 0:case 11:case 15:Ua(h,x,S,A,u),go(8,x);break;case 23:break;case 22:var F=x.stateNode;x.memoizedState!==null?F._visibility&2?Ua(h,x,S,A,u):xo(h,x):(F._visibility|=2,Ua(h,x,S,A,u)),u&&N&2048&&Xd(x.alternate,x);break;case 24:Ua(h,x,S,A,u),u&&N&2048&&Kd(x.alternate,x);break;default:Ua(h,x,S,A,u)}n=n.sibling}}function xo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:xo(a,s),u&2048&&Xd(s.alternate,s);break;case 24:xo(a,s),u&2048&&Kd(s.alternate,s);break;default:xo(a,s)}n=n.sibling}}var vo=8192;function Ha(t){if(t.subtreeFlags&vo)for(t=t.child;t!==null;)Ky(t),t=t.sibling}function Ky(t){switch(t.tag){case 26:Ha(t),t.flags&vo&&t.memoizedState!==null&&I3(hn,t.memoizedState,t.memoizedProps);break;case 5:Ha(t);break;case 3:case 4:var n=hn;hn=wl(t.stateNode.containerInfo),Ha(t),hn=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=vo,vo=16777216,Ha(t),vo=n):Ha(t));break;default:Ha(t)}}function Zy(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function bo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];dt=s,Iy(s,t)}Zy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qy(t),t=t.sibling}function Qy(t){switch(t.tag){case 0:case 11:case 15:bo(t),t.flags&2048&&hi(9,t,t.return);break;case 3:bo(t);break;case 12:bo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ul(t)):bo(t);break;default:bo(t)}}function ul(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];dt=s,Iy(s,t)}Zy(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:hi(8,n,n.return),ul(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ul(n));break;default:ul(n)}t=t.sibling}}function Iy(t,n){for(;dt!==null;){var a=dt;switch(a.tag){case 0:case 11:case 15:hi(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:to(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,dt=s;else e:for(a=t;dt!==null;){s=dt;var u=s.sibling,h=s.return;if(Py(s),s===a){dt=null;break e}if(u!==null){u.return=h,dt=u;break e}dt=h}}}var h3={getCacheForType:function(t){var n=wt(ot),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},p3=typeof WeakMap=="function"?WeakMap:Map,ze=0,Ve=null,xe=null,Se=0,De=0,Yt=null,gi=!1,Pa=!1,Zd=!1,Zn=0,Xe=0,yi=0,Ii=0,Qd=0,an=0,Fa=0,So=null,kt=null,Id=!1,Wd=0,dl=1/0,fl=null,xi=null,yt=0,vi=null,Ya=null,qa=0,Jd=0,ef=null,Wy=null,wo=0,tf=null;function qt(){if((ze&2)!==0&&Se!==0)return Se&-Se;if(P.T!==null){var t=Ma;return t!==0?t:cf()}return pm()}function Jy(){an===0&&(an=(Se&536870912)===0||Ae?um():536870912);var t=nn.current;return t!==null&&(t.flags|=32),an}function Gt(t,n,a){(t===Ve&&(De===2||De===9)||t.cancelPendingCommit!==null)&&(Ga(t,0),bi(t,Se,an,!1)),_r(t,a),((ze&2)===0||t!==Ve)&&(t===Ve&&((ze&2)===0&&(Ii|=a),Xe===4&&bi(t,Se,an,!1)),jn(t))}function e0(t,n,a){if((ze&6)!==0)throw Error(o(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Vr(t,n),u=s?y3(t,n):rf(t,n,!0),h=s;do{if(u===0){Pa&&!s&&bi(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!m3(a)){u=rf(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var S=t;u=So;var A=S.current.memoizedState.isDehydrated;if(A&&(Ga(S,x).flags|=256),x=rf(S,x,!1),x!==2){if(Zd&&!A){S.errorRecoveryDisabledLanes|=h,Ii|=h,u=4;break e}h=kt,kt=u,h!==null&&(kt===null?kt=h:kt.push.apply(kt,h))}u=x}if(h=!1,u!==2)continue}}if(u===1){Ga(t,0),bi(t,n,0,!0);break}e:{switch(s=t,h=u,h){case 0:case 1:throw Error(o(345));case 4:if((n&4194048)!==n)break;case 6:bi(s,n,an,!gi);break e;case 2:kt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((n&62914560)===n&&(u=Wd+300-vn(),10<u)){if(bi(s,n,an,!gi),$s(s,0,!0)!==0)break e;s.timeoutHandle=C0(t0.bind(null,s,a,kt,fl,Id,n,an,Ii,Fa,gi,h,2,-0,0),u);break e}t0(s,a,kt,fl,Id,n,an,Ii,Fa,gi,h,0,-0,0)}}break}while(!0);jn(t)}function t0(t,n,a,s,u,h,x,S,A,N,F,q,L,V){if(t.timeoutHandle=-1,q=n.subtreeFlags,(q&8192||(q&16785408)===16785408)&&(Co={stylesheets:null,count:0,unsuspend:Q3},Ky(n),q=W3(),q!==null)){t.cancelPendingCommit=q(l0.bind(null,t,n,h,a,s,u,x,S,A,F,1,L,V)),bi(t,h,x,!N);return}l0(t,n,h,a,s,u,x,S,A)}function m3(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],h=u.getSnapshot;u=u.value;try{if(!Ut(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function bi(t,n,a,s){n&=~Qd,n&=~Ii,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var h=31-_t(u),x=1<<h;s[h]=-1,u&=~x}a!==0&&fm(t,a,n)}function hl(){return(ze&6)===0?($o(0),!1):!0}function nf(){if(xe!==null){if(De===0)var t=xe.return;else t=xe,Hn=qi=null,vd(t),Va=null,ho=0,t=xe;for(;t!==null;)ky(t.alternate,t),t=t.return;xe=null}}function Ga(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,O3(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),nf(),Ve=t,xe=a=Vn(t.current,null),Se=n,De=0,Yt=null,gi=!1,Pa=Vr(t,n),Zd=!1,Fa=an=Qd=Ii=yi=Xe=0,kt=So=null,Id=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-_t(s),h=1<<u;n|=t[u],s&=~h}return Zn=n,Bs(),a}function n0(t,n){me=null,P.H=el,n===io||n===Ys?(n=vg(),De=3):n===gg?(n=vg(),De=4):De=n===by?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yt=n,xe===null&&(Xe=1,rl(t,Wt(n,t.current)))}function i0(){var t=P.H;return P.H=el,t===null?el:t}function a0(){var t=P.A;return P.A=h3,t}function af(){Xe=4,gi||(Se&4194048)!==Se&&nn.current!==null||(Pa=!0),(yi&134217727)===0&&(Ii&134217727)===0||Ve===null||bi(Ve,Se,an,!1)}function rf(t,n,a){var s=ze;ze|=2;var u=i0(),h=a0();(Ve!==t||Se!==n)&&(fl=null,Ga(t,n)),n=!1;var x=Xe;e:do try{if(De!==0&&xe!==null){var S=xe,A=Yt;switch(De){case 8:nf(),x=6;break e;case 3:case 2:case 9:case 6:nn.current===null&&(n=!0);var N=De;if(De=0,Yt=null,Xa(t,S,A,N),a&&Pa){x=0;break e}break;default:N=De,De=0,Yt=null,Xa(t,S,A,N)}}g3(),x=Xe;break}catch(F){n0(t,F)}while(!0);return n&&t.shellSuspendCounter++,Hn=qi=null,ze=s,P.H=u,P.A=h,xe===null&&(Ve=null,Se=0,Bs()),x}function g3(){for(;xe!==null;)r0(xe)}function y3(t,n){var a=ze;ze|=2;var s=i0(),u=a0();Ve!==t||Se!==n?(fl=null,dl=vn()+500,Ga(t,n)):Pa=Vr(t,n);e:do try{if(De!==0&&xe!==null){n=xe;var h=Yt;t:switch(De){case 1:De=0,Yt=null,Xa(t,n,h,1);break;case 2:case 9:if(yg(h)){De=0,Yt=null,o0(n);break}n=function(){De!==2&&De!==9||Ve!==t||(De=7),jn(t)},h.then(n,n);break e;case 3:De=7;break e;case 4:De=5;break e;case 7:yg(h)?(De=0,Yt=null,o0(n)):(De=0,Yt=null,Xa(t,n,h,7));break;case 5:var x=null;switch(xe.tag){case 26:x=xe.memoizedState;case 5:case 27:var S=xe;if(!x||H0(x)){De=0,Yt=null;var A=S.sibling;if(A!==null)xe=A;else{var N=S.return;N!==null?(xe=N,pl(N)):xe=null}break t}}De=0,Yt=null,Xa(t,n,h,5);break;case 6:De=0,Yt=null,Xa(t,n,h,6);break;case 8:nf(),Xe=6;break e;default:throw Error(o(462))}}x3();break}catch(F){n0(t,F)}while(!0);return Hn=qi=null,P.H=s,P.A=u,ze=a,xe!==null?0:(Ve=null,Se=0,Bs(),Xe)}function x3(){for(;xe!==null&&!U4();)r0(xe)}function r0(t){var n=My(t.alternate,t,Zn);t.memoizedProps=t.pendingProps,n===null?pl(t):xe=n}function o0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Ay(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=Ay(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:vd(n);default:ky(a,n),n=xe=sg(n,Zn),n=My(a,n,Zn)}t.memoizedProps=t.pendingProps,n===null?pl(t):xe=n}function Xa(t,n,a,s){Hn=qi=null,vd(n),Va=null,ho=0;var u=n.return;try{if(s3(t,u,n,a,Se)){Xe=1,rl(t,Wt(a,t.current)),xe=null;return}}catch(h){if(u!==null)throw xe=u,h;Xe=1,rl(t,Wt(a,t.current)),xe=null;return}n.flags&32768?(Ae||s===1?t=!0:Pa||(Se&536870912)!==0?t=!1:(gi=t=!0,(s===2||s===9||s===3||s===6)&&(s=nn.current,s!==null&&s.tag===13&&(s.flags|=16384))),s0(n,t)):pl(n)}function pl(t){var n=t;do{if((n.flags&32768)!==0){s0(n,gi);return}t=n.return;var a=c3(n.alternate,n,Zn);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=t}while(n!==null);Xe===0&&(Xe=5)}function s0(t,n){do{var a=u3(t.alternate,t);if(a!==null){a.flags&=32767,xe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){xe=t;return}xe=t=a}while(t!==null);Xe=6,xe=null}function l0(t,n,a,s,u,h,x,S,A){t.cancelPendingCommit=null;do ml();while(yt!==0);if((ze&6)!==0)throw Error(o(327));if(n!==null){if(n===t.current)throw Error(o(177));if(h=n.lanes|n.childLanes,h|=Ku,Q4(t,a,h,x,S,A),t===Ve&&(xe=Ve=null,Se=0),Ya=n,vi=t,qa=a,Jd=h,ef=u,Wy=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,w3(bs,function(){return h0(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,u=Z.p,Z.p=2,x=ze,ze|=4;try{d3(t,n,a)}finally{ze=x,Z.p=u,P.T=s}}yt=1,c0(),u0(),d0()}}function c0(){if(yt===1){yt=0;var t=vi,n=Ya,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=Z.p;Z.p=2;var u=ze;ze|=4;try{qy(n,t);var h=yf,x=Im(t.containerInfo),S=h.focusedElem,A=h.selectionRange;if(x!==S&&S&&S.ownerDocument&&Qm(S.ownerDocument.documentElement,S)){if(A!==null&&Fu(S)){var N=A.start,F=A.end;if(F===void 0&&(F=N),"selectionStart"in S)S.selectionStart=N,S.selectionEnd=Math.min(F,S.value.length);else{var q=S.ownerDocument||document,L=q&&q.defaultView||window;if(L.getSelection){var V=L.getSelection(),le=S.textContent.length,ae=Math.min(A.start,le),Be=A.end===void 0?ae:Math.min(A.end,le);!V.extend&&ae>Be&&(x=Be,Be=ae,ae=x);var O=Zm(S,ae),D=Zm(S,Be);if(O&&D&&(V.rangeCount!==1||V.anchorNode!==O.node||V.anchorOffset!==O.offset||V.focusNode!==D.node||V.focusOffset!==D.offset)){var B=q.createRange();B.setStart(O.node,O.offset),V.removeAllRanges(),ae>Be?(V.addRange(B),V.extend(D.node,D.offset)):(B.setEnd(D.node,D.offset),V.addRange(B))}}}}for(q=[],V=S;V=V.parentNode;)V.nodeType===1&&q.push({element:V,left:V.scrollLeft,top:V.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<q.length;S++){var Y=q[S];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}El=!!gf,yf=gf=null}finally{ze=u,Z.p=s,P.T=a}}t.current=n,yt=2}}function u0(){if(yt===2){yt=0;var t=vi,n=Ya,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=Z.p;Z.p=2;var u=ze;ze|=4;try{Hy(t,n.alternate,n)}finally{ze=u,Z.p=s,P.T=a}}yt=3}}function d0(){if(yt===4||yt===3){yt=0,H4();var t=vi,n=Ya,a=qa,s=Wy;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?yt=5:(yt=0,Ya=vi=null,f0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(xi=null),wu(a),n=n.stateNode,Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(Lr,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,u=Z.p,Z.p=2,P.T=null;try{for(var h=t.onRecoverableError,x=0;x<s.length;x++){var S=s[x];h(S.value,{componentStack:S.stack})}}finally{P.T=n,Z.p=u}}(qa&3)!==0&&ml(),jn(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===tf?wo++:(wo=0,tf=t):wo=0,$o(0)}}function f0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,to(n)))}function ml(t){return c0(),u0(),d0(),h0()}function h0(){if(yt!==5)return!1;var t=vi,n=Jd;Jd=0;var a=wu(qa),s=P.T,u=Z.p;try{Z.p=32>a?32:a,P.T=null,a=ef,ef=null;var h=vi,x=qa;if(yt=0,Ya=vi=null,qa=0,(ze&6)!==0)throw Error(o(331));var S=ze;if(ze|=4,Qy(h.current),Xy(h,h.current,x,a),ze=S,$o(0,!1),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(Lr,h)}catch{}return!0}finally{Z.p=u,P.T=s,f0(t,n)}}function p0(t,n,a){n=Wt(a,n),n=Od(t.stateNode,n,2),t=ci(t,n,2),t!==null&&(_r(t,2),jn(t))}function Le(t,n,a){if(t.tag===3)p0(t,t,a);else for(;n!==null;){if(n.tag===3){p0(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(xi===null||!xi.has(s))){t=Wt(a,t),a=xy(2),s=ci(n,a,2),s!==null&&(vy(a,s,n,t),_r(s,2),jn(s));break}}n=n.return}}function of(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new p3;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Zd=!0,u.add(a),t=v3.bind(null,t,n,a),n.then(t,t))}function v3(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ve===t&&(Se&a)===a&&(Xe===4||Xe===3&&(Se&62914560)===Se&&300>vn()-Wd?(ze&2)===0&&Ga(t,0):Qd|=a,Fa===Se&&(Fa=0)),jn(t)}function m0(t,n){n===0&&(n=dm()),t=Ra(t,n),t!==null&&(_r(t,n),jn(t))}function b3(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),m0(t,a)}function S3(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(o(314))}s!==null&&s.delete(n),m0(t,a)}function w3(t,n){return xu(t,n)}var gl=null,Ka=null,sf=!1,yl=!1,lf=!1,Wi=0;function jn(t){t!==Ka&&t.next===null&&(Ka===null?gl=Ka=t:Ka=Ka.next=t),yl=!0,sf||(sf=!0,j3())}function $o(t,n){if(!lf&&yl){lf=!0;do for(var a=!1,s=gl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var h=0;else{var x=s.suspendedLanes,S=s.pingedLanes;h=(1<<31-_t(42|t)+1)-1,h&=u&~(x&~S),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,v0(s,h))}else h=Se,h=$s(s,s===Ve?h:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(h&3)===0||Vr(s,h)||(a=!0,v0(s,h));s=s.next}while(a);lf=!1}}function $3(){g0()}function g0(){yl=sf=!1;var t=0;Wi!==0&&(M3()&&(t=Wi),Wi=0);for(var n=vn(),a=null,s=gl;s!==null;){var u=s.next,h=y0(s,n);h===0?(s.next=null,a===null?gl=u:a.next=u,u===null&&(Ka=a)):(a=s,(t!==0||(h&3)!==0)&&(yl=!0)),s=u}$o(t)}function y0(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var x=31-_t(h),S=1<<x,A=u[x];A===-1?((S&a)===0||(S&s)!==0)&&(u[x]=Z4(S,n)):A<=n&&(t.expiredLanes|=S),h&=~S}if(n=Ve,a=Se,a=$s(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(De===2||De===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&vu(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Vr(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&vu(s),wu(a)){case 2:case 8:a=lm;break;case 32:a=bs;break;case 268435456:a=cm;break;default:a=bs}return s=x0.bind(null,t),a=xu(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&vu(s),t.callbackPriority=2,t.callbackNode=null,2}function x0(t,n){if(yt!==0&&yt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ml()&&t.callbackNode!==a)return null;var s=Se;return s=$s(t,t===Ve?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(e0(t,s,n),y0(t,vn()),t.callbackNode!=null&&t.callbackNode===a?x0.bind(null,t):null)}function v0(t,n){if(ml())return null;e0(t,n,!0)}function j3(){k3(function(){(ze&6)!==0?xu(sm,$3):g0()})}function cf(){return Wi===0&&(Wi=um()),Wi}function b0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Rs(""+t)}function S0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function T3(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var h=b0((u[zt]||null).action),x=s.submitter;x&&(n=(n=x[zt]||null)?b0(n.formAction):x.getAttribute("formAction"),n!==null&&(h=n,x=null));var S=new Ms("action","action",null,s,u);t.push({event:S,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Wi!==0){var A=x?S0(u,x):new FormData(u);Rd(a,{pending:!0,data:A,method:u.method,action:h},null,A)}}else typeof h=="function"&&(S.preventDefault(),A=x?S0(u,x):new FormData(u),Rd(a,{pending:!0,data:A,method:u.method,action:h},h,A))},currentTarget:u}]})}}for(var uf=0;uf<Xu.length;uf++){var df=Xu[uf],A3=df.toLowerCase(),E3=df[0].toUpperCase()+df.slice(1);fn(A3,"on"+E3)}fn(eg,"onAnimationEnd"),fn(tg,"onAnimationIteration"),fn(ng,"onAnimationStart"),fn("dblclick","onDoubleClick"),fn("focusin","onFocus"),fn("focusout","onBlur"),fn(YS,"onTransitionRun"),fn(qS,"onTransitionStart"),fn(GS,"onTransitionCancel"),fn(ig,"onTransitionEnd"),xa("onMouseEnter",["mouseout","mouseover"]),xa("onMouseLeave",["mouseout","mouseover"]),xa("onPointerEnter",["pointerout","pointerover"]),xa("onPointerLeave",["pointerout","pointerover"]),Ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ni("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R3=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jo));function w0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;e:{var h=void 0;if(n)for(var x=s.length-1;0<=x;x--){var S=s[x],A=S.instance,N=S.currentTarget;if(S=S.listener,A!==h&&u.isPropagationStopped())break e;h=S,u.currentTarget=N;try{h(u)}catch(F){al(F)}u.currentTarget=null,h=A}else for(x=0;x<s.length;x++){if(S=s[x],A=S.instance,N=S.currentTarget,S=S.listener,A!==h&&u.isPropagationStopped())break e;h=S,u.currentTarget=N;try{h(u)}catch(F){al(F)}u.currentTarget=null,h=A}}}}function ve(t,n){var a=n[$u];a===void 0&&(a=n[$u]=new Set);var s=t+"__bubble";a.has(s)||($0(n,t,2,!1),a.add(s))}function ff(t,n,a){var s=0;n&&(s|=4),$0(a,t,s,n)}var xl="_reactListening"+Math.random().toString(36).slice(2);function hf(t){if(!t[xl]){t[xl]=!0,gm.forEach(function(a){a!=="selectionchange"&&(R3.has(a)||ff(a,!1,t),ff(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[xl]||(n[xl]=!0,ff("selectionchange",!1,n))}}function $0(t,n,a,s){switch(X0(n)){case 2:var u=tw;break;case 8:u=nw;break;default:u=Ef}a=u.bind(null,n,a,t),u=void 0,!ku||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function pf(t,n,a,s,u){var h=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var S=s.stateNode.containerInfo;if(S===u)break;if(x===4)for(x=s.return;x!==null;){var A=x.tag;if((A===3||A===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;S!==null;){if(x=ma(S),x===null)return;if(A=x.tag,A===5||A===6||A===26||A===27){s=h=x;continue e}S=S.parentNode}}s=s.return}zm(function(){var N=h,F=Mu(a),q=[];e:{var L=ag.get(t);if(L!==void 0){var V=Ms,le=t;switch(t){case"keypress":if(zs(a)===0)break e;case"keydown":case"keyup":V=wS;break;case"focusin":le="focus",V=Vu;break;case"focusout":le="blur",V=Vu;break;case"beforeblur":case"afterblur":V=Vu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=Om;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=uS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=TS;break;case eg:case tg:case ng:V=hS;break;case ig:V=ES;break;case"scroll":case"scrollend":V=lS;break;case"wheel":V=CS;break;case"copy":case"cut":case"paste":V=mS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=Bm;break;case"toggle":case"beforetoggle":V=DS}var ae=(n&4)!==0,Be=!ae&&(t==="scroll"||t==="scrollend"),O=ae?L!==null?L+"Capture":null:L;ae=[];for(var D=N,B;D!==null;){var Y=D;if(B=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||B===null||O===null||(Y=Pr(D,O),Y!=null&&ae.push(To(D,Y,B))),Be)break;D=D.return}0<ae.length&&(L=new V(L,le,null,a,F),q.push({event:L,listeners:ae}))}}if((n&7)===0){e:{if(L=t==="mouseover"||t==="pointerover",V=t==="mouseout"||t==="pointerout",L&&a!==Du&&(le=a.relatedTarget||a.fromElement)&&(ma(le)||le[pa]))break e;if((V||L)&&(L=F.window===F?F:(L=F.ownerDocument)?L.defaultView||L.parentWindow:window,V?(le=a.relatedTarget||a.toElement,V=N,le=le?ma(le):null,le!==null&&(Be=d(le),ae=le.tag,le!==Be||ae!==5&&ae!==27&&ae!==6)&&(le=null)):(V=null,le=N),V!==le)){if(ae=Om,Y="onMouseLeave",O="onMouseEnter",D="mouse",(t==="pointerout"||t==="pointerover")&&(ae=Bm,Y="onPointerLeave",O="onPointerEnter",D="pointer"),Be=V==null?L:Hr(V),B=le==null?L:Hr(le),L=new ae(Y,D+"leave",V,a,F),L.target=Be,L.relatedTarget=B,Y=null,ma(F)===N&&(ae=new ae(O,D+"enter",le,a,F),ae.target=B,ae.relatedTarget=Be,Y=ae),Be=Y,V&&le)t:{for(ae=V,O=le,D=0,B=ae;B;B=Za(B))D++;for(B=0,Y=O;Y;Y=Za(Y))B++;for(;0<D-B;)ae=Za(ae),D--;for(;0<B-D;)O=Za(O),B--;for(;D--;){if(ae===O||O!==null&&ae===O.alternate)break t;ae=Za(ae),O=Za(O)}ae=null}else ae=null;V!==null&&j0(q,L,V,ae,!1),le!==null&&Be!==null&&j0(q,Be,le,ae,!0)}}e:{if(L=N?Hr(N):window,V=L.nodeName&&L.nodeName.toLowerCase(),V==="select"||V==="input"&&L.type==="file")var J=Fm;else if(Hm(L))if(Ym)J=HS;else{J=_S;var ge=VS}else V=L.nodeName,!V||V.toLowerCase()!=="input"||L.type!=="checkbox"&&L.type!=="radio"?N&&zu(N.elementType)&&(J=Fm):J=US;if(J&&(J=J(t,N))){Pm(q,J,a,F);break e}ge&&ge(t,L,N),t==="focusout"&&N&&L.type==="number"&&N.memoizedProps.value!=null&&Cu(L,"number",L.value)}switch(ge=N?Hr(N):window,t){case"focusin":(Hm(ge)||ge.contentEditable==="true")&&(Ta=ge,Yu=N,Qr=null);break;case"focusout":Qr=Yu=Ta=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,Wm(q,a,F);break;case"selectionchange":if(FS)break;case"keydown":case"keyup":Wm(q,a,F)}var te;if(Uu)e:{switch(t){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else ja?_m(t,a)&&(se="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(se="onCompositionStart");se&&(Nm&&a.locale!=="ko"&&(ja||se!=="onCompositionStart"?se==="onCompositionEnd"&&ja&&(te=Dm()):(ri=F,Bu="value"in ri?ri.value:ri.textContent,ja=!0)),ge=vl(N,se),0<ge.length&&(se=new km(se,t,null,a,F),q.push({event:se,listeners:ge}),te?se.data=te:(te=Um(a),te!==null&&(se.data=te)))),(te=OS?kS(t,a):BS(t,a))&&(se=vl(N,"onBeforeInput"),0<se.length&&(ge=new km("onBeforeInput","beforeinput",null,a,F),q.push({event:ge,listeners:se}),ge.data=te)),T3(q,t,N,a,F)}w0(q,n)})}function To(t,n,a){return{instance:t,listener:n,currentTarget:a}}function vl(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Pr(t,a),u!=null&&s.unshift(To(t,u,h)),u=Pr(t,n),u!=null&&s.push(To(t,u,h))),t.tag===3)return s;t=t.return}return[]}function Za(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function j0(t,n,a,s,u){for(var h=n._reactName,x=[];a!==null&&a!==s;){var S=a,A=S.alternate,N=S.stateNode;if(S=S.tag,A!==null&&A===s)break;S!==5&&S!==26&&S!==27||N===null||(A=N,u?(N=Pr(a,h),N!=null&&x.unshift(To(a,N,A))):u||(N=Pr(a,h),N!=null&&x.push(To(a,N,A)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var C3=/\r\n?/g,z3=/\u0000|\uFFFD/g;function T0(t){return(typeof t=="string"?t:""+t).replace(C3,`
`).replace(z3,"")}function A0(t,n){return n=T0(n),T0(t)===n}function bl(){}function ke(t,n,a,s,u,h){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Sa(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Sa(t,""+s);break;case"className":Ts(t,"class",s);break;case"tabIndex":Ts(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ts(t,a,s);break;case"style":Rm(t,s,h);break;case"data":if(n!=="object"){Ts(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Rs(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&ke(t,n,"name",u.name,u,null),ke(t,n,"formEncType",u.formEncType,u,null),ke(t,n,"formMethod",u.formMethod,u,null),ke(t,n,"formTarget",u.formTarget,u,null)):(ke(t,n,"encType",u.encType,u,null),ke(t,n,"method",u.method,u,null),ke(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Rs(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=bl);break;case"onScroll":s!=null&&ve("scroll",t);break;case"onScrollEnd":s!=null&&ve("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Rs(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":ve("beforetoggle",t),ve("toggle",t),js(t,"popover",s);break;case"xlinkActuate":Nn(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Nn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Nn(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Nn(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Nn(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Nn(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Nn(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Nn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Nn(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":js(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=oS.get(a)||a,js(t,a,s))}}function mf(t,n,a,s,u,h){switch(a){case"style":Rm(t,s,h);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Sa(t,s):(typeof s=="number"||typeof s=="bigint")&&Sa(t,""+s);break;case"onScroll":s!=null&&ve("scroll",t);break;case"onScrollEnd":s!=null&&ve("scrollend",t);break;case"onClick":s!=null&&(t.onclick=bl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ym.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=t[zt]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof s=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break e}a in t?t[a]=s:s===!0?t.setAttribute(a,""):js(t,a,s)}}}function xt(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",t),ve("load",t);var s=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var x=a[h];if(x!=null)switch(h){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:ke(t,n,h,x,a,null)}}u&&ke(t,n,"srcSet",a.srcSet,a,null),s&&ke(t,n,"src",a.src,a,null);return;case"input":ve("invalid",t);var S=h=x=u=null,A=null,N=null;for(s in a)if(a.hasOwnProperty(s)){var F=a[s];if(F!=null)switch(s){case"name":u=F;break;case"type":x=F;break;case"checked":A=F;break;case"defaultChecked":N=F;break;case"value":h=F;break;case"defaultValue":S=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(o(137,n));break;default:ke(t,n,s,F,a,null)}}jm(t,h,S,A,N,x,u,!1),As(t);return;case"select":ve("invalid",t),s=x=h=null;for(u in a)if(a.hasOwnProperty(u)&&(S=a[u],S!=null))switch(u){case"value":h=S;break;case"defaultValue":x=S;break;case"multiple":s=S;default:ke(t,n,u,S,a,null)}n=h,a=x,t.multiple=!!s,n!=null?ba(t,!!s,n,!1):a!=null&&ba(t,!!s,a,!0);return;case"textarea":ve("invalid",t),h=u=s=null;for(x in a)if(a.hasOwnProperty(x)&&(S=a[x],S!=null))switch(x){case"value":s=S;break;case"defaultValue":u=S;break;case"children":h=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(o(91));break;default:ke(t,n,x,S,a,null)}Am(t,s,u,h),As(t);return;case"option":for(A in a)if(a.hasOwnProperty(A)&&(s=a[A],s!=null))switch(A){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:ke(t,n,A,s,a,null)}return;case"dialog":ve("beforetoggle",t),ve("toggle",t),ve("cancel",t),ve("close",t);break;case"iframe":case"object":ve("load",t);break;case"video":case"audio":for(s=0;s<jo.length;s++)ve(jo[s],t);break;case"image":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"embed":case"source":case"link":ve("error",t),ve("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in a)if(a.hasOwnProperty(N)&&(s=a[N],s!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:ke(t,n,N,s,a,null)}return;default:if(zu(n)){for(F in a)a.hasOwnProperty(F)&&(s=a[F],s!==void 0&&mf(t,n,F,s,a,void 0));return}}for(S in a)a.hasOwnProperty(S)&&(s=a[S],s!=null&&ke(t,n,S,s,a,null))}function D3(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,x=null,S=null,A=null,N=null,F=null;for(V in a){var q=a[V];if(a.hasOwnProperty(V)&&q!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":A=q;default:s.hasOwnProperty(V)||ke(t,n,V,null,s,q)}}for(var L in s){var V=s[L];if(q=a[L],s.hasOwnProperty(L)&&(V!=null||q!=null))switch(L){case"type":h=V;break;case"name":u=V;break;case"checked":N=V;break;case"defaultChecked":F=V;break;case"value":x=V;break;case"defaultValue":S=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(o(137,n));break;default:V!==q&&ke(t,n,L,V,s,q)}}Ru(t,x,S,A,N,F,h,u);return;case"select":V=x=S=L=null;for(h in a)if(A=a[h],a.hasOwnProperty(h)&&A!=null)switch(h){case"value":break;case"multiple":V=A;default:s.hasOwnProperty(h)||ke(t,n,h,null,s,A)}for(u in s)if(h=s[u],A=a[u],s.hasOwnProperty(u)&&(h!=null||A!=null))switch(u){case"value":L=h;break;case"defaultValue":S=h;break;case"multiple":x=h;default:h!==A&&ke(t,n,u,h,s,A)}n=S,a=x,s=V,L!=null?ba(t,!!a,L,!1):!!s!=!!a&&(n!=null?ba(t,!!a,n,!0):ba(t,!!a,a?[]:"",!1));return;case"textarea":V=L=null;for(S in a)if(u=a[S],a.hasOwnProperty(S)&&u!=null&&!s.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:ke(t,n,S,null,s,u)}for(x in s)if(u=s[x],h=a[x],s.hasOwnProperty(x)&&(u!=null||h!=null))switch(x){case"value":L=u;break;case"defaultValue":V=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:u!==h&&ke(t,n,x,u,s,h)}Tm(t,L,V);return;case"option":for(var le in a)if(L=a[le],a.hasOwnProperty(le)&&L!=null&&!s.hasOwnProperty(le))switch(le){case"selected":t.selected=!1;break;default:ke(t,n,le,null,s,L)}for(A in s)if(L=s[A],V=a[A],s.hasOwnProperty(A)&&L!==V&&(L!=null||V!=null))switch(A){case"selected":t.selected=L&&typeof L!="function"&&typeof L!="symbol";break;default:ke(t,n,A,L,s,V)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)L=a[ae],a.hasOwnProperty(ae)&&L!=null&&!s.hasOwnProperty(ae)&&ke(t,n,ae,null,s,L);for(N in s)if(L=s[N],V=a[N],s.hasOwnProperty(N)&&L!==V&&(L!=null||V!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(o(137,n));break;default:ke(t,n,N,L,s,V)}return;default:if(zu(n)){for(var Be in a)L=a[Be],a.hasOwnProperty(Be)&&L!==void 0&&!s.hasOwnProperty(Be)&&mf(t,n,Be,void 0,s,L);for(F in s)L=s[F],V=a[F],!s.hasOwnProperty(F)||L===V||L===void 0&&V===void 0||mf(t,n,F,L,s,V);return}}for(var O in a)L=a[O],a.hasOwnProperty(O)&&L!=null&&!s.hasOwnProperty(O)&&ke(t,n,O,null,s,L);for(q in s)L=s[q],V=a[q],!s.hasOwnProperty(q)||L===V||L==null&&V==null||ke(t,n,q,L,s,V)}var gf=null,yf=null;function Sl(t){return t.nodeType===9?t:t.ownerDocument}function E0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function R0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function xf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var vf=null;function M3(){var t=window.event;return t&&t.type==="popstate"?t===vf?!1:(vf=t,!0):(vf=null,!1)}var C0=typeof setTimeout=="function"?setTimeout:void 0,O3=typeof clearTimeout=="function"?clearTimeout:void 0,z0=typeof Promise=="function"?Promise:void 0,k3=typeof queueMicrotask=="function"?queueMicrotask:typeof z0<"u"?function(t){return z0.resolve(null).then(t).catch(B3)}:C0;function B3(t){setTimeout(function(){throw t})}function Si(t){return t==="head"}function D0(t,n){var a=n,s=0,u=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<s&&8>s){a=s;var x=t.ownerDocument;if(a&1&&Ao(x.documentElement),a&2&&Ao(x.body),a&4)for(a=x.head,Ao(a),x=a.firstChild;x;){var S=x.nextSibling,A=x.nodeName;x[Ur]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&x.rel.toLowerCase()==="stylesheet"||a.removeChild(x),x=S}}if(u===0){t.removeChild(h),ko(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:s=a.charCodeAt(0)-48;else s=0;a=h}while(a);ko(n)}function bf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":bf(a),ju(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function N3(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ur])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=pn(t.nextSibling),t===null)break}return null}function L3(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=pn(t.nextSibling),t===null))return null;return t}function Sf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function V3(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function pn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var wf=null;function M0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function O0(t,n,a){switch(n=Sl(a),t){case"html":if(t=n.documentElement,!t)throw Error(o(452));return t;case"head":if(t=n.head,!t)throw Error(o(453));return t;case"body":if(t=n.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function Ao(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ju(t)}var rn=new Map,k0=new Set;function wl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Qn=Z.d;Z.d={f:_3,r:U3,D:H3,C:P3,L:F3,m:Y3,X:G3,S:q3,M:X3};function _3(){var t=Qn.f(),n=hl();return t||n}function U3(t){var n=ga(t);n!==null&&n.tag===5&&n.type==="form"?ey(n):Qn.r(t)}var Qa=typeof document>"u"?null:document;function B0(t,n,a){var s=Qa;if(s&&typeof n=="string"&&n){var u=It(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),k0.has(u)||(k0.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),xt(n,"link",t),ct(n),s.head.appendChild(n)))}}function H3(t){Qn.D(t),B0("dns-prefetch",t,null)}function P3(t,n){Qn.C(t,n),B0("preconnect",t,n)}function F3(t,n,a){Qn.L(t,n,a);var s=Qa;if(s&&t&&n){var u='link[rel="preload"][as="'+It(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+It(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+It(a.imageSizes)+'"]')):u+='[href="'+It(t)+'"]';var h=u;switch(n){case"style":h=Ia(t);break;case"script":h=Wa(t)}rn.has(h)||(t=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),rn.set(h,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(Eo(h))||n==="script"&&s.querySelector(Ro(h))||(n=s.createElement("link"),xt(n,"link",t),ct(n),s.head.appendChild(n)))}}function Y3(t,n){Qn.m(t,n);var a=Qa;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+It(s)+'"][href="'+It(t)+'"]',h=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Wa(t)}if(!rn.has(h)&&(t=y({rel:"modulepreload",href:t},n),rn.set(h,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(h)))return}s=a.createElement("link"),xt(s,"link",t),ct(s),a.head.appendChild(s)}}}function q3(t,n,a){Qn.S(t,n,a);var s=Qa;if(s&&t){var u=ya(s).hoistableStyles,h=Ia(t);n=n||"default";var x=u.get(h);if(!x){var S={loading:0,preload:null};if(x=s.querySelector(Eo(h)))S.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":n},a),(a=rn.get(h))&&$f(t,a);var A=x=s.createElement("link");ct(A),xt(A,"link",t),A._p=new Promise(function(N,F){A.onload=N,A.onerror=F}),A.addEventListener("load",function(){S.loading|=1}),A.addEventListener("error",function(){S.loading|=2}),S.loading|=4,$l(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:S},u.set(h,x)}}}function G3(t,n){Qn.X(t,n);var a=Qa;if(a&&t){var s=ya(a).hoistableScripts,u=Wa(t),h=s.get(u);h||(h=a.querySelector(Ro(u)),h||(t=y({src:t,async:!0},n),(n=rn.get(u))&&jf(t,n),h=a.createElement("script"),ct(h),xt(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(u,h))}}function X3(t,n){Qn.M(t,n);var a=Qa;if(a&&t){var s=ya(a).hoistableScripts,u=Wa(t),h=s.get(u);h||(h=a.querySelector(Ro(u)),h||(t=y({src:t,async:!0,type:"module"},n),(n=rn.get(u))&&jf(t,n),h=a.createElement("script"),ct(h),xt(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(u,h))}}function N0(t,n,a,s){var u=(u=oe.current)?wl(u):null;if(!u)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ia(a.href),a=ya(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ia(a.href);var h=ya(u).hoistableStyles,x=h.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,x),(h=u.querySelector(Eo(t)))&&!h._p&&(x.instance=h,x.state.loading=5),rn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},rn.set(t,a),h||K3(u,t,a,x.state))),n&&s===null)throw Error(o(528,""));return x}if(n&&s!==null)throw Error(o(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Wa(a),a=ya(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function Ia(t){return'href="'+It(t)+'"'}function Eo(t){return'link[rel="stylesheet"]['+t+"]"}function L0(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function K3(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),xt(n,"link",a),ct(n),t.head.appendChild(n))}function Wa(t){return'[src="'+It(t)+'"]'}function Ro(t){return"script[async]"+t}function V0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+It(a.href)+'"]');if(s)return n.instance=s,ct(s),s;var u=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),ct(s),xt(s,"style",u),$l(s,a.precedence,t),n.instance=s;case"stylesheet":u=Ia(a.href);var h=t.querySelector(Eo(u));if(h)return n.state.loading|=4,n.instance=h,ct(h),h;s=L0(a),(u=rn.get(u))&&$f(s,u),h=(t.ownerDocument||t).createElement("link"),ct(h);var x=h;return x._p=new Promise(function(S,A){x.onload=S,x.onerror=A}),xt(h,"link",s),n.state.loading|=4,$l(h,a.precedence,t),n.instance=h;case"script":return h=Wa(a.src),(u=t.querySelector(Ro(h)))?(n.instance=u,ct(u),u):(s=a,(u=rn.get(h))&&(s=y({},a),jf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),ct(u),xt(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(o(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,$l(s,a.precedence,t));return n.instance}function $l(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,h=u,x=0;x<s.length;x++){var S=s[x];if(S.dataset.precedence===n)h=S;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function $f(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function jf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var jl=null;function _0(t,n,a){if(jl===null){var s=new Map,u=jl=new Map;u.set(a,s)}else u=jl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var h=a[u];if(!(h[Ur]||h[St]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(n)||"";x=t+x;var S=s.get(x);S?S.push(h):s.set(x,[h])}}return s}function U0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Z3(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function H0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Co=null;function Q3(){}function I3(t,n,a){if(Co===null)throw Error(o(475));var s=Co;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Ia(a.href),h=t.querySelector(Eo(u));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Tl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=h,ct(h);return}h=t.ownerDocument||t,a=L0(a),(u=rn.get(u))&&$f(a,u),h=h.createElement("link"),ct(h);var x=h;x._p=new Promise(function(S,A){x.onload=S,x.onerror=A}),xt(h,"link",a),n.instance=h}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Tl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function W3(){if(Co===null)throw Error(o(475));var t=Co;return t.stylesheets&&t.count===0&&Tf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Tf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Tl(){if(this.count--,this.count===0){if(this.stylesheets)Tf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Al=null;function Tf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Al=new Map,n.forEach(J3,t),Al=null,Tl.call(t))}function J3(t,n){if(!(n.state.loading&4)){var a=Al.get(t);if(a)var s=a.get(null);else{a=new Map,Al.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var x=u[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}u=n.instance,x=u.getAttribute("data-precedence"),h=a.get(x)||s,h===s&&a.set(null,u),a.set(x,u),this.count++,s=Tl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var zo={$$typeof:M,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function ew(t,n,a,s,u,h,x,S){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bu(0),this.hiddenUpdates=bu(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function P0(t,n,a,s,u,h,x,S,A,N,F,q){return t=new ew(t,n,a,x,S,A,N,q),n=1,h===!0&&(n|=24),h=Ht(3,null,null,n),t.current=h,h.stateNode=t,n=rd(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:s,isDehydrated:a,cache:n},cd(h),t}function F0(t){return t?(t=Ca,t):Ca}function Y0(t,n,a,s,u,h){u=F0(u),s.context===null?s.context=u:s.pendingContext=u,s=li(n),s.payload={element:a},h=h===void 0?null:h,h!==null&&(s.callback=h),a=ci(t,s,n),a!==null&&(Gt(a,t,n),ro(a,t,n))}function q0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Af(t,n){q0(t,n),(t=t.alternate)&&q0(t,n)}function G0(t){if(t.tag===13){var n=Ra(t,67108864);n!==null&&Gt(n,t,67108864),Af(t,67108864)}}var El=!0;function tw(t,n,a,s){var u=P.T;P.T=null;var h=Z.p;try{Z.p=2,Ef(t,n,a,s)}finally{Z.p=h,P.T=u}}function nw(t,n,a,s){var u=P.T;P.T=null;var h=Z.p;try{Z.p=8,Ef(t,n,a,s)}finally{Z.p=h,P.T=u}}function Ef(t,n,a,s){if(El){var u=Rf(s);if(u===null)pf(t,n,s,Rl,a),K0(t,s);else if(aw(u,t,n,a,s))s.stopPropagation();else if(K0(t,s),n&4&&-1<iw.indexOf(t)){for(;u!==null;){var h=ga(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=Bi(h.pendingLanes);if(x!==0){var S=h;for(S.pendingLanes|=2,S.entangledLanes|=2;x;){var A=1<<31-_t(x);S.entanglements[1]|=A,x&=~A}jn(h),(ze&6)===0&&(dl=vn()+500,$o(0))}}break;case 13:S=Ra(h,2),S!==null&&Gt(S,h,2),hl(),Af(h,2)}if(h=Rf(s),h===null&&pf(t,n,s,Rl,a),h===u)break;u=h}u!==null&&s.stopPropagation()}else pf(t,n,s,null,a)}}function Rf(t){return t=Mu(t),Cf(t)}var Rl=null;function Cf(t){if(Rl=null,t=ma(t),t!==null){var n=d(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Rl=t,null}function X0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(P4()){case sm:return 2;case lm:return 8;case bs:case F4:return 32;case cm:return 268435456;default:return 32}default:return 32}}var zf=!1,wi=null,$i=null,ji=null,Do=new Map,Mo=new Map,Ti=[],iw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function K0(t,n){switch(t){case"focusin":case"focusout":wi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":Do.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(n.pointerId)}}function Oo(t,n,a,s,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:h,targetContainers:[u]},n!==null&&(n=ga(n),n!==null&&G0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function aw(t,n,a,s,u){switch(n){case"focusin":return wi=Oo(wi,t,n,a,s,u),!0;case"dragenter":return $i=Oo($i,t,n,a,s,u),!0;case"mouseover":return ji=Oo(ji,t,n,a,s,u),!0;case"pointerover":var h=u.pointerId;return Do.set(h,Oo(Do.get(h)||null,t,n,a,s,u)),!0;case"gotpointercapture":return h=u.pointerId,Mo.set(h,Oo(Mo.get(h)||null,t,n,a,s,u)),!0}return!1}function Z0(t){var n=ma(t.target);if(n!==null){var a=d(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,I4(t.priority,function(){if(a.tag===13){var s=qt();s=Su(s);var u=Ra(a,s);u!==null&&Gt(u,a,s),Af(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Rf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Du=s,a.target.dispatchEvent(s),Du=null}else return n=ga(a),n!==null&&G0(n),t.blockedOn=a,!1;n.shift()}return!0}function Q0(t,n,a){Cl(t)&&a.delete(n)}function rw(){zf=!1,wi!==null&&Cl(wi)&&(wi=null),$i!==null&&Cl($i)&&($i=null),ji!==null&&Cl(ji)&&(ji=null),Do.forEach(Q0),Mo.forEach(Q0)}function zl(t,n){t.blockedOn===n&&(t.blockedOn=null,zf||(zf=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,rw)))}var Dl=null;function I0(t){Dl!==t&&(Dl=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Dl===t&&(Dl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Cf(s||a)===null)continue;break}var h=ga(a);h!==null&&(t.splice(n,3),n-=3,Rd(h,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function ko(t){function n(A){return zl(A,t)}wi!==null&&zl(wi,t),$i!==null&&zl($i,t),ji!==null&&zl(ji,t),Do.forEach(n),Mo.forEach(n);for(var a=0;a<Ti.length;a++){var s=Ti[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ti.length&&(a=Ti[0],a.blockedOn===null);)Z0(a),a.blockedOn===null&&Ti.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],h=a[s+1],x=u[zt]||null;if(typeof h=="function")x||I0(a);else if(x){var S=null;if(h&&h.hasAttribute("formAction")){if(u=h,x=h[zt]||null)S=x.formAction;else if(Cf(u)!==null)continue}else S=x.action;typeof S=="function"?a[s+1]=S:(a.splice(s,3),s-=3),I0(a)}}}function Df(t){this._internalRoot=t}Ml.prototype.render=Df.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(o(409));var a=n.current,s=qt();Y0(a,s,t,n,null,null)},Ml.prototype.unmount=Df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Y0(t.current,2,null,t,null,null),hl(),n[pa]=null}};function Ml(t){this._internalRoot=t}Ml.prototype.unstable_scheduleHydration=function(t){if(t){var n=pm();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ti.length&&n!==0&&n<Ti[a].priority;a++);Ti.splice(a,0,t),a===0&&Z0(t)}};var W0=i.version;if(W0!=="19.1.0")throw Error(o(527,W0,"19.1.0"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=m(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var ow={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{Lr=Ol.inject(ow),Vt=Ol}catch{}}return No.createRoot=function(t,n){if(!l(t))throw Error(o(299));var a=!1,s="",u=py,h=my,x=gy,S=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(S=n.unstable_transitionCallbacks)),n=P0(t,1,!1,null,null,a,s,u,h,x,S,null),t[pa]=n.current,hf(t),new Df(n)},No.hydrateRoot=function(t,n,a){if(!l(t))throw Error(o(299));var s=!1,u="",h=py,x=my,S=gy,A=null,N=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(S=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(A=a.unstable_transitionCallbacks),a.formState!==void 0&&(N=a.formState)),n=P0(t,1,!0,n,a??null,s,u,h,x,S,A,N),n.context=F0(null),a=n.current,s=qt(),s=Su(s),u=li(s),u.callback=null,ci(a,u,s),a=s,n.current.lanes=a,_r(n,a),jn(n),t[pa]=n.current,hf(t),new Ml(n)},No.version="19.1.0",No}var l1;function yw(){if(l1)return kf.exports;l1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(i){console.error(i)}}return e(),kf.exports=gw(),kf.exports}var xw=yw(),Lo={},c1;function vw(){if(c1)return Lo;c1=1,Object.defineProperty(Lo,"__esModule",{value:!0}),Lo.parse=f,Lo.serialize=g;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,d=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function f(w,j){const $=new d,R=w.length;if(R<2)return $;const T=(j==null?void 0:j.decode)||y;let E=0;do{const k=w.indexOf("=",E);if(k===-1)break;const M=w.indexOf(";",E),H=M===-1?R:M;if(k>H){E=w.lastIndexOf(";",k-1)+1;continue}const _=p(w,E,k),X=m(w,k,_),K=w.slice(_,X);if($[K]===void 0){let W=p(w,k+1,H),re=m(w,H,W);const $e=T(w.slice(W,re));$[K]=$e}E=H+1}while(E<R);return $}function p(w,j,$){do{const R=w.charCodeAt(j);if(R!==32&&R!==9)return j}while(++j<$);return $}function m(w,j,$){for(;j>$;){const R=w.charCodeAt(--j);if(R!==32&&R!==9)return j+1}return $}function g(w,j,$){const R=($==null?void 0:$.encode)||encodeURIComponent;if(!e.test(w))throw new TypeError(`argument name is invalid: ${w}`);const T=R(j);if(!i.test(T))throw new TypeError(`argument val is invalid: ${j}`);let E=w+"="+T;if(!$)return E;if($.maxAge!==void 0){if(!Number.isInteger($.maxAge))throw new TypeError(`option maxAge is invalid: ${$.maxAge}`);E+="; Max-Age="+$.maxAge}if($.domain){if(!r.test($.domain))throw new TypeError(`option domain is invalid: ${$.domain}`);E+="; Domain="+$.domain}if($.path){if(!o.test($.path))throw new TypeError(`option path is invalid: ${$.path}`);E+="; Path="+$.path}if($.expires){if(!b($.expires)||!Number.isFinite($.expires.valueOf()))throw new TypeError(`option expires is invalid: ${$.expires}`);E+="; Expires="+$.expires.toUTCString()}if($.httpOnly&&(E+="; HttpOnly"),$.secure&&(E+="; Secure"),$.partitioned&&(E+="; Partitioned"),$.priority)switch(typeof $.priority=="string"?$.priority.toLowerCase():void 0){case"low":E+="; Priority=Low";break;case"medium":E+="; Priority=Medium";break;case"high":E+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${$.priority}`)}if($.sameSite)switch(typeof $.sameSite=="string"?$.sameSite.toLowerCase():$.sameSite){case!0:case"strict":E+="; SameSite=Strict";break;case"lax":E+="; SameSite=Lax";break;case"none":E+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${$.sameSite}`)}return E}function y(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function b(w){return l.call(w)==="[object Date]"}return Lo}vw();var u1="popstate";function bw(e={}){function i(o,l){let{pathname:d,search:f,hash:p}=o.location;return Eh("",{pathname:d,search:f,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function r(o,l){return typeof l=="string"?l:Wo(l)}return ww(i,r,null,e)}function Ye(e,i){if(e===!1||e===null||typeof e>"u")throw new Error(i)}function Mn(e,i){if(!e){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function Sw(){return Math.random().toString(36).substring(2,10)}function d1(e,i){return{usr:e.state,key:e.key,idx:i}}function Eh(e,i,r=null,o){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof i=="string"?Cr(i):i,state:r,key:i&&i.key||o||Sw()}}function Wo({pathname:e="/",search:i="",hash:r=""}){return i&&i!=="?"&&(e+=i.charAt(0)==="?"?i:"?"+i),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Cr(e){let i={};if(e){let r=e.indexOf("#");r>=0&&(i.hash=e.substring(r),e=e.substring(0,r));let o=e.indexOf("?");o>=0&&(i.search=e.substring(o),e=e.substring(0,o)),e&&(i.pathname=e)}return i}function ww(e,i,r,o={}){let{window:l=document.defaultView,v5Compat:d=!1}=o,f=l.history,p="POP",m=null,g=y();g==null&&(g=0,f.replaceState({...f.state,idx:g},""));function y(){return(f.state||{idx:null}).idx}function b(){p="POP";let T=y(),E=T==null?null:T-g;g=T,m&&m({action:p,location:R.location,delta:E})}function w(T,E){p="PUSH";let k=Eh(R.location,T,E);g=y()+1;let M=d1(k,g),H=R.createHref(k);try{f.pushState(M,"",H)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;l.location.assign(H)}d&&m&&m({action:p,location:R.location,delta:1})}function j(T,E){p="REPLACE";let k=Eh(R.location,T,E);g=y();let M=d1(k,g),H=R.createHref(k);f.replaceState(M,"",H),d&&m&&m({action:p,location:R.location,delta:0})}function $(T){let E=l.location.origin!=="null"?l.location.origin:l.location.href,k=typeof T=="string"?T:Wo(T);return k=k.replace(/ $/,"%20"),Ye(E,`No window.location.(origin|href) available to create URL for href: ${k}`),new URL(k,E)}let R={get action(){return p},get location(){return e(l,f)},listen(T){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(u1,b),m=T,()=>{l.removeEventListener(u1,b),m=null}},createHref(T){return i(l,T)},createURL:$,encodeLocation(T){let E=$(T);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:w,replace:j,go(T){return f.go(T)}};return R}function vv(e,i,r="/"){return $w(e,i,r,!1)}function $w(e,i,r,o){let l=typeof i=="string"?Cr(i):i,d=Jn(l.pathname||"/",r);if(d==null)return null;let f=bv(e);jw(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let g=Bw(d);p=Ow(f[m],g,o)}return p}function bv(e,i=[],r=[],o=""){let l=(d,f,p)=>{let m={relativePath:p===void 0?d.path||"":p,caseSensitive:d.caseSensitive===!0,childrenIndex:f,route:d};m.relativePath.startsWith("/")&&(Ye(m.relativePath.startsWith(o),`Absolute route path "${m.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(o.length));let g=Wn([o,m.relativePath]),y=r.concat(m);d.children&&d.children.length>0&&(Ye(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),bv(d.children,i,y,g)),!(d.path==null&&!d.index)&&i.push({path:g,score:Dw(g,d.index),routesMeta:y})};return e.forEach((d,f)=>{var p;if(d.path===""||!((p=d.path)!=null&&p.includes("?")))l(d,f);else for(let m of Sv(d.path))l(d,f,m)}),i}function Sv(e){let i=e.split("/");if(i.length===0)return[];let[r,...o]=i,l=r.endsWith("?"),d=r.replace(/\?$/,"");if(o.length===0)return l?[d,""]:[d];let f=Sv(o.join("/")),p=[];return p.push(...f.map(m=>m===""?d:[d,m].join("/"))),l&&p.push(...f),p.map(m=>e.startsWith("/")&&m===""?"/":m)}function jw(e){e.sort((i,r)=>i.score!==r.score?r.score-i.score:Mw(i.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}var Tw=/^:[\w-]+$/,Aw=3,Ew=2,Rw=1,Cw=10,zw=-2,f1=e=>e==="*";function Dw(e,i){let r=e.split("/"),o=r.length;return r.some(f1)&&(o+=zw),i&&(o+=Ew),r.filter(l=>!f1(l)).reduce((l,d)=>l+(Tw.test(d)?Aw:d===""?Rw:Cw),o)}function Mw(e,i){return e.length===i.length&&e.slice(0,-1).every((o,l)=>o===i[l])?e[e.length-1]-i[i.length-1]:0}function Ow(e,i,r=!1){let{routesMeta:o}=e,l={},d="/",f=[];for(let p=0;p<o.length;++p){let m=o[p],g=p===o.length-1,y=d==="/"?i:i.slice(d.length)||"/",b=Bc({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},y),w=m.route;if(!b&&g&&r&&!o[o.length-1].route.index&&(b=Bc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!b)return null;Object.assign(l,b.params),f.push({params:l,pathname:Wn([d,b.pathname]),pathnameBase:_w(Wn([d,b.pathnameBase])),route:w}),b.pathnameBase!=="/"&&(d=Wn([d,b.pathnameBase]))}return f}function Bc(e,i){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,o]=kw(e.path,e.caseSensitive,e.end),l=i.match(r);if(!l)return null;let d=l[0],f=d.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:o.reduce((g,{paramName:y,isOptional:b},w)=>{if(y==="*"){let $=p[w]||"";f=d.slice(0,d.length-$.length).replace(/(.)\/+$/,"$1")}const j=p[w];return b&&!j?g[y]=void 0:g[y]=(j||"").replace(/%2F/g,"/"),g},{}),pathname:d,pathnameBase:f,pattern:e}}function kw(e,i=!1,r=!0){Mn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let o=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m)=>(o.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,i?void 0:"i"),o]}function Bw(e){try{return e.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Mn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),e}}function Jn(e,i){if(i==="/")return e;if(!e.toLowerCase().startsWith(i.toLowerCase()))return null;let r=i.endsWith("/")?i.length-1:i.length,o=e.charAt(r);return o&&o!=="/"?null:e.slice(r)||"/"}function Nw(e,i="/"){let{pathname:r,search:o="",hash:l=""}=typeof e=="string"?Cr(e):e;return{pathname:r?r.startsWith("/")?r:Lw(r,i):i,search:Uw(o),hash:Hw(l)}}function Lw(e,i){let r=i.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?r.length>1&&r.pop():l!=="."&&r.push(l)}),r.length>1?r.join("/"):"/"}function Vf(e,i,r,o){return`Cannot include a '${e}' character in a manually specified \`to.${i}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Vw(e){return e.filter((i,r)=>r===0||i.route.path&&i.route.path.length>0)}function wv(e){let i=Vw(e);return i.map((r,o)=>o===i.length-1?r.pathname:r.pathnameBase)}function $v(e,i,r,o=!1){let l;typeof e=="string"?l=Cr(e):(l={...e},Ye(!l.pathname||!l.pathname.includes("?"),Vf("?","pathname","search",l)),Ye(!l.pathname||!l.pathname.includes("#"),Vf("#","pathname","hash",l)),Ye(!l.search||!l.search.includes("#"),Vf("#","search","hash",l)));let d=e===""||l.pathname==="",f=d?"/":l.pathname,p;if(f==null)p=r;else{let b=i.length-1;if(!o&&f.startsWith("..")){let w=f.split("/");for(;w[0]==="..";)w.shift(),b-=1;l.pathname=w.join("/")}p=b>=0?i[b]:"/"}let m=Nw(l,p),g=f&&f!=="/"&&f.endsWith("/"),y=(d||f===".")&&r.endsWith("/");return!m.pathname.endsWith("/")&&(g||y)&&(m.pathname+="/"),m}var Wn=e=>e.join("/").replace(/\/\/+/g,"/"),_w=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Uw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Hw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Pw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var jv=["POST","PUT","PATCH","DELETE"];new Set(jv);var Fw=["GET",...jv];new Set(Fw);var zr=z.createContext(null);zr.displayName="DataRouter";var Zc=z.createContext(null);Zc.displayName="DataRouterState";var Tv=z.createContext({isTransitioning:!1});Tv.displayName="ViewTransition";var Yw=z.createContext(new Map);Yw.displayName="Fetchers";var qw=z.createContext(null);qw.displayName="Await";var On=z.createContext(null);On.displayName="Navigation";var ds=z.createContext(null);ds.displayName="Location";var kn=z.createContext({outlet:null,matches:[],isDataRoute:!1});kn.displayName="Route";var fp=z.createContext(null);fp.displayName="RouteError";function Gw(e,{relative:i}={}){Ye(fs(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:o}=z.useContext(On),{hash:l,pathname:d,search:f}=hs(e,{relative:i}),p=d;return r!=="/"&&(p=d==="/"?r:Wn([r,d])),o.createHref({pathname:p,search:f,hash:l})}function fs(){return z.useContext(ds)!=null}function ni(){return Ye(fs(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(ds).location}var Av="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ev(e){z.useContext(On).static||z.useLayoutEffect(e)}function Xw(){let{isDataRoute:e}=z.useContext(kn);return e?s6():Kw()}function Kw(){Ye(fs(),"useNavigate() may be used only in the context of a <Router> component.");let e=z.useContext(zr),{basename:i,navigator:r}=z.useContext(On),{matches:o}=z.useContext(kn),{pathname:l}=ni(),d=JSON.stringify(wv(o)),f=z.useRef(!1);return Ev(()=>{f.current=!0}),z.useCallback((m,g={})=>{if(Mn(f.current,Av),!f.current)return;if(typeof m=="number"){r.go(m);return}let y=$v(m,JSON.parse(d),l,g.relative==="path");e==null&&i!=="/"&&(y.pathname=y.pathname==="/"?i:Wn([i,y.pathname])),(g.replace?r.replace:r.push)(y,g.state,g)},[i,r,d,l,e])}z.createContext(null);function Zw(){let{matches:e}=z.useContext(kn),i=e[e.length-1];return i?i.params:{}}function hs(e,{relative:i}={}){let{matches:r}=z.useContext(kn),{pathname:o}=ni(),l=JSON.stringify(wv(r));return z.useMemo(()=>$v(e,JSON.parse(l),o,i==="path"),[e,l,o,i])}function Qw(e,i){return Rv(e,i)}function Rv(e,i,r,o){var k;Ye(fs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:d}=z.useContext(On),{matches:f}=z.useContext(kn),p=f[f.length-1],m=p?p.params:{},g=p?p.pathname:"/",y=p?p.pathnameBase:"/",b=p&&p.route;{let M=b&&b.path||"";Cv(g,!b||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let w=ni(),j;if(i){let M=typeof i=="string"?Cr(i):i;Ye(y==="/"||((k=M.pathname)==null?void 0:k.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${M.pathname}" was given in the \`location\` prop.`),j=M}else j=w;let $=j.pathname||"/",R=$;if(y!=="/"){let M=y.replace(/^\//,"").split("/");R="/"+$.replace(/^\//,"").split("/").slice(M.length).join("/")}let T=!d&&r&&r.matches&&r.matches.length>0?r.matches:vv(e,{pathname:R});Mn(b||T!=null,`No routes matched location "${j.pathname}${j.search}${j.hash}" `),Mn(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${j.pathname}${j.search}${j.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=t6(T&&T.map(M=>Object.assign({},M,{params:Object.assign({},m,M.params),pathname:Wn([y,l.encodeLocation?l.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?y:Wn([y,l.encodeLocation?l.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),f,r,o);return i&&E?z.createElement(ds.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...j},navigationType:"POP"}},E):E}function Iw(){let e=o6(),i=Pw(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:o},d={padding:"2px 4px",backgroundColor:o},f=null;return console.error("Error handled by React Router default ErrorBoundary:",e),f=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:d},"ErrorBoundary")," or"," ",z.createElement("code",{style:d},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},i),r?z.createElement("pre",{style:l},r):null,f)}var Ww=z.createElement(Iw,null),Jw=class extends z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,i){return i.location!==e.location||i.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:i.error,location:i.location,revalidation:e.revalidation||i.revalidation}}componentDidCatch(e,i){console.error("React Router caught the following error during render",e,i)}render(){return this.state.error!==void 0?z.createElement(kn.Provider,{value:this.props.routeContext},z.createElement(fp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function e6({routeContext:e,match:i,children:r}){let o=z.useContext(zr);return o&&o.static&&o.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=i.route.id),z.createElement(kn.Provider,{value:e},r)}function t6(e,i=[],r=null,o=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(i.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let l=e,d=r==null?void 0:r.errors;if(d!=null){let m=l.findIndex(g=>g.route.id&&(d==null?void 0:d[g.route.id])!==void 0);Ye(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let f=!1,p=-1;if(r)for(let m=0;m<l.length;m++){let g=l[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=m),g.route.id){let{loaderData:y,errors:b}=r,w=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!b||b[g.route.id]===void 0);if(g.route.lazy||w){f=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((m,g,y)=>{let b,w=!1,j=null,$=null;r&&(b=d&&g.route.id?d[g.route.id]:void 0,j=g.route.errorElement||Ww,f&&(p<0&&y===0?(Cv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,$=null):p===y&&(w=!0,$=g.route.hydrateFallbackElement||null)));let R=i.concat(l.slice(0,y+1)),T=()=>{let E;return b?E=j:w?E=$:g.route.Component?E=z.createElement(g.route.Component,null):g.route.element?E=g.route.element:E=m,z.createElement(e6,{match:g,routeContext:{outlet:m,matches:R,isDataRoute:r!=null},children:E})};return r&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?z.createElement(Jw,{location:r.location,revalidation:r.revalidation,component:j,error:b,children:T(),routeContext:{outlet:null,matches:R,isDataRoute:!0}}):T()},null)}function hp(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function n6(e){let i=z.useContext(zr);return Ye(i,hp(e)),i}function i6(e){let i=z.useContext(Zc);return Ye(i,hp(e)),i}function a6(e){let i=z.useContext(kn);return Ye(i,hp(e)),i}function pp(e){let i=a6(e),r=i.matches[i.matches.length-1];return Ye(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function r6(){return pp("useRouteId")}function o6(){var o;let e=z.useContext(fp),i=i6("useRouteError"),r=pp("useRouteError");return e!==void 0?e:(o=i.errors)==null?void 0:o[r]}function s6(){let{router:e}=n6("useNavigate"),i=pp("useNavigate"),r=z.useRef(!1);return Ev(()=>{r.current=!0}),z.useCallback(async(l,d={})=>{Mn(r.current,Av),r.current&&(typeof l=="number"?e.navigate(l):await e.navigate(l,{fromRouteId:i,...d}))},[e,i])}var h1={};function Cv(e,i,r){!i&&!h1[e]&&(h1[e]=!0,Mn(!1,r))}z.memo(l6);function l6({routes:e,future:i,state:r}){return Rv(e,void 0,r,i)}function mn(e){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function c6({basename:e="/",children:i=null,location:r,navigationType:o="POP",navigator:l,static:d=!1}){Ye(!fs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=e.replace(/^\/*/,"/"),p=z.useMemo(()=>({basename:f,navigator:l,static:d,future:{}}),[f,l,d]);typeof r=="string"&&(r=Cr(r));let{pathname:m="/",search:g="",hash:y="",state:b=null,key:w="default"}=r,j=z.useMemo(()=>{let $=Jn(m,f);return $==null?null:{location:{pathname:$,search:g,hash:y,state:b,key:w},navigationType:o}},[f,m,g,y,b,w,o]);return Mn(j!=null,`<Router basename="${f}"> is not able to match the URL "${m}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`),j==null?null:z.createElement(On.Provider,{value:p},z.createElement(ds.Provider,{children:i,value:j}))}function u6({children:e,location:i}){return Qw(Rh(e),i)}function Rh(e,i=[]){let r=[];return z.Children.forEach(e,(o,l)=>{if(!z.isValidElement(o))return;let d=[...i,l];if(o.type===z.Fragment){r.push.apply(r,Rh(o.props.children,d));return}Ye(o.type===mn,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!o.props.index||!o.props.children,"An index route cannot have child routes.");let f={id:o.props.id||d.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(f.children=Rh(o.props.children,d)),r.push(f)}),r}var wc="get",$c="application/x-www-form-urlencoded";function Qc(e){return e!=null&&typeof e.tagName=="string"}function d6(e){return Qc(e)&&e.tagName.toLowerCase()==="button"}function f6(e){return Qc(e)&&e.tagName.toLowerCase()==="form"}function h6(e){return Qc(e)&&e.tagName.toLowerCase()==="input"}function p6(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function m6(e,i){return e.button===0&&(!i||i==="_self")&&!p6(e)}var kl=null;function g6(){if(kl===null)try{new FormData(document.createElement("form"),0),kl=!1}catch{kl=!0}return kl}var y6=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _f(e){return e!=null&&!y6.has(e)?(Mn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${$c}"`),null):e}function x6(e,i){let r,o,l,d,f;if(f6(e)){let p=e.getAttribute("action");o=p?Jn(p,i):null,r=e.getAttribute("method")||wc,l=_f(e.getAttribute("enctype"))||$c,d=new FormData(e)}else if(d6(e)||h6(e)&&(e.type==="submit"||e.type==="image")){let p=e.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=e.getAttribute("formaction")||p.getAttribute("action");if(o=m?Jn(m,i):null,r=e.getAttribute("formmethod")||p.getAttribute("method")||wc,l=_f(e.getAttribute("formenctype"))||_f(p.getAttribute("enctype"))||$c,d=new FormData(p,e),!g6()){let{name:g,type:y,value:b}=e;if(y==="image"){let w=g?`${g}.`:"";d.append(`${w}x`,"0"),d.append(`${w}y`,"0")}else g&&d.append(g,b)}}else{if(Qc(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=wc,o=null,l=$c,f=e}return d&&l==="text/plain"&&(f=d,d=void 0),{action:o,method:r.toLowerCase(),encType:l,formData:d,body:f}}function mp(e,i){if(e===!1||e===null||typeof e>"u")throw new Error(i)}async function v6(e,i){if(e.id in i)return i[e.id];try{let r=await import(e.module);return i[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function b6(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function S6(e,i,r){let o=await Promise.all(e.map(async l=>{let d=i.routes[l.route.id];if(d){let f=await v6(d,r);return f.links?f.links():[]}return[]}));return T6(o.flat(1).filter(b6).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function p1(e,i,r,o,l,d){let f=(m,g)=>r[g]?m.route.id!==r[g].route.id:!0,p=(m,g)=>{var y;return r[g].pathname!==m.pathname||((y=r[g].route.path)==null?void 0:y.endsWith("*"))&&r[g].params["*"]!==m.params["*"]};return d==="assets"?i.filter((m,g)=>f(m,g)||p(m,g)):d==="data"?i.filter((m,g)=>{var b;let y=o.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(f(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let w=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((b=r[0])==null?void 0:b.params)||{},nextUrl:new URL(e,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function w6(e,i,{includeHydrateFallback:r}={}){return $6(e.map(o=>{let l=i.routes[o.route.id];if(!l)return[];let d=[l.module];return l.clientActionModule&&(d=d.concat(l.clientActionModule)),l.clientLoaderModule&&(d=d.concat(l.clientLoaderModule)),r&&l.hydrateFallbackModule&&(d=d.concat(l.hydrateFallbackModule)),l.imports&&(d=d.concat(l.imports)),d}).flat(1))}function $6(e){return[...new Set(e)]}function j6(e){let i={},r=Object.keys(e).sort();for(let o of r)i[o]=e[o];return i}function T6(e,i){let r=new Set;return new Set(i),e.reduce((o,l)=>{let d=JSON.stringify(j6(l));return r.has(d)||(r.add(d),o.push({key:d,link:l})),o},[])}var A6=new Set([100,101,204,205]);function E6(e,i){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname="_root.data":i&&Jn(r.pathname,i)==="/"?r.pathname=`${i.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function zv(){let e=z.useContext(zr);return mp(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function R6(){let e=z.useContext(Zc);return mp(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var gp=z.createContext(void 0);gp.displayName="FrameworkContext";function Dv(){let e=z.useContext(gp);return mp(e,"You must render this element inside a <HydratedRouter> element"),e}function C6(e,i){let r=z.useContext(gp),[o,l]=z.useState(!1),[d,f]=z.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:y,onTouchStart:b}=i,w=z.useRef(null);z.useEffect(()=>{if(e==="render"&&f(!0),e==="viewport"){let R=E=>{E.forEach(k=>{f(k.isIntersecting)})},T=new IntersectionObserver(R,{threshold:.5});return w.current&&T.observe(w.current),()=>{T.disconnect()}}},[e]),z.useEffect(()=>{if(o){let R=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(R)}}},[o]);let j=()=>{l(!0)},$=()=>{l(!1),f(!1)};return r?e!=="intent"?[d,w,{}]:[d,w,{onFocus:Vo(p,j),onBlur:Vo(m,$),onMouseEnter:Vo(g,j),onMouseLeave:Vo(y,$),onTouchStart:Vo(b,j)}]:[!1,w,{}]}function Vo(e,i){return r=>{e&&e(r),r.defaultPrevented||i(r)}}function z6({page:e,...i}){let{router:r}=zv(),o=z.useMemo(()=>vv(r.routes,e,r.basename),[r.routes,e,r.basename]);return o?z.createElement(M6,{page:e,matches:o,...i}):null}function D6(e){let{manifest:i,routeModules:r}=Dv(),[o,l]=z.useState([]);return z.useEffect(()=>{let d=!1;return S6(e,i,r).then(f=>{d||l(f)}),()=>{d=!0}},[e,i,r]),o}function M6({page:e,matches:i,...r}){let o=ni(),{manifest:l,routeModules:d}=Dv(),{basename:f}=zv(),{loaderData:p,matches:m}=R6(),g=z.useMemo(()=>p1(e,i,m,l,o,"data"),[e,i,m,l,o]),y=z.useMemo(()=>p1(e,i,m,l,o,"assets"),[e,i,m,l,o]),b=z.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let $=new Set,R=!1;if(i.forEach(E=>{var M;let k=l.routes[E.route.id];!k||!k.hasLoader||(!g.some(H=>H.route.id===E.route.id)&&E.route.id in p&&((M=d[E.route.id])!=null&&M.shouldRevalidate)||k.hasClientLoader?R=!0:$.add(E.route.id))}),$.size===0)return[];let T=E6(e,f);return R&&$.size>0&&T.searchParams.set("_routes",i.filter(E=>$.has(E.route.id)).map(E=>E.route.id).join(",")),[T.pathname+T.search]},[f,p,o,l,g,i,e,d]),w=z.useMemo(()=>w6(y,l),[y,l]),j=D6(y);return z.createElement(z.Fragment,null,b.map($=>z.createElement("link",{key:$,rel:"prefetch",as:"fetch",href:$,...r})),w.map($=>z.createElement("link",{key:$,rel:"modulepreload",href:$,...r})),j.map(({key:$,link:R})=>z.createElement("link",{key:$,...R})))}function O6(...e){return i=>{e.forEach(r=>{typeof r=="function"?r(i):r!=null&&(r.current=i)})}}var Mv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Mv&&(window.__reactRouterVersion="7.5.3")}catch{}function k6({basename:e,children:i,window:r}){let o=z.useRef();o.current==null&&(o.current=bw({window:r,v5Compat:!0}));let l=o.current,[d,f]=z.useState({action:l.action,location:l.location}),p=z.useCallback(m=>{z.startTransition(()=>f(m))},[f]);return z.useLayoutEffect(()=>l.listen(p),[l,p]),z.createElement(c6,{basename:e,children:i,location:d.location,navigationType:d.action,navigator:l})}var Ov=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ne=z.forwardRef(function({onClick:i,discover:r="render",prefetch:o="none",relative:l,reloadDocument:d,replace:f,state:p,target:m,to:g,preventScrollReset:y,viewTransition:b,...w},j){let{basename:$}=z.useContext(On),R=typeof g=="string"&&Ov.test(g),T,E=!1;if(typeof g=="string"&&R&&(T=g,Mv))try{let re=new URL(window.location.href),$e=g.startsWith("//")?new URL(re.protocol+g):new URL(g),Qe=Jn($e.pathname,$);$e.origin===re.origin&&Qe!=null?g=Qe+$e.search+$e.hash:E=!0}catch{Mn(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let k=Gw(g,{relative:l}),[M,H,_]=C6(o,w),X=V6(g,{replace:f,state:p,target:m,preventScrollReset:y,relative:l,viewTransition:b});function K(re){i&&i(re),re.defaultPrevented||X(re)}let W=z.createElement("a",{...w,..._,href:T||k,onClick:E||d?i:K,ref:O6(j,H),target:m,"data-discover":!R&&r==="render"?"true":void 0});return M&&!R?z.createElement(z.Fragment,null,W,z.createElement(z6,{page:k})):W});Ne.displayName="Link";var B6=z.forwardRef(function({"aria-current":i="page",caseSensitive:r=!1,className:o="",end:l=!1,style:d,to:f,viewTransition:p,children:m,...g},y){let b=hs(f,{relative:g.relative}),w=ni(),j=z.useContext(Zc),{navigator:$,basename:R}=z.useContext(On),T=j!=null&&F6(b)&&p===!0,E=$.encodeLocation?$.encodeLocation(b).pathname:b.pathname,k=w.pathname,M=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;r||(k=k.toLowerCase(),M=M?M.toLowerCase():null,E=E.toLowerCase()),M&&R&&(M=Jn(M,R)||M);const H=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let _=k===E||!l&&k.startsWith(E)&&k.charAt(H)==="/",X=M!=null&&(M===E||!l&&M.startsWith(E)&&M.charAt(E.length)==="/"),K={isActive:_,isPending:X,isTransitioning:T},W=_?i:void 0,re;typeof o=="function"?re=o(K):re=[o,_?"active":null,X?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let $e=typeof d=="function"?d(K):d;return z.createElement(Ne,{...g,"aria-current":W,className:re,ref:y,style:$e,to:f,viewTransition:p},typeof m=="function"?m(K):m)});B6.displayName="NavLink";var N6=z.forwardRef(({discover:e="render",fetcherKey:i,navigate:r,reloadDocument:o,replace:l,state:d,method:f=wc,action:p,onSubmit:m,relative:g,preventScrollReset:y,viewTransition:b,...w},j)=>{let $=H6(),R=P6(p,{relative:g}),T=f.toLowerCase()==="get"?"get":"post",E=typeof p=="string"&&Ov.test(p),k=M=>{if(m&&m(M),M.defaultPrevented)return;M.preventDefault();let H=M.nativeEvent.submitter,_=(H==null?void 0:H.getAttribute("formmethod"))||f;$(H||M.currentTarget,{fetcherKey:i,method:_,navigate:r,replace:l,state:d,relative:g,preventScrollReset:y,viewTransition:b})};return z.createElement("form",{ref:j,method:T,action:R,onSubmit:o?m:k,...w,"data-discover":!E&&e==="render"?"true":void 0})});N6.displayName="Form";function L6(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kv(e){let i=z.useContext(zr);return Ye(i,L6(e)),i}function V6(e,{target:i,replace:r,state:o,preventScrollReset:l,relative:d,viewTransition:f}={}){let p=Xw(),m=ni(),g=hs(e,{relative:d});return z.useCallback(y=>{if(m6(y,i)){y.preventDefault();let b=r!==void 0?r:Wo(m)===Wo(g);p(e,{replace:b,state:o,preventScrollReset:l,relative:d,viewTransition:f})}},[m,p,g,r,o,i,e,l,d,f])}var _6=0,U6=()=>`__${String(++_6)}__`;function H6(){let{router:e}=kv("useSubmit"),{basename:i}=z.useContext(On),r=r6();return z.useCallback(async(o,l={})=>{let{action:d,method:f,encType:p,formData:m,body:g}=x6(o,i);if(l.navigate===!1){let y=l.fetcherKey||U6();await e.fetch(y,r,l.action||d,{preventScrollReset:l.preventScrollReset,formData:m,body:g,formMethod:l.method||f,formEncType:l.encType||p,flushSync:l.flushSync})}else await e.navigate(l.action||d,{preventScrollReset:l.preventScrollReset,formData:m,body:g,formMethod:l.method||f,formEncType:l.encType||p,replace:l.replace,state:l.state,fromRouteId:r,flushSync:l.flushSync,viewTransition:l.viewTransition})},[e,i,r])}function P6(e,{relative:i}={}){let{basename:r}=z.useContext(On),o=z.useContext(kn);Ye(o,"useFormAction must be used inside a RouteContext");let[l]=o.matches.slice(-1),d={...hs(e||".",{relative:i})},f=ni();if(e==null){d.search=f.search;let p=new URLSearchParams(d.search),m=p.getAll("index");if(m.some(y=>y==="")){p.delete("index"),m.filter(b=>b).forEach(b=>p.append("index",b));let y=p.toString();d.search=y?`?${y}`:""}}return(!e||e===".")&&l.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(d.pathname=d.pathname==="/"?r:Wn([r,d.pathname])),Wo(d)}function F6(e,i={}){let r=z.useContext(Tv);Ye(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=kv("useViewTransitionState"),l=hs(e,{relative:i.relative});if(!r.isTransitioning)return!1;let d=Jn(r.currentLocation.pathname,o)||r.currentLocation.pathname,f=Jn(r.nextLocation.pathname,o)||r.nextLocation.pathname;return Bc(l.pathname,f)!=null||Bc(l.pathname,d)!=null}new TextEncoder;[...A6];var mt=function(){return mt=Object.assign||function(i){for(var r,o=1,l=arguments.length;o<l;o++){r=arguments[o];for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(i[d]=r[d])}return i},mt.apply(this,arguments)};function Jo(e,i,r){if(r||arguments.length===2)for(var o=0,l=i.length,d;o<l;o++)(d||!(o in i))&&(d||(d=Array.prototype.slice.call(i,0,o)),d[o]=i[o]);return e.concat(d||Array.prototype.slice.call(i))}var _e="-ms-",Go="-moz-",Re="-webkit-",Bv="comm",Ic="rule",yp="decl",Y6="@import",Nv="@keyframes",q6="@layer",Lv=Math.abs,xp=String.fromCharCode,Ch=Object.assign;function G6(e,i){return ht(e,0)^45?(((i<<2^ht(e,0))<<2^ht(e,1))<<2^ht(e,2))<<2^ht(e,3):0}function Vv(e){return e.trim()}function In(e,i){return(e=i.exec(e))?e[0]:e}function pe(e,i,r){return e.replace(i,r)}function jc(e,i,r){return e.indexOf(i,r)}function ht(e,i){return e.charCodeAt(i)|0}function $r(e,i,r){return e.slice(i,r)}function Rn(e){return e.length}function _v(e){return e.length}function Fo(e,i){return i.push(e),e}function X6(e,i){return e.map(i).join("")}function m1(e,i){return e.filter(function(r){return!In(r,i)})}var Wc=1,jr=1,Uv=0,un=0,at=0,Dr="";function Jc(e,i,r,o,l,d,f,p){return{value:e,root:i,parent:r,type:o,props:l,children:d,line:Wc,column:jr,length:f,return:"",siblings:p}}function Ei(e,i){return Ch(Jc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},i)}function Ja(e){for(;e.root;)e=Ei(e.root,{children:[e]});Fo(e,e.siblings)}function K6(){return at}function Z6(){return at=un>0?ht(Dr,--un):0,jr--,at===10&&(jr=1,Wc--),at}function yn(){return at=un<Uv?ht(Dr,un++):0,jr++,at===10&&(jr=1,Wc++),at}function sa(){return ht(Dr,un)}function Tc(){return un}function eu(e,i){return $r(Dr,e,i)}function zh(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Q6(e){return Wc=jr=1,Uv=Rn(Dr=e),un=0,[]}function I6(e){return Dr="",e}function Uf(e){return Vv(eu(un-1,Dh(e===91?e+2:e===40?e+1:e)))}function W6(e){for(;(at=sa())&&at<33;)yn();return zh(e)>2||zh(at)>3?"":" "}function J6(e,i){for(;--i&&yn()&&!(at<48||at>102||at>57&&at<65||at>70&&at<97););return eu(e,Tc()+(i<6&&sa()==32&&yn()==32))}function Dh(e){for(;yn();)switch(at){case e:return un;case 34:case 39:e!==34&&e!==39&&Dh(at);break;case 40:e===41&&Dh(e);break;case 92:yn();break}return un}function e$(e,i){for(;yn()&&e+at!==57;)if(e+at===84&&sa()===47)break;return"/*"+eu(i,un-1)+"*"+xp(e===47?e:yn())}function t$(e){for(;!zh(sa());)yn();return eu(e,un)}function n$(e){return I6(Ac("",null,null,null,[""],e=Q6(e),0,[0],e))}function Ac(e,i,r,o,l,d,f,p,m){for(var g=0,y=0,b=f,w=0,j=0,$=0,R=1,T=1,E=1,k=0,M="",H=l,_=d,X=o,K=M;T;)switch($=k,k=yn()){case 40:if($!=108&&ht(K,b-1)==58){jc(K+=pe(Uf(k),"&","&\f"),"&\f",Lv(g?p[g-1]:0))!=-1&&(E=-1);break}case 34:case 39:case 91:K+=Uf(k);break;case 9:case 10:case 13:case 32:K+=W6($);break;case 92:K+=J6(Tc()-1,7);continue;case 47:switch(sa()){case 42:case 47:Fo(i$(e$(yn(),Tc()),i,r,m),m);break;default:K+="/"}break;case 123*R:p[g++]=Rn(K)*E;case 125*R:case 59:case 0:switch(k){case 0:case 125:T=0;case 59+y:E==-1&&(K=pe(K,/\f/g,"")),j>0&&Rn(K)-b&&Fo(j>32?y1(K+";",o,r,b-1,m):y1(pe(K," ","")+";",o,r,b-2,m),m);break;case 59:K+=";";default:if(Fo(X=g1(K,i,r,g,y,l,p,M,H=[],_=[],b,d),d),k===123)if(y===0)Ac(K,i,X,X,H,d,b,p,_);else switch(w===99&&ht(K,3)===110?100:w){case 100:case 108:case 109:case 115:Ac(e,X,X,o&&Fo(g1(e,X,X,0,0,l,p,M,l,H=[],b,_),_),l,_,b,p,o?H:_);break;default:Ac(K,X,X,X,[""],_,0,p,_)}}g=y=j=0,R=E=1,M=K="",b=f;break;case 58:b=1+Rn(K),j=$;default:if(R<1){if(k==123)--R;else if(k==125&&R++==0&&Z6()==125)continue}switch(K+=xp(k),k*R){case 38:E=y>0?1:(K+="\f",-1);break;case 44:p[g++]=(Rn(K)-1)*E,E=1;break;case 64:sa()===45&&(K+=Uf(yn())),w=sa(),y=b=Rn(M=K+=t$(Tc())),k++;break;case 45:$===45&&Rn(K)==2&&(R=0)}}return d}function g1(e,i,r,o,l,d,f,p,m,g,y,b){for(var w=l-1,j=l===0?d:[""],$=_v(j),R=0,T=0,E=0;R<o;++R)for(var k=0,M=$r(e,w+1,w=Lv(T=f[R])),H=e;k<$;++k)(H=Vv(T>0?j[k]+" "+M:pe(M,/&\f/g,j[k])))&&(m[E++]=H);return Jc(e,i,r,l===0?Ic:p,m,g,y,b)}function i$(e,i,r,o){return Jc(e,i,r,Bv,xp(K6()),$r(e,2,-2),0,o)}function y1(e,i,r,o,l){return Jc(e,i,r,yp,$r(e,0,o),$r(e,o+1,-1),o,l)}function Hv(e,i,r){switch(G6(e,i)){case 5103:return Re+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Re+e+e;case 4789:return Go+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Re+e+Go+e+_e+e+e;case 5936:switch(ht(e,i+11)){case 114:return Re+e+_e+pe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Re+e+_e+pe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Re+e+_e+pe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Re+e+_e+e+e;case 6165:return Re+e+_e+"flex-"+e+e;case 5187:return Re+e+pe(e,/(\w+).+(:[^]+)/,Re+"box-$1$2"+_e+"flex-$1$2")+e;case 5443:return Re+e+_e+"flex-item-"+pe(e,/flex-|-self/g,"")+(In(e,/flex-|baseline/)?"":_e+"grid-row-"+pe(e,/flex-|-self/g,""))+e;case 4675:return Re+e+_e+"flex-line-pack"+pe(e,/align-content|flex-|-self/g,"")+e;case 5548:return Re+e+_e+pe(e,"shrink","negative")+e;case 5292:return Re+e+_e+pe(e,"basis","preferred-size")+e;case 6060:return Re+"box-"+pe(e,"-grow","")+Re+e+_e+pe(e,"grow","positive")+e;case 4554:return Re+pe(e,/([^-])(transform)/g,"$1"+Re+"$2")+e;case 6187:return pe(pe(pe(e,/(zoom-|grab)/,Re+"$1"),/(image-set)/,Re+"$1"),e,"")+e;case 5495:case 3959:return pe(e,/(image-set\([^]*)/,Re+"$1$`$1");case 4968:return pe(pe(e,/(.+:)(flex-)?(.*)/,Re+"box-pack:$3"+_e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Re+e+e;case 4200:if(!In(e,/flex-|baseline/))return _e+"grid-column-align"+$r(e,i)+e;break;case 2592:case 3360:return _e+pe(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(o,l){return i=l,In(o.props,/grid-\w+-end/)})?~jc(e+(r=r[i].value),"span",0)?e:_e+pe(e,"-start","")+e+_e+"grid-row-span:"+(~jc(r,"span",0)?In(r,/\d+/):+In(r,/\d+/)-+In(e,/\d+/))+";":_e+pe(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(o){return In(o.props,/grid-\w+-start/)})?e:_e+pe(pe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return pe(e,/(.+)-inline(.+)/,Re+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Rn(e)-1-i>6)switch(ht(e,i+1)){case 109:if(ht(e,i+4)!==45)break;case 102:return pe(e,/(.+:)(.+)-([^]+)/,"$1"+Re+"$2-$3$1"+Go+(ht(e,i+3)==108?"$3":"$2-$3"))+e;case 115:return~jc(e,"stretch",0)?Hv(pe(e,"stretch","fill-available"),i,r)+e:e}break;case 5152:case 5920:return pe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,l,d,f,p,m,g){return _e+l+":"+d+g+(f?_e+l+"-span:"+(p?m:+m-+d)+g:"")+e});case 4949:if(ht(e,i+6)===121)return pe(e,":",":"+Re)+e;break;case 6444:switch(ht(e,ht(e,14)===45?18:11)){case 120:return pe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Re+(ht(e,14)===45?"inline-":"")+"box$3$1"+Re+"$2$3$1"+_e+"$2box$3")+e;case 100:return pe(e,":",":"+_e)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return pe(e,"scroll-","scroll-snap-")+e}return e}function Nc(e,i){for(var r="",o=0;o<e.length;o++)r+=i(e[o],o,e,i)||"";return r}function a$(e,i,r,o){switch(e.type){case q6:if(e.children.length)break;case Y6:case yp:return e.return=e.return||e.value;case Bv:return"";case Nv:return e.return=e.value+"{"+Nc(e.children,o)+"}";case Ic:if(!Rn(e.value=e.props.join(",")))return""}return Rn(r=Nc(e.children,o))?e.return=e.value+"{"+r+"}":""}function r$(e){var i=_v(e);return function(r,o,l,d){for(var f="",p=0;p<i;p++)f+=e[p](r,o,l,d)||"";return f}}function o$(e){return function(i){i.root||(i=i.return)&&e(i)}}function s$(e,i,r,o){if(e.length>-1&&!e.return)switch(e.type){case yp:e.return=Hv(e.value,e.length,r);return;case Nv:return Nc([Ei(e,{value:pe(e.value,"@","@"+Re)})],o);case Ic:if(e.length)return X6(r=e.props,function(l){switch(In(l,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ja(Ei(e,{props:[pe(l,/:(read-\w+)/,":"+Go+"$1")]})),Ja(Ei(e,{props:[l]})),Ch(e,{props:m1(r,o)});break;case"::placeholder":Ja(Ei(e,{props:[pe(l,/:(plac\w+)/,":"+Re+"input-$1")]})),Ja(Ei(e,{props:[pe(l,/:(plac\w+)/,":"+Go+"$1")]})),Ja(Ei(e,{props:[pe(l,/:(plac\w+)/,_e+"input-$1")]})),Ja(Ei(e,{props:[l]})),Ch(e,{props:m1(r,o)});break}return""})}}var l$={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Xt={},Tr=typeof process<"u"&&Xt!==void 0&&(Xt.REACT_APP_SC_ATTR||Xt.SC_ATTR)||"data-styled",Pv="active",Fv="data-styled-version",tu="6.1.17",vp=`/*!sc*/
`,Lc=typeof window<"u"&&"HTMLElement"in window,c$=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Xt!==void 0&&Xt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Xt.REACT_APP_SC_DISABLE_SPEEDY!==""?Xt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Xt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Xt!==void 0&&Xt.SC_DISABLE_SPEEDY!==void 0&&Xt.SC_DISABLE_SPEEDY!==""&&Xt.SC_DISABLE_SPEEDY!=="false"&&Xt.SC_DISABLE_SPEEDY),u$={},nu=Object.freeze([]),Ar=Object.freeze({});function Yv(e,i,r){return r===void 0&&(r=Ar),e.theme!==r.theme&&e.theme||i||r.theme}var qv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),d$=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,f$=/(^-|-$)/g;function x1(e){return e.replace(d$,"-").replace(f$,"")}var h$=/(a)(d)/gi,Bl=52,v1=function(e){return String.fromCharCode(e+(e>25?39:97))};function Mh(e){var i,r="";for(i=Math.abs(e);i>Bl;i=i/Bl|0)r=v1(i%Bl)+r;return(v1(i%Bl)+r).replace(h$,"$1-$2")}var Hf,Gv=5381,yr=function(e,i){for(var r=i.length;r;)e=33*e^i.charCodeAt(--r);return e},Xv=function(e){return yr(Gv,e)};function Kv(e){return Mh(Xv(e)>>>0)}function p$(e){return e.displayName||e.name||"Component"}function Pf(e){return typeof e=="string"&&!0}var Zv=typeof Symbol=="function"&&Symbol.for,Qv=Zv?Symbol.for("react.memo"):60115,m$=Zv?Symbol.for("react.forward_ref"):60112,g$={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},y$={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Iv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},x$=((Hf={})[m$]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Hf[Qv]=Iv,Hf);function b1(e){return("type"in(i=e)&&i.type.$$typeof)===Qv?Iv:"$$typeof"in e?x$[e.$$typeof]:g$;var i}var v$=Object.defineProperty,b$=Object.getOwnPropertyNames,S1=Object.getOwnPropertySymbols,S$=Object.getOwnPropertyDescriptor,w$=Object.getPrototypeOf,w1=Object.prototype;function Wv(e,i,r){if(typeof i!="string"){if(w1){var o=w$(i);o&&o!==w1&&Wv(e,o,r)}var l=b$(i);S1&&(l=l.concat(S1(i)));for(var d=b1(e),f=b1(i),p=0;p<l.length;++p){var m=l[p];if(!(m in y$||r&&r[m]||f&&m in f||d&&m in d)){var g=S$(i,m);try{v$(e,m,g)}catch{}}}}return e}function ua(e){return typeof e=="function"}function bp(e){return typeof e=="object"&&"styledComponentId"in e}function ia(e,i){return e&&i?"".concat(e," ").concat(i):e||i||""}function Oh(e,i){if(e.length===0)return"";for(var r=e[0],o=1;o<e.length;o++)r+=e[o];return r}function es(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function kh(e,i,r){if(r===void 0&&(r=!1),!r&&!es(e)&&!Array.isArray(e))return i;if(Array.isArray(i))for(var o=0;o<i.length;o++)e[o]=kh(e[o],i[o]);else if(es(i))for(var o in i)e[o]=kh(e[o],i[o]);return e}function Sp(e,i){Object.defineProperty(e,"toString",{value:i})}function da(e){for(var i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var $$=function(){function e(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return e.prototype.indexOfGroup=function(i){for(var r=0,o=0;o<i;o++)r+=this.groupSizes[o];return r},e.prototype.insertRules=function(i,r){if(i>=this.groupSizes.length){for(var o=this.groupSizes,l=o.length,d=l;i>=d;)if((d<<=1)<0)throw da(16,"".concat(i));this.groupSizes=new Uint32Array(d),this.groupSizes.set(o),this.length=d;for(var f=l;f<d;f++)this.groupSizes[f]=0}for(var p=this.indexOfGroup(i+1),m=(f=0,r.length);f<m;f++)this.tag.insertRule(p,r[f])&&(this.groupSizes[i]++,p++)},e.prototype.clearGroup=function(i){if(i<this.length){var r=this.groupSizes[i],o=this.indexOfGroup(i),l=o+r;this.groupSizes[i]=0;for(var d=o;d<l;d++)this.tag.deleteRule(o)}},e.prototype.getGroup=function(i){var r="";if(i>=this.length||this.groupSizes[i]===0)return r;for(var o=this.groupSizes[i],l=this.indexOfGroup(i),d=l+o,f=l;f<d;f++)r+="".concat(this.tag.getRule(f)).concat(vp);return r},e}(),Ec=new Map,Vc=new Map,Rc=1,Nl=function(e){if(Ec.has(e))return Ec.get(e);for(;Vc.has(Rc);)Rc++;var i=Rc++;return Ec.set(e,i),Vc.set(i,e),i},j$=function(e,i){Rc=i+1,Ec.set(e,i),Vc.set(i,e)},T$="style[".concat(Tr,"][").concat(Fv,'="').concat(tu,'"]'),A$=new RegExp("^".concat(Tr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),E$=function(e,i,r){for(var o,l=r.split(","),d=0,f=l.length;d<f;d++)(o=l[d])&&e.registerName(i,o)},R$=function(e,i){for(var r,o=((r=i.textContent)!==null&&r!==void 0?r:"").split(vp),l=[],d=0,f=o.length;d<f;d++){var p=o[d].trim();if(p){var m=p.match(A$);if(m){var g=0|parseInt(m[1],10),y=m[2];g!==0&&(j$(y,g),E$(e,y,m[3]),e.getTag().insertRules(g,l)),l.length=0}else l.push(p)}}},$1=function(e){for(var i=document.querySelectorAll(T$),r=0,o=i.length;r<o;r++){var l=i[r];l&&l.getAttribute(Tr)!==Pv&&(R$(e,l),l.parentNode&&l.parentNode.removeChild(l))}};function C$(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Jv=function(e){var i=document.head,r=e||i,o=document.createElement("style"),l=function(p){var m=Array.from(p.querySelectorAll("style[".concat(Tr,"]")));return m[m.length-1]}(r),d=l!==void 0?l.nextSibling:null;o.setAttribute(Tr,Pv),o.setAttribute(Fv,tu);var f=C$();return f&&o.setAttribute("nonce",f),r.insertBefore(o,d),o},z$=function(){function e(i){this.element=Jv(i),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var o=document.styleSheets,l=0,d=o.length;l<d;l++){var f=o[l];if(f.ownerNode===r)return f}throw da(17)}(this.element),this.length=0}return e.prototype.insertRule=function(i,r){try{return this.sheet.insertRule(r,i),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},e.prototype.getRule=function(i){var r=this.sheet.cssRules[i];return r&&r.cssText?r.cssText:""},e}(),D$=function(){function e(i){this.element=Jv(i),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(i,r){if(i<=this.length&&i>=0){var o=document.createTextNode(r);return this.element.insertBefore(o,this.nodes[i]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},e.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},e}(),M$=function(){function e(i){this.rules=[],this.length=0}return e.prototype.insertRule=function(i,r){return i<=this.length&&(this.rules.splice(i,0,r),this.length++,!0)},e.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},e.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},e}(),j1=Lc,O$={isServer:!Lc,useCSSOMInjection:!c$},_c=function(){function e(i,r,o){i===void 0&&(i=Ar),r===void 0&&(r={});var l=this;this.options=mt(mt({},O$),i),this.gs=r,this.names=new Map(o),this.server=!!i.isServer,!this.server&&Lc&&j1&&(j1=!1,$1(this)),Sp(this,function(){return function(d){for(var f=d.getTag(),p=f.length,m="",g=function(b){var w=function(E){return Vc.get(E)}(b);if(w===void 0)return"continue";var j=d.names.get(w),$=f.getGroup(b);if(j===void 0||!j.size||$.length===0)return"continue";var R="".concat(Tr,".g").concat(b,'[id="').concat(w,'"]'),T="";j!==void 0&&j.forEach(function(E){E.length>0&&(T+="".concat(E,","))}),m+="".concat($).concat(R,'{content:"').concat(T,'"}').concat(vp)},y=0;y<p;y++)g(y);return m}(l)})}return e.registerId=function(i){return Nl(i)},e.prototype.rehydrate=function(){!this.server&&Lc&&$1(this)},e.prototype.reconstructWithOptions=function(i,r){return r===void 0&&(r=!0),new e(mt(mt({},this.options),i),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(i=function(r){var o=r.useCSSOMInjection,l=r.target;return r.isServer?new M$(l):o?new z$(l):new D$(l)}(this.options),new $$(i)));var i},e.prototype.hasNameForId=function(i,r){return this.names.has(i)&&this.names.get(i).has(r)},e.prototype.registerName=function(i,r){if(Nl(i),this.names.has(i))this.names.get(i).add(r);else{var o=new Set;o.add(r),this.names.set(i,o)}},e.prototype.insertRules=function(i,r,o){this.registerName(i,r),this.getTag().insertRules(Nl(i),o)},e.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},e.prototype.clearRules=function(i){this.getTag().clearGroup(Nl(i)),this.clearNames(i)},e.prototype.clearTag=function(){this.tag=void 0},e}(),k$=/&/g,B$=/^\s*\/\/.*$/gm;function eb(e,i){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(i," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(i," ")),r.props=r.props.map(function(o){return"".concat(i," ").concat(o)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=eb(r.children,i)),r})}function N$(e){var i,r,o,l=Ar,d=l.options,f=d===void 0?Ar:d,p=l.plugins,m=p===void 0?nu:p,g=function(w,j,$){return $.startsWith(r)&&$.endsWith(r)&&$.replaceAll(r,"").length>0?".".concat(i):w},y=m.slice();y.push(function(w){w.type===Ic&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(k$,r).replace(o,g))}),f.prefix&&y.push(s$),y.push(a$);var b=function(w,j,$,R){j===void 0&&(j=""),$===void 0&&($=""),R===void 0&&(R="&"),i=R,r=j,o=new RegExp("\\".concat(r,"\\b"),"g");var T=w.replace(B$,""),E=n$($||j?"".concat($," ").concat(j," { ").concat(T," }"):T);f.namespace&&(E=eb(E,f.namespace));var k=[];return Nc(E,r$(y.concat(o$(function(M){return k.push(M)})))),k};return b.hash=m.length?m.reduce(function(w,j){return j.name||da(15),yr(w,j.name)},Gv).toString():"",b}var L$=new _c,Bh=N$(),tb=pt.createContext({shouldForwardProp:void 0,styleSheet:L$,stylis:Bh});tb.Consumer;pt.createContext(void 0);function Nh(){return z.useContext(tb)}var V$=function(){function e(i,r){var o=this;this.inject=function(l,d){d===void 0&&(d=Bh);var f=o.name+d.hash;l.hasNameForId(o.id,f)||l.insertRules(o.id,f,d(o.rules,f,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=r,Sp(this,function(){throw da(12,String(o.name))})}return e.prototype.getName=function(i){return i===void 0&&(i=Bh),this.name+i.hash},e}(),_$=function(e){return e>="A"&&e<="Z"};function T1(e){for(var i="",r=0;r<e.length;r++){var o=e[r];if(r===1&&o==="-"&&e[0]==="-")return e;_$(o)?i+="-"+o.toLowerCase():i+=o}return i.startsWith("ms-")?"-"+i:i}var nb=function(e){return e==null||e===!1||e===""},ib=function(e){var i,r,o=[];for(var l in e){var d=e[l];e.hasOwnProperty(l)&&!nb(d)&&(Array.isArray(d)&&d.isCss||ua(d)?o.push("".concat(T1(l),":"),d,";"):es(d)?o.push.apply(o,Jo(Jo(["".concat(l," {")],ib(d),!1),["}"],!1)):o.push("".concat(T1(l),": ").concat((i=l,(r=d)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||i in l$||i.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return o};function zi(e,i,r,o){if(nb(e))return[];if(bp(e))return[".".concat(e.styledComponentId)];if(ua(e)){if(!ua(d=e)||d.prototype&&d.prototype.isReactComponent||!i)return[e];var l=e(i);return zi(l,i,r,o)}var d;return e instanceof V$?r?(e.inject(r,o),[e.getName(o)]):[e]:es(e)?ib(e):Array.isArray(e)?Array.prototype.concat.apply(nu,e.map(function(f){return zi(f,i,r,o)})):[e.toString()]}function ab(e){for(var i=0;i<e.length;i+=1){var r=e[i];if(ua(r)&&!bp(r))return!1}return!0}var U$=Xv(tu),H$=function(){function e(i,r,o){this.rules=i,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&ab(i),this.componentId=r,this.baseHash=yr(U$,r),this.baseStyle=o,_c.registerId(r)}return e.prototype.generateAndInjectStyles=function(i,r,o){var l=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,r,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))l=ia(l,this.staticRulesId);else{var d=Oh(zi(this.rules,i,r,o)),f=Mh(yr(this.baseHash,d)>>>0);if(!r.hasNameForId(this.componentId,f)){var p=o(d,".".concat(f),void 0,this.componentId);r.insertRules(this.componentId,f,p)}l=ia(l,f),this.staticRulesId=f}else{for(var m=yr(this.baseHash,o.hash),g="",y=0;y<this.rules.length;y++){var b=this.rules[y];if(typeof b=="string")g+=b;else if(b){var w=Oh(zi(b,i,r,o));m=yr(m,w+y),g+=w}}if(g){var j=Mh(m>>>0);r.hasNameForId(this.componentId,j)||r.insertRules(this.componentId,j,o(g,".".concat(j),void 0,this.componentId)),l=ia(l,j)}}return l},e}(),ts=pt.createContext(void 0);ts.Consumer;function P$(e){var i=pt.useContext(ts),r=z.useMemo(function(){return function(o,l){if(!o)throw da(14);if(ua(o)){var d=o(l);return d}if(Array.isArray(o)||typeof o!="object")throw da(8);return l?mt(mt({},l),o):o}(e.theme,i)},[e.theme,i]);return e.children?pt.createElement(ts.Provider,{value:r},e.children):null}var Ff={};function F$(e,i,r){var o=bp(e),l=e,d=!Pf(e),f=i.attrs,p=f===void 0?nu:f,m=i.componentId,g=m===void 0?function(H,_){var X=typeof H!="string"?"sc":x1(H);Ff[X]=(Ff[X]||0)+1;var K="".concat(X,"-").concat(Kv(tu+X+Ff[X]));return _?"".concat(_,"-").concat(K):K}(i.displayName,i.parentComponentId):m,y=i.displayName,b=y===void 0?function(H){return Pf(H)?"styled.".concat(H):"Styled(".concat(p$(H),")")}(e):y,w=i.displayName&&i.componentId?"".concat(x1(i.displayName),"-").concat(i.componentId):i.componentId||g,j=o&&l.attrs?l.attrs.concat(p).filter(Boolean):p,$=i.shouldForwardProp;if(o&&l.shouldForwardProp){var R=l.shouldForwardProp;if(i.shouldForwardProp){var T=i.shouldForwardProp;$=function(H,_){return R(H,_)&&T(H,_)}}else $=R}var E=new H$(r,w,o?l.componentStyle:void 0);function k(H,_){return function(X,K,W){var re=X.attrs,$e=X.componentStyle,Qe=X.defaultProps,Ie=X.foldedComponentIds,dn=X.styledComponentId,Kt=X.target,rt=pt.useContext(ts),P=Nh(),Z=X.shouldForwardProp||P.shouldForwardProp,ee=Yv(K,rt,Qe)||Ar,de=function(ye,oe,lt){for(var Ee,bt=mt(mt({},oe),{className:void 0,theme:lt}),ki=0;ki<ye.length;ki+=1){var Bn=ua(Ee=ye[ki])?Ee(bt):Ee;for(var Zt in Bn)bt[Zt]=Zt==="className"?ia(bt[Zt],Bn[Zt]):Zt==="style"?mt(mt({},bt[Zt]),Bn[Zt]):Bn[Zt]}return oe.className&&(bt.className=ia(bt.className,oe.className)),bt}(re,K,ee),C=de.as||Kt,G={};for(var Q in de)de[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&de.theme===ee||(Q==="forwardedAs"?G.as=de.forwardedAs:Z&&!Z(Q,C)||(G[Q]=de[Q]));var I=function(ye,oe){var lt=Nh(),Ee=ye.generateAndInjectStyles(oe,lt.styleSheet,lt.stylis);return Ee}($e,de),ne=ia(Ie,dn);return I&&(ne+=" "+I),de.className&&(ne+=" "+de.className),G[Pf(C)&&!qv.has(C)?"class":"className"]=ne,W&&(G.ref=W),z.createElement(C,G)}(M,H,_)}k.displayName=b;var M=pt.forwardRef(k);return M.attrs=j,M.componentStyle=E,M.displayName=b,M.shouldForwardProp=$,M.foldedComponentIds=o?ia(l.foldedComponentIds,l.styledComponentId):"",M.styledComponentId=w,M.target=o?l.target:e,Object.defineProperty(M,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(H){this._foldedDefaultProps=o?function(_){for(var X=[],K=1;K<arguments.length;K++)X[K-1]=arguments[K];for(var W=0,re=X;W<re.length;W++)kh(_,re[W],!0);return _}({},l.defaultProps,H):H}}),Sp(M,function(){return".".concat(M.styledComponentId)}),d&&Wv(M,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),M}function A1(e,i){for(var r=[e[0]],o=0,l=i.length;o<l;o+=1)r.push(i[o],e[o+1]);return r}var E1=function(e){return Object.assign(e,{isCss:!0})};function be(e){for(var i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];if(ua(e)||es(e))return E1(zi(A1(nu,Jo([e],i,!0))));var o=e;return i.length===0&&o.length===1&&typeof o[0]=="string"?zi(o):E1(zi(A1(o,i)))}function Lh(e,i,r){if(r===void 0&&(r=Ar),!i)throw da(1,i);var o=function(l){for(var d=[],f=1;f<arguments.length;f++)d[f-1]=arguments[f];return e(i,r,be.apply(void 0,Jo([l],d,!1)))};return o.attrs=function(l){return Lh(e,i,mt(mt({},r),{attrs:Array.prototype.concat(r.attrs,l).filter(Boolean)}))},o.withConfig=function(l){return Lh(e,i,mt(mt({},r),l))},o}var rb=function(e){return Lh(F$,e)},v=rb;qv.forEach(function(e){v[e]=rb(e)});var Y$=function(){function e(i,r){this.rules=i,this.componentId=r,this.isStatic=ab(i),_c.registerId(this.componentId+1)}return e.prototype.createStyles=function(i,r,o,l){var d=l(Oh(zi(this.rules,r,o,l)),""),f=this.componentId+i;o.insertRules(f,f,d)},e.prototype.removeStyles=function(i,r){r.clearRules(this.componentId+i)},e.prototype.renderStyles=function(i,r,o,l){i>2&&_c.registerId(this.componentId+i),this.removeStyles(i,o),this.createStyles(i,r,o,l)},e}();function q$(e){for(var i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];var o=be.apply(void 0,Jo([e],i,!1)),l="sc-global-".concat(Kv(JSON.stringify(o))),d=new Y$(o,l),f=function(m){var g=Nh(),y=pt.useContext(ts),b=pt.useRef(g.styleSheet.allocateGSInstance(l)).current;return g.styleSheet.server&&p(b,m,g.styleSheet,y,g.stylis),pt.useLayoutEffect(function(){if(!g.styleSheet.server)return p(b,m,g.styleSheet,y,g.stylis),function(){return d.removeStyles(b,g.styleSheet)}},[b,m,g.styleSheet,y,g.stylis]),null};function p(m,g,y,b,w){if(d.isStatic)d.renderStyles(m,u$,y,w);else{var j=mt(mt({},g),{theme:Yv(g,b,f.defaultProps)});d.renderStyles(m,j,y,w)}}return pt.memo(f)}const G$=q$`
  /* Fonts are imported in index.html */

  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Set core body defaults */
  html {
    scroll-behavior: smooth;
    font-size: 16px;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({theme:e})=>e.typography.fontFamily.body};
    background-color: ${({theme:e})=>e.colors.offWhite};
    color: ${({theme:e})=>e.colors.charcoal};
    line-height: ${({theme:e})=>e.typography.lineHeight.normal};
    min-height: 100vh;
    width: 100vw;
    max-width: 100%;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    line-height: ${({theme:e})=>e.typography.lineHeight.tight};
    margin-bottom: ${({theme:e})=>e.spacing[4]};
    color: ${({theme:e})=>e.colors.primary};
  }

  h1 {
    font-size: ${({theme:e})=>e.typography.fontSize["5xl"]};

    @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
      font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
    }
  }

  h2 {
    font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};

    @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
      font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
    }
  }

  h3 {
    font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};

    @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
      font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
    }
  }

  h4 {
    font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  }

  h5 {
    font-size: ${({theme:e})=>e.typography.fontSize.xl};
  }

  h6 {
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
  }

  p {
    margin-bottom: ${({theme:e})=>e.spacing[4]};
    font-size: ${({theme:e})=>e.typography.fontSize.base};
  }

  a {
    color: ${({theme:e})=>e.colors.primary};
    text-decoration: none;
    transition: color ${({theme:e})=>e.animation.normal} ease;

    &:hover {
      color: ${({theme:e})=>e.colors.accent};
    }
  }

  /* Lists */
  ul, ol {
    padding-left: ${({theme:e})=>e.spacing[6]};
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }

  li {
    margin-bottom: ${({theme:e})=>e.spacing[2]};
  }

  /* Images */
  img {
    max-width: 100%;
    display: block;
  }

  /* Buttons */
  button {
    font-family: ${({theme:e})=>e.typography.fontFamily.body};
    cursor: pointer;
    border: none;
    background: none;
  }

  /* Form elements */
  input, textarea, select {
    font-family: ${({theme:e})=>e.typography.fontFamily.body};
    font-size: ${({theme:e})=>e.typography.fontSize.base};
  }

  /* Utility classes */
  .container {
    width: 100vw;
    max-width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  .text-center {
    text-align: center;
  }

  .accent-text {
    font-family: ${({theme:e})=>e.typography.fontFamily.accent};
  }

  /* Scroll handling */
  .scrollable {
    overflow: auto;
    width: 100vw;
    max-width: 100%;
  }
  
  #root {
    width: 100vw;
    overflow-x: hidden;
    max-width: 100%;
    margin: 0;
    padding: 0;
  }

  /* Animations */
  @keyframes breathing {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  /* Accessibility */
  .sr-only {
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

  /* Custom cursor */
  body {
    cursor: url('/cursor.svg'), auto;
  }
`,X$={colors:{primary:"#2A5D45",primaryDark:"#1E4230",secondary:"#A4C5D6",accent:"#E8985E",accentDark:"#D07A4E",white:"#FFFFFF",offWhite:"#F8F7F4",lightGray:"#E5E5E3",mediumGray:"#B0B0B0",darkGray:"#4A4A4A",charcoal:"#2D2D2D",black:"#1A1A1A",gray:{100:"#F7F7F7",200:"#E5E5E3",300:"#D1D1D1",400:"#B0B0B0",500:"#8E8E8E",600:"#6B6B6B",700:"#4A4A4A",800:"#2D2D2D",900:"#1A1A1A"},earthBrown:"#8B6C5C",stoneTaupe:"#C2B8A3",leafGreen:"#6B9080",mountainPurple:"#9D8FB3",sunsetPink:"#E8A798",gradients:{sunrise:"linear-gradient(135deg, #F9D976 0%, #E8985E 100%)",sunset:"linear-gradient(135deg, #E8985E 0%, #9D8FB3 100%)",mountain:"linear-gradient(180deg, #A4C5D6 0%, #2A5D45 100%)",forest:"linear-gradient(135deg, #2A5D45 0%, #6B9080 100%)"}},typography:{fontFamily:{heading:"'Playfair Display', serif",body:"'Poppins', sans-serif",accent:"'Cormorant Garamond', serif"},fontSize:{xs:"0.75rem",sm:"0.875rem",base:"1rem",md:"1.125rem",lg:"1.25rem",xl:"1.5rem","2xl":"1.875rem","3xl":"2.25rem","4xl":"3rem","5xl":"3.75rem","6xl":"4.5rem"},fontWeight:{light:300,regular:400,medium:500,semibold:600,bold:700},lineHeight:{none:1,tight:1.25,snug:1.375,normal:1.5,relaxed:1.625,loose:2}},spacing:{0:"0",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",24:"6rem",32:"8rem",40:"10rem",48:"12rem",56:"14rem",64:"16rem"},borderRadius:{none:"0",sm:"0.125rem",default:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",default:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",outline:"0 0 0 3px rgba(66, 153, 225, 0.5)",none:"none"},breakpoints:{xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},animation:{fast:"0.2s",normal:"0.3s",slow:"0.5s",verySlow:"0.8s",breathing:"4s"},zIndex:{0:0,10:10,20:20,30:30,40:40,50:50,auto:"auto"}},wp=z.createContext({});function $p(e){const i=z.useRef(null);return i.current===null&&(i.current=e()),i.current}const jp=typeof window<"u",ob=jp?z.useLayoutEffect:z.useEffect,iu=z.createContext(null),Tp=z.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class K$ extends z.Component{getSnapshotBeforeUpdate(i){const r=this.props.childRef.current;if(r&&i.isPresent&&!this.props.isPresent){const o=r.offsetParent,l=o instanceof HTMLElement&&o.offsetWidth||0,d=this.props.sizeRef.current;d.height=r.offsetHeight||0,d.width=r.offsetWidth||0,d.top=r.offsetTop,d.left=r.offsetLeft,d.right=l-d.width-d.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Z$({children:e,isPresent:i,anchorX:r}){const o=z.useId(),l=z.useRef(null),d=z.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:f}=z.useContext(Tp);return z.useInsertionEffect(()=>{const{width:p,height:m,top:g,left:y,right:b}=d.current;if(i||!l.current||!p||!m)return;const w=r==="left"?`left: ${y}`:`right: ${b}`;l.current.dataset.motionPopId=o;const j=document.createElement("style");return f&&(j.nonce=f),document.head.appendChild(j),j.sheet&&j.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${m}px !important;
            ${w}px !important;
            top: ${g}px !important;
          }
        `),()=>{document.head.removeChild(j)}},[i]),c.jsx(K$,{isPresent:i,childRef:l,sizeRef:d,children:z.cloneElement(e,{ref:l})})}const Q$=({children:e,initial:i,isPresent:r,onExitComplete:o,custom:l,presenceAffectsLayout:d,mode:f,anchorX:p})=>{const m=$p(I$),g=z.useId();let y=!0,b=z.useMemo(()=>(y=!1,{id:g,initial:i,isPresent:r,custom:l,onExitComplete:w=>{m.set(w,!0);for(const j of m.values())if(!j)return;o&&o()},register:w=>(m.set(w,!1),()=>m.delete(w))}),[r,m,o]);return d&&y&&(b={...b}),z.useMemo(()=>{m.forEach((w,j)=>m.set(j,!1))},[r]),z.useEffect(()=>{!r&&!m.size&&o&&o()},[r]),f==="popLayout"&&(e=c.jsx(Z$,{isPresent:r,anchorX:p,children:e})),c.jsx(iu.Provider,{value:b,children:e})};function I$(){return new Map}function sb(e=!0){const i=z.useContext(iu);if(i===null)return[!0,null];const{isPresent:r,onExitComplete:o,register:l}=i,d=z.useId();z.useEffect(()=>{if(e)return l(d)},[e]);const f=z.useCallback(()=>e&&o&&o(d),[d,o,e]);return!r&&o?[!1,f]:[!0]}const Ll=e=>e.key||"";function R1(e){const i=[];return z.Children.forEach(e,r=>{z.isValidElement(r)&&i.push(r)}),i}const W$=({children:e,custom:i,initial:r=!0,onExitComplete:o,presenceAffectsLayout:l=!0,mode:d="sync",propagate:f=!1,anchorX:p="left"})=>{const[m,g]=sb(f),y=z.useMemo(()=>R1(e),[e]),b=f&&!m?[]:y.map(Ll),w=z.useRef(!0),j=z.useRef(y),$=$p(()=>new Map),[R,T]=z.useState(y),[E,k]=z.useState(y);ob(()=>{w.current=!1,j.current=y;for(let _=0;_<E.length;_++){const X=Ll(E[_]);b.includes(X)?$.delete(X):$.get(X)!==!0&&$.set(X,!1)}},[E,b.length,b.join("-")]);const M=[];if(y!==R){let _=[...y];for(let X=0;X<E.length;X++){const K=E[X],W=Ll(K);b.includes(W)||(_.splice(X,0,K),M.push(K))}return d==="wait"&&M.length&&(_=M),k(R1(_)),T(y),null}const{forceRender:H}=z.useContext(wp);return c.jsx(c.Fragment,{children:E.map(_=>{const X=Ll(_),K=f&&!m?!1:y===E||b.includes(X),W=()=>{if($.has(X))$.set(X,!0);else return;let re=!0;$.forEach($e=>{$e||(re=!1)}),re&&(H==null||H(),k(j.current),f&&(g==null||g()),o&&o())};return c.jsx(Q$,{isPresent:K,initial:!w.current||r?void 0:!1,custom:i,presenceAffectsLayout:l,mode:d,onExitComplete:K?void 0:W,anchorX:p,children:_},X)})})};function Ap(e,i){e.indexOf(i)===-1&&e.push(i)}function Ep(e,i){const r=e.indexOf(i);r>-1&&e.splice(r,1)}const ei=(e,i,r)=>r>i?i:r<e?e:r;let Rp=()=>{};const ti={},lb=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),cb=e=>/^0[^.\s]+$/u.test(e);function Cp(e){let i;return()=>(i===void 0&&(i=e()),i)}const cn=e=>e,J$=(e,i)=>r=>i(e(r)),ps=(...e)=>e.reduce(J$),ns=(e,i,r)=>{const o=i-e;return o===0?1:(r-e)/o};class zp{constructor(){this.subscriptions=[]}add(i){return Ap(this.subscriptions,i),()=>Ep(this.subscriptions,i)}notify(i,r,o){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](i,r,o);else for(let d=0;d<l;d++){const f=this.subscriptions[d];f&&f(i,r,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Cn=e=>e*1e3,zn=e=>e/1e3;function ub(e,i){return i?e*(1e3/i):0}const db=(e,i,r)=>(((1-3*r+3*i)*e+(3*r-6*i))*e+3*i)*e,ej=1e-7,tj=12;function nj(e,i,r,o,l){let d,f,p=0;do f=i+(r-i)/2,d=db(f,o,l)-e,d>0?r=f:i=f;while(Math.abs(d)>ej&&++p<tj);return f}function ms(e,i,r,o){if(e===i&&r===o)return cn;const l=d=>nj(d,0,1,e,r);return d=>d===0||d===1?d:db(l(d),i,o)}const fb=e=>i=>i<=.5?e(2*i)/2:(2-e(2*(1-i)))/2,hb=e=>i=>1-e(1-i),pb=ms(.33,1.53,.69,.99),Dp=hb(pb),mb=fb(Dp),gb=e=>(e*=2)<1?.5*Dp(e):.5*(2-Math.pow(2,-10*(e-1))),Mp=e=>1-Math.sin(Math.acos(e)),yb=hb(Mp),xb=fb(Mp),ij=ms(.42,0,1,1),aj=ms(0,0,.58,1),vb=ms(.42,0,.58,1),rj=e=>Array.isArray(e)&&typeof e[0]!="number",bb=e=>Array.isArray(e)&&typeof e[0]=="number",oj={linear:cn,easeIn:ij,easeInOut:vb,easeOut:aj,circIn:Mp,circInOut:xb,circOut:yb,backIn:Dp,backInOut:mb,backOut:pb,anticipate:gb},sj=e=>typeof e=="string",C1=e=>{if(bb(e)){Rp(e.length===4);const[i,r,o,l]=e;return ms(i,r,o,l)}else if(sj(e))return oj[e];return e},Vl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],z1={value:null};function lj(e,i){let r=new Set,o=new Set,l=!1,d=!1;const f=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1},m=0;function g(b){f.has(b)&&(y.schedule(b),e()),m++,b(p)}const y={schedule:(b,w=!1,j=!1)=>{const R=j&&l?r:o;return w&&f.add(b),R.has(b)||R.add(b),b},cancel:b=>{o.delete(b),f.delete(b)},process:b=>{if(p=b,l){d=!0;return}l=!0,[r,o]=[o,r],r.forEach(g),i&&z1.value&&z1.value.frameloop[i].push(m),m=0,r.clear(),l=!1,d&&(d=!1,y.process(b))}};return y}const cj=40;function Sb(e,i){let r=!1,o=!0;const l={delta:0,timestamp:0,isProcessing:!1},d=()=>r=!0,f=Vl.reduce((M,H)=>(M[H]=lj(d,i?H:void 0),M),{}),{setup:p,read:m,resolveKeyframes:g,preUpdate:y,update:b,preRender:w,render:j,postRender:$}=f,R=()=>{const M=ti.useManualTiming?l.timestamp:performance.now();r=!1,ti.useManualTiming||(l.delta=o?1e3/60:Math.max(Math.min(M-l.timestamp,cj),1)),l.timestamp=M,l.isProcessing=!0,p.process(l),m.process(l),g.process(l),y.process(l),b.process(l),w.process(l),j.process(l),$.process(l),l.isProcessing=!1,r&&i&&(o=!1,e(R))},T=()=>{r=!0,o=!0,l.isProcessing||e(R)};return{schedule:Vl.reduce((M,H)=>{const _=f[H];return M[H]=(X,K=!1,W=!1)=>(r||T(),_.schedule(X,K,W)),M},{}),cancel:M=>{for(let H=0;H<Vl.length;H++)f[Vl[H]].cancel(M)},state:l,steps:f}}const{schedule:qe,cancel:Di,state:vt,steps:Yf}=Sb(typeof requestAnimationFrame<"u"?requestAnimationFrame:cn,!0);let Cc;function uj(){Cc=void 0}const Bt={now:()=>(Cc===void 0&&Bt.set(vt.isProcessing||ti.useManualTiming?vt.timestamp:performance.now()),Cc),set:e=>{Cc=e,queueMicrotask(uj)}},wb=e=>i=>typeof i=="string"&&i.startsWith(e),Op=wb("--"),dj=wb("var(--"),kp=e=>dj(e)?fj.test(e.split("/*")[0].trim()):!1,fj=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Mr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},is={...Mr,transform:e=>ei(0,1,e)},_l={...Mr,default:1},Xo=e=>Math.round(e*1e5)/1e5,Bp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function hj(e){return e==null}const pj=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Np=(e,i)=>r=>!!(typeof r=="string"&&pj.test(r)&&r.startsWith(e)||i&&!hj(r)&&Object.prototype.hasOwnProperty.call(r,i)),$b=(e,i,r)=>o=>{if(typeof o!="string")return o;const[l,d,f,p]=o.match(Bp);return{[e]:parseFloat(l),[i]:parseFloat(d),[r]:parseFloat(f),alpha:p!==void 0?parseFloat(p):1}},mj=e=>ei(0,255,e),qf={...Mr,transform:e=>Math.round(mj(e))},aa={test:Np("rgb","red"),parse:$b("red","green","blue"),transform:({red:e,green:i,blue:r,alpha:o=1})=>"rgba("+qf.transform(e)+", "+qf.transform(i)+", "+qf.transform(r)+", "+Xo(is.transform(o))+")"};function gj(e){let i="",r="",o="",l="";return e.length>5?(i=e.substring(1,3),r=e.substring(3,5),o=e.substring(5,7),l=e.substring(7,9)):(i=e.substring(1,2),r=e.substring(2,3),o=e.substring(3,4),l=e.substring(4,5),i+=i,r+=r,o+=o,l+=l),{red:parseInt(i,16),green:parseInt(r,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const Vh={test:Np("#"),parse:gj,transform:aa.transform},gs=e=>({test:i=>typeof i=="string"&&i.endsWith(e)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${e}`}),Ri=gs("deg"),Dn=gs("%"),ce=gs("px"),yj=gs("vh"),xj=gs("vw"),D1={...Dn,parse:e=>Dn.parse(e)/100,transform:e=>Dn.transform(e*100)},xr={test:Np("hsl","hue"),parse:$b("hue","saturation","lightness"),transform:({hue:e,saturation:i,lightness:r,alpha:o=1})=>"hsla("+Math.round(e)+", "+Dn.transform(Xo(i))+", "+Dn.transform(Xo(r))+", "+Xo(is.transform(o))+")"},jt={test:e=>aa.test(e)||Vh.test(e)||xr.test(e),parse:e=>aa.test(e)?aa.parse(e):xr.test(e)?xr.parse(e):Vh.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?aa.transform(e):xr.transform(e)},vj=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function bj(e){var i,r;return isNaN(e)&&typeof e=="string"&&(((i=e.match(Bp))==null?void 0:i.length)||0)+(((r=e.match(vj))==null?void 0:r.length)||0)>0}const jb="number",Tb="color",Sj="var",wj="var(",M1="${}",$j=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function as(e){const i=e.toString(),r=[],o={color:[],number:[],var:[]},l=[];let d=0;const p=i.replace($j,m=>(jt.test(m)?(o.color.push(d),l.push(Tb),r.push(jt.parse(m))):m.startsWith(wj)?(o.var.push(d),l.push(Sj),r.push(m)):(o.number.push(d),l.push(jb),r.push(parseFloat(m))),++d,M1)).split(M1);return{values:r,split:p,indexes:o,types:l}}function Ab(e){return as(e).values}function Eb(e){const{split:i,types:r}=as(e),o=i.length;return l=>{let d="";for(let f=0;f<o;f++)if(d+=i[f],l[f]!==void 0){const p=r[f];p===jb?d+=Xo(l[f]):p===Tb?d+=jt.transform(l[f]):d+=l[f]}return d}}const jj=e=>typeof e=="number"?0:e;function Tj(e){const i=Ab(e);return Eb(e)(i.map(jj))}const Mi={test:bj,parse:Ab,createTransformer:Eb,getAnimatableNone:Tj};function Gf(e,i,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(i-e)*6*r:r<1/2?i:r<2/3?e+(i-e)*(2/3-r)*6:e}function Aj({hue:e,saturation:i,lightness:r,alpha:o}){e/=360,i/=100,r/=100;let l=0,d=0,f=0;if(!i)l=d=f=r;else{const p=r<.5?r*(1+i):r+i-r*i,m=2*r-p;l=Gf(m,p,e+1/3),d=Gf(m,p,e),f=Gf(m,p,e-1/3)}return{red:Math.round(l*255),green:Math.round(d*255),blue:Math.round(f*255),alpha:o}}function Uc(e,i){return r=>r>0?i:e}const Fe=(e,i,r)=>e+(i-e)*r,Xf=(e,i,r)=>{const o=e*e,l=r*(i*i-o)+o;return l<0?0:Math.sqrt(l)},Ej=[Vh,aa,xr],Rj=e=>Ej.find(i=>i.test(e));function O1(e){const i=Rj(e);if(!i)return!1;let r=i.parse(e);return i===xr&&(r=Aj(r)),r}const k1=(e,i)=>{const r=O1(e),o=O1(i);if(!r||!o)return Uc(e,i);const l={...r};return d=>(l.red=Xf(r.red,o.red,d),l.green=Xf(r.green,o.green,d),l.blue=Xf(r.blue,o.blue,d),l.alpha=Fe(r.alpha,o.alpha,d),aa.transform(l))},_h=new Set(["none","hidden"]);function Cj(e,i){return _h.has(e)?r=>r<=0?e:i:r=>r>=1?i:e}function zj(e,i){return r=>Fe(e,i,r)}function Lp(e){return typeof e=="number"?zj:typeof e=="string"?kp(e)?Uc:jt.test(e)?k1:Oj:Array.isArray(e)?Rb:typeof e=="object"?jt.test(e)?k1:Dj:Uc}function Rb(e,i){const r=[...e],o=r.length,l=e.map((d,f)=>Lp(d)(d,i[f]));return d=>{for(let f=0;f<o;f++)r[f]=l[f](d);return r}}function Dj(e,i){const r={...e,...i},o={};for(const l in r)e[l]!==void 0&&i[l]!==void 0&&(o[l]=Lp(e[l])(e[l],i[l]));return l=>{for(const d in o)r[d]=o[d](l);return r}}function Mj(e,i){const r=[],o={color:0,var:0,number:0};for(let l=0;l<i.values.length;l++){const d=i.types[l],f=e.indexes[d][o[d]],p=e.values[f]??0;r[l]=p,o[d]++}return r}const Oj=(e,i)=>{const r=Mi.createTransformer(i),o=as(e),l=as(i);return o.indexes.var.length===l.indexes.var.length&&o.indexes.color.length===l.indexes.color.length&&o.indexes.number.length>=l.indexes.number.length?_h.has(e)&&!l.values.length||_h.has(i)&&!o.values.length?Cj(e,i):ps(Rb(Mj(o,l),l.values),r):Uc(e,i)};function Cb(e,i,r){return typeof e=="number"&&typeof i=="number"&&typeof r=="number"?Fe(e,i,r):Lp(e)(e,i)}const kj=e=>{const i=({timestamp:r})=>e(r);return{start:()=>qe.update(i,!0),stop:()=>Di(i),now:()=>vt.isProcessing?vt.timestamp:Bt.now()}},zb=(e,i,r=10)=>{let o="";const l=Math.max(Math.round(i/r),2);for(let d=0;d<l;d++)o+=e(d/(l-1))+", ";return`linear(${o.substring(0,o.length-2)})`},Hc=2e4;function Vp(e){let i=0;const r=50;let o=e.next(i);for(;!o.done&&i<Hc;)i+=r,o=e.next(i);return i>=Hc?1/0:i}function Bj(e,i=100,r){const o=r({...e,keyframes:[0,i]}),l=Math.min(Vp(o),Hc);return{type:"keyframes",ease:d=>o.next(l*d).value/i,duration:zn(l)}}const Nj=5;function Db(e,i,r){const o=Math.max(i-Nj,0);return ub(r-e(o),i-o)}const Ke={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},B1=.001;function Lj({duration:e=Ke.duration,bounce:i=Ke.bounce,velocity:r=Ke.velocity,mass:o=Ke.mass}){let l,d,f=1-i;f=ei(Ke.minDamping,Ke.maxDamping,f),e=ei(Ke.minDuration,Ke.maxDuration,zn(e)),f<1?(l=g=>{const y=g*f,b=y*e,w=y-r,j=Uh(g,f),$=Math.exp(-b);return B1-w/j*$},d=g=>{const b=g*f*e,w=b*r+r,j=Math.pow(f,2)*Math.pow(g,2)*e,$=Math.exp(-b),R=Uh(Math.pow(g,2),f);return(-l(g)+B1>0?-1:1)*((w-j)*$)/R}):(l=g=>{const y=Math.exp(-g*e),b=(g-r)*e+1;return-.001+y*b},d=g=>{const y=Math.exp(-g*e),b=(r-g)*(e*e);return y*b});const p=5/e,m=_j(l,d,p);if(e=Cn(e),isNaN(m))return{stiffness:Ke.stiffness,damping:Ke.damping,duration:e};{const g=Math.pow(m,2)*o;return{stiffness:g,damping:f*2*Math.sqrt(o*g),duration:e}}}const Vj=12;function _j(e,i,r){let o=r;for(let l=1;l<Vj;l++)o=o-e(o)/i(o);return o}function Uh(e,i){return e*Math.sqrt(1-i*i)}const Uj=["duration","bounce"],Hj=["stiffness","damping","mass"];function N1(e,i){return i.some(r=>e[r]!==void 0)}function Pj(e){let i={velocity:Ke.velocity,stiffness:Ke.stiffness,damping:Ke.damping,mass:Ke.mass,isResolvedFromDuration:!1,...e};if(!N1(e,Hj)&&N1(e,Uj))if(e.visualDuration){const r=e.visualDuration,o=2*Math.PI/(r*1.2),l=o*o,d=2*ei(.05,1,1-(e.bounce||0))*Math.sqrt(l);i={...i,mass:Ke.mass,stiffness:l,damping:d}}else{const r=Lj(e);i={...i,...r,mass:Ke.mass},i.isResolvedFromDuration=!0}return i}function Pc(e=Ke.visualDuration,i=Ke.bounce){const r=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:i}:e;let{restSpeed:o,restDelta:l}=r;const d=r.keyframes[0],f=r.keyframes[r.keyframes.length-1],p={done:!1,value:d},{stiffness:m,damping:g,mass:y,duration:b,velocity:w,isResolvedFromDuration:j}=Pj({...r,velocity:-zn(r.velocity||0)}),$=w||0,R=g/(2*Math.sqrt(m*y)),T=f-d,E=zn(Math.sqrt(m/y)),k=Math.abs(T)<5;o||(o=k?Ke.restSpeed.granular:Ke.restSpeed.default),l||(l=k?Ke.restDelta.granular:Ke.restDelta.default);let M;if(R<1){const _=Uh(E,R);M=X=>{const K=Math.exp(-R*E*X);return f-K*(($+R*E*T)/_*Math.sin(_*X)+T*Math.cos(_*X))}}else if(R===1)M=_=>f-Math.exp(-E*_)*(T+($+E*T)*_);else{const _=E*Math.sqrt(R*R-1);M=X=>{const K=Math.exp(-R*E*X),W=Math.min(_*X,300);return f-K*(($+R*E*T)*Math.sinh(W)+_*T*Math.cosh(W))/_}}const H={calculatedDuration:j&&b||null,next:_=>{const X=M(_);if(j)p.done=_>=b;else{let K=_===0?$:0;R<1&&(K=_===0?Cn($):Db(M,_,X));const W=Math.abs(K)<=o,re=Math.abs(f-X)<=l;p.done=W&&re}return p.value=p.done?f:X,p},toString:()=>{const _=Math.min(Vp(H),Hc),X=zb(K=>H.next(_*K).value,_,30);return _+"ms "+X},toTransition:()=>{}};return H}Pc.applyToOptions=e=>{const i=Bj(e,100,Pc);return e.ease=i.ease,e.duration=Cn(i.duration),e.type="keyframes",e};function Hh({keyframes:e,velocity:i=0,power:r=.8,timeConstant:o=325,bounceDamping:l=10,bounceStiffness:d=500,modifyTarget:f,min:p,max:m,restDelta:g=.5,restSpeed:y}){const b=e[0],w={done:!1,value:b},j=W=>p!==void 0&&W<p||m!==void 0&&W>m,$=W=>p===void 0?m:m===void 0||Math.abs(p-W)<Math.abs(m-W)?p:m;let R=r*i;const T=b+R,E=f===void 0?T:f(T);E!==T&&(R=E-b);const k=W=>-R*Math.exp(-W/o),M=W=>E+k(W),H=W=>{const re=k(W),$e=M(W);w.done=Math.abs(re)<=g,w.value=w.done?E:$e};let _,X;const K=W=>{j(w.value)&&(_=W,X=Pc({keyframes:[w.value,$(w.value)],velocity:Db(M,W,w.value),damping:l,stiffness:d,restDelta:g,restSpeed:y}))};return K(0),{calculatedDuration:null,next:W=>{let re=!1;return!X&&_===void 0&&(re=!0,H(W),K(W)),_!==void 0&&W>=_?X.next(W-_):(!re&&H(W),w)}}}function Fj(e,i,r){const o=[],l=r||ti.mix||Cb,d=e.length-1;for(let f=0;f<d;f++){let p=l(e[f],e[f+1]);if(i){const m=Array.isArray(i)?i[f]||cn:i;p=ps(m,p)}o.push(p)}return o}function Yj(e,i,{clamp:r=!0,ease:o,mixer:l}={}){const d=e.length;if(Rp(d===i.length),d===1)return()=>i[0];if(d===2&&i[0]===i[1])return()=>i[1];const f=e[0]===e[1];e[0]>e[d-1]&&(e=[...e].reverse(),i=[...i].reverse());const p=Fj(i,o,l),m=p.length,g=y=>{if(f&&y<e[0])return i[0];let b=0;if(m>1)for(;b<e.length-2&&!(y<e[b+1]);b++);const w=ns(e[b],e[b+1],y);return p[b](w)};return r?y=>g(ei(e[0],e[d-1],y)):g}function qj(e,i){const r=e[e.length-1];for(let o=1;o<=i;o++){const l=ns(0,i,o);e.push(Fe(r,1,l))}}function Gj(e){const i=[0];return qj(i,e.length-1),i}function Xj(e,i){return e.map(r=>r*i)}function Kj(e,i){return e.map(()=>i||vb).splice(0,e.length-1)}function Ko({duration:e=300,keyframes:i,times:r,ease:o="easeInOut"}){const l=rj(o)?o.map(C1):C1(o),d={done:!1,value:i[0]},f=Xj(r&&r.length===i.length?r:Gj(i),e),p=Yj(f,i,{ease:Array.isArray(l)?l:Kj(i,l)});return{calculatedDuration:e,next:m=>(d.value=p(m),d.done=m>=e,d)}}const Zj=e=>e!==null;function _p(e,{repeat:i,repeatType:r="loop"},o,l=1){const d=e.filter(Zj),p=l<0||i&&r!=="loop"&&i%2===1?0:d.length-1;return!p||o===void 0?d[p]:o}const Qj={decay:Hh,inertia:Hh,tween:Ko,keyframes:Ko,spring:Pc};function Mb(e){typeof e.type=="string"&&(e.type=Qj[e.type])}class Up{constructor(){this.count=0,this.updateFinished()}get finished(){return this._finished}updateFinished(){this.count++,this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,r){return this.finished.then(i,r)}}const Ij=e=>e/100;class Ob extends Up{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:r}=this.options;if(r&&r.updatedAt!==Bt.now()&&this.tick(Bt.now()),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:o}=this.options;o&&o()},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;Mb(i);const{type:r=Ko,repeat:o=0,repeatDelay:l=0,repeatType:d,velocity:f=0}=i;let{keyframes:p}=i;const m=r||Ko;m!==Ko&&typeof p[0]!="number"&&(this.mixKeyframes=ps(Ij,Cb(p[0],p[1])),p=[0,100]);const g=m({...i,keyframes:p});d==="mirror"&&(this.mirroredGenerator=m({...i,keyframes:[...p].reverse(),velocity:-f})),g.calculatedDuration===null&&(g.calculatedDuration=Vp(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+l,this.totalDuration=this.resolvedDuration*(o+1)-l,this.generator=g}updateTime(i){const r=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=r}tick(i,r=!1){const{generator:o,totalDuration:l,mixKeyframes:d,mirroredGenerator:f,resolvedDuration:p,calculatedDuration:m}=this;if(this.startTime===null)return o.next(0);const{delay:g=0,keyframes:y,repeat:b,repeatType:w,repeatDelay:j,type:$,onUpdate:R,finalKeyframe:T}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-l/this.speed,this.startTime)),r?this.currentTime=i:this.updateTime(i);const E=this.currentTime-g*(this.playbackSpeed>=0?1:-1),k=this.playbackSpeed>=0?E<0:E>l;this.currentTime=Math.max(E,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=l);let M=this.currentTime,H=o;if(b){const W=Math.min(this.currentTime,l)/p;let re=Math.floor(W),$e=W%1;!$e&&W>=1&&($e=1),$e===1&&re--,re=Math.min(re,b+1),!!(re%2)&&(w==="reverse"?($e=1-$e,j&&($e-=j/p)):w==="mirror"&&(H=f)),M=ei(0,1,$e)*p}const _=k?{done:!1,value:y[0]}:H.next(M);d&&(_.value=d(_.value));let{done:X}=_;!k&&m!==null&&(X=this.playbackSpeed>=0?this.currentTime>=l:this.currentTime<=0);const K=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&X);return K&&$!==Hh&&(_.value=_p(y,this.options,T,this.speed)),R&&R(_.value),K&&this.finish(),_}then(i,r){return this.finished.then(i,r)}get duration(){return zn(this.calculatedDuration)}get time(){return zn(this.currentTime)}set time(i){i=Cn(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(Bt.now());const r=this.playbackSpeed!==i;this.playbackSpeed=i,r&&(this.time=zn(this.currentTime))}play(){if(this.isStopped)return;const{driver:i=kj,onPlay:r,startTime:o}=this.options;this.driver||(this.driver=i(d=>this.tick(d))),r&&r();const l=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=l):this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime||(this.startTime=o??l),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Bt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:i}=this.options;i&&i()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown()}teardown(){this.notifyFinished(),this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),i.observe(this)}}function Wj(e){for(let i=1;i<e.length;i++)e[i]??(e[i]=e[i-1])}const ra=e=>e*180/Math.PI,Ph=e=>{const i=ra(Math.atan2(e[1],e[0]));return Fh(i)},Jj={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Ph,rotateZ:Ph,skewX:e=>ra(Math.atan(e[1])),skewY:e=>ra(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Fh=e=>(e=e%360,e<0&&(e+=360),e),L1=Ph,V1=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),_1=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),e5={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:V1,scaleY:_1,scale:e=>(V1(e)+_1(e))/2,rotateX:e=>Fh(ra(Math.atan2(e[6],e[5]))),rotateY:e=>Fh(ra(Math.atan2(-e[2],e[0]))),rotateZ:L1,rotate:L1,skewX:e=>ra(Math.atan(e[4])),skewY:e=>ra(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function U1(e){return e.includes("scale")?1:0}function Yh(e,i){if(!e||e==="none")return U1(i);const r=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,l;if(r)o=e5,l=r;else{const p=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=Jj,l=p}if(!l)return U1(i);const d=o[i],f=l[1].split(",").map(n5);return typeof d=="function"?d(f):f[d]}const t5=(e,i)=>{const{transform:r="none"}=getComputedStyle(e);return Yh(r,i)};function n5(e){return parseFloat(e.trim())}const Or=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],kr=new Set(Or),H1=e=>e===Mr||e===ce,i5=new Set(["x","y","z"]),a5=Or.filter(e=>!i5.has(e));function r5(e){const i=[];return a5.forEach(r=>{const o=e.getValue(r);o!==void 0&&(i.push([r,o.get()]),o.set(r.startsWith("scale")?1:0))}),i}const Er={width:({x:e},{paddingLeft:i="0",paddingRight:r="0"})=>e.max-e.min-parseFloat(i)-parseFloat(r),height:({y:e},{paddingTop:i="0",paddingBottom:r="0"})=>e.max-e.min-parseFloat(i)-parseFloat(r),top:(e,{top:i})=>parseFloat(i),left:(e,{left:i})=>parseFloat(i),bottom:({y:e},{top:i})=>parseFloat(i)+(e.max-e.min),right:({x:e},{left:i})=>parseFloat(i)+(e.max-e.min),x:(e,{transform:i})=>Yh(i,"x"),y:(e,{transform:i})=>Yh(i,"y")};Er.translateX=Er.x;Er.translateY=Er.y;const la=new Set;let qh=!1,Gh=!1,Xh=!1;function kb(){if(Gh){const e=Array.from(la).filter(o=>o.needsMeasurement),i=new Set(e.map(o=>o.element)),r=new Map;i.forEach(o=>{const l=r5(o);l.length&&(r.set(o,l),o.render())}),e.forEach(o=>o.measureInitialState()),i.forEach(o=>{o.render();const l=r.get(o);l&&l.forEach(([d,f])=>{var p;(p=o.getValue(d))==null||p.set(f)})}),e.forEach(o=>o.measureEndState()),e.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}Gh=!1,qh=!1,la.forEach(e=>e.complete(Xh)),la.clear()}function Bb(){la.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Gh=!0)})}function o5(){Xh=!0,Bb(),kb(),Xh=!1}class Hp{constructor(i,r,o,l,d,f=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...i],this.onComplete=r,this.name=o,this.motionValue=l,this.element=d,this.isAsync=f}scheduleResolve(){this.isScheduled=!0,this.isAsync?(la.add(this),qh||(qh=!0,qe.read(Bb),qe.resolveKeyframes(kb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:r,element:o,motionValue:l}=this;if(i[0]===null){const d=l==null?void 0:l.get(),f=i[i.length-1];if(d!==void 0)i[0]=d;else if(o&&r){const p=o.readValue(r,f);p!=null&&(i[0]=p)}i[0]===void 0&&(i[0]=f),l&&d===void 0&&l.set(i[0])}Wj(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),la.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,la.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const s5=e=>e.startsWith("--");function l5(e,i,r){s5(i)?e.style.setProperty(i,r):e.style[i]=r}const c5=Cp(()=>window.ScrollTimeline!==void 0),u5={};function d5(e,i){const r=Cp(e);return()=>u5[i]??r()}const Nb=d5(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Yo=([e,i,r,o])=>`cubic-bezier(${e}, ${i}, ${r}, ${o})`,P1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Yo([0,.65,.55,1]),circOut:Yo([.55,0,1,.45]),backIn:Yo([.31,.01,.66,-.59]),backOut:Yo([.33,1.53,.69,.99])};function Lb(e,i){if(e)return typeof e=="function"?Nb()?zb(e,i):"ease-out":bb(e)?Yo(e):Array.isArray(e)?e.map(r=>Lb(r,i)||P1.easeOut):P1[e]}function f5(e,i,r,{delay:o=0,duration:l=300,repeat:d=0,repeatType:f="loop",ease:p="easeOut",times:m}={},g=void 0){const y={[i]:r};m&&(y.offset=m);const b=Lb(p,l);Array.isArray(b)&&(y.easing=b);const w={delay:o,duration:l,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:d+1,direction:f==="reverse"?"alternate":"normal"};return g&&(w.pseudoElement=g),e.animate(y,w)}function Vb(e){return typeof e=="function"&&"applyToOptions"in e}function h5({type:e,...i}){return Vb(e)&&Nb()?e.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class p5 extends Up{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,!i)return;const{element:r,name:o,keyframes:l,pseudoElement:d,allowFlatten:f=!1,finalKeyframe:p,onComplete:m}=i;this.isPseudoElement=!!d,this.allowFlatten=f,this.options=i,Rp(typeof i.type!="string");const g=h5(i);this.animation=f5(r,o,l,g,d),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!d){const y=_p(l,this.options,p,this.speed);this.updateMotionValue?this.updateMotionValue(y):l5(r,o,y),this.animation.cancel()}m==null||m(),this.notifyFinished()},this.animation.oncancel=()=>this.notifyFinished()}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var i,r;(r=(i=this.animation).finish)==null||r.call(i)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,r;this.isPseudoElement||(r=(i=this.animation).commitStyles)==null||r.call(i)}get duration(){var r,o;const i=((o=(r=this.animation.effect)==null?void 0:r.getComputedTiming)==null?void 0:o.call(r).duration)||0;return zn(Number(i))}get time(){return zn(Number(this.animation.currentTime)||0)}set time(i){this.finishedTime=null,this.animation.currentTime=Cn(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(i){this.animation.startTime=i}attachTimeline({timeline:i,observe:r}){var o;return this.allowFlatten&&((o=this.animation.effect)==null||o.updateTiming({easing:"linear"})),this.animation.onfinish=null,i&&c5()?(this.animation.timeline=i,cn):r(this)}}const _b={anticipate:gb,backInOut:mb,circInOut:xb};function m5(e){return e in _b}function g5(e){typeof e.ease=="string"&&m5(e.ease)&&(e.ease=_b[e.ease])}const F1=10;class y5 extends p5{constructor(i){g5(i),Mb(i),super(i),i.startTime&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:r,onUpdate:o,onComplete:l,element:d,...f}=this.options;if(!r)return;if(i!==void 0){r.set(i);return}const p=new Ob({...f,autoplay:!1}),m=Cn(this.finishedTime??this.time);r.setWithVelocity(p.sample(m-F1).value,p.sample(m).value,F1),p.stop()}}const Y1=(e,i)=>i==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Mi.test(e)||e==="0")&&!e.startsWith("url("));function x5(e){const i=e[0];if(e.length===1)return!0;for(let r=0;r<e.length;r++)if(e[r]!==i)return!0}function v5(e,i,r,o){const l=e[0];if(l===null)return!1;if(i==="display"||i==="visibility")return!0;const d=e[e.length-1],f=Y1(l,i),p=Y1(d,i);return!f||!p?!1:x5(e)||(r==="spring"||Vb(r))&&o}const b5=new Set(["opacity","clipPath","filter","transform"]),S5=Cp(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function w5(e){const{motionValue:i,name:r,repeatDelay:o,repeatType:l,damping:d,type:f}=e;if(!i||!i.owner||!(i.owner.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:m}=i.owner.getProps();return S5()&&r&&b5.has(r)&&(r!=="transform"||!m)&&!p&&!o&&l!=="mirror"&&d!==0&&f!=="inertia"}const $5=40;class j5 extends Up{constructor({autoplay:i=!0,delay:r=0,type:o="keyframes",repeat:l=0,repeatDelay:d=0,repeatType:f="loop",keyframes:p,name:m,motionValue:g,element:y,...b}){var $;super(),this.stop=()=>{var R,T;this._animation?(this._animation.stop(),(R=this.stopTimeline)==null||R.call(this)):(T=this.keyframeResolver)==null||T.cancel()},this.createdAt=Bt.now();const w={autoplay:i,delay:r,type:o,repeat:l,repeatDelay:d,repeatType:f,name:m,motionValue:g,element:y,...b},j=(y==null?void 0:y.KeyframeResolver)||Hp;this.keyframeResolver=new j(p,(R,T,E)=>this.onKeyframesResolved(R,T,w,!E),m,g,y),($=this.keyframeResolver)==null||$.scheduleResolve()}onKeyframesResolved(i,r,o,l){this.keyframeResolver=void 0;const{name:d,type:f,velocity:p,delay:m,isHandoff:g,onUpdate:y}=o;this.resolvedAt=Bt.now(),v5(i,d,f,p)||((ti.instantAnimations||!m)&&(y==null||y(_p(i,o,r))),i[0]=i[i.length-1],o.duration=0,o.repeat=0);const w={startTime:l?this.resolvedAt?this.resolvedAt-this.createdAt>$5?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:r,...o,keyframes:i},j=!g&&w5(w)?new y5({...w,element:w.motionValue.owner.current}):new Ob(w);j.finished.then(()=>this.notifyFinished()).catch(cn),this.pendingTimeline&&(this.stopTimeline=j.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=j}get finished(){return this._animation?this.animation.finished:this._finished}then(i,r){return this.finished.finally(i).then(()=>{})}get animation(){return this._animation||o5(),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this.animation.cancel()}}const T5=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function A5(e){const i=T5.exec(e);if(!i)return[,];const[,r,o,l]=i;return[`--${r??o}`,l]}function Ub(e,i,r=1){const[o,l]=A5(e);if(!o)return;const d=window.getComputedStyle(i).getPropertyValue(o);if(d){const f=d.trim();return lb(f)?parseFloat(f):f}return kp(l)?Ub(l,i,r+1):l}function Pp(e,i){return(e==null?void 0:e[i])??(e==null?void 0:e.default)??e}const Hb=new Set(["width","height","top","left","right","bottom",...Or]),E5={test:e=>e==="auto",parse:e=>e},Pb=e=>i=>i.test(e),Fb=[Mr,ce,Dn,Ri,xj,yj,E5],q1=e=>Fb.find(Pb(e));function R5(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||cb(e):!0}const C5=new Set(["brightness","contrast","saturate","opacity"]);function z5(e){const[i,r]=e.slice(0,-1).split("(");if(i==="drop-shadow")return e;const[o]=r.match(Bp)||[];if(!o)return e;const l=r.replace(o,"");let d=C5.has(i)?1:0;return o!==r&&(d*=100),i+"("+d+l+")"}const D5=/\b([a-z-]*)\(.*?\)/gu,Kh={...Mi,getAnimatableNone:e=>{const i=e.match(D5);return i?i.map(z5).join(" "):e}},G1={...Mr,transform:Math.round},M5={rotate:Ri,rotateX:Ri,rotateY:Ri,rotateZ:Ri,scale:_l,scaleX:_l,scaleY:_l,scaleZ:_l,skew:Ri,skewX:Ri,skewY:Ri,distance:ce,translateX:ce,translateY:ce,translateZ:ce,x:ce,y:ce,z:ce,perspective:ce,transformPerspective:ce,opacity:is,originX:D1,originY:D1,originZ:ce},Fp={borderWidth:ce,borderTopWidth:ce,borderRightWidth:ce,borderBottomWidth:ce,borderLeftWidth:ce,borderRadius:ce,radius:ce,borderTopLeftRadius:ce,borderTopRightRadius:ce,borderBottomRightRadius:ce,borderBottomLeftRadius:ce,width:ce,maxWidth:ce,height:ce,maxHeight:ce,top:ce,right:ce,bottom:ce,left:ce,padding:ce,paddingTop:ce,paddingRight:ce,paddingBottom:ce,paddingLeft:ce,margin:ce,marginTop:ce,marginRight:ce,marginBottom:ce,marginLeft:ce,backgroundPositionX:ce,backgroundPositionY:ce,...M5,zIndex:G1,fillOpacity:is,strokeOpacity:is,numOctaves:G1},O5={...Fp,color:jt,backgroundColor:jt,outlineColor:jt,fill:jt,stroke:jt,borderColor:jt,borderTopColor:jt,borderRightColor:jt,borderBottomColor:jt,borderLeftColor:jt,filter:Kh,WebkitFilter:Kh},Yb=e=>O5[e];function qb(e,i){let r=Yb(e);return r!==Kh&&(r=Mi),r.getAnimatableNone?r.getAnimatableNone(i):void 0}const k5=new Set(["auto","none","0"]);function B5(e,i,r){let o=0,l;for(;o<e.length&&!l;){const d=e[o];typeof d=="string"&&!k5.has(d)&&as(d).values.length&&(l=e[o]),o++}if(l&&r)for(const d of i)e[d]=qb(r,l)}class N5 extends Hp{constructor(i,r,o,l,d){super(i,r,o,l,d,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:r,name:o}=this;if(!r||!r.current)return;super.readKeyframes();for(let m=0;m<i.length;m++){let g=i[m];if(typeof g=="string"&&(g=g.trim(),kp(g))){const y=Ub(g,r.current);y!==void 0&&(i[m]=y),m===i.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!Hb.has(o)||i.length!==2)return;const[l,d]=i,f=q1(l),p=q1(d);if(f!==p)if(H1(f)&&H1(p))for(let m=0;m<i.length;m++){const g=i[m];typeof g=="string"&&(i[m]=parseFloat(g))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:r}=this,o=[];for(let l=0;l<i.length;l++)(i[l]===null||R5(i[l]))&&o.push(l);o.length&&B5(i,o,r)}measureInitialState(){const{element:i,unresolvedKeyframes:r,name:o}=this;if(!i||!i.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Er[o](i.measureViewportBox(),window.getComputedStyle(i.current)),r[0]=this.measuredOrigin;const l=r[r.length-1];l!==void 0&&i.getValue(o,l).jump(l,!1)}measureEndState(){var p;const{element:i,name:r,unresolvedKeyframes:o}=this;if(!i||!i.current)return;const l=i.getValue(r);l&&l.jump(this.measuredOrigin,!1);const d=o.length-1,f=o[d];o[d]=Er[r](i.measureViewportBox(),window.getComputedStyle(i.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),(p=this.removedTransforms)!=null&&p.length&&this.removedTransforms.forEach(([m,g])=>{i.getValue(m).set(g)}),this.resolveNoneKeyframes()}}function L5(e,i,r){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let o=document;const l=(r==null?void 0:r[e])??o.querySelectorAll(e);return l?Array.from(l):[]}return Array.from(e)}const{schedule:Yp}=Sb(queueMicrotask,!1),gn={x:!1,y:!1};function Gb(){return gn.x||gn.y}function V5(e){return e==="x"||e==="y"?gn[e]?null:(gn[e]=!0,()=>{gn[e]=!1}):gn.x||gn.y?null:(gn.x=gn.y=!0,()=>{gn.x=gn.y=!1})}function Xb(e,i){const r=L5(e),o=new AbortController,l={passive:!0,...i,signal:o.signal};return[r,l,()=>o.abort()]}function X1(e){return!(e.pointerType==="touch"||Gb())}function _5(e,i,r={}){const[o,l,d]=Xb(e,r),f=p=>{if(!X1(p))return;const{target:m}=p,g=i(m,p);if(typeof g!="function"||!m)return;const y=b=>{X1(b)&&(g(b),m.removeEventListener("pointerleave",y))};m.addEventListener("pointerleave",y,l)};return o.forEach(p=>{p.addEventListener("pointerenter",f,l)}),d}const Kb=(e,i)=>i?e===i?!0:Kb(e,i.parentElement):!1,qp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,U5=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function H5(e){return U5.has(e.tagName)||e.tabIndex!==-1}const qo=new WeakSet;function K1(e){return i=>{i.key==="Enter"&&e(i)}}function Kf(e,i){e.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const P5=(e,i)=>{const r=e.currentTarget;if(!r)return;const o=K1(()=>{if(qo.has(r))return;Kf(r,"down");const l=K1(()=>{Kf(r,"up")}),d=()=>Kf(r,"cancel");r.addEventListener("keyup",l,i),r.addEventListener("blur",d,i)});r.addEventListener("keydown",o,i),r.addEventListener("blur",()=>r.removeEventListener("keydown",o),i)};function Z1(e){return qp(e)&&!Gb()}function F5(e,i,r={}){const[o,l,d]=Xb(e,r),f=p=>{const m=p.currentTarget;if(!Z1(p)||qo.has(m))return;qo.add(m);const g=i(m,p),y=(j,$)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",w),!(!Z1(j)||!qo.has(m))&&(qo.delete(m),typeof g=="function"&&g(j,{success:$}))},b=j=>{y(j,m===window||m===document||r.useGlobalTarget||Kb(m,j.target))},w=j=>{y(j,!1)};window.addEventListener("pointerup",b,l),window.addEventListener("pointercancel",w,l)};return o.forEach(p=>{(r.useGlobalTarget?window:p).addEventListener("pointerdown",f,l),p instanceof HTMLElement&&(p.addEventListener("focus",g=>P5(g,l)),!H5(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),d}const Q1=30,Y5=e=>!isNaN(parseFloat(e));class q5{constructor(i,r={}){this.version="__VERSION__",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(o,l=!0)=>{var f,p;const d=Bt.now();this.updatedAt!==d&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&((f=this.events.change)==null||f.notify(this.current)),l&&((p=this.events.renderRequest)==null||p.notify(this.current))},this.hasAnimated=!1,this.setCurrent(i),this.owner=r.owner}setCurrent(i){this.current=i,this.updatedAt=Bt.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=Y5(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,r){this.events[i]||(this.events[i]=new zp);const o=this.events[i].add(r);return i==="change"?()=>{o(),qe.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,r){this.passiveEffect=i,this.stopPassiveEffect=r}set(i,r=!0){!r||!this.passiveEffect?this.updateAndNotify(i,r):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,r,o){this.set(r),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-o}jump(i,r=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=Bt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>Q1)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,Q1);return ub(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(i){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=i(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var i;(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function rs(e,i){return new q5(e,i)}const G5=[...Fb,jt,Mi],X5=e=>G5.find(Pb(e)),Zb=(e,i)=>i&&typeof e=="number"?i.transform(e):e,Qb=z.createContext({strict:!1}),I1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Rr={};for(const e in I1)Rr[e]={isEnabled:i=>I1[e].some(r=>!!i[r])};function K5(e){for(const i in e)Rr[i]={...Rr[i],...e[i]}}const Z5=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Fc(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Z5.has(e)}let Ib=e=>!Fc(e);function Q5(e){e&&(Ib=i=>i.startsWith("on")?!Fc(i):e(i))}try{Q5(require("@emotion/is-prop-valid").default)}catch{}function I5(e,i,r){const o={};for(const l in e)l==="values"&&typeof e.values=="object"||(Ib(l)||r===!0&&Fc(l)||!i&&!Fc(l)||e.draggable&&l.startsWith("onDrag"))&&(o[l]=e[l]);return o}function W5(e){if(typeof Proxy>"u")return e;const i=new Map,r=(...o)=>e(...o);return new Proxy(r,{get:(o,l)=>l==="create"?e:(i.has(l)||i.set(l,e(l)),i.get(l))})}const au=z.createContext({});function ru(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function os(e){return typeof e=="string"||Array.isArray(e)}const Gp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Xp=["initial",...Gp];function ou(e){return ru(e.animate)||Xp.some(i=>os(e[i]))}function Wb(e){return!!(ou(e)||e.variants)}function J5(e,i){if(ou(e)){const{initial:r,animate:o}=e;return{initial:r===!1||os(r)?r:void 0,animate:os(o)?o:void 0}}return e.inherit!==!1?i:{}}function e8(e){const{initial:i,animate:r}=J5(e,z.useContext(au));return z.useMemo(()=>({initial:i,animate:r}),[W1(i),W1(r)])}function W1(e){return Array.isArray(e)?e.join(" "):e}const t8=Symbol.for("motionComponentSymbol");function vr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function n8(e,i,r){return z.useCallback(o=>{o&&e.onMount&&e.onMount(o),i&&(o?i.mount(o):i.unmount()),r&&(typeof r=="function"?r(o):vr(r)&&(r.current=o))},[i])}const Kp=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),i8="framerAppearId",Jb="data-"+Kp(i8),e2=z.createContext({});function a8(e,i,r,o,l){var R,T;const{visualElement:d}=z.useContext(au),f=z.useContext(Qb),p=z.useContext(iu),m=z.useContext(Tp).reducedMotion,g=z.useRef(null);o=o||f.renderer,!g.current&&o&&(g.current=o(e,{visualState:i,parent:d,props:r,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:m}));const y=g.current,b=z.useContext(e2);y&&!y.projection&&l&&(y.type==="html"||y.type==="svg")&&r8(g.current,r,l,b);const w=z.useRef(!1);z.useInsertionEffect(()=>{y&&w.current&&y.update(r,p)});const j=r[Jb],$=z.useRef(!!j&&!((R=window.MotionHandoffIsComplete)!=null&&R.call(window,j))&&((T=window.MotionHasOptimisedAnimation)==null?void 0:T.call(window,j)));return ob(()=>{y&&(w.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),Yp.render(y.render),$.current&&y.animationState&&y.animationState.animateChanges())}),z.useEffect(()=>{y&&(!$.current&&y.animationState&&y.animationState.animateChanges(),$.current&&(queueMicrotask(()=>{var E;(E=window.MotionHandoffMarkAsComplete)==null||E.call(window,j)}),$.current=!1))}),y}function r8(e,i,r,o){const{layoutId:l,layout:d,drag:f,dragConstraints:p,layoutScroll:m,layoutRoot:g,layoutCrossfade:y}=i;e.projection=new r(e.latestValues,i["data-framer-portal-id"]?void 0:t2(e.parent)),e.projection.setOptions({layoutId:l,layout:d,alwaysMeasureLayout:!!f||p&&vr(p),visualElement:e,animationType:typeof d=="string"?d:"both",initialPromotionConfig:o,crossfade:y,layoutScroll:m,layoutRoot:g})}function t2(e){if(e)return e.options.allowProjection!==!1?e.projection:t2(e.parent)}function o8({preloadedFeatures:e,createVisualElement:i,useRender:r,useVisualState:o,Component:l}){e&&K5(e);function d(p,m){let g;const y={...z.useContext(Tp),...p,layoutId:s8(p)},{isStatic:b}=y,w=e8(p),j=o(p,b);if(!b&&jp){l8();const $=c8(y);g=$.MeasureLayout,w.visualElement=a8(l,j,y,i,$.ProjectionNode)}return c.jsxs(au.Provider,{value:w,children:[g&&w.visualElement?c.jsx(g,{visualElement:w.visualElement,...y}):null,r(l,p,n8(j,w.visualElement,m),j,b,w.visualElement)]})}d.displayName=`motion.${typeof l=="string"?l:`create(${l.displayName??l.name??""})`}`;const f=z.forwardRef(d);return f[t8]=l,f}function s8({layoutId:e}){const i=z.useContext(wp).id;return i&&e!==void 0?i+"-"+e:e}function l8(e,i){z.useContext(Qb).strict}function c8(e){const{drag:i,layout:r}=Rr;if(!i&&!r)return{};const o={...i,...r};return{MeasureLayout:i!=null&&i.isEnabled(e)||r!=null&&r.isEnabled(e)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}const ss={};function u8(e){for(const i in e)ss[i]=e[i],Op(i)&&(ss[i].isCSSVariable=!0)}function n2(e,{layout:i,layoutId:r}){return kr.has(e)||e.startsWith("origin")||(i||r!==void 0)&&(!!ss[e]||e==="opacity")}const At=e=>!!(e&&e.getVelocity),d8={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},f8=Or.length;function h8(e,i,r){let o="",l=!0;for(let d=0;d<f8;d++){const f=Or[d],p=e[f];if(p===void 0)continue;let m=!0;if(typeof p=="number"?m=p===(f.startsWith("scale")?1:0):m=parseFloat(p)===0,!m||r){const g=Zb(p,Fp[f]);if(!m){l=!1;const y=d8[f]||f;o+=`${y}(${g}) `}r&&(i[f]=g)}}return o=o.trim(),r?o=r(i,l?"":o):l&&(o="none"),o}function Zp(e,i,r){const{style:o,vars:l,transformOrigin:d}=e;let f=!1,p=!1;for(const m in i){const g=i[m];if(kr.has(m)){f=!0;continue}else if(Op(m)){l[m]=g;continue}else{const y=Zb(g,Fp[m]);m.startsWith("origin")?(p=!0,d[m]=y):o[m]=y}}if(i.transform||(f||r?o.transform=h8(i,e.transform,r):o.transform&&(o.transform="none")),p){const{originX:m="50%",originY:g="50%",originZ:y=0}=d;o.transformOrigin=`${m} ${g} ${y}`}}const Qp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function i2(e,i,r){for(const o in i)!At(i[o])&&!n2(o,r)&&(e[o]=i[o])}function p8({transformTemplate:e},i){return z.useMemo(()=>{const r=Qp();return Zp(r,i,e),Object.assign({},r.vars,r.style)},[i])}function m8(e,i){const r=e.style||{},o={};return i2(o,r,e),Object.assign(o,p8(e,i)),o}function g8(e,i){const r={},o=m8(e,i);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=o,r}const y8=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ip(e){return typeof e!="string"||e.includes("-")?!1:!!(y8.indexOf(e)>-1||/[A-Z]/u.test(e))}const x8={offset:"stroke-dashoffset",array:"stroke-dasharray"},v8={offset:"strokeDashoffset",array:"strokeDasharray"};function b8(e,i,r=1,o=0,l=!0){e.pathLength=1;const d=l?x8:v8;e[d.offset]=ce.transform(-o);const f=ce.transform(i),p=ce.transform(r);e[d.array]=`${f} ${p}`}function a2(e,{attrX:i,attrY:r,attrScale:o,pathLength:l,pathSpacing:d=1,pathOffset:f=0,...p},m,g){if(Zp(e,p,g),m){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:y,style:b}=e;y.transform&&(b.transform=y.transform,delete y.transform),(b.transform||y.transformOrigin)&&(b.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),b.transform&&(b.transformBox="fill-box",delete y.transformBox),i!==void 0&&(y.x=i),r!==void 0&&(y.y=r),o!==void 0&&(y.scale=o),l!==void 0&&b8(y,l,d,f,!1)}const r2=()=>({...Qp(),attrs:{}}),o2=e=>typeof e=="string"&&e.toLowerCase()==="svg";function S8(e,i,r,o){const l=z.useMemo(()=>{const d=r2();return a2(d,i,o2(o),e.transformTemplate),{...d.attrs,style:{...d.style}}},[i]);if(e.style){const d={};i2(d,e.style,e),l.style={...d,...l.style}}return l}function w8(e=!1){return(r,o,l,{latestValues:d},f)=>{const m=(Ip(r)?S8:g8)(o,d,f,r),g=I5(o,typeof r=="string",e),y=r!==z.Fragment?{...g,...m,ref:l}:{},{children:b}=o,w=z.useMemo(()=>At(b)?b.get():b,[b]);return z.createElement(r,{...y,children:w})}}function J1(e){const i=[{},{}];return e==null||e.values.forEach((r,o)=>{i[0][o]=r.get(),i[1][o]=r.getVelocity()}),i}function Wp(e,i,r,o){if(typeof i=="function"){const[l,d]=J1(o);i=i(r!==void 0?r:e.custom,l,d)}if(typeof i=="string"&&(i=e.variants&&e.variants[i]),typeof i=="function"){const[l,d]=J1(o);i=i(r!==void 0?r:e.custom,l,d)}return i}function zc(e){return At(e)?e.get():e}function $8({scrapeMotionValuesFromProps:e,createRenderState:i},r,o,l){return{latestValues:j8(r,o,l,e),renderState:i()}}const s2=e=>(i,r)=>{const o=z.useContext(au),l=z.useContext(iu),d=()=>$8(e,i,o,l);return r?d():$p(d)};function j8(e,i,r,o){const l={},d=o(e,{});for(const w in d)l[w]=zc(d[w]);let{initial:f,animate:p}=e;const m=ou(e),g=Wb(e);i&&g&&!m&&e.inherit!==!1&&(f===void 0&&(f=i.initial),p===void 0&&(p=i.animate));let y=r?r.initial===!1:!1;y=y||f===!1;const b=y?p:f;if(b&&typeof b!="boolean"&&!ru(b)){const w=Array.isArray(b)?b:[b];for(let j=0;j<w.length;j++){const $=Wp(e,w[j]);if($){const{transitionEnd:R,transition:T,...E}=$;for(const k in E){let M=E[k];if(Array.isArray(M)){const H=y?M.length-1:0;M=M[H]}M!==null&&(l[k]=M)}for(const k in R)l[k]=R[k]}}}return l}function Jp(e,i,r){var d;const{style:o}=e,l={};for(const f in o)(At(o[f])||i.style&&At(i.style[f])||n2(f,e)||((d=r==null?void 0:r.getValue(f))==null?void 0:d.liveStyle)!==void 0)&&(l[f]=o[f]);return l}const T8={useVisualState:s2({scrapeMotionValuesFromProps:Jp,createRenderState:Qp})};function l2(e,i,r){const o=Jp(e,i,r);for(const l in e)if(At(e[l])||At(i[l])){const d=Or.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;o[d]=e[l]}return o}const A8={useVisualState:s2({scrapeMotionValuesFromProps:l2,createRenderState:r2})};function E8(e,i){return function(o,{forwardMotionProps:l}={forwardMotionProps:!1}){const f={...Ip(o)?A8:T8,preloadedFeatures:e,useRender:w8(l),createVisualElement:i,Component:o};return o8(f)}}function ls(e,i,r){const o=e.getProps();return Wp(o,i,r!==void 0?r:o.custom,e)}const Zh=e=>Array.isArray(e);function R8(e,i,r){e.hasValue(i)?e.getValue(i).set(r):e.addValue(i,rs(r))}function C8(e){return Zh(e)?e[e.length-1]||0:e}function z8(e,i){const r=ls(e,i);let{transitionEnd:o={},transition:l={},...d}=r||{};d={...d,...o};for(const f in d){const p=C8(d[f]);R8(e,f,p)}}function D8(e){return!!(At(e)&&e.add)}function Qh(e,i){const r=e.getValue("willChange");if(D8(r))return r.add(i);if(!r&&ti.WillChange){const o=new ti.WillChange("auto");e.addValue("willChange",o),o.add(i)}}function c2(e){return e.props[Jb]}const M8=e=>e!==null;function O8(e,{repeat:i,repeatType:r="loop"},o){const l=e.filter(M8),d=i&&r!=="loop"&&i%2===1?0:l.length-1;return l[d]}const k8={type:"spring",stiffness:500,damping:25,restSpeed:10},B8=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),N8={type:"keyframes",duration:.8},L8={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},V8=(e,{keyframes:i})=>i.length>2?N8:kr.has(e)?e.startsWith("scale")?B8(i[1]):k8:L8;function _8({when:e,delay:i,delayChildren:r,staggerChildren:o,staggerDirection:l,repeat:d,repeatType:f,repeatDelay:p,from:m,elapsed:g,...y}){return!!Object.keys(y).length}const em=(e,i,r,o={},l,d)=>f=>{const p=Pp(o,e)||{},m=p.delay||o.delay||0;let{elapsed:g=0}=o;g=g-Cn(m);const y={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:i.getVelocity(),...p,delay:-g,onUpdate:w=>{i.set(w),p.onUpdate&&p.onUpdate(w)},onComplete:()=>{f(),p.onComplete&&p.onComplete()},name:e,motionValue:i,element:d?void 0:l};_8(p)||Object.assign(y,V8(e,y)),y.duration&&(y.duration=Cn(y.duration)),y.repeatDelay&&(y.repeatDelay=Cn(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(y.duration=0,y.delay===0&&(b=!0)),(ti.instantAnimations||ti.skipAnimations)&&(b=!0,y.duration=0,y.delay=0),y.allowFlatten=!p.type&&!p.ease,b&&!d&&i.get()!==void 0){const w=O8(y.keyframes,p);if(w!==void 0){qe.update(()=>{y.onUpdate(w),y.onComplete()});return}}return new j5(y)};function U8({protectedKeys:e,needsAnimating:i},r){const o=e.hasOwnProperty(r)&&i[r]!==!0;return i[r]=!1,o}function u2(e,i,{delay:r=0,transitionOverride:o,type:l}={}){let{transition:d=e.getDefaultTransition(),transitionEnd:f,...p}=i;o&&(d=o);const m=[],g=l&&e.animationState&&e.animationState.getState()[l];for(const y in p){const b=e.getValue(y,e.latestValues[y]??null),w=p[y];if(w===void 0||g&&U8(g,y))continue;const j={delay:r,...Pp(d||{},y)},$=b.get();if($!==void 0&&!b.isAnimating&&!Array.isArray(w)&&w===$&&!j.velocity)continue;let R=!1;if(window.MotionHandoffAnimation){const E=c2(e);if(E){const k=window.MotionHandoffAnimation(E,y,qe);k!==null&&(j.startTime=k,R=!0)}}Qh(e,y),b.start(em(y,b,w,e.shouldReduceMotion&&Hb.has(y)?{type:!1}:j,e,R));const T=b.animation;T&&m.push(T)}return f&&Promise.all(m).then(()=>{qe.update(()=>{f&&z8(e,f)})}),m}function Ih(e,i,r={}){var m;const o=ls(e,i,r.type==="exit"?(m=e.presenceContext)==null?void 0:m.custom:void 0);let{transition:l=e.getDefaultTransition()||{}}=o||{};r.transitionOverride&&(l=r.transitionOverride);const d=o?()=>Promise.all(u2(e,o,r)):()=>Promise.resolve(),f=e.variantChildren&&e.variantChildren.size?(g=0)=>{const{delayChildren:y=0,staggerChildren:b,staggerDirection:w}=l;return H8(e,i,y+g,b,w,r)}:()=>Promise.resolve(),{when:p}=l;if(p){const[g,y]=p==="beforeChildren"?[d,f]:[f,d];return g().then(()=>y())}else return Promise.all([d(),f(r.delay)])}function H8(e,i,r=0,o=0,l=1,d){const f=[],p=(e.variantChildren.size-1)*o,m=l===1?(g=0)=>g*o:(g=0)=>p-g*o;return Array.from(e.variantChildren).sort(P8).forEach((g,y)=>{g.notify("AnimationStart",i),f.push(Ih(g,i,{...d,delay:r+m(y)}).then(()=>g.notify("AnimationComplete",i)))}),Promise.all(f)}function P8(e,i){return e.sortNodePosition(i)}function F8(e,i,r={}){e.notify("AnimationStart",i);let o;if(Array.isArray(i)){const l=i.map(d=>Ih(e,d,r));o=Promise.all(l)}else if(typeof i=="string")o=Ih(e,i,r);else{const l=typeof i=="function"?ls(e,i,r.custom):i;o=Promise.all(u2(e,l,r))}return o.then(()=>{e.notify("AnimationComplete",i)})}function d2(e,i){if(!Array.isArray(i))return!1;const r=i.length;if(r!==e.length)return!1;for(let o=0;o<r;o++)if(i[o]!==e[o])return!1;return!0}const Y8=Xp.length;function f2(e){if(!e)return;if(!e.isControllingVariants){const r=e.parent?f2(e.parent)||{}:{};return e.props.initial!==void 0&&(r.initial=e.props.initial),r}const i={};for(let r=0;r<Y8;r++){const o=Xp[r],l=e.props[o];(os(l)||l===!1)&&(i[o]=l)}return i}const q8=[...Gp].reverse(),G8=Gp.length;function X8(e){return i=>Promise.all(i.map(({animation:r,options:o})=>F8(e,r,o)))}function K8(e){let i=X8(e),r=ex(),o=!0;const l=m=>(g,y)=>{var w;const b=ls(e,y,m==="exit"?(w=e.presenceContext)==null?void 0:w.custom:void 0);if(b){const{transition:j,transitionEnd:$,...R}=b;g={...g,...R,...$}}return g};function d(m){i=m(e)}function f(m){const{props:g}=e,y=f2(e.parent)||{},b=[],w=new Set;let j={},$=1/0;for(let T=0;T<G8;T++){const E=q8[T],k=r[E],M=g[E]!==void 0?g[E]:y[E],H=os(M),_=E===m?k.isActive:null;_===!1&&($=T);let X=M===y[E]&&M!==g[E]&&H;if(X&&o&&e.manuallyAnimateOnMount&&(X=!1),k.protectedKeys={...j},!k.isActive&&_===null||!M&&!k.prevProp||ru(M)||typeof M=="boolean")continue;const K=Z8(k.prevProp,M);let W=K||E===m&&k.isActive&&!X&&H||T>$&&H,re=!1;const $e=Array.isArray(M)?M:[M];let Qe=$e.reduce(l(E),{});_===!1&&(Qe={});const{prevResolvedValues:Ie={}}=k,dn={...Ie,...Qe},Kt=Z=>{W=!0,w.has(Z)&&(re=!0,w.delete(Z)),k.needsAnimating[Z]=!0;const ee=e.getValue(Z);ee&&(ee.liveStyle=!1)};for(const Z in dn){const ee=Qe[Z],de=Ie[Z];if(j.hasOwnProperty(Z))continue;let C=!1;Zh(ee)&&Zh(de)?C=!d2(ee,de):C=ee!==de,C?ee!=null?Kt(Z):w.add(Z):ee!==void 0&&w.has(Z)?Kt(Z):k.protectedKeys[Z]=!0}k.prevProp=M,k.prevResolvedValues=Qe,k.isActive&&(j={...j,...Qe}),o&&e.blockInitialAnimation&&(W=!1),W&&(!(X&&K)||re)&&b.push(...$e.map(Z=>({animation:Z,options:{type:E}})))}if(w.size){const T={};if(typeof g.initial!="boolean"){const E=ls(e,Array.isArray(g.initial)?g.initial[0]:g.initial);E&&E.transition&&(T.transition=E.transition)}w.forEach(E=>{const k=e.getBaseTarget(E),M=e.getValue(E);M&&(M.liveStyle=!0),T[E]=k??null}),b.push({animation:T})}let R=!!b.length;return o&&(g.initial===!1||g.initial===g.animate)&&!e.manuallyAnimateOnMount&&(R=!1),o=!1,R?i(b):Promise.resolve()}function p(m,g){var b;if(r[m].isActive===g)return Promise.resolve();(b=e.variantChildren)==null||b.forEach(w=>{var j;return(j=w.animationState)==null?void 0:j.setActive(m,g)}),r[m].isActive=g;const y=f(m);for(const w in r)r[w].protectedKeys={};return y}return{animateChanges:f,setActive:p,setAnimateFunction:d,getState:()=>r,reset:()=>{r=ex(),o=!0}}}function Z8(e,i){return typeof i=="string"?i!==e:Array.isArray(i)?!d2(i,e):!1}function Ji(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ex(){return{animate:Ji(!0),whileInView:Ji(),whileHover:Ji(),whileTap:Ji(),whileDrag:Ji(),whileFocus:Ji(),exit:Ji()}}class Oi{constructor(i){this.isMounted=!1,this.node=i}update(){}}class Q8 extends Oi{constructor(i){super(i),i.animationState||(i.animationState=K8(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();ru(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:r}=this.node.prevProps||{};i!==r&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)==null||i.call(this)}}let I8=0;class W8 extends Oi{constructor(){super(...arguments),this.id=I8++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:r}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===o)return;const l=this.node.animationState.setActive("exit",!i);r&&!i&&l.then(()=>{r(this.id)})}mount(){const{register:i,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const J8={animation:{Feature:Q8},exit:{Feature:W8}};function cs(e,i,r,o={passive:!0}){return e.addEventListener(i,r,o),()=>e.removeEventListener(i,r)}function ys(e){return{point:{x:e.pageX,y:e.pageY}}}const eT=e=>i=>qp(i)&&e(i,ys(i));function Zo(e,i,r,o){return cs(e,i,eT(r),o)}function h2({top:e,left:i,right:r,bottom:o}){return{x:{min:i,max:r},y:{min:e,max:o}}}function tT({x:e,y:i}){return{top:i.min,right:e.max,bottom:i.max,left:e.min}}function nT(e,i){if(!i)return e;const r=i({x:e.left,y:e.top}),o=i({x:e.right,y:e.bottom});return{top:r.y,left:r.x,bottom:o.y,right:o.x}}const p2=1e-4,iT=1-p2,aT=1+p2,m2=.01,rT=0-m2,oT=0+m2;function Ct(e){return e.max-e.min}function sT(e,i,r){return Math.abs(e-i)<=r}function tx(e,i,r,o=.5){e.origin=o,e.originPoint=Fe(i.min,i.max,e.origin),e.scale=Ct(r)/Ct(i),e.translate=Fe(r.min,r.max,e.origin)-e.originPoint,(e.scale>=iT&&e.scale<=aT||isNaN(e.scale))&&(e.scale=1),(e.translate>=rT&&e.translate<=oT||isNaN(e.translate))&&(e.translate=0)}function Qo(e,i,r,o){tx(e.x,i.x,r.x,o?o.originX:void 0),tx(e.y,i.y,r.y,o?o.originY:void 0)}function nx(e,i,r){e.min=r.min+i.min,e.max=e.min+Ct(i)}function lT(e,i,r){nx(e.x,i.x,r.x),nx(e.y,i.y,r.y)}function ix(e,i,r){e.min=i.min-r.min,e.max=e.min+Ct(i)}function Io(e,i,r){ix(e.x,i.x,r.x),ix(e.y,i.y,r.y)}const ax=()=>({translate:0,scale:1,origin:0,originPoint:0}),br=()=>({x:ax(),y:ax()}),rx=()=>({min:0,max:0}),et=()=>({x:rx(),y:rx()});function ln(e){return[e("x"),e("y")]}function Zf(e){return e===void 0||e===1}function Wh({scale:e,scaleX:i,scaleY:r}){return!Zf(e)||!Zf(i)||!Zf(r)}function na(e){return Wh(e)||g2(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function g2(e){return ox(e.x)||ox(e.y)}function ox(e){return e&&e!=="0%"}function Yc(e,i,r){const o=e-r,l=i*o;return r+l}function sx(e,i,r,o,l){return l!==void 0&&(e=Yc(e,l,o)),Yc(e,r,o)+i}function Jh(e,i=0,r=1,o,l){e.min=sx(e.min,i,r,o,l),e.max=sx(e.max,i,r,o,l)}function y2(e,{x:i,y:r}){Jh(e.x,i.translate,i.scale,i.originPoint),Jh(e.y,r.translate,r.scale,r.originPoint)}const lx=.999999999999,cx=1.0000000000001;function cT(e,i,r,o=!1){const l=r.length;if(!l)return;i.x=i.y=1;let d,f;for(let p=0;p<l;p++){d=r[p],f=d.projectionDelta;const{visualElement:m}=d.options;m&&m.props.style&&m.props.style.display==="contents"||(o&&d.options.layoutScroll&&d.scroll&&d!==d.root&&wr(e,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),f&&(i.x*=f.x.scale,i.y*=f.y.scale,y2(e,f)),o&&na(d.latestValues)&&wr(e,d.latestValues))}i.x<cx&&i.x>lx&&(i.x=1),i.y<cx&&i.y>lx&&(i.y=1)}function Sr(e,i){e.min=e.min+i,e.max=e.max+i}function ux(e,i,r,o,l=.5){const d=Fe(e.min,e.max,l);Jh(e,i,r,d,o)}function wr(e,i){ux(e.x,i.x,i.scaleX,i.scale,i.originX),ux(e.y,i.y,i.scaleY,i.scale,i.originY)}function x2(e,i){return h2(nT(e.getBoundingClientRect(),i))}function uT(e,i,r){const o=x2(e,r),{scroll:l}=i;return l&&(Sr(o.x,l.offset.x),Sr(o.y,l.offset.y)),o}const v2=({current:e})=>e?e.ownerDocument.defaultView:null,dx=(e,i)=>Math.abs(e-i);function dT(e,i){const r=dx(e.x,i.x),o=dx(e.y,i.y);return Math.sqrt(r**2+o**2)}class b2{constructor(i,r,{transformPagePoint:o,contextWindow:l,dragSnapToOrigin:d=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=If(this.lastMoveEventInfo,this.history),w=this.startEvent!==null,j=dT(b.offset,{x:0,y:0})>=3;if(!w&&!j)return;const{point:$}=b,{timestamp:R}=vt;this.history.push({...$,timestamp:R});const{onStart:T,onMove:E}=this.handlers;w||(T&&T(this.lastMoveEvent,b),this.startEvent=this.lastMoveEvent),E&&E(this.lastMoveEvent,b)},this.handlePointerMove=(b,w)=>{this.lastMoveEvent=b,this.lastMoveEventInfo=Qf(w,this.transformPagePoint),qe.update(this.updatePoint,!0)},this.handlePointerUp=(b,w)=>{this.end();const{onEnd:j,onSessionEnd:$,resumeAnimation:R}=this.handlers;if(this.dragSnapToOrigin&&R&&R(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const T=If(b.type==="pointercancel"?this.lastMoveEventInfo:Qf(w,this.transformPagePoint),this.history);this.startEvent&&j&&j(b,T),$&&$(b,T)},!qp(i))return;this.dragSnapToOrigin=d,this.handlers=r,this.transformPagePoint=o,this.contextWindow=l||window;const f=ys(i),p=Qf(f,this.transformPagePoint),{point:m}=p,{timestamp:g}=vt;this.history=[{...m,timestamp:g}];const{onSessionStart:y}=r;y&&y(i,If(p,this.history)),this.removeListeners=ps(Zo(this.contextWindow,"pointermove",this.handlePointerMove),Zo(this.contextWindow,"pointerup",this.handlePointerUp),Zo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),Di(this.updatePoint)}}function Qf(e,i){return i?{point:i(e.point)}:e}function fx(e,i){return{x:e.x-i.x,y:e.y-i.y}}function If({point:e},i){return{point:e,delta:fx(e,S2(i)),offset:fx(e,fT(i)),velocity:hT(i,.1)}}function fT(e){return e[0]}function S2(e){return e[e.length-1]}function hT(e,i){if(e.length<2)return{x:0,y:0};let r=e.length-1,o=null;const l=S2(e);for(;r>=0&&(o=e[r],!(l.timestamp-o.timestamp>Cn(i)));)r--;if(!o)return{x:0,y:0};const d=zn(l.timestamp-o.timestamp);if(d===0)return{x:0,y:0};const f={x:(l.x-o.x)/d,y:(l.y-o.y)/d};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function pT(e,{min:i,max:r},o){return i!==void 0&&e<i?e=o?Fe(i,e,o.min):Math.max(e,i):r!==void 0&&e>r&&(e=o?Fe(r,e,o.max):Math.min(e,r)),e}function hx(e,i,r){return{min:i!==void 0?e.min+i:void 0,max:r!==void 0?e.max+r-(e.max-e.min):void 0}}function mT(e,{top:i,left:r,bottom:o,right:l}){return{x:hx(e.x,r,l),y:hx(e.y,i,o)}}function px(e,i){let r=i.min-e.min,o=i.max-e.max;return i.max-i.min<e.max-e.min&&([r,o]=[o,r]),{min:r,max:o}}function gT(e,i){return{x:px(e.x,i.x),y:px(e.y,i.y)}}function yT(e,i){let r=.5;const o=Ct(e),l=Ct(i);return l>o?r=ns(i.min,i.max-o,e.min):o>l&&(r=ns(e.min,e.max-l,i.min)),ei(0,1,r)}function xT(e,i){const r={};return i.min!==void 0&&(r.min=i.min-e.min),i.max!==void 0&&(r.max=i.max-e.min),r}const ep=.35;function vT(e=ep){return e===!1?e=0:e===!0&&(e=ep),{x:mx(e,"left","right"),y:mx(e,"top","bottom")}}function mx(e,i,r){return{min:gx(e,i),max:gx(e,r)}}function gx(e,i){return typeof e=="number"?e:e[i]||0}const bT=new WeakMap;class ST{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=et(),this.visualElement=i}start(i,{snapToCursor:r=!1}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=y=>{const{dragSnapToOrigin:b}=this.getProps();b?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(ys(y).point)},d=(y,b)=>{const{drag:w,dragPropagation:j,onDragStart:$}=this.getProps();if(w&&!j&&(this.openDragLock&&this.openDragLock(),this.openDragLock=V5(w),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ln(T=>{let E=this.getAxisMotionValue(T).get()||0;if(Dn.test(E)){const{projection:k}=this.visualElement;if(k&&k.layout){const M=k.layout.layoutBox[T];M&&(E=Ct(M)*(parseFloat(E)/100))}}this.originPoint[T]=E}),$&&qe.postRender(()=>$(y,b)),Qh(this.visualElement,"transform");const{animationState:R}=this.visualElement;R&&R.setActive("whileDrag",!0)},f=(y,b)=>{const{dragPropagation:w,dragDirectionLock:j,onDirectionLock:$,onDrag:R}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:T}=b;if(j&&this.currentDirection===null){this.currentDirection=wT(T),this.currentDirection!==null&&$&&$(this.currentDirection);return}this.updateAxis("x",b.point,T),this.updateAxis("y",b.point,T),this.visualElement.render(),R&&R(y,b)},p=(y,b)=>this.stop(y,b),m=()=>ln(y=>{var b;return this.getAnimationState(y)==="paused"&&((b=this.getAxisMotionValue(y).animation)==null?void 0:b.play())}),{dragSnapToOrigin:g}=this.getProps();this.panSession=new b2(i,{onSessionStart:l,onStart:d,onMove:f,onSessionEnd:p,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,contextWindow:v2(this.visualElement)})}stop(i,r){const o=this.isDragging;if(this.cancel(),!o)return;const{velocity:l}=r;this.startAnimation(l);const{onDragEnd:d}=this.getProps();d&&qe.postRender(()=>d(i,r))}cancel(){this.isDragging=!1;const{projection:i,animationState:r}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(i,r,o){const{drag:l}=this.getProps();if(!o||!Ul(i,l,this.currentDirection))return;const d=this.getAxisMotionValue(i);let f=this.originPoint[i]+o[i];this.constraints&&this.constraints[i]&&(f=pT(f,this.constraints[i],this.elastic[i])),d.set(f)}resolveConstraints(){var d;const{dragConstraints:i,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(d=this.visualElement.projection)==null?void 0:d.layout,l=this.constraints;i&&vr(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&o?this.constraints=mT(o.layoutBox,i):this.constraints=!1,this.elastic=vT(r),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&ln(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=xT(o.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:r}=this.getProps();if(!i||!vr(i))return!1;const o=i.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;const d=uT(o,l.root,this.visualElement.getTransformPagePoint());let f=gT(l.layout.layoutBox,d);if(r){const p=r(tT(f));this.hasMutatedConstraints=!!p,p&&(f=h2(p))}return f}startAnimation(i){const{drag:r,dragMomentum:o,dragElastic:l,dragTransition:d,dragSnapToOrigin:f,onDragTransitionEnd:p}=this.getProps(),m=this.constraints||{},g=ln(y=>{if(!Ul(y,r,this.currentDirection))return;let b=m&&m[y]||{};f&&(b={min:0,max:0});const w=l?200:1e6,j=l?40:1e7,$={type:"inertia",velocity:o?i[y]:0,bounceStiffness:w,bounceDamping:j,timeConstant:750,restDelta:1,restSpeed:10,...d,...b};return this.startAxisValueAnimation(y,$)});return Promise.all(g).then(p)}startAxisValueAnimation(i,r){const o=this.getAxisMotionValue(i);return Qh(this.visualElement,i),o.start(em(i,o,0,r,this.visualElement,!1))}stopAnimation(){ln(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){ln(i=>{var r;return(r=this.getAxisMotionValue(i).animation)==null?void 0:r.pause()})}getAnimationState(i){var r;return(r=this.getAxisMotionValue(i).animation)==null?void 0:r.state}getAxisMotionValue(i){const r=`_drag${i.toUpperCase()}`,o=this.visualElement.getProps(),l=o[r];return l||this.visualElement.getValue(i,(o.initial?o.initial[i]:void 0)||0)}snapToCursor(i){ln(r=>{const{drag:o}=this.getProps();if(!Ul(r,o,this.currentDirection))return;const{projection:l}=this.visualElement,d=this.getAxisMotionValue(r);if(l&&l.layout){const{min:f,max:p}=l.layout.layoutBox[r];d.set(i[r]-Fe(f,p,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:r}=this.getProps(),{projection:o}=this.visualElement;if(!vr(r)||!o||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};ln(f=>{const p=this.getAxisMotionValue(f);if(p&&this.constraints!==!1){const m=p.get();l[f]=yT({min:m,max:m},this.constraints[f])}});const{transformTemplate:d}=this.visualElement.getProps();this.visualElement.current.style.transform=d?d({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),ln(f=>{if(!Ul(f,i,null))return;const p=this.getAxisMotionValue(f),{min:m,max:g}=this.constraints[f];p.set(Fe(m,g,l[f]))})}addListeners(){if(!this.visualElement.current)return;bT.set(this.visualElement,this);const i=this.visualElement.current,r=Zo(i,"pointerdown",m=>{const{drag:g,dragListener:y=!0}=this.getProps();g&&y&&this.start(m)}),o=()=>{const{dragConstraints:m}=this.getProps();vr(m)&&m.current&&(this.constraints=this.resolveRefConstraints())},{projection:l}=this.visualElement,d=l.addEventListener("measure",o);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),qe.read(o);const f=cs(window,"resize",()=>this.scalePositionWithinConstraints()),p=l.addEventListener("didUpdate",({delta:m,hasLayoutChanged:g})=>{this.isDragging&&g&&(ln(y=>{const b=this.getAxisMotionValue(y);b&&(this.originPoint[y]+=m[y].translate,b.set(b.get()+m[y].translate))}),this.visualElement.render())});return()=>{f(),r(),d(),p&&p()}}getProps(){const i=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:o=!1,dragPropagation:l=!1,dragConstraints:d=!1,dragElastic:f=ep,dragMomentum:p=!0}=i;return{...i,drag:r,dragDirectionLock:o,dragPropagation:l,dragConstraints:d,dragElastic:f,dragMomentum:p}}}function Ul(e,i,r){return(i===!0||i===e)&&(r===null||r===e)}function wT(e,i=10){let r=null;return Math.abs(e.y)>i?r="y":Math.abs(e.x)>i&&(r="x"),r}class $T extends Oi{constructor(i){super(i),this.removeGroupControls=cn,this.removeListeners=cn,this.controls=new ST(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||cn}unmount(){this.removeGroupControls(),this.removeListeners()}}const yx=e=>(i,r)=>{e&&qe.postRender(()=>e(i,r))};class jT extends Oi{constructor(){super(...arguments),this.removePointerDownListener=cn}onPointerDown(i){this.session=new b2(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:v2(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:r,onPan:o,onPanEnd:l}=this.node.getProps();return{onSessionStart:yx(i),onStart:yx(r),onMove:o,onEnd:(d,f)=>{delete this.session,l&&qe.postRender(()=>l(d,f))}}}mount(){this.removePointerDownListener=Zo(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Dc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function xx(e,i){return i.max===i.min?0:e/(i.max-i.min)*100}const _o={correct:(e,i)=>{if(!i.target)return e;if(typeof e=="string")if(ce.test(e))e=parseFloat(e);else return e;const r=xx(e,i.target.x),o=xx(e,i.target.y);return`${r}% ${o}%`}},TT={correct:(e,{treeScale:i,projectionDelta:r})=>{const o=e,l=Mi.parse(e);if(l.length>5)return o;const d=Mi.createTransformer(e),f=typeof l[0]!="number"?1:0,p=r.x.scale*i.x,m=r.y.scale*i.y;l[0+f]/=p,l[1+f]/=m;const g=Fe(p,m,.5);return typeof l[2+f]=="number"&&(l[2+f]/=g),typeof l[3+f]=="number"&&(l[3+f]/=g),d(l)}};class AT extends z.Component{componentDidMount(){const{visualElement:i,layoutGroup:r,switchLayoutGroup:o,layoutId:l}=this.props,{projection:d}=i;u8(ET),d&&(r.group&&r.group.add(d),o&&o.register&&l&&o.register(d),d.root.didUpdate(),d.addEventListener("animationComplete",()=>{this.safeToRemove()}),d.setOptions({...d.options,onExitComplete:()=>this.safeToRemove()})),Dc.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:r,visualElement:o,drag:l,isPresent:d}=this.props,f=o.projection;return f&&(f.isPresent=d,l||i.layoutDependency!==r||r===void 0||i.isPresent!==d?f.willUpdate():this.safeToRemove(),i.isPresent!==d&&(d?f.promote():f.relegate()||qe.postRender(()=>{const p=f.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),Yp.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:r,switchLayoutGroup:o}=this.props,{projection:l}=i;l&&(l.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(l),o&&o.deregister&&o.deregister(l))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function w2(e){const[i,r]=sb(),o=z.useContext(wp);return c.jsx(AT,{...e,layoutGroup:o,switchLayoutGroup:z.useContext(e2),isPresent:i,safeToRemove:r})}const ET={borderRadius:{..._o,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:_o,borderTopRightRadius:_o,borderBottomLeftRadius:_o,borderBottomRightRadius:_o,boxShadow:TT};function RT(e,i,r){const o=At(e)?e:rs(e);return o.start(em("",o,i,r)),o.animation}function CT(e){return e instanceof SVGElement&&e.tagName!=="svg"}const zT=(e,i)=>e.depth-i.depth;class DT{constructor(){this.children=[],this.isDirty=!1}add(i){Ap(this.children,i),this.isDirty=!0}remove(i){Ep(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(zT),this.isDirty=!1,this.children.forEach(i)}}function MT(e,i){const r=Bt.now(),o=({timestamp:l})=>{const d=l-r;d>=i&&(Di(o),e(d-i))};return qe.setup(o,!0),()=>Di(o)}const $2=["TopLeft","TopRight","BottomLeft","BottomRight"],OT=$2.length,vx=e=>typeof e=="string"?parseFloat(e):e,bx=e=>typeof e=="number"||ce.test(e);function kT(e,i,r,o,l,d){l?(e.opacity=Fe(0,r.opacity??1,BT(o)),e.opacityExit=Fe(i.opacity??1,0,NT(o))):d&&(e.opacity=Fe(i.opacity??1,r.opacity??1,o));for(let f=0;f<OT;f++){const p=`border${$2[f]}Radius`;let m=Sx(i,p),g=Sx(r,p);if(m===void 0&&g===void 0)continue;m||(m=0),g||(g=0),m===0||g===0||bx(m)===bx(g)?(e[p]=Math.max(Fe(vx(m),vx(g),o),0),(Dn.test(g)||Dn.test(m))&&(e[p]+="%")):e[p]=g}(i.rotate||r.rotate)&&(e.rotate=Fe(i.rotate||0,r.rotate||0,o))}function Sx(e,i){return e[i]!==void 0?e[i]:e.borderRadius}const BT=j2(0,.5,yb),NT=j2(.5,.95,cn);function j2(e,i,r){return o=>o<e?0:o>i?1:r(ns(e,i,o))}function wx(e,i){e.min=i.min,e.max=i.max}function on(e,i){wx(e.x,i.x),wx(e.y,i.y)}function $x(e,i){e.translate=i.translate,e.scale=i.scale,e.originPoint=i.originPoint,e.origin=i.origin}function jx(e,i,r,o,l){return e-=i,e=Yc(e,1/r,o),l!==void 0&&(e=Yc(e,1/l,o)),e}function LT(e,i=0,r=1,o=.5,l,d=e,f=e){if(Dn.test(i)&&(i=parseFloat(i),i=Fe(f.min,f.max,i/100)-f.min),typeof i!="number")return;let p=Fe(d.min,d.max,o);e===d&&(p-=i),e.min=jx(e.min,i,r,p,l),e.max=jx(e.max,i,r,p,l)}function Tx(e,i,[r,o,l],d,f){LT(e,i[r],i[o],i[l],i.scale,d,f)}const VT=["x","scaleX","originX"],_T=["y","scaleY","originY"];function Ax(e,i,r,o){Tx(e.x,i,VT,r?r.x:void 0,o?o.x:void 0),Tx(e.y,i,_T,r?r.y:void 0,o?o.y:void 0)}function Ex(e){return e.translate===0&&e.scale===1}function T2(e){return Ex(e.x)&&Ex(e.y)}function Rx(e,i){return e.min===i.min&&e.max===i.max}function UT(e,i){return Rx(e.x,i.x)&&Rx(e.y,i.y)}function Cx(e,i){return Math.round(e.min)===Math.round(i.min)&&Math.round(e.max)===Math.round(i.max)}function A2(e,i){return Cx(e.x,i.x)&&Cx(e.y,i.y)}function zx(e){return Ct(e.x)/Ct(e.y)}function Dx(e,i){return e.translate===i.translate&&e.scale===i.scale&&e.originPoint===i.originPoint}class HT{constructor(){this.members=[]}add(i){Ap(this.members,i),i.scheduleRender()}remove(i){if(Ep(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(i){const r=this.members.findIndex(l=>i===l);if(r===0)return!1;let o;for(let l=r;l>=0;l--){const d=this.members[l];if(d.isPresent!==!1){o=d;break}}return o?(this.promote(o),!0):!1}promote(i,r){const o=this.lead;if(i!==o&&(this.prevLead=o,this.lead=i,i.show(),o)){o.instance&&o.scheduleRender(),i.scheduleRender(),i.resumeFrom=o,r&&(i.resumeFrom.preserveOpacity=!0),o.snapshot&&(i.snapshot=o.snapshot,i.snapshot.latestValues=o.animationValues||o.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:l}=i.options;l===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:r,resumingFrom:o}=i;r.onExitComplete&&r.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function PT(e,i,r){let o="";const l=e.x.translate/i.x,d=e.y.translate/i.y,f=(r==null?void 0:r.z)||0;if((l||d||f)&&(o=`translate3d(${l}px, ${d}px, ${f}px) `),(i.x!==1||i.y!==1)&&(o+=`scale(${1/i.x}, ${1/i.y}) `),r){const{transformPerspective:g,rotate:y,rotateX:b,rotateY:w,skewX:j,skewY:$}=r;g&&(o=`perspective(${g}px) ${o}`),y&&(o+=`rotate(${y}deg) `),b&&(o+=`rotateX(${b}deg) `),w&&(o+=`rotateY(${w}deg) `),j&&(o+=`skewX(${j}deg) `),$&&(o+=`skewY(${$}deg) `)}const p=e.x.scale*i.x,m=e.y.scale*i.y;return(p!==1||m!==1)&&(o+=`scale(${p}, ${m})`),o||"none"}const Wf=["","X","Y","Z"],FT={visibility:"hidden"},Mx=1e3;let YT=0;function Jf(e,i,r,o){const{latestValues:l}=i;l[e]&&(r[e]=l[e],i.setStaticValue(e,0),o&&(o[e]=0))}function E2(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:i}=e.options;if(!i)return;const r=c2(i);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:l,layoutId:d}=e.options;window.MotionCancelOptimisedAnimation(r,"transform",qe,!(l||d))}const{parent:o}=e;o&&!o.hasCheckedOptimisedAppear&&E2(o)}function R2({attachResizeListener:e,defaultParent:i,measureScroll:r,checkIsScrollRoot:o,resetTransform:l}){return class{constructor(f={},p=i==null?void 0:i()){this.id=YT++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(XT),this.nodes.forEach(WT),this.nodes.forEach(JT),this.nodes.forEach(KT)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new DT)}addEventListener(f,p){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new zp),this.eventHandlers.get(f).add(p)}notifyListeners(f,...p){const m=this.eventHandlers.get(f);m&&m.notify(...p)}hasListeners(f){return this.eventHandlers.has(f)}mount(f,p=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=CT(f),this.instance=f;const{layoutId:m,layout:g,visualElement:y}=this.options;if(y&&!y.current&&y.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),p&&(g||m)&&(this.isLayoutDirty=!0),e){let b;const w=()=>this.root.updateBlockedByResize=!1;e(f,()=>{this.root.updateBlockedByResize=!0,b&&b(),b=MT(w,250),Dc.hasAnimatedSinceResize&&(Dc.hasAnimatedSinceResize=!1,this.nodes.forEach(kx))})}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&y&&(m||g)&&this.addEventListener("didUpdate",({delta:b,hasLayoutChanged:w,hasRelativeLayoutChanged:j,layout:$})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const R=this.options.transition||y.getDefaultTransition()||aA,{onLayoutAnimationStart:T,onLayoutAnimationComplete:E}=y.getProps(),k=!this.targetLayout||!A2(this.targetLayout,$),M=!w&&j;if(this.options.layoutRoot||this.resumeFrom||M||w&&(k||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(b,M);const H={...Pp(R,"layout"),onPlay:T,onComplete:E};(y.shouldReduceMotion||this.options.layoutRoot)&&(H.delay=0,H.type=!1),this.startAnimation(H)}else w||kx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=$})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Di(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(eA),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&E2(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const b=this.path[y];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:p,layout:m}=this.options;if(p===void 0&&!m)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Ox);return}this.isUpdating||this.nodes.forEach(QT),this.isUpdating=!1,this.nodes.forEach(IT),this.nodes.forEach(qT),this.nodes.forEach(GT),this.clearAllSnapshots();const p=Bt.now();vt.delta=ei(0,1e3/60,p-vt.timestamp),vt.timestamp=p,vt.isProcessing=!0,Yf.update.process(vt),Yf.preRender.process(vt),Yf.render.process(vt),vt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Yp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(ZT),this.sharedNodes.forEach(tA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,qe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){qe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ct(this.snapshot.measuredBox.x)&&!Ct(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=et(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(p=!1),p){const m=o(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:m,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!l)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!T2(this.projectionDelta),m=this.getTransformTemplate(),g=m?m(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;f&&(p||na(this.latestValues)||y)&&(l(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const p=this.measurePageBox();let m=this.removeElementScroll(p);return f&&(m=this.removeTransform(m)),rA(m),{animationId:this.root.animationId,measuredBox:p,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:f}=this.options;if(!f)return et();const p=f.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(oA))){const{scroll:y}=this.root;y&&(Sr(p.x,y.offset.x),Sr(p.y,y.offset.y))}return p}removeElementScroll(f){var m;const p=et();if(on(p,f),(m=this.scroll)!=null&&m.wasRoot)return p;for(let g=0;g<this.path.length;g++){const y=this.path[g],{scroll:b,options:w}=y;y!==this.root&&b&&w.layoutScroll&&(b.wasRoot&&on(p,f),Sr(p.x,b.offset.x),Sr(p.y,b.offset.y))}return p}applyTransform(f,p=!1){const m=et();on(m,f);for(let g=0;g<this.path.length;g++){const y=this.path[g];!p&&y.options.layoutScroll&&y.scroll&&y!==y.root&&wr(m,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),na(y.latestValues)&&wr(m,y.latestValues)}return na(this.latestValues)&&wr(m,this.latestValues),m}removeTransform(f){const p=et();on(p,f);for(let m=0;m<this.path.length;m++){const g=this.path[m];if(!g.instance||!na(g.latestValues))continue;Wh(g.latestValues)&&g.updateSnapshot();const y=et(),b=g.measurePageBox();on(y,b),Ax(p,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,y)}return na(this.latestValues)&&Ax(p,this.latestValues),p}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==vt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){var w;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==p;if(!(f||m&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:b}=this.options;if(!(!this.layout||!(y||b))){if(this.resolvedRelativeTargetAt=vt.timestamp,!this.targetDelta&&!this.relativeTarget){const j=this.getClosestProjectingParent();j&&j.layout&&this.animationProgress!==1?(this.relativeParent=j,this.forceRelativeParentToResolveTarget(),this.relativeTarget=et(),this.relativeTargetOrigin=et(),Io(this.relativeTargetOrigin,this.layout.layoutBox,j.layout.layoutBox),on(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=et(),this.targetWithTransforms=et()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),lT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):on(this.target,this.layout.layoutBox),y2(this.target,this.targetDelta)):on(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const j=this.getClosestProjectingParent();j&&!!j.resumingFrom==!!this.resumingFrom&&!j.options.layoutScroll&&j.target&&this.animationProgress!==1?(this.relativeParent=j,this.forceRelativeParentToResolveTarget(),this.relativeTarget=et(),this.relativeTargetOrigin=et(),Io(this.relativeTargetOrigin,this.target,j.target),on(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Wh(this.parent.latestValues)||g2(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var $;const f=this.getLead(),p=!!this.resumingFrom||this!==f;let m=!0;if((this.isProjectionDirty||($=this.parent)!=null&&$.isProjectionDirty)&&(m=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===vt.timestamp&&(m=!1),m)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;on(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,w=this.treeScale.y;cT(this.layoutCorrected,this.treeScale,this.path,p),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=et());const{target:j}=f;if(!j){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():($x(this.prevProjectionDelta.x,this.projectionDelta.x),$x(this.prevProjectionDelta.y,this.projectionDelta.y)),Qo(this.projectionDelta,this.layoutCorrected,j,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==w||!Dx(this.projectionDelta.x,this.prevProjectionDelta.x)||!Dx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",j))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){var p;if((p=this.options.visualElement)==null||p.scheduleRender(),f){const m=this.getStack();m&&m.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=br(),this.projectionDelta=br(),this.projectionDeltaWithTransform=br()}setAnimationOrigin(f,p=!1){const m=this.snapshot,g=m?m.latestValues:{},y={...this.latestValues},b=br();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const w=et(),j=m?m.source:void 0,$=this.layout?this.layout.source:void 0,R=j!==$,T=this.getStack(),E=!T||T.members.length<=1,k=!!(R&&!E&&this.options.crossfade===!0&&!this.path.some(iA));this.animationProgress=0;let M;this.mixTargetDelta=H=>{const _=H/1e3;Bx(b.x,f.x,_),Bx(b.y,f.y,_),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Io(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox),nA(this.relativeTarget,this.relativeTargetOrigin,w,_),M&&UT(this.relativeTarget,M)&&(this.isProjectionDirty=!1),M||(M=et()),on(M,this.relativeTarget)),R&&(this.animationValues=y,kT(y,g,this.latestValues,_,k,E)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=_},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Di(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=qe.update(()=>{Dc.hasAnimatedSinceResize=!0,this.currentAnimation=RT(0,Mx,{...f,onUpdate:p=>{this.mixTargetDelta(p),f.onUpdate&&f.onUpdate(p)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Mx),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:p,target:m,layout:g,latestValues:y}=f;if(!(!p||!m||!g)){if(this!==f&&this.layout&&g&&C2(this.options.animationType,this.layout.layoutBox,g.layoutBox)){m=this.target||et();const b=Ct(this.layout.layoutBox.x);m.x.min=f.target.x.min,m.x.max=m.x.min+b;const w=Ct(this.layout.layoutBox.y);m.y.min=f.target.y.min,m.y.max=m.y.min+w}on(p,m),wr(p,y),Qo(this.projectionDeltaWithTransform,this.layoutCorrected,p,y)}}registerSharedNode(f,p){this.sharedNodes.has(f)||this.sharedNodes.set(f,new HT),this.sharedNodes.get(f).add(p);const g=p.options.initialPromotionConfig;p.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(p):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){var p;const{layoutId:f}=this.options;return f?((p=this.getStack())==null?void 0:p.lead)||this:this}getPrevLead(){var p;const{layoutId:f}=this.options;return f?(p=this.getStack())==null?void 0:p.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:p,preserveFollowOpacity:m}={}){const g=this.getStack();g&&g.promote(this,m),f&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let p=!1;const{latestValues:m}=f;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(p=!0),!p)return;const g={};m.z&&Jf("z",f,g,this.animationValues);for(let y=0;y<Wf.length;y++)Jf(`rotate${Wf[y]}`,f,g,this.animationValues),Jf(`skew${Wf[y]}`,f,g,this.animationValues);f.render();for(const y in g)f.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);f.scheduleRender()}getProjectionStyles(f){if(!this.instance||this.isSVG)return;if(!this.isVisible)return FT;const p={visibility:""},m=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,p.opacity="",p.pointerEvents=zc(f==null?void 0:f.pointerEvents)||"",p.transform=m?m(this.latestValues,""):"none",p;const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){const j={};return this.options.layoutId&&(j.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,j.pointerEvents=zc(f==null?void 0:f.pointerEvents)||""),this.hasProjected&&!na(this.latestValues)&&(j.transform=m?m({},""):"none",this.hasProjected=!1),j}const y=g.animationValues||g.latestValues;this.applyTransformsToTarget(),p.transform=PT(this.projectionDeltaWithTransform,this.treeScale,y),m&&(p.transform=m(y,p.transform));const{x:b,y:w}=this.projectionDelta;p.transformOrigin=`${b.origin*100}% ${w.origin*100}% 0`,g.animationValues?p.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:p.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const j in ss){if(y[j]===void 0)continue;const{correct:$,applyTo:R,isCSSVariable:T}=ss[j],E=p.transform==="none"?y[j]:$(y[j],g);if(R){const k=R.length;for(let M=0;M<k;M++)p[R[M]]=E}else T?this.options.visualElement.renderState.vars[j]=E:p[j]=E}return this.options.layoutId&&(p.pointerEvents=g===this?zc(f==null?void 0:f.pointerEvents)||"":"none"),p}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>{var p;return(p=f.currentAnimation)==null?void 0:p.stop()}),this.root.nodes.forEach(Ox),this.root.sharedNodes.clear()}}}function qT(e){e.updateLayout()}function GT(e){var r;const i=((r=e.resumeFrom)==null?void 0:r.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&i&&e.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:l}=e.layout,{animationType:d}=e.options,f=i.source!==e.layout.source;d==="size"?ln(b=>{const w=f?i.measuredBox[b]:i.layoutBox[b],j=Ct(w);w.min=o[b].min,w.max=w.min+j}):C2(d,i.layoutBox,o)&&ln(b=>{const w=f?i.measuredBox[b]:i.layoutBox[b],j=Ct(o[b]);w.max=w.min+j,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[b].max=e.relativeTarget[b].min+j)});const p=br();Qo(p,o,i.layoutBox);const m=br();f?Qo(m,e.applyTransform(l,!0),i.measuredBox):Qo(m,o,i.layoutBox);const g=!T2(p);let y=!1;if(!e.resumeFrom){const b=e.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:w,layout:j}=b;if(w&&j){const $=et();Io($,i.layoutBox,w.layoutBox);const R=et();Io(R,o,j.layoutBox),A2($,R)||(y=!0),b.options.layoutRoot&&(e.relativeTarget=R,e.relativeTargetOrigin=$,e.relativeParent=b)}}}e.notifyListeners("didUpdate",{layout:o,snapshot:i,delta:m,layoutDelta:p,hasLayoutChanged:g,hasRelativeLayoutChanged:y})}else if(e.isLead()){const{onExitComplete:o}=e.options;o&&o()}e.options.transition=void 0}function XT(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function KT(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function ZT(e){e.clearSnapshot()}function Ox(e){e.clearMeasurements()}function QT(e){e.isLayoutDirty=!1}function IT(e){const{visualElement:i}=e.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),e.resetTransform()}function kx(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function WT(e){e.resolveTargetDelta()}function JT(e){e.calcProjection()}function eA(e){e.resetSkewAndRotation()}function tA(e){e.removeLeadSnapshot()}function Bx(e,i,r){e.translate=Fe(i.translate,0,r),e.scale=Fe(i.scale,1,r),e.origin=i.origin,e.originPoint=i.originPoint}function Nx(e,i,r,o){e.min=Fe(i.min,r.min,o),e.max=Fe(i.max,r.max,o)}function nA(e,i,r,o){Nx(e.x,i.x,r.x,o),Nx(e.y,i.y,r.y,o)}function iA(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const aA={duration:.45,ease:[.4,0,.1,1]},Lx=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Vx=Lx("applewebkit/")&&!Lx("chrome/")?Math.round:cn;function _x(e){e.min=Vx(e.min),e.max=Vx(e.max)}function rA(e){_x(e.x),_x(e.y)}function C2(e,i,r){return e==="position"||e==="preserve-aspect"&&!sT(zx(i),zx(r),.2)}function oA(e){var i;return e!==e.root&&((i=e.scroll)==null?void 0:i.wasRoot)}const sA=R2({attachResizeListener:(e,i)=>cs(e,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),eh={current:void 0},z2=R2({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!eh.current){const e=new sA({});e.mount(window),e.setOptions({layoutScroll:!0}),eh.current=e}return eh.current},resetTransform:(e,i)=>{e.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),lA={pan:{Feature:jT},drag:{Feature:$T,ProjectionNode:z2,MeasureLayout:w2}};function Ux(e,i,r){const{props:o}=e;e.animationState&&o.whileHover&&e.animationState.setActive("whileHover",r==="Start");const l="onHover"+r,d=o[l];d&&qe.postRender(()=>d(i,ys(i)))}class cA extends Oi{mount(){const{current:i}=this.node;i&&(this.unmount=_5(i,(r,o)=>(Ux(this.node,o,"Start"),l=>Ux(this.node,l,"End"))))}unmount(){}}class uA extends Oi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ps(cs(this.node.current,"focus",()=>this.onFocus()),cs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Hx(e,i,r){const{props:o}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&o.whileTap&&e.animationState.setActive("whileTap",r==="Start");const l="onTap"+(r==="End"?"":r),d=o[l];d&&qe.postRender(()=>d(i,ys(i)))}class dA extends Oi{mount(){const{current:i}=this.node;i&&(this.unmount=F5(i,(r,o)=>(Hx(this.node,o,"Start"),(l,{success:d})=>Hx(this.node,l,d?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const tp=new WeakMap,th=new WeakMap,fA=e=>{const i=tp.get(e.target);i&&i(e)},hA=e=>{e.forEach(fA)};function pA({root:e,...i}){const r=e||document;th.has(r)||th.set(r,{});const o=th.get(r),l=JSON.stringify(i);return o[l]||(o[l]=new IntersectionObserver(hA,{root:e,...i})),o[l]}function mA(e,i,r){const o=pA(i);return tp.set(e,r),o.observe(e),()=>{tp.delete(e),o.unobserve(e)}}const gA={some:0,all:1};class yA extends Oi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:r,margin:o,amount:l="some",once:d}=i,f={root:r?r.current:void 0,rootMargin:o,threshold:typeof l=="number"?l:gA[l]},p=m=>{const{isIntersecting:g}=m;if(this.isInView===g||(this.isInView=g,d&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),w=g?y:b;w&&w(m)};return mA(this.node.current,f,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:r}=this.node;["amount","margin","root"].some(xA(i,r))&&this.startObserver()}unmount(){}}function xA({viewport:e={}},{viewport:i={}}={}){return r=>e[r]!==i[r]}const vA={inView:{Feature:yA},tap:{Feature:dA},focus:{Feature:uA},hover:{Feature:cA}},bA={layout:{ProjectionNode:z2,MeasureLayout:w2}},np={current:null},D2={current:!1};function SA(){if(D2.current=!0,!!jp)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),i=()=>np.current=e.matches;e.addListener(i),i()}else np.current=!1}const wA=new WeakMap;function $A(e,i,r){for(const o in i){const l=i[o],d=r[o];if(At(l))e.addValue(o,l);else if(At(d))e.addValue(o,rs(l,{owner:e}));else if(d!==l)if(e.hasValue(o)){const f=e.getValue(o);f.liveStyle===!0?f.jump(l):f.hasAnimated||f.set(l)}else{const f=e.getStaticValue(o);e.addValue(o,rs(f!==void 0?f:l,{owner:e}))}}for(const o in r)i[o]===void 0&&e.removeValue(o);return i}const Px=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class jA{scrapeMotionValuesFromProps(i,r,o){return{}}constructor({parent:i,props:r,presenceContext:o,reducedMotionConfig:l,blockInitialAnimation:d,visualState:f},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Hp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=Bt.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,qe.render(this.render,!1,!0))};const{latestValues:m,renderState:g}=f;this.latestValues=m,this.baseTarget={...m},this.initialValues=r.initial?{...m}:{},this.renderState=g,this.parent=i,this.props=r,this.presenceContext=o,this.depth=i?i.depth+1:0,this.reducedMotionConfig=l,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=ou(r),this.isVariantNode=Wb(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:y,...b}=this.scrapeMotionValuesFromProps(r,{},this);for(const w in b){const j=b[w];m[w]!==void 0&&At(j)&&j.set(m[w],!1)}}mount(i){this.current=i,wA.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,o)=>this.bindToMotionValue(o,r)),D2.current||SA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:np.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),this.projection=void 0,Di(this.notifyUpdate),Di(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const r=this.features[i];r&&(r.unmount(),r.isMounted=!1)}this.current=null}bindToMotionValue(i,r){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const o=kr.has(i);o&&this.onBindTransform&&this.onBindTransform();const l=r.on("change",p=>{this.latestValues[i]=p,this.props.onUpdate&&qe.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0)}),d=r.on("renderRequest",this.scheduleRender);let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,i,r)),this.valueSubscriptions.set(i,()=>{l(),d(),f&&f(),r.owner&&r.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in Rr){const r=Rr[i];if(!r)continue;const{isEnabled:o,Feature:l}=r;if(!this.features[i]&&l&&o(this.props)&&(this.features[i]=new l(this)),this.features[i]){const d=this.features[i];d.isMounted?d.update():(d.mount(),d.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):et()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,r){this.latestValues[i]=r}update(i,r){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let o=0;o<Px.length;o++){const l=Px[o];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const d="on"+l,f=i[d];f&&(this.propEventSubscriptions[l]=this.on(l,f))}this.prevMotionValues=$A(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(i),()=>r.variantChildren.delete(i)}addValue(i,r){const o=this.values.get(i);r!==o&&(o&&this.removeValue(i),this.bindToMotionValue(i,r),this.values.set(i,r),this.latestValues[i]=r.get())}removeValue(i){this.values.delete(i);const r=this.valueSubscriptions.get(i);r&&(r(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,r){if(this.props.values&&this.props.values[i])return this.props.values[i];let o=this.values.get(i);return o===void 0&&r!==void 0&&(o=rs(r===null?void 0:r,{owner:this}),this.addValue(i,o)),o}readValue(i,r){let o=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return o!=null&&(typeof o=="string"&&(lb(o)||cb(o))?o=parseFloat(o):!X5(o)&&Mi.test(r)&&(o=qb(i,r)),this.setBaseTarget(i,At(o)?o.get():o)),At(o)?o.get():o}setBaseTarget(i,r){this.baseTarget[i]=r}getBaseTarget(i){var d;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const f=Wp(this.props,r,(d=this.presenceContext)==null?void 0:d.custom);f&&(o=f[i])}if(r&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,i);return l!==void 0&&!At(l)?l:this.initialValues[i]!==void 0&&o===void 0?void 0:this.baseTarget[i]}on(i,r){return this.events[i]||(this.events[i]=new zp),this.events[i].add(r)}notify(i,...r){this.events[i]&&this.events[i].notify(...r)}}class M2 extends jA{constructor(){super(...arguments),this.KeyframeResolver=N5}sortInstanceNodePosition(i,r){return i.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(i,r){return i.style?i.style[r]:void 0}removeValueFromRenderState(i,{vars:r,style:o}){delete r[i],delete o[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;At(i)&&(this.childSubscription=i.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function O2(e,{style:i,vars:r},o,l){Object.assign(e.style,i,l&&l.getProjectionStyles(o));for(const d in r)e.style.setProperty(d,r[d])}function TA(e){return window.getComputedStyle(e)}class AA extends M2{constructor(){super(...arguments),this.type="html",this.renderInstance=O2}readValueFromInstance(i,r){if(kr.has(r))return t5(i,r);{const o=TA(i),l=(Op(r)?o.getPropertyValue(r):o[r])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(i,{transformPagePoint:r}){return x2(i,r)}build(i,r,o){Zp(i,r,o.transformTemplate)}scrapeMotionValuesFromProps(i,r,o){return Jp(i,r,o)}}const k2=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function EA(e,i,r,o){O2(e,i,void 0,o);for(const l in i.attrs)e.setAttribute(k2.has(l)?l:Kp(l),i.attrs[l])}class RA extends M2{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=et}getBaseTargetFromProps(i,r){return i[r]}readValueFromInstance(i,r){if(kr.has(r)){const o=Yb(r);return o&&o.default||0}return r=k2.has(r)?r:Kp(r),i.getAttribute(r)}scrapeMotionValuesFromProps(i,r,o){return l2(i,r,o)}build(i,r,o){a2(i,r,this.isSVGTag,o.transformTemplate)}renderInstance(i,r,o,l){EA(i,r,o,l)}mount(i){this.isSVGTag=o2(i.tagName),super.mount(i)}}const CA=(e,i)=>Ip(e)?new RA(i):new AA(i,{allowProjection:e!==z.Fragment}),zA=E8({...J8,...vA,...lA,...bA},CA),ie=W5(zA);var B2={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Fx=pt.createContext&&pt.createContext(B2),DA=["attr","size","title"];function MA(e,i){if(e==null)return{};var r=OA(e,i),o,l;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(l=0;l<d.length;l++)o=d[l],!(i.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function OA(e,i){if(e==null)return{};var r={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){if(i.indexOf(o)>=0)continue;r[o]=e[o]}return r}function qc(){return qc=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},qc.apply(this,arguments)}function Yx(e,i){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);i&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,o)}return r}function Gc(e){for(var i=1;i<arguments.length;i++){var r=arguments[i]!=null?arguments[i]:{};i%2?Yx(Object(r),!0).forEach(function(o){kA(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Yx(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function kA(e,i,r){return i=BA(i),i in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e}function BA(e){var i=NA(e,"string");return typeof i=="symbol"?i:i+""}function NA(e,i){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,i);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(e)}function N2(e){return e&&e.map((i,r)=>pt.createElement(i.tag,Gc({key:r},i.attr),N2(i.child)))}function we(e){return i=>pt.createElement(LA,qc({attr:Gc({},e.attr)},i),N2(e.child))}function LA(e){var i=r=>{var{attr:o,size:l,title:d}=e,f=MA(e,DA),p=l||r.size||"1em",m;return r.className&&(m=r.className),e.className&&(m=(m?m+" ":"")+e.className),pt.createElement("svg",qc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,o,f,{className:m,style:Gc(Gc({color:e.color||r.color},r.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),d&&pt.createElement("title",null,d),e.children)};return Fx!==void 0?pt.createElement(Fx.Consumer,null,r=>i(r)):i(B2)}function L2(e){return we({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)}function VA(e){return we({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function _A(e){return we({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(e)}function UA(e){return we({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"},child:[]}]})(e)}function V2(e){return we({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(e)}function _2(e){return we({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(e)}function HA(e){return we({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(e)}function PA(e){return we({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function FA(e){return we({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function YA(e){return we({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"},child:[]}]})(e)}function qA(e){return we({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"},child:[]}]})(e)}function GA(e){return we({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"},child:[]}]})(e)}function ha(e){return we({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(e)}function tm(e){return we({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(e)}function U2(e){return we({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function XA(e){return we({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"},child:[]}]})(e)}function KA(e){return we({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function ZA(e){return we({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"},child:[]}]})(e)}function su(e){return we({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"},child:[]}]})(e)}function H2(e){return we({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(e)}function lu(e){return we({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function P2(e){return we({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(e)}function QA(e){return we({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M272 191.91c-17.6 0-32 14.4-32 32v80c0 8.84-7.16 16-16 16s-16-7.16-16-16v-76.55c0-17.39 4.72-34.47 13.69-49.39l77.75-129.59c9.09-15.16 4.19-34.81-10.97-43.91-14.45-8.67-32.72-4.3-42.3 9.21-.2.23-.62.21-.79.48l-117.26 175.9C117.56 205.9 112 224.31 112 243.29v80.23l-90.12 30.04A31.974 31.974 0 0 0 0 383.91v96c0 10.82 8.52 32 32 32 2.69 0 5.41-.34 8.06-1.03l179.19-46.62C269.16 449.99 304 403.8 304 351.91v-128c0-17.6-14.4-32-32-32zm346.12 161.73L528 323.6v-80.23c0-18.98-5.56-37.39-16.12-53.23L394.62 14.25c-.18-.27-.59-.24-.79-.48-9.58-13.51-27.85-17.88-42.3-9.21-15.16 9.09-20.06 28.75-10.97 43.91l77.75 129.59c8.97 14.92 13.69 32 13.69 49.39V304c0 8.84-7.16 16-16 16s-16-7.16-16-16v-80c0-17.6-14.4-32-32-32s-32 14.4-32 32v128c0 51.89 34.84 98.08 84.75 112.34l179.19 46.62c2.66.69 5.38 1.03 8.06 1.03 23.48 0 32-21.18 32-32v-96c0-13.77-8.81-25.99-21.88-30.35z"},child:[]}]})(e)}function qx(e){return we({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"},child:[]}]})(e)}function IA(e){return we({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function WA(e){return we({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304,320a16,16,0,1,0,16,16A16,16,0,0,0,304,320Zm32-96a16,16,0,1,0,16,16A16,16,0,0,0,336,224Zm32,64a16,16,0,1,0-16-16A16,16,0,0,0,368,288Zm-32,32a16,16,0,1,0-16-16A16,16,0,0,0,336,320Zm-32-64a16,16,0,1,0,16,16A16,16,0,0,0,304,256Zm128-32a16,16,0,1,0-16-16A16,16,0,0,0,432,224Zm-48,16a16,16,0,1,0,16-16A16,16,0,0,0,384,240Zm-16-48a16,16,0,1,0,16,16A16,16,0,0,0,368,192Zm96,32a16,16,0,1,0,16,16A16,16,0,0,0,464,224Zm32-32a16,16,0,1,0,16,16A16,16,0,0,0,496,192Zm-64,64a16,16,0,1,0,16,16A16,16,0,0,0,432,256Zm-32,32a16,16,0,1,0,16,16A16,16,0,0,0,400,288Zm-64,64a16,16,0,1,0,16,16A16,16,0,0,0,336,352Zm-32,32a16,16,0,1,0,16,16A16,16,0,0,0,304,384Zm64-64a16,16,0,1,0,16,16A16,16,0,0,0,368,320Zm21.65-218.35-11.3-11.31a16,16,0,0,0-22.63,0L350.05,96A111.19,111.19,0,0,0,272,64c-19.24,0-37.08,5.3-52.9,13.85l-10-10A121.72,121.72,0,0,0,123.44,32C55.49,31.5,0,92.91,0,160.85V464a16,16,0,0,0,16,16H48a16,16,0,0,0,16-16V158.4c0-30.15,21-58.2,51-61.93a58.38,58.38,0,0,1,48.93,16.67l10,10C165.3,138.92,160,156.76,160,176a111.23,111.23,0,0,0,32,78.05l-5.66,5.67a16,16,0,0,0,0,22.62l11.3,11.31a16,16,0,0,0,22.63,0L389.65,124.28A16,16,0,0,0,389.65,101.65Z"},child:[]}]})(e)}function F2(e){return we({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(e)}function JA(e){return we({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function cu(e){return we({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function Y2(e){return we({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(e)}function e9(e){return we({attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(e)}function t9(e){return we({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"},child:[]}]})(e)}function uu(e){return we({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"},child:[]}]})(e)}var ip=new Map,Hl=new WeakMap,Gx=0,n9=void 0;function i9(e){return e?(Hl.has(e)||(Gx+=1,Hl.set(e,Gx.toString())),Hl.get(e)):"0"}function a9(e){return Object.keys(e).sort().filter(i=>e[i]!==void 0).map(i=>`${i}_${i==="root"?i9(e.root):e[i]}`).toString()}function r9(e){const i=a9(e);let r=ip.get(i);if(!r){const o=new Map;let l;const d=new IntersectionObserver(f=>{f.forEach(p=>{var m;const g=p.isIntersecting&&l.some(y=>p.intersectionRatio>=y);e.trackVisibility&&typeof p.isVisible>"u"&&(p.isVisible=g),(m=o.get(p.target))==null||m.forEach(y=>{y(g,p)})})},e);l=d.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:i,observer:d,elements:o},ip.set(i,r)}return r}function o9(e,i,r={},o=n9){if(typeof window.IntersectionObserver>"u"&&o!==void 0){const m=e.getBoundingClientRect();return i(o,{isIntersecting:o,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:m,intersectionRect:m,rootBounds:m}),()=>{}}const{id:l,observer:d,elements:f}=r9(r),p=f.get(e)||[];return f.has(e)||f.set(e,p),p.push(i),d.observe(e),function(){p.splice(p.indexOf(i),1),p.length===0&&(f.delete(e),d.unobserve(e)),f.size===0&&(d.disconnect(),ip.delete(l))}}function Ue({threshold:e,delay:i,trackVisibility:r,rootMargin:o,root:l,triggerOnce:d,skip:f,initialInView:p,fallbackInView:m,onChange:g}={}){var y;const[b,w]=z.useState(null),j=z.useRef(g),[$,R]=z.useState({inView:!!p,entry:void 0});j.current=g,z.useEffect(()=>{if(f||!b)return;let M;return M=o9(b,(H,_)=>{R({inView:H,entry:_}),j.current&&j.current(H,_),_.isIntersecting&&d&&M&&(M(),M=void 0)},{root:l,rootMargin:o,threshold:e,trackVisibility:r,delay:i},m),()=>{M&&M()}},[Array.isArray(e)?e.toString():e,b,l,o,d,f,r,m,i]);const T=(y=$.entry)==null?void 0:y.target,E=z.useRef(void 0);!b&&T&&!d&&!f&&E.current!==T&&(E.current=T,R({inView:!!p,entry:void 0}));const k=[w,$.inView,$.entry];return k.ref=k[0],k.inView=k[1],k.entry=k[2],k}const he=({children:e,variant:i="default",background:r,backgroundImage:o,fullWidth:l=!1,spacing:d="medium",overlay:f=!1,id:p,className:m,...g})=>c.jsx(s9,{$variant:i,$background:r,$backgroundImage:o,$spacing:d,$overlay:f,id:p,className:m,...g,children:c.jsx(l9,{$fullWidth:l,children:e})}),s9=v.section`
  position: relative;
  width: 100%;

  /* Background options */
  background-color: ${({$background:e,theme:i,$variant:r})=>{if(e)return e;switch(r){case"primary":return i.colors.primary;case"secondary":return i.colors.secondary;case"accent":return i.colors.accent;case"light":return i.colors.offWhite;case"dark":return i.colors.charcoal;default:return"transparent"}}};

  /* Text color based on variant */
  color: ${({$variant:e,theme:i})=>{switch(e){case"primary":case"accent":case"dark":return i.colors.white;default:return i.colors.charcoal}}};

  /* Background image if provided */
  ${({$backgroundImage:e,$overlay:i})=>e&&be`
    background-image: url(${e});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    ${i&&be`
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 1;
      }
    `}
  `}

  /* Spacing variants */
  ${({$spacing:e,theme:i})=>{switch(e){case"small":return be`
          padding: ${i.spacing[8]} 0;
        `;case"large":return be`
          padding: ${i.spacing[20]} 0;
        `;case"none":return be`
          padding: 0;
        `;default:return be`
          padding: ${i.spacing[16]} 0;
        `}}}
`,l9=v.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: ${({$fullWidth:e})=>e?"100%":"1400px"};
  margin: 0 auto;
  padding: ${({$fullWidth:e,theme:i})=>e?"0":`0 ${i.spacing[6]}`};
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ce=({title:e,subtitle:i,align:r="center",size:o="medium",withDivider:l=!0,color:d="default",className:f,...p})=>c.jsxs(c9,{$align:r,className:f,...p,children:[i&&c.jsx(d9,{$size:o,$color:d,children:i}),c.jsx(u9,{$size:o,$color:d,children:e}),l&&c.jsx(f9,{$align:r})]}),c9=v.div`
  text-align: ${({$align:e})=>e};
  margin-bottom: ${({theme:e})=>e.spacing[10]};
`,u9=v.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  color: ${({$color:e,theme:i})=>{switch(e){case"light":return i.colors.white;case"primary":return i.colors.primary;case"accent":return i.colors.accent;default:return i.colors.charcoal}}};

  /* Size variants */
  ${({$size:e,theme:i})=>{switch(e){case"small":return be`
          font-size: ${i.typography.fontSize["2xl"]};

          @media (max-width: ${i.breakpoints.md}) {
            font-size: ${i.typography.fontSize.xl};
          }
        `;case"large":return be`
          font-size: ${i.typography.fontSize["5xl"]};

          @media (max-width: ${i.breakpoints.md}) {
            font-size: ${i.typography.fontSize["3xl"]};
          }
        `;default:return be`
          font-size: ${i.typography.fontSize["4xl"]};

          @media (max-width: ${i.breakpoints.md}) {
            font-size: ${i.typography.fontSize["2xl"]};
          }
        `}}}
`,d9=v.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.accent};
  color: ${({$color:e,theme:i})=>{switch(e){case"light":return i.colors.white;case"primary":return i.colors.primary;default:return i.colors.accent}}};
  margin-bottom: ${({theme:e})=>e.spacing[2]};

  /* Size variants */
  ${({$size:e,theme:i})=>{switch(e){case"small":return be`
          font-size: ${i.typography.fontSize.md};
        `;case"large":return be`
          font-size: ${i.typography.fontSize.xl};
        `;default:return be`
          font-size: ${i.typography.fontSize.lg};
        `}}}
`,f9=v.div`
  height: 2px;
  width: 80px;
  background-color: ${({theme:e})=>e.colors.accent};
  margin: ${({$align:e})=>{switch(e){case"left":return"0 auto 0 0";case"right":return"0 0 0 auto";default:return"0 auto"}}};
`,Te=({children:e,variant:i="primary",size:r="medium",to:o,href:l,fullWidth:d=!1,icon:f,iconPosition:p="left",disabled:m=!1,onClick:g,...y})=>{const b=o?p9:l?m9:h9;return c.jsxs(b,{to:o,href:l,$variant:i,$size:r,$fullWidth:d,$iconPosition:p,disabled:m,onClick:g,...y,children:[f&&p==="left"&&c.jsx(Xx,{$iconPosition:p,children:f}),c.jsx("span",{children:e}),f&&p==="right"&&c.jsx(Xx,{$iconPosition:p,children:f})]})},nm=be`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  transition: all ${({theme:e})=>e.animation.normal} ease;
  cursor: pointer;
  text-align: center;
  width: ${({$fullWidth:e})=>e?"100%":"auto"};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }

  /* Size variants */
  ${({$size:e,theme:i})=>{switch(e){case"small":return be`
          padding: ${i.spacing[2]} ${i.spacing[4]};
          font-size: ${i.typography.fontSize.xs};
        `;case"large":return be`
          padding: ${i.spacing[4]} ${i.spacing[8]};
          font-size: ${i.typography.fontSize.md};
        `;default:return be`
          padding: ${i.spacing[3]} ${i.spacing[6]};
          font-size: ${i.typography.fontSize.sm};
        `}}}

  /* Color variants */
  ${({$variant:e,theme:i})=>{switch(e){case"secondary":return be`
          background-color: ${i.colors.secondary};
          color: ${i.colors.charcoal};

          &:hover {
            background-color: ${i.colors.primary};
            color: ${i.colors.white};
            transform: translateY(-2px);
            box-shadow: ${i.shadows.md};
          }
        `;case"outline":return be`
          background-color: transparent;
          color: ${i.colors.primary};
          border: 2px solid ${i.colors.primary};

          &:hover {
            background-color: ${i.colors.primary};
            color: ${i.colors.white};
            transform: translateY(-2px);
          }
        `;case"text":return be`
          background-color: transparent;
          color: ${i.colors.primary};
          padding-left: 0;
          padding-right: 0;

          &:hover {
            color: ${i.colors.accent};
            transform: translateX(4px);
          }
        `;case"accent":return be`
          background-color: ${i.colors.accent};
          color: ${i.colors.white};

          &:hover {
            background-color: ${i.colors.primary};
            transform: translateY(-2px);
            box-shadow: ${i.shadows.md};
          }
        `;default:return be`
          background-color: ${i.colors.primary};
          color: ${i.colors.white};

          &:hover {
            background-color: ${i.colors.accent};
            transform: translateY(-2px);
            box-shadow: ${i.shadows.md};
          }
        `}}}
`,h9=v.button`
  ${nm}
`,p9=v(Ne)`
  ${nm}
  text-decoration: none;
`,m9=v.a`
  ${nm}
  text-decoration: none;
`,Xx=v.span`
  display: flex;
  align-items: center;
  margin-left: ${({$iconPosition:e})=>e==="right"?"8px":"0"};
  margin-right: ${({$iconPosition:e})=>e==="left"?"8px":"0"};
`,q2=({children:e,variant:i="default",to:r,href:o,onClick:l,image:d,title:f,subtitle:p,content:m,footer:g,elevation:y="medium",hoverEffect:b=!0,aspectRatio:w,className:j,...$})=>{const R=r?X2:o?K2:G2,T=d||f||p||m||g;return c.jsx(R,{as:ie.div,whileHover:b?{y:-5}:{},transition:{duration:.3},variant:i,elevation:y,className:j,to:r,href:o,onClick:l,...$,children:T?c.jsxs(c.Fragment,{children:[d&&c.jsx(g9,{aspectRatio:w,children:c.jsx(y9,{src:d,alt:f||"Card image"})}),c.jsxs(x9,{children:[p&&c.jsx(b9,{children:p}),f&&c.jsx(v9,{children:f}),m&&c.jsx(S9,{children:m})]}),g&&c.jsx(w9,{children:g})]}):e})},im=be`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background-color: ${({theme:e})=>e.colors.white};
  transition: all ${({theme:e})=>e.animation.normal} ease;
  height: 100%;
  
  /* Elevation variants */
  ${({elevation:e,theme:i})=>{switch(e){case"none":return be`
          box-shadow: none;
        `;case"low":return be`
          box-shadow: ${i.shadows.sm};
        `;case"high":return be`
          box-shadow: ${i.shadows.lg};
        `;default:return be`
          box-shadow: ${i.shadows.md};
        `}}}
  
  /* Variant styles */
  ${({variant:e,theme:i})=>{switch(e){case"glass":return be`
          background-color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        `;case"outlined":return be`
          background-color: transparent;
          border: 1px solid ${i.colors.lightGray};
          box-shadow: none;
        `;case"primary":return be`
          background-color: ${i.colors.primary};
          color: ${i.colors.white};
        `;case"accent":return be`
          background-color: ${i.colors.accent};
          color: ${i.colors.white};
        `;default:return be`
          background-color: ${i.colors.white};
        `}}}
  
  &:hover {
    ${({elevation:e,theme:i,hoverEffect:r})=>r&&e!=="none"&&be`
        box-shadow: ${i.shadows.xl};
      `}
  }
`,G2=v.div`
  ${im}
`,X2=v(Ne)`
  ${im}
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`,K2=v.a`
  ${im}
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`,g9=v.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  
  ${({aspectRatio:e})=>e?be`
        aspect-ratio: ${e};
      `:be`
        aspect-ratio: 16/9;
      `}
`,y9=v.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${G2}:hover &,
  ${X2}:hover &,
  ${K2}:hover & {
    transform: scale(1.05);
  }
`,x9=v.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${({theme:e})=>e.spacing[6]};
`,v9=v.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  color: ${({theme:e})=>e.colors.primary};
`,b9=v.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.accent};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.accent};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,S9=v.div`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.darkGray};
`,w9=v.div`
  padding: ${({theme:e})=>`${e.spacing[4]} ${e.spacing[6]}`};
  border-top: 1px solid ${({theme:e})=>e.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,$9=({post:e,formatDate:i})=>c.jsxs(j9,{as:ie.div,whileHover:{y:-5},transition:{duration:.3},children:[c.jsxs(Z2,{to:`/blog/${e.slug}`,children:[c.jsx(T9,{src:e.featuredImage,alt:e.title}),c.jsx(A9,{children:e.category.charAt(0).toUpperCase()+e.category.slice(1)})]}),c.jsxs(E9,{children:[c.jsxs(R9,{children:[c.jsxs(Kx,{children:[c.jsx(ha,{}),c.jsx("span",{children:i(e.publishedAt)})]}),c.jsxs(Kx,{children:[c.jsx(cu,{}),c.jsx("span",{children:e.author.name})]})]}),c.jsx(C9,{to:`/blog/${e.slug}`,children:e.title}),c.jsx(z9,{children:e.excerpt}),c.jsxs(D9,{to:`/blog/${e.slug}`,children:["Read More ",c.jsx(PA,{})]})]})]}),j9=v.div`
  background-color: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.md};
  height: 100%;
  display: flex;
  flex-direction: column;
`,Z2=v(Ne)`
  position: relative;
  display: block;
  height: 220px;
  overflow: hidden;
`,T9=v.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${Z2}:hover & {
    transform: scale(1.05);
  }
`,A9=v.div`
  position: absolute;
  top: ${({theme:e})=>e.spacing[3]};
  left: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[3]};
  background-color: ${({theme:e})=>e.colors.accent};
  color: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  z-index: 1;
`,E9=v.div`
  padding: ${({theme:e})=>e.spacing[5]};
  flex: 1;
  display: flex;
  flex-direction: column;
`,R9=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.gray[600]};
`,Kx=v.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,C9=v(Ne)`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.gray[900]};
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  text-decoration: none;
  line-height: 1.4;
  
  &:hover {
    color: ${({theme:e})=>e.colors.primary};
  }
`,z9=v.p`
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.gray[700]};
  line-height: 1.6;
  flex: 1;
`,D9=v(Ne)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.colors.primary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: auto;
  
  svg {
    font-size: 0.8em;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: ${({theme:e})=>e.colors.primaryDark};
    
    svg {
      transform: translateX(4px);
    }
  }
`,ap=({testimonial:e,variant:i="default"})=>{const r=o=>Array.from({length:5},(l,d)=>c.jsx(M9,{$filled:d<o,children:c.jsx(F2,{})},d));return i==="featured"?c.jsxs(O9,{as:ie.div,whileHover:{y:-5},transition:{duration:.3},children:[c.jsx(k9,{children:c.jsx(qx,{})}),c.jsxs(B9,{children:[c.jsx(N9,{children:e.text}),c.jsx(L9,{children:r(e.rating)}),c.jsxs(V9,{children:[c.jsx(_9,{src:e.image,alt:e.name}),c.jsxs(U9,{children:[c.jsx(H9,{children:e.name}),c.jsx(P9,{children:e.location})]})]})]})]}):c.jsxs(Q2,{as:ie.div,whileHover:{y:-5},transition:{duration:.3},children:[c.jsx(I2,{children:c.jsx(qx,{})}),c.jsxs(W2,{children:[c.jsx(J2,{children:e.text}),c.jsx(e4,{children:r(e.rating)}),c.jsxs(t4,{children:[c.jsx(n4,{src:e.image,alt:e.name}),c.jsxs(i4,{children:[c.jsx(a4,{children:e.name}),c.jsx(r4,{children:e.location})]})]})]})]})},Q2=v.div`
  background-color: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
  padding: ${({theme:e})=>e.spacing[6]};
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
`,I2=v.div`
  color: ${({theme:e})=>e.colors.primary};
  font-size: 1.5rem;
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  opacity: 0.5;
`,W2=v.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,J2=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  line-height: 1.6;
  color: ${({theme:e})=>e.colors.gray[700]};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  flex: 1;
`,e4=v.div`
  display: flex;
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,M9=v.span`
  color: ${({$filled:e,theme:i})=>e?i.colors.accent:i.colors.gray[300]};
  margin-right: ${({theme:e})=>e.spacing[1]};
`,t4=v.div`
  display: flex;
  align-items: center;
`,n4=v.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({theme:e})=>e.spacing[3]};
`,i4=v.div`
  display: flex;
  flex-direction: column;
`,a4=v.h4`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.gray[900]};
  margin-bottom: ${({theme:e})=>e.spacing[1]};
`,r4=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.gray[500]};
`,O9=v(Q2)`
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.white};
`,k9=v(I2)`
  color: ${({theme:e})=>e.colors.white};
`,B9=v(W2)``,N9=v(J2)`
  color: ${({theme:e})=>e.colors.white};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
`,L9=v(e4)``,V9=v(t4)``,_9=v(n4)``,U9=v(i4)``,H9=v(a4)`
  color: ${({theme:e})=>e.colors.white};
`,P9=v(r4)`
  color: ${({theme:e})=>e.colors.white};
  opacity: 0.8;
`,Zx=[{id:1,name:"Sarah Johnson",location:"New York, USA",text:"My experience at Vaikunth Yoga Retreat was truly transformative. The serene environment, expert instructors, and holistic approach to wellness helped me reconnect with myself in ways I never thought possible.",rating:5,image:"https://randomuser.me/api/portraits/women/44.jpg",featured:!0},{id:2,name:"Michael Chen",location:"Toronto, Canada",text:"The meditation retreat exceeded all my expectations. The peaceful Himalayan setting and the authentic yoga practices have given me tools that I continue to use in my daily life.",rating:5,image:"https://randomuser.me/api/portraits/men/32.jpg"},{id:3,name:"Priya Sharma",location:"London, UK",text:"As a yoga instructor myself, I was impressed by the depth of knowledge and the traditional approach at Vaikunth. The Ayurvedic treatments and personalized attention made this a standout experience.",rating:5,image:"https://randomuser.me/api/portraits/women/68.jpg"},{id:4,name:"David Wilson",location:"Sydney, Australia",text:"The Himalayan trek combined with daily yoga sessions was the perfect balance of adventure and mindfulness. The accommodations were comfortable and the food was exceptional.",rating:4,image:"https://randomuser.me/api/portraits/men/75.jpg"}],F9=()=>{const[e,i]=Ue({triggerOnce:!0,threshold:.1}),r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},o={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6}}},l=Zx.find(f=>f.featured),d=Zx.filter(f=>!f.featured).slice(0,3);return c.jsx(he,{$variant:"light",ref:e,children:c.jsxs(Y9,{children:[c.jsx(Ce,{title:"What Our Guests Say",subtitle:"Testimonials",align:"center"}),c.jsxs(ie.div,{initial:"hidden",animate:i?"visible":"hidden",variants:r,children:[l&&c.jsx(ie.div,{variants:o,children:c.jsx(q9,{children:c.jsx(ap,{testimonial:l,variant:"featured"})})}),c.jsx(G9,{children:d.map(f=>c.jsx(ie.div,{variants:o,children:c.jsx(ap,{testimonial:f})},f.id))}),c.jsx(X9,{children:c.jsx(Te,{to:"/testimonials",variant:"outline",children:"View All Testimonials"})})]})]})})},Y9=v.div`
  max-width: 1200px;
  margin: 0 auto;
`,q9=v.div`
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,G9=v.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${({theme:e})=>e.spacing[6]};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`,X9=v.div`
  display: flex;
  justify-content: center;
  margin-top: ${({theme:e})=>e.spacing[10]};
`,Ze=(e,i,r)=>["/assets/images/hero-bg.jpg","/assets/images/about-hero.jpg","/assets/images/programs-hero.jpg","/assets/images/accommodations-hero.jpg","/assets/images/testimonials-hero.jpg","/assets/images/contact-hero.jpg","/assets/images/booking-hero.jpg","/assets/images/dashboard-hero.jpg","/assets/images/404.png","/assets/images/logo.png","/assets/images/logo-white.png","/assets/images/programs/teacher-training.jpg","/assets/images/programs/meditation-retreat.jpg","/assets/images/programs/yoga-retreat.jpg","/assets/images/programs/ayurveda-retreat.jpg","/assets/images/accommodations/deluxe-room.jpg","/assets/images/accommodations/standard-room.jpg","/assets/images/accommodations/cottage.jpg","/assets/images/accommodations/dormitory.jpg","/assets/images/team/guru-amrit.jpg","/assets/images/team/dr-priya.jpg","/assets/images/users/default.jpg","/assets/images/dashboard/booking-icon.png","/assets/images/dashboard/profile-icon.png","/assets/images/dashboard/settings-icon.png"].includes(e)?e:`https://picsum.photos/${i}/${r}`,K9=(e,i,r)=>`https://picsum.photos/id/${e}/${i}/${r}`,Qx={hero:[211,326,329,334,338,434],yoga:[501,502,503,504,505],people:[64,65,91,96,177,219,342],accommodations:[174,183,239,242,251,255],food:[292,370,376,488,493],nature:[106,119,197,225,429],dashboard:[42,338,349,357,360],booking:[306,308,309,315,318]},Me=(e,i,r)=>{const o=Qx[e]||Qx.nature,l=o[Math.floor(Math.random()*o.length)];return K9(l,i,r)},Z9=[{id:1,title:"The Ancient Wisdom of Yoga Philosophy",slug:"ancient-wisdom-yoga-philosophy",excerpt:"Explore the philosophical foundations of yoga and how they can transform your practice and daily life.",featuredImage:"/assets/images/blog.png",category:"yoga",author:{name:"Guru Amrit",avatar:Ze("/assets/images/team/guru-amrit.jpg",100,100)},publishedAt:"2023-05-15T10:30:00Z",readTime:8},{id:2,title:"Meditation Techniques for Beginners",slug:"meditation-techniques-beginners",excerpt:"Simple yet powerful meditation techniques that anyone can practice to find inner peace and mental clarity.",featuredImage:"/assets/images/blog.png",category:"meditation",author:{name:"Dr. Priya Sharma",avatar:Ze("/assets/images/team/dr-priya.jpg",100,100)},publishedAt:"2023-06-02T14:15:00Z",readTime:6},{id:3,title:"Ayurvedic Principles for Seasonal Wellness",slug:"ayurvedic-principles-seasonal-wellness",excerpt:"How to adapt your diet and lifestyle according to Ayurvedic wisdom for optimal health throughout the changing seasons.",featuredImage:"/assets/images/blog.png",category:"ayurveda",author:{name:"Vaidya Raj Kumar",avatar:Ze("/assets/images/team/default.jpg",100,100)},publishedAt:"2023-06-20T09:45:00Z",readTime:10}],Q9=()=>{const e={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6}}},i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},r=$=>{const R={year:"numeric",month:"long",day:"numeric"};return new Date($).toLocaleDateString(void 0,R)},[o,l]=Ue({triggerOnce:!0,threshold:.2}),[d,f]=Ue({triggerOnce:!0,threshold:.2}),[p,m]=Ue({triggerOnce:!0,threshold:.2}),[g,y]=Ue({triggerOnce:!0,threshold:.2}),[b,w]=Ue({triggerOnce:!0,threshold:.2}),j=[{id:1,title:"200-Hour Yoga Teacher Training",subtitle:"Jun 15 - Jul 10, 2023",image:Ze("/assets/images/programs/teacher-training.jpg",800,600),content:"Immerse yourself in a transformative journey to become a certified yoga instructor in the serene Himalayan mountains.",trending:!0},{id:2,title:"Meditation & Mindfulness Retreat",subtitle:"Jul 20 - Jul 27, 2023",image:Ze("/assets/images/programs/meditation-retreat.jpg",800,600),content:"Discover inner peace and mental clarity through guided meditation practices and mindfulness techniques.",limited:!0},{id:3,title:"Ayurvedic Panchakarma Cleanse",subtitle:"Aug 5 - Aug 19, 2023",image:Me("yoga",800,600),content:"Experience the ancient healing system of Ayurveda with personalized treatments and cleansing therapies."},{id:4,title:"Himalayan Trek & Yoga Adventure",subtitle:"Sep 10 - Sep 20, 2023",image:Me("nature",800,600),content:"Combine the thrill of Himalayan trekking with rejuvenating yoga practices for an unforgettable adventure.",trending:!0}];return c.jsxs("main",{children:[c.jsxs(I9,{backgroundImage:Ze("/assets/images/hero-bg.jpg",1920,1080),fullWidth:!0,children:[c.jsx(W9,{children:c.jsxs(ie.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},style:{width:"100%"},children:[c.jsx(J9,{children:"Vaikunth Yoga Retreat, Auli"}),c.jsx(eE,{children:"A Journey to Wholeness in the Himalayas"}),c.jsx(tE,{children:"Yoga. Healing. Nature. Spiritual Awakening. All in one divine Himalayan escape."}),c.jsxs(nE,{children:[c.jsx(Te,{to:"/booking",size:"large",variant:"accent",children:"Reserve Your Retreat"}),c.jsx(Te,{to:"/programs",size:"large",variant:"outline",children:"Explore Our Programs"})]})]})}),c.jsx(iE,{children:c.jsx(ie.div,{animate:{y:[0,10,0]},transition:{repeat:1/0,duration:1.5},style:{textAlign:"center",width:"100%"}})})]}),c.jsx(he,{children:c.jsxs(ie.div,{ref:o,initial:"hidden",animate:l?"visible":"hidden",variants:e,children:[c.jsx(Ce,{title:"Welcome to Vaikunth",subtitle:"A Sanctuary for Mind, Body & Soul"}),c.jsxs(aE,{children:[c.jsxs(rE,{children:[c.jsx("p",{children:"Nestled at an elevation of 10,000 feet in the majestic Himalayas, Vaikunth Yoga Retreat offers a transformative escape from the ordinary. For over 15 years, we have guided seekers on their journey to wellness, spiritual growth, and self-discovery."}),c.jsx("p",{children:"Our retreat combines ancient yogic wisdom with modern wellness practices, all within the embrace of pristine nature. Here, the mountains aren't just a backdrop—they're your teachers, offering profound lessons in stillness, strength, and perspective."}),c.jsx(Te,{to:"/about",variant:"text",children:"Learn more about our story →"})]}),c.jsxs(oE,{children:[c.jsxs(Pl,{children:[c.jsx(Fl,{children:"10,000+"}),c.jsx(Yl,{children:"Feet Above Sea Level"})]}),c.jsxs(Pl,{children:[c.jsx(Fl,{children:"15+"}),c.jsx(Yl,{children:"Years of Experience"})]}),c.jsxs(Pl,{children:[c.jsx(Fl,{children:"5,000+"}),c.jsx(Yl,{children:"Lives Transformed"})]}),c.jsxs(Pl,{children:[c.jsx(Fl,{children:"20+"}),c.jsx(Yl,{children:"Expert Instructors"})]})]})]})]})}),c.jsx(he,{variant:"light",children:c.jsxs(ie.div,{ref:d,initial:"hidden",animate:f?"visible":"hidden",variants:i,children:[c.jsx(Ce,{title:"Why Choose Vaikunth",subtitle:"The Benefits"}),c.jsxs(sE,{children:[c.jsx(ie.div,{variants:e,children:c.jsxs(ql,{children:[c.jsx(Gl,{children:c.jsx(su,{})}),c.jsx(Xl,{children:"Natural Healing"}),c.jsx(Kl,{children:"Experience the healing power of pristine Himalayan nature, fresh mountain air, and mineral-rich spring water."})]})}),c.jsx(ie.div,{variants:e,children:c.jsxs(ql,{children:[c.jsx(Gl,{children:c.jsx(KA,{})}),c.jsx(Xl,{children:"Holistic Wellness"}),c.jsx(Kl,{children:"Our integrated approach addresses physical, mental, emotional, and spiritual dimensions of wellbeing."})]})}),c.jsx(ie.div,{variants:e,children:c.jsxs(ql,{children:[c.jsx(Gl,{children:c.jsx(lu,{})}),c.jsx(Xl,{children:"Spiritual Growth"}),c.jsx(Kl,{children:"Connect with your higher self through meditation, pranayama, and ancient spiritual practices."})]})}),c.jsx(ie.div,{variants:e,children:c.jsxs(ql,{children:[c.jsx(Gl,{children:c.jsx(uu,{})}),c.jsx(Xl,{children:"Authentic Traditions"}),c.jsx(Kl,{children:"Learn from masters who preserve and share authentic yogic and Ayurvedic traditions."})]})})]})]})}),c.jsx(he,{children:c.jsxs(ie.div,{ref:p,initial:"hidden",animate:m?"visible":"hidden",variants:e,children:[c.jsx(Ce,{title:"Upcoming Retreats & Programs",subtitle:"Transform Your Life"}),c.jsx(lE,{children:c.jsx(cE,{children:j.map($=>c.jsx(uE,{children:c.jsx(q2,{to:`/programs/${$.id}`,image:$.image,title:$.title,subtitle:$.subtitle,content:$.content,footer:c.jsxs(dE,{children:[c.jsx(Te,{variant:"text",size:"small",to:`/programs/${$.id}`,children:"View Details →"}),$.trending&&c.jsx(o4,{children:"Trending"}),$.limited&&c.jsx(fE,{children:"Limited Space"})]})})},$.id))})}),c.jsx(nh,{children:c.jsx(Te,{to:"/programs",variant:"outline",children:"View All Programs"})})]})}),c.jsx(he,{variant:"light",children:c.jsxs(ie.div,{ref:g,initial:"hidden",animate:y?"visible":"hidden",variants:e,children:[c.jsx(Ce,{title:"Experience Vaikunth",subtitle:"Visual Stories"}),c.jsxs(pE,{children:[c.jsxs(er,{className:"large",children:[c.jsx(tr,{src:Me("yoga",1200,800),alt:"Yoga at sunrise"}),c.jsx(Ix,{children:c.jsx(Wx,{children:`"The peace I found at Vaikunth stays with me long after I've returned home."`})})]}),c.jsx(er,{children:c.jsx(tr,{src:Me("yoga",800,800),alt:"Meditation session"})}),c.jsx(er,{children:c.jsx(tr,{src:Me("nature",800,800),alt:"Himalayan views"})}),c.jsx(er,{children:c.jsx(tr,{src:Me("yoga",800,800),alt:"Ayurvedic treatment"})}),c.jsxs(er,{className:"vertical",children:[c.jsx(tr,{src:Me("yoga",800,1200),alt:"Yoga pose"}),c.jsx(Ix,{children:c.jsx(Wx,{children:'"I discovered strengths I never knew I had."'})})]}),c.jsx(er,{children:c.jsx(tr,{src:Me("nature",800,800),alt:"Group hiking"})})]}),c.jsx(nh,{children:c.jsx(Te,{to:"/testimonials",variant:"outline",children:"Read Success Stories"})})]})}),c.jsx(F9,{}),c.jsx(he,{ref:b,$variant:"light",children:c.jsxs(ie.div,{initial:"hidden",animate:w?"visible":"hidden",variants:e,children:[c.jsx(Ce,{title:"Wisdom & Insights",subtitle:"From Our Blog",color:"primary"}),c.jsx(hE,{children:Z9.map($=>c.jsx($9,{post:$,formatDate:r},$.id))}),c.jsx(nh,{children:c.jsx(Te,{to:"/blog",variant:"outline",children:"View All Articles"})})]})}),c.jsx(he,{$variant:"primary",children:c.jsxs(mE,{children:[c.jsxs(gE,{children:[c.jsx(Ce,{title:"Join Our Community",subtitle:"Stay Connected",align:"left",color:"light",withDivider:!1}),c.jsx(yE,{children:"Subscribe to receive exclusive meditation guides, retreat updates, and wellness wisdom from our Himalayan sanctuary."})]}),c.jsxs(xE,{children:[c.jsx(vE,{type:"email",placeholder:"Your email address"}),c.jsx(Te,{variant:"accent",children:"Subscribe"})]})]})})]})},I9=v(he)`
  height: 100vh;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%);
    z-index: 1;
  }
`,W9=v.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  width: 100%;
  padding: 0 ${({theme:e})=>e.spacing[6]};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`,J9=v.h1`
  font-size: ${({theme:e})=>e.typography.fontSize["6xl"]};
  color: ${({theme:e})=>e.colors.white};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  width: 100%;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.fontSize["5xl"]};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  }

  @media (max-width: 400px) {
    font-size: calc(${({theme:e})=>e.typography.fontSize["2xl"]} + 0.5rem);
  }
`,eE=v.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.accent};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  color: ${({theme:e})=>e.colors.white};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  width: 100%;
  line-height: 1.4;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize.xl};
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
  }
`,tE=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  color: ${({theme:e})=>e.colors.white};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  max-width: 700px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
    margin-bottom: ${({theme:e})=>e.spacing[6]};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: ${({theme:e})=>e.typography.fontSize.md};
    line-height: 1.5;
    margin-bottom: ${({theme:e})=>e.spacing[5]};
  }
`,nE=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  justify-content: center;
  width: 100%;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`,iE=v.div`
  position: absolute;
  bottom: ${({theme:e})=>e.spacing[4]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({theme:e})=>e.colors.white};
  width: auto;
`;v.p`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;const aE=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing[10]};

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,rE=v.div`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};

  p {
    margin-bottom: ${({theme:e})=>e.spacing[6]};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.fontSize.md};
  }
`,oE=v.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[6]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    gap: ${({theme:e})=>e.spacing[4]};
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,Pl=v.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[6]};
  background-color: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,Fl=v.div`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
  color: ${({theme:e})=>e.colors.primary};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  }
`,Yl=v.div`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.darkGray};
`,sE=v.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({theme:e})=>e.spacing[6]};

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,ql=v.div`
  background-color: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[8]};
  text-align: center;
  box-shadow: ${({theme:e})=>e.shadows.md};
  transition: transform ${({theme:e})=>e.animation.normal} ease;

  &:hover {
    transform: translateY(-10px);
  }
`,Gl=v.div`
  font-size: 3rem;
  color: ${({theme:e})=>e.colors.accent};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,Xl=v.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.primary};
`,Kl=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.darkGray};
  margin-bottom: 0;
`,lE=v.div`
  overflow: hidden;
  margin: 0 -${({theme:e})=>e.spacing[6]};
  padding: 0 ${({theme:e})=>e.spacing[6]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    margin: 0 -${({theme:e})=>e.spacing[4]};
    padding: 0 ${({theme:e})=>e.spacing[4]};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    margin: 0 -${({theme:e})=>e.spacing[2]};
    padding-left: ${({theme:e})=>e.spacing[4]};
    padding-right: 0;
  }
`,cE=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[6]};
  overflow-x: auto;
  padding: ${({theme:e})=>e.spacing[2]} 0;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: ${({theme:e})=>e.spacing[4]};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    gap: ${({theme:e})=>e.spacing[3]};
    padding-right: ${({theme:e})=>e.spacing[4]}; /* Add padding to show there's more to scroll */
  }
`,uE=v.div`
  min-width: 350px;
  scroll-snap-align: start;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    min-width: 280px;
  }
`,dE=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,o4=v.span`
  background-color: ${({theme:e})=>e.colors.accent};
  color: white;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  padding: ${({theme:e})=>`${e.spacing[1]} ${e.spacing[2]}`};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,fE=v(o4)`
  background-color: ${({theme:e})=>e.colors.primary};
`,nh=v.div`
  display: flex;
  justify-content: center;
  margin-top: ${({theme:e})=>e.spacing[10]};
`,hE=v.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:e})=>e.spacing[6]};
  margin-top: ${({theme:e})=>e.spacing[8]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`,pE=v.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 250px);
  gap: ${({theme:e})=>e.spacing[4]};

  .large {
    grid-column: span 2;
  }

  .vertical {
    grid-row: span 2;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);

    .large {
      grid-column: span 1;
    }
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 200px);
    gap: ${({theme:e})=>e.spacing[3]};

    .vertical {
      grid-row: span 1;
    }
  }

  @media (max-width: 400px) {
    grid-template-rows: repeat(6, 180px);
  }
`,er=v.div`
  position: relative;
  overflow: hidden;
  border-radius: ${({theme:e})=>e.borderRadius.lg};

  &:hover img {
    transform: scale(1.05);
  }

  &:hover div {
    opacity: 1;
  }
`,tr=v.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`,Ix=v.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(42, 93, 69, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[6]};
  opacity: 0;
  transition: opacity 0.3s ease;
`,Wx=v.blockquote`
  font-family: ${({theme:e})=>e.typography.fontFamily.accent};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  color: ${({theme:e})=>e.colors.white};
  text-align: center;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
  }
`,mE=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing[10]};
  align-items: center;

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing[8]};
  }
`,gE=v.div`
  h2, p {
    color: ${({theme:e})=>e.colors.white};
  }
`,yE=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  margin-bottom: 0;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize.md};
  }
`,xE=v.form`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
  }
`,vE=v.input`
  flex: 1;
  padding: ${({theme:e})=>`${e.spacing[3]} ${e.spacing[4]}`};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: none;
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  background-color: white;
  color: ${({theme:e})=>e.colors.charcoal};
  -webkit-appearance: none; /* Fix for iOS styling */

  &::placeholder {
    color: ${({theme:e})=>e.colors.gray[500]};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.accent};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
    width: 100%;
  }
`,bE=()=>{const e={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6}}},i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},[r,o]=Ue({triggerOnce:!0,threshold:.2}),[l,d]=Ue({triggerOnce:!0,threshold:.2}),[f,p]=Ue({triggerOnce:!0,threshold:.2}),m=[{id:1,name:"Guru Amrit Singh",role:"Founder & Lead Yoga Instructor",image:Ze("/assets/images/team/guru-amrit.jpg",600,800),bio:"With over 30 years of experience in traditional Hatha and Kundalini yoga, Guru Amrit brings authentic teachings and spiritual wisdom to every session.",specialty:"Kundalini Yoga, Meditation"},{id:2,name:"Dr. Priya Sharma",role:"Ayurvedic Physician",image:Ze("/assets/images/team/dr-priya.jpg",600,800),bio:"A certified Ayurvedic doctor with expertise in Panchakarma and herbal medicine, Dr. Priya creates personalized wellness plans for each guest.",specialty:"Panchakarma, Herbal Remedies"},{id:3,name:"Mohan Joshi",role:"Meditation Guide",image:Me("/assets/images/team/mohan.jpg",600,800),bio:"After spending 12 years meditating in Himalayan caves, Mohan shares profound techniques for inner peace and spiritual awakening.",specialty:"Vipassana, Transcendental Meditation"},{id:4,name:"Neerja Singh",role:"Yoga Instructor",image:Me("/assets/images/team/neerja.jpg",600,800),bio:"Internationally certified in multiple yoga styles, Neerja specializes in making yoga accessible to practitioners of all levels and abilities.",specialty:"Hatha Yoga, Yin Yoga"}];return c.jsxs("main",{children:[c.jsx(SE,{backgroundImage:Ze("/assets/images/about-hero.jpg",1920,800),children:c.jsx(wE,{children:c.jsxs(ie.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:[c.jsx($E,{children:"About Vaikunth"}),c.jsx(jE,{children:"Our Story, Mission & Vision"})]})})}),c.jsx(he,{children:c.jsxs(ie.div,{ref:r,initial:"hidden",animate:o?"visible":"hidden",variants:e,children:[c.jsx(Ce,{title:"Our Journey",subtitle:"The Origin Story"}),c.jsxs(TE,{children:[c.jsx(AE,{children:c.jsx("img",{src:Me("people",800,1e3),alt:"Founder Guru Amrit Singh"})}),c.jsxs(EE,{children:[c.jsxs(RE,{children:[c.jsx("p",{children:"Vaikunth Yoga Retreat was born from a profound spiritual awakening experienced by our founder, Guru Amrit Singh, during his solitary meditation in the Himalayan mountains near Auli in 2005."}),c.jsx("p",{children:"After years of studying with yoga masters across India, Amrit was drawn to the serene energy of this particular mountain slope. During a 40-day meditation, he experienced a vision of creating a sanctuary where seekers from around the world could connect with the transformative power of the Himalayas."}),c.jsx("p",{children:"Starting with just a small cottage and three dedicated students, Vaikunth has grown organically over the years into a world-renowned retreat center. Yet, we've maintained our commitment to small group sizes, personalized attention, and authentic teachings."}),c.jsx("p",{children:'The name "Vaikunth" comes from ancient Sanskrit, referring to a state of ultimate bliss and liberation—the very experience we aim to facilitate for our guests.'})]}),c.jsxs(CE,{children:[c.jsxs(s4,{children:[c.jsx(l4,{children:"Our Mission"}),c.jsx(c4,{children:"To create a sacred space where individuals can reconnect with their true nature through authentic yogic practices, Ayurvedic healing, and the profound energy of the Himalayas."})]}),c.jsxs(zE,{children:[c.jsx(DE,{children:"Our Vision"}),c.jsx(ME,{children:"A world where more people live in harmony with nature, themselves, and others—carrying the peace and wisdom of the mountains into their daily lives and communities."})]})]})]})]})]})}),c.jsxs(he,{variant:"light",children:[c.jsx(Ce,{title:"Our Evolution",subtitle:"Key Milestones"}),c.jsxs(OE,{children:[c.jsxs(nr,{children:[c.jsx(ir,{children:"2005"}),c.jsxs(ar,{children:[c.jsx(rr,{children:"The Beginning"}),c.jsx(or,{children:"Guru Amrit Singh establishes the first meditation hut on our current property."})]})]}),c.jsxs(nr,{children:[c.jsx(ir,{children:"2008"}),c.jsxs(ar,{children:[c.jsx(rr,{children:"First Yoga Teacher Training"}),c.jsx(or,{children:"We conduct our first 200-hour yoga teacher training with 7 international students."})]})]}),c.jsxs(nr,{children:[c.jsx(ir,{children:"2012"}),c.jsxs(ar,{children:[c.jsx(rr,{children:"Ayurvedic Center"}),c.jsx(or,{children:"Opening of our dedicated Ayurvedic treatment center with Dr. Priya Sharma joining the team."})]})]}),c.jsxs(nr,{children:[c.jsx(ir,{children:"2015"}),c.jsxs(ar,{children:[c.jsx(rr,{children:"Eco-Friendly Expansion"}),c.jsx(or,{children:"Completion of our solar-powered accommodation buildings using traditional Himalayan architecture."})]})]}),c.jsxs(nr,{children:[c.jsx(ir,{children:"2018"}),c.jsxs(ar,{children:[c.jsx(rr,{children:"Community Outreach"}),c.jsx(or,{children:"Launch of our scholarship program for local youth and yoga teachers from underserved communities."})]})]}),c.jsxs(nr,{children:[c.jsx(ir,{children:"2023"}),c.jsxs(ar,{children:[c.jsx(rr,{children:"Present Day"}),c.jsx(or,{children:"Vaikunth now welcomes over 500 guests annually from 40+ countries while maintaining our intimate, personalized approach."})]})]})]})]}),c.jsx(he,{children:c.jsxs(ie.div,{ref:l,initial:"hidden",animate:d?"visible":"hidden",variants:e,children:[c.jsx(Ce,{title:"Our Sacred Location",subtitle:"Auli, Uttarakhand"}),c.jsxs(kE,{children:[c.jsx(BE,{children:c.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27667.81713126514!2d79.55989716551828!3d30.530195726064378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a79c32a24e8fdb%3A0x9a14ababee539f3f!2sAuli%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin",width:"100%",height:"450",style:{border:0,borderRadius:"12px"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Auli Map"})}),c.jsxs(NE,{children:[c.jsxs(LE,{children:[c.jsxs(Zl,{children:[c.jsx(Ql,{children:"Elevation"}),c.jsx(Il,{children:"10,000 ft"})]}),c.jsxs(Zl,{children:[c.jsx(Ql,{children:"Climate"}),c.jsx(Il,{children:"Alpine"})]}),c.jsxs(Zl,{children:[c.jsx(Ql,{children:"Nearest Airport"}),c.jsx(Il,{children:"Dehradun (180 km)"})]}),c.jsxs(Zl,{children:[c.jsx(Ql,{children:"Nearest Town"}),c.jsx(Il,{children:"Joshimath (16 km)"})]})]}),c.jsxs(VE,{children:[c.jsx("p",{children:"Nestled in the Garhwal Himalayas, Auli is renowned for its pristine natural beauty, panoramic mountain views, and spiritual significance. The area has been a meditation spot for sages and yogis for thousands of years."}),c.jsx("p",{children:"Our retreat is situated on a gentle slope facing the majestic Nanda Devi peak (India's second-highest mountain), surrounded by ancient oak and deodar forests. The pure mountain air, mineral-rich spring water, and abundant negative ions create an ideal environment for healing and transformation."}),c.jsx("p",{children:"While remote enough to offer true serenity, Vaikunth is still accessible via a scenic drive from major cities or a combination of train and road travel."})]}),c.jsx(Te,{to:"/contact#getting-here",variant:"outline",children:"View Travel Information"})]})]})]})}),c.jsx(he,{variant:"light",children:c.jsxs(ie.div,{ref:f,initial:"hidden",animate:p?"visible":"hidden",variants:i,children:[c.jsx(Ce,{title:"Meet Our Guides",subtitle:"Our Expert Team"}),c.jsx(_E,{children:m.map(g=>c.jsx(ie.div,{variants:e,children:c.jsxs(UE,{children:[c.jsx(HE,{children:c.jsx(PE,{src:g.image,alt:g.name})}),c.jsxs(FE,{children:[c.jsx(YE,{children:g.name}),c.jsx(qE,{children:g.role}),c.jsx(GE,{children:g.bio}),c.jsxs(XE,{children:[c.jsx(KE,{children:"Specialties:"}),c.jsx(ZE,{children:g.specialty})]})]})]})},g.id))}),c.jsx(QE,{children:c.jsx(Te,{to:"/contact",variant:"outline",children:"Connect With Our Team"})})]})}),c.jsx(he,{variant:"primary",children:c.jsxs(IE,{children:[c.jsx(WE,{children:c.jsx(Ce,{title:"The Vaikunth Philosophy",subtitle:"Our Approach",withDivider:!1})}),c.jsxs(JE,{children:[c.jsxs(Wl,{children:[c.jsx(Jl,{children:"01"}),c.jsx(ec,{children:"Authentic Tradition"}),c.jsx(tc,{children:"We honor and preserve the ancient lineages of yoga and Ayurveda, teaching practices in their traditional form while making them accessible to modern practitioners."})]}),c.jsxs(Wl,{children:[c.jsx(Jl,{children:"02"}),c.jsx(ec,{children:"Nature Connection"}),c.jsx(tc,{children:"We believe in the healing power of nature and integrate the Himalayan environment into all aspects of our programs, from outdoor meditation to herb gathering."})]}),c.jsxs(Wl,{children:[c.jsx(Jl,{children:"03"}),c.jsx(ec,{children:"Holistic Integration"}),c.jsx(tc,{children:"Rather than compartmentalizing wellness, we address the whole person—physical, mental, emotional, and spiritual—through integrated practices."})]}),c.jsxs(Wl,{children:[c.jsx(Jl,{children:"04"}),c.jsx(ec,{children:"Sustainable Living"}),c.jsx(tc,{children:"We demonstrate ecological mindfulness through our operations, teaching guests how spiritual practice and environmental stewardship are interconnected."})]})]})]})})]})},SE=v(he)`
  height: 60vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%);
    z-index: 1;
  }
`,wE=v.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 ${({theme:e})=>e.spacing[6]};
`,$E=v.h1`
  font-size: ${({theme:e})=>e.typography.fontSize["6xl"]};
  color: ${({theme:e})=>e.colors.white};
  margin-bottom: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.fontSize["5xl"]};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
  }
`,jE=v.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.accent};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  color: ${({theme:e})=>e.colors.white};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize.xl};
  }
`,TE=v.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${({theme:e})=>e.spacing[10]};

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,AE=v.div`
  img {
    width: 100%;
    border-radius: ${({theme:e})=>e.borderRadius.lg};
    box-shadow: ${({theme:e})=>e.shadows.lg};
  }
`,EE=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[8]};
`,RE=v.div`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};

  p {
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }
`,CE=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing[6]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,s4=v.div`
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.white};
  padding: ${({theme:e})=>e.spacing[6]};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
`,l4=v.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.white};
`,c4=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  margin-bottom: 0;
`,zE=v(s4)`
  background-color: ${({theme:e})=>e.colors.accent};
`,DE=v(l4)``,ME=v(c4)``,OE=v.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background-color: ${({theme:e})=>e.colors.primary};
    transform: translateX(-50%);

    @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
      left: 30px;
    }
  }
`,nr=v.div`
  display: flex;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[6]} 0;

  &:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
      flex-direction: row;
    }
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding-left: 80px;
  }
`,ir=v.div`
  width: 120px;
  height: 120px;
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  z-index: 1;
  box-shadow: ${({theme:e})=>e.shadows.md};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 80px;
    height: 80px;
    font-size: ${({theme:e})=>e.typography.fontSize.xl};
    position: absolute;
    left: 0;
  }
`,ar=v.div`
  width: calc(50% - 80px);
  background-color: ${({theme:e})=>e.colors.white};
  padding: ${({theme:e})=>e.spacing[6]};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 100%;
  }
`,rr=v.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  color: ${({theme:e})=>e.colors.primary};
`,or=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  margin-bottom: 0;
`,kE=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing[10]};

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,BE=v.div`
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.lg};
`,NE=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[8]};
`,LE=v.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[4]};
`,Zl=v.div`
  background-color: ${({theme:e})=>e.colors.white};
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,Ql=v.h4`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.darkGray};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,Il=v.div`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.primary};
`,VE=v.div`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};

  p {
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }
`,_E=v.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[8]};

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,UE=v.div`
  display: flex;
  background-color: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.md};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-direction: column;
  }
`,HE=v.div`
  width: 40%;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 100%;
    height: 300px;
  }
`,PE=v.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,FE=v.div`
  width: 60%;
  padding: ${({theme:e})=>e.spacing[6]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 100%;
  }
`,YE=v.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.colors.primary};
`,qE=v.div`
  font-family: ${({theme:e})=>e.typography.fontFamily.accent};
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  color: ${({theme:e})=>e.colors.accent};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,GE=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,XE=v.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,KE=v.span`
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,ZE=v.span`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.darkGray};
`,QE=v.div`
  display: flex;
  justify-content: center;
  margin-top: ${({theme:e})=>e.spacing[10]};
`,IE=v.div`
  max-width: 1000px;
  margin: 0 auto;
`,WE=v.div`
  margin-bottom: ${({theme:e})=>e.spacing[10]};

  h2, p {
    color: ${({theme:e})=>e.colors.white};
  }
`,JE=v.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[8]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,Wl=v.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
`,Jl=v.div`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  color: ${({theme:e})=>e.colors.accent};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
`,ec=v.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  color: ${({theme:e})=>e.colors.white};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,tc=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0;
`,eR=()=>{const e={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6}}},[i,r]=z.useState({duration:"all",category:"all",level:"all"}),[o,l]=Ue({triggerOnce:!0,threshold:.2}),[d,f]=Ue({triggerOnce:!0,threshold:.1}),m=[{id:1,title:"200-Hour Yoga Teacher Training",subtitle:"Jun 15 - Jul 10, 2023",image:Ze("/assets/images/programs/teacher-training.jpg",800,600),duration:"26 days",category:"teacher-training",level:"intermediate",price:"$2,800",description:"Immerse yourself in a transformative journey to become a certified yoga instructor in the serene Himalayan mountains. This comprehensive program covers asana practice, teaching methodology, anatomy, philosophy, and more.",highlights:["Internationally recognized certification","Small group size (max 15 students)","Daily meditation and pranayama","Teaching practice with feedback"],featured:!0},{id:2,title:"Meditation & Mindfulness Retreat",subtitle:"Jul 20 - Jul 27, 2023",image:Ze("/assets/images/programs/meditation-retreat.jpg",800,600),duration:"7 days",category:"meditation",level:"all-levels",price:"$1,200",description:"Discover inner peace and mental clarity through guided meditation practices and mindfulness techniques. This retreat is perfect for those seeking to deepen their meditation practice or find relief from stress and anxiety.",highlights:["Various meditation techniques","Mindful hiking in nature","Silent meditation days","Personalized guidance"],featured:!0},{id:3,title:"Ayurvedic Panchakarma Cleanse",subtitle:"Aug 5 - Aug 19, 2023",image:Me("yoga",800,600),duration:"14 days",category:"ayurveda",level:"all-levels",price:"$3,200",description:"Experience the ancient healing system of Ayurveda with personalized treatments and cleansing therapies. This program includes consultation with our Ayurvedic doctor, daily treatments, and a specialized diet.",highlights:["Personalized dosha assessment","Daily Ayurvedic treatments","Detoxifying diet plan","Herbal medicine workshops"],featured:!0},{id:4,title:"Himalayan Trek & Yoga Adventure",subtitle:"Sep 10 - Sep 20, 2023",image:Me("nature",800,600),duration:"10 days",category:"adventure",level:"intermediate",price:"$1,800",description:"Combine the thrill of Himalayan trekking with rejuvenating yoga practices for an unforgettable adventure. Trek through stunning landscapes, practice yoga in nature, and connect with local culture.",highlights:["Guided treks to scenic viewpoints","Daily yoga sessions","Local village visits","Camping under the stars"],featured:!0},{id:5,title:"Spiritual Healing Retreat",subtitle:"Oct 5 - Oct 12, 2023",image:Me("yoga",800,600),duration:"7 days",category:"healing",level:"all-levels",price:"$1,400",description:"A holistic approach to healing emotional and spiritual wounds through various modalities including energy healing, sound therapy, meditation, and yoga. This retreat provides a safe space for transformation.",highlights:["Energy healing sessions","Sound bath ceremonies","Emotional release workshops","One-on-one healing sessions"],featured:!1},{id:6,title:"Wellness Detox Retreat",subtitle:"Nov 15 - Nov 22, 2023",image:Me("yoga",800,600),duration:"7 days",category:"wellness",level:"beginner",price:"$1,300",description:"Cleanse your body and mind with this comprehensive detox program combining yoga, clean eating, juicing, and holistic wellness practices. Return home feeling refreshed and revitalized.",highlights:["Organic vegetarian meals","Daily yoga and meditation","Juice fasting option","Wellness workshops"],featured:!1},{id:7,title:"300-Hour Advanced Yoga Teacher Training",subtitle:"Jan 10 - Feb 15, 2024",image:Me("yoga",800,600),duration:"35 days",category:"teacher-training",level:"advanced",price:"$3,500",description:"Deepen your teaching skills and expand your knowledge with this advanced training for existing yoga teachers. Explore advanced asanas, therapeutic applications, and specialized teaching methodologies.",highlights:["Advanced teaching techniques","Yoga therapy applications","Specialized workshops","Teaching practicum"],featured:!1},{id:8,title:"Silent Meditation Retreat",subtitle:"Mar 5 - Mar 15, 2024",image:Me("yoga",800,600),duration:"10 days",category:"meditation",level:"intermediate",price:"$1,600",description:"Experience the profound benefits of noble silence in this intensive meditation retreat. With minimal speaking and external stimulation, participants can dive deep into their meditation practice.",highlights:["Maintained silence throughout","Multiple meditation sessions daily","Simple, nourishing meals","Individual guidance when needed"],featured:!1}].filter(y=>(i.duration==="all"||i.duration==="short"&&parseInt(y.duration)<=7||i.duration==="medium"&&parseInt(y.duration)>7&&parseInt(y.duration)<=14||i.duration==="long"&&parseInt(y.duration)>14)&&(i.category==="all"||y.category===i.category)&&(i.level==="all"||y.level===i.level||y.level==="all-levels")),g=(y,b)=>{r(w=>({...w,[y]:b}))};return c.jsxs("main",{children:[c.jsx(tR,{backgroundImage:Ze("/assets/images/programs-hero.jpg",1920,800),children:c.jsx(nR,{children:c.jsxs(ie.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:[c.jsx(iR,{children:"Our Programs"}),c.jsx(aR,{children:"Transformative Experiences in the Himalayas"})]})})}),c.jsx(he,{children:c.jsxs(ie.div,{ref:o,initial:"hidden",animate:l?"visible":"hidden",variants:e,children:[c.jsx(Ce,{title:"Find Your Path",subtitle:"Explore Our Offerings"}),c.jsxs(rR,{children:[c.jsx("p",{children:"At Vaikunth Yoga Retreat, we offer a diverse range of programs designed to nurture your body, mind, and spirit. Whether you're seeking to deepen your yoga practice, find inner peace through meditation, experience traditional Ayurvedic healing, or embark on an adventure in the Himalayas, we have a program that's perfect for you."}),c.jsx("p",{children:"Each program is thoughtfully crafted and led by experienced teachers who are dedicated to providing an authentic and transformative experience. Our small group sizes ensure personalized attention and a supportive community atmosphere."})]}),c.jsxs(oR,{children:[c.jsxs(nc,{children:[c.jsx(ic,{children:c.jsx(su,{})}),c.jsx(ac,{children:"Yoga & Meditation"}),c.jsx(rc,{children:"From intensive teacher trainings to gentle retreats, our yoga and meditation programs cater to all levels and interests."})]}),c.jsxs(nc,{children:[c.jsx(ic,{children:c.jsx(Y2,{})}),c.jsx(ac,{children:"Healing & Wellness"}),c.jsx(rc,{children:"Experience traditional Ayurvedic treatments, detox programs, and holistic healing modalities for complete rejuvenation."})]}),c.jsxs(nc,{children:[c.jsx(ic,{children:c.jsx(lu,{})}),c.jsx(ac,{children:"Adventure & Nature"}),c.jsx(rc,{children:"Combine spiritual practices with Himalayan adventures, including treks, nature walks, and cultural excursions."})]}),c.jsxs(nc,{children:[c.jsx(ic,{children:c.jsx(ha,{})}),c.jsx(ac,{children:"Seasonal Specials"}),c.jsx(rc,{children:"Join our special seasonal programs that align with natural cycles and traditional celebrations."})]})]})]})}),c.jsx(he,{variant:"light",children:c.jsxs(ie.div,{ref:d,initial:"hidden",animate:f?"visible":"hidden",variants:e,children:[c.jsx(Ce,{title:"Upcoming Programs",subtitle:"Find Your Perfect Retreat"}),c.jsxs(sR,{children:[c.jsxs(ih,{children:[c.jsx(ah,{children:"Duration:"}),c.jsxs(rh,{children:[c.jsx(Rt,{active:i.duration==="all",onClick:()=>g("duration","all"),children:"All"}),c.jsx(Rt,{active:i.duration==="short",onClick:()=>g("duration","short"),children:"Short (≤ 7 days)"}),c.jsx(Rt,{active:i.duration==="medium",onClick:()=>g("duration","medium"),children:"Medium (8-14 days)"}),c.jsx(Rt,{active:i.duration==="long",onClick:()=>g("duration","long"),children:"Long (15+ days)"})]})]}),c.jsxs(ih,{children:[c.jsx(ah,{children:"Category:"}),c.jsxs(rh,{children:[c.jsx(Rt,{active:i.category==="all",onClick:()=>g("category","all"),children:"All"}),c.jsx(Rt,{active:i.category==="teacher-training",onClick:()=>g("category","teacher-training"),children:"Teacher Training"}),c.jsx(Rt,{active:i.category==="meditation",onClick:()=>g("category","meditation"),children:"Meditation"}),c.jsx(Rt,{active:i.category==="ayurveda",onClick:()=>g("category","ayurveda"),children:"Ayurveda"}),c.jsx(Rt,{active:i.category==="adventure",onClick:()=>g("category","adventure"),children:"Adventure"}),c.jsx(Rt,{active:i.category==="healing",onClick:()=>g("category","healing"),children:"Healing"}),c.jsx(Rt,{active:i.category==="wellness",onClick:()=>g("category","wellness"),children:"Wellness"})]})]}),c.jsxs(ih,{children:[c.jsx(ah,{children:"Level:"}),c.jsxs(rh,{children:[c.jsx(Rt,{active:i.level==="all",onClick:()=>g("level","all"),children:"All"}),c.jsx(Rt,{active:i.level==="beginner",onClick:()=>g("level","beginner"),children:"Beginner"}),c.jsx(Rt,{active:i.level==="intermediate",onClick:()=>g("level","intermediate"),children:"Intermediate"}),c.jsx(Rt,{active:i.level==="advanced",onClick:()=>g("level","advanced"),children:"Advanced"})]})]})]}),c.jsx(lR,{children:m.length>0?m.map(y=>c.jsx(cR,{children:c.jsx(q2,{to:`/programs/${y.id}`,image:y.image,title:y.title,subtitle:y.subtitle,content:c.jsxs(uR,{children:[c.jsxs(dR,{children:[c.jsxs(oh,{children:[c.jsx(sh,{children:"Duration:"}),c.jsx(lh,{children:y.duration})]}),c.jsxs(oh,{children:[c.jsx(sh,{children:"Level:"}),c.jsx(lh,{children:y.level.replace("-"," ")})]}),c.jsxs(oh,{children:[c.jsx(sh,{children:"Price:"}),c.jsx(lh,{children:y.price})]})]}),c.jsx(fR,{children:y.description})]}),footer:c.jsxs(hR,{children:[c.jsx(Te,{variant:"text",size:"small",to:`/programs/${y.id}`,children:"View Details →"}),y.featured&&c.jsx(pR,{children:"Featured"})]})})},y.id)):c.jsxs(mR,{children:[c.jsx(gR,{children:"No programs match your current filters. Please try different filter options."}),c.jsx(Te,{variant:"outline",onClick:()=>r({duration:"all",category:"all",level:"all"}),children:"Reset Filters"})]})})]})}),c.jsx(he,{variant:"primary",children:c.jsxs(yR,{children:[c.jsxs(xR,{children:[c.jsx(Ce,{title:"Custom Programs",subtitle:"Tailored to Your Needs",align:"left",withDivider:!1}),c.jsxs(vR,{children:[c.jsx("p",{children:"Looking for something specific? We offer custom programs for individuals, couples, families, and groups. Whether you're seeking a personalized wellness journey, a private yoga immersion, or a team-building retreat, we can create a bespoke experience just for you."}),c.jsx("p",{children:"Our experienced team will work closely with you to design a program that meets your specific goals, preferences, and schedule. Contact us to start planning your custom retreat today."})]}),c.jsx(Te,{to:"/contact",variant:"accent",children:"Inquire About Custom Programs"})]}),c.jsx(bR,{children:c.jsx("img",{src:Me("yoga",600,800),alt:"Custom yoga program"})})]})})]})},tR=v(he)`
  height: 60vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%);
    z-index: 1;
  }
`,nR=v.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 ${({theme:e})=>e.spacing[6]};
`,iR=v.h1`
  font-size: ${({theme:e})=>e.typography.fontSize["6xl"]};
  color: ${({theme:e})=>e.colors.white};
  margin-bottom: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.fontSize["5xl"]};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
  }
`,aR=v.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.accent};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  color: ${({theme:e})=>e.colors.white};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize.xl};
  }
`,rR=v.div`
  max-width: 900px;
  margin: 0 auto ${({theme:e})=>e.spacing[10]};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  text-align: center;

  p {
    margin-bottom: ${({theme:e})=>e.spacing[6]};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize.md};
  }
`,oR=v.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({theme:e})=>e.spacing[6]};

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,nc=v.div`
  background-color: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[8]};
  text-align: center;
  box-shadow: ${({theme:e})=>e.shadows.md};
  transition: transform ${({theme:e})=>e.animation.normal} ease;

  &:hover {
    transform: translateY(-10px);
  }
`,ic=v.div`
  font-size: 3rem;
  color: ${({theme:e})=>e.colors.accent};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,ac=v.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.primary};
`,rc=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.darkGray};
  margin-bottom: 0;
`,sR=v.div`
  background-color: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  margin-bottom: ${({theme:e})=>e.spacing[10]};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,ih=v.div`
  margin-bottom: ${({theme:e})=>e.spacing[4]};

  &:last-child {
    margin-bottom: 0;
  }
`,ah=v.div`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  color: ${({theme:e})=>e.colors.primary};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,rh=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};
`,Rt=v.button`
  background-color: ${({active:e,theme:i})=>e?i.colors.primary:i.colors.lightGray};
  color: ${({active:e,theme:i})=>e?i.colors.white:i.colors.darkGray};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  padding: ${({theme:e})=>`${e.spacing[2]} ${e.spacing[4]}`};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  border: none;
  cursor: pointer;
  transition: all ${({theme:e})=>e.animation.normal} ease;

  &:hover {
    background-color: ${({active:e,theme:i})=>e?i.colors.primary:i.colors.mediumGray};
  }
`,lR=v.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[8]};

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,cR=v.div`
  height: 100%;
`,uR=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,dR=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,oh=v.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,sh=v.span`
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,lh=v.span`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.darkGray};
  text-transform: capitalize;
`,fR=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.darkGray};
  margin-bottom: 0;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,hR=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,pR=v.span`
  background-color: ${({theme:e})=>e.colors.accent};
  color: white;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  padding: ${({theme:e})=>`${e.spacing[1]} ${e.spacing[2]}`};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,mR=v.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: ${({theme:e})=>e.spacing[10]};
  background-color: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,gR=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,yR=v.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: ${({theme:e})=>e.spacing[10]};
  align-items: center;

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,xR=v.div`
  h2, p {
    color: ${({theme:e})=>e.colors.white};
  }
`,vR=v.div`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  margin-bottom: ${({theme:e})=>e.spacing[8]};

  p {
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize.md};
  }
`,bR=v.div`
  img {
    width: 100%;
    border-radius: ${({theme:e})=>e.borderRadius.lg};
    box-shadow: ${({theme:e})=>e.shadows.lg};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,SR=()=>{const e={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6}}},i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},[r,o]=Ue({triggerOnce:!0,threshold:.2}),[l,d]=Ue({triggerOnce:!0,threshold:.2}),[f,p]=Ue({triggerOnce:!0,threshold:.2}),m=[{id:1,title:"Deluxe Room",image:Me("accommodations",800,600),description:"Our spacious deluxe rooms offer a perfect blend of comfort and traditional Himalayan design. Each room features large windows with mountain views, a private bathroom, and comfortable furnishings.",price:"From $120 per night",capacity:"2 Guests",amenities:["Private bathroom","Mountain view","Daily housekeeping","Yoga mat","Organic toiletries"]},{id:2,title:"Standard Room",image:Me("accommodations",800,600),description:"Cozy and comfortable, our standard rooms provide a peaceful retreat after a day of activities. Each room is thoughtfully designed with natural materials and traditional touches.",price:"From $90 per night",capacity:"2 Guests",amenities:["Private bathroom","Daily housekeeping","Yoga mat","Organic toiletries"]},{id:3,title:"Shared Dormitory",image:Me("accommodations",800,600),description:"Perfect for solo travelers or those on a budget, our shared dormitories offer comfortable single beds in a communal setting. A great way to connect with like-minded individuals.",price:"From $40 per night",capacity:"4-6 Guests",amenities:["Shared bathroom","Personal locker","Daily housekeeping","Yoga mat"]},{id:4,title:"Private Cottage",image:Me("accommodations",800,600),description:"For those seeking extra privacy and space, our private cottages offer a secluded retreat experience. Each cottage features a bedroom, sitting area, private bathroom, and a small porch with mountain views.",price:"From $150 per night",capacity:"2-3 Guests",amenities:["Private bathroom","Sitting area","Private porch","Mountain view","Daily housekeeping","Yoga mat","Organic toiletries","Electric kettle"]}],g=[{id:1,title:"Yoga Shala",image:Me("yoga",800,600),description:"Our spacious, light-filled yoga shala is the heart of the retreat. With panoramic mountain views, wooden floors, and all necessary props, it provides the perfect space for your practice."},{id:2,title:"Meditation Hall",image:Me("yoga",800,600),description:"A serene space dedicated to meditation and inner reflection. The hall features comfortable cushions, subtle lighting, and a peaceful atmosphere conducive to deepening your meditation practice."},{id:3,title:"Dining Hall",image:Me("food",800,600),description:"Our community dining hall serves nutritious, organic vegetarian meals three times daily. The space features large communal tables to encourage connection and conversation among guests."},{id:4,title:"Ayurvedic Center",image:Me("yoga",800,600),description:"Our Ayurvedic center offers traditional treatments and consultations with our experienced Ayurvedic doctor. The center includes treatment rooms, steam room, and relaxation area."},{id:5,title:"Organic Garden",image:Me("nature",800,600),description:"Much of our food comes directly from our organic garden. Guests are welcome to visit, learn about organic farming practices, and even participate in harvesting if interested."},{id:6,title:"Library & Lounge",image:Me("accommodations",800,600),description:"A cozy space filled with books on yoga, meditation, philosophy, and wellness. The lounge area provides comfortable seating for reading, journaling, or connecting with other guests."}];return c.jsxs("main",{children:[c.jsx(wR,{backgroundImage:Ze("/assets/images/accommodations-hero.jpg",1920,800),children:c.jsx($R,{children:c.jsxs(ie.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:[c.jsx(jR,{children:"Accommodations"}),c.jsx(TR,{children:"Your Himalayan Home Away From Home"})]})})}),c.jsx(he,{children:c.jsxs(ie.div,{ref:r,initial:"hidden",animate:o?"visible":"hidden",variants:e,children:[c.jsx(Ce,{title:"Rest & Rejuvenate",subtitle:"Our Accommodations"}),c.jsxs(AR,{children:[c.jsx("p",{children:"At Vaikunth Yoga Retreat, we believe that restful sleep and comfortable surroundings are essential to your wellness journey. Our accommodations are designed to provide a peaceful sanctuary where you can recharge after a day of yoga, meditation, and exploration."}),c.jsx("p",{children:"Each room is thoughtfully designed using natural materials, traditional Himalayan craftsmanship, and eco-friendly practices. From cozy shared dormitories to private cottages, we offer options to suit various preferences and budgets."})]}),c.jsxs(ER,{children:[c.jsxs(sr,{children:[c.jsx(lr,{children:c.jsx(t9,{})}),c.jsx(cr,{children:"Free WiFi"}),c.jsx(ur,{children:"Available in common areas (limited hours)"})]}),c.jsxs(sr,{children:[c.jsx(lr,{children:c.jsx(e9,{})}),c.jsx(cr,{children:"Organic Meals"}),c.jsx(ur,{children:"Three vegetarian meals daily"})]}),c.jsxs(sr,{children:[c.jsx(lr,{children:c.jsx(WA,{})}),c.jsx(cr,{children:"Hot Water"}),c.jsx(ur,{children:"Solar-heated water in all bathrooms"})]}),c.jsxs(sr,{children:[c.jsx(lr,{children:c.jsx(lu,{})}),c.jsx(cr,{children:"Mountain Views"}),c.jsx(ur,{children:"Breathtaking Himalayan panoramas"})]}),c.jsxs(sr,{children:[c.jsx(lr,{children:c.jsx(su,{})}),c.jsx(cr,{children:"Eco-Friendly"}),c.jsx(ur,{children:"Sustainable practices throughout"})]}),c.jsxs(sr,{children:[c.jsx(lr,{children:c.jsx(uu,{})}),c.jsx(cr,{children:"Yoga Equipment"}),c.jsx(ur,{children:"Mats and props provided"})]})]})]})}),c.jsx(he,{variant:"light",children:c.jsxs(ie.div,{ref:l,initial:"hidden",animate:d?"visible":"hidden",variants:i,children:[c.jsx(Ce,{title:"Room Options",subtitle:"Find Your Perfect Space"}),c.jsx(RR,{children:m.map(y=>c.jsx(ie.div,{variants:e,children:c.jsxs(u4,{children:[c.jsx(CR,{children:c.jsx("img",{src:y.image,alt:y.title})}),c.jsxs(zR,{children:[c.jsx(DR,{children:y.title}),c.jsxs(MR,{children:[c.jsx(OR,{children:y.price}),c.jsx(kR,{children:y.capacity})]}),c.jsx(BR,{children:y.description}),c.jsxs(NR,{children:[c.jsx(LR,{children:"Amenities:"}),c.jsx(VR,{children:y.amenities.map((b,w)=>c.jsx(_R,{children:b},w))})]})]})]})},y.id))}),c.jsxs(UR,{children:[c.jsx(HR,{children:"ℹ️"}),c.jsx(PR,{children:"All accommodation rates include three vegetarian meals daily, access to group yoga classes, and use of retreat facilities. Prices may vary based on season and program selection."})]}),c.jsx(FR,{children:c.jsx(Te,{to:"/booking",variant:"accent",children:"Check Availability & Book"})})]})}),c.jsx(he,{children:c.jsxs(ie.div,{ref:f,initial:"hidden",animate:p?"visible":"hidden",variants:e,children:[c.jsx(Ce,{title:"Our Facilities",subtitle:"Spaces for Transformation"}),c.jsx(YR,{children:g.map(y=>c.jsxs(d4,{children:[c.jsx(qR,{children:c.jsx("img",{src:y.image,alt:y.title})}),c.jsxs(GR,{children:[c.jsx(XR,{children:y.title}),c.jsx(KR,{children:y.description})]})]},y.id))})]})}),c.jsxs(he,{variant:"light",children:[c.jsx(Ce,{title:"Retreat Layout",subtitle:"Find Your Way Around"}),c.jsxs(ZR,{children:[c.jsx(QR,{children:c.jsx("img",{src:Me("nature",1200,800),alt:"Retreat map"})}),c.jsxs(IR,{children:[c.jsx(WR,{children:"Map Legend"}),c.jsxs(JR,{children:[c.jsxs(dr,{children:[c.jsx(fr,{color:"#2A5D45"}),c.jsx(hr,{children:"Accommodations"})]}),c.jsxs(dr,{children:[c.jsx(fr,{color:"#A4C5D6"}),c.jsx(hr,{children:"Practice Spaces"})]}),c.jsxs(dr,{children:[c.jsx(fr,{color:"#E8985E"}),c.jsx(hr,{children:"Dining & Common Areas"})]}),c.jsxs(dr,{children:[c.jsx(fr,{color:"#8B6C5C"}),c.jsx(hr,{children:"Ayurvedic Center"})]}),c.jsxs(dr,{children:[c.jsx(fr,{color:"#6B9080"}),c.jsx(hr,{children:"Gardens & Nature Spaces"})]}),c.jsxs(dr,{children:[c.jsx(fr,{color:"#9D8FB3"}),c.jsx(hr,{children:"Meditation Spots"})]})]})]})]})]}),c.jsx(he,{variant:"primary",children:c.jsx(eC,{children:c.jsxs(tC,{children:[c.jsx(Ce,{title:"Ready to Book Your Stay?",subtitle:"Secure Your Spot",align:"center",withDivider:!1}),c.jsx(nC,{children:"Our accommodations fill up quickly, especially during peak seasons. Reserve your room now to ensure your place in our upcoming retreats and programs."}),c.jsxs(iC,{children:[c.jsx(Te,{to:"/booking",variant:"accent",size:"large",children:"Book Your Stay"}),c.jsx(Te,{to:"/contact",variant:"outline",size:"large",children:"Contact Us With Questions"})]})]})})})]})},wR=v(he)`
  height: 60vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%);
    z-index: 1;
  }
`,$R=v.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 ${({theme:e})=>e.spacing[6]};
`,jR=v.h1`
  font-size: ${({theme:e})=>e.typography.fontSize["6xl"]};
  color: ${({theme:e})=>e.colors.white};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.fontSize["5xl"]};
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
  }
`,TR=v.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.accent};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  color: ${({theme:e})=>e.colors.white};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize.xl};
  }
`,AR=v.div`
  max-width: 900px;
  margin: 0 auto ${({theme:e})=>e.spacing[10]};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  text-align: center;
  
  p {
    margin-bottom: ${({theme:e})=>e.spacing[6]};
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize.md};
  }
`,ER=v.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: ${({theme:e})=>e.spacing[6]};
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.xl}) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,sr=v.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[6]};
  background-color: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,lr=v.div`
  font-size: 2rem;
  color: ${({theme:e})=>e.colors.accent};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,cr=v.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.colors.primary};
`,ur=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.darkGray};
  margin-bottom: 0;
`,RR=v.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[8]};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,u4=v.div`
  background-color: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.md};
  height: 100%;
  display: flex;
  flex-direction: column;
`,CR=v.div`
  height: 300px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${u4}:hover & img {
    transform: scale(1.05);
  }
`,zR=v.div`
  padding: ${({theme:e})=>e.spacing[6]};
  flex: 1;
  display: flex;
  flex-direction: column;
`,DR=v.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.primary};
`,MR=v.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,OR=v.div`
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.accent};
`,kR=v.div`
  color: ${({theme:e})=>e.colors.darkGray};
`,BR=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  flex: 1;
`,NR=v.div`
  margin-top: auto;
`,LR=v.h4`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.colors.primary};
`,VR=v.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};
  list-style: none;
  padding: 0;
  margin: 0;
`,_R=v.li`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.darkGray};
  background-color: ${({theme:e})=>e.colors.lightGray};
  padding: ${({theme:e})=>`${e.spacing[1]} ${e.spacing[3]}`};
  border-radius: ${({theme:e})=>e.borderRadius.full};
`,UR=v.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  margin: ${({theme:e})=>e.spacing[8]} 0;
  box-shadow: ${({theme:e})=>e.shadows.md};
`,HR=v.div`
  font-size: 1.5rem;
  line-height: 1;
`,PR=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  margin: 0;
`,FR=v.div`
  display: flex;
  justify-content: center;
`,YR=v.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({theme:e})=>e.spacing[6]};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,d4=v.div`
  background-color: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.md};
  height: 100%;
  transition: transform ${({theme:e})=>e.animation.normal} ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`,qR=v.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${d4}:hover & img {
    transform: scale(1.05);
  }
`,GR=v.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,XR=v.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  color: ${({theme:e})=>e.colors.primary};
`,KR=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  color: ${({theme:e})=>e.colors.darkGray};
  margin-bottom: 0;
`,ZR=v.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: ${({theme:e})=>e.spacing[8]};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,QR=v.div`
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.md};
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`,IR=v.div`
  background-color: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,WR=v.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.primary};
`,JR=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,dr=v.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
`,fr=v.div`
  width: 20px;
  height: 20px;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background-color: ${({color:e})=>e};
`,hr=v.div`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
`,eC=v.div`
  max-width: 900px;
  margin: 0 auto;
`,tC=v.div`
  text-align: center;
  
  h2, p {
    color: ${({theme:e})=>e.colors.white};
  }
`,nC=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
  }
`,iC=v.div`
  display: flex;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[6]};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[4]};
  }
`,aC=[{id:1,name:"Sarah Johnson",location:"New York, USA",text:"My experience at Vaikunth Yoga Retreat was truly transformative. The serene environment, expert instructors, and holistic approach to wellness helped me reconnect with myself in ways I never thought possible.",rating:5,image:"https://randomuser.me/api/portraits/women/44.jpg",program:"Yoga Teacher Training",date:"2023-04-15"},{id:2,name:"Michael Chen",location:"Toronto, Canada",text:"The meditation retreat exceeded all my expectations. The peaceful Himalayan setting and the authentic yoga practices have given me tools that I continue to use in my daily life.",rating:5,image:"https://randomuser.me/api/portraits/men/32.jpg",program:"Meditation Retreat",date:"2023-05-22"},{id:3,name:"Priya Sharma",location:"London, UK",text:"As a yoga instructor myself, I was impressed by the depth of knowledge and the traditional approach at Vaikunth. The Ayurvedic treatments and personalized attention made this a standout experience.",rating:5,image:"https://randomuser.me/api/portraits/women/68.jpg",program:"Ayurveda Panchakarma",date:"2023-03-10"},{id:4,name:"David Wilson",location:"Sydney, Australia",text:"The Himalayan trek combined with daily yoga sessions was the perfect balance of adventure and mindfulness. The accommodations were comfortable and the food was exceptional.",rating:4,image:"https://randomuser.me/api/portraits/men/75.jpg",program:"Himalayan Trek & Yoga",date:"2023-06-05"},{id:5,name:"Emma Rodriguez",location:"Barcelona, Spain",text:"I came to Vaikunth feeling burnt out and left feeling renewed. The spiritual healing program addressed both my physical and emotional needs. The staff was incredibly supportive throughout my journey.",rating:5,image:"https://randomuser.me/api/portraits/women/22.jpg",program:"Spiritual Healing",date:"2023-02-18"},{id:6,name:"Raj Patel",location:"Mumbai, India",text:"The wellness detox program was exactly what I needed. The combination of yoga, meditation, and Ayurvedic diet helped me reset my system. I feel lighter both physically and mentally.",rating:4,image:"https://randomuser.me/api/portraits/men/11.jpg",program:"Wellness Detox",date:"2023-07-12"},{id:7,name:"Sophie Martin",location:"Paris, France",text:"The teacher training program was rigorous but incredibly rewarding. I not only deepened my practice but also gained the confidence to share yoga with others. The community aspect was wonderful.",rating:5,image:"https://randomuser.me/api/portraits/women/33.jpg",program:"Yoga Teacher Training",date:"2023-01-30"},{id:8,name:"James Thompson",location:"Chicago, USA",text:"I was hesitant about the meditation retreat as a beginner, but the instructors made it accessible for all levels. The techniques I learned have helped me manage stress in my daily life.",rating:4,image:"https://randomuser.me/api/portraits/men/67.jpg",program:"Meditation Retreat",date:"2023-05-05"}],rC=["All Programs","Yoga Teacher Training","Meditation Retreat","Ayurveda Panchakarma","Spiritual Healing","Himalayan Trek & Yoga","Wellness Detox"],oC=()=>{const[e,i]=z.useState("All Programs"),[r,o]=z.useState(0),[l,d]=Ue({triggerOnce:!0,threshold:.1}),[f,p]=Ue({triggerOnce:!0,threshold:.1}),m=aC.filter(b=>{const w=e==="All Programs"||b.program===e,j=r===0||b.rating>=r;return w&&j}),g={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6}}},y={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}};return c.jsxs("main",{children:[c.jsx(he,{$backgroundImage:"/assets/images/testimonials/testimonials-hero.jpg",$fullWidth:!0,$overlay:!0,ref:l,children:c.jsx(sC,{children:c.jsxs(ie.div,{initial:{opacity:0,y:30},animate:d?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.8},children:[c.jsx(Ce,{title:"Guest Experiences",subtitle:"Testimonials",align:"center",color:"light",withDivider:!0}),c.jsx(lC,{children:"Discover the transformative journeys of our guests from around the world"})]})})}),c.jsx(he,{ref:f,children:c.jsx(ie.div,{initial:"hidden",animate:p?"visible":"hidden",variants:g,children:c.jsxs(cC,{children:[c.jsxs(uC,{children:[c.jsxs(Jx,{children:[c.jsxs(ev,{children:[c.jsx(XA,{}),c.jsx("span",{children:"Filter by Program:"})]}),c.jsx(dC,{children:rC.map(b=>c.jsx(ch,{$isActive:e===b,onClick:()=>i(b),children:b},b))})]}),c.jsxs(Jx,{children:[c.jsxs(ev,{children:[c.jsx(F2,{}),c.jsx("span",{children:"Filter by Rating:"})]}),c.jsxs(fC,{children:[c.jsx(ch,{$isActive:r===0,onClick:()=>o(0),children:"All Ratings"}),[5,4,3].map(b=>c.jsxs(ch,{$isActive:r===b,onClick:()=>o(b),children:[b,"+ Stars"]},b))]})]})]}),m.length>0?c.jsx(ie.div,{variants:y,children:c.jsx(hC,{children:m.map(b=>c.jsx(ie.div,{variants:g,children:c.jsx(ap,{testimonial:b})},b.id))})}):c.jsx(pC,{children:"No testimonials match your current filters. Please try different criteria."})]})})})]})},sC=v.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: ${({theme:e})=>e.spacing[16]} 0;
`,lC=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  color: ${({theme:e})=>e.colors.white};
  margin-top: ${({theme:e})=>e.spacing[6]};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
  }
`,cC=v.div`
  max-width: 1200px;
  margin: 0 auto;
`,uC=v.div`
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: ${({theme:e})=>e.spacing[4]};
  }
`,Jx=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    align-items: flex-start;
  }
`,ev=v.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.gray[700]};

  svg {
    color: ${({theme:e})=>e.colors.primary};
  }
`,dC=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};
`,fC=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};
`,ch=v.button`
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({$isActive:e,theme:i})=>e?i.colors.primary:i.colors.gray[100]};
  color: ${({$isActive:e,theme:i})=>e?i.colors.white:i.colors.gray[700]};
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({$isActive:e,theme:i})=>e?i.colors.primary:i.colors.gray[200]};
  }
`,hC=v.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${({theme:e})=>e.spacing[6]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`,pC=v.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[10]};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  color: ${({theme:e})=>e.colors.gray[500]};
`,mC=()=>c.jsx(oC,{});var gC={};const yC=()=>{const[e,i]=z.useState({firstName:"",lastName:"",email:"",phone:"",program:"",accommodation:"",guests:1,checkIn:"",checkOut:"",specialRequests:""}),[r,o]=z.useState(!1),[l,d]=z.useState(!1),[f,p]=z.useState(""),[m,g]=Ue({triggerOnce:!0,threshold:.1}),[y,b]=Ue({triggerOnce:!0,threshold:.1}),w=[{id:"ytt",name:"200-Hour Yoga Teacher Training"},{id:"meditation",name:"Meditation & Mindfulness Retreat"},{id:"ayurveda",name:"Ayurvedic Panchakarma Cleanse"},{id:"trek",name:"Himalayan Trek & Yoga Adventure"},{id:"wellness",name:"Wellness Detox Program"},{id:"spiritual",name:"Spiritual Healing Retreat"}],j=[{id:"standard",name:"Standard Room",price:"From $50/night"},{id:"deluxe",name:"Deluxe Room",price:"From $80/night"},{id:"suite",name:"Himalayan Suite",price:"From $120/night"},{id:"cottage",name:"Private Cottage",price:"From $150/night"},{id:"dormitory",name:"Shared Dormitory",price:"From $30/night"}],$=T=>{const{name:E,value:k}=T.target;i(M=>({...M,[E]:k}))},R=async T=>{T.preventDefault(),o(!0),p("");try{const E=gC.REACT_APP_API_URL||"http://localhost:5000",k=await fetch(`${E}/api/booking`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),M=await k.json();if(!k.ok)throw new Error(M.message||"Something went wrong");d(!0),i({firstName:"",lastName:"",email:"",phone:"",program:"",accommodation:"",guests:1,checkIn:"",checkOut:"",specialRequests:""})}catch(E){console.error("Booking error:",E),p(E.message||"Failed to submit booking. Please try again.")}finally{o(!1)}};return c.jsxs("main",{children:[c.jsx(he,{$backgroundImage:"/assets/images/blog.png",$fullWidth:!0,$overlay:!0,ref:m,children:c.jsx(xC,{children:c.jsxs(ie.div,{initial:{opacity:0,y:30},animate:g?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.8},children:[c.jsx(Ce,{title:"Reserve Your Retreat",subtitle:"Booking",align:"center",color:"light",withDivider:!0}),c.jsx(vC,{children:"Begin your journey to wellness and self-discovery in the serene Himalayan mountains"})]})})}),c.jsx(he,{ref:y,children:c.jsx(ie.div,{initial:{opacity:0,y:20},animate:b?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.6},children:c.jsxs(bC,{children:[c.jsxs(SC,{children:[c.jsx(wC,{children:"Plan Your Transformative Experience"}),c.jsx($C,{children:"Complete the form to reserve your spot at Vaikunth Yoga Retreat. Our team will contact you within 24 hours to confirm availability and provide payment details."}),c.jsxs(jC,{children:[c.jsxs(oc,{children:[c.jsx(sc,{children:c.jsx(ha,{})}),c.jsxs(lc,{children:[c.jsx(cc,{children:"Flexible Dates"}),c.jsx(uc,{children:"Choose arrival and departure dates that work for you"})]})]}),c.jsxs(oc,{children:[c.jsx(sc,{children:c.jsx(Y2,{})}),c.jsxs(lc,{children:[c.jsx(cc,{children:"Group Bookings"}),c.jsx(uc,{children:"Special rates available for groups of 5 or more"})]})]}),c.jsxs(oc,{children:[c.jsx(sc,{children:c.jsx(uu,{})}),c.jsxs(lc,{children:[c.jsx(cc,{children:"Customized Programs"}),c.jsx(uc,{children:"Tailor your retreat to your specific wellness goals"})]})]}),c.jsxs(oc,{children:[c.jsx(sc,{children:c.jsx(YA,{})}),c.jsxs(lc,{children:[c.jsx(cc,{children:"Accommodation Options"}),c.jsx(uc,{children:"From budget-friendly to luxury experiences"})]})]})]}),c.jsx(TC,{children:"* A 30% deposit is required to confirm your booking. Cancellations made 30 days or more before arrival receive a full refund minus processing fees."})]}),c.jsx(AC,{onSubmit:R,children:l?c.jsxs(DC,{children:[c.jsx("h3",{children:"Booking Request Received!"}),c.jsx("p",{children:"Thank you for choosing Vaikunth Yoga Retreat. We've received your booking request and will contact you within 24 hours to confirm your reservation."}),c.jsx(Te,{type:"button",onClick:()=>d(!1),variant:"outline",children:"Make Another Booking"})]}):c.jsxs(c.Fragment,{children:[c.jsx(EC,{children:"Booking Details"}),f&&c.jsx(zC,{children:f}),c.jsxs(dc,{children:[c.jsxs(Tn,{children:[c.jsx(An,{htmlFor:"firstName",children:"First Name *"}),c.jsx(ea,{type:"text",id:"firstName",name:"firstName",value:e.firstName,onChange:$,required:!0})]}),c.jsxs(Tn,{children:[c.jsx(An,{htmlFor:"lastName",children:"Last Name *"}),c.jsx(ea,{type:"text",id:"lastName",name:"lastName",value:e.lastName,onChange:$,required:!0})]})]}),c.jsxs(dc,{children:[c.jsxs(Tn,{children:[c.jsx(An,{htmlFor:"email",children:"Email Address *"}),c.jsx(ea,{type:"email",id:"email",name:"email",value:e.email,onChange:$,required:!0})]}),c.jsxs(Tn,{children:[c.jsx(An,{htmlFor:"phone",children:"Phone Number *"}),c.jsx(ea,{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:$,required:!0})]})]}),c.jsxs(dc,{children:[c.jsxs(Tn,{children:[c.jsx(An,{htmlFor:"program",children:"Select Program *"}),c.jsxs(tv,{id:"program",name:"program",value:e.program,onChange:$,required:!0,children:[c.jsx("option",{value:"",children:"Choose a program..."}),w.map(T=>c.jsx("option",{value:T.id,children:T.name},T.id))]})]}),c.jsxs(Tn,{children:[c.jsx(An,{htmlFor:"accommodation",children:"Accommodation *"}),c.jsxs(tv,{id:"accommodation",name:"accommodation",value:e.accommodation,onChange:$,required:!0,children:[c.jsx("option",{value:"",children:"Choose accommodation..."}),j.map(T=>c.jsxs("option",{value:T.id,children:[T.name," (",T.price,")"]},T.id))]})]})]}),c.jsxs(dc,{children:[c.jsxs(Tn,{children:[c.jsx(An,{htmlFor:"guests",children:"Number of Guests *"}),c.jsx(ea,{type:"number",id:"guests",name:"guests",min:"1",max:"10",value:e.guests,onChange:$,required:!0})]}),c.jsxs(Tn,{children:[c.jsx(An,{htmlFor:"checkIn",children:"Check-in Date *"}),c.jsx(ea,{type:"date",id:"checkIn",name:"checkIn",value:e.checkIn,onChange:$,required:!0})]}),c.jsxs(Tn,{children:[c.jsx(An,{htmlFor:"checkOut",children:"Check-out Date *"}),c.jsx(ea,{type:"date",id:"checkOut",name:"checkOut",value:e.checkOut,onChange:$,required:!0})]})]}),c.jsxs(Tn,{children:[c.jsx(An,{htmlFor:"specialRequests",children:"Special Requests"}),c.jsx(RC,{id:"specialRequests",name:"specialRequests",rows:"4",value:e.specialRequests,onChange:$,placeholder:"Dietary restrictions, accessibility needs, or any other special requirements..."})]}),c.jsx(CC,{type:"submit",disabled:r,variant:"accent",size:"large",children:r?"Submitting...":"Request Booking"})]})})]})})})]})},xC=v.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: ${({theme:e})=>e.spacing[16]} 0;
`,vC=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  color: ${({theme:e})=>e.colors.white};
  margin-top: ${({theme:e})=>e.spacing[6]};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
  }
`,bC=v.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: ${({theme:e})=>e.spacing[10]};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,SC=v.div`
  background-color: ${({theme:e})=>e.colors.gray[50]};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[8]};
  height: fit-content;

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    order: 2;
  }
`,wC=v.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  color: ${({theme:e})=>e.colors.primary};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,$C=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  color: ${({theme:e})=>e.colors.gray[700]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  line-height: 1.6;
`,jC=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[5]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,oc=v.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[3]};
`,sc=v.div`
  color: ${({theme:e})=>e.colors.accent};
  font-size: 1.5rem;
  margin-top: ${({theme:e})=>e.spacing[1]};
`,lc=v.div`
  flex: 1;
`,cc=v.h4`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  color: ${({theme:e})=>e.colors.gray[900]};
  margin-bottom: ${({theme:e})=>e.spacing[1]};
`,uc=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.gray[600]};
`,TC=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.gray[600]};
  font-style: italic;
  line-height: 1.6;
`,AC=v.form`
  background-color: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[8]};
  box-shadow: ${({theme:e})=>e.shadows.md};

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    order: 1;
  }
`,EC=v.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  color: ${({theme:e})=>e.colors.gray[900]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  text-align: center;
`,dc=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,Tn=v.div`
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,An=v.label`
  display: block;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.gray[700]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,ea=v.input`
  width: 100%;
  padding: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.colors.gray[300]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  color: ${({theme:e})=>e.colors.charcoal};
  background-color: white;

  &::placeholder {
    color: ${({theme:e})=>e.colors.gray[500]};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px rgba(42, 93, 69, 0.2);
  }
`,tv=v.select`
  width: 100%;
  padding: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.colors.gray[300]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  color: ${({theme:e})=>e.colors.charcoal};
  background-color: white;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px rgba(42, 93, 69, 0.2);
  }

  option {
    color: ${({theme:e})=>e.colors.charcoal};
    background-color: white;
  }
`,RC=v.textarea`
  width: 100%;
  padding: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.colors.gray[300]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  color: ${({theme:e})=>e.colors.charcoal};
  background-color: white;
  resize: vertical;

  &::placeholder {
    color: ${({theme:e})=>e.colors.gray[500]};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px rgba(42, 93, 69, 0.2);
  }
`,CC=v(Te)`
  width: 100%;
  margin-top: ${({theme:e})=>e.spacing[4]};
`,zC=v.div`
  background-color: ${({theme:e})=>e.colors.error}20;
  color: ${({theme:e})=>e.colors.error};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,DC=v.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};

  h3 {
    color: ${({theme:e})=>e.colors.primary};
    font-size: ${({theme:e})=>e.typography.fontSize.xl};
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }

  p {
    color: ${({theme:e})=>e.colors.gray[700]};
    margin-bottom: ${({theme:e})=>e.spacing[6]};
    line-height: 1.6;
  }

  button {
    margin: 0 auto;
  }
`,MC=({post:e,variant:i="default",formatDate:r})=>c.jsxs(OC,{as:ie.div,whileHover:{y:-5},transition:{duration:.3},variant:i,children:[c.jsxs(f4,{to:`/blog/${e.slug}`,children:[c.jsx(kC,{src:e.featuredImage,alt:e.title}),c.jsx(BC,{children:e.category.charAt(0).toUpperCase()+e.category.slice(1)})]}),c.jsxs(NC,{children:[c.jsx(LC,{to:`/blog/${e.slug}`,children:e.title}),c.jsxs(VC,{children:[c.jsxs(uh,{children:[c.jsx(ha,{}),c.jsx("span",{children:r(e.publishedAt)})]}),c.jsxs(uh,{children:[c.jsx(cu,{}),c.jsx("span",{children:e.author.name})]}),i==="default"&&c.jsxs(uh,{children:[c.jsx(tm,{}),c.jsxs("span",{children:[e.readTime," min read"]})]})]}),i==="default"&&c.jsx(_C,{children:e.excerpt}),c.jsx(UC,{to:`/blog/${e.slug}`,children:"Read More →"})]})]}),OC=v.div`
  background-color: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.md};
  height: 100%;
  display: flex;
  flex-direction: column;
  
  ${({variant:e})=>e==="compact"&&`
    flex-direction: row;
    align-items: center;
  `}
`,f4=v(Ne)`
  position: relative;
  display: block;
  overflow: hidden;
  
  ${({variant:e})=>e==="compact"?`
    width: 120px;
    height: 120px;
    flex-shrink: 0;
  `:`
    height: 220px;
  `}
`,kC=v.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${f4}:hover & {
    transform: scale(1.05);
  }
`,BC=v.div`
  position: absolute;
  top: ${({theme:e})=>e.spacing[3]};
  left: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[3]};
  background-color: ${({theme:e})=>e.colors.accent};
  color: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  z-index: 1;
`,NC=v.div`
  padding: ${({theme:e})=>e.spacing[5]};
  flex: 1;
  display: flex;
  flex-direction: column;
`,LC=v(Ne)`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.gray[900]};
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  text-decoration: none;
  line-height: 1.4;
  
  &:hover {
    color: ${({theme:e})=>e.colors.primary};
  }
  
  ${({variant:e})=>e==="compact"&&`
    font-size: ${({theme:i})=>i.typography.fontSize.md};
    margin-bottom: ${({theme:i})=>i.spacing[1]};
  `}
`,VC=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.gray[600]};
`,uh=v.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,_C=v.p`
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.gray[700]};
  line-height: 1.6;
  flex: 1;
`,UC=v(Ne)`
  display: inline-block;
  color: ${({theme:e})=>e.colors.primary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  text-decoration: none;
  transition: color 0.3s ease;
  margin-top: auto;
  
  &:hover {
    color: ${({theme:e})=>e.colors.primaryDark};
    text-decoration: underline;
  }
`,HC=({post:e,formatDate:i})=>c.jsxs(PC,{as:ie.div,whileHover:{y:-5},transition:{duration:.3},children:[c.jsxs(h4,{to:`/blog/${e.slug}`,children:[c.jsx(FC,{src:e.featuredImage,alt:e.title}),c.jsx(YC,{children:"Featured"}),c.jsx(qC,{children:e.category.charAt(0).toUpperCase()+e.category.slice(1)})]}),c.jsxs(GC,{children:[c.jsx(XC,{to:`/blog/${e.slug}`,children:e.title}),c.jsxs(KC,{children:[c.jsxs(dh,{children:[c.jsx(ha,{}),c.jsx("span",{children:i(e.publishedAt)})]}),c.jsxs(dh,{children:[c.jsx(cu,{}),c.jsx("span",{children:e.author.name})]}),c.jsxs(dh,{children:[c.jsx(tm,{}),c.jsxs("span",{children:[e.readTime," min read"]})]})]}),c.jsx(ZC,{children:e.excerpt}),c.jsx(QC,{to:`/blog/${e.slug}`,children:"Read Article"})]})]}),PC=v.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.lg};
  margin-bottom: ${({theme:e})=>e.spacing[10]};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`,h4=v(Ne)`
  position: relative;
  display: block;
  height: 300px;
  overflow: hidden;
  
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    height: 100%;
  }
`,FC=v.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${h4}:hover & {
    transform: scale(1.05);
  }
`,YC=v.div`
  position: absolute;
  top: ${({theme:e})=>e.spacing[3]};
  right: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  z-index: 1;
`,qC=v.div`
  position: absolute;
  top: ${({theme:e})=>e.spacing[3]};
  left: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[3]};
  background-color: ${({theme:e})=>e.colors.accent};
  color: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  z-index: 1;
`,GC=v.div`
  padding: ${({theme:e})=>e.spacing[8]};
  display: flex;
  flex-direction: column;
`,XC=v(Ne)`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.gray[900]};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  text-decoration: none;
  line-height: 1.3;
  
  &:hover {
    color: ${({theme:e})=>e.colors.primary};
  }
`,KC=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.gray[600]};
`,dh=v.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,ZC=v.p`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.gray[700]};
  line-height: 1.6;
  flex: 1;
`,QC=v(Ne)`
  display: inline-block;
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.white};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.shadows.md};
  }
`,IC=({categories:e,recentPosts:i,popularTags:r,searchQuery:o,setSearchQuery:l,activeCategory:d,setActiveCategory:f,formatDate:p})=>c.jsxs(WC,{children:[c.jsxs(Uo,{children:[c.jsx(Ho,{children:"Search"}),c.jsxs(JC,{children:[c.jsx(ez,{type:"text",placeholder:"Search articles...",value:o,onChange:m=>l(m.target.value)}),c.jsx(tz,{children:c.jsx(IA,{})})]})]}),c.jsxs(Uo,{children:[c.jsx(Ho,{children:"Categories"}),c.jsx(nz,{children:e.map(m=>c.jsxs(iz,{$isActive:d===m.id,onClick:()=>f(m.id),children:[c.jsx(az,{children:m.name}),m.count&&c.jsx(rz,{children:m.count})]},m.id))})]}),c.jsxs(Uo,{children:[c.jsx(Ho,{children:"Recent Posts"}),c.jsx(oz,{children:i.map(m=>c.jsxs(sz,{children:[c.jsx(lz,{to:`/blog/${m.slug}`,children:c.jsx("img",{src:m.featuredImage,alt:m.title})}),c.jsxs(cz,{children:[c.jsx(uz,{to:`/blog/${m.slug}`,children:m.title}),c.jsxs(dz,{children:[c.jsx(ha,{}),c.jsx("span",{children:p(m.publishedAt)})]})]})]},m.id))})]}),c.jsxs(Uo,{children:[c.jsx(Ho,{children:"Popular Tags"}),c.jsx(fz,{children:r.map(m=>c.jsxs(hz,{to:`/blog?tag=${m.name}`,children:["#",m.name]},m.id))})]}),c.jsxs(Uo,{children:[c.jsx(Ho,{children:"Newsletter"}),c.jsx(pz,{children:"Subscribe to our newsletter to receive the latest articles and updates."}),c.jsxs(mz,{onSubmit:m=>{m.preventDefault(),alert("Thank you for subscribing to our newsletter!"),m.target.reset()},children:[c.jsx(gz,{type:"email",placeholder:"Your email address",required:!0}),c.jsx(yz,{type:"submit",children:"Subscribe"})]})]})]}),WC=v.aside`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
`,Uo=v.div`
  background-color: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,Ho=v.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.gray[900]};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  padding-bottom: ${({theme:e})=>e.spacing[3]};
  border-bottom: 2px solid ${({theme:e})=>e.colors.primary};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: ${({theme:e})=>e.colors.accent};
  }
`,JC=v.div`
  position: relative;
`,ez=v.input`
  width: 100%;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  padding-right: ${({theme:e})=>e.spacing[12]};
  border: 1px solid ${({theme:e})=>e.colors.gray[300]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  background-color: ${({theme:e})=>e.colors.gray[100]};
  color: ${({theme:e})=>e.colors.charcoal};

  &::placeholder {
    color: ${({theme:e})=>e.colors.gray[500]};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px rgba(42, 93, 69, 0.2);
  }
`,tz=v.button`
  position: absolute;
  right: ${({theme:e})=>e.spacing[3]};
  top: 50%;
  transform: translateY(-50%);
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.white};
  border: none;
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDark};
  }
`,nz=v.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,iz=v.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme:e})=>e.spacing[3]} 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${({$isActive:e,theme:i})=>e?i.colors.primary:i.colors.gray[700]};
  font-weight: ${({$isActive:e,theme:i})=>e?i.typography.fontWeight.medium:i.typography.fontWeight.normal};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary};
    padding-left: ${({theme:e})=>e.spacing[2]};
  }
`,az=v.span``,rz=v.span`
  background-color: ${({theme:e})=>e.colors.gray[200]};
  color: ${({theme:e})=>e.colors.gray[700]};
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
`,oz=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,sz=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
`,lz=v(Ne)`
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`,cz=v.div`
  display: flex;
  flex-direction: column;
`,uz=v(Ne)`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.gray[900]};
  text-decoration: none;
  line-height: 1.4;
  margin-bottom: ${({theme:e})=>e.spacing[1]};

  &:hover {
    color: ${({theme:e})=>e.colors.primary};
  }
`,dz=v.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.gray[500]};
`,fz=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};
`,hz=v(Ne)`
  display: inline-block;
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[3]};
  background-color: ${({theme:e})=>e.colors.gray[100]};
  color: ${({theme:e})=>e.colors.gray[700]};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.white};
  }
`,pz=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.gray[700]};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  line-height: 1.6;
`,mz=v.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,gz=v.input`
  width: 100%;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  border: 1px solid ${({theme:e})=>e.colors.gray[300]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  background-color: ${({theme:e})=>e.colors.gray[100]};
  color: ${({theme:e})=>e.colors.charcoal};

  &::placeholder {
    color: ${({theme:e})=>e.colors.gray[500]};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px rgba(42, 93, 69, 0.2);
  }
`,yz=v.button`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.accent};
  color: ${({theme:e})=>e.colors.white};
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({theme:e})=>e.colors.accentDark};
  }
`,xz=({category:e,size:i="medium"})=>{const r=l=>{switch(l.toLowerCase()){case"yoga":return c.jsx(uu,{});case"meditation":return c.jsx(GA,{});case"ayurveda":return c.jsx(su,{});case"wellness":return c.jsx(ZA,{});case"spirituality":return c.jsx(QA,{});case"travel":return c.jsx(lu,{});default:return c.jsx(qA,{})}},o=l=>{switch(l.toLowerCase()){case"yoga":return"#4CAF50";case"meditation":return"#2196F3";case"ayurveda":return"#FF9800";case"wellness":return"#E91E63";case"spirituality":return"#9C27B0";case"travel":return"#795548";default:return"#607D8B"}};return c.jsx(vz,{color:o(e),size:i,children:r(e)})},vz=v.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({color:e})=>e};
  color: white;
  border-radius: 50%;
  
  ${({size:e,theme:i})=>{switch(e){case"small":return`
          width: 30px;
          height: 30px;
          font-size: ${i.typography.fontSize.sm};
        `;case"large":return`
          width: 60px;
          height: 60px;
          font-size: ${i.typography.fontSize["2xl"]};
        `;default:return`
          width: 45px;
          height: 45px;
          font-size: ${i.typography.fontSize.lg};
        `}}}
`,bz=()=>{const[e,i]=z.useState([]),[r,o]=z.useState(!0),[l]=z.useState(null),[d,f]=z.useState("all"),[p,m]=z.useState(""),g={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6}}},y={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},[b,w]=Ue({triggerOnce:!0,threshold:.2}),[j,$]=Ue({triggerOnce:!0,threshold:.1}),R=[{id:"all",name:"All Posts",count:e.length},{id:"yoga",name:"Yoga",count:e.filter(H=>H.category==="yoga").length},{id:"meditation",name:"Meditation",count:e.filter(H=>H.category==="meditation").length},{id:"ayurveda",name:"Ayurveda",count:e.filter(H=>H.category==="ayurveda").length},{id:"wellness",name:"Wellness",count:e.filter(H=>H.category==="wellness").length},{id:"spirituality",name:"Spirituality",count:e.filter(H=>H.category==="spirituality").length}],T=[{id:1,name:"yoga"},{id:2,name:"meditation"},{id:3,name:"wellness"},{id:4,name:"ayurveda"},{id:5,name:"spirituality"},{id:6,name:"mindfulness"},{id:7,name:"healing"},{id:8,name:"himalaya"},{id:9,name:"retreat"},{id:10,name:"nature"}],E=[{id:1,title:"The Ancient Wisdom of Yoga Philosophy",slug:"ancient-wisdom-yoga-philosophy",excerpt:"Explore the philosophical foundations of yoga and how they can transform your practice and daily life.",featuredImage:"/assets/images/blog.png",category:"yoga",author:{name:"Guru Amrit",avatar:Ze("/assets/images/team/guru-amrit.jpg",100,100)},publishedAt:"2023-05-15T10:30:00Z",readTime:8},{id:2,title:"Meditation Techniques for Beginners",slug:"meditation-techniques-beginners",excerpt:"Simple yet powerful meditation techniques that anyone can practice to find inner peace and mental clarity.",featuredImage:"/assets/images/blog.png",category:"meditation",author:{name:"Dr. Priya Sharma",avatar:Ze("/assets/images/team/dr-priya.jpg",100,100)},publishedAt:"2023-06-02T14:15:00Z",readTime:6},{id:3,title:"Ayurvedic Principles for Seasonal Wellness",slug:"ayurvedic-principles-seasonal-wellness",excerpt:"How to adapt your diet and lifestyle according to Ayurvedic wisdom for optimal health throughout the changing seasons.",featuredImage:"/assets/images/blog.png",category:"ayurveda",author:{name:"Vaidya Raj Kumar",avatar:Ze("/assets/images/team/default.jpg",100,100)},publishedAt:"2023-06-20T09:45:00Z",readTime:10},{id:4,title:"The Healing Power of Himalayan Herbs",slug:"healing-power-himalayan-herbs",excerpt:"Discover the medicinal properties of rare herbs that grow in the pristine Himalayan mountains and their traditional uses.",featuredImage:"/assets/images/blog.png",category:"wellness",author:{name:"Dr. Priya Sharma",avatar:Ze("/assets/images/team/dr-priya.jpg",100,100)},publishedAt:"2023-07-05T11:20:00Z",readTime:7},{id:5,title:"Understanding the Chakra System",slug:"understanding-chakra-system",excerpt:"A comprehensive guide to the seven main chakras and how balancing them can lead to physical, emotional, and spiritual wellbeing.",featuredImage:"/assets/images/blog.png",category:"spirituality",author:{name:"Guru Amrit",avatar:Ze("/assets/images/team/guru-amrit.jpg",100,100)},publishedAt:"2023-07-18T16:30:00Z",readTime:9},{id:6,title:"Yoga for Back Pain Relief",slug:"yoga-back-pain-relief",excerpt:"Gentle yoga poses and sequences specifically designed to alleviate back pain and improve spinal health.",featuredImage:"/assets/images/blog.png",category:"yoga",author:{name:"Neerja Singh",avatar:Ze("/assets/images/team/default.jpg",100,100)},publishedAt:"2023-08-01T13:10:00Z",readTime:5}];z.useEffect(()=>{o(!0),i(E),o(!1)},[]);const k=e.filter(H=>{const _=d==="all"||H.category===d,X=H.title.toLowerCase().includes(p.toLowerCase())||H.excerpt.toLowerCase().includes(p.toLowerCase());return _&&X}),M=H=>{const _={year:"numeric",month:"long",day:"numeric"};return new Date(H).toLocaleDateString(void 0,_)};return c.jsxs("main",{children:[c.jsx(he,{$backgroundImage:"/assets/images/blog.png",$fullWidth:!0,$overlay:!0,ref:b,children:c.jsx(ie.div,{initial:"hidden",animate:w?"visible":"hidden",variants:g,children:c.jsxs(Sz,{children:[c.jsx(Ce,{title:"Wisdom & Insights",subtitle:"Our Blog",align:"center",color:"light",withDivider:!0}),c.jsx(wz,{children:"Explore our collection of articles on yoga, meditation, Ayurveda, wellness, and spiritual growth. Written by our experienced teachers and practitioners to inspire and guide your journey."})]})})}),c.jsx(he,{ref:j,children:c.jsxs(ie.div,{initial:"hidden",animate:$?"visible":"hidden",variants:y,children:[!r&&!l&&k.length>0&&c.jsx(HC,{post:k[0],formatDate:M}),c.jsxs($z,{children:[c.jsxs(jz,{children:[c.jsx(Az,{children:R.map(H=>H.id!=="all"&&c.jsxs(Ez,{$isActive:d===H.id,onClick:()=>f(H.id),children:[c.jsx(xz,{category:H.id,size:"small"}),c.jsx(Rz,{children:H.name})]},H.id))}),r?c.jsx(zz,{children:"Loading blog posts..."}):l?c.jsx(Dz,{children:l}):k.length===0?c.jsxs(Mz,{children:[c.jsx("p",{children:"No posts found matching your criteria. Please try a different search or category."}),c.jsx(Te,{variant:"outline",onClick:()=>{f("all"),m("")},children:"Reset Filters"})]}):c.jsx(Cz,{children:k.slice(1).map(H=>c.jsx(ie.div,{variants:g,children:c.jsx(MC,{post:H,formatDate:M})},H.id))})]}),c.jsx(Tz,{children:c.jsx(IC,{categories:R,recentPosts:e.slice(0,3),popularTags:T,searchQuery:p,setSearchQuery:m,activeCategory:d,setActiveCategory:f,formatDate:M})})]})]})}),c.jsx(he,{$variant:"primary",children:c.jsxs(Oz,{children:[c.jsx(Ce,{title:"Stay Updated",subtitle:"Join Our Newsletter",align:"center",color:"light",withDivider:!0}),c.jsx(kz,{children:"Subscribe to our newsletter to receive the latest articles, wellness tips, and retreat updates directly in your inbox."}),c.jsxs(Bz,{onSubmit:H=>{H.preventDefault(),alert("Thank you for subscribing to our newsletter!"),H.target.reset()},children:[c.jsx(Nz,{type:"email",placeholder:"Your email address",required:!0}),c.jsx(Te,{type:"submit",variant:"accent",children:"Subscribe"})]})]})})]})},Sz=v.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: ${({theme:e})=>e.spacing[12]} 0;
`,wz=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  color: ${({theme:e})=>e.colors.white};
  margin-top: ${({theme:e})=>e.spacing[6]};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`,$z=v.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:e})=>e.spacing[8]};
  margin-top: ${({theme:e})=>e.spacing[8]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 2fr 1fr;
  }
`,jz=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
`,Tz=v.div`
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    order: -1;
  }
`,Az=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[6]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
`,Ez=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${({$isActive:e})=>e?1:.7};

  &:hover {
    opacity: 1;
    transform: translateY(-3px);
  }
`,Rz=v.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.gray[700]};
`,Cz=v.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:e})=>e.spacing[6]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,zz=v.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[12]};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  color: ${({theme:e})=>e.colors.gray[600]};
`,Dz=v.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[12]};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  color: ${({theme:e})=>e.colors.error};
`,Mz=v.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[12]};

  p {
    margin-bottom: ${({theme:e})=>e.spacing[6]};
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
    color: ${({theme:e})=>e.colors.gray[600]};
  }
`,Oz=v.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]} 0;
`,kz=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  color: ${({theme:e})=>e.colors.white};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,Bz=v.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-direction: row;
  }
`,Nz=v.input`
  flex: 1;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.gray[100]};
  color: ${({theme:e})=>e.colors.charcoal};
  font-size: ${({theme:e})=>e.typography.fontSize.base};

  &::placeholder {
    color: ${({theme:e})=>e.colors.gray[500]};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.accent};
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
  }
`,Lz=()=>{const{id:e}=Zw(),[i,r]=z.useState(null),[o,l]=z.useState(!0),[d]=z.useState(null),[f,p]=z.useState([]),m={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6}}},[g,y]=Ue({triggerOnce:!0,threshold:.1}),[b,w]=Ue({triggerOnce:!0,threshold:.1}),j={id:1,title:"The Ancient Wisdom of Yoga Philosophy",slug:"ancient-wisdom-yoga-philosophy",content:`
      <p>Yoga is not just a physical practice but a profound philosophical system that has guided seekers for thousands of years. The word "yoga" comes from the Sanskrit root "yuj," meaning to join or unite, symbolizing the union of individual consciousness with universal consciousness.</p>

      <h2>The Eight Limbs of Yoga</h2>

      <p>Patanjali's Yoga Sutras outline the eight-limbed path (Ashtanga) of yoga:</p>

      <ol>
        <li><strong>Yama (Ethical Standards)</strong>: These are moral imperatives including non-violence (ahimsa), truthfulness (satya), non-stealing (asteya), continence (brahmacharya), and non-covetousness (aparigraha).</li>
        <li><strong>Niyama (Self-Discipline)</strong>: Personal observances including cleanliness (saucha), contentment (santosha), austerity (tapas), self-study (svadhyaya), and surrender to a higher power (ishvara pranidhana).</li>
        <li><strong>Asana (Posture)</strong>: The physical practice of yoga poses, designed to prepare the body for meditation.</li>
        <li><strong>Pranayama (Breath Control)</strong>: Techniques to control and expand vital energy through breath.</li>
        <li><strong>Pratyahara (Sensory Withdrawal)</strong>: Withdrawing the senses from external objects to focus inward.</li>
        <li><strong>Dharana (Concentration)</strong>: Focusing the mind on a single point.</li>
        <li><strong>Dhyana (Meditation)</strong>: Uninterrupted flow of concentration.</li>
        <li><strong>Samadhi (Enlightenment)</strong>: The state of transcendence, where the individual self merges with the universal consciousness.</li>
      </ol>

      <h2>The Yoga of the Bhagavad Gita</h2>

      <p>The Bhagavad Gita, a sacred text within the epic Mahabharata, outlines three main paths of yoga:</p>

      <ul>
        <li><strong>Karma Yoga</strong>: The yoga of selfless action, performing one's duties without attachment to results.</li>
        <li><strong>Bhakti Yoga</strong>: The yoga of devotion, cultivating love and surrender to the divine.</li>
        <li><strong>Jnana Yoga</strong>: The yoga of knowledge, seeking wisdom and understanding of the true nature of reality.</li>
      </ul>

      <p>Later, Raja Yoga (the royal path) was added, encompassing Patanjali's eight limbs.</p>

      <h2>Applying Yogic Philosophy in Modern Life</h2>

      <p>The ancient wisdom of yoga remains remarkably relevant in our modern world. Here are some ways to incorporate yogic philosophy into daily life:</p>

      <ul>
        <li><strong>Practice Ahimsa (Non-violence)</strong>: Cultivate compassion toward all beings, including yourself. This extends to thoughts, words, and actions.</li>
        <li><strong>Embrace Santosha (Contentment)</strong>: Find gratitude for what you have rather than constantly craving more.</li>
        <li><strong>Apply Svadhyaya (Self-study)</strong>: Regularly reflect on your thoughts, actions, and patterns to better understand yourself.</li>
        <li><strong>Balance Effort and Surrender</strong>: Work diligently toward your goals while accepting that some things are beyond your control.</li>
        <li><strong>Live Mindfully</strong>: Bring awareness to everyday activities, from eating to walking to conversing.</li>
      </ul>

      <p>By integrating these philosophical principles with a regular asana practice, we can experience yoga as it was originally intended—a holistic system for physical, mental, and spiritual well-being.</p>

      <p>Remember, yoga is not about perfecting poses but about using the practice as a tool for self-transformation and inner peace. As the Bhagavad Gita states, "Yoga is the journey of the self, through the self, to the self."</p>
    `,featuredImage:"/assets/images/blog.png",category:"yoga",tags:["philosophy","spirituality","yoga practice","meditation"],author:{name:"Guru Amrit",avatar:Ze("/assets/images/team/guru-amrit.jpg",100,100),bio:"Guru Amrit has been teaching yoga and meditation for over 30 years. He studied with masters in India and has dedicated his life to sharing the ancient wisdom of yoga."},publishedAt:"2023-05-15T10:30:00Z",readTime:8},$=[{id:2,title:"Meditation Techniques for Beginners",slug:"meditation-techniques-beginners",excerpt:"Simple yet powerful meditation techniques that anyone can practice to find inner peace and mental clarity.",featuredImage:"/assets/images/blog.png",category:"meditation",publishedAt:"2023-06-02T14:15:00Z"},{id:5,title:"Understanding the Chakra System",slug:"understanding-chakra-system",excerpt:"A comprehensive guide to the seven main chakras and how balancing them can lead to physical, emotional, and spiritual wellbeing.",featuredImage:"/assets/images/blog.png",category:"spirituality",publishedAt:"2023-07-18T16:30:00Z"},{id:6,title:"Yoga for Back Pain Relief",slug:"yoga-back-pain-relief",excerpt:"Gentle yoga poses and sequences specifically designed to alleviate back pain and improve spinal health.",featuredImage:"/assets/images/blog.png",category:"yoga",publishedAt:"2023-08-01T13:10:00Z"}];z.useEffect(()=>{l(!0),r(j),p($),l(!1)},[e]);const R=T=>{const E={year:"numeric",month:"long",day:"numeric"};return new Date(T).toLocaleDateString(void 0,E)};return o?c.jsx(Vz,{children:c.jsx(_z,{children:"Loading article..."})}):d?c.jsxs(nv,{children:[c.jsx(iv,{children:d}),c.jsx(Te,{to:"/blog",variant:"primary",children:"Return to Blog"})]}):i?c.jsxs("main",{children:[c.jsx(he,{backgroundImage:i.featuredImage,fullWidth:!0,overlay:!0,children:c.jsx(Uz,{children:c.jsxs(ie.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:[c.jsx(Hz,{children:i.category.charAt(0).toUpperCase()+i.category.slice(1)}),c.jsx(Pz,{children:i.title}),c.jsxs(Fz,{children:[c.jsxs(fh,{children:[c.jsx(ha,{}),c.jsx("span",{children:R(i.publishedAt)})]}),c.jsxs(fh,{children:[c.jsx(cu,{}),c.jsx("span",{children:i.author.name})]}),c.jsxs(fh,{children:[c.jsx(tm,{}),c.jsxs("span",{children:[i.readTime," min read"]})]})]})]})})}),c.jsx(he,{ref:g,children:c.jsx(ie.div,{initial:"hidden",animate:y?"visible":"hidden",variants:m,children:c.jsx(Yz,{children:c.jsxs(qz,{children:[c.jsxs(Gz,{children:[c.jsx(Xz,{src:i.author.avatar,alt:i.author.name}),c.jsxs(Kz,{children:[c.jsx(Zz,{children:i.author.name}),c.jsx(Qz,{children:i.author.bio})]})]}),c.jsx(Iz,{dangerouslySetInnerHTML:{__html:i.content}}),i.tags&&i.tags.length>0&&c.jsxs(Wz,{children:[c.jsx(Jz,{children:"Tags:"}),c.jsx(e7,{children:i.tags.map(T=>c.jsxs(t7,{to:`/blog?tag=${T}`,children:["#",T]},T))})]}),c.jsxs(n7,{children:[c.jsx(i7,{children:"Share this article:"}),c.jsxs(a7,{children:[c.jsx(fc,{"aria-label":"Share on Facebook",children:c.jsx(L2,{})}),c.jsx(fc,{"aria-label":"Share on Twitter",children:c.jsx(V2,{})}),c.jsx(fc,{"aria-label":"Share on LinkedIn",children:c.jsx(_A,{})}),c.jsx(fc,{"aria-label":"Share on Pinterest",children:c.jsx(UA,{})})]})]})]})})})}),f.length>0&&c.jsx(he,{variant:"light",ref:b,children:c.jsxs(ie.div,{initial:"hidden",animate:w?"visible":"hidden",variants:m,children:[c.jsx(Ce,{title:"You May Also Like",subtitle:"Related Articles",align:"center",withDivider:!0}),c.jsx(r7,{children:f.map(T=>c.jsxs(o7,{children:[c.jsx(s7,{to:`/blog/${T.slug}`,children:c.jsx("img",{src:T.featuredImage,alt:T.title})}),c.jsxs(l7,{children:[c.jsx(c7,{children:T.category.charAt(0).toUpperCase()+T.category.slice(1)}),c.jsx(u7,{to:`/blog/${T.slug}`,children:T.title}),c.jsx(d7,{children:R(T.publishedAt)})]})]},T.id))}),c.jsx(f7,{children:c.jsx(Te,{to:"/blog",variant:"outline",children:"View All Articles"})})]})}),c.jsx(he,{variant:"primary",children:c.jsxs(h7,{children:[c.jsx(Ce,{title:"Stay Updated",subtitle:"Join Our Newsletter",align:"center",color:"light",withDivider:!0}),c.jsx(p7,{children:"Subscribe to our newsletter to receive the latest articles, wellness tips, and retreat updates directly in your inbox."}),c.jsxs(m7,{onSubmit:T=>{T.preventDefault(),alert("Thank you for subscribing to our newsletter!"),T.target.reset()},children:[c.jsx(g7,{type:"email",placeholder:"Your email address",required:!0}),c.jsx(Te,{type:"submit",variant:"accent",children:"Subscribe"})]})]})})]}):c.jsxs(nv,{children:[c.jsx(iv,{children:"Article not found."}),c.jsx(Te,{to:"/blog",variant:"primary",children:"Return to Blog"})]})},Vz=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`,_z=v.div`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  color: ${({theme:e})=>e.colors.gray[600]};
`,nv=v.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  gap: ${({theme:e})=>e.spacing[6]};
`,iv=v.div`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  color: ${({theme:e})=>e.colors.error};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,Uz=v.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: ${({theme:e})=>e.spacing[16]} 0;
`,Hz=v.div`
  display: inline-block;
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.accent};
  color: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,Pz=v.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.white};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
  }
`,Fz=v.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.white};
  font-size: ${({theme:e})=>e.typography.fontSize.md};
`,fh=v.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Yz=v.div`
  max-width: 800px;
  margin: 0 auto;
`,qz=v.div`
  background-color: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: ${({theme:e})=>e.spacing[8]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>e.spacing[12]};
  }
`,Gz=v.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  padding-bottom: ${({theme:e})=>e.spacing[8]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
`,Xz=v.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`,Kz=v.div`
  flex: 1;
`,Zz=v.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,Qz=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.gray[600]};
  line-height: 1.6;
`,Iz=v.div`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  line-height: 1.8;
  color: ${({theme:e})=>e.colors.gray[800]};

  h2 {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    margin-top: ${({theme:e})=>e.spacing[10]};
    margin-bottom: ${({theme:e})=>e.spacing[6]};
    color: ${({theme:e})=>e.colors.gray[900]};
  }

  h3 {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-size: ${({theme:e})=>e.typography.fontSize.xl};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    margin-top: ${({theme:e})=>e.spacing[8]};
    margin-bottom: ${({theme:e})=>e.spacing[4]};
    color: ${({theme:e})=>e.colors.gray[900]};
  }

  p {
    margin-bottom: ${({theme:e})=>e.spacing[6]};
  }

  ul, ol {
    margin-bottom: ${({theme:e})=>e.spacing[6]};
    padding-left: ${({theme:e})=>e.spacing[6]};
  }

  li {
    margin-bottom: ${({theme:e})=>e.spacing[3]};
  }

  strong {
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    color: ${({theme:e})=>e.colors.gray[900]};
  }

  blockquote {
    border-left: 4px solid ${({theme:e})=>e.colors.primary};
    padding-left: ${({theme:e})=>e.spacing[6]};
    margin: ${({theme:e})=>e.spacing[8]} 0;
    font-style: italic;
    color: ${({theme:e})=>e.colors.gray[700]};
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: ${({theme:e})=>e.borderRadius.md};
    margin: ${({theme:e})=>e.spacing[6]} 0;
  }
`,Wz=v.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-top: ${({theme:e})=>e.spacing[10]};
  padding-top: ${({theme:e})=>e.spacing[6]};
  border-top: 1px solid ${({theme:e})=>e.colors.gray[200]};
`,Jz=v.span`
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.gray[700]};
`,e7=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};
`,t7=v(Ne)`
  display: inline-block;
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[3]};
  background-color: ${({theme:e})=>e.colors.gray[100]};
  color: ${({theme:e})=>e.colors.gray[700]};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.white};
  }
`,n7=v.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-top: ${({theme:e})=>e.spacing[6]};
  padding-top: ${({theme:e})=>e.spacing[6]};
  border-top: 1px solid ${({theme:e})=>e.colors.gray[200]};
`,i7=v.span`
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.gray[700]};
`,a7=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
`,fc=v.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.gray[200]};
  color: ${({theme:e})=>e.colors.gray[700]};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.white};
  }
`,r7=v.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:e})=>e.spacing[6]};
  margin-top: ${({theme:e})=>e.spacing[8]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`,o7=v.div`
  background-color: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`,s7=v(Ne)`
  display: block;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`,l7=v.div`
  padding: ${({theme:e})=>e.spacing[4]};
`,c7=v.div`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.primary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,u7=v(Ne)`
  display: block;
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.gray[900]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  text-decoration: none;
  line-height: 1.4;

  &:hover {
    color: ${({theme:e})=>e.colors.primary};
  }
`,d7=v.div`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.gray[500]};
`,f7=v.div`
  display: flex;
  justify-content: center;
  margin-top: ${({theme:e})=>e.spacing[10]};
`,h7=v.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]} 0;
`,p7=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  color: ${({theme:e})=>e.colors.white};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,m7=v.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-direction: row;
  }
`,g7=v.input`
  flex: 1;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.gray[100]};
  color: ${({theme:e})=>e.colors.charcoal};
  font-size: ${({theme:e})=>e.typography.fontSize.base};

  &::placeholder {
    color: ${({theme:e})=>e.colors.gray[500]};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.accent};
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
  }
`;function p4(e,i){return function(){return e.apply(i,arguments)}}const{toString:y7}=Object.prototype,{getPrototypeOf:am}=Object,{iterator:du,toStringTag:m4}=Symbol,fu=(e=>i=>{const r=y7.call(i);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),xn=e=>(e=e.toLowerCase(),i=>fu(i)===e),hu=e=>i=>typeof i===e,{isArray:Br}=Array,us=hu("undefined");function x7(e){return e!==null&&!us(e)&&e.constructor!==null&&!us(e.constructor)&&Nt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const g4=xn("ArrayBuffer");function v7(e){let i;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?i=ArrayBuffer.isView(e):i=e&&e.buffer&&g4(e.buffer),i}const b7=hu("string"),Nt=hu("function"),y4=hu("number"),pu=e=>e!==null&&typeof e=="object",S7=e=>e===!0||e===!1,Mc=e=>{if(fu(e)!=="object")return!1;const i=am(e);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(m4 in e)&&!(du in e)},w7=xn("Date"),$7=xn("File"),j7=xn("Blob"),T7=xn("FileList"),A7=e=>pu(e)&&Nt(e.pipe),E7=e=>{let i;return e&&(typeof FormData=="function"&&e instanceof FormData||Nt(e.append)&&((i=fu(e))==="formdata"||i==="object"&&Nt(e.toString)&&e.toString()==="[object FormData]"))},R7=xn("URLSearchParams"),[C7,z7,D7,M7]=["ReadableStream","Request","Response","Headers"].map(xn),O7=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function xs(e,i,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let o,l;if(typeof e!="object"&&(e=[e]),Br(e))for(o=0,l=e.length;o<l;o++)i.call(null,e[o],o,e);else{const d=r?Object.getOwnPropertyNames(e):Object.keys(e),f=d.length;let p;for(o=0;o<f;o++)p=d[o],i.call(null,e[p],p,e)}}function x4(e,i){i=i.toLowerCase();const r=Object.keys(e);let o=r.length,l;for(;o-- >0;)if(l=r[o],i===l.toLowerCase())return l;return null}const oa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,v4=e=>!us(e)&&e!==oa;function rp(){const{caseless:e}=v4(this)&&this||{},i={},r=(o,l)=>{const d=e&&x4(i,l)||l;Mc(i[d])&&Mc(o)?i[d]=rp(i[d],o):Mc(o)?i[d]=rp({},o):Br(o)?i[d]=o.slice():i[d]=o};for(let o=0,l=arguments.length;o<l;o++)arguments[o]&&xs(arguments[o],r);return i}const k7=(e,i,r,{allOwnKeys:o}={})=>(xs(i,(l,d)=>{r&&Nt(l)?e[d]=p4(l,r):e[d]=l},{allOwnKeys:o}),e),B7=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),N7=(e,i,r,o)=>{e.prototype=Object.create(i.prototype,o),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:i.prototype}),r&&Object.assign(e.prototype,r)},L7=(e,i,r,o)=>{let l,d,f;const p={};if(i=i||{},e==null)return i;do{for(l=Object.getOwnPropertyNames(e),d=l.length;d-- >0;)f=l[d],(!o||o(f,e,i))&&!p[f]&&(i[f]=e[f],p[f]=!0);e=r!==!1&&am(e)}while(e&&(!r||r(e,i))&&e!==Object.prototype);return i},V7=(e,i,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=i.length;const o=e.indexOf(i,r);return o!==-1&&o===r},_7=e=>{if(!e)return null;if(Br(e))return e;let i=e.length;if(!y4(i))return null;const r=new Array(i);for(;i-- >0;)r[i]=e[i];return r},U7=(e=>i=>e&&i instanceof e)(typeof Uint8Array<"u"&&am(Uint8Array)),H7=(e,i)=>{const o=(e&&e[du]).call(e);let l;for(;(l=o.next())&&!l.done;){const d=l.value;i.call(e,d[0],d[1])}},P7=(e,i)=>{let r;const o=[];for(;(r=e.exec(i))!==null;)o.push(r);return o},F7=xn("HTMLFormElement"),Y7=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,o,l){return o.toUpperCase()+l}),av=(({hasOwnProperty:e})=>(i,r)=>e.call(i,r))(Object.prototype),q7=xn("RegExp"),b4=(e,i)=>{const r=Object.getOwnPropertyDescriptors(e),o={};xs(r,(l,d)=>{let f;(f=i(l,d,e))!==!1&&(o[d]=f||l)}),Object.defineProperties(e,o)},G7=e=>{b4(e,(i,r)=>{if(Nt(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const o=e[r];if(Nt(o)){if(i.enumerable=!1,"writable"in i){i.writable=!1;return}i.set||(i.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},X7=(e,i)=>{const r={},o=l=>{l.forEach(d=>{r[d]=!0})};return Br(e)?o(e):o(String(e).split(i)),r},K7=()=>{},Z7=(e,i)=>e!=null&&Number.isFinite(e=+e)?e:i;function Q7(e){return!!(e&&Nt(e.append)&&e[m4]==="FormData"&&e[du])}const I7=e=>{const i=new Array(10),r=(o,l)=>{if(pu(o)){if(i.indexOf(o)>=0)return;if(!("toJSON"in o)){i[l]=o;const d=Br(o)?[]:{};return xs(o,(f,p)=>{const m=r(f,l+1);!us(m)&&(d[p]=m)}),i[l]=void 0,d}}return o};return r(e,0)},W7=xn("AsyncFunction"),J7=e=>e&&(pu(e)||Nt(e))&&Nt(e.then)&&Nt(e.catch),S4=((e,i)=>e?setImmediate:i?((r,o)=>(oa.addEventListener("message",({source:l,data:d})=>{l===oa&&d===r&&o.length&&o.shift()()},!1),l=>{o.push(l),oa.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",Nt(oa.postMessage)),eD=typeof queueMicrotask<"u"?queueMicrotask.bind(oa):typeof process<"u"&&process.nextTick||S4,tD=e=>e!=null&&Nt(e[du]),U={isArray:Br,isArrayBuffer:g4,isBuffer:x7,isFormData:E7,isArrayBufferView:v7,isString:b7,isNumber:y4,isBoolean:S7,isObject:pu,isPlainObject:Mc,isReadableStream:C7,isRequest:z7,isResponse:D7,isHeaders:M7,isUndefined:us,isDate:w7,isFile:$7,isBlob:j7,isRegExp:q7,isFunction:Nt,isStream:A7,isURLSearchParams:R7,isTypedArray:U7,isFileList:T7,forEach:xs,merge:rp,extend:k7,trim:O7,stripBOM:B7,inherits:N7,toFlatObject:L7,kindOf:fu,kindOfTest:xn,endsWith:V7,toArray:_7,forEachEntry:H7,matchAll:P7,isHTMLForm:F7,hasOwnProperty:av,hasOwnProp:av,reduceDescriptors:b4,freezeMethods:G7,toObjectSet:X7,toCamelCase:Y7,noop:K7,toFiniteNumber:Z7,findKey:x4,global:oa,isContextDefined:v4,isSpecCompliantForm:Q7,toJSONObject:I7,isAsyncFn:W7,isThenable:J7,setImmediate:S4,asap:eD,isIterable:tD};function ue(e,i,r,o,l){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",i&&(this.code=i),r&&(this.config=r),o&&(this.request=o),l&&(this.response=l,this.status=l.status?l.status:null)}U.inherits(ue,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:U.toJSONObject(this.config),code:this.code,status:this.status}}});const w4=ue.prototype,$4={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{$4[e]={value:e}});Object.defineProperties(ue,$4);Object.defineProperty(w4,"isAxiosError",{value:!0});ue.from=(e,i,r,o,l,d)=>{const f=Object.create(w4);return U.toFlatObject(e,f,function(m){return m!==Error.prototype},p=>p!=="isAxiosError"),ue.call(f,e.message,i,r,o,l),f.cause=e,f.name=e.name,d&&Object.assign(f,d),f};const nD=null;function op(e){return U.isPlainObject(e)||U.isArray(e)}function j4(e){return U.endsWith(e,"[]")?e.slice(0,-2):e}function rv(e,i,r){return e?e.concat(i).map(function(l,d){return l=j4(l),!r&&d?"["+l+"]":l}).join(r?".":""):i}function iD(e){return U.isArray(e)&&!e.some(op)}const aD=U.toFlatObject(U,{},null,function(i){return/^is[A-Z]/.test(i)});function mu(e,i,r){if(!U.isObject(e))throw new TypeError("target must be an object");i=i||new FormData,r=U.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(R,T){return!U.isUndefined(T[R])});const o=r.metaTokens,l=r.visitor||y,d=r.dots,f=r.indexes,m=(r.Blob||typeof Blob<"u"&&Blob)&&U.isSpecCompliantForm(i);if(!U.isFunction(l))throw new TypeError("visitor must be a function");function g($){if($===null)return"";if(U.isDate($))return $.toISOString();if(!m&&U.isBlob($))throw new ue("Blob is not supported. Use a Buffer instead.");return U.isArrayBuffer($)||U.isTypedArray($)?m&&typeof Blob=="function"?new Blob([$]):Buffer.from($):$}function y($,R,T){let E=$;if($&&!T&&typeof $=="object"){if(U.endsWith(R,"{}"))R=o?R:R.slice(0,-2),$=JSON.stringify($);else if(U.isArray($)&&iD($)||(U.isFileList($)||U.endsWith(R,"[]"))&&(E=U.toArray($)))return R=j4(R),E.forEach(function(M,H){!(U.isUndefined(M)||M===null)&&i.append(f===!0?rv([R],H,d):f===null?R:R+"[]",g(M))}),!1}return op($)?!0:(i.append(rv(T,R,d),g($)),!1)}const b=[],w=Object.assign(aD,{defaultVisitor:y,convertValue:g,isVisitable:op});function j($,R){if(!U.isUndefined($)){if(b.indexOf($)!==-1)throw Error("Circular reference detected in "+R.join("."));b.push($),U.forEach($,function(E,k){(!(U.isUndefined(E)||E===null)&&l.call(i,E,U.isString(k)?k.trim():k,R,w))===!0&&j(E,R?R.concat(k):[k])}),b.pop()}}if(!U.isObject(e))throw new TypeError("data must be an object");return j(e),i}function ov(e){const i={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(o){return i[o]})}function rm(e,i){this._pairs=[],e&&mu(e,this,i)}const T4=rm.prototype;T4.append=function(i,r){this._pairs.push([i,r])};T4.toString=function(i){const r=i?function(o){return i.call(this,o,ov)}:ov;return this._pairs.map(function(l){return r(l[0])+"="+r(l[1])},"").join("&")};function rD(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function A4(e,i,r){if(!i)return e;const o=r&&r.encode||rD;U.isFunction(r)&&(r={serialize:r});const l=r&&r.serialize;let d;if(l?d=l(i,r):d=U.isURLSearchParams(i)?i.toString():new rm(i,r).toString(o),d){const f=e.indexOf("#");f!==-1&&(e=e.slice(0,f)),e+=(e.indexOf("?")===-1?"?":"&")+d}return e}class sv{constructor(){this.handlers=[]}use(i,r,o){return this.handlers.push({fulfilled:i,rejected:r,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(i){this.handlers[i]&&(this.handlers[i]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(i){U.forEach(this.handlers,function(o){o!==null&&i(o)})}}const E4={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},oD=typeof URLSearchParams<"u"?URLSearchParams:rm,sD=typeof FormData<"u"?FormData:null,lD=typeof Blob<"u"?Blob:null,cD={isBrowser:!0,classes:{URLSearchParams:oD,FormData:sD,Blob:lD},protocols:["http","https","file","blob","url","data"]},om=typeof window<"u"&&typeof document<"u",sp=typeof navigator=="object"&&navigator||void 0,uD=om&&(!sp||["ReactNative","NativeScript","NS"].indexOf(sp.product)<0),dD=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",fD=om&&window.location.href||"http://localhost",hD=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:om,hasStandardBrowserEnv:uD,hasStandardBrowserWebWorkerEnv:dD,navigator:sp,origin:fD},Symbol.toStringTag,{value:"Module"})),Tt={...hD,...cD};function pD(e,i){return mu(e,new Tt.classes.URLSearchParams,Object.assign({visitor:function(r,o,l,d){return Tt.isNode&&U.isBuffer(r)?(this.append(o,r.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)}},i))}function mD(e){return U.matchAll(/\w+|\[(\w*)]/g,e).map(i=>i[0]==="[]"?"":i[1]||i[0])}function gD(e){const i={},r=Object.keys(e);let o;const l=r.length;let d;for(o=0;o<l;o++)d=r[o],i[d]=e[d];return i}function R4(e){function i(r,o,l,d){let f=r[d++];if(f==="__proto__")return!0;const p=Number.isFinite(+f),m=d>=r.length;return f=!f&&U.isArray(l)?l.length:f,m?(U.hasOwnProp(l,f)?l[f]=[l[f],o]:l[f]=o,!p):((!l[f]||!U.isObject(l[f]))&&(l[f]=[]),i(r,o,l[f],d)&&U.isArray(l[f])&&(l[f]=gD(l[f])),!p)}if(U.isFormData(e)&&U.isFunction(e.entries)){const r={};return U.forEachEntry(e,(o,l)=>{i(mD(o),l,r,0)}),r}return null}function yD(e,i,r){if(U.isString(e))try{return(i||JSON.parse)(e),U.trim(e)}catch(o){if(o.name!=="SyntaxError")throw o}return(r||JSON.stringify)(e)}const vs={transitional:E4,adapter:["xhr","http","fetch"],transformRequest:[function(i,r){const o=r.getContentType()||"",l=o.indexOf("application/json")>-1,d=U.isObject(i);if(d&&U.isHTMLForm(i)&&(i=new FormData(i)),U.isFormData(i))return l?JSON.stringify(R4(i)):i;if(U.isArrayBuffer(i)||U.isBuffer(i)||U.isStream(i)||U.isFile(i)||U.isBlob(i)||U.isReadableStream(i))return i;if(U.isArrayBufferView(i))return i.buffer;if(U.isURLSearchParams(i))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),i.toString();let p;if(d){if(o.indexOf("application/x-www-form-urlencoded")>-1)return pD(i,this.formSerializer).toString();if((p=U.isFileList(i))||o.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return mu(p?{"files[]":i}:i,m&&new m,this.formSerializer)}}return d||l?(r.setContentType("application/json",!1),yD(i)):i}],transformResponse:[function(i){const r=this.transitional||vs.transitional,o=r&&r.forcedJSONParsing,l=this.responseType==="json";if(U.isResponse(i)||U.isReadableStream(i))return i;if(i&&U.isString(i)&&(o&&!this.responseType||l)){const f=!(r&&r.silentJSONParsing)&&l;try{return JSON.parse(i)}catch(p){if(f)throw p.name==="SyntaxError"?ue.from(p,ue.ERR_BAD_RESPONSE,this,null,this.response):p}}return i}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Tt.classes.FormData,Blob:Tt.classes.Blob},validateStatus:function(i){return i>=200&&i<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};U.forEach(["delete","get","head","post","put","patch"],e=>{vs.headers[e]={}});const xD=U.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),vD=e=>{const i={};let r,o,l;return e&&e.split(`
`).forEach(function(f){l=f.indexOf(":"),r=f.substring(0,l).trim().toLowerCase(),o=f.substring(l+1).trim(),!(!r||i[r]&&xD[r])&&(r==="set-cookie"?i[r]?i[r].push(o):i[r]=[o]:i[r]=i[r]?i[r]+", "+o:o)}),i},lv=Symbol("internals");function Po(e){return e&&String(e).trim().toLowerCase()}function Oc(e){return e===!1||e==null?e:U.isArray(e)?e.map(Oc):String(e)}function bD(e){const i=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=r.exec(e);)i[o[1]]=o[2];return i}const SD=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function hh(e,i,r,o,l){if(U.isFunction(o))return o.call(this,i,r);if(l&&(i=r),!!U.isString(i)){if(U.isString(o))return i.indexOf(o)!==-1;if(U.isRegExp(o))return o.test(i)}}function wD(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(i,r,o)=>r.toUpperCase()+o)}function $D(e,i){const r=U.toCamelCase(" "+i);["get","set","has"].forEach(o=>{Object.defineProperty(e,o+r,{value:function(l,d,f){return this[o].call(this,i,l,d,f)},configurable:!0})})}let Lt=class{constructor(i){i&&this.set(i)}set(i,r,o){const l=this;function d(p,m,g){const y=Po(m);if(!y)throw new Error("header name must be a non-empty string");const b=U.findKey(l,y);(!b||l[b]===void 0||g===!0||g===void 0&&l[b]!==!1)&&(l[b||m]=Oc(p))}const f=(p,m)=>U.forEach(p,(g,y)=>d(g,y,m));if(U.isPlainObject(i)||i instanceof this.constructor)f(i,r);else if(U.isString(i)&&(i=i.trim())&&!SD(i))f(vD(i),r);else if(U.isObject(i)&&U.isIterable(i)){let p={},m,g;for(const y of i){if(!U.isArray(y))throw TypeError("Object iterator must return a key-value pair");p[g=y[0]]=(m=p[g])?U.isArray(m)?[...m,y[1]]:[m,y[1]]:y[1]}f(p,r)}else i!=null&&d(r,i,o);return this}get(i,r){if(i=Po(i),i){const o=U.findKey(this,i);if(o){const l=this[o];if(!r)return l;if(r===!0)return bD(l);if(U.isFunction(r))return r.call(this,l,o);if(U.isRegExp(r))return r.exec(l);throw new TypeError("parser must be boolean|regexp|function")}}}has(i,r){if(i=Po(i),i){const o=U.findKey(this,i);return!!(o&&this[o]!==void 0&&(!r||hh(this,this[o],o,r)))}return!1}delete(i,r){const o=this;let l=!1;function d(f){if(f=Po(f),f){const p=U.findKey(o,f);p&&(!r||hh(o,o[p],p,r))&&(delete o[p],l=!0)}}return U.isArray(i)?i.forEach(d):d(i),l}clear(i){const r=Object.keys(this);let o=r.length,l=!1;for(;o--;){const d=r[o];(!i||hh(this,this[d],d,i,!0))&&(delete this[d],l=!0)}return l}normalize(i){const r=this,o={};return U.forEach(this,(l,d)=>{const f=U.findKey(o,d);if(f){r[f]=Oc(l),delete r[d];return}const p=i?wD(d):String(d).trim();p!==d&&delete r[d],r[p]=Oc(l),o[p]=!0}),this}concat(...i){return this.constructor.concat(this,...i)}toJSON(i){const r=Object.create(null);return U.forEach(this,(o,l)=>{o!=null&&o!==!1&&(r[l]=i&&U.isArray(o)?o.join(", "):o)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([i,r])=>i+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(i){return i instanceof this?i:new this(i)}static concat(i,...r){const o=new this(i);return r.forEach(l=>o.set(l)),o}static accessor(i){const o=(this[lv]=this[lv]={accessors:{}}).accessors,l=this.prototype;function d(f){const p=Po(f);o[p]||($D(l,f),o[p]=!0)}return U.isArray(i)?i.forEach(d):d(i),this}};Lt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);U.reduceDescriptors(Lt.prototype,({value:e},i)=>{let r=i[0].toUpperCase()+i.slice(1);return{get:()=>e,set(o){this[r]=o}}});U.freezeMethods(Lt);function ph(e,i){const r=this||vs,o=i||r,l=Lt.from(o.headers);let d=o.data;return U.forEach(e,function(p){d=p.call(r,d,l.normalize(),i?i.status:void 0)}),l.normalize(),d}function C4(e){return!!(e&&e.__CANCEL__)}function Nr(e,i,r){ue.call(this,e??"canceled",ue.ERR_CANCELED,i,r),this.name="CanceledError"}U.inherits(Nr,ue,{__CANCEL__:!0});function z4(e,i,r){const o=r.config.validateStatus;!r.status||!o||o(r.status)?e(r):i(new ue("Request failed with status code "+r.status,[ue.ERR_BAD_REQUEST,ue.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function jD(e){const i=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return i&&i[1]||""}function TD(e,i){e=e||10;const r=new Array(e),o=new Array(e);let l=0,d=0,f;return i=i!==void 0?i:1e3,function(m){const g=Date.now(),y=o[d];f||(f=g),r[l]=m,o[l]=g;let b=d,w=0;for(;b!==l;)w+=r[b++],b=b%e;if(l=(l+1)%e,l===d&&(d=(d+1)%e),g-f<i)return;const j=y&&g-y;return j?Math.round(w*1e3/j):void 0}}function AD(e,i){let r=0,o=1e3/i,l,d;const f=(g,y=Date.now())=>{r=y,l=null,d&&(clearTimeout(d),d=null),e.apply(null,g)};return[(...g)=>{const y=Date.now(),b=y-r;b>=o?f(g,y):(l=g,d||(d=setTimeout(()=>{d=null,f(l)},o-b)))},()=>l&&f(l)]}const Xc=(e,i,r=3)=>{let o=0;const l=TD(50,250);return AD(d=>{const f=d.loaded,p=d.lengthComputable?d.total:void 0,m=f-o,g=l(m),y=f<=p;o=f;const b={loaded:f,total:p,progress:p?f/p:void 0,bytes:m,rate:g||void 0,estimated:g&&p&&y?(p-f)/g:void 0,event:d,lengthComputable:p!=null,[i?"download":"upload"]:!0};e(b)},r)},cv=(e,i)=>{const r=e!=null;return[o=>i[0]({lengthComputable:r,total:e,loaded:o}),i[1]]},uv=e=>(...i)=>U.asap(()=>e(...i)),ED=Tt.hasStandardBrowserEnv?((e,i)=>r=>(r=new URL(r,Tt.origin),e.protocol===r.protocol&&e.host===r.host&&(i||e.port===r.port)))(new URL(Tt.origin),Tt.navigator&&/(msie|trident)/i.test(Tt.navigator.userAgent)):()=>!0,RD=Tt.hasStandardBrowserEnv?{write(e,i,r,o,l,d){const f=[e+"="+encodeURIComponent(i)];U.isNumber(r)&&f.push("expires="+new Date(r).toGMTString()),U.isString(o)&&f.push("path="+o),U.isString(l)&&f.push("domain="+l),d===!0&&f.push("secure"),document.cookie=f.join("; ")},read(e){const i=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function CD(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function zD(e,i){return i?e.replace(/\/?\/$/,"")+"/"+i.replace(/^\/+/,""):e}function D4(e,i,r){let o=!CD(i);return e&&(o||r==!1)?zD(e,i):i}const dv=e=>e instanceof Lt?{...e}:e;function fa(e,i){i=i||{};const r={};function o(g,y,b,w){return U.isPlainObject(g)&&U.isPlainObject(y)?U.merge.call({caseless:w},g,y):U.isPlainObject(y)?U.merge({},y):U.isArray(y)?y.slice():y}function l(g,y,b,w){if(U.isUndefined(y)){if(!U.isUndefined(g))return o(void 0,g,b,w)}else return o(g,y,b,w)}function d(g,y){if(!U.isUndefined(y))return o(void 0,y)}function f(g,y){if(U.isUndefined(y)){if(!U.isUndefined(g))return o(void 0,g)}else return o(void 0,y)}function p(g,y,b){if(b in i)return o(g,y);if(b in e)return o(void 0,g)}const m={url:d,method:d,data:d,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:p,headers:(g,y,b)=>l(dv(g),dv(y),b,!0)};return U.forEach(Object.keys(Object.assign({},e,i)),function(y){const b=m[y]||l,w=b(e[y],i[y],y);U.isUndefined(w)&&b!==p||(r[y]=w)}),r}const M4=e=>{const i=fa({},e);let{data:r,withXSRFToken:o,xsrfHeaderName:l,xsrfCookieName:d,headers:f,auth:p}=i;i.headers=f=Lt.from(f),i.url=A4(D4(i.baseURL,i.url,i.allowAbsoluteUrls),e.params,e.paramsSerializer),p&&f.set("Authorization","Basic "+btoa((p.username||"")+":"+(p.password?unescape(encodeURIComponent(p.password)):"")));let m;if(U.isFormData(r)){if(Tt.hasStandardBrowserEnv||Tt.hasStandardBrowserWebWorkerEnv)f.setContentType(void 0);else if((m=f.getContentType())!==!1){const[g,...y]=m?m.split(";").map(b=>b.trim()).filter(Boolean):[];f.setContentType([g||"multipart/form-data",...y].join("; "))}}if(Tt.hasStandardBrowserEnv&&(o&&U.isFunction(o)&&(o=o(i)),o||o!==!1&&ED(i.url))){const g=l&&d&&RD.read(d);g&&f.set(l,g)}return i},DD=typeof XMLHttpRequest<"u",MD=DD&&function(e){return new Promise(function(r,o){const l=M4(e);let d=l.data;const f=Lt.from(l.headers).normalize();let{responseType:p,onUploadProgress:m,onDownloadProgress:g}=l,y,b,w,j,$;function R(){j&&j(),$&&$(),l.cancelToken&&l.cancelToken.unsubscribe(y),l.signal&&l.signal.removeEventListener("abort",y)}let T=new XMLHttpRequest;T.open(l.method.toUpperCase(),l.url,!0),T.timeout=l.timeout;function E(){if(!T)return;const M=Lt.from("getAllResponseHeaders"in T&&T.getAllResponseHeaders()),_={data:!p||p==="text"||p==="json"?T.responseText:T.response,status:T.status,statusText:T.statusText,headers:M,config:e,request:T};z4(function(K){r(K),R()},function(K){o(K),R()},_),T=null}"onloadend"in T?T.onloadend=E:T.onreadystatechange=function(){!T||T.readyState!==4||T.status===0&&!(T.responseURL&&T.responseURL.indexOf("file:")===0)||setTimeout(E)},T.onabort=function(){T&&(o(new ue("Request aborted",ue.ECONNABORTED,e,T)),T=null)},T.onerror=function(){o(new ue("Network Error",ue.ERR_NETWORK,e,T)),T=null},T.ontimeout=function(){let H=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded";const _=l.transitional||E4;l.timeoutErrorMessage&&(H=l.timeoutErrorMessage),o(new ue(H,_.clarifyTimeoutError?ue.ETIMEDOUT:ue.ECONNABORTED,e,T)),T=null},d===void 0&&f.setContentType(null),"setRequestHeader"in T&&U.forEach(f.toJSON(),function(H,_){T.setRequestHeader(_,H)}),U.isUndefined(l.withCredentials)||(T.withCredentials=!!l.withCredentials),p&&p!=="json"&&(T.responseType=l.responseType),g&&([w,$]=Xc(g,!0),T.addEventListener("progress",w)),m&&T.upload&&([b,j]=Xc(m),T.upload.addEventListener("progress",b),T.upload.addEventListener("loadend",j)),(l.cancelToken||l.signal)&&(y=M=>{T&&(o(!M||M.type?new Nr(null,e,T):M),T.abort(),T=null)},l.cancelToken&&l.cancelToken.subscribe(y),l.signal&&(l.signal.aborted?y():l.signal.addEventListener("abort",y)));const k=jD(l.url);if(k&&Tt.protocols.indexOf(k)===-1){o(new ue("Unsupported protocol "+k+":",ue.ERR_BAD_REQUEST,e));return}T.send(d||null)})},OD=(e,i)=>{const{length:r}=e=e?e.filter(Boolean):[];if(i||r){let o=new AbortController,l;const d=function(g){if(!l){l=!0,p();const y=g instanceof Error?g:this.reason;o.abort(y instanceof ue?y:new Nr(y instanceof Error?y.message:y))}};let f=i&&setTimeout(()=>{f=null,d(new ue(`timeout ${i} of ms exceeded`,ue.ETIMEDOUT))},i);const p=()=>{e&&(f&&clearTimeout(f),f=null,e.forEach(g=>{g.unsubscribe?g.unsubscribe(d):g.removeEventListener("abort",d)}),e=null)};e.forEach(g=>g.addEventListener("abort",d));const{signal:m}=o;return m.unsubscribe=()=>U.asap(p),m}},kD=function*(e,i){let r=e.byteLength;if(r<i){yield e;return}let o=0,l;for(;o<r;)l=o+i,yield e.slice(o,l),o=l},BD=async function*(e,i){for await(const r of ND(e))yield*kD(r,i)},ND=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const i=e.getReader();try{for(;;){const{done:r,value:o}=await i.read();if(r)break;yield o}}finally{await i.cancel()}},fv=(e,i,r,o)=>{const l=BD(e,i);let d=0,f,p=m=>{f||(f=!0,o&&o(m))};return new ReadableStream({async pull(m){try{const{done:g,value:y}=await l.next();if(g){p(),m.close();return}let b=y.byteLength;if(r){let w=d+=b;r(w)}m.enqueue(new Uint8Array(y))}catch(g){throw p(g),g}},cancel(m){return p(m),l.return()}},{highWaterMark:2})},gu=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",O4=gu&&typeof ReadableStream=="function",LD=gu&&(typeof TextEncoder=="function"?(e=>i=>e.encode(i))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),k4=(e,...i)=>{try{return!!e(...i)}catch{return!1}},VD=O4&&k4(()=>{let e=!1;const i=new Request(Tt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!i}),hv=64*1024,lp=O4&&k4(()=>U.isReadableStream(new Response("").body)),Kc={stream:lp&&(e=>e.body)};gu&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(i=>{!Kc[i]&&(Kc[i]=U.isFunction(e[i])?r=>r[i]():(r,o)=>{throw new ue(`Response type '${i}' is not supported`,ue.ERR_NOT_SUPPORT,o)})})})(new Response);const _D=async e=>{if(e==null)return 0;if(U.isBlob(e))return e.size;if(U.isSpecCompliantForm(e))return(await new Request(Tt.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(U.isArrayBufferView(e)||U.isArrayBuffer(e))return e.byteLength;if(U.isURLSearchParams(e)&&(e=e+""),U.isString(e))return(await LD(e)).byteLength},UD=async(e,i)=>{const r=U.toFiniteNumber(e.getContentLength());return r??_D(i)},HD=gu&&(async e=>{let{url:i,method:r,data:o,signal:l,cancelToken:d,timeout:f,onDownloadProgress:p,onUploadProgress:m,responseType:g,headers:y,withCredentials:b="same-origin",fetchOptions:w}=M4(e);g=g?(g+"").toLowerCase():"text";let j=OD([l,d&&d.toAbortSignal()],f),$;const R=j&&j.unsubscribe&&(()=>{j.unsubscribe()});let T;try{if(m&&VD&&r!=="get"&&r!=="head"&&(T=await UD(y,o))!==0){let _=new Request(i,{method:"POST",body:o,duplex:"half"}),X;if(U.isFormData(o)&&(X=_.headers.get("content-type"))&&y.setContentType(X),_.body){const[K,W]=cv(T,Xc(uv(m)));o=fv(_.body,hv,K,W)}}U.isString(b)||(b=b?"include":"omit");const E="credentials"in Request.prototype;$=new Request(i,{...w,signal:j,method:r.toUpperCase(),headers:y.normalize().toJSON(),body:o,duplex:"half",credentials:E?b:void 0});let k=await fetch($);const M=lp&&(g==="stream"||g==="response");if(lp&&(p||M&&R)){const _={};["status","statusText","headers"].forEach(re=>{_[re]=k[re]});const X=U.toFiniteNumber(k.headers.get("content-length")),[K,W]=p&&cv(X,Xc(uv(p),!0))||[];k=new Response(fv(k.body,hv,K,()=>{W&&W(),R&&R()}),_)}g=g||"text";let H=await Kc[U.findKey(Kc,g)||"text"](k,e);return!M&&R&&R(),await new Promise((_,X)=>{z4(_,X,{data:H,headers:Lt.from(k.headers),status:k.status,statusText:k.statusText,config:e,request:$})})}catch(E){throw R&&R(),E&&E.name==="TypeError"&&/Load failed|fetch/i.test(E.message)?Object.assign(new ue("Network Error",ue.ERR_NETWORK,e,$),{cause:E.cause||E}):ue.from(E,E&&E.code,e,$)}}),cp={http:nD,xhr:MD,fetch:HD};U.forEach(cp,(e,i)=>{if(e){try{Object.defineProperty(e,"name",{value:i})}catch{}Object.defineProperty(e,"adapterName",{value:i})}});const pv=e=>`- ${e}`,PD=e=>U.isFunction(e)||e===null||e===!1,B4={getAdapter:e=>{e=U.isArray(e)?e:[e];const{length:i}=e;let r,o;const l={};for(let d=0;d<i;d++){r=e[d];let f;if(o=r,!PD(r)&&(o=cp[(f=String(r)).toLowerCase()],o===void 0))throw new ue(`Unknown adapter '${f}'`);if(o)break;l[f||"#"+d]=o}if(!o){const d=Object.entries(l).map(([p,m])=>`adapter ${p} `+(m===!1?"is not supported by the environment":"is not available in the build"));let f=i?d.length>1?`since :
`+d.map(pv).join(`
`):" "+pv(d[0]):"as no adapter specified";throw new ue("There is no suitable adapter to dispatch the request "+f,"ERR_NOT_SUPPORT")}return o},adapters:cp};function mh(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Nr(null,e)}function mv(e){return mh(e),e.headers=Lt.from(e.headers),e.data=ph.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),B4.getAdapter(e.adapter||vs.adapter)(e).then(function(o){return mh(e),o.data=ph.call(e,e.transformResponse,o),o.headers=Lt.from(o.headers),o},function(o){return C4(o)||(mh(e),o&&o.response&&(o.response.data=ph.call(e,e.transformResponse,o.response),o.response.headers=Lt.from(o.response.headers))),Promise.reject(o)})}const N4="1.9.0",yu={};["object","boolean","number","function","string","symbol"].forEach((e,i)=>{yu[e]=function(o){return typeof o===e||"a"+(i<1?"n ":" ")+e}});const gv={};yu.transitional=function(i,r,o){function l(d,f){return"[Axios v"+N4+"] Transitional option '"+d+"'"+f+(o?". "+o:"")}return(d,f,p)=>{if(i===!1)throw new ue(l(f," has been removed"+(r?" in "+r:"")),ue.ERR_DEPRECATED);return r&&!gv[f]&&(gv[f]=!0,console.warn(l(f," has been deprecated since v"+r+" and will be removed in the near future"))),i?i(d,f,p):!0}};yu.spelling=function(i){return(r,o)=>(console.warn(`${o} is likely a misspelling of ${i}`),!0)};function FD(e,i,r){if(typeof e!="object")throw new ue("options must be an object",ue.ERR_BAD_OPTION_VALUE);const o=Object.keys(e);let l=o.length;for(;l-- >0;){const d=o[l],f=i[d];if(f){const p=e[d],m=p===void 0||f(p,d,e);if(m!==!0)throw new ue("option "+d+" must be "+m,ue.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new ue("Unknown option "+d,ue.ERR_BAD_OPTION)}}const kc={assertOptions:FD,validators:yu},En=kc.validators;let ca=class{constructor(i){this.defaults=i||{},this.interceptors={request:new sv,response:new sv}}async request(i,r){try{return await this._request(i,r)}catch(o){if(o instanceof Error){let l={};Error.captureStackTrace?Error.captureStackTrace(l):l=new Error;const d=l.stack?l.stack.replace(/^.+\n/,""):"";try{o.stack?d&&!String(o.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+d):o.stack=d}catch{}}throw o}}_request(i,r){typeof i=="string"?(r=r||{},r.url=i):r=i||{},r=fa(this.defaults,r);const{transitional:o,paramsSerializer:l,headers:d}=r;o!==void 0&&kc.assertOptions(o,{silentJSONParsing:En.transitional(En.boolean),forcedJSONParsing:En.transitional(En.boolean),clarifyTimeoutError:En.transitional(En.boolean)},!1),l!=null&&(U.isFunction(l)?r.paramsSerializer={serialize:l}:kc.assertOptions(l,{encode:En.function,serialize:En.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),kc.assertOptions(r,{baseUrl:En.spelling("baseURL"),withXsrfToken:En.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let f=d&&U.merge(d.common,d[r.method]);d&&U.forEach(["delete","get","head","post","put","patch","common"],$=>{delete d[$]}),r.headers=Lt.concat(f,d);const p=[];let m=!0;this.interceptors.request.forEach(function(R){typeof R.runWhen=="function"&&R.runWhen(r)===!1||(m=m&&R.synchronous,p.unshift(R.fulfilled,R.rejected))});const g=[];this.interceptors.response.forEach(function(R){g.push(R.fulfilled,R.rejected)});let y,b=0,w;if(!m){const $=[mv.bind(this),void 0];for($.unshift.apply($,p),$.push.apply($,g),w=$.length,y=Promise.resolve(r);b<w;)y=y.then($[b++],$[b++]);return y}w=p.length;let j=r;for(b=0;b<w;){const $=p[b++],R=p[b++];try{j=$(j)}catch(T){R.call(this,T);break}}try{y=mv.call(this,j)}catch($){return Promise.reject($)}for(b=0,w=g.length;b<w;)y=y.then(g[b++],g[b++]);return y}getUri(i){i=fa(this.defaults,i);const r=D4(i.baseURL,i.url,i.allowAbsoluteUrls);return A4(r,i.params,i.paramsSerializer)}};U.forEach(["delete","get","head","options"],function(i){ca.prototype[i]=function(r,o){return this.request(fa(o||{},{method:i,url:r,data:(o||{}).data}))}});U.forEach(["post","put","patch"],function(i){function r(o){return function(d,f,p){return this.request(fa(p||{},{method:i,headers:o?{"Content-Type":"multipart/form-data"}:{},url:d,data:f}))}}ca.prototype[i]=r(),ca.prototype[i+"Form"]=r(!0)});let YD=class L4{constructor(i){if(typeof i!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(d){r=d});const o=this;this.promise.then(l=>{if(!o._listeners)return;let d=o._listeners.length;for(;d-- >0;)o._listeners[d](l);o._listeners=null}),this.promise.then=l=>{let d;const f=new Promise(p=>{o.subscribe(p),d=p}).then(l);return f.cancel=function(){o.unsubscribe(d)},f},i(function(d,f,p){o.reason||(o.reason=new Nr(d,f,p),r(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]}unsubscribe(i){if(!this._listeners)return;const r=this._listeners.indexOf(i);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const i=new AbortController,r=o=>{i.abort(o)};return this.subscribe(r),i.signal.unsubscribe=()=>this.unsubscribe(r),i.signal}static source(){let i;return{token:new L4(function(l){i=l}),cancel:i}}};function qD(e){return function(r){return e.apply(null,r)}}function GD(e){return U.isObject(e)&&e.isAxiosError===!0}const up={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(up).forEach(([e,i])=>{up[i]=e});function V4(e){const i=new ca(e),r=p4(ca.prototype.request,i);return U.extend(r,ca.prototype,i,{allOwnKeys:!0}),U.extend(r,i,null,{allOwnKeys:!0}),r.create=function(l){return V4(fa(e,l))},r}const tt=V4(vs);tt.Axios=ca;tt.CanceledError=Nr;tt.CancelToken=YD;tt.isCancel=C4;tt.VERSION=N4;tt.toFormData=mu;tt.AxiosError=ue;tt.Cancel=tt.CanceledError;tt.all=function(i){return Promise.all(i)};tt.spread=qD;tt.isAxiosError=GD;tt.mergeConfig=fa;tt.AxiosHeaders=Lt;tt.formToJSON=e=>R4(U.isHTMLForm(e)?new FormData(e):e);tt.getAdapter=B4.getAdapter;tt.HttpStatusCode=up;tt.default=tt;const{Axios:$O,AxiosError:jO,CanceledError:TO,isCancel:AO,CancelToken:EO,VERSION:RO,all:CO,Cancel:zO,isAxiosError:DO,spread:MO,toFormData:OO,AxiosHeaders:kO,HttpStatusCode:BO,formToJSON:NO,getAdapter:LO,mergeConfig:VO}=tt,XD=tt.create({baseURL:"/api",headers:{"Content-Type":"application/json"}});XD.interceptors.request.use(e=>{const i=localStorage.getItem("token");return i&&(e.headers.Authorization=`Bearer ${i}`),e},e=>Promise.reject(e));var yv={};const KD=()=>{const e={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6}}},i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},[r,o]=z.useState({name:"",email:"",phone:"",subject:"",message:"",preferredContact:"email"}),[l,d]=z.useState({submitted:!1,success:!1,message:""}),[f,p]=Ue({triggerOnce:!0,threshold:.2}),[m,g]=Ue({triggerOnce:!0,threshold:.2}),[y,b]=Ue({triggerOnce:!0,threshold:.2}),w=R=>{const{name:T,value:E}=R.target;o(k=>({...k,[T]:E}))},j=async R=>{R.preventDefault();try{const T=yv.REACT_APP_API_URL||"http://localhost:5000",E=await fetch(`${T}/api/contact`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),k=await E.json();if(!E.ok)throw new Error(k.message||"Something went wrong");d({submitted:!0,success:!0,message:k.message||"Thank you for your message! We will get back to you soon."}),o({name:"",email:"",phone:"",subject:"",message:"",preferredContact:"email"})}catch(T){console.error("Contact form submission error:",T),d({submitted:!0,success:!1,message:T.message||"Failed to send your message. Please try again later."})}},$=[{question:"How do I get to Vaikunth Yoga Retreat?",answer:"The nearest airport is Dehradun (Jolly Grant Airport), which is approximately 180 km from Auli. From there, you can take a taxi or bus to Joshimath, and then a local taxi to our retreat. We also offer pickup services from Dehradun and Rishikesh for an additional fee. Detailed travel instructions will be provided upon booking."},{question:"What should I bring to the retreat?",answer:"We recommend bringing comfortable yoga clothes, layers for varying temperatures, hiking shoes, a reusable water bottle, personal toiletries, any necessary medications, and a journal. Yoga mats and props are provided, but you're welcome to bring your own if preferred. A detailed packing list will be sent to you after booking."},{question:"Is WiFi available at the retreat?",answer:"Limited WiFi is available in common areas during specific hours. However, we encourage guests to disconnect from technology and connect with nature and themselves during their stay. If you need constant internet access, we recommend bringing a portable hotspot or local SIM card."},{question:"What is your cancellation policy?",answer:"For retreats and programs, we offer a full refund (minus processing fees) for cancellations made 60 days or more before the start date. Cancellations made 30-59 days before receive a 50% refund. Cancellations less than 30 days before the start date are non-refundable. We recommend purchasing travel insurance to cover unexpected circumstances."},{question:"Do you accommodate dietary restrictions?",answer:"Yes, we can accommodate most dietary restrictions including vegetarian, vegan, gluten-free, and dairy-free diets. Please inform us of your dietary needs when booking so our kitchen can prepare accordingly. All meals at the retreat are vegetarian, with vegan options always available."},{question:"Is the retreat suitable for beginners?",answer:"Yes, most of our programs are designed to accommodate practitioners of all levels, from beginners to advanced. Our teachers are experienced in providing modifications and alternatives to suit individual needs. Some specialized programs may have prerequisites, which will be clearly indicated in the program description."}];return c.jsxs("main",{children:[c.jsx(ZD,{backgroundImage:Ze("/assets/images/contact-hero.jpg",1920,800),children:c.jsx(QD,{children:c.jsxs(ie.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:[c.jsx(ID,{children:"Contact Us"}),c.jsx(WD,{children:"We're Here to Help You on Your Journey"})]})})}),c.jsx(he,{children:c.jsxs(ie.div,{ref:f,initial:"hidden",animate:p?"visible":"hidden",variants:e,children:[c.jsx(Ce,{title:"Get in Touch",subtitle:"We'd Love to Hear From You"}),c.jsxs(JD,{children:[c.jsxs(eM,{children:[c.jsx(tM,{children:"Contact Information"}),c.jsx(nM,{children:"Have questions about our programs, accommodations, or anything else? Reach out to us using any of the methods below, and our team will get back to you as soon as possible."}),c.jsxs(iM,{children:[c.jsxs(hc,{children:[c.jsx(pc,{children:c.jsx(H2,{})}),c.jsxs(mc,{children:[c.jsx(gc,{children:"Address"}),c.jsx(yc,{children:"Vaikunth Yoga Retreat, Auli, Joshimath, Uttarakhand, India - 246443"})]})]}),c.jsxs(hc,{children:[c.jsx(pc,{children:c.jsx(P2,{})}),c.jsxs(mc,{children:[c.jsx(gc,{children:"Phone"}),c.jsx(yc,{children:"+91 73006 20149"})]})]}),c.jsxs(hc,{children:[c.jsx(pc,{children:c.jsx(U2,{})}),c.jsxs(mc,{children:[c.jsx(gc,{children:"Email"}),c.jsx(yc,{children:"info@vaikunthyogaretreat.com"})]})]}),c.jsxs(hc,{children:[c.jsx(pc,{children:c.jsx(_2,{})}),c.jsxs(mc,{children:[c.jsx(gc,{children:"WhatsApp"}),c.jsx(yc,{children:"+91 73006 20149"})]})]})]}),c.jsxs(aM,{children:[c.jsx(rM,{children:"Response Time"}),c.jsx(oM,{children:"We typically respond to inquiries within 24-48 hours during business days."})]})]}),c.jsxs(sM,{onSubmit:j,children:[c.jsx(lM,{children:"Send Us a Message"}),l.submitted?c.jsxs(cM,{success:l.success,children:[c.jsx(uM,{children:l.message}),c.jsx(Te,{type:"button",onClick:()=>d({submitted:!1,success:!1,message:""}),children:l.success?"Send Another Message":"Try Again"})]}):c.jsxs(dM,{children:[c.jsx(pr,{children:c.jsxs(mr,{children:[c.jsx(gr,{htmlFor:"name",children:"Your Name *"}),c.jsx(xc,{type:"text",id:"name",name:"name",value:r.name,onChange:w,required:!0})]})}),c.jsx(pr,{children:c.jsxs(mr,{children:[c.jsx(gr,{htmlFor:"email",children:"Email Address *"}),c.jsx(xc,{type:"email",id:"email",name:"email",value:r.email,onChange:w,required:!0})]})}),c.jsx(pr,{children:c.jsxs(mr,{children:[c.jsx(gr,{htmlFor:"phone",children:"Phone Number"}),c.jsx(xc,{type:"tel",id:"phone",name:"phone",value:r.phone,onChange:w})]})}),c.jsx(pr,{children:c.jsxs(mr,{children:[c.jsx(gr,{htmlFor:"subject",children:"Subject *"}),c.jsx(xc,{type:"text",id:"subject",name:"subject",value:r.subject,onChange:w,required:!0})]})}),c.jsx(pr,{children:c.jsxs(mr,{children:[c.jsx(gr,{htmlFor:"message",children:"Your Message *"}),c.jsx(fM,{id:"message",name:"message",value:r.message,onChange:w,rows:"5",required:!0})]})}),c.jsx(pr,{children:c.jsxs(mr,{children:[c.jsx(gr,{children:"Preferred Contact Method"}),c.jsxs(hM,{children:[c.jsxs(gh,{children:[c.jsx(yh,{type:"radio",id:"email-contact",name:"preferredContact",value:"email",checked:r.preferredContact==="email",onChange:w}),c.jsx(xh,{htmlFor:"email-contact",children:"Email"})]}),c.jsxs(gh,{children:[c.jsx(yh,{type:"radio",id:"phone-contact",name:"preferredContact",value:"phone",checked:r.preferredContact==="phone",onChange:w}),c.jsx(xh,{htmlFor:"phone-contact",children:"Phone"})]}),c.jsxs(gh,{children:[c.jsx(yh,{type:"radio",id:"whatsapp-contact",name:"preferredContact",value:"whatsapp",checked:r.preferredContact==="whatsapp",onChange:w}),c.jsx(xh,{htmlFor:"whatsapp-contact",children:"WhatsApp"})]})]})]})}),c.jsx(pM,{children:c.jsx(Te,{type:"submit",variant:"accent",children:"Send Message"})})]})]})]})]})}),c.jsx(he,{variant:"light",id:"faq",children:c.jsxs(ie.div,{ref:m,initial:"hidden",animate:g?"visible":"hidden",variants:i,children:[c.jsx(Ce,{title:"Frequently Asked Questions",subtitle:"Common Inquiries"}),c.jsx(mM,{children:$.map((R,T)=>c.jsx(ie.div,{variants:e,children:c.jsxs(gM,{children:[c.jsx(yM,{children:R.question}),c.jsx(xM,{children:R.answer})]})},T))}),c.jsxs(vM,{children:[c.jsx(bM,{children:"Don't see your question here? Feel free to reach out to us directly."}),c.jsx(Te,{variant:"outline",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"Contact Us"})]})]})}),c.jsx(he,{id:"getting-here",children:c.jsxs(ie.div,{ref:y,initial:"hidden",animate:b?"visible":"hidden",variants:e,children:[c.jsx(Ce,{title:"Getting Here",subtitle:"Your Journey to Vaikunth"}),c.jsxs(SM,{children:[c.jsxs(wM,{children:[c.jsx($M,{children:"Travel Information"}),c.jsxs(jM,{children:[c.jsx("p",{children:"Vaikunth Yoga Retreat is located in Auli, a beautiful hill station in the Chamoli district of Uttarakhand, India. Known for its panoramic views of the Himalayan peaks, Auli is approximately 16 km from Joshimath and about 250 km from Rishikesh."}),c.jsxs(TM,{children:[c.jsxs(vh,{children:[c.jsx(bh,{children:"By Air"}),c.jsx(Sh,{children:"The nearest airport is Jolly Grant Airport in Dehradun, approximately 180 km from Auli. From there, you can take a taxi to Joshimath (7-8 hours), followed by a short drive to our retreat."})]}),c.jsxs(vh,{children:[c.jsx(bh,{children:"By Train"}),c.jsx(Sh,{children:"The nearest railway station is Haridwar, about 220 km from Auli. From Haridwar, you can take a bus or taxi to Joshimath, and then to our retreat."})]}),c.jsxs(vh,{children:[c.jsx(bh,{children:"By Road"}),c.jsx(Sh,{children:"Auli is well-connected by road from major cities like Rishikesh, Haridwar, and Dehradun. The journey offers breathtaking views of the Himalayas and the Ganges."})]})]}),c.jsx("p",{children:"We offer pickup services from Dehradun, Rishikesh, and Haridwar for an additional fee. Please contact us in advance to arrange transportation."})]}),c.jsx(Te,{to:"/booking",variant:"accent",children:"Book Airport Pickup"})]}),c.jsx(AM,{children:c.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27667.81713126514!2d79.55989716551828!3d30.530195726064378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a79c32a24e8fdb%3A0x9a14ababee539f3f!2sAuli%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin",width:"100%",height:"450",style:{border:0,borderRadius:"12px"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Auli Map"})})]})]})}),c.jsx(he,{variant:"primary",children:c.jsx(EM,{children:c.jsxs(RM,{children:[c.jsx(Ce,{title:"Stay Connected",subtitle:"Join Our Community",align:"center",withDivider:!1}),c.jsx(CM,{children:"Subscribe to our newsletter to receive updates on upcoming retreats, special offers, and wellness wisdom from our Himalayan sanctuary."}),c.jsxs(zM,{onSubmit:async R=>{R.preventDefault();const T=R.target.elements[0].value;try{const E=yv.REACT_APP_API_URL||"http://localhost:5000",k=await fetch(`${E}/api/contact/newsletter`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:T})}),M=await k.json();if(!k.ok)throw new Error(M.message||"Something went wrong");alert("Thank you for subscribing to our newsletter!"),R.target.reset()}catch(E){console.error("Newsletter subscription error:",E),alert("Failed to subscribe. Please try again later.")}},children:[c.jsx(DM,{type:"email",placeholder:"Your email address",required:!0}),c.jsx(Te,{type:"submit",variant:"accent",children:"Subscribe"})]})]})})})]})},ZD=v(he)`
  height: 60vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%);
    z-index: 1;
  }
`,QD=v.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 ${({theme:e})=>e.spacing[6]};
`,ID=v.h1`
  font-size: ${({theme:e})=>e.typography.fontSize["6xl"]};
  color: ${({theme:e})=>e.colors.white};
  margin-bottom: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.fontSize["5xl"]};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
  }
`,WD=v.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.accent};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  color: ${({theme:e})=>e.colors.white};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize.xl};
  }
`,JD=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing[10]};

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,eM=v.div`
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.white};
  padding: ${({theme:e})=>e.spacing[8]};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,tM=v.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.white};
`,nM=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,iM=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
`,hc=v.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[4]};
`,pc=v.div`
  font-size: 1.5rem;
  color: ${({theme:e})=>e.colors.accent};
`,mc=v.div`
  display: flex;
  flex-direction: column;
`,gc=v.span`
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  margin-bottom: ${({theme:e})=>e.spacing[1]};
`,yc=v.span`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
`,aM=v.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,rM=v.h4`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.colors.white};
`,oM=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  margin-bottom: 0;
`,sM=v.form`
  background-color: ${({theme:e})=>e.colors.white};
  padding: ${({theme:e})=>e.spacing[8]};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,lM=v.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.primary};
`,cM=v.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]};
  background-color: ${({success:e})=>e?"rgba(42, 93, 69, 0.1)":"rgba(220, 53, 69, 0.1)"};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,uM=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  color: ${({success:e,theme:i})=>e?i.colors.primary:"#dc3545"};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,dM=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,pr=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
  }
`,mr=v.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,gr=v.label`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.colors.darkGray};
`,xc=v.input`
  padding: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.colors.lightGray};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  background-color: white;
  color: ${({theme:e})=>e.colors.charcoal};
  width: 100%;
  -webkit-appearance: none; /* Fix for iOS styling */

  &::placeholder {
    color: ${({theme:e})=>e.colors.gray[500]};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px rgba(42, 93, 69, 0.2);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  }
`,fM=v.textarea`
  padding: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.colors.lightGray};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  resize: vertical;
  background-color: white;
  color: ${({theme:e})=>e.colors.charcoal};
  width: 100%;
  min-height: 120px;
  -webkit-appearance: none; /* Fix for iOS styling */

  &::placeholder {
    color: ${({theme:e})=>e.colors.gray[500]};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px rgba(42, 93, 69, 0.2);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
    min-height: 100px;
  }
`,hM=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,gh=v.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,yh=v.input`
  cursor: pointer;
`,xh=v.label`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  cursor: pointer;
`,pM=v.div`
  margin-top: ${({theme:e})=>e.spacing[6]};
`,mM=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  max-width: 900px;
  margin: 0 auto;
`,gM=v.div`
  background-color: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,yM=v.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.primary};
`,xM=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  color: ${({theme:e})=>e.colors.darkGray};
  margin-bottom: 0;
`,vM=v.div`
  text-align: center;
  margin-top: ${({theme:e})=>e.spacing[10]};
`,bM=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,SM=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing[10]};

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,wM=v.div`
  display: flex;
  flex-direction: column;
`,$M=v.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.primary};
`,jM=v.div`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  margin-bottom: ${({theme:e})=>e.spacing[8]};

  p {
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }
`,TM=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  margin: ${({theme:e})=>e.spacing[6]} 0;
`,vh=v.div`
  background-color: ${({theme:e})=>e.colors.offWhite};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing[4]};
`,bh=v.h4`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.colors.primary};
`,Sh=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  margin-bottom: 0;
`,AM=v.div`
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.lg};
`,EM=v.div`
  max-width: 800px;
  margin: 0 auto;
`,RM=v.div`
  text-align: center;

  h2, p {
    color: ${({theme:e})=>e.colors.white};
  }
`,CM=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  margin-bottom: ${({theme:e})=>e.spacing[8]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
  }
`,zM=v.form`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
  }
`,DM=v.input`
  flex: 1;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: none;
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  background-color: white;
  color: ${({theme:e})=>e.colors.charcoal};
  -webkit-appearance: none; /* Fix for iOS styling */

  &::placeholder {
    color: ${({theme:e})=>e.colors.gray[500]};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.accent};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
    width: 100%;
  }
`,MM=()=>c.jsx("main",{children:c.jsx(OM,{children:c.jsx(ie.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:c.jsxs(kM,{children:[c.jsx(BM,{src:Ze("/assets/images/404.png",400,300),alt:"Page not found"}),c.jsxs(NM,{children:[c.jsx(LM,{children:"404"}),c.jsx(VM,{children:"Page Not Found"}),c.jsx(_M,{children:"The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."}),c.jsxs(UM,{children:[c.jsx(Te,{to:"/",variant:"primary",size:"large",children:"Return Home"}),c.jsx(Te,{to:"/contact",variant:"outline",size:"large",children:"Contact Us"})]}),c.jsxs(HM,{children:[c.jsx(PM,{children:"You might be looking for:"}),c.jsxs(FM,{children:[c.jsx(vc,{children:c.jsx(Ne,{to:"/programs",children:"Our Programs"})}),c.jsx(vc,{children:c.jsx(Ne,{to:"/accommodations",children:"Accommodations"})}),c.jsx(vc,{children:c.jsx(Ne,{to:"/booking",children:"Book a Retreat"})}),c.jsx(vc,{children:c.jsx(Ne,{to:"/blog",children:"Blog & Resources"})})]})]})]})]})})})}),OM=v(he)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background-color: ${({theme:e})=>e.colors.offWhite};
`,kM=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing[8]};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-direction: row;
    text-align: left;
    gap: ${({theme:e})=>e.spacing[10]};
  }
`,BM=v.img`
  max-width: 100%;
  height: auto;
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    max-width: 300px;
    margin-bottom: 0;
  }
`,NM=v.div`
  display: flex;
  flex-direction: column;
`,LM=v.div`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize["6xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.primary};
  line-height: 1;
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,VM=v.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  color: ${({theme:e})=>e.colors.charcoal};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,_M=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  color: ${({theme:e})=>e.colors.darkGray};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,UM=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`,HM=v.div`
  margin-top: ${({theme:e})=>e.spacing[4]};
`,PM=v.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  color: ${({theme:e})=>e.colors.charcoal};
  margin-bottom: ${({theme:e})=>e.spacing[3]};
`,FM=v.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[4]};
  list-style: none;
  padding: 0;
  margin: 0;
`,vc=v.li`
  a {
    color: ${({theme:e})=>e.colors.primary};
    text-decoration: none;
    font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({theme:e})=>e.colors.accent};
      text-decoration: underline;
    }
  }
`,YM=()=>{const[e,i]=z.useState(!1),[r,o]=z.useState(!1),l=ni();return z.useEffect(()=>{const d=()=>{window.scrollY>50?o(!0):o(!1)};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]),z.useEffect(()=>{i(!1)},[l]),c.jsxs(qM,{$scrolled:r,children:[c.jsxs(GM,{children:[c.jsx(XM,{children:c.jsx(Ne,{to:"/",children:c.jsx(KM,{children:c.jsx("img",{src:"/assets/images/logo-symbol.png",alt:"Vaikunth Yoga Retreat"})})})}),c.jsxs(ZM,{children:[c.jsx(Ci,{to:"/",$isActive:l.pathname==="/",$scrolled:r,children:"Home"}),c.jsx(Ci,{to:"/about",$isActive:l.pathname==="/about",$scrolled:r,children:"About"}),c.jsx(Ci,{to:"/programs",$isActive:l.pathname.includes("/programs"),$scrolled:r,children:"Programs"}),c.jsx(Ci,{to:"/accommodations",$isActive:l.pathname==="/accommodations",$scrolled:r,children:"Accommodations"}),c.jsx(Ci,{to:"/testimonials",$isActive:l.pathname==="/testimonials",$scrolled:r,children:"Testimonials"}),c.jsx(Ci,{to:"/blog",$isActive:l.pathname.includes("/blog"),$scrolled:r,children:"Blog"}),c.jsx(Ci,{to:"/contact",$isActive:l.pathname==="/contact",$scrolled:r,children:"Contact"})]}),c.jsxs(QM,{children:[c.jsx(_4,{to:"/booking",children:"Reserve Your Retreat"}),c.jsx(IM,{onClick:()=>i(!e),$scrolled:r,children:e?c.jsx(JA,{}):c.jsx(FA,{})})]})]}),c.jsx(W$,{children:e&&c.jsx(WM,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},children:c.jsxs(JM,{children:[c.jsx(ta,{to:"/",$isActive:l.pathname==="/",$scrolled:!0,children:"Home"}),c.jsx(ta,{to:"/about",$isActive:l.pathname==="/about",$scrolled:!0,children:"About"}),c.jsx(ta,{to:"/programs",$isActive:l.pathname.includes("/programs"),$scrolled:!0,children:"Programs"}),c.jsx(ta,{to:"/accommodations",$isActive:l.pathname==="/accommodations",$scrolled:!0,children:"Accommodations"}),c.jsx(ta,{to:"/testimonials",$isActive:l.pathname==="/testimonials",$scrolled:!0,children:"Testimonials"}),c.jsx(ta,{to:"/blog",$isActive:l.pathname.includes("/blog"),$scrolled:!0,children:"Blog"}),c.jsx(ta,{to:"/contact",$isActive:l.pathname==="/contact",$scrolled:!0,children:"Contact"}),c.jsx(eO,{to:"/booking",children:"Reserve Your Retreat"})]})})})]})},qM=v.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({theme:e})=>e.zIndex[50]};
  transition: all ${({theme:e})=>e.animation.normal} ease;
  background-color: ${({$scrolled:e,theme:i})=>e?"rgba(255, 255, 255, 0.9)":"transparent"};
  backdrop-filter: ${({$scrolled:e})=>e?"blur(8px)":"none"};
  box-shadow: ${({$scrolled:e,theme:i})=>e?i.shadows.md:"none"};
`,GM=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme:e})=>`${e.spacing[4]} ${e.spacing[6]}`};
  max-width: 1400px;
  margin: 0 auto;
`,XM=v.div`
  z-index: ${({theme:e})=>e.zIndex[20]};
`,KM=v.div`
  img {
    width: 120px;
    height: auto;
    filter: drop-shadow(0 0 6px rgba(255, 253, 253, 0.3));
    padding: 4px;
    borderRadius: 50%;
    transition: all ${({theme:e})=>e.animation.normal} ease;
  }
`,ZM=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[8]};

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,Ci=v(Ne)`
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({$isActive:e,theme:i,$scrolled:r})=>e?i.colors.secondary:r?i.colors.charcoal:i.colors.white};
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  text-shadow: ${({$scrolled:e})=>e?"none":"0 1px 3px rgba(0, 0, 0, 0.5)"};
  transition: color ${({theme:e})=>e.animation.normal} ease,
              text-shadow ${({theme:e})=>e.animation.normal} ease;

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${({$isActive:e})=>e?"100%":"0"};
    height: 2px;
    background-color: ${({theme:e})=>e.colors.accent};
    transition: width ${({theme:e})=>e.animation.normal} ease;
  }

  &:hover:after {
    width: 100%;
  }
`,QM=v.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`,_4=v(Ne)`
  background-color: ${({theme:e})=>e.colors.accent};
  color: white;
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  padding: ${({theme:e})=>`${e.spacing[2]} ${e.spacing[4]}`};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  transition: all ${({theme:e})=>e.animation.normal} ease;

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary};
    color: white;
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.shadows.md};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,IM=v.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${({$scrolled:e,theme:i})=>e?i.colors.charcoal:i.colors.white};
  cursor: pointer;
  z-index: ${({theme:e})=>e.zIndex[20]};
  text-shadow: ${({$scrolled:e})=>e?"none":"0 1px 3px rgba(0, 0, 0, 0.5)"};
  transition: color ${({theme:e})=>e.animation.normal} ease,
              text-shadow ${({theme:e})=>e.animation.normal} ease;

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
  }
`,WM=v(ie.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.98);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: ${({theme:e})=>e.zIndex[10]};
  padding: ${({theme:e})=>e.spacing[6]};
`,JM=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[6]};
`,ta=v(Ci)`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
`,eO=v(_4)`
  display: block;
  margin-top: ${({theme:e})=>e.spacing[6]};
  padding: ${({theme:e})=>`${e.spacing[3]} ${e.spacing[6]}`};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
`,tO=()=>{const e=new Date().getFullYear();return c.jsxs(nO,{children:[c.jsxs(iO,{children:[c.jsxs(bc,{children:[c.jsx(aO,{children:c.jsx("img",{src:"/assets/images/logo-no-bg-1.png",alt:"Vaikunth Yoga Retreat"})}),c.jsx(rO,{children:"A sanctuary for spiritual growth and holistic wellness nestled in the serene Himalayan mountains of Auli, India."}),c.jsxs(oO,{children:[c.jsx(Sc,{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:c.jsx(L2,{})}),c.jsx(Sc,{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:c.jsx(VA,{})}),c.jsx(Sc,{href:"https://youtube.com",target:"_blank",rel:"noopener noreferrer",children:c.jsx(HA,{})}),c.jsx(Sc,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:c.jsx(V2,{})})]})]}),c.jsxs(bc,{children:[c.jsx(wh,{children:"Quick Links"}),c.jsxs(xv,{children:[c.jsx(sn,{to:"/about",children:"About Us"}),c.jsx(sn,{to:"/programs",children:"Our Programs"}),c.jsx(sn,{to:"/accommodations",children:"Accommodations"}),c.jsx(sn,{to:"/testimonials",children:"Testimonials"}),c.jsx(sn,{to:"/blog",children:"Blog & Resources"}),c.jsx(sn,{to:"/contact",children:"Contact Us"})]})]}),c.jsxs(bc,{children:[c.jsx(wh,{children:"Programs"}),c.jsxs(xv,{children:[c.jsx(sn,{to:"/programs/yoga-teacher-training",children:"Yoga Teacher Training"}),c.jsx(sn,{to:"/programs/meditation-retreat",children:"Meditation Retreat"}),c.jsx(sn,{to:"/programs/ayurveda-panchakarma",children:"Ayurveda Panchakarma"}),c.jsx(sn,{to:"/programs/spiritual-healing",children:"Spiritual Healing"}),c.jsx(sn,{to:"/programs/himalayan-trek",children:"Himalayan Trek & Yoga"}),c.jsx(sn,{to:"/programs/wellness-detox",children:"Wellness Detox"})]})]}),c.jsxs(bc,{children:[c.jsx(wh,{children:"Contact Us"}),c.jsxs(sO,{children:[c.jsxs($h,{children:[c.jsx(jh,{children:c.jsx(H2,{})}),c.jsx(Th,{children:"Vaikunth Yoga Retreat, Auli, Joshimath, Uttarakhand, India - 246443"})]}),c.jsxs($h,{children:[c.jsx(jh,{children:c.jsx(P2,{})}),c.jsx(Th,{children:"+91 73006 20149"})]}),c.jsxs($h,{children:[c.jsx(jh,{children:c.jsx(U2,{})}),c.jsx(Th,{children:"info@vaikunthyogaretreat.com"})]})]}),c.jsxs(lO,{children:[c.jsx(cO,{type:"email",placeholder:"Your email address"}),c.jsx(uO,{type:"submit",children:"Subscribe"})]})]})]}),c.jsxs(dO,{children:[c.jsxs(fO,{children:["© ",e," Vaikunth Yoga Retreat. All rights reserved."]}),c.jsxs(hO,{children:[c.jsx(Ah,{to:"/privacy-policy",children:"Privacy Policy"}),c.jsx(Ah,{to:"/terms-of-service",children:"Terms of Service"}),c.jsx(Ah,{to:"/sitemap",children:"Sitemap"})]})]})]})},nO=v.footer`
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.white};
  padding-top: ${({theme:e})=>e.spacing[12]};
`,iO=v.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({theme:e})=>e.spacing[8]};
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing[6]};

  @media (max-width: ${({theme:e})=>e.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,bc=v.div`
  display: flex;
  flex-direction: column;
`,aO=v.div`
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  display: flex;
  justify-content: flex-start;

  img {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: auto;
    borderRadius: 50%;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    justify-content: center;

    img {
      width: 100px;
    }
  }
`,rO=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  margin-bottom: ${({theme:e})=>e.spacing[6]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    text-align: center;
  }
`,oO=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    justify-content: center;
  }
`,Sc=v.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({theme:e})=>e.colors.white};
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  transition: all ${({theme:e})=>e.animation.normal} ease;

  &:hover {
    background-color: ${({theme:e})=>e.colors.accent};
    transform: translateY(-3px);
  }
`,wh=v.h4`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.white};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: ${({theme:e})=>e.colors.accent};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    text-align: center;
    margin-top: ${({theme:e})=>e.spacing[6]};

    &:after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`,xv=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    align-items: center;
  }
`,sn=v(Ne)`
  color: ${({theme:e})=>e.colors.lightGray};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  transition: all ${({theme:e})=>e.animation.normal} ease;

  &:hover {
    color: ${({theme:e})=>e.colors.accent};
    transform: translateX(5px);
  }
`,sO=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,$h=v.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[3]};
`,jh=v.div`
  color: ${({theme:e})=>e.colors.accent};
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  margin-top: 3px;
`,Th=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  margin: 0;
`,lO=v.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
`,cO=v.input`
  padding: ${({theme:e})=>`${e.spacing[3]} ${e.spacing[4]}`};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: white;
  color: ${({theme:e})=>e.colors.charcoal};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  width: 100%;
  -webkit-appearance: none; /* Fix for iOS styling */

  &::placeholder {
    color: ${({theme:e})=>e.colors.gray[500]};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.accent};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding: ${({theme:e})=>`${e.spacing[2]} ${e.spacing[3]}`};
  }
`,uO=v.button`
  padding: ${({theme:e})=>`${e.spacing[3]} ${e.spacing[4]}`};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.accent};
  color: ${({theme:e})=>e.colors.white};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  transition: all ${({theme:e})=>e.animation.normal} ease;
  border: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: ${({theme:e})=>e.colors.white};
    color: ${({theme:e})=>e.colors.primary};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding: ${({theme:e})=>`${e.spacing[2]} ${e.spacing[3]}`};
  }
`,dO=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: ${({theme:e})=>`${e.spacing[6]} ${e.spacing[6]}`};
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[4]};
    text-align: center;
  }
`,fO=v.p`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`,hO=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[6]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,Ah=v(Ne)`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: rgba(255, 255, 255, 0.7);

  &:hover {
    color: ${({theme:e})=>e.colors.accent};
  }
`,pO=()=>{const{pathname:e}=ni();return z.useEffect(()=>{window.scrollTo(0,0)},[e]),null},mO=({phoneNumber:e="919876543210",message:i="Hello! I have a question about Vaikunth Yoga Retreat."})=>{const o=`https://wa.me/${e.replace(/\D/g,"")}?text=${encodeURIComponent(i)}`;return c.jsxs(gO,{href:o,target:"_blank",rel:"noopener noreferrer","aria-label":"Chat on WhatsApp",children:[c.jsx(yO,{children:c.jsx(_2,{})}),c.jsx(xO,{children:"WhatsApp us"})]})},gO=v.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  color: #333;
  padding: 8px 16px;
  border-radius: 50px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  text-decoration: none;
  z-index: 1000;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    bottom: 15px;
    right: 15px;
    padding: 6px 12px;
  }
`,yO=v.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #25D366;
  margin-right: 8px;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: 20px;
  }
`,xO=v.span`
  font-size: 14px;
  font-weight: 500;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: 12px;
  }
`;function vO(){return c.jsxs(P$,{theme:X$,children:[c.jsx(G$,{}),c.jsxs(k6,{children:[c.jsx(pO,{}),c.jsx(YM,{}),c.jsxs(u6,{children:[c.jsx(mn,{path:"/",element:c.jsx(Q9,{})}),c.jsx(mn,{path:"/about",element:c.jsx(bE,{})}),c.jsx(mn,{path:"/programs",element:c.jsx(eR,{})}),c.jsx(mn,{path:"/accommodations",element:c.jsx(SR,{})}),c.jsx(mn,{path:"/testimonials",element:c.jsx(mC,{})}),c.jsx(mn,{path:"/booking",element:c.jsx(yC,{})}),c.jsx(mn,{path:"/blog",element:c.jsx(bz,{})}),c.jsx(mn,{path:"/blog/:id",element:c.jsx(Lz,{})}),c.jsx(mn,{path:"/contact",element:c.jsx(KD,{})}),c.jsx(mn,{path:"*",element:c.jsx(MM,{})})]}),c.jsx(tO,{}),c.jsx(mO,{phoneNumber:"919876543210",message:"Hello! I'm interested in Vaikunth Yoga Retreat."})]})]})}xw.createRoot(document.getElementById("root")).render(c.jsx(z.StrictMode,{children:c.jsx(vO,{})}));
