const main = () => {
   const menuButton = document.querySelector(".menu-button");
   const closeMenuButton = document.querySelector(".cross-button");
   const mobileNav = document.querySelector(".mobile-nav");
   menuButton.addEventListener("click", () => {
     mobileNav.style.display = "flex";
    });
    closeMenuButton.addEventListener("click", () => {
        mobileNav.style.display = "none";
       });
};

main();