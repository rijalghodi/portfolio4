"use client";

import React, { createContext, useContext, useState } from "react";

// Define the type for the theme context value
interface ThemeContextType {
  theme: "light" | "dark"; // The theme can only be 'light' or 'dark'
  toggleTheme: () => void; // Function to toggle the theme
}

// Create a context with a default value of an empty object
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("dark"); // Default theme: 'dark'

  // depricated
  // useEffect(() => {
  //   // Load the stored theme from localStorage (if available)
  //   const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

  //   const initialTheme = savedTheme || "dark"; // Default to 'dark' if no theme is saved
  //   setTheme(initialTheme);
  //   document.documentElement.setAttribute("data-theme", initialTheme);

  //   // Add or remove the dark class on the body element
  //   if (initialTheme === "dark") {
  //     document.body.classList.add("dark");
  //   } else {
  //     document.body.classList.remove("dark");
  //   }
  // }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    // localStorage.setItem("theme", newTheme);

    // Add or remove the dark class on the body element when the theme is toggled
    if (newTheme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
