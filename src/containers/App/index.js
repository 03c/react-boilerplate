import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectAppName } from './ducks';
import { changeName } from './ducks';

export class App extends Component {
	render = () => {
		return (
			<div>
				<span>App - {this.props.name} </span><br />
				<input onChange={this.props.onChangeName} value={this.props.name} />
			</div>
		);
	}
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeName: (evt) => dispatch(changeName(evt.target.value)),
  };
}

const mapStateToProps = createStructuredSelector({
  name: makeSelectAppName(),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);