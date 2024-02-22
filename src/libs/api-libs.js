export const getAnimeResponse =  async(resource, query )=>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await response.json()
    return anime
}

// resource itu api yg recomendations/anime
export const getNestedAnimeResponse =  async(resource, objectProperty)=>{
    // dapatkan data dari api sblumnya yg d kirim dari depan
    const response = await getAnimeResponse(resource)
    // apa yg kita ambil ada di item(utk anak nested), entry ini ada di calback item 
    // g bsa d pake ke funcion lain
    // return response.data.flatMap(item => item.entry)
    // si item harus mencari object yg d kirim dari dpn yaitu "entry"
    return response.data.flatMap(item => item[objectProperty])
   
}


export const reproduce = (data, gap) => {
      // ~~math floor
    // kita buat math random number, lalu kita buat integer number yg tidak ada desimalnya
    const first = ~~(Math.random() * (data.length - gap) + 1)
    const last = first + gap
    // console.log({first, last});

    const response = {
        data: data.slice(first, last)
    }

    return response
}