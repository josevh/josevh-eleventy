module.exports = function() {
    return {
        url: process.env.URL || 'http://localhost:8080',
        siteName: 'Jose Herrera Portfolio',
        // Cloudflare: https://developers.cloudflare.com/pages/configuration/build-configuration/#environment-variables
        // Netlify: https://docs.netlify.com/build/configure-builds/environment-variables/#build-metadata
        environment: process.env.NETLIFY === 'true' ? 'production' : 'development',
    };
};
