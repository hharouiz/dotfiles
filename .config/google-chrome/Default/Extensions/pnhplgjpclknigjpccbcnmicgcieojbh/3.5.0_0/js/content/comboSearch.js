var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,b,c){a instanceof String&&(a=String(a));for(var f=a.length,e=0;e<f;e++){var h=a[e];if(b.call(c,h,e,a))return{i:e,v:h}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(a,b){var c=$jscomp.propertyToPolyfillSymbol[b];if(null==c)return a[b];c=a[c];return void 0!==c?c:a[b]};
$jscomp.polyfill=function(a,b,c,f){b&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,b,c,f):$jscomp.polyfillUnisolated(a,b,c,f))};$jscomp.polyfillUnisolated=function(a,b,c,f){c=$jscomp.global;a=a.split(".");for(f=0;f<a.length-1;f++){var e=a[f];if(!(e in c))return;c=c[e]}a=a[a.length-1];f=c[a];b=b(f);b!=f&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})};
$jscomp.polyfillIsolated=function(a,b,c,f){var e=a.split(".");a=1===e.length;f=e[0];f=!a&&f in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var h=0;h<e.length-1;h++){var l=e[h];if(!(l in f))return;f=f[l]}e=e[e.length-1];c=$jscomp.IS_SYMBOL_NATIVE&&"es6"===c?f[e]:null;b=b(c);null!=b&&(a?$jscomp.defineProperty($jscomp.polyfills,e,{configurable:!0,writable:!0,value:b}):b!==c&&($jscomp.propertyToPolyfillSymbol[e]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(e):$jscomp.POLYFILL_PREFIX+e,e=
$jscomp.propertyToPolyfillSymbol[e],$jscomp.defineProperty(f,e,{configurable:!0,writable:!0,value:b})))};$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(b,c){return $jscomp.findInternal(this,b,c).v}},"es6","es3");
(function(){window.ComboSearch||(window.ComboSearch={showResult:function(a){var b=this;$(function(){b._showResult(a)})},_showResult:function(a){function b(d,g){d=d.replace(/[\.\$\^\{\[\(\|\)\*\+\?\\]/gi,"\\$1");return g.replace(new RegExp("("+d+")","ig"),'<span style="font-weight:bold">$1</span>')}function c(d,g){var k=document.createElement("div"),m=d.url.match(/:\/\/([\w | .]+)/)[1];m=b(g,m);g=b(g,d.title);k.className="result-item";k.setAttribute("data-url",d.url);k.innerHTML='<div class="result-item-top"><a target="_blank" class="result-item-title" href="'+
d.url+'">'+g+'</a></div><div class="result-item-bottom"><span class="result-item-url">'+m+"</span></div>";if("no_tag"!=d.tags)for(d=d.tags.split(","),g=0;g<d.length;g++)$(k).find(".result-item-bottom").append('<div class="diigo-tag">'+d[g]+"</div>");return k}0<$("#diigoComboSearch").length&&$("#diigoComboSearch").remove();a=JSON.parse(a);var f=a.results,e=a.key,h=a.total;a=a.element;var l=$("#diigoComboSearch"),n=chrome.runtime.getURL("");l.length||(l=$('<div id="diigoComboSearch"><div id="diigoComboSearch-top"><div id="diigoComboSearch-close"></div><ul id="diigoComboSearch-close-action" class="diigoComboSearch-close-action"><li class="diigoComboSearch-close-t">Dismiss for now</li><li class="diigoComboSearch-close-f">Disable forever</li><li class="diigoComboSearch-tip">Enabled by Diigo Web Collector</li></ul></div><div id="diigoComboSearch-main"></div><div id="diigoComboSearch-footer"><a target="_blank"></a></a></div></div>').prependTo($(a)));
chrome.runtime.sendMessage({name:"getSearchPref"},function(d){if(1==d){$("#diigoComboSearch-main").empty();$("#diigoComboSearch-footer").empty();$("#diigoComboSearch-title").remove();d=document.createDocumentFragment();for(var g=10<f.length?10:f.length,k=0;k<g;k++){var m=c(f[k],e);d.appendChild(m)}(g=document.getElementById("diigoComboSearch-main"))&&g.appendChild(d);$("#diigoComboSearch-top").prepend('<span id="diigoComboSearch-title"><img src="'+n+'img/diigo-logo.png"/>Results from your Diigo Library <span style="font-size: 12px;">(Premium feature)</span></span>');
$("#diigoComboSearch-footer").append('<a id="diigoComboSearch-viewAllLink" href="https://www.diigo.com/search?adSScope=my&what='+e+'&snapshot=no" target="_blank">View all '+h+" items</a>")}else $("#diigoComboSearch-top").prepend('<span id="diigoComboSearch-title"><img src="'+n+'img/diigo-logo.png"/><a href="https://www.diigo.com/search?adSScope=my&what='+e+'&snapshot=no" target="_blank"><strong>'+h+" items</strong> found in your Diigo Library &#187;</a></span>"),$('<div id="diigoComboSearch-goPremium">If you want to see results from your Diigo library here, <a id="go-to-option">go to options</a> to enable.</div>').appendTo($("#diigoComboSearch-footer")),
$("#go-to-option").on("click",function(){chrome.runtime.sendMessage({name:"createTab",details:{url:"/options.html#search"}})})});$("#diigoComboSearch").off("click").on("click",".result-item",function(d){$(this).data("url")}).on("click",".diigo-tag",function(d){d.stopPropagation();d=d.target;d=/\s/.test($(d).text())?'"'+$(d).text()+'"':$(d).text();window.open("https://www.diigo.com/search?adSScope=my&what=%23"+d+"&snapshot=no")});$("#diigoComboSearch-close").off("click").on("click",function(d){d.stopPropagation();
$(this).parent().find("#diigoComboSearch-close-action").show()});$(document).on("click",function(){$("#diigoComboSearch-close-action").hide()});$("#diigoComboSearch-close-action").on("click","li",function(d){$(this).hasClass("diigoComboSearch-close-t")?$("#diigoComboSearch").hide():$(this).hasClass("diigoComboSearch-close-f")&&($("#diigoComboSearch").hide(),chrome.runtime.sendMessage({name:"closeComboSearch"}))})}})})();