import type { Meta, StoryObj } from "@storybook/react";
import CustomTable from "../../shared/components/CustomTable";
import { ColumnsType } from "antd/es/table";

const MetaStory: Meta<typeof CustomTable> = {
  title: 'Custom/Custom Table',
  component: CustomTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default MetaStory;

type Story = StoryObj<typeof CustomTable>;

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

export const Display: Story = {
  args: {
    DEFAULT_PAGE_SIZE: [10, 20, 50, 100],
    columns: columns,
    dataSource: data,
    loading: false,
    onChange: () => {},
    onChangePageSize: () => {},
    total: 100,
    pageSizes: 10,
    pages: 1,
    xScroll: 1830,
  }
};