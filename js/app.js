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
            description: 'Each player controls his/her own family of dwarves that are starting a new life.',
            canPurchase: true
        },
        {
            name: 'Settlers of Catan',
            price: 35.99,
            players: '2-4',
            description: 'Try to build cities and routes to control the flow of resources',
            canPurchase: false
        }
    ];
})();


