import { useState } from "react";
import type { Meta } from "@storybook/react";
import ModalConfirmationDelete from "@/shared/components/ModalConfirmationDelete";
import CustomButton from "@/shared/components/CustomButton";

const MetaStory: Meta<typeof ModalConfirmationDelete> =  {
  title: 'Custom/Modal/Modal Confirmation Delete',
  component: ModalConfirmationDelete,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default MetaStory;

// type Story = StoryObj<typeof ModalConfirmationDelete>;

export const Error = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CustomButton type="primary" onClick={showModal}>
        Open Modal
      </CustomButton>
      <ModalConfirmationDelete
        title="Basic Modal Error"
        isOpen={isModalOpen}
        onClose={handleCancel} />
    </>
  );
};

export const Refresh = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CustomButton type="primary" onClick={showModal}>
        Open Modal
      </CustomButton>
      <ModalConfirmationDelete
        title="Basic Modal Refresh"
        isOpen={isModalOpen}
        onClose={handleCancel}
        typeModal="refresh" />
    </>
  );
};