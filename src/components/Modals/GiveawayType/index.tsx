import "./styles.css";

import { Button } from "antd";
import React from "react";
import * as MdIcon from "react-icons/md";
import Modal from "react-modal";

export const GiveawayTypeModal = ({ isVisible, close, callback, loading }) => {
  return (
    <Modal isOpen={isVisible} onRequestClose={close} closeTimeoutMS={300} portalClassName="modal-giveawaytype">
      <div className="modal-giveawaytype-container">
        <div>
          <MdIcon.MdClose color="#fff" size={28} className="modal-giveawaytype-close" onClick={close} />
          <span className="modal-giveawaytype-title">نوع مسابقه</span>
        </div>
        <div>
          <span className="modal-giveawaytype-body">مسابقه شما بر چه اساسی می‌باشد ؟</span>
          <div className="modal-giveawaytype-btns">
            <Button
              shape="round"
              disabled={loading}
              loading={loading}
              className="modal-giveawaytype-btns-first"
              onClick={() => callback("comments")}
            >
              کامنت‌ها
            </Button>
            <Button
              shape="round"
              disabled={loading}
              loading={loading}
              className="modal-giveawaytype-btns-second"
              onClick={() => callback("likes")}
            >
              لایک‌ها
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
