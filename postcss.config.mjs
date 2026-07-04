// This project uses plain CSS (no Tailwind). A local PostCSS config is required
// so Next.js does not walk up the directory tree and pick up an unrelated
// config in a parent folder (e.g. one that enables @tailwindcss/postcss).
const config = {
  plugins: {},
};

export default config;
