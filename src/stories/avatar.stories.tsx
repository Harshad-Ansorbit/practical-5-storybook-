import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from '../components/ui/avatar'

export default {
  title: 'Example/Avatar',
  component: Avatar,

  argTypes: {
    backgroundColor: { control: 'color' },
    icon: { control: 'boolean' },
    iconName: { control: 'text' },

    iconDirection: {
      control: { type: 'radio' },
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    },
    size: {
      control: { type: 'radio' },
      options: ['large', 'normal', 'small'],
    },

    variant: {
      control: { type: 'radio' },
      options: ['square', 'rounded', 'radius'],
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'square',
};

export const AvatarIcon = Template.bind({});
AvatarIcon.args = {
  variant: 'square',
  icon: true,
  iconName: 'Bell',
  iconDirection: 'bottom-right',
};

export const Shadow = Template.bind({});
Shadow.args = {
  variant: 'square',
  shadow: true,
};

export const Size = Template.bind({});
Size.args = {
  variant: 'square',
  size: 'large',
};
