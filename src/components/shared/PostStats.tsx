import {
  useDeleteSavedPostMutation,
  useGetCurrentUserMutation,
  useLikePostMutation,
  useSavePostMutation,
} from "@/lib/react-query/queriesAndMutations";
import { checkIsLiked } from "@/lib/utils";
import { Models } from "appwrite";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

type PostStatsProps = {
  post: Models.Document;
  userId: string;
};
const PostStats = ({ post, userId }: PostStatsProps) => {
  const likesList = post.likes.map((user: Models.Document) => user.$id);

  // mutations
  const { mutate: likePost } = useLikePostMutation();
  const { mutate: savePost, isPending: isSavingPost } = useSavePostMutation();
  const { mutate: deletePost, isPending: isDeletingSaved } =
    useDeleteSavedPostMutation();
  const { data: currentUser } = useGetCurrentUserMutation();

  const [liked, setLiked] = useState(likesList);
  const [saved, setSaved] = useState(false);

  const savePostRecord = currentUser?.save.find(
    (record: Models.Document) => record.post.$id === post.$id
  );
  useEffect(() => {
    setSaved(!!savePostRecord);
  }, [currentUser]);

  const handleLikePost = (e: React.MouseEvent) => {
    e.stopPropagation();
    let newLikes = [...liked];
    const hasLiked = newLikes.includes(userId);
    if (hasLiked) {
      newLikes = newLikes.filter((id: string) => id !== userId);
    } else {
      newLikes.push(userId);
    }
    setLiked(newLikes);
    likePost({ postId: post.$id, likesArray: newLikes });
  };

  const handleSavePost = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (savePostRecord) {
      setSaved(false);
      return deletePost(savePostRecord.$id);
    } else {
      savePost({ userId: userId, postId: post.$id });
      setSaved(true);
    }
  };

  return (
    <div className="flex justify-between items-center z-20 mt-2">
      <div className="flex gap-2 mr-5">
        <img
          src={`/assets/icons/${
            checkIsLiked(liked, userId) ? "liked" : "like"
          }.svg`}
          alt="liked-icon"
          width={20}
          height={20}
          onClick={handleLikePost}
          className="cursor-pointer"
        />
        <p className="small-medium lg:base-medium">{liked.length}</p>
      </div>
      <div className="flex gap-2 mr-5">
        {isSavingPost || isDeletingSaved ? (
          <Loader />
        ) : (
          <img
            src={`/assets/icons/${saved ? "saved" : "save"}.svg`}
            alt="save-icon"
            width={20}
            height={20}
            onClick={handleSavePost}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default PostStats;
