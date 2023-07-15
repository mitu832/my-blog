// pages/blog/[id].js
import { client } from "../../libs/client";
import blogID from '../../styles/blogs/id.module.scss';

export default function BlogId({ blogs }) {
  const cmsData = {
    title  : blogs.title,
    publish: blogs.publishedAt,
    content: blogs.content
  }
  const { title, publish, content } = cmsData

  return (
    <main>
      <h1 className={blogID.title}>{title}</h1>
      <p>{publish}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${content}`,
        }}
      />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content) => `/blogs/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blogs: data,
    },
  };
};
