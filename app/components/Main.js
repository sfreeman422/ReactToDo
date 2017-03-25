import React from 'react';
import {createStore} from 'redux';
import Entry from './Children/Entry'
import List from './Children/List'

export default class Main extends React.Component{
	constructor(){
		super();
	}
	render(){
		return <div className="container">
			<div className="col-xs-12">
				<Entry />
				<List />
			</div>
		</div>
	}
}