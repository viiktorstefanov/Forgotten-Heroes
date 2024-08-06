const Hero = require("../models/Hero");
const Question = require("../models/Question");

async function getHero(heroId) {
    const hero = await Hero.findById(heroId);

    if (!hero) {
        throw new Error('Hero not found');
    }

    return hero;
};

async function createHero(title, imageUrl, category, dateBirth, dateDeath, historyMain, historyAdditional) {
    const hero = await Hero.create({
        title,
        imageUrl,
        category,
        dateBirth,
        dateDeath,
        historyMain,
        historyAdditional
    });
    
    return hero;
};

async function getHeroes(category) {
    const heroes = await Hero.find({ category });

    if (!heroes.length) {
        throw new Error('No heroes found for this category');
    }

    const filteredHeroes = heroes.map((hero) => {
        return { 
            _id: hero._id, 
            title: hero.title,
            imageUrl: hero.imageUrl,
                }
    });
    
    return filteredHeroes;
}



module.exports = {
    getHero,
    createHero,
    getHeroes
}