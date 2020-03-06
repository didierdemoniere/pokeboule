import * as React from "react";
// @ts-ignore
import house from "../images/house.png";

// we can't directly know in advance which filenames images gonna have
// so we import their names from the parcel resolver and store them here
const backgrounds = {
  house
};

interface Props {
  name: string;
}

interface State {}

export default class extends React.Component<Props, State> {
  render() {
    return (
      <div
        style={{ backgroundImage: `url(${backgrounds[this.props.name]})` }}
        className="bg-cover"
      >
        <h1></h1>
      </div>
    );
  }
}
