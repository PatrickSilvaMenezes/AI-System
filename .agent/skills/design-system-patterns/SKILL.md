---
name: design-system-patterns
description: Master design system architecture to create consistent, maintainable, and scalable UI foundations across web and mobile applications.
---

# Design System Patterns

## Theme Context
```tsx
import { createContext, useContext, useEffect, useState } from "react";
type Theme = "light" | "dark" | "system";
interface ThemeContextValue { theme: Theme; resolvedTheme: "light" | "dark"; setTheme: (theme: Theme) => void;}
const ThemeContext = createContext<ThemeContextValue | null>(null);
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") { return (localStorage.getItem("theme") as Theme) || "system"; }
    return "system";
  });
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const root = document.documentElement;
    const applyTheme = (isDark: boolean) => {
      root.classList.remove("light", "dark");
      root.classList.add(isDark ? "dark" : "light");
      setResolvedTheme(isDark ? "dark" : "light");
    };
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      applyTheme(mediaQuery.matches);
      const handler = (e: MediaQueryListEvent) => applyTheme(e.matches);
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    } else { applyTheme(theme === "dark"); }
  }, [theme]);
  useEffect(() => { localStorage.setItem("theme", theme); }, [theme]);
  return ( <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}> {children} </ThemeContext.Provider> );
}
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
```

## Button Component & Style Dictionary
```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: { sm: "h-9 px-3 text-sm", md: "h-10 px-4 text-sm", lg: "h-11 px-8 text-base", icon: "h-10 w-10", },
    },
    defaultVariants: { variant: "default", size: "md", },
  },
);
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean;}
export function Button({ className, variant, size, ...props }: ButtonProps) {
  return ( <button className={cn(buttonVariants({ variant, size, className }))} {...props} /> );
}
```

```javascript
// style-dictionary.config.js
module.exports = {
  source: ["tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "dist/css/",
      files: [ { destination: "variables.css", format: "css/variables", options: { outputReferences: true }, }, ],
    },
    scss: { transformGroup: "scss", buildPath: "dist/scss/", files: [ { destination: "_variables.scss", format: "scss/variables", }, ], },
    ios: { transformGroup: "ios-swift", buildPath: "dist/ios/", files: [ { destination: "DesignTokens.swift", format: "ios-swift/class.swift", className: "DesignTokens", }, ], },
    android: { transformGroup: "android", buildPath: "dist/android/", files: [ { destination: "colors.xml", format: "android/colors", filter: { attributes: { category: "color" } }, }, ], },
  },
};
```

### Purpose
In the complex world of modern software development, maintaining a cohesive user experience across diverse platforms can be a significant challenge. This agent skill empowers you to architect robust design systems that serve as the single source of truth for your UI.

## When to Use This Skill
- Architecting a multi-brand theming system for a product suite.
- Implementing a comprehensive light/dark mode switch with persistent storage.
- Establishing a design-to-code workflow utilizing Figma tokens for component properties.
- Creating a hierarchical structure for design tokens, from primitive to component-specific values.

## Pro Tips
- 💡 Prioritize a clear token naming convention (e.g., `color-surface-primary`, `font-size-body-md`) to ensure maintainability.
- 💡 When building theming, always consider accessibility from the outset.
- 💡 Integrate automation for token generation and component documentation.

## Recommended Rules & Workflows
- **Visual Regression Testing**: Catch unintended visual changes.
- **Implement Dark Mode**: Add dark mode support using next-themes.
- **Automatic commit message generator**: Fast AI-powered commit messages.

## Recommended MCP Servers
- **Figma to Flutter**: Write clean Flutter code from Figma design tokens.
- **21st.dev Magic**: Create crafted UI components.
- **2slides**: Convert content into slides/PPT.

## How to Use
### For Claude Code (CLI)
Copy the rule content into your project's custom instructions or follow the Add-Skill CLI guide.

### For Cursor & Windsurf
Use in the "Rules for AI" section. This specific unit helps the agent avoid architecture & design patterns issues.

[Read the Master Guide: Mastering Agent Skills](https://antigravity.codes/blog/mastering-agent-skills)
