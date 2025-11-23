export default {
 content: [
  './index.html',
  './*.{js,ts,jsx,tsx}',  // <--- ADD THIS LINE (Looks for App.tsx in root)
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class', // <--- ADD THIS LINE
  theme: {
    extend: {},
  },
  plugins: [],
};
