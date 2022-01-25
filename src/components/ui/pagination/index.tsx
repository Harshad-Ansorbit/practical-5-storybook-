import React, { useMemo, useState } from 'react';
import clsx from 'clsx';

import Icon from '../icon';

interface PaginationProps {
  variant: 'default';

  currentPage: number;
  totalRecord: number;
  perPageRecord: number;
  next: string;
  preview: string;

  onPageChange: (page: number) => void;
}

function getPages(
  payload: Pick<
    PaginationProps,
    'totalRecord' | 'perPageRecord' | 'currentPage'
  >
) {
  const { perPageRecord, totalRecord, currentPage } = payload;

  const maxPages = Math.ceil(totalRecord / perPageRecord);

  return new Array(maxPages).fill(0).map((_, i) => i + 1);
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const { currentPage, totalRecord, perPageRecord, onPageChange } = props;

  const pages = useMemo(
    () => getPages({ totalRecord, perPageRecord, currentPage }),
    [props]
  );

  return (
    <div className={clsx('flex text-slate-500 ')}>
      {currentPage > 1 && (
        <button
          className={clsx('border  py-1 px-2 hover:bg-slate-200')}
          onClick={() => onPageChange(currentPage - 1)}
        >
          {props.preview}
        </button>
      )}

      {pages.map((page) => (
        <div
          key={page}
          className={clsx('', {
            'bg-blue-500 text-white': page === currentPage,
          })}
        >
          <button
            className={clsx('border  py-1 px-2 ', {
              'hover:bg-slate-200': page !== currentPage,
            })}
            onClick={() => page !== currentPage && onPageChange(page)}
          >
            {page}
          </button>
        </div>
      ))}
      {currentPage < props.totalRecord && (
        <button
          className={clsx('border  py-1 px-2 hover:bg-slate-200')}
          onClick={() => onPageChange(currentPage + 1)}
        >
          {props.next}
        </button>
      )}
    </div>
  );
};

export default Pagination;
