const scrollUpButton = document.querySelector(".scroll_up");

window.addEventListener("scroll", (e) => {
  const fromTop = window.scrollY;

  if (fromTop >= 600) return (scrollUpButton.style.display = "flex");

  if (fromTop <= 600) return (scrollUpButton.style.display = "none");
});
