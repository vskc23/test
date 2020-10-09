import React, { Component } from 'react'

export class count3 extends Component {
    render() {
        return (
            <div>
                This is Component 3
               <h1> count - {this.props.val} </h1>
               <button onClick={ this.props.fun1 }> increment </button>
               <button onClick={ this.props.fun2 }> decrement </button>
            </div>
        )
    }
}

export default count3
