const UpgradeHelper = require("@11ty/eleventy-upgrade-help");	

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");

    // Should be the last plugin if there are existing plugins
    eleventyConfig.addPlugin(UpgradeHelper);

    return {
        dir: {
          input: "src",
          output: "dist"
        }
    };
};
