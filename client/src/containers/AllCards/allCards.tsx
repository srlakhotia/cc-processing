import React, {Component} from 'react';

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
        {this.props.cardList.map((card:Card, key) => {
          return <div key={key}>
            {card.name} {card.limit} {card.cardNumber} {card.balance}
          </div>
        })} 
      </div>
    )
  }
}

export default AllCards;