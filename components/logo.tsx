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
      viewBox="0 0 512 253"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="k-top"
        d="M499.929 4.99998L264.649 240.279V4.99998L499.929 4.99998Z"
        stroke={color}
        stroke-width="10"
      />
      <path
        id="k-bottom"
        d="M264.649 12.071L499.929 247.35L264.649 247.35V12.071Z"
        fill={color}
        stroke={color}
        stroke-width="10"
      />
      <path
        id="a-right"
        d="M247.35 240.279L12.0711 5H247.35V240.279Z"
        fill={color}
        stroke={color}
        stroke-width="10"
      />
      <path
        id="a-left"
        d="M240.279 4.99998L5.00002 240.279V4.99998H240.279Z"
        stroke={color}
        stroke-width="10"
      />
    </svg>
  );
};

export default Logo;