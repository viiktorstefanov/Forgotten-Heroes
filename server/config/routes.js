const heroController = require("../controllers/heroController");
const questionController = require("../controllers/questionController");

module.exports = (app) => {
    app.use('/questions', questionController);
    app.use('/heroes', heroController);
};