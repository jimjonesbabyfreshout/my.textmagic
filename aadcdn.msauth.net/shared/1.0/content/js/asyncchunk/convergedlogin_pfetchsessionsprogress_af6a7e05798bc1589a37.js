/*!
 * ------------------------------------------- START OF THIRD PARTY NOTICE -----------------------------------------
 * 
 * This file is based on or incorporates material from the projects listed below (Third Party IP). The original copyright notice and the license under which Microsoft received such Third Party IP, are set forth below. Such licenses and notices are provided for informational purposes only. Microsoft licenses the Third Party IP to you under the licensing terms for the Microsoft product. Microsoft reserves all other rights not expressly granted under this agreement, whether by implication, estoppel or otherwise.
 * 
 *   json2.js (2016-05-01)
 *   https://github.com/douglascrockford/JSON-js
 *   License: Public Domain
 * 
 * Provided for Informational Purposes Only
 * 
 * ----------------------------------------------- END OF THIRD PARTY NOTICE ------------------------------------------
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{487:function(e,n,s){var t=s(2),o=s(1),r=s(0),i=s(4),a=window,c=r.CredentialType,u=o.QueryString,l=r.PaginatedState,d=o.Helper,p=r.IfExistsResult,m=r.SessionPullFlags;function S(e){var n=this,s=d.isEdge(),t=e.serverData,o=e.nonInteractiveAuthRequest,r=e.username,a=e.displayName,S=e.unsafe_desktopSsoDomainToUse,f=e.preferredCredential,g=!!e.isPushNotification,h=e.sessionPullType,v=e.isInitialView,k=t.arrSessions||[],w=t.canary,R=t.desktopSsoConfig,T=t.sCtx,y=t.urlLogin,C=t.oGetCredTypeResult,x=t.fShowTilesAfterSessionPull,D=t.sPrefillUsername;function _(){var e;s&&R&&R.isEdgeAllowed?(e={canary:w,client_id:u.extract("client_id"),ctx:T,dsso_edge_username:r,edge_attempted:!0},n.onRedirect(y,e)):D&&D===r&&C?x?n.onSwitchView(l.Tiles,!0):n.onExecuteGctResult():n.onSwitchView(function(){if(!f)return k.length?l.Tiles:l.Username;return function(){var e=l.Password;switch(f){case c.Password:e=l.Password;break;case c.Fido:e=l.Fido;break;case c.RemoteNGC:e=v&&g?l.ConfirmSend:l.RemoteNGC;break;case c.OneTimeCode:case c.PublicIdentifierCode:e=l.ConfirmSend;break;case c.Federation:case c.CloudFederation:e=l.IdpRedirect;break;case c.AccessPass:e=l.AccessPass}return e}()}(),!0)}n.onUpdateUserTiles=i.create(),n.onExecuteGctResult=i.create(),n.onSubmitReady=i.create(),n.onRedirect=i.create(),n.onSwitchView=i.create(),n.onIncrementAsyncTileRequestCount=i.create(),n.onDecrementAsyncTileRequestCount=i.create(),n.isNonInteractiveAuthRequest=o,n.sessionPullType=h,n.username=r,n.displayName=a,n.unsafe_domainName=S,n.saveSharedData=function(e){h&m.Dsso&&(e.desktopSsoExecuted=!0)},n.getState=function(){return null},n.restoreState=function(){},n.cancelLink_onClick=function(){_()},n.fetchSessionsProgress_onHandleDssoSuccess=function(){n.onSubmitReady()},n.fetchSessionsProgress_onRedirect=function(e,s){n.onRedirect(e,s)},n.fetchSessionsProgress_onDesktopSsoFallbackView=function(){_()},n.fetchSessionsProgress_onUpdateUserTiles=function(e,s){C&&C.IfExistsResult===p.ExistsBothIDPs?n.onSwitchView(l.IdpDisambiguation,!0):D&&C?x?n.onSwitchView(l.Tiles,!0):n.onExecuteGctResult():k.length>0?n.onSwitchView(l.Tiles,!0):n.onSwitchView(l.Username,!0),n.onUpdateUserTiles(e,s)},n.fetchSessionsProgress_onExecuteGctResult=function(){v?k.length>0?n.onSwitchView(l.Tiles,!0):n.onSwitchView(l.Username,!0):n.onExecuteGctResult()},n.fetchSessionsProgress_onIncrementAsyncTileRequestCount=function(){n.onIncrementAsyncTileRequestCount()},n.fetchSessionsProgress_onDecrementAsyncTileRequestCount=function(){n.onDecrementAsyncTileRequestCount()}}t.components.register("fetch-sessions-progress-view",{viewModel:S,template:s(684),synchronous:!a.ServerData.iMaxStackForKnockoutAsyncComponents||o.Helper.isStackSizeGreaterThan(a.ServerData.iMaxStackForKnockoutAsyncComponents),enableExtensions:!0}),e.exports=S},684:function(e,n,s){e.exports="\x3c!-- "+(s(685),s(15),' --\x3e\n\n<div id="loginHeader" class="row" role="heading" aria-level="1" data-bind="text: str[\'DSSO_STR_AuthenticatingMessage\'], externalCss: { \'title\': true }"></div>\n\n<div class="row progress-container">\n    <div class="progress" role="progressbar" data-bind="component: \'marching-ants-control\', ariaLabel: str[\'WF_STR_ProgressText\']"></div>\n</div>\n\n\x3c!-- ko if: (sessionPullType & ')+s(0).SessionPullFlags.Dsso+') != 0 --\x3e\n<a id="desktopSsoCancel" href="#" data-bind="\n    text: str[\'CT_HRD_STR_Redirect_Cancel\'],\n    ariaDescribedBy: \'loginHeader\',\n    click: cancelLink_onClick,\n    hasFocus: true"></a>\n\x3c!-- /ko --\x3e\n\n<div data-bind="component: { name: \'fetch-sessions-control\',\n    params: {\n        serverData: svr,\n        sessionPullType: sessionPullType,\n        unsafe_desktopSsoDomainToUse: unsafe_domainName,\n        username: username,\n        displayName: displayName },\n    event: {\n        updateUserTiles: fetchSessionsProgress_onUpdateUserTiles,\n        executeGctResult: fetchSessionsProgress_onExecuteGctResult,\n        handleDssoSuccess: fetchSessionsProgress_onHandleDssoSuccess,\n        desktopSsoFallbackView: fetchSessionsProgress_onDesktopSsoFallbackView,\n        incrementAsyncTileRequestCount: fetchSessionsProgress_onIncrementAsyncTileRequestCount,\n        decrementAsyncTileRequestCount: fetchSessionsProgress_onDecrementAsyncTileRequestCount,\n        redirect: fetchSessionsProgress_onRedirect } }">\n</div>\n'},685:function(e,n,s){var t=s(2),o=s(1),r=s(4),i=s(12),a=s(3),c=s(5),u=s(48),l=s(9),d=s(0),p=s(7),m=window,S=o.QueryString,f=a.Object,g=a.DateTime,h=p.SessionIdp,v=a.String,k=o.Helper,w=d.PaginatedState;function R(e){var n=this,s=e.serverData,o=e.nonInteractiveAuthRequest,a=e.username,d=e.displayName,p=e.unsafe_desktopSsoDomainToUse,R=e.sessionPullType,T=null,y=0,C=0,x=[],D=[],_=null,F=null,P=null,b=null,I=null,E=null,A=!1,U=null,M="",q=null,N=!1,L=s.canary,H=s.urlGoToAADError,O=s.urlLogin,G=s.urlReportStaticMeControlTelemetry,V=s.oUrlOtherIdpPostParams,j=s.sPrefillUsername,B=s.sHashedLoginHint,W=s.fSsoFeasible,K=s.fProvideV2SsoImprovements,J=s.urlMsaStaticMeControl,Q=s.sTransientDataMsaMeControl,z=s.sPersistentDataMsaMeControl,X=s.arrSessions,Y=s.desktopSsoConfig,Z=!!Y,$=s.sCtx,ee=s.sFT,ne=s.urlAppError,se=s.oAppRedirectErrorPostParams,te=s.sPOST_PaginatedLoginState,oe=s.fEnableDssoFix,re=s.fFetchSessionsSkipDsso,ie=s.fFetchSessionsPrepareDssoFirst;function ae(){return!!_&&(!_.isSignedIn&&!_.isWindowsSso)}function ce(e){var s=J;if(e&&v.doOriginsMatch(s,e.origin)&&e.data){var o=null,r=null,i=null;try{r=(o=JSON.parse(e.data)).userList,i=o.tilesState}catch(a){return}r&&"msaMeCached"===o.messageType&&(!function(e,n){if(e=e||[],n=n||[],x=t.utils.arrayFilter(n,(function(e){return(e.isSignedIn||e.isWindowsSso)&&!e.isMeControlSession&&e.id})),y=x.length,D=t.utils.arrayFilter(e,(function(e){return e.isSignedIn||e.isWindowsSso})),C=D.length,B&&j){var s=t.utils.arrayFirst(n,(function(e){return e.matchesLoginHint}));s&&(_=s,(s.isSignedIn||s.isWindowsSso)&&!s.isMeControlSession&&s.id&&(F=s));var o=t.utils.arrayFirst(e,(function(e){return!(!e.signInName||e.signInName.toLowerCase()!==j.toLowerCase())||!!e.otherHashedAliases&&!!t.utils.arrayFirst(e.otherHashedAliases,(function(e){return B===e}))}));o&&(P=o)}}(r,X),b.resolve({userList:r,tilesState:i}),n.onDecrementAsyncTileRequestCount())}}function ue(e,s){!function(e){if(G){var n=g.getCurrentTime()-T;(new i).Beacon({url:G},{loadTime:n,msaUserCount:e.length})}}(e=e||[]);var t=function(e){return e?[["jsh",encodeURIComponent(e.transientState||"")],["jshp",encodeURIComponent(e.persistentState||"")],["jshs",encodeURIComponent(e.hasStorageAccess||-1)]]:[]}(s);if(W){var r=function(){if(j){if(F&&P)return null;if(F)return F;if(P)return P;if(_)return null}else{if(1===C&&0===y)return D[0];if(1===y&&0===C)return x[0];y+C>1&&o&&n.onRedirect(ne,se)}return!1}();if(r)return void function(e,n){if(e.idp===h.Aad)ge(S.appendOrReplace(O,"sessionid",e.id));else{V&&f.clone(V);var s=S.add(H,n);clearTimeout(null),ge(s)}}(r,t);Z?ae()&&n.onExecuteGctResult():o?n.onRedirect(ne,se):ae()&&n.onExecuteGctResult()}re&&Z&&n.desktopSsoRunning()||Z&&(N=!0,n.desktopSsoRunning())||n.onUpdateUserTiles(u.parseMeControlSessions(e),t)}function le(){k.removeEventListener(m,"message",ce),n.onDecrementAsyncTileRequestCount(),re&&A||!re&&oe&&I?I.then(de,pe):n.onUpdateUserTiles([],[])}function de(e){if(e){var s={canary:L,client_id:S.extract("client_id"),ctx:$};Z&&Y.isFlowTokenPassedInEdge&&(s.flowtoken=ee),o||(s.dsso_edge_username=a),n.onRedirect(S.appendCurrentQueryParameterIfNotExist(U),s)}else n.onHandleDssoSuccess()}function pe(){A=!1,o?n.onHandleDssoFailure():(n.desktopSsoRunning(!1),n.onDesktopSsoFallbackView())}function me(e){return e&&M.toLocaleUpperCase()!==e.toLocaleUpperCase()}function Se(){K&&(n.onIncrementAsyncTileRequestCount(),k.addEventListener(m,"message",ce),l.throwUnhandledExceptionOnRejection(new c((function(e,s){T=g.getCurrentTime(),n.callMsaStaticMeControl(!0),K&&setTimeout(s,1e4),b={resolve:e}})).then((function(e){ue(e.userList,e.tilesState),(re&&A||!re&&N&&I)&&I.then(de,pe)}),le)))}function fe(){Z&&(U=Y.edgeRedirectUri,Y.startDesktopSsoOnPageLoad&&(p=Y.hintedDomainName),I=new c((function(e,n){E={resolve:e,reject:n}})),K||I.then(de,pe),!(!p&&!te)&&(A=me(p),setTimeout((function(){var e;q=setTimeout(pe,Y.progressAnimationTimeout),me(e=p)?(n.desktopSsoRunning()&&n.desktopSsoRunning(!1),M=e,n.desktopSsoRunning(!0)):(n.desktopSsoRunning(!1),n.onDesktopSsoFallbackView())}),0)))}function ge(e){document.location.assign(e)}n.onUpdateUserTiles=r.create(),n.onExecuteGctResult=r.create(),n.onHandleDssoSuccess=r.create(),n.onHandleDssoFailure=r.create(),n.onDesktopSsoFallbackView=r.create(),n.onRedirect=r.create(),n.onIncrementAsyncTileRequestCount=r.create(),n.onDecrementAsyncTileRequestCount=r.create(),n.desktopSsoRunning=t.observable(!1),n.callMsaStaticMeControl=t.observable(!1),n.postRedirectUrl=t.observable(),n.isNonInteractiveAuthRequest=o,n.username=a,n.displayName=d,n.unsafe_domainName=p,n.fetchSessionsProgressPaginatedState=w.FetchSessionsProgress,n.sessionPullType=R,n.iFrame_onload=function(e){if(e){var n={messageType:"startStaticMe",sessionState:{transientState:Q,persistentState:z}},s=v.extractOriginFromUrl(J);e.contentWindow.postMessage(JSON.stringify(n),s)}},n.dispose=function(){clearTimeout(q)},n.desktopSsoRequestControl_onSuccess=function(){I&&E.resolve()},n.desktopSsoRequestControl_onFailure=function(){I&&E.reject()},n.desktopSsoRequestControl_onEdgeRedirect=function(){I&&E.resolve(!0)},ie?(fe(),Se()):(Se(),fe())}t.components.register("fetch-sessions-control",{viewModel:R,template:s(686),synchronous:!m.ServerData.iMaxStackForKnockoutAsyncComponents||o.Helper.isStackSizeGreaterThan(m.ServerData.iMaxStackForKnockoutAsyncComponents),enableExtensions:!0}),e.exports=R},686:function(e,n,s){e.exports="\x3c!-- "+(s(687),s(13)," --\x3e\n\n\x3c!-- ko if: (sessionPullType & ")+s(0).SessionPullFlags.Msa+') != 0 && callMsaStaticMeControl() --\x3e\n<div data-bind="injectIframe: { url: svr.urlMsaStaticMeControl, onload: iFrame_onload }"></div>\n\x3c!-- /ko --\x3e\n\n\x3c!-- ko if: svr.desktopSsoConfig && !isNonInteractiveAuthRequest --\x3e\n<div class="row">\n    <div data-bind="component: { name: \'footer-buttons-field\',\n        params: {\n            serverData: svr,\n            isPrimaryButtonVisible: false,\n            isSecondaryButtonVisible: false } }">\n    </div>\n</div>\n\x3c!-- /ko --\x3e\n\n\x3c!-- ko if: (sessionPullType & '+s(0).SessionPullFlags.Dsso+") != 0 && desktopSsoRunning() --\x3e\n<span data-bind=\"component: { name: 'desktop-sso-request-control',\n    params: {\n        serverData: svr,\n        username: username,\n        displayName: displayName,\n        unsafe_domainName: unsafe_domainName },\n    event: {\n        desktopSsoSuccess: desktopSsoRequestControl_onSuccess,\n        desktopSsoFailure: desktopSsoRequestControl_onFailure,\n        desktopSsoEdgeRedirect: desktopSsoRequestControl_onEdgeRedirect } }\">\n</span>\n\x3c!-- /ko --\x3e"},687:function(e,n,s){var t=s(2),o=s(10),r=s(1),i=s(4),a=s(3),c=s(12),u=s(0),l=s(8),d=window,p=r.Helper,m=r.QueryString,S=a.String;function f(e){var n,s=this,r=e.serverData,a=e.unsafe_domainName,f=e.username,g=e.displayName,h=r.urlDssoStatus,v=r.browser,k=r.desktopSsoConfig,w=k.iwaEndpointUrlFormat,R=k.iwaSsoProbeUrlFormat,T=k.iwaIFrameUrlFormat,y=k.iwaRequestTimeoutInMs,C=k.hintedDomainName,x=k.isSafariAllowed,D=k.isIEAllowedForSsoProbe,_=k.isEdgeAnaheimAllowed,F=null,P=0,b=[],I=!1;function E(e){var n={resultCode:e,ssoDelay:P,log:0===e?"":b.join("\n")};(new c).Json({url:h},n)}function A(){var e=new Image;e.onload=U,e.onerror=function(){b.push("Probe image error event fired"),O(2)};var n=R||m.appendOrReplace(w,"probe","1");n=m.appendOrReplace(n,"_",(new Date).getTime()),e.src=n}function U(){F=(new Date).getTime();new c({withCredentials:!0,breakCache:!0,responseType:"text"}).Get({url:w,eventId:l.EventIds.Api_GetIwaSsoToken},u.ContentType.FormUrlEncoded,q,N,L,y)}function M(e){var n,s=S.extractOriginFromUrl(T||w);if(S.extractOriginFromUrl(e.origin)!==s)return b.push("Event origin not valid"),void E(5);try{n=o.parse(e.data)}catch(t){return b.push("Invalid response: "+t),void O(6)}"dssoResult"===n.messageType?(P=n.ssoDelay||0,100===n.resultCode?H(n.message):(b.push("FrameListener: Frame returned code "+n.resultCode+" with message "+n.message),O(n.resultCode))):b.push("FrameListener: messageType was not of the expected value.")}function q(e,n){P=(new Date).getTime()-F,H(n)}function N(){P=(new Date).getTime()-F,b.push("Direct SSO attempt failed"),O(3)}function L(){P=(new Date).getTime()-F,b.push("Direct SSO timed out"),O(3)}function H(e){if(E(0),s.dssoToken(e),!I){s.onDesktopSsoSuccess();var n=document.getElementById("idSIButton9");n&&n.click()}}function O(e){E(e),I||s.onDesktopSsoFailure()}s.onDesktopSsoSuccess=i.create(),s.onDesktopSsoFailure=i.create(),s.onDesktopSsoEdgeRedirect=i.create(),s.useIFrameRequest=t.observable(!1),s.dssoToken=t.observable(),s.unsafe_username=null,s.unsafe_displayName=null,s.iFrameSrc=null,s.dispose=function(){p.removeEventListener(d,"message",M),I=!0},s.iFrame_onload=function(e){if(e){var n=S.extractOriginFromUrl(T||w),s=y+"|"+w;e.contentWindow.postMessage(s,n)}},n=encodeURIComponent(a||C),w=S.format(w,n),R=S.format(R,n),T=S.format(T,n),s.unsafe_username=p.htmlUnescape(f),s.unsafe_displayName=p.htmlUnescape(g),v.Chrome||v.PhantomJS||D&&v.IE&&null!==v.b&&v.b.major>=11||_&&v.Edge&&v.RE_WebKit?A():v.Edge&&k&&k.isEdgeAllowed?"1"===m.extract("is_redirected")?A():s.onDesktopSsoEdgeRedirect():(v._WinPh?(b.push("Detected Browser: WindowsPhone"),0):v.IE&&null!==v.b&&v.b.major>=10?(b.push("Detected Browser: IE10+"),1):v.Firefox?(b.push("Detected Browser: Firefox"),1):v.Safari&&(b.push("Detected Browser: Safari"),x))?(s.iFrameSrc=T||m.appendOrReplace(w,"iframe","1"),s.useIFrameRequest(!0),p.addEventListener(d,"message",M)):(b.push("User agent is not supported"),O(1))}t.components.register("desktop-sso-request-control",{viewModel:f,template:s(688),synchronous:!d.ServerData.iMaxStackForKnockoutAsyncComponents||r.Helper.isStackSizeGreaterThan(d.ServerData.iMaxStackForKnockoutAsyncComponents),enableExtensions:!0}),e.exports=f},688:function(e,n,s){e.exports='<input type="hidden" name="login" data-bind="value: unsafe_username" />\n<input type="hidden" name="loginfmt" data-bind="value: unsafe_displayName" />\n<input type="hidden" name="type" value="'+s(0).PostType.Password+'" />\n<input type="hidden" name="dssoToken" data-bind="value: dssoToken"/>\n\n\x3c!-- ko if: useIFrameRequest --\x3e\n<div data-bind="injectIframe: { url: iFrameSrc, onload: iFrame_onload }"></div>\n\x3c!-- /ko --\x3e'}}]),window.__convergedlogin_pfetchsessionsprogress_af6a7e05798bc1589a37=!0;
//# sourceMappingURL=../af6a7e05798bc1589a37.map