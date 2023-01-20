import NextImage from "next/image";

interface Props {
  src?: string;
  alt?: string | undefined;
}

const Image = ({ src, alt }: Props) => {
  return (
    <span className="block relative h-96">
      <NextImage layout="fill" objectFit="contain" src={`/blog/${src}`} alt={alt} />
    </span>
  );
};

export default Image;
