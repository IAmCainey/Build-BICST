module.exports = {
  images: {
    domains: ['res.cloudinary.com',
      'images.unsplash.com',
      'cdn.sanity.io',
      'undraw.co',
      'wp.paulcaine.co.uk',
    ],
  },
  rewrites: () => [STUDIO_REWRITE],

  reactStrictMode: true,
};

const STUDIO_REWRITE = {
  source: "/admin/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/admin/:path*"
      : "/admin/index.html",

};
