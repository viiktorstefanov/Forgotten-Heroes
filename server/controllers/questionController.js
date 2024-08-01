const questionController = require('express').Router();
const { parseError } = require('../utils/parseError');

questionController.get('/', async(req, res) => {
    try {
      
    } catch (error) {
        const message = parseError(error);
        console.log(message);
        if (message.includes("\n")) {
          const errors = message.split("\n");
          return res.status(400).json({ message: errors }).end();
        }
        res.status(400).json({ message }).end();
    }
});

module.exports = questionController;