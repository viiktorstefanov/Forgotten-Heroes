const levelController = require('express').Router();
const { createLevel, getUserLevels, getLevelQuestions } = require('../services/levelService');
const { parseError } = require('../utils/parseError');

levelController.post('/', async(req, res) => {
    try {
      const level = await createLevel(req.body.levelNumber, req.body.requiredPoints, req.body.winPoints);

      res.json(level).end();
      
      console.log(`A new level ${req.body.levelNumber} added`);
      
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

levelController.get('/:userId', async(req, res) => {
  try {
    const userId = req.params.userId;

    const levels = await getUserLevels(userId);

    res.json(levels).end();
    
    console.log(`user levels were send`);
    
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

levelController.get('/questions/:level', async (req, res) => {
  try {
    const level = req.params.level;

    const questions = await getLevelQuestions(level);

    res.json(questions).end();
    
    console.log(`Questions for level ${level} were send`);
    
  } catch (error) {
      const message = parseError(error);
      console.log(message);
      if (message.includes("\n")) {
        const errors = message.split("\n");
        return res.status(400).json({ message: errors }).end();
      }
      res.status(400).json({ message }).end();
  }
})

module.exports = levelController;