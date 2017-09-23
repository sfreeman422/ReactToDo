import React from 'react';

import Entry from './Children/Entry.jsx';
import List from './Children/List.jsx';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          id: 1,
          message: 'Do Something',
          pomodoro: true,
        },
        {
          id: 2,
          message: 'Do something else',
          pomodoro: false,
        },
        {
          id: 3,
          message: 'Think about life',
          pomodoro: false,
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
