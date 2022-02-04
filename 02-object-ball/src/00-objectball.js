const game = gameObject();
const players = playersObject();
const teams = Object.values(game)

function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assits: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evens": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assits: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assits: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assits: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assits: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assits: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismack Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assits: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assits: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assits: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Hayword": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assits: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

function homeTeam(){
  return game.home
}

function awayTeam(){
  return game.away
}

function playersObject(){
  // return Object.assign({}, game.home.players, game.away.players)
  return {...homeTeam()["players"], ...awayTeam().players}
}

function numPointsScored(playerName){
  // since instructions had us write playerStats, we should
  // refactor to use it here
  // return players[playerName].points
  return playerStats(playerName).points
}

function shoeSize(playerName){
  // how could we refactor this function to use
  // the playerStats() fn?
  return players[playerName].shoe
}

function findByTeamName(teamName){
  return teams.find(team => team.teamName === teamName)
} 

function teamColors(teamName){
  return findByTeamName(teamName).colors
}

function teamNames() {
  return teams.map(team => team.teamName)
}

function playerNumbers(teamName){
  // const players = findByTeamName(teamName).players
  // const statsArr = Object.values(players)
  // return statsArr.map(statsObj => statsObj.number)
  return Object.values(findByTeamName(teamName).players).map(statsObj => statsObj.number)
}

// although we'll refactor functions above to use this function,
// it's ok to write it down here because it will get hoisted
function playerStats(playerName){
  return players[playerName]
}

function bigShoeRebounds(){
  // get an array of all player stats objects
  let sortedPlayers = Object.values(players)
  // sort the objects in the array in place by shoe size
  // so the stats object with the largest shoe will be the
  // first element
  sortedPlayers.sort((a, b) => {
    if (a.shoe < b.shoe) return -1;
    if (a.shoe > b.shoe) return 1;
    return 0
  })
  // grab the first object by index and return the rebounds value
  return sortedPlayers[0].rebounds
}

function bigFeetPlayers(){
  const playerArr = Object.entries(players)
  // debugger
  return playerArr.filter(player => player[1].shoe > 15).map(pArr => pArr[0])
}

// BONUS

function mostPointsScored(){
  // get an array of arrays of players
  // will be useful because we keep player names
  // assoc with their stats
  let sortedPlayers = Object.entries(players)
  // use array method sort to sort the nested arrays in place by points
  sortedPlayers.sort((a, b) => {
    if (a[1].points < b[1].points) return 1;
    if (a[1].points > b[1].points) return -1;
    return 0
  })
  // use 2 square brackets to first get the first inner array
  // from the sortedPlayers array
  // then the second brackets get the first element of the inner
  // array, which is the name
  return sortedPlayers[0][0]
}

function winningTeam(){

}

// this question is faulty in that there are two players 
// with equally long names for the longest criteron
function playerWithLongestName(){
  let sortedNames = Object.keys(players).sort((a, b) => b.length - a.length)
  return sortedNames[0]
}

// SUPER BONUS

// this question is faulty in that there are two players 
// with equally long names for the longest criteron
function doesLongNameStealATon(){
  let sortedPlayers = Object.entries(players)
  sortedPlayers.sort((a, b) => {
    if (a[1].steals < b[1].steals) return 1;
    if (a[1].steals > b[1].steals) return -1;
    return 0
  })
  const mostSteals = sortedPlayers[0][0]
  debugger
  return playerWithLongestName() === mostSteals
}


