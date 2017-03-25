import React from 'react'

export default class Task extends React.Component{
	constructor(props){
		super(props);
		console.log(this.props);
	}
	render(){
		return <div className="task">
			<p>WTF?</p>
		</div>
	}
}