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
            score: userScore ? userScore.score : 0
        };
    });

    return userLevels;
};

async function registerFirstLevelUser(userId) {
    const firstLevel = await Level.findOne({ levelNumber: 1 });

    firstLevel.users.push({
        userId: userId,
        score: 0
    });

    await firstLevel.save();

    console.log('User successfully registered for the first level.');
}



module.exports = {
    createLevel,
    getUserLevels,
    registerFirstLevelUser
}