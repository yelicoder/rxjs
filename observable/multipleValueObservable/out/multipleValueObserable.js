"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var foo = new rxjs_1.Observable(function (subscriber) {
    console.log('Hello');
    subscriber.next(42);
    subscriber.next(100); // "return" another value
    subscriber.next(200); // "return" yet another
});
console.log('before');
foo.subscribe(function (x) {
    console.log(x);
});
console.log('after');
//# sourceMappingURL=multipleValueObserable.js.map