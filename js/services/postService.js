import baseApiUrl from "../api/baseApi.js";

export const postsMethod = () => {
  const getAllPosts = async (id) => {
    const responsePosts = await fetch(`${baseApiUrl}/posts?userId=${id}`);

    if (!responsePosts.ok) {
      throw new Error(`Failed to fetch posts status :${responsePosts.status}`);
    }

    const posts = await responsePosts.json();

    if (!Array.isArray(posts)) {
      throw new Error("Format data is not valid!");
    }

    return posts;
  };

  return { getAllPosts };
};
