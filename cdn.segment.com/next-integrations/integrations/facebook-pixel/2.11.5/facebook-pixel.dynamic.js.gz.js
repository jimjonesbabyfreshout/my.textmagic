window['facebook-pixelDeps'] = ["/integrations/vendor/commons.c42222c4cb2f8913500f.js"];window['facebook-pixelLoader'] = function() { return window["facebook-pixelIntegration"]=function(e){function t(t){for(var i,a,s=t[0],p=t[1],c=t[2],d=0,l=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&l.push(r[a][0]),r[a]=0;for(i in p)Object.prototype.hasOwnProperty.call(p,i)&&(e[i]=p[i]);for(u&&u(t);l.length;)l.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,s=1;s<n.length;s++){var p=n[s];0!==r[p]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},r={50:0},o=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp_name_Integration=window.webpackJsonp_name_Integration||[],p=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=p;return o.push(["qzi5",0]),n()}({F39V:function(e,t,n){var i=n("NtLt");e.exports=function(e){return i(e).replace(/\s(\w)/g,(function(e,t){return t.toUpperCase()}))}},qzi5:function(e,t,n){"use strict";var i=n("hjHq"),r=n("6YGp"),o=n("bmjW"),a=n("F39V"),s=n("qMUi"),p=n("ubkq"),c=n("NGGi").Track,u=n("bCcq"),d=e.exports=i("Facebook Pixel").global("fbq").option("pixelId","").option("agent","seg").option("valueIdentifier","value").option("initWithExistingTraits",!1).option("traverse",!1).option("automaticConfiguration",!0).option("whitelistPiiProperties",[]).option("blacklistPiiProperties",[]).option("standardEventsCustomProperties",[]).option("keyForExternalId","").option("userIdAsExternalId",!1).option("limitedDataUse",!0).mapping("standardEvents").mapping("legacyEvents").mapping("contentTypes").tag('<script src="//connect.facebook.net/en_US/fbevents.js">'),l=["checkinDate","checkoutDate","departingArrivalDate","departingDepartureDate","returningArrivalDate","returningDepartureDate","travelEnd","travelStart"],y=["email","firstName","lastName","gender","city","country","phone","state","zip","birthday"];function f(e){return Number(e||0).toFixed(2)}function h(e,t){var n={};for(var i in e)e.hasOwnProperty(i)&&(n[i]=e[i]);for(var r in t)t.hasOwnProperty(r)&&!n.hasOwnProperty(r)&&(n[r]=t[r]);return n}d.prototype.initialize=function(){if(window._fbq=function(){window.fbq.callMethod?window.fbq.callMethod.apply(window.fbq,arguments):window.fbq.queue.push(arguments)},window.fbq=window.fbq||window._fbq,window.fbq.push=window.fbq,window.fbq.loaded=!0,window.fbq.disablePushState=!0,window.fbq.allowDuplicatePageViews=!0,window.fbq.agent=this.options.agent,window.fbq.version="2.0",window.fbq.queue=[],this.load(this.ready),this.options.automaticConfiguration||window.fbq("set","autoConfig",!1,this.options.pixelId),this.options.limitedDataUse?this.validateAndSetDataProcessing(this.options.dataProcessingOptions||[["LDU"],0,0]):window.fbq("dataProcessingOptions",[]),this.options.initWithExistingTraits){var e=this.formatTraits(this.analytics);window.fbq("init",this.options.pixelId,e)}else window.fbq("init",this.options.pixelId)},d.prototype.loaded=function(){return!(!window.fbq||!window.fbq.callMethod)},d.prototype.page=function(e){window.fbq("track","PageView",{},{eventID:e.proxy("messageId")})},d.prototype.track=function(e){var t=this,n=e.event(),i=f(e.revenue()),o=this.buildPayload(e);e.properties().hasOwnProperty("revenue")&&(o.value=f(e.revenue()),delete o.revenue);var a=this.standardEvents(n),s=this.legacyEvents(n);[].concat(a,s).length?(r((function(n){"Purchase"===n&&(o.currency=e.currency()),window.fbq("trackSingle",t.options.pixelId,n,o,{eventID:e.proxy("messageId")})}),a),r((function(n){window.fbq("trackSingle",t.options.pixelId,n,{currency:e.currency(),value:i},{eventID:e.proxy("messageId")})}),s)):window.fbq("trackSingleCustom",this.options.pixelId,n,o,{eventID:e.proxy("messageId")})},d.prototype.productListViewed=function(e){var t,n=this,i=[],o=[],a=e.products(),s=this.buildPayload(e,!0);Array.isArray(a)&&a.forEach((function(e){var t=new c({properties:e}),n=t.proxy("properties.product_id")||t.productId()||t.id();n&&(i.push(n),o.push({id:n,quantity:t.quantity()}))})),i.length?t=["product"]:(i.push(e.category()||""),o.push({id:e.category()||"",quantity:1}),t=["product_group"]),window.fbq("trackSingle",this.options.pixelId,"ViewContent",h({content_ids:i,content_type:this.getContentType(e,t),contents:o},s),{eventID:e.proxy("messageId")}),r((function(t){window.fbq("trackSingle",n.options.pixelId,t,{currency:e.currency(),value:f(e.revenue())},{eventID:e.proxy("messageId")})}),this.legacyEvents(e.event()))},d.prototype.productViewed=function(e){var t=this,n="value"===this.options.valueIdentifier,i=this.buildPayload(e,!0);window.fbq("trackSingle",this.options.pixelId,"ViewContent",h({content_ids:[e.productId()||e.id()||e.sku()||""],content_type:this.getContentType(e,["product"]),content_name:e.name()||"",content_category:e.category()||"",currency:e.currency(),value:f(n?e.value():e.price()),contents:[{id:e.productId()||e.id()||e.sku()||"",quantity:e.quantity(),item_price:e.price()}]},i),{eventID:e.proxy("messageId")}),r((function(i){window.fbq("trackSingle",t.options.pixelId,i,{currency:e.currency(),value:f(n?e.value():e.price())},{eventID:e.proxy("messageId")})}),this.legacyEvents(e.event()))},d.prototype.productAdded=function(e){var t=this,n="value"===this.options.valueIdentifier,i=this.buildPayload(e,!0);window.fbq("trackSingle",this.options.pixelId,"AddToCart",h({content_ids:[e.productId()||e.id()||e.sku()||""],content_type:this.getContentType(e,["product"]),content_name:e.name()||"",content_category:e.category()||"",currency:e.currency(),value:f(n?e.value():e.price()),contents:[{id:e.productId()||e.id()||e.sku()||"",quantity:e.quantity(),item_price:e.price()}]},i),{eventID:e.proxy("messageId")}),r((function(i){window.fbq("trackSingle",t.options.pixelId,i,{currency:e.currency(),value:f(n?e.value():e.price())},{eventID:e.proxy("messageId")})}),this.legacyEvents(e.event()))},d.prototype.orderCompleted=function(e){for(var t=this,n=e.products(),i=this.buildPayload(e,!0),o=f(e.revenue()),a=this.getContentType(e,["product"]),s=[],p=[],u=0;u<n.length;u++){var d=new c({properties:n[u]}),l=d.productId()||d.id()||d.sku();s.push(l);var y={id:l,quantity:d.quantity()};d.price()&&(y.item_price=d.price()),p.push(y)}window.fbq("trackSingle",this.options.pixelId,"Purchase",h({content_ids:s,content_type:a,currency:e.currency(),value:o,contents:p,num_items:s.length},i),{eventID:e.proxy("messageId")}),r((function(n){window.fbq("trackSingle",t.options.pixelId,n,{currency:e.currency(),value:f(e.revenue())},{eventID:e.proxy("messageId")})}),this.legacyEvents(e.event()))},d.prototype.productsSearched=function(e){var t=this,n=this.buildPayload(e,!0);window.fbq("trackSingle",this.options.pixelId,"Search",h({search_string:e.proxy("properties.query")},n),{eventID:e.proxy("messageId")}),r((function(n){window.fbq("trackSingle",t.options.pixelId,n,{currency:e.currency(),value:f(e.revenue())},{eventID:e.proxy("messageId")})}),this.legacyEvents(e.event()))},d.prototype.checkoutStarted=function(e){for(var t=this,n=e.products(),i=[],o=[],a=e.category(),s=this.buildPayload(e,!0),p=0;p<n.length;p++){var u=new c({properties:n[p]}),d=u.productId()||u.id()||u.sku();i.push(d);var l={id:d,quantity:u.quantity(),item_price:e.price()};u.price()&&(l.item_price=u.price()),o.push(l)}!a&&n[0]&&n[0].category&&(a=n[0].category),window.fbq("trackSingle",this.options.pixelId,"InitiateCheckout",h({content_category:a,content_ids:i,content_type:this.getContentType(e,["product"]),contents:o,currency:e.currency(),num_items:i.length,value:f(e.revenue())},s),{eventID:e.proxy("messageId")}),r((function(n){window.fbq("trackSingle",t.options.pixelId,n,{currency:e.currency(),value:f(e.revenue())},{eventID:e.proxy("messageId")})}),this.legacyEvents(e.event()))},d.prototype.getContentType=function(e,t){var n=e.options("Facebook Pixel");if(n&&n.contentType)return[n.contentType];var i=e.category();if(!i){var r=e.products();r&&r.length&&(i=r[0].category)}if(i){var o=this.contentTypes(i);if(o.length)return o}return t},d.prototype.formatTraits=function(e){var t,n,i,r=e&&e.user().traits();if(!r)return{};if(r.firstName||r.first_name)t=r.firstName||r.first_name,n=r.lastName||r.last_name;else{var a=r.name&&r.name.toLowerCase().split(" ")||[];t=a.shift(),n=a.pop()}r.gender&&s.string(r.gender)&&(i=r.gender.slice(0,1).toLowerCase());var c,u=r.birthday&&p(r.birthday,"yyyymmdd"),d=r.address||{},l=d.city&&d.city.split(" ").join("").toLowerCase(),y=d.state&&d.state.toLowerCase(),f=d.postalCode||d.postal_code;return this.options.keyForExternalId&&(c=r[this.options.keyForExternalId]),!c&&this.options.userIdAsExternalId&&e&&(c=e.user().id()||e.user().anonymousId()),o({em:r.email,fn:t,ln:n,ph:r.phone,ge:i,db:u,ct:l,st:y,zp:f,external_id:c})},d.prototype.buildPayload=function(e,t){for(var n=this.options.whitelistPiiProperties||[],i=this.options.blacklistPiiProperties||[],r=this.options.standardEventsCustomProperties||[],o={},p=0;p<i.length;p++){var c=i[p];o[c.propertyName]=c.hashProperty}var d={},f=e.properties();for(var h in f)if(f.hasOwnProperty(h)&&!(t&&r.indexOf(h)<0)){var v=f[h];if(l.indexOf(a(h))>=0&&s.date(v))d[h]=v.toISOString().split("T")[0];else if(o.hasOwnProperty(h))o[h]&&"string"==typeof v&&(d[h]=u(v));else{var g=y.indexOf(h)>=0,w=n.indexOf(h)>=0;g&&!w||(d[h]=v)}}return d},d.prototype.validateAndSetDataProcessing=function(e){var t=3===e.length,n=Array.isArray(e[0])&&"number"==typeof e[1]&&"number"==typeof e[2];t&&n?window.fbq("dataProcessingOptions",e[0],e[1],e[2]):window.fbq("dataProcessingOptions",["LDU"],0,0)},d.merge=h}});
//# sourceMappingURL=facebook-pixel.js.map
};