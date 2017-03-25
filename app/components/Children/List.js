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
		return <div className="list">
			<Task tasks={this.state.tasks} />
		</div>
	}
}