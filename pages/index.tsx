import type { NextPage } from "next";
import { GetStaticProps } from "next"
import { getSortedPostsData, Post } from "../lib/posts"

import Layout from "../components/layout";
import PostsList from "../components/postsList";

type Props = {
    postItems: Post[]
}

const Home: NextPage<Props> = ({ postItems }) => {
  return (
    <Layout>
      <PostsList postItems={postItems} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = () => {
    const postItems = getSortedPostsData()
    return {
        props: {
            postItems
        }
    }
}

export default Home;
