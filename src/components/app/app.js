import React , {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './index.css';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      todoData : [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
      ]
    }
  }
  
onDeleted = (id) => {
  this.setState(({todoData}) => {
    const idx = todoData.findIndex((el) => el.id === id)
    console.log(idx);
    return {
      todoData: [...todoData.slice(0,idx),...todoData.slice(idx+1)]
    }
  })
}


  render() {
    return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={this.state.todoData} onDeleted = {this.onDeleted} />
    </div>
  );
  }
};

