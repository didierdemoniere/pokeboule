import * as React from "react";
import { connect } from "react-redux";
import { actionCreators, AppState } from "../../state-management";

import Button from "../common/Button";

interface Props {
  goto: typeof actionCreators.goto;
  currentPlace: AppState["currentPlace"];
  done: () => void;
}

interface State {}

class Map extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <Button
          onClick={() => {
            this.props.goto("woods");
            this.props.done();
          }}
        >
          aller dans la foret
        </Button>
        <Button
          onClick={() => {
            this.props.goto("home");
            this.props.done();
          }}
        >
          aller à la maison
        </Button>
      </div>
    );
  }
}

export default connect(
  (state: AppState) => ({
    currentPlace: state.currentPlace
  }),
  {
    goto: actionCreators.goto
  }
)(Map);
