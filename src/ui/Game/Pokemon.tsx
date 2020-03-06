import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "../../state-management";

interface Props {
  className: string;
  pokemon: AppState["displayed_pokemon"];
}

interface State {}

class Pokemon extends React.Component<Props, State> {
  render() {
    if (this.props.pokemon) {
      return (
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.pokemon.id}.png`}
          width="300"
          className={this.props.className}
        />
      );
    }
    return null;
  }
}

export default connect((state: AppState) => ({
  pokemon: state.displayed_pokemon
}))(Pokemon);
