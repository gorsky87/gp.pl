"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
require('create-react-class');
require("./scroll");
require("./menu");

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}


$( document ).ready(function() {
  ReactDOM.render(<Welcome />, document.getElementById('root'));

  ReactDOM.render(<MMenu />, document.getElementById('main-menu'));
});

