var React = require('react');
var AppActions = require('../actions/AppActions');
var Calculator = require('./Calculator');
var Resistor = require('./Resistor');

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			bandColor1: "0",
			bandColor2: "0",
			bandColor3: "0",
			bandColor4: "0",
			value: 		''
		}
	}

	changeColor(color, colorID){
		switch(colorID){
		case "1":
			this.setState({bandColor1: color});
			break;
		case "2":
			this.setState({bandColor2: color});
			break;
		case "3":
			this.setState({bandColor3: color});
			break;
		case "4":
			this.setState({bandColor4: color});
			break;
		}
	}

	setValue(value){
		this.setState({value: value});
	}

	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<Resistor {...this.state} setValue={this.setValue.bind(this)} />
						<Calculator {...this.state} changeColor={this.changeColor.bind(this)} setValue={this.setValue.bind(this)}/>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = App