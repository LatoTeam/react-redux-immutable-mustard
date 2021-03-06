# react-redux-surreal-mustard

A simple React + Redux application, complete with DevTools.
The primary goal of this project is to remain as **unopinionated** as possible. Its purpose is to provide a set of tools intended to make front-end development robust and easy.

## Features
* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [redux-thunk](https://github.com/gaearon/redux-thunk)
* [react-router](https://github.com/rackt/react-router)
* [react-router-redux](https://github.com/rackt/react-router-redux)
* [PostCSS](https://github.com/postcss/postcss)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [eslint](http://eslint.org)

## Development

#### Developer Tools

**We recommend using the [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).**
Using the chrome extension allows your monitors to run on a separate thread and affords better performance and functionality. It comes with several of the most popular monitors, is easy to configure, filters actions, and doesn’t require installing any packages.

### Routing
We use `react-router` [route definitions](https://github.com/reactjs/react-router/blob/master/docs/API.md#plainroute) (`<route>/index.js`) to define units of logic within our application.

## Deployment
Out of the box, this starter kit is deployable by serving the `~/dist` folder generated by `npm run dist` (make sure to specify your target `NODE_ENV` as well).

### Styles
We use SASS to compile our CSS. After being imported, styles will be processed with [PostCSS](https://github.com/postcss/postcss) for minification and autoprefixing, and will be extracted to a `.css` file during production builds.

## License

MIT
