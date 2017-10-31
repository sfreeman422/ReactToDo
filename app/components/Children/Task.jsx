import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: '',
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }
  handleFocus(event) {
    console.log(`You have clicked on ${event.target}`);
  }
  handleMouseOver(event) {
    console.log(`You have clicked on ${event.target.id}`);
  }
  render() {
    return (
      <div className="row col-xs-offset-4 col-xs-4" id="taskContainer" onMouseOver={this.handleMouseOver}>
        <div className="col-xs-12" id="task">
          <div className="col-xs-10" id="taskMessage">
            <p id="taskName">{this.props.taskMessage}</p>
            <p id="taskDueDate">{this.props.dueDate}</p>
          </div>
          <div className="col-xs-2" id="clock">
            <i className="fa fa-clock-o" aria-hidden="true" />
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
