import type { Meta, StoryObj } from "@storybook/react";
import CustomCard from "../../shared/components/CustomCard";

const MetaStory: Meta<typeof CustomCard> =  {
  title: 'Custom/Custom Card',
  component: CustomCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default MetaStory;

type Story = StoryObj<typeof CustomCard>;

export const Default: Story = {
  args: {
    children: (
      <p>Custom Card</p>
    ),
    title: "Default size card"
  }
};

export const Loading: Story = {
  args: {
    loading: true,
    children: (
      <p style={{ color: 'red' }}>Custom Card</p>
    ),
    title: "Default size card"
  }
};