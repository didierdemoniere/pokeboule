import * as React from "react";
import Backpack from "./Backpack";
import Map from "./Map";
// @ts-ignore
import backpack from "../images/icons/backpack.png";
// @ts-ignore
import move from "../images/icons/move.png";

interface Props {
  className: string;
  actions: {
    closeModal(): void;
    openModal(
      title: string,
      actions: {
        [key: string]: () => void;
      },
      children?: React.ReactNode
    ): void;
  };
}

interface State {}

/**
 * An in game menu
 */
export default class extends React.Component<Props, State> {
  /**
   * trigger backpack modal opening
   * @see Modal component and Game component for more details
   */
  openBackPack() {
    this.props.actions.openModal(
      "Sac a dos",
      {
        close: this.props.actions.closeModal
      },
      <Backpack done={this.props.actions.closeModal} />
    );
  }

  leave() {
    this.props.actions.openModal(
      "Où est-ce qu'on va ?",
      {
        close: this.props.actions.closeModal
      },
      <Map done={this.props.actions.closeModal} />
    );
  }

  render() {
    return (
      <div className={this.props.className}>
        <button
          onClick={() => this.openBackPack()}
          className="flex items-center my-2"
        >
          <img className="w-10 h-10 mr-4" src={backpack} alt="sac à dos" />
          <div className="text-sm text-left">
            <p className="text-gray-900 leading-none">Sac à dos</p>
            <p className="text-gray-600">un puits sans fond</p>
          </div>
        </button>
        <button
          onClick={() => this.leave()}
          className="flex items-center my-2 mt-4"
        >
          <img className="w-10 h-10 mr-4" src={move} alt="partir" />
          <div className="text-sm text-left">
            <p className="text-gray-900 leading-none">Partir</p>
            <p className="text-gray-600">en route pour l'aventure</p>
          </div>
        </button>
      </div>
    );
  }
}
