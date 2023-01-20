import NextImage from "next/image";

interface Props {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: Props) => {
  return (
    <div className="relative h-96">
      <NextImage layout="fill" objectFit="contain" src={`/blog/${src}`} alt={alt} />
    </div>
  );
};

export default Image;
