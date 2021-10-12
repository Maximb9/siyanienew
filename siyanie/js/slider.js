let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    effect: "fade",
    autoplay: {
        delay: 50000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});
