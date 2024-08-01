const User = require("../models/User");

async function getUserPoints(googleId) {

    let user = await User.findOne({ googleId });

    if (!user) {
         user = await User.create({
            googleId,
        });
    }

    return user.points;
    
};

async function editUserPoints(googleId, points) {

    const user = await User.findOne({ googleId });

    user.points += Number(points);

    const updatedUser = await user.save();

    return updatedUser.points;
};



module.exports = {
    getUserPoints,
    editUserPoints
}