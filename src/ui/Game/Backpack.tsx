import * as React from "react";
import { connect } from "react-redux";
import { actionCreators, AppState } from "../../state-management";

interface Props {
  pokeballGo: typeof actionCreators.pokeballGo;
  content: AppState["backpack"];
}

interface State {}

class Backpack extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <h2>{this.props.content.pokeballs} pokeballs</h2>
        <button onClick={() => this.props.pokeballGo()}>
          Lancer une pokeball
        </button>
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
