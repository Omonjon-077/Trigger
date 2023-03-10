/*=============== LOADER ===============*/
document.addEventListener('DOMContentLoaded', function (eventObject) {
    $('.load').fadeIn();
})
window.addEventListener("load", function (eventObject) {
    $('.load').fadeOut("slow");
});
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER LOGOS ===============*/
if ($(".logosSwiper").length) {
    var swiperPopular = new Swiper(".logosSwiper", {
        autoplay: {
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            delay: 3200,
        },
        speed: 2500,
        slidesPerView: 4,
        grabCursor: true,
        loop: true,

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 5
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 5
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 4,
                spaceBetween: 15
            }
        },
    });
}
/*=============== SWIPER PROJECTS ===============*/
if ($(".project__container").length) {
    var swiperPopular = new Swiper(".project__container", {
        autoplay: {
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            delay: 3400,
        },
        speed: 700,
        slidesPerView: 3,
        grabCursor: true,
        loop: true,

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 5
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 5
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 3,
                spaceBetween: 15
            }
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

/*=============== SWIPER LEADERSHIP ===============*/
if ($(".leadership__container").length) {
    var swiperPopular = new Swiper(".leadership__container", {
        autoplay: {
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            delay: 3400,
        },
        slidesPerView: 3,
        grabCursor: true,
        loop: true,

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 5
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 5
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 3,
                spaceBetween: 15
            }
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

/*=============== TESTIMONIALS | SWIPER ===============*/
const swiper = new Swiper(".testimonialsSwiper", {
    autoplay: {
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        delay: 3600,
    },
    // Optional parameters
    direction: "horizontal",
    loop: true,
    grabCursor: true,
    autoHeight: false,
    centeredSlides: true,
    slidesPerView: 1,
    // Responsive breakpoints
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    },

    // If we need pagination
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true
    //   },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }

    // And if we need scrollbar
    /*scrollbar: {
    el: '.swiper-scrollbar',
  },*/
});

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.value__accordion-item')

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.value__accordion-header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.value__accordion-content')

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== ENTER INPUT ===============*/
var input = document.getElementById("comment");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("modal-feedback-btn").click();
    }
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal('.home__title, .popular__container, .subscribe__container')
sr.reveal('.home__description', { delay: 500 })
sr.reveal('.home__search', { delay: 600 })
sr.reveal('.home__value', { delay: 700 })
sr.reveal('.home__images', { delay: 800, origin: 'bottom' })
sr.reveal('.logos__container, .footer__item, .footer__social-link, .footer__privacy-item, .footer__copy', { interval: 150, origin: 'top' })
sr.reveal('.value__images, .contact__content', { origin: 'left' })
sr.reveal('.value__content, .contact__images', { origin: 'right' })