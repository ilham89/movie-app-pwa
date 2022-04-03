const withPWA = require("next-pwa");

module.exports = withPWA({
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === "development",
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
