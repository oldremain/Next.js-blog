import { useContext } from "react";
import { PostContext } from "context";

export function usePostsContext() {
  return useContext(PostContext);
}
