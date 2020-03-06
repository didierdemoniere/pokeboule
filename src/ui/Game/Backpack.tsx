import * as React from "react";
import { connect } from "react-redux";
import { actionCreators, AppState } from "../../state-management";

interface Props {
  pokeballGo: typeof actionCreators.pokeballGo;
  content: AppState["backpack"];
  done: () => void;
}

interface State {}

class Backpack extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <h2>Objects</h2>
        <ul>
          <li>{this.props.content.pokeballs} pokeballs</li>
        </ul>
        <button
          className="bg-pokeblue text-white rounded"
          onClick={() => {
            this.props.pokeballGo();
            this.props.done();
          }}
        >
          Lancer une pokeball
        </button>
        <h2>Pokemons</h2>
        <div className="grid grid-flow-row grid-cols-3 gap-2 h-64 overflow-scroll">
          {this.props.content.pokemons.map((pokemon, key) => {
            console.log(pokemon);
            return (
              <div
                key={key}
                className="flex flex-col items-center justify-around text-center"
              >
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                  alt={pokemon.name}
                />
                <div className="text-sm">
                  <p className="text-gray-900 font-bold leading-loose">
                    {pokemon.name}
                  </p>
                  <p className="text-gray-600">
                    <span className="inline-block bg-gray-200 rounded px-3 py-1 text-xs font-semibold text-gray-700 mr-2">
                      détails
                    </span>
                    <span className="inline-block bg-gray-200 rounded px-3 py-1 text-xs font-semibold text-gray-700 mr-2">
                      libérer
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(
  (state: AppState) => ({
    content: state.backpack
  }),
  {
    pokeballGo: actionCreators.pokeballGo
  }
)(Backpack);
