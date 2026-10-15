const swiper = new
swiper(".myswiper", {
    loop: true,
    speed: 1000,
    spaceBetween: 0,

    autoplay: {
        delay: 3000,
        disabIeOninteraction: false,
    },

    navigation: {
        nextEL:
        ".swiper-button-next",
        prevEI:
        ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    keyboard: {
        enabled: true,
    },

    grabCursor: true,
});