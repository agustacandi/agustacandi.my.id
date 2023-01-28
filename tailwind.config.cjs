module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      mono: ["JetBrains Mono", "monospace"],
    },
    extend: {
      boxShadow: {
        sharp: "5px 5px 0 0 rgb(76, 86, 106)",
        less: "3px 3px 0 0 rgb(76, 86, 106)",
      },
      colors: {
        nord: {
          polar: {
            1: "#2E3440",
            2: "#3B4252",
            3: "#434C5E",
            4: "#4C566A",
          },
          snow: {
            1: "#D8DEE9",
            2: "#E5E9F0",
            3: "#ECEFF4",
          },
        },
      },
    },
  },
  plugins: [],
};
