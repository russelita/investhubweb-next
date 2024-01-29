import type { Meta, StoryObj } from "@storybook/react";
import CustomContainerActionChange from "@/shared/components/organisms/CustomContainerActionChange";

const MetaStory: Meta<typeof CustomContainerActionChange> =  {
  title: 'Organisms/Custom Container Action Change',
  component: CustomContainerActionChange,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default MetaStory;

type Story = StoryObj<typeof CustomContainerActionChange>;

export const Basic: Story = {
  args: {
    text: "Kamu bisa menambahkan data disini dengan mengklik save.",
    addIcon: false,
    addLoading: false,
    addText: "Save",
    resetText: "Cancel",
    onReset: () => alert('onReset'),
    onAdd: () => alert('onSubmit'),
    onApprove: undefined,
    onCanceled: undefined,
    onReject: undefined,
    onSuccess: undefined
  }
};

export const Success: Story = {
  args: {
    text: "Kamu bisa menambahkan data disini dengan mengklik Selesai.",
    addIcon: false,
    addLoading: false,
    addText: "Selesai",
    resetText: "Cancel",
    onReset: undefined,
    onAdd: undefined,
    onApprove: undefined,
    onCanceled: () => alert('onCanceled'),
    onReject: undefined,
    onSuccess: () => alert('onSubmit')
  }
};

export const ApproveReject: Story = {
  args: {
    text: "memilih dengan mengklik approve & reject.",
    addIcon: false,
    addLoading: false,
    resetText: "Cancel",
    onReset: undefined,
    onAdd: undefined,
    onApprove: () => alert('onApprove'),
    onCanceled: undefined,
    onReject: () => alert('onReject'),
    onSuccess: undefined
  }
};
