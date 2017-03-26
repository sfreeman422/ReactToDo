import React from 'react'
import Task from './Task'

export default class List extends React.Component{
	constructor(){
		super();
		this.state ={
			tasks: ["Do something", "Do something else", "Think about life", "Contemplate your decisions", "Remember it all doesnt matter"]
		}
	}
	render(){
		return (
			<div className="row" id="list">
			{this.state.tasks.map((task, i)=>{
				return (
					<Task task={task} key={i} />
				)
			})}
			</div>
		)
	}
}