import React from 'react'

export default class Entry extends React.Component{
	constructor(){
		super();
	}
	render(){
		return <div className="entry">
			<input type="text" data-toggle="collapse" data-target="#options" aria-expanded="false" aria-controls="collapse" />
			<div className="collapse" id="options">
				<div className="well">
					Options go here. 
				</div>
			</div>
		</div>
	}
}