var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(b.call(c,f,e,a))return{i:e,v:f}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(a,b){var c=$jscomp.propertyToPolyfillSymbol[b];if(null==c)return a[b];c=a[c];return void 0!==c?c:a[b]};
$jscomp.polyfill=function(a,b,c,d){b&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,b,c,d):$jscomp.polyfillUnisolated(a,b,c,d))};$jscomp.polyfillUnisolated=function(a,b,c,d){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))return;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})};
$jscomp.polyfillIsolated=function(a,b,c,d){var e=a.split(".");a=1===e.length;d=e[0];d=!a&&d in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var f=0;f<e.length-1;f++){var g=e[f];if(!(g in d))return;d=d[g]}e=e[e.length-1];c=$jscomp.IS_SYMBOL_NATIVE&&"es6"===c?d[e]:null;b=b(c);null!=b&&(a?$jscomp.defineProperty($jscomp.polyfills,e,{configurable:!0,writable:!0,value:b}):b!==c&&($jscomp.propertyToPolyfillSymbol[e]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(e):$jscomp.POLYFILL_PREFIX+e,e=
$jscomp.propertyToPolyfillSymbol[e],$jscomp.defineProperty(d,e,{configurable:!0,writable:!0,value:b})))};$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(b,c){return $jscomp.findInternal(this,b,c).v}},"es6","es3");function resetForm(){$("#subject").val("");$("#content").val("")}function isEmptyString(a){return""===a.trim()}
function validateForm(){var a=$("#subject"),b=$("#content"),c=a.val(),d=b.val();if(isEmptyString(c))return a.addClass("warning"),!1;a.removeClass("warning");if(isEmptyString(d))return b.addClass("warning"),!1;b.removeClass("warning");return!0}
$("#send-btn").on("click",function(){var a=this;if(validateForm()){var b=$("#subject").val()+" (Chrome extension)",c=$("#content").val(),d=new URLSearchParams(window.location.search);d=decodeURIComponent(d.get("refer"))||"Chrome extension";var e=chrome.runtime.getManifest().version;b={subject:b,message:c+"<br/><br/><br/><hr size='1'/><span style='font-weight:bold;'>Browser: </span>"+window.navigator.userAgent+"<br/><span style='font-weight:bold;'>Referrer: </span>"+d+"<br/><span style='font-weight:bold;'>Extension version: </span>"+
e+"<br/>",from:"extension"};$(this).addClass("processing").text("SENDING...");$.ajax({type:"POST",url:"https://www.diigo.com/common/contact",data:b,dataType:"json",success:function(f){$(a).removeClass("processing").text("SEND");$(".success-area").addClass("show");f=f.email;$("#user-email").text(f)},error:function(f){$(a).removeClass("processing").text("SEND");console.log(f)}})}});$("#send-again").on("click",function(){$(".success-area").removeClass("show");resetForm()});var Bg=chrome.extension.getBackgroundPage();
"Free"!=Bg.GlobalData.permissions.servicePlanName?$(".main-content").find(".tip").html("As a premium user, you will get priority support."):$(".main-content").find(".tip").html('<a href="https://www.diigo.com/premium?f=feedback_ext" target="_blank">Go premium</a> to get priority support!');
