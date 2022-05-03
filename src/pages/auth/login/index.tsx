import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { authLoginApi } from "../../../api/authApis";
import Bg from "../../../assets/background/bg1.jpg";
import { Content } from "../../../components/Content";
import { notifyError } from "../../../components/Notifications";
import { updateUserAct } from "../../../redux/reducers/user";
import { IUser } from "../../../utils/interfaces/IUser";
import { irMobileRegex } from "../../../utils/regex";
import { LoginView } from "./view";

export const Login = ({ updateUser, history, token }) => {
  useEffect(() => {
    if (token) history.replace("/dashboard");
  }, []);

  const [form, setForm] = useState({ phone: "", password: "" });
  const [loading, setLoading] = useState(false);

  const updateForm = (key: string, val: string) => setForm({ ...form, [key]: val });

  const doLogin = async (e: any) => {
    e.preventDefault();
    const { phone, password } = form;
    try {
      if (phone.length < 11 || !phone.match(irMobileRegex))
        return notifyError("اعتبارسنجی", "تلفن‌همراه نامعتبر می‌باشد", 3);
      if (!password) return notifyError("اعتبارسنجی", "رمزعبور نامعتبر می‌باشد", 3);

      setLoading(true);
      const user = await authLoginApi({ phone, password });
      updateUser(user);
      history.replace("/dashboard");
    } catch (error) {
      notifyError("سرور", error.message || error, 5);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Content bgImg={Bg} fullHeight>
      <LoginView doLogin={doLogin} form={form} updateForm={updateForm} loading={loading} />
    </Content>
  );
};

const mapStateToProps = (state: any) => {
  const { token } = state.UserReducer;
  return { token };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateUser: (user: IUser) => dispatch(updateUserAct(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
