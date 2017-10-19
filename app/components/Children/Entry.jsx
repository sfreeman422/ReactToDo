import React from 'react';

export default class Entry extends React.Component {
  constructor() {
    super();
    this.state = {
      taskName: 'Enter your task here',
      pomodoro: false,
      dueDate: false,
      taskEntered: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    if (event.target.id === 'inputArea') {
      this.setState({
        taskName: event.target.value,
      });
    } else if (event.target.id === 'dueDateTemp') {
      this.setState({
        dueDate: !this.state.dueDate,
      });
    } else if (event.target.id === 'pomodoro') {
      this.setState({
        pomodoro: !this.state.pomodoro,
      });
    }
  }
  handleSubmit(event) {
    console.log('Making a call to /apis/tasks. POST');
    // If the response is a 200, then we set state. 
    // Report with the console.log what happened.
    this.setState({
      taskEntered: true,
    });
    console.log(`Task would have been: ${this.state.value}`);
    event.preventDefault();
  }
  render() {
    return (
      <div className="row" id="entry">
        <input
          type="text"
          id="inputArea"
          placeholder={this.state.taskName}
          taskname={this.state.taskName}
          onChange={this.handleChange}
        />
        <div className="collapse" id="options">
          <div className="col-xs-offset-5 col-xs-2 text-center well">
            <input
              type="checkbox"
              id="dueDateTemp"
              value="Due date?"
              onChange={this.handleChange}
            />
            <input
              type="checkbox"
              id="pomodoro"
              value="Pomodoro?"
              onChange={this.handleChange}
            />
            <button type="submit" value="Submit" />
          </div>
        </div>
      </div>
    );
  }
}
