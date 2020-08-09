const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async () => {
  try {
    const res = await Cache(
      "https://jsonplaceholder.typicode.com/photos?_start=1&_limit=270",
      {
        duration: "1d",
        type: "json",
      }
    );
    const images = res.map((image) => {
      return {
        id: image.id,
        title: image.title,
        alt: image.title,
        url: image.url,
        thumbnail: image.thumbnailUrl,
      };
    });
    return images;
  } catch (e) {
    console.error(e);
    return [];
  }
};
