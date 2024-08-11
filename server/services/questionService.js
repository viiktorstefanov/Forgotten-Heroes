const Question = require("../models/Question");

async function createQuestion(question, options, answer, level) {
    const newQuestion = await Question.create({
        question,
        options,
        answer,
        level
    });
    
    return newQuestion;
};

module.exports = {
    createQuestion
}