window['linkedin-insight-tagDeps'] = ["/integrations/vendor/commons.c42222c4cb2f8913500f.js"];window['linkedin-insight-tagLoader'] = function() { return window["linkedin-insight-tagIntegration"]=function(t){function n(n){for(var r,a,p=n[0],u=n[1],l=n[2],c=0,f=[];c<p.length;c++)a=p[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(s&&s(n);f.length;)f.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],r=!0,p=1;p<e.length;p++){var u=e[p];0!==o[u]&&(r=!1)}r&&(i.splice(n--,1),t=a(a.s=e[0]))}return t}var r={},o={76:0},i=[];function a(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=r,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)a.d(e,r,function(n){return t[n]}.bind(null,r));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="";var p=window.webpackJsonp_name_Integration=window.webpackJsonp_name_Integration||[],u=p.push.bind(p);p.push=n,p=p.slice();for(var l=0;l<p.length;l++)n(p[l]);var s=u;return i.push(["gOfV",0]),e()}({gOfV:function(t,n,e){"use strict";var r=e("hjHq"),o=t.exports=r("LinkedIn Insight Tag").option("partnerId","").tag('<script src="https://snap.licdn.com/li.lms-analytics/insight.min.js"><\/script>');o.prototype.initialize=function(){this.options.partnerId&&(window._linkedin_data_partner_id=this.options.partnerId,this.load(this.ready))},o.prototype.loaded=function(){return window._linkedin_data_partner_id}}});
//# sourceMappingURL=linkedin-insight-tag.js.map
};