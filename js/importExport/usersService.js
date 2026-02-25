import baseApiUrl from "../api/baseApi.js";

export const methodUsers = () => {
  const getAllUsers = async () => {
    const responseUsers = await fetch(`${baseApiUrl}/users`);

    if (!responseUsers.ok) {
      throw new Error(`Failed to fetch users! status :${responseUsers.status}`);
    }
    const users = await responseUsers.json();

    if (!Array.isArray(users)) {
      throw new Error("Format data tidak valid!");
    }

    return users;
  };

  return { getAllUsers };
};
