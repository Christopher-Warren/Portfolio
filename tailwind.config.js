module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      backgroundImage: (theme) => ({
        "hero-img": "url('/public/img/capitan.jpg')",
      }),
    },
  },
  variants: {},
  plugins: [],
};
