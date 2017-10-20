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
    console.log(`You have moused over ${event.target.id}`);
  }
  render() {
    return (
      <div className="row col-xs-offset-4 col-xs-4" id="taskContainer">
        <div className="panel" id="task" onMouseOver={this.handleMouseOver}>
          <p className="taskName" id="taskName">{this.props.taskMessage}</p>
        </div>
      </div>
    );
  }
}

export default Task;
