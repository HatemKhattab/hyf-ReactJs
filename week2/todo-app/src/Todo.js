import React from 'react';

class Todo extends React.Component {
  render() {
    const todo = this.props.todo;

    return(
      <li>
        <span>{todo.description + ', '}</span>
        <span>{todo.date + ', '}</span>
      </li>
    );
  }
}

export default Todo;
