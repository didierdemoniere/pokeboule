import * as React from "react";
// @ts-ignore
import logo from "./images/logo.png";
import Button from "./Button";

interface Props {
  start: () => void;
}

interface State {}

export default class extends React.Component<Props, State> {
  render() {
    return (
      <div
        id="splash"
        className="flex flex-col items-center justify-between py-12"
      >
        <img id="logo" src={logo} alt="pokeboule" />

        <div id="menu">
          <Button onClick={this.props.start}>Nouvelle Partie</Button>
        </div>
      </div>
    );
  }
}
