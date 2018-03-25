const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

import { slide as Menu } from 'react-burger-menu'

class Main extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
  render () {

    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

$( document ).ready(function() {
  ReactDOM.render(<Main />, document.getElementById('main-menu'));
});
