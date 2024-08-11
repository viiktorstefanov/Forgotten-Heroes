const heroController = require("../controllers/heroController");
const levelController = require("../controllers/levelController");
const userController = require("../controllers/userController");
const questionController = require("../controllers/questionController");

module.exports = (app) => {
    app.use('/users', userController);
    app.use('/levels', levelController);
    app.use('/heroes', heroController);
    app.use('/question', questionController);
};