import { useRouter } from "next/router";
import Layout from "../../components/layout";
import FullBodyWorkout from "../../components/FullBodyWorkout";
import UpperLowerSplit from "../../components/UpperLowerSplit";
import PushPullLegs from "../../components/PushPullLegs";

const postContent = {
  1: {
    title: "Full Body Workout Split",
    content: "Details about Full Body Workout Split...",
    component: <FullBodyWorkout />,
  },
  2: {
    title: "Upper/Lower Workout Split",
    content: "Details about Upper/Lower Workout Split...",
    component: <UpperLowerSplit />,
  },
  3: {
    title: "Push/Pull/Legs Split",
    content: "Details about Push/Pull/Legs Split...",
    component: <PushPullLegs />,
  },
};

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const post = postContent[id] || {
    title: "Post not found",
    content: "",
    component: null,
  };

  let WorkoutComponent = null;

  if (id === "1") {
    WorkoutComponent = <FullBodyWorkout />;
  } else if (id === "2") {
    WorkoutComponent = <UpperLowerSplit />;
  } else if (id === "3") {
    WorkoutComponent = <PushPullLegs />;
  }

  return (
    <Layout>
      <article>{WorkoutComponent}</article>
    </Layout>
  );
}
