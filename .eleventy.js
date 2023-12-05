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

    eleventyConfig.addFilter("blog_date", function (dateValue) {
      return dateValue.toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      });
    });

    eleventyConfig.addFilter("date_year", function(dateValue) {
      return dateValue.toLocaleDateString("en-US", {
        year: "numeric",
      });
    });

    eleventyConfig.addFilter("date_month", function(dateValue) {
      return dateValue.toLocaleDateString("en-US", {
        month: "2-digit",
      });
    });

    eleventyConfig.amendLibrary("md", mdLib => mdLib.enable("code"));

    return {
        dir: {
          input: "src",
          output: "dist"
        }
    };
};
