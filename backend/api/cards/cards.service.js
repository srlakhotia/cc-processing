const dataStore = require('data-store')({path: process.cwd() + '/cards.json'});


const addCard = (cardData, done) => {
  dataStore.union('cardsList', {
    name: cardData.name,
    cardNumber: cardData.cardNumber,
    limit: cardData.limit,
    balance: 0
  });

  // sending back complete list of cards for further implementations on client side
  done(null, dataStore.get('cardsList'));
};

const getAllCards = (done) => {
  done(null, dataStore.get('cardsList') || []);
};

module.exports = {
  addCard,
  getAllCards
}

