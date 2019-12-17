import React, {Component} from 'react'

export default class Form extends Component {
    state = {
        money: 0
    }

    render(){

    return(
            <form>
                <label>Add money:</label><input type="number"></input>
            </form>
        )
    }


}