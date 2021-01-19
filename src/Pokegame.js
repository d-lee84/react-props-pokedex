
import Pokedex, { POKEMONS } from "./Pokedex";

/* randomly generate two players with pokemon hands (4 each), and display them */
function Pokegame() {
  /* Shuffle the pokemon deck and create two hands*/
  function createHands() {
    const shuffledPokemons = shuffleArray(POKEMONS);
    return [
      {pokemons: shuffledPokemons.slice(0, 4)}, 
      {pokemons: shuffledPokemons.slice(4, 8)}];
  }

  /** Take hands and calculate the scores and mutate the object with the scores
   *  property and the isWinner property
   */

  function calculateScores(hands) {
    let [hand1, hand2] = hands;
    hand1.score = hand1.pokemons.reduce((acc, cur) => acc + cur.base_experience, 0);
    hand2.score = hand2.pokemons.reduce((acc, cur) => acc + cur.base_experience, 0);

    if(hand1.score > hand2.score) {
      hand1.isWinner = true;
    } else if(hand1.score < hand2.score) {
      hand2.isWinner = true;
    }
  }

  const hands = createHands();
  calculateScores(hands);

  return (<div className="Pokegame">
    {hands.map((h, idx) => 
      <div> 
        <h3 className="Pokegame-player">Player {idx + 1}</h3> 
        <Pokedex pokemons={h.pokemons} /> 
        <p>Score: {h.score}</p>
        <p>{(h.isWinner === true) ? "YOU ARE THE WINNER!" : ""}</p>
      </div>)}
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




export default Pokegame;