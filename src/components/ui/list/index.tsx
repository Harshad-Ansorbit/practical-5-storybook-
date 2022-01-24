import React from 'react';
import clsx from 'clsx';
import ListItemText from './list-item-text';

interface ListProps {
  badges: boolean;
  icon: boolean;
  iconName: string;
  active: boolean;
  title: string;
}

const List1: React.FC<ListProps> = (props) => {
  return (
    <>
      <div className={clsx('flex text-xl font-medium p-3  item-center')}>
        <span>{props.title}</span>
      </div>
      <ul className={clsx('border rounded-md list-none')}>
        <ListItemText
          listItemclass={clsx(
            'flex border-b-2 px-10 py-3 justify-between items-center',
            {
              'hover:bg-slate-100 active:bg-slate-200': props.active,
              'list-none relative': props.icon,
            }
          )}
          icon={props.icon}
          badges={props.badges}
          iconName={props.iconName}
          badgeclass="flex justify-center items-center  text-sm px-2 rounded-full bg-slate-200"
        />
      </ul>
    </>
  );
};

export default List1;
