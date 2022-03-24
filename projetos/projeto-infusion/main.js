(function () {

    var $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js')

    var $menuToggle = document.querySelector('.header__menuToggle');
    var $menu = document.querySelector('.header__nav');
    var $lines = document.querySelectorAll('.line')

    $menuToggle.classList.remove('toggle-no-js')
    $menuToggle.classList.add('toggle-js')

    $menuToggle.addEventListener('click', toggleMenu);


    function toggleMenu() {

        $menu.classList.toggle('header__nav-opn');
        toggleButton()
    }

    function toggleButton() { 
        for (var i = 0; $lines[i]; i++) {
            $lines[i].classList.toggle(`line${i+1}-opn`)
            console.log(i)
        }
    }
})()