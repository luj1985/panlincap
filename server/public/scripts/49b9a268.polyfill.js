!function(a){a.extend(a,{placeholder:{browser_supported:function(){return void 0!==this._supported?this._supported:this._supported=!!("placeholder"in a('<input type="text">')[0])},shim:function(b){var c={color:"#888",cls:"placeholder",selector:"input[placeholder], textarea[placeholder]"};return a.extend(c,b),!this.browser_supported()&&a(c.selector)._placeholder_shim(c)}}}),a.extend(a.fn,{_placeholder_shim:function(b){function c(b){var c=a(b).offsetParent().offset(),d=a(b).offset();return{top:d.top-c.top,left:d.left-c.left,width:a(b).width()}}function d(b){var e=b.data("target");"undefined"!=typeof e&&(b.css(c(e)),a(window).one("resize",function(){d(b)}))}return this.each(function(){var e=a(this);if(e.is(":visible")){if(e.data("placeholder")){var f=e.data("placeholder");return f.css(c(e)),!0}var g={};e.is("textarea")||"auto"==e.css("height")||(g={lineHeight:e.css("height"),whiteSpace:"nowrap"});var h="border-box"===e.css("box-sizing"),i=e.is("textarea"),j=a("<label />").text(e.attr("placeholder")).addClass(b.cls).css(a.extend({position:"absolute",display:"inline","float":"none",overflow:"hidden",textAlign:"left",color:b.color,cursor:"text",paddingTop:!i&&h?"0":e.css("padding-top"),paddingRight:e.css("padding-right"),paddingBottom:!i&&h?"0":e.css("padding-bottom"),paddingLeft:e.css("padding-left"),fontSize:e.css("font-size"),fontFamily:e.css("font-family"),fontStyle:e.css("font-style"),fontWeight:e.css("font-weight"),textTransform:e.css("text-transform"),backgroundColor:"transparent",zIndex:99},g)).css(c(this)).attr("for",this.id).data("target",e).click(function(){a(this).data("target").is(":disabled")||a(this).data("target").focus()}).insertBefore(this);e.data("placeholder",j).on("keydown",function(){j.hide()}).on("blur change",function(){j[e.val().length?"hide":"show"]()}).triggerHandler("blur"),a(window).one("resize",function(){d(j)})}})}})}(jQuery),jQuery(document).add(window).bind("ready load",function(){jQuery.placeholder&&jQuery.placeholder.shim()});