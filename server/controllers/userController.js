const { register, login, logout, updateUserPoints, getAllUsersPoints, getUserById } = require('../services/userService');
const { body, validationResult } = require('express-validator');
const { parseError } = require('../utils/parseError');
const { isGuest, hasUser } = require('../middlewares/guards');
const { registerUserInAllLevels } = require('../services/levelService');

const authController = require('express').Router();

authController.post('/register',
    isGuest(),
    body('email').isEmail().withMessage('Enter a valid email address.'),
    body('password').isLength({ min: 8 }).withMessage('Enter a password with a minimum of 8 characters.'),
    async (req, res) => {
        try {
            const { errors } = validationResult(req);
            if (errors.length > 0) {
                throw errors;
            }
            const userWithTokens = await register(req.body.email, req.body.password, req.body.username);
            await registerUserInAllLevels(userWithTokens._id);
            res.json(userWithTokens).end();
            console.log(`User ${req.body.email} successfully registered.`);
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

authController.post('/login', isGuest(), async(req, res) => {
    try {
        const userWithTokens = await login(req.body.email, req.body.password);
        res.json(userWithTokens).end();
        console.log(`${req.body.email} has successfully signed in.`);
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

authController.get('/logout', hasUser(), async(req, res) => {
    try {
        const user = JSON.parse(req.headers.user);
        const accessToken = req.headers.authorization?.split(' ')[1];
        await logout(accessToken);
        console.log(`${user.email} has signed out.`);
        res.status(204).end();
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

authController.put('/points/:userId', async(req, res) => {
    try {
        const user = JSON.parse(req.headers.user);
        const updatedUser = await updateUserPoints(req.params.userId, req.body.points, req.body.levelNumber);
        res.json(updatedUser).end();
        console.log(`${user.email}'s points increased with ${req.body.points}.`);
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

authController.get('/points', async(req, res) => {
    try {
        const users = await getAllUsersPoints();
        res.json(users).end();
        console.log(`All users points were send.`);
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

authController.get('/points/:userId', async(req, res) => {
    try {
        const userId = req.params.userId;
        const user = await getUserById(userId);

        const userWithPoints = {
            username: user.username,
            points: user.points,
            _id: user._id
        };

        res.json(userWithPoints).end();
        console.log(`User points were send.`);
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

module.exports = authController;
