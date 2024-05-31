import { authMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/protected(.*)"]);

export default authMiddleware({
  publicRoutes: ["/", "/api/webhooks/(.*)"],
});

export const config = {
  matcher: ["/((?!.*..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
