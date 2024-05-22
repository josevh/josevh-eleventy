module.exports = function() {
    return {
        url: process.env.URL || 'http://localhost:8080',
        siteName: 'Jose Herrera Portfolio',
        // https://developers.cloudflare.com/pages/configuration/build-configuration/#environment-variables
        environment: (process.env.NETLIFY || "false") == "true" ? "production" : "development",
    };
};
