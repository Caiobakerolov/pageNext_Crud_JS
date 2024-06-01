/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
   
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: [
      /^bg-/,
      /^to-/,
      /^from-/,
    ]
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
}

