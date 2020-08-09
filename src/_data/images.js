const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async () => {
  try {
    const res = await Cache(
      "https://picsum.photos/v2/list?page=2&limit=100",
      {
        duration: "1d",
        type: "json",
      }
    );
    const images = res.map((image) => {
      return {
        id: image.id,
        author: image.author,
        src: image.url,
        url: `https://picsum.photos/id/${image.id}/300`
      };
    });
    return images;
  } catch (e) {
    console.error(e);
    return [];
  }
};
