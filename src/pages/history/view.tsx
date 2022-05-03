import "./styles.css";

import { Skeleton } from "antd";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

import { HistoryCard } from "./card";

export const HistoryView = ({ jobs, loading, navigateGiveaway }) => {
  return (
    <div className="history-container">
      <div className="history-section">
        <span className="history-section-title">کارهای درحال آماده‌سازی</span>
        <ScrollContainer className="history-section-jobs">
          {jobs.PREPARING.map((job, i) => (
            <Skeleton key={i} active loading={loading} avatar round>
              <HistoryCard job={job} />
            </Skeleton>
          ))}
          <span>0</span>
        </ScrollContainer>
      </div>
      <div className="history-section">
        <span className="history-section-title">کارهای آماده اجرا</span>
        <ScrollContainer className="history-section-jobs">
          {jobs.READY.map((job, i) => (
            <Skeleton key={i} active loading={loading} avatar round>
              <HistoryCard job={job} navigateGiveaway={navigateGiveaway} />
            </Skeleton>
          ))}
          <span>0</span>
        </ScrollContainer>
      </div>
      <div className="history-section">
        <span className="history-section-title">کارهای تکمیل شده</span>
        <ScrollContainer className="history-section-jobs">
          {jobs.COMPLETED.map((job, i) => (
            <Skeleton key={i} active loading={loading} avatar round>
              <HistoryCard job={job} />
            </Skeleton>
          ))}
          <span>0</span>
        </ScrollContainer>
      </div>
      <div className="history-section">
        <span className="history-section-title">کارهای ناموفق</span>
        <ScrollContainer className="history-section-jobs">
          {jobs.FAILED.map((job, i) => (
            <Skeleton key={i} active loading={loading} avatar round>
              <HistoryCard job={job} />
            </Skeleton>
          ))}
          <span>0</span>
        </ScrollContainer>
      </div>
    </div>
  );
};
