// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: ["class"],
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//     "*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "#6366f1",
//           50: "#eef2ff",
//           100: "#e0e7ff",
//           200: "#c7d2fe",
//           300: "#a5b4fc",
//           400: "#818cf8",
//           500: "#6366f1",
//           600: "#4f46e5",
//           700: "#4338ca",
//           800: "#3730a3",
//           900: "#312e81",
//           foreground: "#ffffff",
//         },
//         secondary: {
//           DEFAULT: "#8b5cf6",
//           50: "#faf5ff",
//           100: "#f3e8ff",
//           200: "#e9d5ff",
//           300: "#d8b4fe",
//           400: "#c084fc",
//           500: "#a855f7",
//           600: "#9333ea",
//           700: "#7c3aed",
//           800: "#6b21a8",
//           900: "#581c87",
//           foreground: "#ffffff",
//         },
//         accent: {
//           DEFAULT: "#06b6d4",
//           50: "#ecfeff",
//           100: "#cffafe",
//           200: "#a5f3fc",
//           300: "#67e8f9",
//           400: "#22d3ee",
//           500: "#06b6d4",
//           600: "#0891b2",
//           700: "#0e7490",
//           800: "#155e75",
//           900: "#164e63",
//           foreground: "#ffffff",
//         },
//         destructive: {
//           DEFAULT: "#ef4444",
//           foreground: "#ffffff",
//         },
//         muted: {
//           DEFAULT: "#f9fafb",
//           foreground: "#6b7280",
//         },
//         popover: {
//           DEFAULT: "#ffffff",
//           foreground: "#111827",
//         },
//         card: {
//           DEFAULT: "#ffffff",
//           foreground: "#111827",
//         },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       fontFamily: {
//         sans: ["Inter", "sans-serif"],
//       },
//       animation: {
//         "fade-in": "fadeIn 1s ease-out",
//         "slide-up": "slideUp 1s ease-out",
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//       },
//       keyframes: {
//         fadeIn: {
//           "0%": {
//             opacity: "0",
//             transform: "translateY(30px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateY(0)",
//           },
//         },
//         slideUp: {
//           "0%": {
//             opacity: "0",
//             transform: "translateY(50px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateY(0)",
//           },
//         },
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// }


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: ["class"],
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//     "*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "rgb(99 102 241)",
//           50: "rgb(238 242 255)",
//           100: "rgb(224 231 255)",
//           200: "rgb(199 210 254)",
//           300: "rgb(165 180 252)",
//           400: "rgb(129 140 248)",
//           500: "rgb(99 102 241)",
//           600: "rgb(79 70 229)",
//           700: "rgb(67 56 202)",
//           800: "rgb(55 48 163)",
//           900: "rgb(49 46 129)",
//           950: "rgb(30 27 75)",
//           foreground: "rgb(255 255 255)",
//         },
//         secondary: {
//           DEFAULT: "rgb(139 92 246)",
//           50: "rgb(250 245 255)",
//           100: "rgb(243 232 255)",
//           200: "rgb(233 213 255)",
//           300: "rgb(216 180 254)",
//           400: "rgb(192 132 252)",
//           500: "rgb(168 85 247)",
//           600: "rgb(147 51 234)",
//           700: "rgb(126 34 206)",
//           800: "rgb(107 33 168)",
//           900: "rgb(88 28 135)",
//           950: "rgb(59 7 100)",
//           foreground: "rgb(255 255 255)",
//         },
//         accent: {
//           DEFAULT: "rgb(6 182 212)",
//           50: "rgb(236 254 255)",
//           100: "rgb(207 250 254)",
//           200: "rgb(165 243 252)",
//           300: "rgb(103 232 249)",
//           400: "rgb(34 211 238)",
//           500: "rgb(6 182 212)",
//           600: "rgb(8 145 178)",
//           700: "rgb(14 116 144)",
//           800: "rgb(21 94 117)",
//           900: "rgb(22 78 99)",
//           950: "rgb(8 51 68)",
//           foreground: "rgb(255 255 255)",
//         },
//         destructive: {
//           DEFAULT: "rgb(239 68 68)",
//           foreground: "rgb(255 255 255)",
//         },
//         muted: {
//           DEFAULT: "rgb(249 250 251)",
//           foreground: "rgb(107 114 128)",
//         },
//         popover: {
//           DEFAULT: "rgb(255 255 255)",
//           foreground: "rgb(17 24 39)",
//         },
//         card: {
//           DEFAULT: "rgb(255 255 255)",
//           foreground: "rgb(17 24 39)",
//         },
//         success: "rgb(16 185 129)",
//         warning: "rgb(245 158 11)",
//         info: "rgb(59 130 246)",
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       fontFamily: {
//         sans: ["Inter", "sans-serif"],
//       },
//       animation: {
//         "fade-in": "fadeIn 1s ease-out",
//         "slide-up": "slideUp 1s ease-out",
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//         spin: "spin 1s linear infinite",
//         pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
//         bounce: "bounce 1s infinite",
//       },
//       keyframes: {
//         fadeIn: {
//           "0%": {
//             opacity: "0",
//             transform: "translateY(30px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateY(0)",
//           },
//         },
//         slideUp: {
//           "0%": {
//             opacity: "0",
//             transform: "translateY(50px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateY(0)",
//           },
//         },
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//         spin: {
//           to: { transform: "rotate(360deg)" },
//         },
//         pulse: {
//           "50%": { opacity: "0.5" },
//         },
//         bounce: {
//           "0%, 100%": {
//             transform: "translateY(-25%)",
//             animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
//           },
//           "50%": {
//             transform: "none",
//             animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
//           },
//         },
//       },
//       spacing: {
//         18: "4.5rem",
//         88: "22rem",
//       },
//       zIndex: {
//         60: "60",
//         70: "70",
//         80: "80",
//         90: "90",
//         100: "100",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// }



/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "rgb(99 102 241)",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
          foreground: "rgb(255 255 255)",
        },
        secondary: {
          DEFAULT: "rgb(139 92 246)",
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7c3aed",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3b0764",
          foreground: "rgb(255 255 255)",
        },
        accent: {
          DEFAULT: "rgb(6 182 212)",
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          950: "#083344",
          foreground: "rgb(255 255 255)",
        },
        destructive: {
          DEFAULT: "rgb(239 68 68)",
          foreground: "rgb(255 255 255)",
        },
        muted: {
          DEFAULT: "rgb(249 250 251)",
          foreground: "rgb(107 114 128)",
        },
        popover: {
          DEFAULT: "rgb(255 255 255)",
          foreground: "rgb(17 24 39)",
        },
        card: {
          DEFAULT: "rgb(255 255 255)",
          foreground: "rgb(17 24 39)",
        },
        success: "rgb(16 185 129)",
        warning: "rgb(245 158 11)",
        info: "rgb(59 130 246)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out",
        "slide-up": "slideUp 1s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spin: "spin 1s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
        pulse: {
          "50%": { opacity: "0.5" },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },
  },
  plugins: [],
}
