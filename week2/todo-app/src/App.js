import React from 'react';
import Todo from './Todo'

class App extends React.Component {

  render(){
    const todos = [
      {description: 'Get out of bed', date: 'Wed Sep 13 2017'},
      {description: 'Brush teeth', date: 'Thu Sep 14 2017'},
      {description: 'Eat breakfast', date: 'Fri Sep 15 2017'}
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

export default App;
