import type { Meta, StoryObj } from "@storybook/react";
import { TextAreaComponent } from "../../shared/components/InputComponent";

const MetaStory: Meta<typeof TextAreaComponent> =  {
  title: 'Custom/Data Entry/Text Area Component',
  component: TextAreaComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default MetaStory;

type Story = StoryObj<typeof TextAreaComponent>;

export const Basic: Story = {
  args: {
    placeholder: "Basic TextArea"
  }
};