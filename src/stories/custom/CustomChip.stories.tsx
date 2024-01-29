import type { Meta, StoryObj } from "@storybook/react";
import CustomChip from "../../shared/components/CustomChip";
import { CheckCircleOutlined, CloseCircleOutlined, ExclamationCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";

const MetaStory: Meta<typeof CustomChip> =  {
  title: 'Custom/Custom Chip',
  component: CustomChip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default MetaStory;

type Story = StoryObj<typeof CustomChip>;

export const Primary: Story = {
  args: {
    children: "Primary"
  }
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    typeChip: "SECONDARY"
  }
};

export const Success: Story = {
  args: {
    children: "Success",
    typeChip: "SUCCESS"
  }
};

export const SuccessIcon: Story = {
  args: {
    children: "Success Icon",
    typeChip: "SUCCESS",
    icon: <CheckCircleOutlined />
  }
};

export const Warning: Story = {
  args: {
    children: "Warning",
    typeChip: "WARNING"
  }
};

export const WarningIcon: Story = {
  args: {
    children: "Warning Icon",
    typeChip: "WARNING",
    icon: <ExclamationCircleOutlined />
  }
};

export const Info: Story = {
  args: {
    children: "Info",
    typeChip: "INFO"
  }
};

export const InfoIcon: Story = {
  args: {
    children: "Info Icon",
    typeChip: "INFO",
    icon: <InfoCircleOutlined />
  }
};

export const Error: Story = {
  args: {
    children: "Error",
    typeChip: "ERROR"
  }
};

export const ErrorIcon: Story = {
  args: {
    children: "Error Icon",
    typeChip: "ERROR",
    icon: <CloseCircleOutlined />
  }
};