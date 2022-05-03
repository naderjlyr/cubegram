import "./styles.css";

import { Button, Input } from "antd";
import React, { useCallback, useRef, useState } from "react";
import * as MdIcon from "react-icons/md";
import Modal from "react-modal";

import { userUpdateApi } from "../../../api/userApis";
import Logo from "../../../assets/svg/logo-gray.svg";
import { notifyError, notifySuccess } from "../../Notifications";

export const ProfileModal = ({ isVisible, user, updateUser, close }) => {
  const logoInput = useRef(null as any);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    brandImg: user.brand?.imageUrl,
    brandName: user.brand?.name,
    name: user.name,
    currentPassword: "",
    newPassword: "",
    newPasswordRepeat: "",
  });

  const updateForm = (key: string, val: string) => setForm({ ...form, [key]: val });
  const openFilePickDialog = useCallback(() => logoInput.current.click(), []);

  const updateLogo = () => {
    const reader = new FileReader();
    const file = logoInput.current.files[logoInput.current.files.length - 1];
    reader.onload = (event: any) => updateForm("brandImg", event.target.result);
    if (file) reader.readAsDataURL(file);
  };

  const doSave = async (e: any) => {
    e.preventDefault();
    const { newPassword, newPasswordRepeat } = form;
    try {
      if ((newPassword || newPasswordRepeat) && newPassword !== newPasswordRepeat) {
        return notifyError("اعتبارسنجی", "رمزعبور جدید و تکرار آن یکسان نیستند", 3);
      }
      const newForm = { ...form };
      delete newForm.newPasswordRepeat;
      if (form.brandImg === user.brand?.imageUrl) {
        delete newForm.brandImg;
      } else {
        newForm.brandImg = logoInput.current.files[logoInput.current.files.length - 1];
      }
      setLoading(true);
      updateUser(await userUpdateApi(newForm, user.token));
      notifySuccess("اطلاعات با موفقیت بروز شدند", undefined, 3);
    } catch (error) {
      notifyError("سرور", error.message || error, 5);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isVisible} onRequestClose={close} closeTimeoutMS={300} portalClassName="modal-profile">
      <div className="modal-profile-container">
        <div>
          <MdIcon.MdClose color="#fff" size={32} className="modal-profile-close" onClick={close} />
          <div className="modal-profile-logo">
            <input type="file" accept=".png" ref={logoInput} onChange={updateLogo} />
            <img src={form.brandImg || Logo} alt="لوگو" onClick={openFilePickDialog} />
          </div>
          <span className="modal-profile-logo-desc">فایل لوگو خود را بارگذاری کنید</span>
          <span className="modal-profile-logo-desc-info">فایل PNG با ابعاد 512x512</span>
        </div>
        <div>
          <span className="modal-profile-change-title">تغییر اطلاعات حساب</span>
          <div className="modal-profile-input-group">
            <span>نام برند</span>
            <Input
              disabled={loading}
              value={form.brandName}
              onChange={(e) => updateForm("brandName", e.currentTarget.value)}
            />
          </div>
          <div className="modal-profile-input-group">
            <span>نام و نام‌خانوادگی</span>
            <Input disabled={loading} value={form.name} onChange={(e) => updateForm("name", e.currentTarget.value)} />
          </div>
          <span className="modal-profile-change-title">تغییر رمزعبور</span>
          <div className="modal-profile-input-group">
            <span>رمزعبور قبلی</span>
            <Input
              type="password"
              disabled={loading}
              value={form.currentPassword}
              onChange={(e) => updateForm("currentPassword", e.currentTarget.value)}
            />
          </div>
          <div className="modal-profile-input-group">
            <span>رمزعبور جدید</span>
            <Input
              type="password"
              disabled={loading}
              value={form.newPassword}
              onChange={(e) => updateForm("newPassword", e.currentTarget.value)}
            />
          </div>
          <div className="modal-profile-input-group">
            <span>تکرار رمزعبور جدید</span>
            <Input
              type="password"
              disabled={loading}
              value={form.newPasswordRepeat}
              onChange={(e) => updateForm("newPasswordRepeat", e.currentTarget.value)}
            />
          </div>
          <div className="modal-profile-save-container">
            <Button loading={loading} disabled={loading} shape="round" className="modal-profile-save" onClick={doSave}>
              ثبت تغییرات
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
