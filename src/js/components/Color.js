var React = require('react');
var AppActions = require('../actions/AppActions');


var Color = React.createClass({

	render: function(){
		if( ((this.props.colorID == 1 || this.props.colorID == 2) && this.props.color == "pink") || ((this.props.colorID == 1 || this.props.colorID == 2) && this.props.color == "silver") || ((this.props.colorID == 1 || this.props.colorID == 2) && this.props.color == "gold") || (this.props.colorID == 1 && this.props.color == "black")){
			return(
				<div></div>
			)
		}else{
			return(
				<div className="color" onClick={this._onClick}>
					<div className={this.props.color}></div>
				</div>
				)
		}

	},
	_onClick: function(){
		this.props.changeColor(this.props.color, this.props.colorID);
	}
	
});

module.exports = Color;