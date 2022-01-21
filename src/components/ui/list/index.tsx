import React from 'react';
import clsx from 'clsx';
import Icon from '../icon';

interface ListProps {
  variant: 'default' | 'active' | 'active' | 'iconlist' | 'badges';
  order: 'decimal' | 'descriptive' | 'none';
  active?: boolean;
  iconName: string;
}

const item = [
  { title: 'Item 1', number: 1 },
  { title: 'Item 2', number: 5 },
  { title: 'Item 3', number: 10 },
  { title: 'Item 4', number: 15 },
  { title: 'Item 5', number: 20 },
];
const List: React.FC<ListProps> = (props) => {
  return (
    <>
      <div className={clsx('flex flex-col p-3 shadow-lg rounded-md')}>
        <div className={clsx('flex text-xl font-medium p-3  item-center')}>
          <span>Basic List Group</span>
        </div>

        <ul
          className={clsx(
            'border rounded-md',
            props.order === 'decimal' && 'list-decimal',
            props.order === 'descriptive' && 'list-disc'
          )}
        >
          {item.map((item) => (
            <>
              <div
                className={clsx(
                  'flex border-b-2 px-10 py-3 justify-between',
                  props.variant === 'active' && 'hover:bg-slate-100',
                  props.variant === 'iconlist' && 'list-none relative'
                )}
              >
                <li className="w-full">
                  {props.variant === 'iconlist' ? (
                    <>
                      <div className={clsx('flex relative items-center')}>
                        <Icon
                          className="flex h-5 w-5 mr-3 absolute -left-6"
                          iconName={props.iconName}
                        />
                        {item.title}
                      </div>
                    </>
                  ) : props.variant === 'badges' ? (
                    <>
                      <div className="flex flex-row justify-between w-full">
                        <div>{item.title}</div>
                        <div className="flex justify-center items-center  text-sm py-1 px-2 rounded-full bg-slate-200">
                          {item.number}
                        </div>
                      </div>
                    </>
                  ) : (
                    item.title
                  )}
                </li>
              </div>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;
