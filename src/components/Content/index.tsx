import "./styles.css";

import { Layout, Row } from "antd";
import React, { useMemo } from "react";

export const Content = ({ children, bgImg = undefined as any, fullHeight = false }) => {
  const mainStyle = useMemo(() => {
    const styles: any = {};
    if (bgImg) styles.backgroundImage = `url(${bgImg})`;
    if (fullHeight) styles.minHeight = "100%";
    return styles;
  }, [bgImg]);

  return (
    <Layout className="main-layout" style={mainStyle}>
      <Layout.Content className="content">
        <Row className="body">{children}</Row>
      </Layout.Content>
    </Layout>
  );
};
