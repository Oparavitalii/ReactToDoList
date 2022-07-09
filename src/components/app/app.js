import React , {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item';

import './index.css';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      done: false,
      important: false,
      todoData : [
        this.createTodoItem("Drink coffee"),
        this.createTodoItem("Make awesome app"),
        this.createTodoItem("Find work")
      ]
    }
  }
  
  createTodoItem = (label) => {
    return {
      label,
      important: false,
      done:false,
      id:this.idCount++
    }
  }
onDeleted = (id) => {
  this.setState(({todoData}) => {
    const idx = todoData.findIndex((el) => el.id === id)
    return {
      todoData: [...todoData.slice(0,idx),...todoData.slice(idx+1)]
    }
  })
}
idCount = 100;
addItem = (label) => {
  this.setState(({todoData}) => {
    console.log(this.idCount);
    const addElement = this.createTodoItem(label)
    return {
      todoData: [...todoData,addElement]
    }
  })
}

onToggleProperty(arr,id,propName) {
 const idx = arr.findIndex((el) => el.id === id);
 const oldItem = arr[idx];
 const newItem = {...oldItem,[propName] : !arr[propName]}

 return [...arr.slice(0,idx),newItem,...arr.slice(idx+1)]
}
onToggleImportant = (id) => {
  this.setState(({todoData}) => {
    return {
      todoData : this.onToggleProperty(todoData,id,"important")
    }
  })
}

onToggleDone = (id) => {
  this.setState(({todoData}) =>{
    return {
      todoData: this.onToggleProperty(todoData,id,'done')
    }

  })

}

  render() {
    const doneCount = this.state.todoData.filter((el) => el.done).length;
    const activeCount = this.state.todoData.length - doneCount;
    return (
    <div className="todo-app">
      <AppHeader toDo={activeCount} done={doneCount} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={this.state.todoData}  
      onDeleted = {this.onDeleted} 
      onToggleDone = {this.onToggleDone}
      onToggleImportant = {this.onToggleImportant}
      />
      <AddItem addItem = {this.addItem}/>
    </div>
  );
  }
}