import { getServerSession } from "next-auth"
import { authOption } from "@/app/api/auth/[...nextauth]/route"

export const authUserSession = async() => {
    // mempunyai property authOption
    const session = await getServerSession(authOption)
    // kalau gada ? bsa rusak
    // jika ada data user tampilin aja jika tidak jgn
    // klo ga login masih bsa tampilin
    return session?.user
}