window['google-analyticsDeps'] = ["/integrations/vendor/commons.c42222c4cb2f8913500f.js"];window['google-analyticsLoader'] = function() { return window["google-analyticsIntegration"]=function(e){function t(t){for(var n,a,c=t[0],s=t[1],d=t[2],u=0,m=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&m.push(r[a][0]),r[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(p&&p(t);m.length;)m.shift()();return i.push.apply(i,d||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,c=1;c<o.length;c++){var s=o[c];0!==r[s]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={57:0},i=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window.webpackJsonp_name_Integration=window.webpackJsonp_name_Integration||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=s;return i.push(["8PwN",0]),o()}({"8PwN":function(e,t,o){"use strict";var n,r=o("NGGi").Track,i=o("mTd2"),a=o("WiAo"),c=o("IWyO"),s=o("hjHq"),d=o("qMUi"),p=o("vP/j").length,u=o("5mDK")("_gaq"),m=o("bmjW"),l=o("l9VJ"),h=o("6dBs");e.exports=t=function(e){e.addIntegration(g),n=e.user()};var g=t.Integration=s("Google Analytics").readyOnLoad().global("ga").global("gaplugins").global("_gaq").global("GoogleAnalyticsObject").option("anonymizeIp",!1).option("useGoogleAmpClientId",!1).option("classic",!1).option("contentGroupings",{}).option("dimensions",{}).option("domain","auto").option("doubleClick",!1).option("enhancedEcommerce",!1).option("enhancedLinkAttribution",!1).option("ignoredReferrers",null).option("includeSearch",!1).option("setAllMappedProps",!0).option("metrics",{}).option("nonInteraction",!1).option("sendUserId",!1).option("siteSpeedSampleRate",1).option("sampleRate",100).option("trackCategorizedPages",!0).option("trackNamedPages",!0).option("trackingId","").option("optimize","").option("nameTracker",!1).option("resetCustomDimensionsOnPage",[]).tag("library",'<script src="//www.google-analytics.com/analytics.js">').tag("double click",'<script src="//stats.g.doubleclick.net/dc.js">').tag("http",'<script src="http://www.google-analytics.com/ga.js">').tag("https",'<script src="https://ssl.google-analytics.com/ga.js">');function w(e,t){if(e){var o=e.path;return t.includeSearch&&e.search&&(o+=e.search),o}}function f(e,t,o){var n={},r=v(e,t);if(p(r)){if(!t.setAllMappedProps)return c(r,(function(e,t){n[e]=t})),n;window.ga(o+"set",r)}}function k(e){return!e||e<0?0:Math.round(e)}function y(e,t){var o=e.properties().position;return void 0!==o&&!Number.isNaN(Number(o))&&Number(o)>-1?o:t.map((function(e){return e.product_id})).indexOf(e.productId())+1}function v(e,t){var o=t.dimensions,n=t.metrics,r=t.contentGroupings,i={};return c([n,o,r],(function(t){c(t,(function(t,o){var n=a(e,t)||e[t];d.bool(n)&&(n=n.toString()),(n||0===n)&&(i[o]=n)}))})),i}function _(e,t,o){var n=e.properties(),r={id:e.productId()||e.id()||e.sku(),name:e.name(),category:e.category(),quantity:e.quantity(),price:e.price(),brand:n.brand,variant:n.variant,currency:e.currency()};null!=n.position&&(r.position=Math.round(n.position));var i=e.proxy("properties.coupon");i&&(r.coupon=i),r=h(r,v(n,o)),window.ga(t+"ec:addProduct",r)}function E(e,t,o,n,r){_(e,n,r),window.ga(n+"ec:setAction",t,o||{})}g.on("construct",(function(e){e.options.classic?(e.initialize=e.initializeClassic,e.loaded=e.loadedClassic,e.page=e.pageClassic,e.track=e.trackClassic,e.orderCompleted=e.completedOrderClassic):e.options.enhancedEcommerce&&(e.productViewed=e.productViewedEnhanced,e.productClicked=e.productClickedEnhanced,e.productAdded=e.productAddedEnhanced,e.productRemoved=e.productRemovedEnhanced,e.checkoutStarted=e.checkoutStartedEnhanced,e.checkoutStepViewed=e.checkoutStepViewedEnhanced,e.checkoutStepCompleted=e.checkoutStepCompletedEnhanced,e.orderUpdated=e.orderUpdatedEnhanced,e.orderCompleted=e.orderCompletedEnhanced,e.orderRefunded=e.orderRefundedEnhanced,e.promotionViewed=e.promotionViewedEnhanced,e.promotionClicked=e.promotionClickedEnhanced,e.productListViewed=e.productListViewedEnhanced,e.productListFiltered=e.productListFilteredEnhanced)})),g.prototype.initialize=function(){this.pageCalled=!1;var e=this.options;window.GoogleAnalyticsObject="ga",window.ga=window.ga||function(){window.ga.q=window.ga.q||[],window.ga.q.push(arguments)},window.ga.l=(new Date).getTime(),"localhost"===window.location.hostname&&(e.domain="none");var t={cookieDomain:e.domain||g.prototype.defaults.domain,siteSpeedSampleRate:e.siteSpeedSampleRate,sampleRate:e.sampleRate,allowLinker:!0,useAmpClientId:e.useGoogleAmpClientId};e.nameTracker?(t.name="segmentGATracker",this._trackerName="segmentGATracker."):this._trackerName="",window.ga("create",e.trackingId,t),e.optimize&&window.ga(this._trackerName+"require",e.optimize),e.doubleClick&&window.ga(this._trackerName+"require","displayfeatures"),e.enhancedLinkAttribution&&window.ga(this._trackerName+"require","linkid","linkid.js"),e.sendUserId&&n.id()&&window.ga(this._trackerName+"set","userId",n.id()),e.anonymizeIp&&window.ga(this._trackerName+"set","anonymizeIp",!0);var o=n.traits();n.id()&&(o.id=n.id());var r=v(o,e);p(r)&&window.ga(this._trackerName+"set",r),this.load("library",this.ready)},g.prototype.loaded=function(){return!!window.gaplugins},g.prototype.page=function(e){var t,o=e.category(),n=e.properties(),r=e.fullName(),i=this.options,a=e.proxy("context.campaign")||{},c={},s=w(n,this.options),d=r||n.title,p=e.referrer()||"";this._category=o,c.page=s,c.title=d,c.location=n.url,a.name&&(c.campaignName=a.name),a.source&&(c.campaignSource=a.source),a.medium&&(c.campaignMedium=a.medium),a.content&&(c.campaignContent=a.content),a.term&&(c.campaignKeyword=a.term);for(var u={page:s,title:d},m={},l=0;l<i.resetCustomDimensionsOnPage.length;l++){var g=i.resetCustomDimensionsOnPage[l];i.dimensions[g]&&(m[i.dimensions[g]]=null)}window.ga(this._trackerName+"set",m),c=h(c,f(n,i,this._trackerName)),p!==document.referrer&&(u.referrer=p),window.ga(this._trackerName+"set",u),this.pageCalled&&delete c.location,window.ga(this._trackerName+"send","pageview",c),o&&this.options.trackCategorizedPages&&(t=e.track(o),this.track(t,{nonInteraction:1})),r&&this.options.trackNamedPages&&(t=e.track(r),this.track(t,{nonInteraction:1})),this.pageCalled=!0},g.prototype.identify=function(e){var t=this.options;t.sendUserId&&e.userId()&&window.ga(this._trackerName+"set","userId",e.userId());var o=v(e.traits(),t);p(o)&&window.ga(this._trackerName+"set",o)},g.prototype.track=function(e,t){var o=e.options(this.name),n=this.options,r=i(t||{},o);r=i(r,n);var a=e.properties(),c=e.proxy("context.campaign")||{},s={eventAction:e.event(),eventCategory:e.category()||this._category||"All",eventLabel:a.label,eventValue:k(a.value||e.revenue()),nonInteraction:void 0!==a.nonInteraction?!!a.nonInteraction:!!r.nonInteraction};c.name&&(s.campaignName=c.name),c.source&&(s.campaignSource=c.source),c.medium&&(s.campaignMedium=c.medium),c.content&&(s.campaignContent=c.content),c.term&&(s.campaignKeyword=c.term),s=h(s,f(a,n,this._trackerName)),window.ga(this._trackerName+"send","event",s)},g.prototype.orderCompleted=function(e){var t=e.total()||e.revenue()||0,o=e.orderId(),n=e.products(),r=e.properties(),i=this;o&&(this.ecommerce||(window.ga(this._trackerName+"require","ecommerce"),this.ecommerce=!0),window.ga(this._trackerName+"ecommerce:addTransaction",{affiliation:r.affiliation,shipping:e.shipping(),revenue:t,tax:e.tax(),id:o,currency:e.currency()}),c(n,(function(t){var n=I(e,t);window.ga(i._trackerName+"ecommerce:addItem",{category:n.category(),quantity:n.quantity(),price:n.price(),name:n.name(),sku:n.sku(),id:o,currency:n.currency()})})),window.ga(this._trackerName+"ecommerce:send"))},g.prototype.initializeClassic=function(){var e=this.options,t=e.anonymizeIp,o=e.domain,n=e.enhancedLinkAttribution,r=e.ignoredReferrers,i=e.siteSpeedSampleRate;if(window._gaq=window._gaq||[],u("_setAccount",e.trackingId),u("_setAllowLinker",!0),t&&u("_gat._anonymizeIp"),o&&u("_setDomainName",o),i&&u("_setSiteSpeedSampleRate",i),n){var a="https:"===document.location.protocol?"https:":"http:";u("_require","inpage_linkid",a+"//www.google-analytics.com/plugins/ga/inpage_linkid.js")}if(r&&(d.array(r)||(r=[r]),c(r,(function(e){u("_addIgnoredRef",e)}))),this.options.doubleClick)this.load("double click",this.ready);else{var s=l()?"https":"http";this.load(s,this.ready)}},g.prototype.loadedClassic=function(){return!(!window._gaq||window._gaq.push===Array.prototype.push)},g.prototype.pageClassic=function(e){var t,o=e.category(),n=e.properties(),r=e.fullName();u("_trackPageview",w(n,this.options)),o&&this.options.trackCategorizedPages&&(t=e.track(o),this.track(t,{nonInteraction:1})),r&&this.options.trackNamedPages&&(t=e.track(r),this.track(t,{nonInteraction:1}))},g.prototype.trackClassic=function(e,t){var o=t||e.options(this.name),n=e.properties(),r=e.revenue(),i=e.event(),a=this._category||e.category()||"All",c=n.label,s=k(r||n.value),d=!(!n.nonInteraction&&!o.nonInteraction);u("_trackEvent",a,i,c,s,d)},g.prototype.completedOrderClassic=function(e){var t=e.total()||e.revenue()||0,o=e.orderId(),n=e.products()||[],i=e.properties(),a=e.currency();o&&(u("_addTrans",o,i.affiliation,t,e.tax(),e.shipping(),e.city(),e.state(),e.country()),c(n,(function(e){var t=new r({properties:e});u("_addItem",o,t.sku(),t.name(),t.category(),t.price(),t.quantity())})),u("_set","currencyCode",a),u("_trackTrans"))},g.prototype.loadEnhancedEcommerce=function(e){this.enhancedEcommerceLoaded||(window.ga(this._trackerName+"require","ec"),this.enhancedEcommerceLoaded=!0),window.ga(this._trackerName+"set","&cu",e.currency())},g.prototype.pushEnhancedEcommerce=function(e,t,o){var n=m([this._trackerName+"send","event",e.category()||"EnhancedEcommerce",e.event()||"Action not defined",e.properties().label,h({nonInteraction:1},f(e.properties(),t,o))]),r=e.event().toLowerCase();["product clicked","product added","product viewed","product removed"].includes(r)&&(n[2]="EnhancedEcommerce"),window.ga.apply(window,n)},g.prototype.checkoutStartedEnhanced=function(e){this.checkoutStepViewed(e)},g.prototype.orderUpdatedEnhanced=function(e){this.checkoutStartedEnhanced(e)},g.prototype.checkoutStepViewedEnhanced=function(e){var t=e.products(),o=e.properties(),n=N(e),r=this,i=this.options;this.loadEnhancedEcommerce(e),c(t,(function(t){_(I(e,t),r._trackerName,i)})),window.ga(r._trackerName+"ec:setAction","checkout",{step:o.step||1,option:n||void 0}),this.pushEnhancedEcommerce(e,i,r._trackerName)},g.prototype.checkoutStepCompletedEnhanced=function(e){var t=e.properties(),o=N(e);if(t.step){var n={step:t.step||1,option:o||void 0};this.loadEnhancedEcommerce(e),window.ga(this._trackerName+"ec:setAction","checkout_option",n),window.ga(this._trackerName+"send","event","Checkout","Option")}},g.prototype.orderCompletedEnhanced=function(e){var t=e.total()||e.revenue()||0,o=e.orderId(),n=e.products(),r=e.properties(),i=this.options,a=this;o&&(this.loadEnhancedEcommerce(e),c(n,(function(t){_(I(e,t),a._trackerName,i)})),window.ga(a._trackerName+"ec:setAction","purchase",{id:o,affiliation:r.affiliation,revenue:t,tax:e.tax(),shipping:e.shipping(),coupon:e.coupon()}),this.pushEnhancedEcommerce(e,i,a._trackerName))},g.prototype.orderRefundedEnhanced=function(e){var t=e.orderId(),o=e.products(),n=this,i=this.options;t&&(this.loadEnhancedEcommerce(e),c(o,(function(e){var t=new r({properties:e});window.ga(n._trackerName+"ec:addProduct",{id:t.productId()||t.id()||t.sku(),quantity:t.quantity()})})),window.ga(n._trackerName+"ec:setAction","refund",{id:t}),this.pushEnhancedEcommerce(e,i,n._trackerName))},g.prototype.productAddedEnhanced=function(e){var t=this.options;this.loadEnhancedEcommerce(e),E(e,"add",null,this._trackerName,t),this.pushEnhancedEcommerce(e,t,this._trackerName)},g.prototype.productRemovedEnhanced=function(e){var t=this.options;this.loadEnhancedEcommerce(e),E(e,"remove",null,this._trackerName,t),this.pushEnhancedEcommerce(e,t,this._trackerName)},g.prototype.productViewedEnhanced=function(e){var t=e.properties(),o={},n=this.options;this.loadEnhancedEcommerce(e),t.list&&(o.list=t.list),E(e,"detail",o,this._trackerName,n),this.pushEnhancedEcommerce(e,n,this._trackerName)},g.prototype.productClickedEnhanced=function(e){var t=e.properties(),o={},n=this.options;this.loadEnhancedEcommerce(e),t.list&&(o.list=t.list),E(e,"click",o,this._trackerName,n),this.pushEnhancedEcommerce(e,n,this._trackerName)},g.prototype.promotionViewedEnhanced=function(e){var t=e.properties(),o=this.options;this.loadEnhancedEcommerce(e),window.ga(this._trackerName+"ec:addPromo",{id:e.promotionId()||e.id(),name:e.name(),creative:t.creative,position:t.position}),this.pushEnhancedEcommerce(e,o,this._trackerName)},g.prototype.promotionClickedEnhanced=function(e){var t=e.properties(),o=this,n=this.options;this.loadEnhancedEcommerce(e),window.ga(o._trackerName+"ec:addPromo",{id:e.promotionId()||e.id(),name:e.name(),creative:t.creative,position:t.position}),window.ga(o._trackerName+"ec:setAction","promo_click",{}),this.pushEnhancedEcommerce(e,n,o._trackerName)},g.prototype.productListViewedEnhanced=function(e){var t=e.properties(),o=e.products(),n=this,i=this.options;this.loadEnhancedEcommerce(e),c(o,(function(a){var c=new r({properties:a});if(c.productId()||c.sku()||c.name()){var s={id:c.productId()||c.sku(),name:c.name(),category:c.category()||e.category(),list:t.list_id||e.category()||"products",brand:c.properties().brand,variant:c.properties().variant,price:c.price(),position:y(c,o)};for(var d in s=h(s,v(c.properties(),i)))void 0===s[d]&&delete s[d];window.ga(n._trackerName+"ec:addImpression",s)}})),this.pushEnhancedEcommerce(e,i,n._trackerName)},g.prototype.productListFilteredEnhanced=function(e){var t=e.properties(),o=e.products();t.filters=t.filters||[],t.sorters=t.sorters||[];var n=t.filters.map((function(e){return e.type+":"+e.value})).join(),i=t.sorts.map((function(e){return e.type+":"+e.value})).join(),a=this,s=this.options;this.loadEnhancedEcommerce(e),c(o,(function(c){var d=new r({properties:c});if(d.productId()||d.sku()||d.name()){var p={id:d.productId()||d.sku(),name:d.name(),category:d.category()||e.category(),list:t.list_id||e.category()||"search results",brand:d.properties().brand,variant:n+"::"+i,price:d.price(),position:y(d,o)};for(var u in p=h(p,v(d.properties(),s)))void 0===p[u]&&delete p[u];window.ga(a._trackerName+"ec:addImpression",p)}})),this.pushEnhancedEcommerce(e,s,a._trackerName)};var N=function(e){var t=[e.proxy("properties.paymentMethod"),e.proxy("properties.shippingMethod")],o=m(t);return o.length>0?o.join(", "):null};function I(e,t){var o=t||{};return o.currency=t.currency||e.currency(),new r({properties:o})}},"vP/j":function(e,t){var o=Object.prototype.hasOwnProperty;t.keys=Object.keys||function(e){var t=[];for(var n in e)o.call(e,n)&&t.push(n);return t},t.values=function(e){var t=[];for(var n in e)o.call(e,n)&&t.push(e[n]);return t},t.merge=function(e,t){for(var n in t)o.call(t,n)&&(e[n]=t[n]);return e},t.length=function(e){return t.keys(e).length},t.isEmpty=function(e){return 0==t.length(e)}}});
//# sourceMappingURL=google-analytics.js.map
};