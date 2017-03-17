import React, { Component } from 'react';

export default class App extends Component {
	updateName = (event) => {
		console.log(event.target.value);
		this.props.changeName(event.target.value);
	} 
	render = () => {
		return (
			<div>
				<span>App - {this.props.name} </span><br />
				<input onChange={this.updateName} value={this.props.name} />
			</div>
		);
	}
}
