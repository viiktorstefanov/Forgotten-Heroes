require('dotenv').config();
const ADMIN = process.env.ADMIN;

function hasUser() {
    return (req, res, next) => {
        if(req.headers.user) {
            next();
        }else {
            res.status(401).json({ message: 'Sign in to proceed'});
        } 
    } 
};

function isGuest() {
    return (req, res, next) => {
       
        if(req.headers.user) {
            res.status(400).json({ message: 'You are already signed in.'});
        }else {
            next();
        }
    }
};

function isAdmin() {
    return (req, res, next) => {
        try {
            const user = JSON.parse(req.headers.user);

            if (user && user._id === ADMIN) {
                next();
            } else {
                res.status(400).json({ message: 'You are not admin.' });
            }
        } catch (error) {
            res.status(400).json({ message: 'Invalid user data.' });
        }
    }
}


module.exports = {
    hasUser,
    isGuest,
    isAdmin
}