module.exports = function() {
    return {
        // https://developers.cloudflare.com/pages/configuration/build-configuration/#environment-variables
        environment: (process.env.NETLIFY || "false") == "true" ? "production" : "development",
    };
};
