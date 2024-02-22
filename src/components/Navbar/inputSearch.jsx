"use client";

import React, { useRef } from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const inputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;
    if(!keyword || keyword.trim() == "") return
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      {/* <TextField
        id="standard-basic"
        color="success"
        label="Search Anime and Manga..."
        variant="standard"
        size="small"
        className="bg-[#FBF9F1] w-full col-span-2 p-0.6 rounded"
        ref={searchRef}
      /> */}
      <input
        placeholder="Cari anime..."
        className="w-full p-2 rounded text-color-dark"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-2 end-1 text-[#040404] ">
        <MagnifyingGlass size={32} className="" onClick={handleSearch} />
      </button>
    </div>
  );
};

export default inputSearch;
