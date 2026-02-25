import { methodUsers } from "./importExport/usersService.js";

const { getAllUsers } = methodUsers();

const getUsersData = async () => {
  const listContent = document.getElementById("content-users");
  listContent.innerHTML = "<li>Load data...</li>";

  try {
    const data = await getAllUsers();

    if (!data || data.lenght === 0) {
      listContent.innerHTML = "<li>Tidak ada data users</li>";
      return;
    }

    const result = data
      .map((user) => {
        return `<li>
        ${user.name}
        </li>`;
      })
      .join("");

    listContent.innerHTML = result;
  } catch (error) {
    listContent.innerHTML = "<li>Gagal memuat data</li>";
    console.log(error);
  }
};

getUsersData();
