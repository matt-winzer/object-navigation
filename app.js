const ability = require('./pokemon.json')

// 1. Write a function that takes in an ability object, and returns (or logs):
  // The ability name2

// Declare the function
function basic(abilityObj) {
  console.log(abilityObj.name)
  return abilityObj.name
}

// Invoke the function and pass it the ability object
basic(ability)


// 2. Write a function that takes in an ability object, and returns (or logs):
  // An object with the ability name and generation name

function logNameAndGen(abilityObj) {
  var name = abilityObj.name
  var generation = abilityObj.generation.name

  var object = {
    name: name,
    generation: generation
  }
  console.log(object)
  return object
}

logNameAndGen(ability)


// 3. Write a function that takes in an ability object, and returns (or logs):
  // An array of the names of all the pokemon that can use this ability

function returnPokemon(abilityObj) {
  var pokemonArray = []
  var pokemon = abilityObj.pokemon

  for (i = 0; i < pokemon.length; i++) {
    var singlePokemon = pokemon[i]
    var pokeName = singlePokemon.pokemon.name
    pokemonArray.push(pokeName)
  }

  return pokemonArray
}

returnPokemon(ability)


// 4. Write a function that takes in an ability object, and returns (or logs):
  // An object with the ability id, name, and an array of all the pokemon that can use the ability
  // You can reuse previous functions to make this happen

function advanced(abilityObj) {
  var pokeObj = {
    id: abilityObj.id,
    name: abilityObj.name,
    pokemon: returnPokemon(abilityObj)
  }
  console.log(pokeObj)
  return pokeObj
}

advanced(ability)

