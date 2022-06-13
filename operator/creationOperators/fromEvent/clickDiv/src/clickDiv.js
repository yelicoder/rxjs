"use strict";
// How to run this code
// 1. from terminal: tsc 
// 2. from terminal: npx webpack
// 3. go to  /dist create index.html and put main.js in the script tag
// 4. open index.html
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var clicksInDocument = (0, rxjs_1.fromEvent)(document, 'click', true); // note optional configuration parameter
// which will be passed to addEventListener
var clicksInDiv = (0, rxjs_1.fromEvent)(someDivInDocument, 'click');
clicksInDocument.subscribe(function () { return console.log('document'); });
clicksInDiv.subscribe(function () { return console.log('div'); });
// By default events bubble UP in DOM tree, so normally
// when we would click on div in document
// "div" would be logged first and then "document".
// Since we specified optional `capture` option, document
// will catch event when it goes DOWN DOM tree, so console
// will log "document" and then "div".
//# sourceMappingURL=clickDiv.js.map