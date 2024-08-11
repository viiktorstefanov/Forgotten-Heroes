const Question = require("../models/Question");
const Level = require("../models/Level");

async function createLevel(levelNumber, requiredPoints, winPoints) {
    const level = await Level.create({
       levelNumber,
       requiredPoints,
       winPoints
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
            winPoints: level.winPoints,
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
};

async function getLevelQuestions(level) {
    const questions = await Question.find({ level: level });

    const shuffled = questions.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);

    return selected;
};

async function updateLevelScore(userId, levelNumber) {

    const level = await Level.findOne({ 
        'levelNumber' : levelNumber,
        'users.userId': userId 
    });

    const userLevel = level.users.find(user => user.userId.equals(userId));
    
    userLevel.score = level.winPoints;
    
    await level.save();
}



module.exports = {
    createLevel,
    getUserLevels,
    registerUserInAllLevels,
    getLevelQuestions,
    updateLevelScore
}