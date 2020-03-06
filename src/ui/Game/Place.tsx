import * as React from "react";
// @ts-ignore
import house from "../images/house.png";

// we can't directly know in advance which filenames images gonna have
// so we import thoses filenames from the parcel resolver and store them here
const backgrounds = {
  house
};

interface Props {
  name: string;
}

interface State {}

/**
 * Display a particular place
 * by showing a background image
 */
export default class extends React.Component<Props, State> {
  render() {
    return (
      <div
        style={{ backgroundImage: `url(${backgrounds[this.props.name]})` }}
        className="bg-cover"
      >
        {this.props.children}
      </div>
    );
  }
}
