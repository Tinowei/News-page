// tailwind.config.js
export default {
  content: {
    relative: true,
    files: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx,vue}", // 根據你的專案架構調整
    ],
  },
  theme: {
    extend: {
      colors: {
        // Primary Colors
        "primary-orange": "hsl(35, 77%, 62%)",
        "primary-red": "hsl(5, 85%, 63%)",

        // Neutral Colors
        "neutral-offwhite": "hsl(36, 100%, 99%)",
        "neutral-grayish-blue": "hsl(233, 8%, 79%)",
        "neutral-dark-grayish-blue": "hsl(236, 13%, 42%)",
        "neutral-very-dark-blue": "hsl(240, 100%, 5%)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        base: "15px", // paragraph 字體大小
      },
      fontWeight: {
        normal: "400",
        bold: "700",
        extrabold: "800",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
