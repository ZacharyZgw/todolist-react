import React, { Component } from 'react'
import '../index.css'

class AddTodo extends Component{
    enterPress = (event) =>{
        if (event.key === 'Enter'){
            this.props.enterPress(event.target.value)
            event.target.value= ''
        }
    }
    render(){
        return(
            <div className='add'>
                <input type='text' onKeyPress={this.enterPress} className='addTodo' placeholder='添加一个新的todo' required="required" autoComplete="off"></input>
            </div>
        )
    }

}
export default AddTodo