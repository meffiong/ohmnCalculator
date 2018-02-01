var React = require('react');
var AppActions = require('../actions/AppActions');


var Resistor = React.createClass({

	render: function(){
		console.log(this.props.value);
		if(Array.isArray(this.props.value)){
			return(
				<div>
					<div className="resistor">
						<h2 className="ohmValue">{this.props.value[0]}</h2>
						<div>
							<span className="ohmValue">{this.props.value[1]} - </span>
							<span className="ohmValue">{this.props.value[2]}</span>
						</div>
					</div>	
					<button className="btn btn-primary" onClick={this.onClick}>Calculate</button>
				</div>
			);//
		}else{
			return(
				<div>
					<div className="resistor">
						<h2 className="ohmValue"></h2>
					</div>	
					<button className="btn btn-primary" onClick={this.onClick}>Calculate</button>
				</div>
			);
		}
		
	},
//
	onClick: function(){
		value = AppActions.calculateOhmValue(this.props.bandColor1, this.props.bandColor2, this.props.bandColor3, this.props.bandColor4);
		this.props.setValue(value);

	}
	
});

module.exports = Resistor;