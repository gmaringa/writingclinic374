import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes: ['/', '/about', 'services', '/contact', '/orders', '/api/webhook']
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/orders/new", "/(api|trpc)(.*)"],
};