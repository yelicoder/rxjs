
// How to run this code
// 0. install webpack and webpack-cli
// 1. from terminal: tsc 
// 2. got to /src, rename ajax.js to index.js
// 3. from terminal: npx webpack
// 4. create index.html and put main.js in the script tag
// 5. open index.html

import { ajax } from 'rxjs/ajax';
import { map, catchError, of } from 'rxjs';

const obs$ = ajax('https://api.github.com/users?per_page=5').pipe(
  map(userResponse => console.log('users: ', userResponse)),
  catchError(error => {
    console.log('error: ', error);
    return of(error);
  })
);

obs$.subscribe({
  next: value => console.log(value),
  error: err => console.log(err)
});