import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const List = props => (
  <div className="row" id="list">
    {(props.tasks).map((task, taskIndex) => (
      <Task taskMessage={task.message} dueDate={task.dueDate} key={task.id} />
    ))}
  </div>
);

export default List;
