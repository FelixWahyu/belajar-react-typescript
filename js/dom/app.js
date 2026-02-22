export const domHtml = () => {
  const sectionContent = document.getElementById("content");
  const titleH3 = document.querySelector(".title");
  const subTitle = document.querySelector(".subtitle");

  const title = "Belajar React TypeScript";
  const subTitleContent = "Berikut materi dasar yang penting untuk dikuasa sebelum belajar react + typescript";
  const listMateri = ["Belajar JavaScript Dasar", "Belajar React", "Belajar Typescript"];

  titleH3.innerHTML = title;
  subTitle.innerHTML = subTitleContent;

  function contentBelajar() {
    try {
      const respon = listMateri.map((materi, index) => {
        return `<li>${materi}</li>`;
      });
      return respon.join("");
    } catch (error) {
      console.log(error);
    }
  }

  sectionContent.innerHTML = contentBelajar();
};
