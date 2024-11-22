"use client";

import { getDirection } from "@/lib/helpers";
import { ConfigProvider, Table } from "antd";
import { useLocale } from "next-intl";
// import type { TableProps } from 'antd';

interface TableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataSource: Record<string, any>[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any[];
  rowKey?: string;
}

export default function ReusableTable({
  dataSource,
  columns,
  rowKey = "id"
}: TableProps) {
  const locale = useLocale();

  const direction = getDirection(locale || "en");
  return (
    <ConfigProvider direction={direction}>
      <div>
        <Table
          dataSource={dataSource}
          columns={columns}
          rowKey={rowKey}
          pagination={dataSource?.length > 10 ? { pageSize: 10 } : false}
          bordered
        />
      </div>
    </ConfigProvider>
  );
}