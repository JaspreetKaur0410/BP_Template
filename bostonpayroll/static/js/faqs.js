document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".item");

    accordionItems.forEach((item) => {
        item.addEventListener("click", function () {
            // Remove 'open' class from all items except the clicked one
            accordionItems.forEach((el) => {
                if (el !== this) {
                    el.classList.remove("open");
                }
            });

            // Toggle 'open' class on the clicked item
            this.classList.toggle("open");
        });
    });
});

