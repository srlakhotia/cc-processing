import React, {Component} from 'react';
import './allCards.css';

interface Props {
  cardList: Array<any>
}

interface Card {
  limit: number,
  name: string,
  cardNumber: number,
  balance: number
}

class AllCards extends Component<Props> {
  render() {
    return(
      <div className="c-component">
        <h2>Existing Cards</h2>
        <ul className="card-header">
          <li className="card-title">Name</li>
          <li className="card-title">Card Number</li>
          <li className="card-title">Balance</li>
          <li className="card-title">Limit</li>
        </ul>
        <ul className="card-data">
        {this.props.cardList.map((card:Card, key) => {
          return (
          <li key={key} className="card-block">
            <p className="block-row"><span className="block-title">Name: </span>{card.name}</p>
            <p className="block-row"><span className="block-title">Card Number: </span>{card.cardNumber}</p>
            <p className="block-row"><span className="block-title">Balance: </span>£{card.balance}</p>
            <p className="block-row"><span className="block-title">Limit: </span>£{card.limit}</p>
          </li>)
        })}
        </ul>
      </div>
    )
  }
}

export default AllCards;