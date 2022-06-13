// How to run this code
// 1. from terminal: tsc 
// 2. from terminal: npx webpack
// 3. go to  /dist create index.html and put main.js in the script tag
// 4. open index.html


import { fromEvent } from 'rxjs';

const clicks = fromEvent(document, 'click');
clicks.subscribe(x => console.log(x));

// Results in:
// MouseEvent object logged to console every time a click
// occurs on the document.