import Link from "next/link"
import { authUserSession } from "@/libs/auth-libs"

const UserActionButton = async() => {
    const user = await authUserSession();
    // jika user ada maka tulisin sign out
    const actionLabel = user ? "Sign Out" : "Sign In"
    // jika ada maka arahkan ke api sign out
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex justify-between gap-2">
            {
                user ? <Link href="/users/dashboard" className="py-1">Dashboard</Link> : null
            }
            <Link href={actionURL} className="bg-color-dark text-color-primary py-1.5 px-12 inline-block">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton