import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // Valores por defecto de Tailwind:
        sm: "640px", // Tablets pequeñas / Celulares horizontal
        md: "768px", // Tablets
        lg: "1024px", // Laptops
        xl: "1280px", // Desktops
        "2xl": "1536px",
      },
      colors: {
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        "primary-soft": "var(--color-primary-soft)",

        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        "accent-soft": "var(--color-accent-soft)",

        secondary: "var(--color-secondary)",
        "secondary-soft": "var(--color-secondary-soft)",

        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        "surface-alt": "var(--color-surface-alt)",
        "surface-dark": "var(--color-surface-dark)",

        border: "var(--color-border)",
        "border-strong": "var(--color-border-strong)",

        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
          "on-dark": "var(--color-text-on-dark)",
        },

        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        info: "var(--color-info)",
      },

      fontFamily: {
        sans: ["var(--font-sans)"],
        heading: ["var(--font-heading)"],
      },

      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
        "4xl": "var(--text-4xl)",
        "5xl": "var(--text-5xl)",
      },

      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        "3xl": "var(--radius-3xl)",
        full: "var(--radius-full)",
      },

      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
        hover: "var(--shadow-hover)",
        modal: "var(--shadow-modal)",
        accent: "var(--shadow-accent)",
      },

      maxWidth: {
        container: "var(--container-max)",
      },

      transitionDuration: {
        fast: "150ms",
        base: "250ms",
        slow: "400ms",
      },

      backgroundImage: {
        "brand-gradient":
          "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
        "hero-glow":
          "radial-gradient(circle at top left, rgba(21, 84, 209, 0.10), transparent 30%), radial-gradient(circle at top right, rgba(18, 209, 142, 0.10), transparent 28%), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
