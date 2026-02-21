export const destructurObjectDasar = () => {
  const users = {
    id: 1,
    nama: "Felix",
    umur: 22,
    kota: "Purwokerto",
  };

  const { nama: userName, umur, kota } = users;
  const { pekerjaan = "Programmer" } = users;
  const data = { ...users, pekerjaan };

  console.log(userName);
  console.log(umur);
  console.log(kota);
  console.log(data);
  console.log(pekerjaan);

  const angka = [20, 30, 40];
  const [a, b] = angka;
  const [x, , z] = angka;

  console.log(a);
  console.log(b);
  console.log(x);
  console.log(z);

  const biodata = {
    nama: "felix",
    address: {
      city: "purwokerto",
      post: 53182,
    },
    pekerjaan: "Web Developer",
    password: "123456",
  };

  const {
    address: { city },
  } = biodata;

  console.log(city);

  const { password, ...user } = biodata;

  console.log(password);
  console.log(user);

  const tampilNama = ({ nama, address: { city } }) => {
    console.log(nama);
    console.log(city);
  };

  tampilNama(biodata);

  const angkaBaru = [1, 2, 3, 4, 5];
  const [pertama, , ...sisa] = angkaBaru;

  console.log(pertama);
  console.log(sisa);

  const updateUmur = { ...users, umur: 23 };

  console.log(updateUmur);

  const getInfoUser = ({ nama, kota }) => {
    return `Nama : ${nama} (${kota})`;
  };

  const getInfo = getInfoUser(users);

  console.log(getInfo);
};
