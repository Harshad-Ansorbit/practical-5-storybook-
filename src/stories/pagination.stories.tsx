import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pagination from '../components/ui/pagination';

export default {
  title: 'Example/Pagination',
  component: Pagination,

  argTypes: {
    backgroundColor: { control: 'color' },
    // size: {
    //   control: { type: 'radio' },
    //   options: ['large', 'normal', 'small'],
    // },
    // order: {
    //   control: { type: 'radio' },
    //   options: ['decimal', 'descriptive', 'none'],
    // },

    // variant: {
    //   control: { type: 'radio' },
    //   options: ['default', 'order', 'active', 'iconlist', 'badges'],
    // },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
};
