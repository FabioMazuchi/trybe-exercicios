import './Index.css';
import './App.css';
import Pokedex from './components/Pokedex';
import pokemons from './data';

function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      <div className="App">
        {pokemons.map((pokemon) => <Pokedex key={pokemon.id} pokemon={pokemon} />)}
      </div>
    </div>
  );
}

export default App;
