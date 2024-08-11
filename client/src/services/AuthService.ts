import request from './Request';

const endpoints = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',
    points: `/users/points/`
};

export type User = {
    _id: string,
    email: string,
    username: string,
    points: number,
    accessToken: string,
    refreshToken: string,
};

export type UserRegister = {
    email: string,
    password: string,
    username: string,
};

export type LoginData = {
    email: string,
    password: string,
};

export type RegisterData = {
    email: string,
    password: string,
    username: string,
};

export type PointsData = {
    points: number,
    levelNumber: number,
};

export type UserPointsData = {
    username: string,
    points: number,
    _id: string,
}

const login = async (data : LoginData): Promise<User> => await request.post(endpoints.login, data);

const register = async (data: RegisterData): Promise<User> => await request.post(endpoints.register, data);

const logout = async (user : User) => await request.get(endpoints.logout, null, user);

const updatePoints = async (user: User, points: PointsData): Promise<User> => await request.put(endpoints.points + user._id, points, user);

const getUsersPoints = async () : Promise<UserPointsData[]> => await request.get(endpoints.points, null);

const getUserPoints = async (userId: string) : Promise<UserPointsData> => await request.get(endpoints.points + userId, null)

export {
    login,
    register,
    logout,
    updatePoints,
    getUsersPoints,
    getUserPoints
}