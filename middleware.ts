import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes: ['/', '/about', 'services', '/contact', '/orders', '/api/webhooks(.*)']
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/orders/new", "/(api|trpc)(.*)"],
};