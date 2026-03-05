const path = require("node:path");
const sass = require("sass");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    // assets setup
    [
      "src/assets/js",
      "src/assets/uploads",
      "src/assets/favicon.ico",
      "_redirects",
      "src/admin",
    ].forEach((entry) => eleventyConfig.addPassthroughCopy(entry));
    eleventyConfig.addPassthroughCopy({
      "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js": "assets/js/bootstrap.bundle.min.js",
    });

    // syntax highlighting
    eleventyConfig.addPlugin(syntaxHighlight);

    // sass/scss setup
    // add as a valid template language to process, e.g. this adds to --formats
    eleventyConfig.addTemplateFormats("scss");

    eleventyConfig.addExtension("scss", {
      outputFileExtension: "css", // optional, default: "html"

      compileOptions: {
        permalink: "raw"
      },

      // can be an async function
      compile: function (inputContent, inputPath) {
        const parsed = path.parse(inputPath);
        const isProduction = process.env.NODE_ENV === "production";
        let result;

        try {
          result = sass.compileString(inputContent, {
            loadPaths: [
              parsed.dir || ".",
              this.config.dir.includes,
              "node_modules",
            ],
            style: isProduction ? "compressed" : "expanded",
            sourceMap: !isProduction,
          });
        } catch (error) {
          throw new Error(`Sass compile failed for ${inputPath}: ${error.message}`);
        }

        // so the file is re-compiled on update of dependent sass files
        // eleventyConfig.addWatchTarget doesn't work the same
        this.addDependencies(inputPath, result.loadedUrls);

        return () => {
          return result.css;
        };
      }
    });

    eleventyConfig.addShortcode("currentYear", function () {
      return String(new Date().getFullYear());
    });

    eleventyConfig.addFilter("blog_date", function (dateValue) {
      const date = new Date(dateValue);
      if (Number.isNaN(date.getTime())) return "";
      return date.toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      });
    });

    eleventyConfig.addFilter("date_year", function(dateValue) {
      const date = new Date(dateValue);
      if (Number.isNaN(date.getTime())) return "";
      return date.toLocaleDateString("en-US", {
        year: "numeric",
      });
    });

    eleventyConfig.addFilter("date_month", function(dateValue) {
      const date = new Date(dateValue);
      if (Number.isNaN(date.getTime())) return "";
      return date.toLocaleDateString("en-US", {
        month: "2-digit",
      });
    });

    eleventyConfig.amendLibrary("md", mdLib => mdLib.enable("code"));

    // Add layout aliases
    [
      ["base", "layouts/base.njk"],
      ["page", "layouts/page.njk"],
      ["post", "layouts/post.njk"],
    ].forEach(([alias, layout]) => eleventyConfig.addLayoutAlias(alias, layout));

    eleventyConfig.setServerOptions({
      showAllHosts: true,
    });

    return {
        dir: {
          input: "src",
          output: "dist"
        }
    };
};
