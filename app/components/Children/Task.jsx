import React from 'react';
import PropTypes from 'prop-types';

const Task = props => (
  <div className="row col-xs-offset-4 col-xs-4">
    <div className="panel" id="task">
      <p className="taskName">{props.taskMessage}</p>
    </div>
  </div>
);

Task.defaultPropTypes = {
  taskMessage: '',
};

Task.propTypes = {
  taskMessage: PropTypes.string,
};

export default Task;
