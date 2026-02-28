/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        'primary-dark': '#F5F7FA',
        'light-bg': '#FAFBFD',
        'text-dark': '#111827',
        'border-light': '#E5E7EB',
        'accent-teal': '#0D9488',
        'accent-green': '#10B981',
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(135deg, #E0F7FA 0%, #F5E6E8 100%)',
        'gradient-accent': 'linear-gradient(135deg, #14B8A6 0%, #06B6D4 100%)',
      },
    },
  },
  plugins: [],
}

