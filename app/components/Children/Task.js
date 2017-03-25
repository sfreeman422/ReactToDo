import React from 'react'

export default class Task extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
		<div className="row" id="task">
			<p>WTF?</p>
			<p>{this.props.tasks}</p>
		</div>
		)
	}
}