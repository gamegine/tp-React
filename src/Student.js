import React, {Component} from 'react';

export default class Student extends Component {
	constructor()
	{
		super();
		this.fonctionAuClic = this.fonctionAuClic.bind(this);
	}
fonctionAuClic() {console.log(this.props.name);}
	render() {
		return(<div onClick={this.fonctionAuClic}> Bonjour {this.props.name} ! </div>);
	}
}