/**
 * A development environment convenience redirect `/` to `/en`.
 * This is handled in production by Netlify.
 */
const meta = require('./_data/meta.js');

class Index {
    data() {
        return {
            // `false` results in the page not being generated
            // https://github.com/11ty/eleventy/issues/61#issuecomment-419607787
            permalink: meta().environment === 'production' ? false : '/',
            eleventyExcludeFromCollections: true,
        };
    }

    render(data) {
        return `<script>location.href = '/en/';</script>`;
    }
}

module.exports = Index;
