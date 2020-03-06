import * as React from "react";
import { connect } from "react-redux";
import { actionCreators, AppState } from "../state-management";
import Splash from "./Splash";
import Game from "./Game/index";

interface Props {
  game_started: boolean;
  startGame: () => void;
}

interface State {}

class App extends React.Component<Props, State> {
  startGame() {
    this.props.startGame();
  }

  render() {
    if (!this.props.game_started) {
      return <Splash start={() => this.startGame()} />;
    } else {
      return <Game />;
    }
  }
}

export default connect(
  (state: AppState) => ({
    game_started: state.game_started
  }),
  {
    startGame: actionCreators.startGame
  }
)(App);
