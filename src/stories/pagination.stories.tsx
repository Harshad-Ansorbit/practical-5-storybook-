import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pagination from '../components/ui/pagination';

export default {
  title: 'Example/Pagination',
  component: Pagination,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Pagination
      {...args}
      onPageChange={setCurrentPage}
      currentPage={currentPage}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  next: 'next',
  preview: 'preview',
  currentPage: 2,
  perPageRecord: 10,
  totalRecord: 100,
  onPageChange: () => {},
};
