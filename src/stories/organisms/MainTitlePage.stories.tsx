import type { Meta } from "@storybook/react";
import MainTitlePage from "@/shared/components/organisms/MainTitlePage";
import { useState } from "react";

const MetaStory: Meta<typeof MainTitlePage> = {
  title: 'Organisms/Main Title Page',
  component: MainTitlePage,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default MetaStory;

// type Story = StoryObj<typeof MainTitlePage>;

export const Basic = () => {
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [status, setStatus] = useState<boolean>();
  // eslint-disable-next-line no-unused-vars
  const [isModalOpen, setIsModalOpen] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const showModal = (data?: any) => {
    setIsModalOpen(true);

    // if(data) {
    //   setDataTable(data);
    // }
  };

  const onSearch = (e: any) => {
    setSearch(e?.target?.value ?? '');
  };

  return (
    <MainTitlePage
      typeTitle={1}
      title1={{
        description:
          'Kamu bisa menambahkan data user dengan cara klik tambah',
      }}
      search={{
        onSearch: onSearch,
        placeholder: 'Search User name',
      }}
      filterStatus={setStatus}
      add={() => showModal()}
      addTitle="New User"
    />
  );
};