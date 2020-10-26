import React from 'react';
import { Table } from 'antd';

const TableTrackUsersComponent = ({
  dataSource, column
}) => {
  return (
    <div>
      <Table dataSource={dataSource} columns={column} />
    </div>
  );
};

export default TableTrackUsersComponent;