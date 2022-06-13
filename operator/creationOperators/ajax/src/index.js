"use strict";
// How to run this code
// 0. install webpack and webpack-cli
// 1. from terminal: tsc to compile ajax.ts to ajax.js under /dist
// 2. move ajax.js from /dist to /src and rename it to index.js
// 3. from terminal: npx webpack
// 4. create index.html and put main.js in the script tag
Object.defineProperty(exports, "__esModule", { value: true });
var ajax_1 = require("rxjs/ajax");
var rxjs_1 = require("rxjs");
var obs$ = (0, ajax_1.ajax)('https://api.github.com/users?per_page=5').pipe((0, rxjs_1.map)(function (userResponse) { return console.log('users: ', userResponse); }), (0, rxjs_1.catchError)(function (error) {
    console.log('error: ', error);
    return (0, rxjs_1.of)(error);
}));
obs$.subscribe({
    next: function (value) { return console.log(value); },
    error: function (err) { return console.log(err); }
});
//# sourceMappingURL=ajax.js.map