module.exports = {
    layout: "post",
    tags: ["post"],
    draft: false,
    eleventyComputed: {
        permalink: (data) => (data.draft ? false : data.permalink),
        eleventyExcludeFromCollections: (data) => Boolean(data.draft || data.eleventyExcludeFromCollections),
    },
};
