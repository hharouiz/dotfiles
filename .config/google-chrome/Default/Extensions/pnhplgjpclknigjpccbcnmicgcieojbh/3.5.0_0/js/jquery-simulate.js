/*
 jQuery Simulate v@VERSION - simulate browser mouse and keyboard events
 https://github.com/jquery/jquery-simulate

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 Date: @DATE
*/
(function(f,k){var l=/^key/,m=/^(?:mouse|contextmenu)|click/;f.fn.simulate=function(d,a){return this.each(function(){new f.simulate(this,d,a)})};f.simulate=function(d,a,b){var c=f.camelCase("simulate-"+a);this.target=d;this.options=b;if(this[c])this[c]();else this.simulateEvent(d,a,b)};f.extend(f.simulate,{keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,
PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},buttonCode:{LEFT:0,MIDDLE:1,RIGHT:2}});f.extend(f.simulate.prototype,{simulateEvent:function(d,a,b){var c=this.createEvent(a,b);this.dispatchEvent(d,a,c,b)},createEvent:function(d,a){if(l.test(d))return this.keyEvent(d,a);if(m.test(d))return this.mouseEvent(d,a)},mouseEvent:function(d,a){a=f.extend({bubbles:!0,cancelable:"mousemove"!==d,view:window,detail:0,screenX:0,screenY:0,clientX:1,clientY:1,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,
button:0,relatedTarget:k},a);if(document.createEvent){var b=document.createEvent("MouseEvents");b.initMouseEvent(d,a.bubbles,a.cancelable,a.view,a.detail,a.screenX,a.screenY,a.clientX,a.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.button,a.relatedTarget||document.body.parentNode);if(0===b.pageX&&0===b.pageY&&Object.defineProperty){d=b.relatedTarget.ownerDocument||document;var c=d.documentElement;var e=d.body;Object.defineProperty(b,"pageX",{get:function(){return a.clientX+(c&&c.scrollLeft||e&&
e.scrollLeft||0)-(c&&c.clientLeft||e&&e.clientLeft||0)}});Object.defineProperty(b,"pageY",{get:function(){return a.clientY+(c&&c.scrollTop||e&&e.scrollTop||0)-(c&&c.clientTop||e&&e.clientTop||0)}})}}else document.createEventObject&&(b=document.createEventObject(),f.extend(b,a),b.button={0:1,1:4,2:2}[b.button]||(-1===b.button?0:b.button));return b},keyEvent:function(d,a){a=f.extend({bubbles:!0,cancelable:!0,view:window,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:0,charCode:k},a);if(document.createEvent)try{var b=
document.createEvent("KeyEvents");b.initKeyEvent(d,a.bubbles,a.cancelable,a.view,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.keyCode,a.charCode)}catch(c){b=document.createEvent("Events"),b.initEvent(d,a.bubbles,a.cancelable),f.extend(b,{view:a.view,ctrlKey:a.ctrlKey,altKey:a.altKey,shiftKey:a.shiftKey,metaKey:a.metaKey,keyCode:a.keyCode,charCode:a.charCode})}else document.createEventObject&&(b=document.createEventObject(),f.extend(b,a));if(/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())||"[object Opera]"===
{}.toString.call(window.opera))b.keyCode=0<a.charCode?a.charCode:a.keyCode,b.charCode=k;return b},dispatchEvent:function(d,a,b){d.dispatchEvent?d.dispatchEvent(b):"click"===a&&d.click&&"input"===d.nodeName.toLowerCase()?d.click():d.fireEvent&&d.fireEvent("on"+a,b)},simulateFocus:function(){function d(){a=!0}var a=!1,b=f(this.target);b.bind("focus",d);b[0].focus();if(!a){var c=f.Event("focusin");c.preventDefault();b.trigger(c);b.triggerHandler("focus")}b.unbind("focus",d)},simulateBlur:function(){function d(){b=
!0}var a,b=!1,c=f(this.target);c.bind("blur",d);c[0].blur();setTimeout(function(){c[0].ownerDocument.activeElement===c[0]&&c[0].ownerDocument.body.focus();b||(a=f.Event("focusout"),a.preventDefault(),c.trigger(a),c.triggerHandler("blur"));c.unbind("blur",d)},1)}});f.extend(f.simulate.prototype,{simulateDrag:function(){var d=0,a=this.target,b=a.ownerDocument,c=this.options;if("corner"===c.handle){var e=a;var g=f(e.ownerDocument);e=f(e);e=e.offset();g={x:e.left-g.scrollLeft(),y:e.top-g.scrollTop()}}else{g=
a;var h=f(g.ownerDocument);g=f(g);e=g.offset();g={x:e.left+g.outerWidth()/2-h.scrollLeft(),y:e.top+g.outerHeight()/2-h.scrollTop()}}e=g;g=Math.floor(e.x);e=Math.floor(e.y);h={clientX:g,clientY:e};var n=c.dx||(c.x!==k?c.x-g:0),p=c.dy||(c.y!==k?c.y-e:0);c=c.moves||3;for(this.simulateEvent(a,"mousedown",h);d<c;d++)g+=n/c,e+=p/c,h={clientX:Math.round(g),clientY:Math.round(e)},this.simulateEvent(b,"mousemove",h);f.contains(b,a)?(this.simulateEvent(a,"mouseup",h),this.simulateEvent(a,"click",h)):this.simulateEvent(b,
"mouseup",h)}})})(jQuery);
