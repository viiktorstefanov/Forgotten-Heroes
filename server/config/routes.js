const heroController = require("../controllers/heroController");
const levelController = require("../controllers/levelController");
const userController = require("../controllers/userController");

module.exports = (app) => {
    app.use('/users', userController);
    app.use('/levels', levelController);
    app.use('/heroes', heroController);
};