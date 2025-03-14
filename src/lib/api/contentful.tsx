import client from "./contentfulClient";

export async function fetchContentfulData() {
  try {
    const entries = await client.getEntries();
    return entries.items.map((item) => {
      const { fields } = item;
      return {
        id: item.sys?.id,
        title: fields.title,
        description: fields.metadescription,
        content: fields.article,
        image: fields.coverphoto?.file.url,
        tags: fields.metakeywords ? fields.metakeywords.split(",") : [],
        link: fields.link,
        pubDate: fields.publisheddate,
        creator: fields.creator,
        isFeatured: fields.isPremium,
      };
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error fetching data from Contentful:", error);
    return [];
  }
}
