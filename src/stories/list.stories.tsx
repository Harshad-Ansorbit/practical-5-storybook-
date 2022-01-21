import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import List from '../components/ui/list';

export default {
  title: 'Example/List',
  component: List,

  argTypes: {
    backgroundColor: { control: 'color' },
    // size: {
    //   control: { type: 'radio' },
    //   options: ['large', 'normal', 'small'],
    // },
    order: {
      control: { type: 'radio' },
      options: ['decimal', 'descriptive', 'none'],
    },

    variant: {
      control: { type: 'radio' },
      options: ['default', 'order', 'active', 'iconlist', 'badges'],
    },
  },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  order: 'none',
};

export const Order = Template.bind({});
Order.args = {
  variant: 'default',
  order: 'descriptive',
};

export const Active = Template.bind({});
Active.args = {
  variant: 'active',
  order: 'descriptive',
};

export const IconList = Template.bind({});
IconList.args = {
  variant: 'iconlist',
  order: 'descriptive',
  iconName: 'Bell',
};

export const Badges = Template.bind({});
Badges.args = {
  variant: 'badges',
  order: 'descriptive',
};
