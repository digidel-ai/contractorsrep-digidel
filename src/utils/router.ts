export const getRouteFromPath = (pathname: string): { page: string; productId?: string } => {
  if (pathname === "/" || pathname === "") return { page: "home" };
  if (pathname === "/features") return { page: "features" };
  if (pathname === "/products") return { page: "products" };
  if (pathname === "/waitlist") return { page: "waitlist" };
  if (pathname === "/solutions") return { page: "solutions" };
  if (pathname === "/pricing") return { page: "pricing" };
  if (pathname === "/resources") return { page: "resources" };
  if (pathname.startsWith("/product/")) {
    const productId = pathname.split("/product/")[1];
    return { page: "product", productId };
  }
  return { page: "home" }; // Default fallback
};

export const getPathFromRoute = (page: string, productId?: string): string => {
  switch (page) {
    case "home": return "/";
    case "features": return "/features";
    case "products": return "/products";
    case "product": return productId ? `/product/${productId}` : "/products";
    case "waitlist": return "/waitlist";
    case "solutions": return "/solutions";
    case "pricing": return "/pricing";
    case "resources": return "/resources";
    default: return "/";
  }
};
