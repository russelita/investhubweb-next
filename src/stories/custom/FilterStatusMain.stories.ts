import type { Meta, StoryObj } from "@storybook/react";
import FilterStatusMain from "../../shared/components/FilterStatusMain";

const MetaStory: Meta<typeof FilterStatusMain> =  {
  title: 'Custom/Filter Status Main',
  component: FilterStatusMain,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default MetaStory;

type Story = StoryObj<typeof FilterStatusMain>;

export const Basic: Story = {
  args: {
    onChangeStatus: (e) => console.log(`Changed: ${e}`)
  }
};