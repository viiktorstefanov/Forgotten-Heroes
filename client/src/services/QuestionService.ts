import request from './Request';

const endpoints = {
    question: '/levels/questions',
};

export type Question = {
    question: string,
    options: string[],
    answer: string,
    level: number,
    _id: string,
};

export type ResultQuestion = {
    question: string,
    options: string[],
    answer: string,
    level: number,
    _id: string,
    userChoice: string
};

const getLevelQuestions = async (level: number) => await request.get(endpoints.question + '/' + level, null);

export {
    getLevelQuestions,
}