import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/ui/button';

export default {
  title: 'Example/MyButton',
  component: Button,

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
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  variant: 'default',
  label: 'default',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'primary',
  outline: true,
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

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  variant: 'default',
  label: 'Disabled',
};

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true,
  outline: true,
  variant: 'default',
  label: 'Rounded',
};

export const Outline = Template.bind({});
Outline.args = {
  outline: true,
  variant: 'default',
  label: 'Outline',
};

export const Lightbutton = Template.bind({});
Lightbutton.args = {
  lightButton: true,
  variant: 'default',
  label: 'Light Button',
};

export const Icon = Template.bind({});
Icon.args = {
  icon: true,
  iconName: 'Bell',
  variant: 'default',
  label: 'Icon Buttons',
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

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  variant: 'default',
  label: 'Loading Button',
};
