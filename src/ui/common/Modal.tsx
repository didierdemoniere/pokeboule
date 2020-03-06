import * as React from "react";

export interface Props {
  title: string;
  actions: {
    close: () => void;
    [key: string]: () => void;
  };
}

export default class extends React.PureComponent<Props> {
  render() {
    return (
      <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div className="modal-overlay absolute w-full h-full bg-transparent"></div>

        <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          {/* Add margin if you want to see some of the overlay behind the modal */}
          <div className="modal-content py-4 text-left px-6">
            {/* Title */}
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold">{this.props.title}</p>
              <div
                onClick={() => this.props.actions.close()}
                className="modal-close cursor-pointer z-50"
              >
                <svg
                  className="fill-current text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </div>
            </div>

            {/* Body */}
            {this.props.children}

            {/* Footer */}
            <div className="flex justify-end pt-2">
              {Object.keys(this.props.actions)
                .filter(name => name !== "close")
                .map(actionName => (
                  <button
                    onClick={this.props.actions[actionName]}
                    className="px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400"
                  >
                    {actionName}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
