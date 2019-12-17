const router = require('express').Router();
const cardsController = require('./cards.controller');

router.post('/addCard', (req, res) => {
  cardsController.addCard(req.body, (err, response) => {
    if(err) {
      return res.json({
        success: false,
        data: null,
        error: "Failed to add card: " + err
      });
    }
    return res.json({
      success: true,
      data: response,
      error: null
    });
  });
});

router.get('/getAllCards', (req, res) => {
  cardsController.getAllCards((err, response) => {
    if(err) {
      return res.json({
        success: false,
        data: null,
        error: "Failed to get cards: " + err
      });
    }
    return res.json({
      success: true,
      data: response,
      error: null
    });
  });;
});


module.exports = router;