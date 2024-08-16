const h2Elements = document.querySelectorAll("productDescription");
const buttonElements = document.querySelectorAll("buyButton");
const cardElements = document.querySelectorAll("card");

buttonElements.forEach((button) => {
    button.addEventListener("mouseover", () => {
    cardElements.forEach((card) => {
    card.addEventListener("mouseover", () => {
        h2Elements.forEach((h2) => h2.classList.add("hidden"));
        buttonElements.forEach((button) => button.classList.remove("hidden"));
    });
    card.addEventListener("mouseout", () => {
        buttonElements.forEach((button) => button.classList.add("hidden"));
        h2Elements.forEach((h2) => h2.classList.remove("hidden"));
    });
    });
});
});
