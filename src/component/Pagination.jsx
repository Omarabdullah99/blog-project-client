import React from 'react'
import ReactPaginate from "react-paginate";
import "./pagination.css";
const Pagination = ({ handlePageClick, pageCount }) => {
  return (
    <div className="pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination-menu"
      />
    </div>
  )
}

export default Pagination