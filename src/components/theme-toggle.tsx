"use client";

import { useTheme } from "next-themes";
import { MoonStar, SunMedium } from "lucide-react";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className="border-border bg-secondary hover:bg-secondary-foreground px-4 py-5 rounded-md text-text-inverse"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <MoonStar className="h-5 w-5" />
      ) : (
        <SunMedium className="h-5 w-5" />
      )}
    </Button>
  );
}
