export const domHtml = () => {
  const sectionContent = document.getElementById("content");
  const titleH3 = document.querySelector(".title");
  const subTitle = document.querySelector(".subtitle");
  const formInput = document.getElementById("formInput");
  // const btnSubmit = document.getElementById("submitBtn");
  const form = document.getElementById("form");

  const title = "Belajar React TypeScript";
  const subTitleContent = "Berikut materi dasar yang penting untuk dikuasa sebelum belajar react + typescript";
  let listMateri = [
    { id: 1, text: "Belajar JavaScript Dasar", selesai: false },
    { id: 2, text: "Belajar React", selesai: false },
  ];

  titleH3.innerHTML = title;
  subTitle.innerHTML = subTitleContent;

  const render = (data = listMateri) => {
    sectionContent.innerHTML = data
      .map((materi) => {
        return `<li>${materi.text} - ${materi.selesai ? "Selesai" : "Belum"}</li>`;
      })
      .join("");
  };

  const addList = (event) => {
    event.preventDefault();
    const data = formInput.value.trim();

    if (!data) return;

    const result = [...listMateri, { id: Date.now(), text: data, selesai: false }];

    listMateri = result;
    formInput.value = "";
    render();
  };

  form?.addEventListener("submit", addList);

  const selesaikan = (id) => {
    listMateri = listMateri.map((todo) => (todo.id === id ? { ...todo, selesai: true } : todo));
    render();
  };

  const filterSelesai = () => {
    const sudahSelesai = listMateri.filter((todo) => todo.selesai);
    render(sudahSelesai);
  };

  const filterBelum = () => {
    const belumSelesai = listMateri.filter((todo) => !todo.selesai);
    render(belumSelesai);
  };

  render();

  return { render, addList, selesaikan, filterSelesai, filterBelum };
};
