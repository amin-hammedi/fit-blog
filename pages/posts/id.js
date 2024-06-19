import { useRouter } from "next/router";
import Layout from "../../components/layout";

const postContent = {
  1: {
    title: "Full Body Workout Split",
    content: "Details about Full Body Workout Split...",
  },
  2: {
    title: "Upper/Lower Workout Split",
    content: "Details about Upper/Lower Workout Split...",
  },
  3: {
    title: "Push/Pull/Legs Split",
    content: "Details about Push/Pull/Legs Split...",
  },
};

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const post = postContent[id] || { title: "Post not found", content: "" };

  return (
    <Layout>
      <article>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
    </Layout>
  );
}
