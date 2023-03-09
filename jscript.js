// const search = document.querySelector(".search-box input");
// const images = document.querySelectorAll(".img-box");
// search.addEventListener("keyup", (e) => {
//   if (e.key == "Enter") {
//     let searchValue = search.value,
//       value = searchValue.toLowerCase();
//     images.forEach((image) => {
//       if (value === image.dataset.name) {
//         return (image.style.display = "block");
//       }
//       image.style.display = "none";
//     });
//     console.log(value);
//   }
// });

const search = document.querySelector(".search-box input"),
  images = document.querySelectorAll(".img-box");

search.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    let searcValue = search.value,
      value = searcValue.toLowerCase();
    images.forEach((image) => {
      if (value === image.dataset.name) {
        return (image.style.display = "block");
      }
      image.style.display = "none";
    });
  }
});

search.addEventListener("keyup", () => {
  if (search.value != "") return;

  images.forEach((image) => {
    image.style.display = "block";
  });
});
