import type { Meta, StoryObj } from "@storybook/react";
import { InputFileComponent } from "../../shared/components/InputComponent";
import Docs from "../assets/docs.png";

const MetaStory: Meta<typeof InputFileComponent> =  {
  title: 'Custom/Data Entry/Input File Component',
  component: InputFileComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default MetaStory;

type Story = StoryObj<typeof InputFileComponent>;

export const Basic: Story = {
  args: {
    placeholder: "Basic input"
  }
};

export const WithPreview: Story = {
  args: {
    placeholder: "with preview",
    preview: Docs
  }
};