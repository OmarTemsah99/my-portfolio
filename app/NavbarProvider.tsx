"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "./Navbar";

// Context for sharing navbar state across the app
interface NavbarContextType {
  activePage: string;
  setActivePage: (page: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

// Custom hook to use navbar context
export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within NavbarProvider");
  }
  return context;
};

// Map routes to page names
const routeToPageMap: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/skills": "Skills",
  "/projects": "Projects",
  "/contact": "Contact",
};

// Map page names to routes
const pageToRouteMap: Record<string, string> = {
  Home: "/",
  About: "/about",
  Skills: "/skills",
  Projects: "/projects",
  Contact: "/contact",
};

interface NavbarProviderProps {
  children?: React.ReactNode;
}

export function NavbarProvider({ children }: NavbarProviderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [activePage, setActivePage] = useState<string>("Home");
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Update active page based on current route
  useEffect(() => {
    const currentPage = routeToPageMap[pathname] || "Home";
    setActivePage(currentPage);
  }, [pathname]);

  // Load dark mode preference from localStorage on mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    } else {
      // Check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handlePageChange = (page: string) => {
    const route = pageToRouteMap[page];
    if (route) {
      router.push(route);
    }
    setActivePage(page);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const contextValue: NavbarContextType = {
    activePage,
    setActivePage,
    darkMode,
    toggleDarkMode,
  };

  return (
    <NavbarContext.Provider value={contextValue}>
      <Navbar
        activePage={activePage}
        onPageChange={handlePageChange}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />
      {children}
    </NavbarContext.Provider>
  );
}

// Simple wrapper component for just the navbar (if you don't need the context)
export function NavbarWrapper() {
  const pathname = usePathname();
  const router = useRouter();
  const [activePage, setActivePage] = useState<string>("Home");
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Update active page based on current route
  useEffect(() => {
    const currentPage = routeToPageMap[pathname] || "Home";
    setActivePage(currentPage);
  }, [pathname]);

  // Load dark mode preference from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedDarkMode = localStorage.getItem("darkMode");
      if (savedDarkMode !== null) {
        setDarkMode(JSON.parse(savedDarkMode));
      } else {
        // Check system preference
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        setDarkMode(prefersDark);
      }
    }
  }, []);

  // Save dark mode preference and apply theme
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));

      // Apply theme to document
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [darkMode]);

  const handlePageChange = (page: string) => {
    const route = pageToRouteMap[page];
    if (route) {
      router.push(route);
    }
    setActivePage(page);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <Navbar
      activePage={activePage}
      onPageChange={handlePageChange}
      darkMode={darkMode}
      onToggleDarkMode={toggleDarkMode}
    />
  );
}
