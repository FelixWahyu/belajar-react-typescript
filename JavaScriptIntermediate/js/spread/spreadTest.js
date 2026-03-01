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

export const spreadHapusProperty = () => {
  const data = {
    nama: "Felix",
    email: "felix@mail.com",
    password: "12345",
  };

  const { password, ...sisanya } = data;

  console.log(sisanya);
};

export const spreadTambahProperty = () => {
  const arrayUsers = ["Felix", "Agus"];

  const newArrayUsers = [...arrayUsers, "Mukti"];

  console.log(newArrayUsers);
};

export const spreadCloneProperty = () => {
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

  const updateUser = users.map((user) => (user.id === 1 ? { ...user, nama: "Wahyu", email: "wahyu@gmail.com", password: "12345678" } : user));

  console.log(updateUser);
};

export const spreadJumlahAngka = () => {
  const angka = [1, 2, 3, 4, 5, 6];

  let total = 0;
  function penjumlahanAngka(...angka) {
    for (let i = 0; i < angka.length; i++) {
      total += angka[i];
    }

    return total;
  }

  function penguranganAngka(total) {
    for (let i = 3; i < angka.length; i++) {
      total -= angka[i];
    }

    return total;
  }

  console.log(penjumlahanAngka(...angka));
  console.log(penguranganAngka(total));
};

export const spreadAmbilSisaObject = () => {
  const produk = {
    id: 1,
    nama: "Kopi",
    harga: 10000,
    stok: 50,
  };

  const { id, ...detailProduk } = produk;

  console.log(detailProduk);
};

export const addToCartTest = () => {
  let carts = [
    {
      id: 1,
      nama: "Kopi ABC",
      price: 2500,
      qty: 1,
    },
    {
      id: 2,
      nama: "Kopi Gajah",
      price: 1500,
      qty: 1,
    },
  ];

  const produk = {
    id: 2,
    nama: "Kopi Gajah",
    price: 1500,
    qty: 2,
  };

  function addToCarts(cart, product) {
    const isExits = cart.find((item) => item.id === product.id);

    if (isExits) {
      return cart.map((item) => (item.id === product.id ? { ...item, qty: item.qty + product.qty } : item));
    }

    return [...cart, { ...product }];
  }

  carts = addToCarts(carts, produk);

  console.log(carts);

  function removeFromCart(cart, productId) {
    const isExits = cart.find((item) => item.id === productId);

    if (!isExits) {
      return cart;
    }

    if (isExits.qty > 1) {
      return cart.map((item) => (item.id === productId ? { ...item, qty: item.qty - 1 } : item));
    }

    return cart.filter((item) => item.id !== productId);
  }

  carts = removeFromCart(carts, 2);

  console.log(carts);
};
