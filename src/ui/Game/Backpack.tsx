import * as React from "react";
import { connect } from "react-redux";
import { actionCreators, AppState } from "../../state-management";
import { mapObjectToList } from "../../utils";

interface Props {
  pokeballGo: typeof actionCreators.pokeballGo;
  freePokemon: typeof actionCreators.freePokemon;
  content: AppState["backpack"];
  done: () => void;
}

interface State {
  detailsOf?: any;
}

class Backpack extends React.Component<Props, State> {
  state: State = {};

  showDetailsOf(pokemon) {
    this.setState({
      detailsOf: pokemon
    });
  }

  back() {
    this.setState({
      detailsOf: null
    });
  }

  render() {
    if (!this.state.detailsOf) {
      return (
        <div>
          <p className="flex items-center justify-between mb-2">
            <span>pokeballs: {this.props.content.pokeballs}</span>
            <button
              className="bg-pokeblue text-white rounded p-1"
              onClick={() => {
                this.props.pokeballGo();
                this.props.done();
              }}
            >
              Lancer une pokeball
            </button>
          </p>

          <h2>Pokemons</h2>
          <div className="grid grid-flow-row grid-cols-3 gap-2 h-56 overflow-scroll">
            {this.props.content.pokemons.map((pokemon, key) => {
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
                      <span
                        onClick={() => this.showDetailsOf(pokemon)}
                        className="inline-block bg-gray-200 rounded px-3 py-1 text-xs font-semibold text-gray-700 mr-2"
                      >
                        détails
                      </span>
                      <span
                        onClick={() => this.props.freePokemon(pokemon.id)}
                        className="inline-block bg-gray-200 rounded px-3 py-1 text-xs font-semibold text-gray-700 mr-2"
                      >
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
    } else {
      return (
        <div>
          <p>
            <button
              onClick={() => this.back()}
              className="bg-pokeblue text-white rounded p-1"
            >
              Retour
            </button>
          </p>
          <div className="h-56 overflow-scroll">
            {mapObjectToList(
              this.state.detailsOf,
              (key, value) => (
                <li key={key}>
                  {key}: {value}
                </li>
              ),
              (key, result) => (
                <ul key={key} className="list-disc">
                  {result}
                </ul>
              )
            )}
          </div>
        </div>
      );
    }
  }
}

export default connect(
  (state: AppState) => ({
    content: state.backpack
  }),
  {
    pokeballGo: actionCreators.pokeballGo,
    freePokemon: actionCreators.freePokemon
  }
)(Backpack);
