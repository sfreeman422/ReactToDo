import React from 'react';
import {createStore} from 'redux';

export default class Main extends React.Component{
	constructor(){
		super();
		this._handleClick = this._handleClick.bind(this);
	}
	_handleClick(){
		console.log("click");
	}
	render(){
		return <div className="container">
			<div className="col-xs-12">
				<p>Stuff N Things</p>
			</div>
		</div>
	}
}