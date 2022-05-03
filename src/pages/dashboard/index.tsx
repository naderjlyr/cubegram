import React, { useCallback, useState } from "react";
import { connect } from "react-redux";

import { newGiveawayApi } from "../../api/giveawayApis";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { GiveawayTypeModal } from "../../components/Modals/GiveawayType";
import { notifyError, notifySuccess } from "../../components/Notifications";
import { DashboardView } from "./view";

const Dashboard = ({ user }) => {
  const [showGTModal, setShowGTModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [postUrl, setPostUrl] = useState("");

  const hideGTModal = useCallback(() => setShowGTModal(false), []);

  const displayGTModal = () => {
    if (!postUrl || !postUrl.includes("instagram.com/p/")) {
      notifyError("لینک پست", "لینک پست وارد شده معتبر نمی‌باشد", 3);
    } else {
      setShowGTModal(true);
    }
  };

  const search = async (from: "likes" | "comments") => {
    try {
      setLoading(true);
      await newGiveawayApi(postUrl, from, user.token);
      hideGTModal();
      notifySuccess("قرعه‌کشی شما اضافه شد، برای مشاهده وضعیت آن به صفحه تاریخچه مراجعه کنید", undefined, 10);
    } catch (error) {
      notifyError("سرور", error.message || error, 5);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header active="explore" />
      <Content>
        <DashboardView
          loading={loading}
          postUrl={postUrl}
          setPostUrl={setPostUrl}
          displayGTModal={displayGTModal}
          user={user}
        />
        <GiveawayTypeModal isVisible={showGTModal} close={hideGTModal} callback={search} loading={loading} />
      </Content>
      <Footer />
    </>
  );
};

const mapStateToProps = (state: any) => {
  const user = state.UserReducer;
  return { user };
};

export default connect(mapStateToProps, undefined)(Dashboard);
