import React from 'react';
import clsx from 'clsx';
import Icon from '../../icon';

interface ListItemProps {
  listItemclass: string;
  badges: boolean;
  icon: boolean;
  iconName: string;
  badgeclass: string;
}
const items = [
  { id: 1, name: 'Item-1', score: 10 },
  { id: 2, name: 'Item-2', score: 15 },
  { id: 3, name: 'Item-3', score: 17 },
  { id: 4, name: 'Item-4', score: 20 },
];
const ListItemText: React.FC<ListItemProps> = (props) => {
  return (
    <>
      {items.map((item) => (
        <li>
          <div className={props.listItemclass}>
            {props.icon && (
              <Icon
                className="flex h-5 w-5 mr-3 absolute left-3"
                iconName={props.iconName}
              />
            )}
            <div>
              <span className="">{item.name}</span>
            </div>

            {props.badges && (
              <div className={props.badgeclass}>
                <span>{item.score}</span>
              </div>
            )}
          </div>
        </li>
      ))}
    </>
  );
};

export default ListItemText;
