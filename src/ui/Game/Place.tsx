import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "../../state-management";

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
  currentPlace: AppState["currentPlace"];
}

interface State {}

/**
 * Display a particular place
 * by showing a background image
 */
class Place extends React.Component<Props, State> {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${backgrounds[this.props.currentPlace]})`
        }}
        className="flex flex-col items-center justify-center full-screen bg-cover"
      >
        {this.props.children}
      </div>
    );
  }
}

export default connect((state: AppState) => ({
  currentPlace: state.currentPlace
}))(Place);
