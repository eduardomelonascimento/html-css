(function(){

    var $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js')

    var $menuToggle = document.querySelector('.header__menuToggle');
    $menuToggle.classList.remove('toggle-no-js')
    $menuToggle.classList.add('toggle-js')
    
})()