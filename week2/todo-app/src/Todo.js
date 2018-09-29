import React from 'react';

class Todo extends React.Component {
  render() {
    const todo = this.props.todo;

    return(
      <li>
        {this.viewBox(todo)}
        <span>{todo.description + ', '}</span>
        <span>{todo.deadline}</span>
      </li>
    );
  }

  viewBox(item){
    if(item.done){
      return <input type="checkbox" defaultChecked />;
    }else{
      return <input type="checkbox" />;
    }
  }
}

export default Todo;
