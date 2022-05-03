import "./styles.css";

import { Button, notification } from "antd";
import React from "react";
import * as TiIcon from "react-icons/ti";

export const notifyError = (
  title: string,
  error: string,
  duration = 0,
  icon: React.ReactNode = <TiIcon.TiWarning />,
  btn: { text: string; onClick: any } | null = null,
) => {
  const key = `${new Date().getTime()}`;
  notification.error({
    key,
    duration,
    icon,
    message: title,
    closeIcon: <TiIcon.TiTimes color="#fff" size={22} />,
    description: error,
    className: "err-notif",
    btn: btn && (
      <Button ghost size="middle" type="dashed" onClick={btn.onClick}>
        {btn.text}
      </Button>
    ),
  });
  return key;
};

export const notifySuccess = (message: string, icon: React.ReactNode = <TiIcon.TiTick />, duration = 5) => {
  notification.success({
    duration,
    icon,
    message: "عملیات موفق",
    closeIcon: <TiIcon.TiTimes color="#fff" size={22} />,
    description: message,
    className: "success-notif",
  });
};
