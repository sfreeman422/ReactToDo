import React from 'react';

export default class Entry extends React.Component {
  constructor() {
    super();
    this.addNewTask = this.addNewTask.bind(this);
  }
  addNewTask() {
    // This function should take in a task with the required options 
    // and then make an ajax request to the server to store this in the DB. 
  }
  render() {
    return (
      <div className="row" id="entry">
        <input type="text" id="inputArea" />
        <div className="collapse" id="options">
          <div className="col-xs-offset-5 col-xs-2 text-center well">
            <p>Use Pomodoro?</p>
            <p>Due date?</p>
            <p>Other Options</p>
            <button id="addNewTask">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}
