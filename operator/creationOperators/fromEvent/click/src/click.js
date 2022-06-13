"use strict";
// How to run this code
// 1. from terminal: tsc 
// 2. from terminal: npx webpack
// 3. go to  /dist create index.html and put main.js in the script tag
// 4. open index.html
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var clicks = (0, rxjs_1.fromEvent)(document, 'click');
clicks.subscribe(function (x) { return console.log(x); });
// Results in:
// MouseEvent object logged to console every time a click
// occurs on the document.
//# sourceMappingURL=click.js.map