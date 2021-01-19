import Pokecard from "./Pokecard";
import Pokedex, { POKEMONS } from "./Pokedex";

/* randomly generate two players with pokemon hands (4 each), and display them */
function Pokegame() {
  const hands = createHands();
  return (<div className="Pokegame">
    {hands.map((h, idx) => 
      <div> <h3 className="Pokegame-player">Player {idx + 1}</h3> <Pokedex pokemons={h} /> </div>)}
  </div>
  )
}


/* simple shuffle array algo function */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

/* Shuffle the pokemon deck and create two hands*/
function createHands() {
  const shuffledPokemons = shuffleArray(POKEMONS);
  return [shuffledPokemons.slice(0, 4), shuffledPokemons.slice(4, 8)];
}


export default Pokegame;