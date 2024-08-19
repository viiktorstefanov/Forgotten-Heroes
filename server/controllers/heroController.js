const heroController = require('express').Router();
const { isAdmin } = require('../middlewares/guards');
const { getHeroes, getHero, createHero, getRandomHero } = require('../services/heroService');
const { parseError } = require('../utils/parseError');

heroController.get('/category/:category', async(req, res) => {
    try {
      const category = req.params.category;
      const heroes = await getHeroes(category);

      res.json(heroes).end();

      console.log(`Heroes were send.`);

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

heroController.get('/random', async(req, res) => {
  try {
    const hero = await getRandomHero();

    res.json(hero).end();
    
    console.log(`Hero ${hero.title} was send.`);

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

heroController.get('/:heroId', async(req, res) => {
  try {
    const heroId = req.params.heroId;
    const hero = await getHero(heroId);

    res.json(hero).end();

    console.log(`Hero ${hero.title} was send.`);

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

heroController.post('/',
  isAdmin(),
  async (req, res) => {
      try {
          const hero = await createHero(req.body.title, req.body.imageUrl, req.body.category, req.body.dateBirth, req.body.dateDeath, req.body.historyMain, req.body.historyAdditional, req.body.quote);
          
          res.json(hero).end();

          console.log(`Hero ${hero.title} was created.`);
      } catch (error) {
          const message = parseError(error);
          console.log(message);
          if(message.includes('\n')) {
              const errors = message.split('\n')
             return res.status(400).json({ message: errors }).end();
          }
          res.status(400).json({ message }).end();
      }
});

module.exports = heroController;