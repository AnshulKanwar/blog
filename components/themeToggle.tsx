import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi2"

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <span>
      {theme == "light" ? (
        <button onClick={() => setTheme("dark")}>
          <HiSun className="w-8 h-8"/>
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <HiMoon className="w-7 h-7"/>
        </button>
      )}
    </span>
  );
};

export default ThemeToggle;