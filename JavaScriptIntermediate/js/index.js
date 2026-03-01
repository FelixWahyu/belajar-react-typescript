import { methodUsers } from "./importExport/usersService.js";

const { getAllUsers, getUserId } = methodUsers();

const listContent = document.getElementById("content-users");
const userDetail = document.getElementById("user-detail");

const getUsersData = async () => {
  listContent.innerHTML = "<li>Load data...</li>";

  try {
    const data = await getAllUsers();

    if (!data || data.length === 0) {
      listContent.innerHTML = "<li>Tidak ada data users</li>";
      return;
    }

    const result = data
      .map((user) => {
        return `<li>
        ${user.name}
        <a href="/users/userDetail.html?id=${user.id}" class="btn-detail">
           <button>Detail</button>
        </a>
        </li>`;
      })
      .join("");

    listContent.innerHTML = result;
  } catch (error) {
    listContent.innerHTML = "<li>Gagal memuat data</li>";
    console.log(error);
  }
};

const getUserWithId = async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    userDetail.innerHTML = "<h3>Id tidak ditemukan</h3>";
    return;
  }

  try {
    const data = await getUserId(id);
    const result = `
    <h3>${data.name}</h3>
    <p>Email : ${data.email}</p>
    <p>Address : ${data.address.street},${data.address.city}</p>
    `;

    userDetail.innerHTML = result;
  } catch (error) {
    console.log(error);
  }
};

if (listContent) {
  getUsersData();
}

if (userDetail) {
  getUserWithId();
}
