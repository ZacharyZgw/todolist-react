//js文件
import React, { Component } from 'react'
import '../index.css'
 
class TodoItem extends Component {
    checkboxCheck = () => {
        this.props.item.status === 'noComplete' && this.props.checkboxCheck(this.props.item.id)
    }
    render() {
        return (<div className={'ToDoItem' + (this.props.item.status === 'complete' ? ' complete' : '')}>
           <input type="checkbox" onChange={this.checkboxCheck} checked={this.props.item.status === 'complete'} ></input>
           <span>{this.props.item.text}</span>
        </div>)
    }
}
 
export default TodoItem 
 
