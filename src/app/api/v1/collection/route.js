import prisma from "@/libs/prisma"

export async function POST(request) {
    // yg d kirim dari fe collectionButton d tangkap request nya
    const { anime_mal_id, user_email, anime_image, anime_title } = await request.json()
    const data = { anime_mal_id, user_email, anime_image, anime_title }


    //menangkap data yg d atas
    const createCollection = await prisma.collection.create({ data })
    
    
    if (!createCollection) return Response.json({ status: 500, isCreated: false })
    // kirim balik berupa response
    else return Response.json({ status: 200, isCreated: true })
    // return Response.json ({data: "Hello!"})
}