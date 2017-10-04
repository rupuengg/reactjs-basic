# React Js
## React Js Sample Project For Learning
###### First Install My favorite editor
- Atom Editor
- install package 'atom-live-server'
- platformio-ide-terminal
###### Initialize NPM
> Run **npm init**
###### Install all dependency packages
> Run **npm install react react-dom --save-dev**
> Run **npm install webpack webpack-dev-server babel-core babel-loader babel-preset-es2015 babel-preset-stage-2 babel-preset-react --save-dev**
###### Make Webpack config file
```
// Require Path
var path = require('path');

// Set Path For Dist and Src
var DIST_PATH = path.resolve(__dirname, 'dist');
var SRC_PATH = path.resolve(__dirname, 'src');

var config = {
  // Set Entry Point
  entry: SRC_PATH + '/app/index.js',
  // Set Output Point
  output: {
    path: DIST_PATH + '/app',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  // Set modules
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: SRC_PATH,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }
    ]
  }
};

module.exports = config;
```
###### Make React Component
```
import React from "react";
import { render } from 'react-dom';

class App extends React.Component{
  render(){
    return (
      <div className="container">
        <div className="col-xs-10 col-xs-offset-1">
          <h1>Hello!</h1>
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));
```
