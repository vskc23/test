
import React, { Component } from 'react'
import Count2 from './Count2'
import Count3 from './Count3'


class Counter extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            value : 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)

    }

    increment()
    {
        this.setState(
            {
                value : this.state.value + 1
            }
            
        )
    }

    decrement ()
    {
        this.setState (
            {
                value : this.state.value - 1
            }
        )
    }

    render() {
        return (
            <div>
                This is Component 1
                <h1> count - {this.state.value} </h1>
                <button onClick={ () => this.increment() }> increment </button>
                <button onClick={ () => this.decrement() }> decrement </button>
                <Count2 val={this.state.value} fun1={() => this.increment()} fun2={() => this.decrement()}/>
                <Count3 val={this.state.value} fun1={() => this.increment()} fun2={() => this.decrement()}/>
            </div>
        )
    }
}

export default Counter