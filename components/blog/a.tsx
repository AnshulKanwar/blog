import { ReactNode } from "react";

interface Props {
  href?: string | undefined;
  children?: ReactNode;
}

const A = ({ href, children }: Props) => {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener">
      {children}
    </a>
  );
};

export default A;
