// "use client";

// import { useTheme } from "next-themes";
// import { MoonStar, SunMedium } from "lucide-react";
// import { Button } from "./ui/button";

// export function ThemeToggle() {
//   const { theme, setTheme } = useTheme();

//   return (
//     <Button
//       className="border-border bg-secondary hover:bg-secondary-foreground px-4 py-5 rounded-md text-text-inverse"
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//     >
//       {theme === "dark" ? (
//         <MoonStar className="h-5 w-5" />
//       ) : (
//         <SunMedium className="h-5 w-5" />
//       )}
//     </Button>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon">
        <div className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
     className="border-border bg-secondary hover:bg-secondary-foreground px-4 py-5 rounded-md text-text-inverse"
      
      size="icon"
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