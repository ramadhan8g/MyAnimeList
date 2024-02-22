import React from "react";

const Pagination = ({ page, setPage, lastPage }) => {
  const scrolTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handlePrevPage = () => {
    // history State tambah 1: biar ganti halaman
    setPage((prevState) => prevState - 1);
    scrolTop();
  };
  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrolTop();
  };
  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-dark text-2xl">
      {/* jika halaman kurang dari 1 maka jgn lakukan apa2 */}
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="transition-all hover:text-color-accent"
        >
          Prev
        </button>
      )}

      <p>
        {page} of {lastPage}
      </p>
           {/* jika halaman lebih dari page terakhir maka jgn lakukan apa2 */}
      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className="transition-all hover:text-color-accent"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
