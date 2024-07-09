var cloneRoot=null,waitCount=1;function incrementWait(){waitCount++}function decrementWait(){waitCount--;(!waitCount||0>waitCount)&&cloneRoot&&(originalContent=cloneRoot.innerHTML)}var toBase64Table="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",base64Pad="=";
function toBase64(b){var a="",d=b.length,c;for(c=0;c<d-2;c+=3)a+=toBase64Table[(b.charCodeAt(c)&255)>>2],a+=toBase64Table[((b.charCodeAt(c)&3)<<4)+((b.charCodeAt(c+1)&255)>>4)],a+=toBase64Table[((b.charCodeAt(c+1)&15)<<2)+((b.charCodeAt(c+2)&255)>>6)],a+=toBase64Table[b.charCodeAt(c+2)&63];d%3&&(c=d-d%3,a+=toBase64Table[(b.charCodeAt(c)&255)>>2],2==d%3?(a+=toBase64Table[((b.charCodeAt(c)&3)<<4)+((b.charCodeAt(c+1)&255)>>4)],a+=toBase64Table[(b.charCodeAt(c+1)&15)<<2],a+=base64Pad):(a+=toBase64Table[(b.charCodeAt(c)&
3)<<4],a+=base64Pad+base64Pad));return a}function makeDataUrl(b,a){return"data:"+b+";base64,"+toBase64(a)}
function requestFile(b,a,d){incrementWait();b={href:b,binary:d};try{var c=new XMLHttpRequest;c.open("GET",b.href,!1);b.binary&&c.overrideMimeType("text/plain; charset=x-user-defined");c.send();4==c.readyState&&200==c.status?(b.contentType=c.getResponseHeader("Content-Type"),b.data=c.responseText):b.error="Unexpected error"}catch(e){console.error("Download error: "+e.message),b.error=e.message}a(b)}
function processLink(b,a){switch(a.rel.toLowerCase()){case "stylesheet":return}b.appendChild(a.cloneNode(!1))}function processAnchor(b,a){var d=a.cloneNode(!1);a.href&&(d.href=a.href);b.appendChild(d);return d}function handleImageFile(b){return function(a){a.data&&a.contentType&&(b.src=makeDataUrl(a.contentType,a.data));decrementWait()}}
function processImage(b,a){var d=a.cloneNode(!1);a=a.src;d.url=a;console.log("Image url: "+a);b.appendChild(d);a&&a.toLowerCase().match(/^https?:\/\//)&&requestFile(a,handleImageFile(d),!0)}
function processElement(b,a){console.log(a.nodeName);console.log(waitCount);switch(a.nodeName.toLowerCase()){case "link":processLink(b,a);return;case "a":var d=processAnchor(b,a);break;case "img":processImage(b,a);return;case "style":return;case "script":return;default:d=a.cloneNode(!1),b.appendChild(d)}if(null!=d)for(b=a.firstChild;null!=b;b=b.nextSibling)processRecursive(d,b)}
function processRecursive(b,a){switch(a.nodeType){case a.TEXT_NODE:case a.CDATA_SECTION_NODE:b.appendChild(a.cloneNode(!1));break;case a.COMMENT_NODE:break;case a.ELEMENT_NODE:processElement(b,a);break;default:console.log("Unhandled node: "+a)}}function processDoc(b,a){for(a=a.firstChild;null!=a;a=a.nextSibling)processRecursive(b,a)}
function processStyleSheet(b){if(!b.cssRules)return console.warn("Empty cssRules. Saved page will look incorrect."),"";for(var a=[],d=0;d<b.cssRules.length;d++){var c=b.cssRules[d];c.type==c.IMPORT_RULE?a.push(processStyleSheet(c.styleSheet)):c.type!=c.CHARSET_RULE&&a.push(c.cssText)}return a.join("\n")}function handleStyleFile(b){return function(a){a.data&&b.appendChild(document.createTextNode(a.data));decrementWait()}}
function processStyles(b){if(document.styleSheets)for(var a=0;a<document.styleSheets.length;a++){var d=document.styleSheets[a],c=document.createElement("style");d.media.length&&(c.media=d.media.mediaText);c.type=d.type;null==d.cssRules&&d.href?(console.warn("Downloading stylesheet."),requestFile(d.href,handleStyleFile(c),!1)):c.appendChild(document.createTextNode(processStyleSheet(d)));b.appendChild(c)}}
function cleanPlugins(){for(var b=["embed","object","applet"],a=0,d=b.length;a<d;a++)for(var c=cloneRoot.getElementsByTagName(b[a]),e=0,f=c.length;e<f;e++)c[e]&&(c[e].style.display="none")}function processDocument(b){var a=document.documentElement;cloneRoot=a.cloneNode(!1);cloneRoot.innerHTML=b;processDoc(cloneRoot,a);processStyles(cloneRoot);cleanPlugins()};
