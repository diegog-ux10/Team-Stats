const team = {
    _players: [
      {
     firstName: 'Diego',
     lastName: 'Granados',
     age: 29
   },
   {
     firstName: 'David',
     lastName: 'Lares',
     age: 32
   },
   {
     firstName: 'Victor',
     lastName: 'Silva',
     age: 62
   }
    ],
    _games: [
      {
     opponent: 'Real Madrid',
     teamPoints: 4,
     opponentPoints: 2
   },
   {
     opponent: 'Atletico Madrid',
     teamPoints: 2,
     opponentPoints: 3
   },
   {
     opponent: 'Espayol',
     teamPoints: 5,
     opponentPoints: 1
   }
    ],
   
    get players () {
      return this._players;
    },
   
    get games () {
      return this._games;
    },
   
    addPlayer (firstName, LastName, age) {
      let player = {
       firstName: firstName,
       lastName: LastName,
       age: age
      }
      return this.players.push(player);
    },
   
    addGames (opponent, teamPoints, opponentPoints) {
      let game = {
       opponent: opponent,
       teamPoints: teamPoints,
       opponentPoints: opponentPoints
      }
      return this.games.push(game);
    }
   };
   
   team.addPlayer('Steph', 'Curry', 28);
   team.addPlayer('Lisa', 'Leslie', 44);
   team.addPlayer('Bugs', 'Bunny', 76);
   
   team.addGames('Getafe', 6, 2);
   team.addGames('Villareal', 1, 3);
   team.addGames('Osasuna', 2, 1);
   
   console.log(team._players);