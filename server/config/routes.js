const heroController = require("../controllers/heroController");
const questionController = require("../controllers/questionController");
const userController = require("../controllers/userController");

module.exports = (app) => {
    app.use('/users', userController);
    app.use('/questions', questionController);
    app.use('/heroes', heroController);
};