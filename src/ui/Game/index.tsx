import * as React from "react";
import Place from "./Place";

interface Props {}

interface State {}

/**
 * root component of the game
 */
export default class extends React.Component<Props, State> {
  render() {
    return (
      <div className="full-screen">
        <Place name="house" />
      </div>
    );
  }
}
