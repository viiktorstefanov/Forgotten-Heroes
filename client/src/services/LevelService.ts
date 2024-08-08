import request from './Request';

const endpoints = {
    levels: '/levels',
};

export type Level = {
    levelNumber: number,
    requiredPoints: number,
    score: number,
    _id: string,
};

const getUserLevels = async (userId: string) => await request.get(endpoints.levels + '/' + userId, null);

export {
    getUserLevels,
}