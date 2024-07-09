var logLevels=["debug","info","error"];function log(a,b){try{var c=logLevels.indexOf(b),d=logLevels.indexOf(D.logLevel);-1<c&&-1<d&&c>=d&&window.console&&console.log.apply(console,a)}catch(e){}}function getOffset(a){for(var b=0,c=0;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)b+=a.offsetLeft,c+=a.offsetTop,a=a.offsetParent;return{left:b,top:c}}function arrayUnique(a){a=a.concat();for(var b=0;b<a.length;++b)for(var c=b+1;c<a.length;++c)a[b]===a[c]&&a.splice(c--,1);return a}
function removeFromArray(a,b){for(var c=b.length,d=0;d<c;d++)b[d]===a&&b.splice(d,1);return b}function debug(){var a=Array.prototype.slice.call(arguments);a.unshift("[Diigolet]");log(a,"debug")}function info(){var a=Array.prototype.slice.call(arguments);a.unshift("[Diigolet]");console.log(a,"info")}function error(){var a=Array.prototype.slice.call(arguments);a.unshift("[Diigolet Error!!!]");console.log(a,"error")}
function assert(a){var b=Array.prototype.slice.call(arguments);b.unshift("[Diigolet Assertion failed!!!]");a||console.log(b,"error")}function extend(){for(var a=[].slice.call(arguments),b=a.shift(),c=0,d=a.length,e;e=a[c],c<d;c++)for(var f in e)b[f]=e[f];return b}function extendThese(a,b,c){for(var d=0,e=c.length,f;f=c[d],d<e;d++)a[f]=b[f];return a}function $w(a,b){return a.split(b||" ")}function isEmptyObject(a){for(var b in a)return!1;return!0}
function forEach(a,b,c){if(void 0!==a.length)for(var d=0,e=a.length;d<e;d++)b.call(c,a[d],d);else for(d in a)b.call(c,a[d],d)}function filter(a,b,c){for(var d=[],e=0,f=a.length;e<f;e++)b.call(c,a[e],e)&&d.push(a[e]);return d}function map(a,b,c){for(var d=a.length,e=Array(d),f=0;f<d;f++)e[f]=b.call(c,a[f],f);return e}function some(a,b,c){for(var d=0,e=a.length;d<e;d++)if(b.call(c,a[d],d))return!0;return!1}
function map2(a,b,c){for(var d=a.length,e=[],f,g=0;g<d;g++)f=b.call(c,a[g],g),null!==f&&e.push(f);return e}function findIndex(a,b,c){var d="function"==typeof b;c=c||0;for(var e=a.length,f;f=a[c],c<e;c++)if(d?b(f):f==b)return c;return-1}function find(a,b,c){b=findIndex(a,b,c);return-1<b?a[b]:null}Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){var c=this.length;b=Number(b)||0;b=0>b?Math.ceil(b):Math.floor(b);for(0>b&&(b+=c);b<c;b++)if(b in this&&this[b]===a)return b;return-1});
function unique(a,b){for(var c=[],d=0,e=a.length,f;f=a[d],d<e;d++)b?find(c,function(g){return b(g,f)})||c.push(f):-1==c.indexOf(f)&&c.push(f);return c}function reverse(a){for(var b=Array(a.length),c=a.length-1,d=0;0<=c;c--,d++)b[d]=a[c];return b}function trim(a){a=a.replace(/^\s\s*/,"");for(var b=/\s/,c=a.length;b.test(a.charAt(--c)););return a.slice(0,c+1)}function scan(a,b,c){if(!b.global)throw"string.scan: pattern is not global";for(var d;d=b.exec(a);)c(d)}
function parseDomain(a){/^[^:\/?#]+:\/\//.test(a)||(a="https://"+a);a=a.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/);return trim(a[4].toLowerCase())}function str_interpret(a){return null==a?"":String(a)}function gsub(a,b,c){for(var d="",e;0<a.length;)(e=a.match(b))?(d+=a.slice(0,e.index),d+=str_interpret(c(e)),a=a.slice(e.index+e[0].length)):(d+=a,a="");return d}var tplPattern=/(^|.|\r|\n)(#\{(.*?)\})/;
function evalTpl(a,b){return gsub(a,tplPattern,function(c){if(null==b)return"";var d=c[1]||"";if("\\"==d)return c[2];var e=b,f=c[3],g=/^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;c=g.exec(f);if(null==c)return d;for(;null!=c;){var h=0===c[1].indexOf("[")?gsub(c[2],"\\\\]","]"):c[1];e=e[h];if(null==e||""==c[3])break;f=f.substring("["==c[3]?c[1].length:c[0].length);c=g.exec(f)}return d+str_interpret(e)})}function $html(a){return $(a)}function $id(a){return $("#"+a)}
function blank(a){return!a||0==a.length||(a.match?!!a.match(/^\s*$/):!0)}function nonblank(a){return blank(a)?null:a}
var Utils={parseColor:function(a){var b={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],
khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]};return b[a]?{r:b[a][0],g:b[a][1],b:b[a][2]}:(result=/^rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)$/.exec(a))?
{r:parseInt(result[1]),g:parseInt(result[2]),b:parseInt(result[3])}:(result=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)%\s*,\s*([0-9]+(?:\.[0-9]+)?)%\s*,\s*([0-9]+(?:\.[0-9]+)?)%\s*\)$/.exec(a))?{r:2.55*parseFloat(result[1]),g:2.55*parseFloat(result[2]),b:2.55*parseFloat(result[3])}:(result=/^#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/.exec(a))?{r:parseInt("0x"+result[1]+result[1]),g:parseInt("0x"+result[2]+result[2]),b:parseInt("0x"+result[3]+result[3])}:(result=/^#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/.exec(a))?
{r:parseInt("0x"+result[1]),g:parseInt("0x"+result[2]),b:parseInt("0x"+result[3])}:{r:255,g:255,b:255}},dom:{build:function(){var a=[],b=arguments,c=0,d;for(b=b[0]instanceof Array?b[0]:b;c<b.length;c++)if(b[c+1]instanceof Object){var e=a[a.length]=document.createElement(b[c]);for(d in b[++c])e.setAttribute(d,b[c][d]);if(b[c+1]instanceof Array){var f=arguments.callee(b[++c]);for(d=0;d<f.length;d++)e.appendChild(f[d])}}else a[a.length]=document.createTextNode(b[c]);return a},buildOne:function(a,b,c){return this.build(a,
b,c)[0]},getSelection:function(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection():document.selection.createRange().text}},content2Html:function(a){return this.safeHtml(a).replace(/\n/g,"<br/>")},safeHtml:function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}},IEventDispatcher={mixin:function(a){extendThese(a,this,$w("addEventListener removeEventListener fireEvent _resetEvents"));a._resetEvents()},addEventListener:function(a,
b){this._events[a]||(this._events[a]=[]);a=this._events[a];-1==a.indexOf(b)&&a.push(b)},removeEventListener:function(a,b){var c=this._events[a];if(c)if(2==arguments.length){var d=c.indexOf(b);-1<d&&c.splice(d)}else delete this._events[a]},_resetEvents:function(){this._supressEvents=!1;this._events={}},fireEvent:function(a,b){if(!this._supressEvents){debug("[event]",a);var c=this._events[a];if(c)for(var d=0,e,f=c.length;e=c[d],d<f;d++)("function"==typeof e?e:e["on"+a]).apply(e,b)}}};
