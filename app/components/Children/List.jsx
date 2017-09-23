import React from 'react';
import Task from './Task.jsx';
import PropTypes from 'prop-types';

const List = props => (
  <div className="row" id="list">
    {(props.tasks).map(task => (
      <Task taskMessage={task.message} key={task.id} />
    ))}
  </div>
);

List.propTypes = {
  tasks: PropTypes.Array,
};

List.defaultPropTypes = {
  tasks: [],
};
export default List;
