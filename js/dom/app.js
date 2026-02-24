const domHtml = () => {
  const sectionContent = document.getElementById("content");
  const titleH3 = document.querySelector(".title");
  const subTitle = document.querySelector(".subtitle");
  const formInput = document.getElementById("formInput");
  const btnSubmit = document.getElementById("submitBtn");
  const form = document.getElementById("form");

  const title = "Belajar React TypeScript";
  const subTitleContent = "Berikut materi dasar yang penting untuk dikuasa sebelum belajar react + typescript";
  let listMateri = ["Belajar JavaScript Dasar", "Belajar React", "Belajar Typescript"];

  titleH3.innerHTML = title;
  subTitle.innerHTML = subTitleContent;

  function contentBelajar() {
    try {
      const respon = listMateri.map((materi) => {
        return `<li>${materi}</li>`;
      });
      return respon.join("");
    } catch (error) {
      console.log(error);
    }
  }

  function render() {
    const materiBelajar = contentBelajar();
    sectionContent.innerHTML = materiBelajar;
  }

  render();

  const addList = (event) => {
    event.preventDefault();
    const data = formInput.value;

    if (!data) return;

    const result = [...listMateri, data];

    listMateri = result;
    formInput.value = "";
    render();
  };

  form.addEventListener("submit", addList);
};

export default domHtml;
