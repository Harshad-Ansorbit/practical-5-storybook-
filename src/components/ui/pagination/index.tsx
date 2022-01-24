import clsx from 'clsx';
import Icon from '../icon';

interface PaginationProps {
  variant: 'default';
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function getCurrentPage() {
  return arr;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  return (
    <>
      <div className={clsx('flex text-slate-500 ')}>
        {arr.map((pages) => (
          <div
            onClick={props.onClick}
            className={clsx(
              'hover:bg-slate-100 active:bg-slate-200 focus:bg-slate-200'
            )}
          >
            <button className={clsx('border  py-1 px-2')}>{pages}</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pagination;
