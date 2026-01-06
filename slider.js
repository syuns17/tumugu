document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".slider").forEach(slider => {
      const images = slider.querySelectorAll("img");
      const prev = slider.querySelector(".slide-btn.prev");
      const next = slider.querySelector(".slide-btn.next");

      let index = 0;
      images[index].classList.add("active");

      prev.addEventListener("click", () => {
        images[index].classList.remove("active");
        index = (index - 1 + images.length) % images.length;
        images[index].classList.add("active");
      });

      next.addEventListener("click", () => {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
      });
    });

  });