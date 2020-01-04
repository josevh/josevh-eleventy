module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");

    return {
        dir: {
          input: "views",
          output: "dist"
        }
    };
};