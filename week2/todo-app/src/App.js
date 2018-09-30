import React from 'react';
import Todo from './Todo'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      list: [
        {
          "id": 1,
          "description": "Get out of bed",
          "deadline": "2017-09-11",
          "done": true
        },
        {
          "id": 2,
          "description": "Brush teeth",
          "deadline": "2017-09-10",
          "done": false
        },
        {
          "id": 3,
          "description": "Eat breakfast",
          "deadline": "2017-09-09",
          "done": false
        }
      ]
    };
  }

  render(){
    return(
      <div>
        <h1>Todo App</h1>
        <ul>
          {this.state.list.map(item => <Todo todo={item} key={item.id}  />)}
        </ul>
      </div>
    );
  }

  // TODO: toogle the done attribute depends on id

  toggleTodo(id){
    this.setState();
  }
}

export default App;
