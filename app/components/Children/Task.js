import React from 'react'

export default class Task extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
		<div className="row" id="task">
			<p>{this.props.task}</p>
		</div>
		)
	}
}