import React from 'react'

export default class Task extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="row col-xs-offset-4 col-xs-4">
				<div className="panel" id="task">
					<p className="taskName">{this.props.task}</p>
				</div>
			</div>
		)
	}
}