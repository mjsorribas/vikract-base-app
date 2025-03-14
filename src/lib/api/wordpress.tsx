import { formatDate, truncateText } from "../helpers/utils";
// filepath: /Users/mjsorribas/Proyectos/vikract-base-app/src/lib/api/wordpress.tsx
export async function fetchWordPressFeed() {
  const response = await fetch(`/api/index.php/feed/`);
  const text = await response.text();
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(text, "text/xml");
  const items = xmlDoc.getElementsByTagName("item");

  return Array.from(items).map((item) => {
    const mediaThumbnail = item.getElementsByTagName("media:thumbnail")[0];
    const mediaContent = item.getElementsByTagName("media:content")[0];
    const imageUrl = mediaThumbnail
      ? mediaThumbnail.getAttribute("url")
      : mediaContent
        ? mediaContent.getAttribute("url")
        : "";

    const categories = Array.from(item.getElementsByTagName("category")).map(
      (category) => category.textContent
    );

    const creator =
      item.getElementsByTagName("dc:creator")[0]?.textContent || "Unknown";

    const link = item.getElementsByTagName("link")[0]?.textContent || "";

    return {
      title: item.getElementsByTagName("title")[0].textContent,
      pubDate: item.getElementsByTagName("pubDate")[0].textContent,
      description: item.getElementsByTagName("description")[0].textContent,
      content: item.getElementsByTagName("content:encoded")[0].textContent,
      creator,
      link,
      isFeatured: false,
      image: imageUrl,
      tags: categories,
    };
  });
}

export async function fetchWordPressJsonFeed() {
  const response = await fetch("/api/index.php/feed/json");
  const json = await response.json();
  const items = json.items;

  return items.map((item) => {
    const creator = item.author?.name || "Unknown";
    const imageUrl = item.image || "";
    const pubDate = formatDate(item.date_published || "");

    return {
      title: item.title,
      pubDate,
      description: truncateText(item.content_text || "", 140),
      content: item.content_html || "",
      creator,
      isFeatured: false,
      image: imageUrl,
      tags: item.tags || [],
      link: item.url || "",
    };
  });
}
