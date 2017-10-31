import React from 'react';

export default class Entry extends React.Component {
  constructor() {
    super();
    this.state = {
      taskName: '',
      pomodoro: false,
      dueDate: false,
      placeHolder: 'Enter your task here.',
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
    event.preventDefault();
    console.log('Making a call to /apis/tasks. POST');
    // If the response is a 200, then we set state. 
    // Report with the console.log what happened.
    this.setState({
      taskName: '',
      pomodoro: false,
      dueDate: false,
    });
    fetch('http://localhost:3000/api/tasks', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        taskName: this.state.taskName,
        dueDate: '04/04/04',
        timeSpent: 0,
        taskOwner: 1,
      }),
    }).then(response => console.log(response));
  }
  render() {
    return (
      <div className="row" id="entry">
        <input
          type="text"
          id="inputArea"
          placeholder={this.state.placeHolder}
          value={this.state.taskName}
          onChange={this.handleChange}
        />
        <div className="collapse" id="options">
          <div className="col-xs-offset-5 col-xs-2 text-center well">
            <label> Due Date <input
              type="checkbox"
              id="dueDateTemp"
              onChange={this.handleChange}
              checked={this.state.dueDate}
            />
            </label>

            <label> Pomodoro <input
              type="checkbox"
              id="pomodoro"
              onChange={this.handleChange}
              checked={this.state.pomodoro}
            /></label>
            <br />
            <button type="submit" id="submit" onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}
