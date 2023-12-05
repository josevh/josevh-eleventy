const path = require("node:path");
const sass = require("sass");

module.exports = function(eleventyConfig) {
    // assets setup
    eleventyConfig.addPassthroughCopy("src/assets/css");

    // sass/scss setup
    // add as a valid template language to process, e.g. this adds to --formats
    eleventyConfig.addTemplateFormats("scss");

    eleventyConfig.addExtension("scss", {
      outputFileExtension: "css", // optional, default: "html"

      // can be an async function
      compile: function (inputContent, inputPath) {
        let parsed = path.parse(inputPath);

        let result = sass.compileString(inputContent, {
          loadPaths: [
            parsed.dir || ".",
            this.config.dir.includes
          ]
        });

        return (data) => {
          return result.css;
        };
      }
    });

    eleventyConfig.addShortcode("currentYear", function () {
      return (new Date()).toLocaleDateString('en-US', {year: "numeric"}).toString();
    });

    return {
        dir: {
          input: "src",
          output: "dist"
        }
    };
};
