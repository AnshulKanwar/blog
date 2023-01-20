import { GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { ParsedUrlQuery } from "querystring";

import Layout from "../components/layout";

import { getAllPostsIds, getPost } from "../lib/posts";
import { formatDate } from "../lib/utils";

import A from "../components/blog/a";
import Alert from "../components/blog/alert";
import Image from "../components/blog/image";

interface Props {
  title: string;
  date: string;
  content: MDXRemoteSerializeResult;
}

const components = {
  a: A,
  img: Image,
  Alert,
}

const Post = ({ title, date, content }: Props) => {
  return (
    <Layout>
      <div className="max-w-[65ch] mx-8 sm:mx-auto my-24">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-5">{title}</h1>
          <span className="text-gray-500 text-sm">{formatDate(date)}</span>
        </div>
        <article className="mt-10 mx-auto prose dark:prose-invert">
          <MDXRemote {...content} components={components} />
        </article>
      </div>
    </Layout>
  );
};

export function getStaticPaths() {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as Params;

  const postData = getPost(id);

  const mdxSource = await serialize(postData.content);

  return {
    props: {
      ...postData,
      content: mdxSource,
    },
  };
};

export default Post;
