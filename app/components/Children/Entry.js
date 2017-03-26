import React from 'react'

export default class Entry extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
		<div className="row" id="entry">
			<input type="text" data-toggle="collapse" data-target="#options" aria-expanded="false" aria-controls="collapse" />
			<div className="collapse" id="options">
				<div className="col-xs-offset-5 col-xs-2 text-center well">
					<p>Use Pomodoro?</p> 
					<p>Due date?</p>
					<p>Other Options</p>
				</div>
			</div>
		</div>
			) 
	}
}