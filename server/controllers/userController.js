const userController = require('express').Router();
const { getUserPoints, editUserPoints } = require('../services/userService');
const { parseError } = require('../utils/parseError');

userController.get('/:googleId', async(req, res) => {
    try {
        const googleId = req.params.googleId;
        const userPoints = await getUserPoints(googleId);

        res.json(userPoints).end();

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

userController.put('/:googleId', async(req, res) => {
    try {
        const googleId = req.params.googleId;
        const points = req.body.points;

        const userPoints = await editUserPoints(googleId, points);

        res.json(userPoints).end();

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

module.exports = userController;