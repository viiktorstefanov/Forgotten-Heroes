export const rulesHeader = 'Условия и инструкции';

export const appPurposeInfo = {
    header: 'Целта на приложението е да образова и забавлява децата чрез интерактивна игра, включваща въпроси по история. Потребителите ще могат да открият важни исторически събития и личности чрез различни секции на приложението.'
};

export const gameSectionInfo = {
    header: 'Секция "ИГРАЙ"'
};

export const gamePurposeInfo = {
    header: 'Цел на играта',
    description: 'Вашата цел е да отговорите правилно на всички въпроси за съответното ниво и да събирате точки, като същевременно научавате интересни факти за личности и събития от българската история.'
};

export const gamePlayInfo = {
    header: 'Начало на играта',
    subpoints: [
        {
            header: 'Стартиране:',
            description: 'След като стартирате играта, ще бъдете информирани за броя на нивата и необходимите точки за всяко от тях. Всеки регистриран потребител ще има достъп до първото ниво, като при правилен отговор на въпросите ще спечели необходимите точки за отключване на следващото ниво.',
            id: 'R0000001'
        },
        {
            header: 'Въпроси:',
            description: 'Всяко ниво съдържа 10 въпроса, които се избират на случаен принцип, съобразени със сложността на текущото ниво.',
             id: 'R0000002'
        },
        {
            header: 'Отговори:',
            description: 'За всеки въпрос ще бъдат предоставени 4 възможни отговора. Трябва да изберете един от тях.',
             id: 'R0000003'
        }
    ]
};

export const timerInfo = {
    header: 'Таймер',
    subpoints: [
        {
            header: 'Време за отговор:',
            description: 'За всеки въпрос имате 30 секунди да изберете правилния отговор. Ако времето изтече преди да направите избор, въпросът ще се счита за неотговорен.',
               id: 'Z00001'
        },
    ]
};

export const nextLevelInfo = {
    header: 'Преминаване към следващо ниво',
    subpoints: [
        {
            header: 'Правилни отговори:',
            description: ' За да преминете към следващото ниво, трябва да отговорите правилно на всички въпроси от текущото ниво.',
            id: 'N0000001'
        },
        {
            header: 'Неправилни отговори:',
            description: 'Ако не успеете да отговорите правилно на всички въпроси, ще видите своя резултат за нивото, както и правилните отговори заедно с вашите избрани опции.',
            id: 'N0000002'
        },
        {
            header: 'Повторение на ниво:',
            description: 'В случай ,че не успеете да отговорите правилно на всички въпроси можете да опитате отново същото ниво, за да подобрите своя резултат и да продължите напред.',
            id: 'N0000003'
        },
    ]
};

export const pointsInfo = {
    header: 'Точки',
    subpoints: [
        {
            header: 'Фиксирани точки:',
            description: 'Всяко ниво носи фиксиран брой точки, които се добавят към общия ви резултат при успешно преминаване на нивото.',
            id: 'P0000000001'
        },
        {
            header: 'Напредък:',
            description: 'Натрупването на точки ви позволява да продължите към следващото ниво и да отключвате нови предизвикателства. Колкото повече точки събирате, толкова по-високо се класирате в общата класация на всички потребители. Това ви дава възможност да се съревновавате с другите играчи и да се стремите към върха на класацията.',
            id: 'P0000000002'
        },
    ]
};

export const heroesSection = {
    header: 'Секция "Личности',
    description: 'Тук можете да намерите информация за значими личности от българската история, която помага за разширяване на знанието и разбирането за историческите събития.'
};

export const rankSection = {
    header: 'Секция "Класация',
    description: 'Тази секция представя потребителите, подредени според техния брой точки. Всеки потребител има право на участие в класацията, като позициите се определят въз основа на натрупаните точки - от най-високия до най-ниския резултат.'
};

export const ownerInfo = {
    header: 'Контакти',
    description: 'Ако имате въпроси или нужда от помощ, можете да се свържете с мен на:',
    email: 'victorystefanov@gmail.com'
};
