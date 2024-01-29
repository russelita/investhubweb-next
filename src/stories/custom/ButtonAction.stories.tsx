import type { Meta, StoryObj } from "@storybook/react";
import ButtonAction from "../../shared/components/ButtonAction";

const MetaStory: Meta<typeof ButtonAction> =  {
  title: 'Custom/Button/Button Action',
  component: ButtonAction,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default MetaStory;

type Story = StoryObj<typeof ButtonAction>;

export const Display: Story = {
  args: {
    children: 'Display',
    typeAction: 'display',
    onClick: () => alert('display')
  }
};

export const Edit: Story = {
  args: {
    children: 'Edit',
    typeAction: 'edit',
    onClick: () => alert('edited')
  }
};

export const Remove: Story = {
  args: {
    children: 'Remove',
    typeAction: 'remove',
    onDelete: () => alert('deleted')
  }
};

export const Manage: Story = {
  args: {
    children: 'Manage',
    typeAction: 'manage',
    onClick: () => alert('manage')
  }
};

export const Refresh: Story = {
  args: {
    children: 'Refresh',
    typeAction: 'refresh',
    onRefresh: () => alert('refresh')
  }
};
