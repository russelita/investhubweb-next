import type { Meta, StoryObj } from "@storybook/react";
import { InputPasswordComponent } from "../../shared/components/InputComponent";

const MetaStory: Meta<typeof InputPasswordComponent> =  {
  title: 'Custom/Data Entry/Input Password Component',
  component: InputPasswordComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default MetaStory;

type Story = StoryObj<typeof InputPasswordComponent>;

export const Basic: Story = {
  args: {
    placeholder: "Basic input"
  }
};