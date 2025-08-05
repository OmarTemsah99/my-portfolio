import { type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const baseUrl = "https://omar-temsah-dev-portfolio.vercel.app";

  const urls = [
    "",
    "/projects",
    "/skills",
    "/contact",
    "/about",
    // Add more routes here if needed
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `<url>
  <loc>${baseUrl}${path}</loc>
  <changefreq>monthly</changefreq>
</url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
