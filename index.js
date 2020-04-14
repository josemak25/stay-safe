const scrollUpButton = document.querySelector(".scroll_up");
const pageContainer = document.querySelector(".container");
const menu = document.querySelector(".menu");
const menuButtons = document.querySelector(".hamburger_menu");
const menuListItem = menu.children[0].children;

const pageHeight = pageContainer.scrollHeight - 1000;

// HANDLE MENU EVENT
const [openMobileMenu, closeMobileMenu] = menuButtons.children;

openMobileMenu.addEventListener("click", () => {
  menu.style.display = "flex";
  openMobileMenu.style.display = "none";
  closeMobileMenu.style.display = "flex";
});

const closeMobileMethod = () => {
  menu.style.display = "none";
  closeMobileMenu.style.display = "none";
  openMobileMenu.style.display = "flex";
};

closeMobileMenu.addEventListener("click", closeMobileMethod);

if (pageContainer.clientWidth <= 1024) {
  Array.from(menuListItem).forEach((item) => {
    item.addEventListener("click", closeMobileMethod);
  });
}

// HANDLE SCROLL EVENT
window.addEventListener("scroll", () => {
  const fromTop = window.scrollY;

  if (fromTop >= 600) return (scrollUpButton.style.display = "flex");

  if (fromTop <= 600) return (scrollUpButton.style.display = "none");
});
