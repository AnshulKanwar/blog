import { NextPage } from "next";
import Link from "next/link";
import { Post } from "../lib/posts";
import { formatDate } from "../lib/utils";

type Props = {
  postItems: Post[];
};

const PostsList: NextPage<Props> = ({ postItems }) => {
  return (
    <div className="max-w-3xl mx-auto mt-24">
      {postItems.map(({ id, title, excerpt, date }) => (
        <div key={id}>
          <div className="my-10">
            <Link href={id}>
              <h1 className="text-2xl font-bold hover:underline hover:cursor-pointer">{title}</h1>
            </Link>
            <small>{formatDate(date)}</small>
            {excerpt && <p className="mt-2">{excerpt}</p>}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default PostsList;
