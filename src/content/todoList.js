import React, { Component } from 'react'
import '../index.css'
import TodoItem from './todoitem'

class TodoList extends Component{
    render(){
        return(
            <div className='list'>
                <h3 className='list-title'>
                    {this.props.title}
                </h3>
                <div>
                    {
                        this.props.todo.todolist.filter(item => {
                            return item.status === this.props.status
                        }).map(item => {
                            return <TodoItem item={item} checkboxCheck={this.props.todo.complete} key={item.id} />
                        })
                    }
                </div>
            </div>
        )
    }
}
export default TodoList
