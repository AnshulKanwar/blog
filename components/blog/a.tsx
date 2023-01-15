interface Props {
  href: string;
  children: string;
}

const A = ({ href, children }: Props) => {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener">
      {children}
    </a>
  );
};

export default A;
