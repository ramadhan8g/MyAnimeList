

import React from "react";
import { getAnimeResponse } from "@/libs/api-libs";
import Image from "next/image";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs"

// param dari sononya, pemanggilan api langsung
// ngambil id dari url
const page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession()
  // console.log(user);


  // hasil console lihat d terminal
  // console.log(anime);

  // const response = await  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}top/anime/`)
  // const result = await response.json()
  //   console.log(result);

  // useEffect(() => {
  //   effect
  //   return () => {

  //   };
  // }, [input]);

  return (
    <>
      <div className="pt-4 px-4">
        {/* {anime.data.title} - {anime.data.year} */}
        <h3 className="text-xl text-color-dark">
          {anime.data.title} - {anime.data.year}
        </h3>
        {/* anime_mal_id={id} user_email={user?.email} */}
        {
          <CollectionButton anime_mal_id={id} user_email={user?.email}anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title}/>
        }
        
      </div>

      <div className="pt-4 px-4 text-color-dark flex sm:flex-nowrap flex-wrap gap-2">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full object-cover rounded"
        />
        <p className="text-justify text-xl">{anime.data.synopsis}</p>
      </div>

      {/* overflow : supaya tidak melebar sumbu x nya*/}
      <div className="pt-4 px-4 flex gap-2 text-color-dark overflow-x-auto">
        <div className="w-26 flex flex-col justify-center items-center rounded border border-color-dark p-2">
          <h3>PERINGKAT</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-26 flex flex-col justify-center items-center rounded border border-color-dark p-2">
          <h3>Skor</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-26 flex flex-col justify-center items-center rounded border border-color-dark p-2">
          <h3>Anggota</h3>
          <p>{anime.data.members}</p>
        </div>
        <div className="w-26 flex flex-col justify-center items-center rounded border border-color-dark p-2">
          <h3>Episode</h3>
          <p>{anime.data.episodes}</p>
        </div>
      </div>

      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default page;
