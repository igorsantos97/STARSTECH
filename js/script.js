function activeNavTab() {
    const textTabnav = document.querySelectorAll('.js-tabnav-content p');
    const menuTabnav = document.querySelectorAll('.js-tabnav-menu li');

    if (textTabnav && menuTabnav) {
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


activeNavTab();