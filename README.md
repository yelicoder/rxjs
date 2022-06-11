# rxjs

## to run rxjs code using tsc

npm install -g typescript

mkdir asyncObservable

cd asyncObservable

npm  install rxjs

code .

add asyncObservable.ts

add tsconfig.json

{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "outDir": "dist",
        "sourceMap": true,
        "lib": ["es2017", "dom"]
    }
}

tsc

set breakpoint in asyncObservable.ts

F5 --> node.js


## To run rxjs code using ts-node

npm install -g ts-node typescript '@types/node'

mkdir click

cd click

npm install rxjs

code .

add click.ts

ts-node click.ts


## to run rxjs code using node.js

mkdir click

cd click

npm init -y

npm install rxjs webpack webpack-cli

code .

create /src under /click

add index.js under /src

npx webpack

cd dist

node main.js

## To run existing project

cd click

npx webpack

cd dist

node main.js

## To run rxjs code in chrome

mkdir click

cd click

npm init -y

npm install rxjs webpack webpack-cli

code .

create /src and /dist under /click

add index.html under /dist

<script src="main.js">

add index.js under /src

npx webpack

open index.html in browser

## To run existing project

cd click

npx webpack

cd dist

node main.js
