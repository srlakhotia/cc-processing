// client/src/App.js
import React, { Component } from "react";
import AddCard from './containers/AddCard/addCard';
import AllCards from './containers/AllCards/allCards';
import axios from 'axios';

interface State {
  cardList: Array<object>;
}

class App extends Component<{}, State> {
  constructor(props:object) {
    super(props);
    this.state = {
      cardList: []
    }
  }
  componentDidMount() {
    axios.get(
      'http://localhost:3001/api/getAllCards'
    ).then(response => {
      this.setState({
        cardList: response.data.data
      });
    });
  }

  public updateCardList = (cardList:Array<[]>): void => {
    this.setState({
      cardList: cardList
    });
  }

  render() {
    return (<div>
      <h1>Credit Card System</h1>
      <AddCard updateCardList={this.updateCardList} />
      <AllCards cardList={this.state.cardList} />
    </div>);
  }
}

export default App;