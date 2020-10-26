import React, { useState, useEffect } from "react";
import Head from "next/head";
import { DashboardLayout } from "../../Components";
import { Row, Col } from "antd";
import { TableTrackUsers } from "../../Containers";

const Dashboard = () => {
  const [dataTrackUsers, setDataTrackUsers] = useState([]);

  useEffect(() => {
    const trackUsersLocalStorage = JSON.parse(
      localStorage.getItem("trackuserslog")
    );
    if (trackUsersLocalStorage !== null) {
      setDataTrackUsers(trackUsersLocalStorage);
    }
  }, []);
  return (
    <div>
      <Head>
        <title>History User Login -Logintracker</title>
      </Head>
      <DashboardLayout>
        <Row>
          <Col span={24}>
            <h2>History user</h2>
            <TableTrackUsers dataSource={dataTrackUsers} />
          </Col>
        </Row>
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
