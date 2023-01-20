import { useState, useEffect, ReactElement, ReactNode } from "react";
import { useTheme } from "next-themes";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierCaveLight, atelierCaveDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface Props {
  className?: string | undefined;
  children?: ReactNode;
}

const Pre = ({ className, children }: Props) => {
  let codeString = (children as ReactElement)!.props.children;

  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <SyntaxHighlighter
      language={className}
      style={theme === "light" ? atelierCaveLight : atelierCaveDark}
      customStyle={{ padding: "3em 2em" }}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

export default Pre;
