"use strict";!function(){function e(x){var e=jQuery.migrateDeduplicateWarnings||!1;jQuery.migrateDeduplicateWarnings=!1,x.fn._fadeIn=x.fn.fadeIn;var C=x.noop||function(){},S=/MSIE/.test(navigator.userAgent),O=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),E=(document.documentMode,"function"==typeof document.createElement("div").style.setExpression);x.blockUI=function(e){o(window,e)},x.unblockUI=function(e){B(window,e)},x.growlUI=function(e,t,o,n){var i=x('<div class="growlUI"></div>');e&&i.append("<h1>"+e+"</h1>"),t&&i.append("<h2>"+t+"</h2>"),void 0===o&&(o=3e3);function l(e){e=e||{},x.blockUI({message:i,fadeIn:void 0!==e.fadeIn?e.fadeIn:700,fadeOut:void 0!==e.fadeOut?e.fadeOut:1e3,timeout:void 0!==e.timeout?e.timeout:o,centerY:!1,showOverlay:!1,onUnblock:n,css:x.blockUI.defaults.growlCSS})}l();i.css("opacity");i.on("mouseover",function(){l({fadeIn:0,timeout:3e4});var e=x(".blockMsg");e.stop(),e.fadeTo(300,1)}).on("mouseout",function(){x(".blockMsg").fadeOut(1e3)})},x.fn.block=function(e){if(this[0]===window)return x.blockUI(e),this;var t=x.extend({},x.blockUI.defaults,e||{});return this.each(function(){var e=x(this);t.ignoreIfBlocked&&e.data("blockUI.isBlocked")||e.unblock({fadeOut:0})}),this.each(function(){"static"==x.css(this,"position")&&(this.style.position="relative",x(this).data("blockUI.static",!0)),this.style.zoom=1,o(this,e)})},x.fn.unblock=function(e){return this[0]===window?(x.unblockUI(e),this):this.each(function(){B(this,e)})},x.blockUI.version=2.7,x.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var T=null,M=[];function o(e,i){var t,o,n,l,s,a,d,c,r,u,f,p,b,h,m,k,y,g,v,I,w=e==window,U=i&&void 0!==i.message?i.message:void 0;(i=x.extend({},x.blockUI.defaults,i||{})).ignoreIfBlocked&&x(e).data("blockUI.isBlocked")||(i.overlayCSS=x.extend({},x.blockUI.defaults.overlayCSS,i.overlayCSS||{}),t=x.extend({},x.blockUI.defaults.css,i.css||{}),i.onOverlayClick&&(i.overlayCSS.cursor="pointer"),o=x.extend({},x.blockUI.defaults.themedCSS,i.themedCSS||{}),U=void 0===U?i.message:U,w&&T&&B(window,{fadeOut:0}),U&&"string"!=typeof U&&(U.parentNode||U.jquery)&&(n=U.jquery?U[0]:U,l={},x(e).data("blockUI.history",l),l.el=n,l.parent=n.parentNode,l.display=n.style.display,l.position=n.style.position,l.parent&&l.parent.removeChild(n)),x(e).data("blockUI.onUnblock",i.onUnblock),s=i.baseZ,c=S||i.forceIframe?x('<iframe class="blockUI" style="z-index:'+s+++';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+i.iframeSrc+'"></iframe>'):x('<div class="blockUI" style="display:none"></div>'),r=i.theme?x('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+s+++';display:none"></div>'):x('<div class="blockUI blockOverlay" style="z-index:'+s+++';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),i.theme&&w?(d='<div class="blockUI '+i.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(s+10)+';display:none;position:fixed">',i.title&&(d+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(i.title||"&nbsp;")+"</div>"),d+='<div class="ui-widget-content ui-dialog-content"></div>',d+="</div>"):i.theme?(d='<div class="blockUI '+i.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(s+10)+';display:none;position:absolute">',i.title&&(d+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(i.title||"&nbsp;")+"</div>"),d+='<div class="ui-widget-content ui-dialog-content"></div>',d+="</div>"):d=w?'<div class="blockUI '+i.blockMsgClass+' blockPage" style="z-index:'+(s+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+i.blockMsgClass+' blockElement" style="z-index:'+(s+10)+';display:none;position:absolute"></div>',a=x(d),U&&(i.theme?(a.css(o),a.addClass("ui-widget-content")):a.css(t)),i.theme||r.css(i.overlayCSS),r.css("position",w?"fixed":"absolute"),(S||i.forceIframe)&&c.css("opacity",0),u=[c,r,a],f=x(w?"body":e),x.each(u,function(){this.appendTo(f)}),i.theme&&i.draggable&&x.fn.draggable&&a.draggable({handle:".ui-dialog-titlebar",cancel:"li"}),p=E&&("CSS1Compat"!==document.compatMode||0<x("object,embed",w?null:e).length),(O||p)&&(w&&i.allowBodyStretch&&"CSS1Compat"===document.compatMode&&x("html,body").css("height","100%"),!O&&"CSS1Compat"===document.compatMode||w||(b=H(e,"borderTopWidth"),h=H(e,"borderLeftWidth"),m=b?"(0 - "+b+")":0,k=h?"(0 - "+h+")":0),x.each(u,function(e,t){var o,n=t[0].style;n.position="absolute",e<2?(w?n.setExpression("height",'Math.max(document.body.scrollHeight, document.body.offsetHeight) - ("CSS1Compat" === document.compatMode?0:'+i.quirksmodeOffsetHack+') + "px"'):n.setExpression("height",'this.parentNode.offsetHeight + "px"'),w?n.setExpression("width",'"CSS1Compat" === document.compatMode && document.documentElement.clientWidth || document.body.clientWidth + "px"'):n.setExpression("width",'this.parentNode.offsetWidth + "px"'),k&&n.setExpression("left",k),m&&n.setExpression("top",m)):i.centerY?(w&&n.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),n.marginTop=0):!i.centerY&&w&&(o="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+(i.css&&i.css.top?parseInt(i.css.top,10):0)+') + "px"',n.setExpression("top",o))})),U&&(i.theme?a.find(".ui-widget-content").append(U):a.append(U),(U.jquery||U.nodeType)&&x(U).show()),(S||i.forceIframe)&&i.showOverlay&&c.show(),i.fadeIn?(y=i.onBlock?i.onBlock:C,g=i.showOverlay&&!U?y:C,v=U?y:C,i.showOverlay&&r._fadeIn(i.fadeIn,g),U&&a._fadeIn(i.fadeIn,v)):(i.showOverlay&&r.show(),U&&a.show(),i.onBlock&&i.onBlock.bind(a)()),W(1,e,i),w?(T=a[0],M=x(i.focusableElements,T),i.focusInput&&setTimeout(j,20)):function(e,t,o){var n=e.parentNode,i=e.style,l=(n.offsetWidth-e.offsetWidth)/2-H(n,"borderLeftWidth"),s=(n.offsetHeight-e.offsetHeight)/2-H(n,"borderTopWidth");t&&(i.left=0<l?l+"px":"0");o&&(i.top=0<s?s+"px":"0")}(a[0],i.centerX,i.centerY),i.timeout&&(I=setTimeout(function(){w?x.unblockUI(i):x(e).unblock(i)},i.timeout),x(e).data("blockUI.timeout",I)))}function B(e,t){var o,n,i=e==window,l=x(e),s=l.data("blockUI.history"),a=l.data("blockUI.timeout");a&&(clearTimeout(a),l.removeData("blockUI.timeout")),t=x.extend({},x.blockUI.defaults,t||{}),W(0,e,t),null===t.onUnblock&&(t.onUnblock=l.data("blockUI.onUnblock"),l.removeData("blockUI.onUnblock")),n=i?x("body").children().filter(".blockUI").add("body > .blockUI"):l.find(">.blockUI"),t.cursorReset&&(1<n.length&&(n[1].style.cursor=t.cursorReset),2<n.length&&(n[2].style.cursor=t.cursorReset)),i&&(T=M=null),t.fadeOut?(o=n.length,n.stop().fadeOut(t.fadeOut,function(){0==--o&&d(n,s,t,e)})):d(n,s,t,e)}function d(e,t,o,n){var i,l,s,a=x(n);a.data("blockUI.isBlocked")||(e.each(function(e,t){this.parentNode&&this.parentNode.removeChild(this)}),t&&t.el&&(t.el.style.display=t.display,t.el.style.position=t.position,t.el.style.cursor="default",t.parent&&t.parent.appendChild(t.el),a.removeData("blockUI.history")),a.data("blockUI.static")&&a.css("position","static"),"function"==typeof o.onUnblock&&o.onUnblock(n,o),l=(i=x(document.body)).width(),s=i[0].style.width,i.width(l-1).width(l),i[0].style.width=s)}function W(e,t,o){var n,i=t==window,l=x(t);!e&&(i&&!T||!i&&!l.data("blockUI.isBlocked"))||(l.data("blockUI.isBlocked",e),i&&o.bindEvents&&(!e||o.showOverlay)&&(n="mousedown mouseup keydown keypress keyup touchstart touchend touchmove",e?x(document).on(n,o,s):x(document).off(n,s)))}function s(e){if("keydown"===e.type&&e.keyCode&&9==e.keyCode&&T&&e.data.constrainTabKey){var t=!e.shiftKey&&e.target===M[M.length-1],o=e.shiftKey&&e.target===M[0];if(t||o)return setTimeout(function(){j(o)},10),!1}var n=e.data,i=x(e.target);return i.hasClass("blockOverlay")&&n.onOverlayClick&&n.onOverlayClick(e),0<i.parents("div."+n.blockMsgClass).length||0===i.parents().children().filter("div.blockUI").length}function j(e){var t;!M||(t=M[!0===e?M.length-1:0])&&t.focus()}function H(e,t){return parseInt(x.css(e,t),10)||0}jQuery.migrateDeduplicateWarnings=e}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();