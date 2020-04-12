import React, { Component } from 'react'
import '../index.css'
import TodoList from './todoList'
import AddTodo from './addTodo'
class Content extends Component{
    render(){
        return(
            <div className='content'>
                <AddTodo enterPress={this.props.todo.add}/>
                <TodoList title="未完成" todo={this.props.todo} status="noComplete"/>
                <TodoList title="已经完成" todo={this.props.todo} status="complete"/>
            </div>
        )
    }
}
export default Content
