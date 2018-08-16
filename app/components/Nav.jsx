var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
	return(
		<div className="top-bar">
			<div className="top-bar-left">
				<ul className="menu">
					<li className="menu-text">
						ToDo App
					</li>
				</ul>
			</div>
			<div className="top-bar-right">
				<ul className="menu">
					<li className="menu-text">
						Created By <a href="#" target="_blank">RKM</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

module.exports = Nav;