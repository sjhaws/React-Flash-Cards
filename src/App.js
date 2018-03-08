import React, { Component } from 'react';
import Addcards from "./Addcards";
import List from "./List"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { cards: []}

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }

  addItem = (name) => {
    const { cards } = this.state
    const card = { name, id: this.getUniqId(), complete: false }
    this.setState({ cards: [card, ...cards] })
  }

  handleClick = (id) => {
    const { cards } = this.state;
    this.setState({
      cards: cards.map( card => {
        if (card.id === id) {
          return {
            ...card,
            complete: !card.complete
          }
        }
        return card
      })
    })
  }

  visibleItems = () => {
    const { cards, filter } = this.state
    switch(filter) {
      case 'Active':
        return cards.filter( t => !t.complete )
      case 'Complete':
        return cards.filter( t => t.complete )
      default:
        return cards;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Flashcards</h1>
        </header>
        <p className="App-intro">
          <Addcards addItem={this.addItem}/>
          <List items={this.visibleItems()} todoClick={this.handleClick}/>
        </p>
      </div>
    );
  }
}

export default App;
