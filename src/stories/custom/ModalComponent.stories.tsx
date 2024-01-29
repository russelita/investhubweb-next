import { useState } from "react";
import type { Meta } from "@storybook/react";
import ModalComponent from "@/shared/components/ModalComponent";
import CustomButton from "@/shared/components/CustomButton";

const MetaStory: Meta<typeof ModalComponent> =  {
  title: 'Custom/Modal/Modal Component',
  component: ModalComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default MetaStory;

// type Story = StoryObj<typeof ModalComponent>;

export const Basic = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <CustomButton type="primary" onClick={showModal}>
        Open Modal
      </CustomButton>
      <ModalComponent
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        isBorderBottom={true}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </ModalComponent>
    </>
  );
};