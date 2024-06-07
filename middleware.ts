import { authMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/protected(.*)"]);

export default authMiddleware({
  publicRoutes: ["/", "/api/webhooks/(.*)"],
});
