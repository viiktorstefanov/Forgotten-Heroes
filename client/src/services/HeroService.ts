import request from './Request';

const endpoints = {
    hero: '/heroes',
    random: '/heroes/random'
};

export type Hero = {
    _id: string,
    title: string,
    questions: Array<null>,
    imageUrl: string,
    category: 'srednovekovie' | 'vuzrajdane' | 'novotovreme',
    dateBirth: string,
    dateDeath: string,
    historyMain: string,
    historyAdditional: string,
    quote: string,
};

export type HeroByCategory = {
    _id: string,
    title: string,
    imageUrl: string,
};

const getCategoryHeroes = async (category: string) => await request.get(endpoints.hero + category, null);

const getHeroById = async (heroId: string) => await request.get(endpoints.hero + `/${heroId}`, null);

const getRandomHero = async () => await request.get(endpoints.random, null);

export {
    getCategoryHeroes,
    getHeroById,
    getRandomHero
}