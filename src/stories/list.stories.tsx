import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import List from '../components/ui/list';

export default {
  title: 'Example/List',
  component: List,

  argTypes: {
    icon: { control: 'boolean' },
    iconName: { control: 'text' },
    badges: { control: 'boolean' },
    active: { control: 'boolean' },
  },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: 'Basic List Group',
};

export const Badges = Template.bind({});
Badges.args = {
  badges: true,
  ...Default.args,
};

export const IconList = Template.bind({});
IconList.args = {
  icon: true,
  iconName: 'Bell',
  ...Default.args,
};

export const Active = Template.bind({});
Active.args = {
  active: true,
  ...Default.args,
};
