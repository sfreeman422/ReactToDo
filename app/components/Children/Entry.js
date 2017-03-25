import React from 'react'

export default class Entry extends React.Component{
	constructor(){
		super();
	}
	render(){
		return <div className="entry">
			<input type="text" data-toggle="collapse" data-target="#options" aria-expanded="false" aria-controls="collapse" />
			<div className="collapse" id="options">
				<div className="col-xs-offset-4 col-xs-4 text-center well">
					<p>Use Pomodoro?</p> 
					<p>Due date?</p>
					<p>Other Options</p>
				</div>
			</div>
		</div>
	}
}