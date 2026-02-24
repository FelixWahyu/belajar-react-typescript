import { spreadRest, spreadRemix, spreadObject, spreadJumlah, spreadSisa, spreadObejctSisa, deletePassword, cloneArrayObject } from "./spread/spread-rest.js";
import { spreadGabungan, spreadGabungObject, spreadUpdateAtribut, spreadHapusProperty, spreadTambahProperty, spreadCloneProperty, spreadJumlahAngka, spreadAmbilSisaObject, addToCartTest } from "./spread/spreadTest.js";
import destructurObjectDasar from "./destructuring/latDestructuring.js";
import domHtml from "./dom/app.js";
import newPromise from "./promiseAsyncAwait/promise.js";
import createArrayMethod from "./arrayMethod/arrayMethod.js";
import { addToCart, getTotalCart, getUserId, getUsers, removeFromCart } from "./importExport/importExport.js";

// spreadRest();
// spreadRemix();
// spreadObject();
// spreadJumlah();
// spreadSisa();
// spreadObejctSisa();
// deletePassword();
// cloneArrayObject();

// spreadGabungan();
// spreadGabungObject();
// spreadUpdateAtribut();
// spreadHapusProperty();
// spreadTambahProperty();
// spreadCloneProperty();
// spreadJumlahAngka();
// spreadAmbilSisaObject();
// addToCartTest();

// destructurObjectDasar();

domHtml();
// newPromise();
// createArrayMethod();
let cart = [];

cart = addToCart(cart, {
  id: 1,
  nama: "Kopi",
  price: 2000,
  qty: 1,
});

cart = addToCart(cart, {
  id: 2,
  nama: "Minyak",
  price: 14000,
  qty: 1,
});

cart = addToCart(cart, {
  id: 2,
  nama: "Minyak",
  price: 14000,
  qty: 1,
});

cart = addToCart(cart, {
  id: 1,
  nama: "Kopi",
  price: 2000,
  qty: 3,
});

cart = removeFromCart(cart);

console.log("Pesanan Anda :", cart);
console.log("Total :", getTotalCart(cart));

const data = await getUsers();
console.log(data);

const userId = await getUserId(2);
console.log(userId);
