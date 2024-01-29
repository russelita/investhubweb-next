import type { Meta, StoryObj } from "@storybook/react";
import SelectComponent from "../../shared/components/SelectComponent";

const MetaStory: Meta<typeof SelectComponent> =  {
  title: 'Custom/Data Entry/Select Component',
  component: SelectComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default MetaStory;

type Story = StoryObj<typeof SelectComponent>;

const options = [
  {
    label: 'All',
    value: 2,
  },
  {
    label: 'Active',
    value: 1,
  },
  {
    label: 'Inactive',
    value: 0,
  },
];

export const Basic: Story = {
  args: {
    onChange: ()=> {},
    placeholder: "-- Choose Status --",
    optionFilterProp: "children",
    options: options,
    title: "Choose Status",
    className: "filter-main",
    style: { height: '44px', width: '100px' }
  }
};

export const BasicWithSearch: Story = {
  args: {
    onChange: ()=> {},
    showSearch: true,
    placeholder: "-- Choose Status --",
    optionFilterProp: "children",
    options: options,
    title: "Choose Status",
    className: "filter-main",
    style: { height: '44px', width: '100px' }
  }
};