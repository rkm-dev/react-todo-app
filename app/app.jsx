var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//app css
require('style!css!sass!appStyles');

ReactDOM.render(
   <p>Bolierplate for react project</p>,
  document.getElementById('app')
);
