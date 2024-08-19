const questionController = require('express').Router();
const { isAdmin } = require('../middlewares/guards');
const { createQuestion  } = require('../services/questionService');
const { parseError } = require('../utils/parseError');

questionController.post('/', isAdmin(), async(req, res) => {
    try {
      
      const question = await createQuestion(req.body.question, req.body.options, req.body.answer, req.body.level);

      res.json(question).end();
      
      console.log(`A new question added`);
      
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