"use strict";function getLevelFromOption(e){var t,r=0;return!e.className||(t=e.className.match(/^level-(\d+)/))&&(r=parseInt(t[1],10)+1),r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=getLevelFromOption;