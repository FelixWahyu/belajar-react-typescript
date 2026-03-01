const createArrayMethod = () => {
  const angka = [2, 4, 6, 8];

  const hasil = angka.map((num) => num * num);

  console.log(hasil);

  const users = [
    {
      id: 1,
      nama: "Felix",
    },
    {
      id: 2,
      nama: "Agus",
    },
    {
      id: 3,
      nama: "Mukti",
    },
  ];

  const result = users.map((user) => user.nama);

  console.log(result);

  const Number = [5, 7, 9, 12, 15];

  const filtered = Number.filter((num) => num > 10);

  console.log(filtered);

  const usersData = [
    { name: "Felix", age: 21 },
    { name: "Budi", age: 16 },
    { name: "Siti", age: 25 },
  ];

  const filteredUmur = usersData.filter((user) => user.age > 18);

  console.log(filteredUmur);

  const numbers = [10, 20, 30];

  const total = numbers.reduce((acc, num) => acc + num, 0);

  console.log(total);

  const products = [
    {
      id: 1,
      nama: "Kopi",
      price: 2000,
    },
    {
      id: 2,
      nama: "Susu",
      price: 6000,
    },
    {
      id: 3,
      nama: "Minyak",
      price: 14000,
    },
  ];

  const totalHarga = products.reduce((total, product) => total + product.price, 0);

  console.log(totalHarga);

  const orders = [
    { id: 1, status: "completed", total: 100 },
    { id: 2, status: "pending", total: 50 },
    { id: 3, status: "completed", total: 200 },
  ];

  const totalCompleted = orders.filter((stat) => stat.status === "completed").reduce((total, order) => total + order.total, 0);

  console.log(totalCompleted);

  const dataUsersOrder = [
    {
      name: "Felix",
      purchases: [100, 200, 300],
    },
    {
      name: "Budi",
      purchases: [50, 50],
    },
  ];

  const totalPendapatan = dataUsersOrder.reduce((total, data) => {
    const sumPrice = data.purchases.reduce((sum, user) => sum + user, 0);
    return total + sumPrice;
  }, 0);

  console.log(totalPendapatan);

  const cart = [
    { id: 1, name: "Laptop", price: 10000, qty: 1 },
    { id: 2, name: "Mouse", price: 500, qty: 2 },
    { id: 3, name: "Keyboard", price: 1500, qty: 1 },
  ];

  const totalBelanja = cart.map((item) => item.price * item.qty).reduce((total, item) => total + item, 0);
  const sumOrder = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  console.log(totalBelanja);
  console.log(sumOrder);

  const getProduct = cart.filter((item) => item.price > 1000);
  console.log(getProduct);

  const totalPrice = cart.map((item) => {
    const subtotal = item.price * item.qty;

    return { ...item, subtotal };
  });

  console.log(totalPrice);

  const groupProduct = cart.reduce(
    (acc, item) => {
      if (item.price > 2000) {
        acc.mahal.push(item);
      } else {
        acc.murah.push(item);
      }

      return acc;
    },
    { mahal: [], murah: [] },
  );

  console.log(groupProduct);

  const productQty = cart.reduce((max, item) => {
    return item.qty > max.qty ? item : max;
  }, cart[0]);

  console.log(productQty);

  const pesanan = [
    { id: 1, items: ["Laptop", "Mouse"] },
    { id: 2, items: ["Keyboard"] },
  ];

  const semuaItems = pesanan.reduce((acc, order) => {
    return [...acc, ...order.items];
  }, []);

  console.log(semuaItems);

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const sumQty = cart.map((item) => item.qty).reduce((total, item) => total + item, 0);
  console.log(totalQty);
  console.log(sumQty);

  const items = ["Laptop", "Mouse", "Laptop", "Keyboard", "Monitor", "Mouse"];

  const deleteDuplicate = items.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }

    return acc;
  }, []);

  console.log(deleteDuplicate);
};

export default createArrayMethod;
