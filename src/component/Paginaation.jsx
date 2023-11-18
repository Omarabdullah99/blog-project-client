/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Paginaation = ({ onPageChange, currentPage, blogs, pageSize }) => {
  // console.log(currentPage,blogs,pageSize)
  const totalPage = Math.ceil(blogs.length / pageSize);
  // console.log(totalPage)
  const renderPaginationLink = () => {
    return Array.from({ length: totalPage }, (_, i) => i + 1).map(
      (pagenumber) => (
        <li
          className={pagenumber === currentPage ? "activePagination" : ""}
          key={pagenumber}
        >
          <a href="#" onClick={() => onPageChange(pagenumber)}>
            {pagenumber}
          </a>
        </li>
      )
    );
  };
  return (
    <ul className="pagination my-8 flex-wrap gap-4">
      <li>
        <button onClick={()=> onPageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
      </li>
      <div className="flex gap-1">{renderPaginationLink()} </div>
      <li>
      <button onClick={()=> onPageChange(currentPage +1)} disabled={currentPage === totalPage}>Next</button>
      </li>
    </ul>
  );
};

export default Paginaation;
