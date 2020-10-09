import React, { Component } from 'react'

class State_set extends Component{

    constructor()
    {
        super()
        this.state = {
            message : 'Hello Chaitanya'
        }
    }

    changeState = () =>
    {
        this.setState ({
            message : 'Display has been changed based on input'
        })
    }

    render()
    {
    return ( 
    <div>
        <h1>{this.state.message}</h1>
        <button onClick = { this.changeState }> Click </button>
    </div>
    )
    }
}

export default State_set 