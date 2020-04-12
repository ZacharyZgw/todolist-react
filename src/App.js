import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/header'
import Content from './content/content'
class App extends Component{
  constructor(){
    super()
    this.state={
        todo:{
            todolist: [],
            // add方法
            add:(item) => {
                this.setState(preState => {
                    let newtodo = preState.todo
                    let list = Object.assign([],newtodo.todolist)
                    list.push({
                        id: new Date().getTime(),
                        text:item,
                        status:'noComplete'
                    })
                    newtodo.todolist = list
                    return {
                        todo:newtodo
                    }
                })
            },
            // 将未完成标记为已完成
            complete:(id)=>{
                this.setState(prestate=>{
                    let newtodo = prestate.todo
                    let list = newtodo.todolist.map(item=>{
                        if (item.id === id){
                            item.status='complete'
                        }
                        return item
                    })
                    newtodo.todolist = list
                    return {
                        todo:newtodo
                    }
                })

            }
        }
    }
}
  render(){
    return(
      <div className='TodoListReact'>
        <Header todo={this.state.todo}></Header>
        <Content todo={this.state.todo}></Content>
      </div>
    )
  }

}
export default App;
