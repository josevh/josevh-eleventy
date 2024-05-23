const path = require("node:path");
const sass = require("sass");
const { EleventyI18nPlugin } = require("@11ty/eleventy");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    // assets setup
    eleventyConfig.addPassthroughCopy("src/assets/js");
    eleventyConfig.addPassthroughCopy("src/assets/uploads");
    eleventyConfig.addPassthroughCopy("src/assets/favicon.ico");

    // i18n setup
    eleventyConfig.addPlugin(EleventyI18nPlugin, {
      // any valid BCP 47-compatible language tag is supported
      defaultLanguage: "en", // Required, this site uses "en"
      errorMode: "allow-fallback", // only throw an error when the content doesn't exist in default lang
    });

    // syntax highlighting
    eleventyConfig.addPlugin(syntaxHighlight);

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
            this.config.dir.includes,
          ]
        });

        // so the file is re-compiled on update of dependent sass files
        // eleventyConfig.addWatchTarget doesn't work the same
        this.addDependencies(inputPath, result.loadedUrls);

        return (data) => {
          return result.css;
        };
      }
    });

    eleventyConfig.addShortcode("currentYear", function () {
      return (new Date()).toLocaleDateString('en-US', {year: "numeric"}).toString();
    });

    eleventyConfig.addFilter("blog_date", function (dateValue, pageLang) {
      const locale = "US";
      return dateValue.toLocaleDateString(`${pageLang}-${locale}`, {
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

    // Add layout aliases
    eleventyConfig.addLayoutAlias("base", "layouts/base.njk")
    eleventyConfig.addLayoutAlias("page", "layouts/page.njk")
    eleventyConfig.addLayoutAlias("post", "layouts/post.njk")

    // If we use Netlify and has the _redirects file.
    eleventyConfig.addPassthroughCopy("_redirects");

    // DecapCMS (formerly Netlify CMS)
    eleventyConfig.addPassthroughCopy("src/admin");

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
