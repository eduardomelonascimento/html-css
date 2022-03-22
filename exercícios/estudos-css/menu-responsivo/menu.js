(function menuToggle() {

    var $toggle = document.querySelector('#button');
    var $menu = document.querySelector('.navbar-items')
    var $lines = document.querySelectorAll('.line');

    $toggle.addEventListener('click', function () {
        for (var i = 0; $lines[i]; i++) {
            $lines[i].classList.toggle(`line${i+1}-close`)
        }
      
        $menu.classList.toggle('navbar-items-open');
    })

})()