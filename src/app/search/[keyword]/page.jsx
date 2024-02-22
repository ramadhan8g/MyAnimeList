import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/libs/api-libs";
// import Navbar from "./components/Navbar";
// import Link from "next/link";

const Page = async ({params}) => {
  // const keyword = params.keyword
  const {keyword} = params
  const keywordDecode = decodeURI(keyword)
  const searchAnime = await getAnimeResponse("anime", `q=${keywordDecode}`)
  // const response = await fetch(
  //   // `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime/?limit=8`
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keywordDecode}`
  // );
  // const searchAnime = await response.json();
  // console.log(resultApi);



  return (
    <section>
      <Header title={`Pencarian untuk ${keywordDecode}....`}/>
      <AnimeList api={searchAnime} title={`ss`} />
    </section>
  );
};

{
  /* <div className="flex justify-between items-center px-4">
<h1 className="text-xl font-bold p-4">Paling Populer</h1>
<Link href="populer" className="text-center justify-center">Selengkapnya....</Link>
</div> */
}

export default Page;
