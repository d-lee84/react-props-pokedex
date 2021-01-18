
/** Generate one pokecard for a pokemon */

function Pokecard({id, name, type, base_experience}) {
  return (
    <div className="Pokecard">
      <h4 className="Pokecard-name">{name}</h4>
      <img src={pokemonImgUrl(id)} className="Pokecard-img"/>
      <div className="Pokecard-type">Type: {type}</div>
      <div className="Pokecard-exp">EXP: {base_experience}</div>
    </div>
  )
}

/** Generates the pokemon image url */

function pokemonImgUrl(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}