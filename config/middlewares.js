module.exports = [
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: [
        "https://ugmcup.com",
        "http://ugmcup.com",
        "https://www.ugmcup.com",
        "http://www.ugmcup.com",
        "http://localhost:3000",
      ], // Tambahkan URL frontend kamu di sini
      headers: [
        "Content-Type",
        "Authorization",
        "Origin",
        "Accept",
        "Access-Control-Allow-Origin",
        "Access-Control-Allow-Methods",
        "Access-Control-Allow-Headers",
      ],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    },
  },

  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
