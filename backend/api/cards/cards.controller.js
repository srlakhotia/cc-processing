const cardsService = require("./cards.service");
const luhn = require("luhn");

const addCard = (cardData, done) => {
    if(!cardData.cardNumber) {
        done("No Card Number Entered");
        return;
    }
    if(cardData.limit < 0) {
        done("Limit Cannot be less than 0");
        return;
    }
    if(!luhn.validate(cardData.cardNumber)) {
        done("Invalid Card Number");
        return;
    }

    cardsService.addCard(cardData, done);
};

const getAllCards = done => {
    cardsService.getAllCards(done);
};

module.exports = {
    addCard,
    getAllCards
}