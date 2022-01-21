import clsx from 'clsx';
import React from 'react';

interface IDropdownProps {
  primary?: boolean;

  rounded?: boolean;

  lightButton?: boolean;

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
}

function getSize(size: string | undefined) {
  if (size === 'small') {
    return 'p-1 pl-1 text-xs';
  } else if (size === 'large') {
    return 'p-3 text-lg';
  } else {
    return 'p-2 text-md';
  }
}

function getVariant(variant: string | undefined) {
  switch (variant) {
    case 'primary':
      return 'bg-indigo-500 text-white';
    case 'secondary':
      return 'bg-cyan-500 text-white';

    case 'success':
      return 'bg-green-500 text-white';

    case 'info':
      return 'bg-blue-500 text-white';

    case 'warning':
      return 'bg-yellow-500 text-white';

    case 'danger':
      return 'bg-red-500 text-white';

    default:
      return 'bg-stone-300';
  }
}

const Dropdown: React.FC<IDropdownProps> = (props) => {
  return (
    <>
      <select
        className={clsx(
          'cursor-pointer select-none',
          getVariant(props.variant),
          props.variant === 'default' && 'text-black',
          props.rounded ? 'rounded-full' : 'rounded-md',
          props.lightButton ? 'opacity-50 hover:opacity-1' : 'opacity-100',
          getSize(props.size),
          'hover:opacity-60',
          'text-sm'
        )}
      >
        <option className="" selected>
          option
        </option>
        <option value=""> Menu-1</option>
        <option value=""> Menu-1</option>
        <option value=""> Menu-1</option>
        <option value=""> Menu-1</option>
      </select>
    </>
  );
};

export default Dropdown;
