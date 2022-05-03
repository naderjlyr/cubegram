import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { GiveawayView } from "./view";

const Giveaway = ({ user, history }) => {
  const [isReady, setIsReady] = useState(false);
  const giveawayData = useRef(history.location.state?.giveawayData);
  useEffect(() => {
    if (!giveawayData.current) {
      history.replace("/dashboard");
    } else setIsReady(true);
  }, []);

  const [form, setForm] = useState({ mainCount: 3, saveCount: 3 });
  const [result, setResult] = useState({ main: [] as any[], save: [] as any[] });

  const updateForm = (name: string, value: string) => setForm({ ...form, [name]: value });

  const doGiveaway = () => {
    const max = giveawayData.current.data.gatheredData.length;
    const allArr = [...giveawayData.current.data.gatheredData];
    const mainArr: any[] = [];
    const saveArr: any[] = [];
    for (let i = 0; i < form.mainCount; i++) mainArr.push(allArr[Math.round(Math.random() * max)]);
    for (let i = 0; i < form.saveCount; i++) saveArr.push(allArr[Math.round(Math.random() * max)]);
    setResult({ main: mainArr, save: saveArr });
  };

  return isReady ? (
    <>
      <Header />
      <Content>
        <GiveawayView
          user={user}
          doGiveaway={doGiveaway}
          form={form}
          updateForm={updateForm}
          giveawayData={giveawayData.current}
          result={result}
        />
      </Content>
      <Footer />
    </>
  ) : (
    <></>
  );
};

const mapStateToProps = (state: any) => {
  const user = state.UserReducer;
  return { user };
};

export default connect(mapStateToProps, undefined)(Giveaway);
