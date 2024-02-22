import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse,reproduce } from "@/libs/api-libs";
// import Navbar from "./components/Navbar";
// import Link from "next/link";

const Page = async () => {
  // `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime/?limit=8`
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  // object properti yg d ambil itu entry
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  // recommendedAnime = {data :recommendedAnime.slice(0,4)}
  //gk perlu console lgi karena reproduce ada consolenya
  recommendedAnime = reproduce(recommendedAnime, 4) 
  
  // const topAnime = await response.json();
  // console.log(resultApi);

  return (
    <>
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>

      <section>
        <Header
          title="Rekomendasi"
        />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

{
  /* <div className="flex justify-between items-center px-4">
<h1 className="text-xl font-bold p-4">Paling Populer</h1>
<Link href="populer" className="text-center justify-center">Selengkapnya....</Link>
</div> */
}

export default Page;
