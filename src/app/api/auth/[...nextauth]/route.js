import NextAuth from "next-auth"
import githubAuth from "next-auth/providers/github"

export const authOption = {
    // lkayak provider telkomsel im3
    providers: [
        githubAuth({
            clientId: process.env.GITHUB_CLIENT,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    // secret pribadi
    secret: process.env.NEXTAUTH_SECRET
}

// handling authentication (rujukan dokumentasi nextAuth)
// ibarat hp (wadah)
const handler = NextAuth(authOption)

// butuh export untuk 
export { handler as GET, handler as POST }