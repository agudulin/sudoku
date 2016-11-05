# $Uↁ▒KU

> The Affinitas frontend challenge

Simple sudoku GUI

![Screenshot](/screenshot.png)

## Quick start

```sh
yarn install   # npm install
yarn start     # npm start

yarn test      # npm test
```

## Project structure

```js
├── server.js                  // webpack dev server with hot reloading
├── webpack.config.js          // config file for webpack
└── src
    ├── app                    // main SPA container
    │   ├── index.css
    │   └── index.js
    ├── common
    │   ├── configureStore.js
    │   ├── general            // general redux state
    │   │   ├── actions.js
    │   │   ├── reducer.js     // initial state description and state's reducers
    │   └── reducer.js         // combination of all possible reducers
    ├── components             // small parts of the app
    │   ├── board
    │   ├── spinner
    │   │   ├── __snapshots__  // jest snapshots (http://facebook.github.io/jest/docs/tutorial-react.html#snapshot-testing)
    │   │   ├── index.spec.js
    │   │   ├── index.js
    │   │   └── index.css
    │   └── statusPane
    └── index.js               // entry point of the app, mounts the app to DOM
```

## License

MIT © [Alexander Gudulin](http://gudulin.com)
