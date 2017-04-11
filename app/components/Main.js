import React from 'react';

import Entry from './Children/Entry'
import List from './Children/List'

export default class Main extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
		<div className="container">
			<div className="row">
				<div className="col-xs-12">
					<h1 id="title">Pomotodo</h1>
					<p id="message">A Pomodoro Based To Do List</p>
					<Entry />
					<List />
				</div>
			</div>
		</div>
			) 
	}
}