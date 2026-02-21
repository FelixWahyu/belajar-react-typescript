export const spreadGabungan = () => {
  const angka1 = [1, 2, 3];
  const angka2 = [4, 5, 6];

  const gabungAngka = [...angka1, ...angka2];

  console.log(gabungAngka);
};

export const spreadGabungObject = () => {
  const user = {
    nama: "felix",
    email: "felix@gmail.com",
  };

  const detail = {
    umur: 22,
    city: "Purwokerto",
  };

  const users = { ...user, ...detail };

  console.log(users);
};

export const spreadUpdateAtribut = () => {
  const users = {
    nama: "Felix",
    umur: 22,
  };

  const newState = { ...users, umur: 23 };

  console.log(users);
  console.log(newState);
};
