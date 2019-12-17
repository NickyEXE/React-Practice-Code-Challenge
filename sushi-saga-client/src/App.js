import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from './components/Form'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    index: 0,
    eatenSushiIds: [],
    initialBudget: 100
  }

  componentDidMount(){
    fetch(API).then(res=>res.json()).then(res => this.setState({sushis: res}))
  }

  eatenSushis = () => this.state.sushis.filter(sushi => this.state.eatenSushiIds.includes(sushi.id))
  amountSpent = () => this.eatenSushis().reduce(this.reducer, 0)
  reducer = (total, sushi) => total + sushi.price

  amountRemaining = () => 100 - this.amountSpent()

  moreClick = () => {
    console.log(this.state.index, this.state.sushis.length)
    if (this.state.index >= this.state.sushis.length -4){
      console.log("we're here")
      this.setState({index: 0})
    }
    else {
    this.setState(prevState => ({index: prevState.index + 4}))
    }
  }
  eatSushi = (id, price) => {
    if (this.amountRemaining() >= price){
    this.setState({eatenSushiIds: [...this.state.eatenSushiIds, id]})
    }
  }

  render() {
    const {sushis, index, eatenSushiIds} = this.state
    const fourSushis = sushis.slice(index, index+4)
    // console.log(this.state)
    return (
      <div className="app">
        <SushiContainer sushis={fourSushis} moreClick={this.moreClick} eatenSushiIds={eatenSushiIds} eatSushi={this.eatSushi} />
        <Table plates={eatenSushiIds} amountRemaining={this.amountRemaining()}/>
        <Form/>
      </div>
    );
  }
}

export default App;