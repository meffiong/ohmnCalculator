var React = require('react');
var AppActions = require('../actions/AppActions');
var ColorSelect = require('./ColorSelect');


var Calculator = React.createClass({

	render: function(){
		return(
			<div className="calculatorBody">
				<label>Sig Fig 1</label> <ColorSelect colorID="1" changeColor={this.props.changeColor} />
				<label>Sig Fig 2</label> <ColorSelect colorID="2" changeColor={this.props.changeColor} />
				<label>Multiplier</label> <ColorSelect colorID="3" changeColor={this.props.changeColor} />
				<label>Tolerance</label> <ColorSelect colorID="4" changeColor={this.props.changeColor} />
			</div>
		);
	}
});

module.exports = Calculator;