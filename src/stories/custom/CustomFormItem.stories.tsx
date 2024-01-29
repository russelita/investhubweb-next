import type { Meta } from "@storybook/react";
import { CustomFormItem,  } from "@/shared/components/Form/CustomForm";
import { Input } from "antd";

const MetaStory: Meta<typeof CustomFormItem> = {
  title: 'Custom/Custom Form Item',
  component: CustomFormItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default MetaStory;

// type Story = StoryObj<typeof CustomFormItem>;

export const BasicInput = () => {
  return (
    <CustomFormItem
      label="Input"
      name="input"
      rules={[{ type: 'string', required: true, message: 'Please input your String!' }]}
    >
      <Input />
    </CustomFormItem>
  );
};

export const Password = () => {
  return (
    <CustomFormItem
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </CustomFormItem>
  );
};

