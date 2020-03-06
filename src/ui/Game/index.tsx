import * as React from "react";
import Menu from "./Menu";
import Place from "./Place";

interface Props {}

interface State {}

/**
 * root component of the game
 */
export default class extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <Menu className="absolute right-0 bg-gray-100 p-4 m-4 rounded overflow-hidden shadow-lg" />
        <Place name="house">
          <h1>hewlcome</h1>
        </Place>
      </div>
    );
  }
}
