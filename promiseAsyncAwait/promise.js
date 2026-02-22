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
};

export default newPromise;
