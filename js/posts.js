import { postsMethod } from "./services/postService.js";

const { getAllPosts } = postsMethod();

const contentPost = document.getElementById("content-posts");

const getAllData = async () => {
  contentPost.innerHTML = "<p>Load post...</p>";
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    contentPost.innerHTML = "<p>Tidak ada data Posts</p>";
    return;
  }

  try {
    const data = await getAllPosts(id);

    const result = data
      .map((post) => {
        return `
        <li>${post.title}</li>
        `;
      })
      .join("");

    contentPost.innerHTML = result;
  } catch (error) {
    contentPost.innerHTML = "<p>Gagal memuat data</p>";
    console.log(error);
  }
};

getAllData();
