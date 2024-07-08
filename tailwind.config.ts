import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
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
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                slideintop1s: {
                    from: { opacity: "0", transform: "translateY(-200px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                slideinbottom1s: {
                    from: { opacity: "0", transform: "translateY(200px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                slideinleft1s: {
                    from: { opacity: "0", transform: "translateX(-200px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                slideinright1s: {
                    from: { opacity: "0", transform: "translateX(200px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                slidenavbarright: {
                    from: { opacity: "0", transform: "translateX(100px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                slideicontop: {
                    from: { opacity: "0", transform: "translateY(-100px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                slideintop1s: "slideintop1s 1s ease 300ms",
                slideinleft1s: "slideinleft1s 1s ease 300ms",
                slideinright1s: "slideinright1s 1s ease 300ms",
                slideinbottom1s: "slideinbottom1s 1s ease 300ms",
                slidenavbarright1: "slidenavbarright .3s ease 300ms",
                slidenavbarright2: "slidenavbarright .7s ease 300ms",
                slidenavbarright3: "slidenavbarright 1s ease 300ms",
                slidenavbarright4: "slidenavbarright 1.3s ease 300ms",
                slideicontop1: "slideicontop .5s ease 300ms",
                slideicontop2: "slideicontop 1s ease 300ms",
                slideicontop3: "slideicontop 1.5s ease 300ms",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
