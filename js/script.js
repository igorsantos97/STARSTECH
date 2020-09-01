function activeNavTab() {
    const textTabnav = document.querySelectorAll('.js-tabnav-content p');
    const menuTabnav = document.querySelectorAll('.js-tabnav-menu li');

    if (textTabnav.length && menuTabnav.length) {
        textTabnav[0].classList.add('active');
        menuTabnav[0].classList.add('active');

        function activeTabnav(index) {
            textTabnav.forEach((text, index) => {
                text.classList.remove('active');

                menuTabnav[index].classList.remove('active');
            });

            textTabnav[index].classList.add('active');
            menuTabnav[index].classList.add('active');
        }

        menuTabnav.forEach((item, index) => {
            item.addEventListener('click', function () {
                activeTabnav(index);
            });
        });
    }
}

function accordionList() {
    const accordionList = document.querySelectorAll('.js-accordion dt');

    if (accordionList.length) {
        const active = 'active';

        accordionList[0].classList.add(active);
        accordionList[0].nextElementSibling.classList.add(active);

        function toggleAccordionList() {
            this.classList.toggle(active);
            this.nextElementSibling.classList.toggle(active);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', toggleAccordionList);
        });
    }
}

function SmoothScroll() {
    const links = document.querySelectorAll('.js-link-smooth');

    function activeSmoothScroll(e) {
        e.preventDefault();

        const href = e.target.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });


    }

    links.forEach((link) => {
        link.addEventListener('click', activeSmoothScroll);
    });
}


function animaScroll() {
    const sections = document.querySelectorAll('.js-section-scroll');
    const windowHalf = window.innerHeight * 0.7;

    if (sections.length) {
        animaSection();

        function animaSection() {

            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionVisible = (sectionTop - windowHalf) < 0;

                if (sectionVisible) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        }
        window.addEventListener('scroll', animaSection);
    }
}


SmoothScroll();
activeNavTab();
accordionList();
animaScroll();