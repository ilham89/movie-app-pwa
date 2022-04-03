const withPWA = require("next-pwa");

module.exports = withPWA({
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: false,
    },
    reactStrictMode: true,
    env: {
        BASE_URL: process.env.BASE_URL,
        IMDB_API_KEY: process.env.IMDB_API_KEY,
    },
    images: {
        domains: ["m.media-amazon.com", "imdb-api.com"],
    },
});
