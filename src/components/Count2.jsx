import React, { Component } from 'react'

export class count2 extends Component {
    render() {
        return (
            <div>
                This is Component 2
               <h1> count - {this.props.val} </h1>
               <button onClick={ this.props.fun1 }> increment </button>
               <button onClick={ this.props.fun2 }> decrement </button>
            </div>
        )
    }
}

export default count2
