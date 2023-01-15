import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const Logo = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const color = theme === "light" ? "#E4E4E7" : "#3F3F46";

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 485 237"
  >
    <path
      stroke={color}
      strokeWidth="20"
      d="M460.858 10L258.415 212.443V10h202.443z"
    ></path>
    <path
      fill={color}
      stroke={color}
      strokeWidth="20"
      d="M258.415 24.142l202.443 202.443H258.415V24.142zM226.585 212.443L24.142 10h202.443v202.443z"
    ></path>
    <path
      stroke={color}
      strokeWidth="20"
      d="M212.443 10L10 212.443V10h202.443z"
    ></path>
  </svg>
  );
};

export default Logo;