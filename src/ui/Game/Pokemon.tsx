import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "../../state-management";

interface Props {
  className: string;
  encounter: AppState["encounter"];
}

interface State {}

class Pokemon extends React.Component<Props, State> {
  render() {
    if (this.props.encounter.pokemon) {
      if (!this.props.encounter.catch) {
        return (
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.encounter.pokemon.id}.png`}
            width="300"
            className="mt-24"
          />
        );
      } else {
        return (
          <div className="pokeball mt-32">
            <div className="pokeball__button"></div>
          </div>
        );
      }
    }
    return null;
  }
}

export default connect((state: AppState) => ({
  encounter: state.encounter
}))(Pokemon);
