const newPromise = () => {
  const ambilData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Berhasil Ambil Data.");
      }, 2000);
    });
  };

  ambilData().then((result) => console.log(result));

  const login = (password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (password === "123456") {
          resolve("Berhasil login!");
        } else {
          reject("Gagal password salah!");
        }
      }, 2000);
    });
  };

  login("123456")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  const getData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Berhasil get data");
      }, 2000);
    });
  };

  const viewData = async () => {
    const ambilData = await getData();
    console.log(ambilData);
  };

  viewData();

  const fetchData = (pass) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (pass === "password") {
          resolve("Login Success!");
        } else {
          reject("Gagal password yang anda masukan salah!");
        }
      }, 2000);
    });
  };

  const tampilData = async () => {
    try {
      const data = await fetchData("password");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  tampilData();

  const getUser = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id: 1,
          nama: "Felix",
          kota: "Purwokerto",
        });
      }, 1000);
    });
  };

  const tampilUser = async () => {
    const getData = await getUser();
    console.log(getData.nama);
  };

  tampilUser();

  const users = () => new Promise((resolve, reject) => setTimeout(() => resolve("Data Users"), 2000));

  const product = () => new Promise((resolve, reject) => setTimeout(() => resolve("Data Products"), 2000));

  // const getAllData = async () => {
  //   const fetchUser = await users();
  //   const fetchProduct = await product();

  //   console.log(fetchUser, fetchProduct);
  // };

  const getAllData = async () => {
    const [fetchUser, fetchProduct] = await Promise.all([users(), product()]);

    console.log(fetchUser, fetchProduct);
  };

  getAllData();

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const jalan = async () => {
    console.log("Mulai");
    await delay(2000);
    console.log("Selesai");
  };

  jalan();

  const fetchDataUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  };

  fetchDataUsers();

  const getNumber = async () => {
    return 10;
  };

  getNumber().then(console.log);

  const getUserAndPosts = async () => {
    // try {
    //   const responseUser = await fetch("https://jsonplaceholder.typicode.com/users/1");
    //   const userData = await responseUser.json();

    //   const responsePost = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`);
    //   const postData = await responsePost.json();

    //   const userPosts = { ...userData, postData };

    //   console.log(userPosts);
    //   return userPosts;
    // } catch (error) {
    //   console.log("Error :", error);
    // }

    const responseUser = await fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .catch((err) => console.log("Error :", err));

    const responsePost = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${responseUser.id}`)
      .then((res) => res.json())
      .catch((err) => console.log("Error :", err));

    const hasil = { ...responseUser, responsePost };

    console.log(hasil);
    return hasil;
  };

  getUserAndPosts();

  const getUserPostComments = async () => {
    try {
      const responseUser = await fetch("https://jsonplaceholder.typicode.com/users/2");
      const user = await responseUser.json();

      const responsePost = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
      const posts = await responsePost.json();

      const postWithComment = await Promise.all(
        posts.map(async (post) => {
          const responseComment = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
          const comments = await responseComment.json();

          const hasil = { ...posts, comments };

          return hasil;
        }),
      );

      const result = { ...user, posts: postWithComment };

      console.log(result);
      return result;
    } catch (error) {
      console.log("Error :", error);
    }
  };

  getUserPostComments();

  const getDataUsers = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id: 1,
          nama: "Felix",
          umur: 22,
        });
      }, 1000);
    });
  };

  const getDataPosts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: "Posts 1",
          },
          {
            id: 2,
            title: "Posts 2",
          },
        ]);
      }, 1500);
    });
  };

  const getDataStats = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ follower: 120, following: 50 });
      }, 800);
    });
  };

  const getDashboardData = async () => {
    try {
      const [users, posts, stats] = await Promise.all([getDataUsers(), getDataPosts(), getDataStats()]);

      return { users, posts, stats };
    } catch (error) {
      console.log("Error :", error);
      throw error;
    }
  };

  getDashboardData().then((res) => console.log(res));
};

export default newPromise;
