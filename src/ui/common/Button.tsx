import * as React from "react";

interface Props {
  onClick: () => void;
}


export default class extends React.PureComponent<Props> {
  render() {
    return (
      <button
      className="bg-pokeblue hover:bg-blue-700 text-xl text-white font-bold py-3 px-6 border border-blue-700 rounded"
      onClick={this.props.onClick}
    >
      {this.props.children}
    </button>
    );
  }
}
