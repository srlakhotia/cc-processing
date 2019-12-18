// client/src/App.js
import React, { Component } from "react";
import axios from 'axios';
import AddCard from './containers/AddCard/addCard';
import AllCards from './containers/AllCards/allCards';
import {constants} from './constants';
import './reset.css';
import './base.css';

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
      `${constants.API_URL}/api/getAllCards`
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