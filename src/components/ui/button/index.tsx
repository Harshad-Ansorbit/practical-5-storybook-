import React from 'react';
import clsx from 'clsx';
import Icon from '../icon';

interface ButtonProps {
  primary?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  outline?: boolean;
  lightButton?: boolean;
  icon?: true;
  iconName: string;
  loading?: true;
  block?: boolean;
  label?: string;
  size?: 'small' | 'normal' | 'large';
  iconDirection: 'right' | 'left';
  variant:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'info'
    | 'danger';
}

function getSize(size: ButtonProps['size']) {
  if (size === 'small') {
    return 'p-1 pl-1 text-xs';
  } else if (size === 'large') {
    return 'p-3 text-lg';
  } else {
    return 'p-2 text-md';
  }
}

function getVariant(
  variant: ButtonProps['variant'],
  outline: ButtonProps['outline']
) {
  switch (variant) {
    case 'primary':
      return outline
        ? 'ring-1 ring-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white'
        : 'bg-indigo-500 text-white';
    case 'secondary':
      return outline
        ? 'ring-1 ring-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white'
        : 'bg-cyan-500 text-white';
    case 'success':
      return outline
        ? 'ring-1 ring-green-500 text-green-600 hover:bg-green-500 hover:text-white'
        : 'bg-green-500 text-white';
    case 'info':
      return outline
        ? 'ring-1 ring-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white'
        : 'bg-blue-500 text-white';
    case 'warning':
      return outline
        ? 'ring-1 ring-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white'
        : 'bg-yellow-500 text-white';
    case 'danger':
      return outline
        ? 'ring-1 ring-red-500 text-red-600 hover:bg-red-500 hover:text-white'
        : 'bg-red-500 text-white';
    default:
      return outline
        ? 'ring-1 ring-stone-300 text-black hover:bg-stone-300 hover:text-black'
        : 'bg-stone-300';
  }
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      disabled
      type="button"
      className={clsx(
        'cursor-pointer',
        getVariant(props.variant, props.outline),
        props.variant === 'default' && 'text-black',
        props.rounded ? 'rounded-full' : 'rounded-md',
        props.lightButton ? 'opacity-50 hover:opacity-1' : 'opacity-100',
        props.block ? 'flex w-full justify-center' : '',
        getSize(props.size),
        'hover:opacity-60',
        props.disabled && 'opacity-60 cursor-not-allowed',
        'text-sm'
      )}
    >
      <div
        className={clsx('flex ', {
          'flex-row-reverse': props.iconDirection === 'right',
        })}
      >
        {props.icon && (
          <div className={clsx('flex flex-1 h-5 w-5 ')}>
            {!!props.icon && (
              <Icon className="flex-1 h-5 w-5" iconName={props.iconName} />
            )}
          </div>
        )}
        {props.loading && (
          <div
            className={clsx(
              getSize(props.size),
              'spinner-border animate-spin inline-block',
              'rounded-full border-t-4 border-indigo-500 mr-2'
            )}
          ></div>
        )}
        <div className="flex-8">{props.label}</div>
      </div>
    </button>
  );
};

export default Button;
