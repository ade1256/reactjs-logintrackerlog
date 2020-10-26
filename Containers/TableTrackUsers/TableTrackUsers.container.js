import React from "react";
import moment from "moment";
import TableTrackUsersComponent from "./TableTrackUsers.component";

const TableTrackUsersContainer = ({ dataSource = [] }) => {
  const column = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Login at",
      dataIndex: "loginAt",
      key: "loginAt",
      render: (text) => <>{moment(text).format("DD MMMM YYYY HH:mm")}</>,
    },
  ];
  return <TableTrackUsersComponent dataSource={dataSource} column={column} />;
};

export default TableTrackUsersContainer;
