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
  console.log(gabung);
  console.log(rubahUmur);
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
