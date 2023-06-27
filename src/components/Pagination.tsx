import React from 'react';

interface PaginationProps {
  totalPage: number;
  page: number;
  setPage: (page: number) => void;
  onChange?: (page: number) => void;
}

// 페이지 번호 목록 만들기
function getPageNumbers(currentPage: number, totalPage: number, pagesToShow = 3) {
  const startPage = Math.floor((currentPage - 1) / pagesToShow) * pagesToShow + 1;
  const endPage = Math.min(startPage + pagesToShow - 1, totalPage);

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, idx) => startPage + idx);
  return pages;
}

const Pagination: React.FC<PaginationProps> = ({ totalPage, page, setPage, onChange }) => {
  const handleClick = (pageNum: number) => {
    setPage(pageNum);
    onChange && onChange(pageNum);
  };

  // 페이지 번호 목록 만들기
  const pages = getPageNumbers(page, totalPage, 10);

  return (
    <div className='pagination'>
      <div className='flex flex-row justify-between'>
        <div className='p-1'>
          <button
            className='button clear text-grey'
            onClick={() => handleClick(page - 1)}
            disabled={page === 1}
          >
            prev
          </button>
        </div>

        {pages.map((pageNum) => (
          <div className='p-1'>
            <button
              className={`${pageNum === page ? 'button secondary' : 'button clear text-grey'}`}
              key={pageNum}
              onClick={() => handleClick(pageNum)}
            >
              {pageNum}
            </button>
          </div>
        ))}
        <div className='p-1'>
          <button
            className='button clear text-grey'
            onClick={() => handleClick(page + 1)}
            disabled={page === totalPage}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
