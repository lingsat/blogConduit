/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titillium: ["Titillium Web", "sans-serif"],
      },
      colors: {
        maingreen: "#5cB85c",
        darkgreen: "#3d8b3d",
        dategray: "#ddd",
        lightgray: "#bbb",
        darkgrey: "#999",
        mainblack: "#373a3c",
        pageHoverBg: "#eceeef",
        tag: "#aaa",
        tagCloudBg: "#f3f3f3",
        tagItemBg: "#818a91",
        tagItemBgHover: "#687877",
        followLinkHover: "#ccc",
        articleBannerBg: "#333",
      },
      boxShadow: {
        mainBanner:
          "inset 0 8px 8px -8px rgb(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgb(0, 0, 0, 0.3)",
      },
      dropShadow: {
        logo: "0px 1px 3px rgb(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
