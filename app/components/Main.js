import React from 'react';
import {createStore} from 'redux';
import Entry from './Children/Entry'

export default class Main extends React.Component{
	constructor(){
		super();
	}
	render(){
		return <div className="container">
			<div className="col-xs-12">
				<Entry />
			</div>
		</div>
	}
}