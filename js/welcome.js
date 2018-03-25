const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}


$( document ).ready(function() {
  ReactDOM.render(<Welcome />, document.getElementById('root'));
});

