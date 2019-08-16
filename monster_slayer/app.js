new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function () {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.gameIsRunning = true;
            this.turns = [];
        },
        resetGame: function () {
            this.gameIsRunning = false;
            this.turns = [];
        },
        attack: function () {
            var dammage = this.calculateDamage(3, 9);
            this.playerHealth -= dammage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + dammage
            });
            if (this.checkWin()) {
                return;
            }

            this.monsterAttack();
        },
        specialAttack: function () {
            var dammage = this.calculateDamage(10, 20);
            this.playerHealth -= dammage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster hard for ' + dammage
            });
            if (this.checkWin()) {
                return;
            }

            this.monsterAttack();
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10'
            });
            this.monsterAttack();
        },
        giveUp: function () {
            if (confirm("Do you really want start new game?")) {
                this.resetGame();
            }
        },
        monsterAttack: function () {
            var dammage = this.calculateDamage(9, 18);
            this.monsterHealth -= dammage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + dammage
            });
            this.checkWin()
        },
        checkWin: function () {
            if (this.playerHealth <= 0) {
                if (confirm("Player won! Do you want start new game?")) {
                    this.startGame();
                } else {
                    this.resetGame();
                }
            } else if (this.monsterHealth <= 0) {
                if (confirm("Player won! Do you want start new game?")) {
                    this.startGame();
                } else {
                    this.resetGame();
                }
            }
        },
        calculateDamage: function (max, min) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        }
    }
});