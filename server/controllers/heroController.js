const heroController = require('express').Router();
const { parseError } = require('../utils/parseError');

heroController.get('/', hasUser(), async(req, res) => {
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

heroController.get('/:heroId', hasUser(), async(req, res) => {
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

module.exports = heroController;