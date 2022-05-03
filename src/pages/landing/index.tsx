import React, { useEffect } from "react";
import { connect } from "react-redux";

import Bg from "../../assets/background/bg1.jpg";
import { Content } from "../../components/Content";
import { LandginView } from "./view";

const Landing = ({ token, history }) => {
  useEffect(() => {
    if (token) history.replace("/dashboard");
  }, []);

  return (
    <Content bgImg={Bg} fullHeight>
      <LandginView />
    </Content>
  );
};

const mapStateToProps = (state: any) => {
  const { token } = state.UserReducer;
  return { token };
};

export default connect(mapStateToProps, undefined)(Landing);
