"use strict";function urldecode(e){return decodeURIComponent((e+"").replace(/%(?![\da-f]{2})/gi,function(){return"%25"}).replace(/\+/g,"%20"))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=urldecode;