var React = require('react');
var AppActions = require('../actions/AppActions');
var Color = require('./Color');


var ColorSelect = React.createClass({

	render: function(){
		return(
			<div className="selector">
				<Color colorID={this.props.colorID} color="pink" changeColor= {this.props.changeColor} />
				<Color colorID={this.props.colorID} color="silver" changeColor= {this.props.changeColor}/>
				<Color colorID={this.props.colorID} color="gold" changeColor= {this.props.changeColor}/>
				<Color colorID={this.props.colorID} color="black" changeColor= {this.props.changeColor}/>
				<Color colorID={this.props.colorID} color="brown" changeColor= {this.props.changeColor}/>
				<Color colorID={this.props.colorID} color="red" changeColor= {this.props.changeColor}/>
				<Color colorID={this.props.colorID} color="orange" changeColor= {this.props.changeColor}/>
				<Color colorID={this.props.colorID} color="yellow" changeColor= {this.props.changeColor}/>
				<Color colorID={this.props.colorID} color="green" changeColor= {this.props.changeColor}/>
				<Color colorID={this.props.colorID} color="blue" changeColor= {this.props.changeColor}/>
				<Color colorID={this.props.colorID} color="violet" changeColor= {this.props.changeColor}/>
				<Color colorID={this.props.colorID} color="grey" changeColor= {this.props.changeColor}/>
				<Color colorID={this.props.colorID} color="white" changeColor= {this.props.changeColor}/>
			</div>
		);
	}
});

module.exports = ColorSelect;