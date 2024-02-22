import React from "react";
import Image from "next/image";
import Link from "next/link";

// terima
const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {/* Kalau emang ada datanya maka render kalao gada loading */}
      {api.data?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            className="cursor-pointer hover:text-color-accent2 transition-all key={index}"
          >
            {/* object-cover supaya gambar tidak penyok */}
            <Image
              src={anime.images.webp.image_url}
              alt="..."
              width={350}
              height={350}
              className="object-cover"
            />
            <h3 className="font-bold p-4 text-xl">{anime.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
