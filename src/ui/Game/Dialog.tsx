import * as React from "react";
import { connect } from "react-redux";
import { AppState, store, actionCreators } from "../../state-management";
import Button from "../common/Button";

interface Props {
  className: string;
  message: AppState["dialog"]["content"];
  actions: AppState["dialog"]["actions"];
}

interface State {}

class Dialog extends React.Component<Props, State> {
  render() {
    if (this.props.message) {
      return (
        <div className="absolute bottom-0 w-full h-40 p-4">
          <div className="bg-white w-full h-32 rounded border-double border-8 border-gray-900 p-4">
            <p>{this.props.message}</p>
            <div className="float-right">
              {Object.keys(this.props.actions || {}).map((label, id) => (
                <Button
                  key={id.toString()}
                  onClick={() => {
                    const { actionCreatorName, args } = this.props.actions[
                      label
                    ];
                    const actionCreator = actionCreators[actionCreatorName];
                    store.dispatch(actionCreator(...args));
                  }}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default connect((state: AppState) => ({
  message: state.dialog.content,
  actions: state.dialog.actions
}))(Dialog);
