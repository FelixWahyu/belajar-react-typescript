import baseApiUrl from "../api/baseApi.js";

export const addToCart = (cart, order) => {
  const isExist = cart.find((item) => item.id === order.id);

  if (isExist) {
    return cart.map((item) => (item.id === order.id ? { ...item, qty: item.qty + order.qty } : item));
  }

  const result = [...cart, order];
  return result;
};

export const removeFromCart = (cart, productId) => {
  const isExist = cart.find((item) => item.id === productId);

  if (!isExist) return cart;

  if (isExist.qty > 1) {
    return cart.map((item) => (item.id === productId ? { ...item, qty: item.qty - 1 } : item));
  }

  const hapus = cart.filter((item) => item.id !== productId);

  return hapus;
};

export const getTotalCart = (cart) => {
  const total = cart.reduce((total, item) => total + item.price * item.qty, 0);

  return total;
};

export const getUsers = async () => {
  try {
    const responseUsers = await fetch(`${baseApiUrl}/users`);

    if (!responseUsers.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await responseUsers.json();

    return users;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUserId = async (id) => {
  try {
    const responseUser = await fetch(`${baseApiUrl}/users/${id}`);

    if (!responseUser.ok) {
      throw new Error("User not found");
    }

    const user = await responseUser.json();

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
