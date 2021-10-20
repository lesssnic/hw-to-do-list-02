
import './App.css';
import React from 'react';
//import CustomInput from './components/CustomInput/CustomInput';
import List from './components/List/List';
import Task from './components/Task/Task';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tasksArr: [],
      newTask: ''
    }
    this.changeInput = this.changeInput.bind(this);
    this.addTask = this.addTask.bind(this);

    
  }
  changeInput(e){
    this.setState({
      newTask: e.target.value
    })
  }
  addTask(){
      this.setState({
        tasksArr : [...this.state.tasksArr, {
                        text : this.state.newTask,
                        done : false
                      }]
      })
      this.setState({
        newTask: ''
      })
  }
  


  render(){
    const {tasksArr, newTask} = this.state;
    return (
      <>
        <input type="text" value = {newTask} onChange = {this.changeInput} />
        <button onClick = {this.addTask}>Add new task</button>

        <Task text= {newTask}/>
        <List tasks = {tasksArr}/>
      </>
    );
  }
}

export default App;
