import React from 'react';
import Entry from './Children/Entry';
import List from './Children/List';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          id: 1,
          message: 'Do Something',
          pomodoro: true,
          dueDate: '04/04/04',
        },
        {
          id: 2,
          message: 'Do something else',
          pomodoro: false,
          dueDate: '05/05/05',
        },
        {
          id: 3,
          message: 'Think about life',
          pomodoro: false,
          dueDate: '06/06/06',
        },
        {
          id: 4,
          message: 'Really really really really really long task name that is kinda absurd but people might do it so might as well account for it.',
          pomodoro: true,
          dueDate: '07/07/07',
        },
      ],
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1 id="title">Pomotodo</h1>
            <p id="message">A Pomodoro Based To Do List</p>
            <Entry />
            <List tasks={this.state.tasks} />
          </div>
        </div>
      </div>
    );
  }
}
