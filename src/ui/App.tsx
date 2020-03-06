import * as React from "react";
import Splash from "./Splash";
import Game from "./Game";

interface Props {}

interface State {
  splash_displayed: boolean;
}

export default class App extends React.Component<Props, State> {
  state: State = {
    splash_displayed: false
  };

  startGame() {
    this.setState({
      splash_displayed: true
    });
  }

  render() {
    if (!this.state.splash_displayed) {
      return <Splash start={() => this.startGame()} />;
    } else {
      return <Game />;
    }
  }
}
