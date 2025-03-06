import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#292929",
        secondaryBackground: "#161616",
        cardBackground:"#323232",
        activeColor: "#DB2777",
        textColor: "#FFFFFF",
        textColorSecondary: "#CBCBCB",
        navColor:"#4F4F4F",
        success: "#00FF00",
        error: "#FF0000",
        warning: "#FFA500",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        mono: ["Open Sans", "monospace"],
        carme: ["Carme", "sans-serif"],
      },
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;


function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
function flattenColorPalette(colors: any) {
  const result: Record<string, string> = {};

  function recurse(obj: any, currentKey: string) {
    for (const key in obj) {
      const value = obj[key];
      const newKey = currentKey ? `${currentKey}-${key}` : key;
      if (typeof value === "object" && value !== null) {
        recurse(value, newKey);
      } else {
        result[newKey] = value;
      }
    }
  }

  recurse(colors, "");
  return result;
}
