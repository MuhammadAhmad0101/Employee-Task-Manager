export default {
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
      theme: {
            extend: {
                  colors: {
                        primary: "(var(--color-primary))",
                  },
                  fontFamily: {
                        Satoshi: ["Satoshi", "sans-serif"],
                  },
            },
      },
      plugins: [],
};
