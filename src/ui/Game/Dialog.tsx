import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "../../state-management";

interface Props {
  className: string;
  message: AppState["dialog"]["content"];
}

interface State {}

class Dialog extends React.Component<Props, State> {
  render() {
    if (this.props.message) {
      return (
        <div className="absolute bottom-0 w-full h-40 p-4">
          <div className="bg-white w-full h-32 rounded border-double border-8 border-gray-900 p-4">
            <p>{this.props.message}</p>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default connect((state: AppState) => ({
  message: state.dialog.content
}))(Dialog);
