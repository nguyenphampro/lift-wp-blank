/*!
 * cm-resize v1.0.1
 * https://github.com/Sphinxxxx/cm-resize
 *
 * Copyright 2017-2018 Andreas Borgen (https://github.com/Sphinxxxx)
 * Released under the MIT license.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.cmResize=t()}(this,function(){"use strict";return document.documentElement.firstElementChild.appendChild(document.createElement("style")).textContent=".cm-resize-handle{display:block;position:absolute;bottom:0;right:0;z-index:99;width:18px;height:18px;background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0,0 16,16'%3E%3Cpath stroke='gray' stroke-width='2' d='M-1,12 l18,-18 M-1,18 l18,-18 M-1,24 l18,-18 M-1,30 l18,-18'/%3E%3C/svg%3E\") center/cover;box-shadow:inset -1px -1px 0 0 silver;cursor:nwse-resize}",function(r,e){var t,c=(e=e||{}).minWidth||200,l=e.minHeight||100,s=!1!==e.resizableWidth,d=!1!==e.resizableHeight,n=e.cssClass||"cm-resize-handle",o=r.display.wrapper,i=e.handle||((t=o.appendChild(document.createElement("div"))).className=n,t),a=o.querySelector(".CodeMirror-vscrollbar"),u=o.querySelector(".CodeMirror-hscrollbar");function h(){e.handle||(a.style.bottom="18px",u.style.right="18px")}r.on("update",h),h();var f=void 0,m=void 0;return function(e){var t=Element.prototype;t.matches||(t.matches=t.msMatchesSelector||t.webkitMatchesSelector),t.closest||(t.closest=function(e){var t=this;do{if(t.matches(e))return t;t="svg"===t.tagName?t.parentNode:t.parentElement}while(t);return null});var l=(e=e||{}).container||document.documentElement,n=e.selector,o=e.callback||console.log,i=e.callbackDragStart,a=e.callbackDragEnd,r=e.callbackClick,c=e.propagateEvents,s=!1!==e.roundCoords,d=!1!==e.dragOutside,u=e.handleOffset||!1!==e.handleOffset,h=null;switch(u){case"center":h=!0;break;case"topleft":case"top-left":h=!1}var f=void 0,m=void 0,p=void 0;function v(e,t,n,o){var i=e.clientX,a=e.clientY;function r(e,t,n){return Math.max(t,Math.min(e,n))}if(t){var c=t.getBoundingClientRect();i-=c.left,a-=c.top,n&&(i-=n[0],a-=n[1]),o&&(i=r(i,0,c.width),a=r(a,0,c.height)),t!==l&&(null!==h?h:"circle"===t.nodeName||"ellipse"===t.nodeName)&&(i-=c.width/2,a-=c.height/2)}return s?[Math.round(i),Math.round(a)]:[i,a]}function g(e){e.preventDefault(),c||e.stopPropagation()}function w(e){(f=n?n instanceof Element?n.contains(e.target)?n:null:e.target.closest(n):{})&&(g(e),m=n&&u?v(e,f):[0,0],p=v(e,l,m),s&&(p=p.map(Math.round)),i&&i(f,p))}function b(e){if(f){g(e);var t=v(e,l,m,!d);o(f,t,p)}}function E(e){if(f){if(a||r){var t=v(e,l,m,!d);r&&p[0]===t[0]&&p[1]===t[1]&&r(f,p),a&&a(f,t,p)}f=null}}function x(e){E(C(e))}function M(e){return void 0!==e.buttons?1===e.buttons:1===e.which}function k(e,t){1===e.touches.length?t(C(e)):E(e)}function C(e){var t=e.targetTouches[0];return t||(t=e.changedTouches[0]),t.preventDefault=e.preventDefault.bind(e),t.stopPropagation=e.stopPropagation.bind(e),t}l.addEventListener("mousedown",function(e){M(e)&&w(e)}),l.addEventListener("touchstart",function(e){k(e,w)}),window.addEventListener("mousemove",function(e){f&&(M(e)?b(e):E(e))}),window.addEventListener("touchmove",function(e){k(e,b)}),window.addEventListener("mouseup",function(e){f&&!M(e)&&E(e)}),l.addEventListener("touchend",x),l.addEventListener("touchcancel",x)}({container:i.offsetParent,selector:i,callbackDragStart:function(e,t){f=t,m=[o.clientWidth,o.clientHeight]},callback:function(e,t){var n=t[0]-f[0],o=t[1]-f[1],i=s?Math.max(c,m[0]+n):null,a=d?Math.max(l,m[1]+o):null;r.setSize(i,a)}}),i}});

jQuery(document).ready(function () {
	var editor = CodeMirror.fromTextArea(document.getElementById("code_editor_page_head"), {
		lineNumbers: true,
		styleActiveLine: true,
		matchBrackets: true,
		mode: "text/x-scss",
		viewportMargin: 50
	});
	editor.setOption("theme", 'monokai');
	editor.setSize("100%", 300);
	cmResize(editor, {
		minHeight: 300,
		resizableWidth:  false, 
		resizableHeight: true,
		cssClass: 'cm-resize-handle',
	});
})

function liftCompilerkeyDown(e) {
	var deny = "!@#$%^&*()+=[]\\\';,./{}|\":<>?";
	var e = window.event || e;
	var key = e.keyCode;
	if (key == 32) {
		e.preventDefault();
	}
	if (e.key.match(/[A-Z]/)) {
		e.preventDefault();
	};
	for (var i = 0; i < deny.length; i++) {
		if (deny.charAt(i) === e.key) {
			e.preventDefault();
		}
	}
}