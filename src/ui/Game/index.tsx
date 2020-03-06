import * as React from "react";
import Menu from "./Menu";
import Place from "./Place";
import Modal from "../common/Modal";
import { Props as ModalProps } from "../common/Modal";

interface Props {}

interface State {
  modal?: ModalProps;
}

/**
 * root component of the game
 */
export default class extends React.Component<Props, State> {
  state: State = {
    modal: null
  };

  openModal(title: ModalProps["title"], actions: ModalProps["actions"]) {
    this.setState({
      modal: {
        title,
        actions
      }
    });
  }

  closeModal() {
    this.setState({
      modal: null
    });
  }

  render() {
    return (
      <div>
        <Menu
          actions={{
            closeModal: this.closeModal.bind(this),
            openModal: this.openModal.bind(this)
          }}
          className="absolute right-0 bg-gray-100 p-4 m-4 rounded overflow-hidden shadow-lg"
        />
        <Place name="house">
          {this.state.modal ? (
            <Modal
              title={this.state.modal.title}
              actions={this.state.modal.actions}
            />
          ) : (
            <br />
          )}
        </Place>
      </div>
    );
  }
}
