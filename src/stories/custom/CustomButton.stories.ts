import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from "../../shared/components/CustomButton";

const MetaStory: Meta<typeof CustomButton> =  {
  title: 'Custom/Button/Custom Button',
  component: CustomButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default MetaStory;

type Story = StoryObj<typeof CustomButton>;

export const Primary: Story = {
  args: {
    children: 'Submit',
    onClick: () => alert('submit')
  }
};

export const Add: Story = {
  args: {
    children: 'New data',
    typeButton: 'add'
  }
};

export const Download: Story = {
  args: {
    children: 'Download file',
    typeButton: 'download'
  }
};

export const Search: Story = {
  args: {
    typeButton: 'search'
  }
};

export const Filter: Story = {
  args: {
    typeButton: 'filter'
  }
};

export const Danger: Story = {
  args: {
    children: 'delete',
    typeButton: 'danger'
  }
};