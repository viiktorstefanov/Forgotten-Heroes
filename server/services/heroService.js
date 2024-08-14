const Hero = require("../models/Hero");
const Question = require("../models/Question");

async function getHero(heroId) {
    const hero = await Hero.findById(heroId);

    if (!hero) {
        throw new Error('Hero not found');
    }

    return hero;
};

async function createHero(title, imageUrl, category, dateBirth, dateDeath, historyMain, historyAdditional, quote) {
    const hero = await Hero.create({
        title,
        imageUrl,
        category,
        dateBirth,
        dateDeath,
        historyMain,
        historyAdditional,
        quote
    });
    
    return hero;
};

async function getHeroes(category) {
    const heroes = await Hero.find({ category });

    if (!heroes.length) {
        throw new Error('No heroes found for this category');
    }

    const sortedHeroes = heroes.sort((a, b) => {
        const dateA = new Date(a.dateBirth);
        const dateB = new Date(b.dateBirth);
        return dateA - dateB; 
    });

    const filteredHeroes = sortedHeroes.map((hero) => {
        return { 
            _id: hero._id, 
            title: hero.title,
            imageUrl: hero.imageUrl,
        }
    });

    return filteredHeroes;
}


async function getRandomHero() {
    const count = await Hero.countDocuments().exec();

    const randomIndex = Math.floor(Math.random() * count);

    const hero = await Hero.findOne().skip(randomIndex).exec();

    return hero;
};



module.exports = {
    getHero,
    createHero,
    getHeroes,
    getRandomHero
}