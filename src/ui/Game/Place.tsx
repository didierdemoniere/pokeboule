import * as React from "react";
// @ts-ignore
import home from "../images/home.png";
// @ts-ignore
import woods from "../images/woods.jpg";

// we can't directly know in advance which filenames images gonna have
// so we import thoses filenames from the parcel resolver and store them here
const backgrounds = {
  home,
  woods
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
        className="full-screen bg-cover"
      >
        {this.props.children}
      </div>
    );
  }
}
