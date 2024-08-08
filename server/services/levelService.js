const Hero = require("../models/Hero");
const Question = require("../models/Question");
const Level = require("../models/Level");

async function createLevel(levelNumber, requiredPoints) {
    const level = await Level.create({
       levelNumber,
       requiredPoints
    });
    
    return level;
};

async function getUserLevels(userId) {
    
    const levels = await Level.find({ 'users.userId': userId });

    const userLevels = levels.map(level => {
        const userScore = level.users.find(user => user.userId.toString() === userId.toString());

        return {
            levelNumber: level.levelNumber,
            requiredPoints: level.requiredPoints,
            score: userScore ? userScore.score : 0,
            _id: level._id
        };
    });

    return userLevels;
};

async function registerUserInAllLevels(userId) {

    for (let levelNumber = 1; levelNumber <= 32; levelNumber++) {
  
        const level = await Level.findOne({ levelNumber });

        if (level) {

            level.users.push({
                userId: userId,
                score: 0
            });

            await level.save();
        } 
    }
}



module.exports = {
    createLevel,
    getUserLevels,
    registerUserInAllLevels
}