import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";

import { getUserJobsApi } from "../../api/userApis";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { notifyError } from "../../components/Notifications";
import { HistoryView } from "./view";

const initArr = Array(5).fill({ frontEndData: { detail: {} } });

const History = ({ user, history }) => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState({ PREPARING: initArr, READY: initArr, COMPLETED: initArr, FAILED: initArr });

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = useCallback(async () => {
    try {
      setLoading(true);
      const jobs = await getUserJobsApi(user.token);
      setJobs(jobs);
      setLoading(false);
    } catch (error) {
      notifyError("سرور", error.message || error, 5);
    }
  }, []);

  const navigateGiveaway = (data: any) => history.push("/giveaway", { giveawayData: data });

  return (
    <>
      <Header active="history" />
      <Content>
        <HistoryView jobs={jobs} loading={loading} navigateGiveaway={navigateGiveaway} />
      </Content>
      <Footer />
    </>
  );
};

const mapStateToProps = (state: any) => {
  const user = state.UserReducer;
  return { user };
};

export default connect(mapStateToProps, undefined)(History);
