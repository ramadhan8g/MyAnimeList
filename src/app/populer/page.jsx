"use client"

import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = () => {
  // biar d mulai dari data 1
  const [page,setPage] = useState(1)
  const [topAnime,setTopAnime] =useState([])

  const fetchData = async()=>{
    // biar muncul smua halaman
    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
    // const data = await response.json()
    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`)
    setTopAnime(populerAnime)
  }

  useEffect(() => {
   fetchData()
    // yg dikirmkan
  }, [page]);

  return (
    <div>
      <HeaderMenu title={`List Anime Populer #${page}`} />
      <AnimeList api={topAnime}/> 
      {/* lastpage dari data yg d api */}
      <Pagination page={page} setPage={setPage} lastpage={topAnime.pagination?.last_visible_page}/> 
      <VideoPlayer />
    </div>
  );
};

export default Page;
