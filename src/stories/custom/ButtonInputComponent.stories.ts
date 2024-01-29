import type { Meta, StoryObj } from "@storybook/react";
import ButtonInputComponent from "../../shared/components/ButtonInputComponent";

const MetaStory: Meta<typeof ButtonInputComponent> =  {
  title: 'Custom/Button Input Component',
  component: ButtonInputComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default MetaStory;

type Story = StoryObj<typeof ButtonInputComponent>;

export const Basic: Story = {
  args: {}
};

export const Search: Story = {
  args: {
    onSearch: () => alert('search'),
    placeholder: "Search"
  }
};