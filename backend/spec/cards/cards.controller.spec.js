const CardsController = require('../../api/cards/cards.controller');
const dataStore = require('data-store')({path: process.cwd() + '/cards.json'});

describe('Cards Controller', () => {
  let mockCardData = {},
      doneCallback;

  describe('Add Cards()', () => {
    beforeEach(() => {
      dataStore.clear();
      doneCallback = jasmine.createSpy();
      mockCardData.name = "John Doe";
      mockCardData.cardNumber = '5555555555554444';
      mockCardData.limit = 4000;
    });

    it("should return error when there is no card", () => {
      mockCardData.cardNumber = '';
      CardsController.addCard(mockCardData, doneCallback);
      expect(doneCallback).toHaveBeenCalledWith('No Card Number Entered');
    });

    it("should return error when there is limit less than 0", () => {
      mockCardData.limit = -400;
      CardsController.addCard(mockCardData, doneCallback);
      expect(doneCallback).toHaveBeenCalledWith('Limit Cannot be less than 0');
    });

    it("should return error when there is invlid card number", () => {
      mockCardData.cardNumber = '222';
      CardsController.addCard(mockCardData, doneCallback);
      expect(doneCallback).toHaveBeenCalledWith('Invalid Card Number');
    });

    it('should return success if all the condition of correct card is satisfied', () => {
      CardsController.addCard(mockCardData, doneCallback);
      expect(doneCallback).toHaveBeenCalledWith(null, [{...mockCardData, balance: 0}]);
    });
  });

  describe('Get All Cards ()', () => {
    it('should retrive the last stored cards data', () => {
      doneCallback = jasmine.createSpy();
      CardsController.getAllCards(doneCallback);
      expect(doneCallback).toHaveBeenCalledWith(null, [{...mockCardData, balance: 0}]);
    });
  });
});