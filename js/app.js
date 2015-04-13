(function() {
    var app = angular.module('boardgameShop', []);

    app.controller('ShopController', function() {
        this.products = games;
    });

    var games = [
        {
            name: 'Caverna',
            price: 99.95,
            players: '1-8',
            difficulty: 'Hard',
            description: 'Each player controls his/her own family of dwarves that are starting a new life.',
            canPurchase: true,
            image: '',
            storage: 'Plano Solution:'
        },
        {
            name: 'Settlers of Catan',
            price: 35.99,
            players: '2-4',
            difficulty: 'Easy',
            description: 'Try to build cities and routes to control the flow of resources',
            canPurchase: false,
            image: '',
            storage: 'Plano Solution:'
        },
        {
            name: 'Resistance Avalon',
            price: 15.19,
            players: '2-9',
            difficulty: 'Easy',
            description: 'The Resistance: Avalon pits the forces of Good and Evil in a battle to control the future of civilization. Arthur represents the future of Britain, a promise of prosperity and honor, yet hidden among his brave warriors are Mordreds unscrupulous minions. These forces of evil are few in number but have knowledge of each other and remain hidden from all but one of Arthurs servants. Merlin alone knows the agents of evil, but he must speak of this only in riddles. If his true identity is discovered, all will be lost.',
            canPurchase: true,
            image: '',
            storage: 'Plano Solution:'
        }
    ];
})();


