// pages/index.js
import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ blogs }) {
  return (
    <div>
      <ul>
        {
          blogs.map(blog =>
            <li key={blog.id}>
              <Link className="font-noto" href={`/blogs/${blog.id}`}>{blog.title}</Link>
            </li>
          )
        }
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};
