import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


// colors: {
//     background: "#292929",
//     secondaryBackground: "#161616",
//     cardBackground:"#323232",
//     activeColor: "#DB2777",
//     textColor: "#FFFFFF",
//     textColorSecondary: "#CBCBCB",
//     navColor:"#4F4F4F",
//     success: "#00FF00",
//     error: "#FF0000",
//     warning: "#FFA500",
//   },
//   fontFamily: {
//     sans: ["DM Sans", "sans-serif"],
//     mono: ["Open Sans", "monospace"],
//     carme: ["Carme", "sans-serif"],
//   },