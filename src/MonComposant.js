import React, {Component} from 'react';

export default class MonComposant extends Component {
	fonctionAuClic() {
		console.log('clic');
	}
	render() {
		return(<p onClick={this.fonctionAuClic.bind(this)}> {this.props.maprop} </p>);
	}
}