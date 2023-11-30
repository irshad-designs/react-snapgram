import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import { useGetRecentPostsMutation } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";

const Home = () => {
  const {
    data: posts,
    isPending: isPostLoading,
    isError,
  } = useGetRecentPostsMutation();

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-post">
          <h2 className="h3-bold md:h2-bold text-left w-full ">Home Feed</h2>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 w-full gap-9">
              {posts?.documents.map((post: Models.Document, i: number) => (
                <PostCard post={post} key={i} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
