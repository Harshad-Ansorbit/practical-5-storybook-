import React from 'react';
import clsx from 'clsx';
import Icon from '../icon';

interface IButtonProps {
  primary?: boolean;
  label: string;
  size: 'small' | 'normal' | 'large';
  variant:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'info'
    | 'danger';
  disabled?: boolean;
  rounded?: boolean;
  outline?: boolean;
  lightButton?: boolean;
  icon: true;
  iconName: string;
  loading: true;
}

function getSize(size: string | undefined) {
  if (size === 'small') {
    return 'p-1';
  } else if (size === 'large') {
    return 'p-3';
  } else {
    return 'p-2';
  }
}

function getVariant(variant: string, outline: boolean | undefined) {
  switch (variant) {
    case 'primary':
      return outline
        ? 'ring-1 ring-indigo-500 text-indigo-600 hover:bg-indigo-500 hover:text-white'
        : 'bg-indigo-500';
    case 'secondary':
      return outline
        ? 'ring-1 ring-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white'
        : 'bg-cyan-500';
    case 'success':
      return outline
        ? 'ring-1 ring-green-500 text-green-600 hover:bg-green-500 hover:text-white'
        : 'bg-green-500';
    case 'info':
      return outline
        ? 'ring-1 ring-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white'
        : 'bg-blue-500';
    case 'warning':
      return outline
        ? 'ring-1 ring-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white'
        : 'bg-yellow-500';
    case 'danger':
      return outline
        ? 'ring-1 ring-red-500 text-red-600 hover:bg-red-500 hover:text-white'
        : 'bg-red-500';
    default:
      return outline
        ? 'ring-1 ring-stone-300 text-black hover:bg-stone-300 hover:text-black'
        : 'bg-stone-300';
  }
}

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <>
      <button
        type="button"
        className={clsx(
          getVariant(props.variant, props.outline),
          props.variant === 'default' ? 'text-black' : 'text-white',
          props.disabled ? 'opacity-70' : 'opacity-100',
          props.rounded ? 'rounded-full' : 'rounded-md',
          props.lightButton ? 'opacity-50 hover:opacity-1' : 'opacity-100',
          getSize(props.size),
          'hover:opacity-70',

          'text-sm'
        )}
      >
        <div className="flex">
          {props.icon ? (
            <>
              <div className="flex-1 h-5 w-5 ">
                {props.icon ? Icon(props.iconName) : ''}
              </div>
              <div className="flex-2">{props.label}</div>
            </>
          ) : (
            <>
              <div className="flex-8">{props.label}</div>
            </>
          )}
        </div>
      </button>
    </>
  );
};

export default Button;
