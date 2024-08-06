require('dotenv').config();

const User = require("../models/user");

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

const tokenBlackList = new Set();

async function register(email, password, username) {
    const existing = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });

    if (existing) {
        throw new Error('Email address is already taken')
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        email,
        hashedPassword,
        username,
    });

    return createTokens(user);

};

async function login(email, password) {
    const user = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });

    if (!user) {
        throw new Error('Incorrect email or password');
    }

    const match = await bcrypt.compare(password, user.hashedPassword);

    if (!match) {
        throw new Error('Incorrect email or password');
    };

    const tokens = createTokens(user);

    return tokens;
};

async function logout(token) {
    tokenBlackList.add(token);
};

function createTokens(user) {

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    return {
        _id: user._id,
        email: user.email,
        username: user.username,
        points: user.points,
        accessToken,
        refreshToken,
    };
};

function generateAccessToken(user) {
    const payload = {
        _id: user._id,
        email: user.email
    };

    return jwt.sign(payload, process.env.ACCESS_TOKEN_PRIVATE_KEY, { expiresIn: '15m' });
};

function generateRefreshToken(user) {
    const payload = {
        _id: user._id,
        email: user.email
    };

    return jwt.sign(payload, process.env.REFRESH_TOKEN_PRIVATE_KEY);
};

function isTokenBlacklisted(token) {
    return tokenBlackList.has(token);
};

function parseToken(token) {
    if (tokenBlackList.has(token)) {
        throw new Error('Token is blacklisted');
    }

    return jwt.verify(token, secret);
};

async function getUserById(id) {
    return User.findById(id);
};

async function updateUserPoints(userId, points) {

    const user = await User.findById(userId);

    if (!user) {
        throw new Error('User not found');
    }

    user.points += Number(points);

    const updatedUser = await user.save();

    return updatedUser; 
};

async function getAllUsersPoints() {
    const users = await User.find({}, 'username points').sort({ points: -1 });
    
    return users;
}

module.exports = {
    register,
    login,
    logout,
    parseToken,
    getUserById,
    isTokenBlacklisted,
    updateUserPoints,
    getAllUsersPoints
}