import React from 'react';
import ReactDom from 'react-dom';
import './index.css'


class App extends React.Component {

  render(){
    const todos = [
      {description: 'Get out of bed', date:'Get out of bed'},
      {description: 'Brush teeth', date:'Thu Sep 14 2017'},
      {description: 'Eat breakfast', date:'Fri Sep 15 2017'}
    ];
    return(
      <div>
        <h1>Todo App</h1>
        <ul>
          {todos.map(item => <Todo todo={item} key={item.date}  />)}
        </ul>
      </div>
    );
  }
}

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

ReactDom.render(
  <App />,
  document.getElementById('root')
);
