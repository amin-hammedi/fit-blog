import Layout from "../components/layout";
import Link from "next/link";

const posts = [
  {
    id: "1",
    title: "Full Body Workout Split",
    description: "A comprehensive guide to full body workouts.",
  },
  {
    id: "2",
    title: "Upper/Lower Workout Split",
    description: "A balanced approach to training different muscle groups.",
  },
  {
    id: "3",
    title: "Push/Pull/Legs Split",
    description: "A popular and effective workout routine.",
  },
];

export default function Home() {
  return (
    <Layout>
      <h2>
        Finding the right workout <b>split</b> is essential for building an
        effective and sustainable fitness routine. Here, we will explore
        <b>several</b> popular workout splits and discuss their benefits and
        considerations for beginners and as well pros.
      </h2>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>
              <Link style={{ color: "orange" }} href={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </h2>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
