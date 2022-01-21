import React from 'react';
import clsx from 'clsx';
import Icon from '../icon';

interface PaginationProps {
  variant: 'default';
}

const arr = ['preview', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'last'];
const Pagination: React.FC<PaginationProps> = (props) => {
  return (
    <>
      <div className={clsx('flex text-slate-500 ')}>
        {arr.slice(0, length - 1).map((pages) => (
          <a
            href="#"
            className={clsx(
              'border  py-1 px-2  hover:bg-slate-100 active:bg-slate-200 focus:bg-slate-200'
            )}
          >
            {pages}
          </a>
        ))}
        <a
          href="#"
          className={clsx(
            'border  py-1 px-2  hover:bg-slate-100 active:bg-slate-200 focus:bg-slate-200'
          )}
        >{`>`}</a>
      </div>
    </>
  );
};

export default Pagination;
