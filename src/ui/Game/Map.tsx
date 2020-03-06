import * as React from "react";

interface Props {
  actions: {
    goSomeWhere: (place: "home" | "woods") => void;
  };
}

interface State {}

export default class extends React.Component<Props, State> {
  render() {
    return <h2>dislay all destination possible</h2>;
  }
}
