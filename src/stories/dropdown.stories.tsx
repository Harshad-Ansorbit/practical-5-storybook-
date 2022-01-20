import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dropdown from '../components/ui/dropdown';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,

  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'radio' },
      options: ['large', 'normal', 'small'],
    },

    variant: {
      control: { type: 'radio' },
      options: [
        'default',
        'primary',
        'secondary',
        'info',
        'warning',
        'danger',
        'success',
      ],
    },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});

Default.args = {
  variant: 'default',
  label: 'default',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  label: 'success',
};

export const warning = Template.bind({});
warning.args = {
  variant: 'warning',
  label: 'warning',
};

export const info = Template.bind({});
info.args = {
  variant: 'info',
  label: 'info',
};

export const danger = Template.bind({});
danger.args = {
  variant: 'danger',
  label: 'danger',
};

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true,

  variant: 'default',
  label: 'Rounded',
};

export const Lightbutton = Template.bind({});
Lightbutton.args = {
  lightButton: true,
  variant: 'default',
  label: 'Light Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  variant: 'default',
  label: 'Large Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  variant: 'default',
  label: 'Small Button',
};
