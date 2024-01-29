import type { Meta, StoryObj } from "@storybook/react";
import { InputComponent } from "../../shared/components/InputComponent";

const MetaStory: Meta<typeof InputComponent> =  {
  title: 'Custom/Data Entry/Input Component',
  component: InputComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default MetaStory;

type Story = StoryObj<typeof InputComponent>;

export const Basic: Story = {
  args: {
    placeholder: "Basic input"
  }
};