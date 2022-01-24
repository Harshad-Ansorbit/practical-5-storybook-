import clsx from 'clsx';
import React from 'react';
import Icon from '../icon';

interface IAvatarProps {
  variant: 'rounded' | 'square' | 'radius';
  icon?: boolean;
  iconName: string;
  iconDirection: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  shadow?: boolean;
  size: 'large' | 'normal' | 'small';
  imageURL: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function getSize(size: IAvatarProps['size']) {
  if (size === 'small') {
    return 'h-12 w-12';
  } else if (size === 'large') {
    return 'h-16 w-16';
  } else {
    return 'h-14 w-14';
  }
}

function getVariant(variant: IAvatarProps['variant']) {
  switch (variant) {
    case 'rounded':
      return 'rounded-full';
    case 'radius':
      return 'rounded-md';
    default:
      return '';
  }
}

function getIconDirection(iconDirection: IAvatarProps['iconDirection']) {
  switch (iconDirection) {
    case 'top-right':
      return '-top-2 -right-2';
    case 'bottom-left':
      return '-bottom-2 -left-2';
    case 'bottom-right':
      return '-bottom-2 -right-2';
    default:
      return '-top-2 -left-2';
  }
}

const Avatar: React.FC<IAvatarProps> = (props) => {
  return (
    <>
      <div
        onClick={props.onClick}
        className={clsx('relative inline-block', {
          'drop-shadow-2xl': props.shadow,
        })}
      >
        {props.icon && (
          <Icon
            className={clsx(
              'inline-block h-6 w-6 absolute',
              getIconDirection(props.iconDirection),
              'rounded-full p-1 bg-yellow-400'
            )}
            iconName={props.iconName}
          />
        )}
        <img
          src={props.imageURL}
          alt="image2"
          className={clsx(getSize(props.size), getVariant(props.variant))}
        />
      </div>
    </>
  );
};

export default Avatar;
