import { Progress } from "antd";
import React, { useCallback, useMemo } from "react";

import CommentImg from "../../assets/svg/comment-gray.svg";
import LikeImg from "../../assets/svg/like-gray.svg";

export const HistoryCard = ({ job, navigateGiveaway = (job: any) => null }) => {
  const isReadyStyle = useMemo(() => (job.status === "READY" ? { cursor: "pointer" } : {}), []);
  const isPreparingStatus = useMemo(() => (job.status === "PREPARING" ? "active" : "normal"), []);

  const navigate = useCallback(() => navigateGiveaway && navigateGiveaway(job), []);

  return (
    <div onClick={navigate} style={isReadyStyle}>
      <img alt="تصویر کار" src={job.frontEndData.detail.imageUrl} />
      <span>{job.frontEndData.name}</span>
      <Progress
        strokeColor={{ from: "#fe6666", to: "#e22a6f" }}
        percent={job.frontEndData.percent}
        strokeWidth={24}
        status={isPreparingStatus}
      />
      <hr />
      <div className="history-section-job-detail">
        <div>
          <img alt="کامنت" src={CommentImg} />
          <span>{job.frontEndData.detail.commentsCount}</span>
        </div>
        <div>
          <img alt="لایک" src={LikeImg} />
          <span>{job.frontEndData.detail.likesCount}</span>
        </div>
      </div>
    </div>
  );
};
