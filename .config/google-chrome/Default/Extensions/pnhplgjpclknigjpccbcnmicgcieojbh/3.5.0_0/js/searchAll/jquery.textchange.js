/*
 jQuery TextChange Plugin
 http://www.zurb.com/playground/jquery-text-change-custom-event

 Copyright 2010, ZURB
 Released under the MIT License
*/
(function(a){a.event.special.textchange={setup:function(b,c){a(this).data("lastValue",a(this).is("input")?a(this).val():a(this).html());a(this).bind("keyup.textchange",a.event.special.textchange.handler);a(this).bind("cut.textchange paste.textchange input.textchange",a.event.special.textchange.delayedHandler)},teardown:function(b){a(this).unbind(".textchange")},handler:function(b){b.keyCode&&13==b.keyCode&&a(".note.new").addClass("typed");a.event.special.textchange.triggerIfChanged(a(this))},delayedHandler:function(b){var c=
a(this);setTimeout(function(){a.event.special.textchange.triggerIfChanged(c)},25)},triggerIfChanged:function(b){var c=b.is("input")?b.val():b.html();c!==b.data("lastValue")&&(b.trigger("textchange",b.data("lastValue")),b.data("lastValue",c))}}})(jQuery);
