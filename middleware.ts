import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes: ['/', '/about', 'services', '/contact', '/orders']
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/orders/new", "/(api|trpc)(.*)"],
};