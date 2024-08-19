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

        const user = JSON.parse(req.headers.user);

        if(!user) {
            res.status(400).json({ message: "Yo're not allowed to post new heroes"});
        }
       
        if(user._id !== '66b8a6d75d9a8369ec3b809c') {
            res.status(400).json({ message: 'You are not admin.'});
        }else {
            next();
        }
    }
}

module.exports = {
    hasUser,
    isGuest,
    isAdmin
}