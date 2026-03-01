export const spreadRest = () => {
  const angka = [1, 2, 3, 4];

  const spreadAngka = [...angka];

  console.log(angka);
};

export const spreadRemix = () => {
  const buah1 = ["apel", "pear"];
  const buah2 = ["pisang", "alpukat"];

  const remix = [...buah1, ...buah2, "anggur"];

  console.log(remix);
};

export const spreadObject = () => {
  const user = {
    nama: "Felix",
    umur: 22,
  };

  const copyObject = { ...user };

  const rubahUmur = { ...user, umur: 23 };

  const nama = { name: "Felix" };
  const kota = { city: "Purwokerto" };

  const gabung = { ...nama, ...kota };

  console.log(copyObject);
  console.log(rubahUmur);
  console.log(gabung);
};

export const spreadJumlah = () => {
  const jumlahAngka = [1, 2, 3, 4, 5];

  // function penjumlahan(...angka) {
  //   let total = 0;

  //   for (let i = 0; i < angka.length; i++) {
  //     total += angka[i];
  //   }

  //   return total;
  // }

  const penjumlahan = (...angka) => {
    return angka.reduce((total, item) => total + item, 0);
  };

  console.log(penjumlahan(...jumlahAngka));
};

export const spreadSisa = () => {
  const jumlah = [1, 2, 3, 4, 5];
  const [pertama, kedua, ...sianya] = jumlah;

  console.log(pertama);
  console.log(kedua);
  console.log(sianya);
};

export const spreadObejctSisa = () => {
  const user = {
    id: 1,
    nama: "Felix",
    email: "felix@mail.com",
    password: "12345",
  };

  const state = {
    nama: "Felix",
    umur: 22,
    kota: "Purwokerto",
  };

  const { id, ...data } = user;

  const umurNow = { ...state };
  const updateUmur = { ...state, umur: 23 };

  console.log("id :", id);
  console.log("data :", data);
  console.log("sebelum :", umurNow);
  console.log("setelah :", updateUmur);
};

export const deletePassword = () => {
  const user = {
    nama: "Felix",
    email: "felix@mail.com",
    password: "12345",
    hobi: ["Game", "Nonton", "Membaca"],
  };

  const { password, ...users } = user;

  console.log("ambil password :", password);
  console.log("update data :", users);

  const { password: _, ...userData } = user;

  console.log("tanpa password :", userData);

  const hobies = [...user.hobi, "Bersepeda"];
  const [hobi1, ...hobies2] = hobies;

  console.log(hobies);
  console.log(hobi1);
  console.log(hobies2);
};

export const cloneArrayObject = () => {
  const users = [
    {
      id: 1,
      nama: "Felix",
      email: "felix@mail.com",
      password: "12345",
    },
    {
      id: 2,
      nama: "Agus",
      email: "agus@mail.com",
      password: "09876",
    },
  ];

  // const rubahNama = users.map((user, index) => {
  //   if (index === 0) {
  //     return { ...user, nama: "Wahyu", email: "wahyu@gmail.com" };
  //   }

  //   return user;
  // });

  const rubahNama = users.map((user) => (user.id === 1 ? { ...user, nama: "Wahyu", email: "wahyu@gmail.com" } : user));

  console.log("data awal :", users);
  console.log("data baru :", rubahNama);
};
