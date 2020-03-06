import * as React from "react";
// @ts-ignore
import backpack from "../images/icons/backpack.png";

interface Props {
  className: string;
}

interface State {}

/**
 * An in game menu
 */
export default class extends React.Component<Props, State> {
  render() {
    return (
      <div className={this.props.className}>
        <button className="flex items-center">
          <img className="w-10 h-10 mr-4" src={backpack} alt="sac a dos" />
          <div className="text-sm text-left">
            <p className="text-gray-900 leading-none">Sac à dos</p>
            <p className="text-gray-600">un puits sans fond</p>
          </div>
        </button>
      </div>
    );
  }
}
