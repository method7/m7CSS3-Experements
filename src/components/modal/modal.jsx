import { Welcome, GoodBye } from ".";
import React from "react";
import AriaModal from "react-aria-modal";
import PropTypes from 'prop-types';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  components = {
    welcome: Welcome,
    goodBye: GoodBye
  };
  render() {
    const { modalActive } = this.props;

    let dialogContentClass = "modal modal--animated";
    let underlayClass = "underlay";
    if (this.state.modalHasEntered) {
      dialogContentClass += " has-entered";
      underlayClass += " has-entered";
    }
    const TagName = this.components[this.props.Content || "welcome"];

    return (
      <div>
        <AriaModal
          titleText="demo five"
          onEnter={this.onModalEnter}
          onExit={this.deactivateModal}
          focusDialog={true}
          mounted={modalActive}
          underlayColor={false}
          underlayClass={underlayClass}
          underlayStyle={{ paddingTop: "2em" }}
        >
          <div className={dialogContentClass}>
            <TagName />
            <footer className="modal-footer">
              <button role="button" onClick={this.deactivateModal}>
                deactivate modal
              </button>
            </footer>
          </div>
        </AriaModal>
      </div>
    );
  }

  deactivateModal = () => {
    this.setState(
      {
        modalHasEntered: false
      },
      () => {
        setTimeout(() => {
          this.props.setModalState(false);
        }, 300);
      }
    );
  };

  onModalEnter = () => {
    this.setState({ modalHasEntered: true });
  };
}

Modal.propTypes = {
  modalActive: PropTypes.bool.isRequired,
  Content: PropTypes.string,
  setModalState: PropTypes.func.isRequired
}

export default Modal;
