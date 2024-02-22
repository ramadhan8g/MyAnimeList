export { default } from "next-auth/middleware"


// matcher : route yg mau d lindungi
// :path* : path apapun yg setelah /user maka akan d middleware
export const config = { matcher: ["/users/:path*"] }

// cara baca : kalau user buka link /user maka d arahin ke next auth middleware, atau d suruh login dulu