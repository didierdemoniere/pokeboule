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
            className={this.props.className}
          />
        );
      } else {
        return (
          <div className="pokeball">
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
