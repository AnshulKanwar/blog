import fs from "fs";
import path from "path";
// TODO: migrate from gray-matter to next-mdx-remote
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export type Post = {
  id: string;
  title: string;
  date: string;
  excerpt?: string;
  content: string;
};

export const getSortedPostsData = (): Post[] => {
  const fileNames = fs.readdirSync(postsDir);

  const posts = fileNames.map((fileName: string): Post => {
    const id = fileName.replace(/\.mdx$/, "");
    const filePath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");

    const {
      data: { title, date },
      excerpt,
      content,
    } = matter(fileContents, { excerpt: true });

    return {
      id,
      title,
      date,
      excerpt: excerpt,
      content,
    };
  });

  return posts.sort(({ date: a }, {date: b}) => (a > b) ? -1:1)
};

export const getAllPostsIds = () => {
  const fileNames = fs.readdirSync(postsDir);
  return fileNames.map((filename) => {
    return {
      params: {
        id: filename.replace(/\.mdx$/, ""),
      },
    };
  });
};

export const getPost = (id: string): Post => {
  const filePath = path.join(postsDir, `${id}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf-8");

  const {
    data: { title, date },
    content,
    excerpt,
  } = matter(fileContents, { excerpt: true });

  return {
    id,
    title,
    date,
    excerpt: excerpt,
    content,
  };
};
