function activeNavTab() {
    const textTabnav = document.querySelectorAll('.js-tabnav-content p');
    const menuTabnav = document.querySelectorAll('.js-tabnav-menu li');

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


activeNavTab();