(function(){
  var f=!0,g=this;function h(a,c){var b=a.split("."),d=g;!(b[0]in d)&&d.execScript&&d.execScript("var "+b[0]);for(var e;b.length&&(e=b.shift());)!b.length&&void 0!==c?d[e]=c:d=d[e]?d[e]:d[e]={}}function j(a,c,b){return a.call.apply(a.bind,arguments)}
function l(a,c,b){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(b,d);return a.apply(c,b)}}return function(){return a.apply(c,arguments)}}function m(a,c,b){m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?j:l;return m.apply(null,arguments)}
Function.prototype.bind=Function.prototype.bind||function(a,c){if(1<arguments.length){var b=Array.prototype.slice.call(arguments,1);b.unshift(this,a);return m.apply(null,b)}return m(this,a)};function p(a){this.a=a||{};this.pathname=window.location.pathname;window._gaq=window._gaq||[];this.g=f;if(!1===this.a.tracklinks||!1===this.a.trackClicks)this.g=!1;this.a.trackQueryParams&&(this.m=f);this.l=void 0===this.a.adsDbCompatible?f:this.a.adsDbCompatible;this.c=this.a.tracker?this.a.tracker+".":"";this.f=this.a.cookiePath||/^(.*\/)/.exec(this.pathname)[0];this.d=this.a.cookiePathCopy||[];this.prefix=this.a.prefix||"";this.i=this.a.defaultEventName;this.h=this.a.defaultAction;this.j=this.a.defaultLabel;
a=this.a.profile;if(this.l&&(window.location.hash||window.location.search)){var c=window.location.href;this.b([this.c+"_setCampIdKey","cid"]);-1==c.indexOf("utm_campaign=")&&this.b([this.c+"_setCampNameKey","sourceid"]);-1==c.indexOf("utm_medium=")&&this.b([this.c+"_setCampMediumKey","medium"]);-1==c.indexOf("utm_source=")&&this.b([this.c+"_setCampSourceKey","subid"]);-1==c.indexOf("utm_term=")&&this.b([this.c+"_setCampTermKey","term"]);-1==c.indexOf("utm_content=")&&this.b([this.c+"_setCampContentKey",
"content"])}var b=this.a.commands;if(b)for(var c=0,d;d=b[c];c++)d[0]=d[0]&&this.c+d[0],this.b(d);if(this.d){c=0;for(b=this.d.length;c<b;c++)0>this.f.indexOf(this.d[c])&&this.b([this.c+"_cookiePathCopy",this.d[c]])}this.b([this.c+"_setAccount",a]);this.b([this.c+"_setCookiePath",this.f]);this.b([this.c+"_setAllowAnchor",f]);a=this.a.pageviewPath;a||(a=this.prefix+this.pathname,this.m&&(a+=window.location.search));this.b([this.c+"_trackPageview",a]);window._gat||(a=document.createElement("script"),
a.type="text/javascript",a.async=f,a.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js",c=document.getElementsByTagName("script")[0],c.parentNode.insertBefore(a,c));var e=this.k,i=this;i&&(e=m(e,i));if(document.addEventListener)try{q(document,"DOMContentLoaded",e,this)}catch(t){q(window,"load",e,this)}else if(!document.uniqueID&&document.expando)var n=document.createElement("tempnode"),k=window.setInterval(function(){try{n.doScroll("left")}catch(a){return}window.clearInterval(k);
k=n=null;i&&(e=m(e,i));e()},50);else"readyState"in document?k=window.setInterval(function(){/loaded|complete/.test(document.readyState)&&(window.clearInterval(k),k=null,i&&(e=m(e,i)),e())},50):q(window,"load",e,this);this.a.trackUnload&&q(window,"unload",this.n,this);r=f}var r=!1;
p.prototype.k=function(){this.g&&q(document.body,"click",function(a){a=a||window.event;a=a.target||a.srcElement;a=3==a.nodeType?a.parentNode:a;do{if(Boolean("a"==a.nodeName.toLowerCase()||a.getAttribute("data-g-event")||a.getAttribute("data-g-action")||a.getAttribute("data-g-label"))){var c=s(this,"eventname",a),b=s(this,"action",a),d=s(this,"label",a);this.e(c,b,d)}a.parentNode&&(a=a.parentNode)}while(a.parentNode)},this);this.a.heatMapper&&q(document.body,"click",function(a){this.e("AutoTrack: Heatmap",
"Click",a.clientX+","+a.clientY)},this)};p.prototype.n=function(){this.e("AutoTrack: Navigation","Unload",window.location.href)};p.prototype.e=function(a,c,b){this.prefix&&(b=this.prefix+b);this.b([this.c+"_trackEvent",a,c,b])};
function s(a,c,b){function d(a){if("string"==typeof a)return a;if("function"==typeof a)return a(b)}if("eventname"==c)return b.getAttribute("data-g-event")||d(a.i)||("a"==b.tagName.toLowerCase()?b.hostname==window.location.hostname?"AutoTrack: Link Click":"AutoTrack: Outbound Click":"AutoTrack: Element Click");if("action"==c)return b.getAttribute("data-g-action")||d(a.h)||b.getAttribute("href")||"AutoTrack: Element Click";if("label"==c)return b.getAttribute("data-g-label")||d(a.j)||a.pathname}
function q(a,c,b,d){d&&(b=m(b,d));a.addEventListener?a.addEventListener(c,b,!1):a.attachEvent&&a.attachEvent("on"+c,b)}p.prototype.b=function(a){a instanceof Array&&window._gaq.push(a)};h("gweb.analytics.AutoTrack",p);p.prototype.trackEvent=p.prototype.e;p.prototype.pushCommand=p.prototype.b;h("gweb.analytics.AutoTrack.hasInstance",function(){return r});
})()