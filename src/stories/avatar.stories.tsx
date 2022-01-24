import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from '../components/ui/avatar';

export default {
  title: 'Example/Avatar',
  component: Avatar,

  argTypes: {
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

const image = {
  imageURL: 'https://picsum.photos/200',
};

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;
export const Default = Template.bind({});
Default.args = {
  variant: 'square',
  ...image,
};

export const AvatarIcon = Template.bind({});
AvatarIcon.args = {
  ...image,
  variant: 'square',
  icon: true,
  iconName: 'Bell',
  iconDirection: 'bottom-right',
};

export const Shadow = Template.bind({});
Shadow.args = {
  ...image,
  variant: 'square',
  shadow: true,
};

export const Size = Template.bind({});
Size.args = {
  ...image, 
  variant: 'square',
  size: 'large',
};
