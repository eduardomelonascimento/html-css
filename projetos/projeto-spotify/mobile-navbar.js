
    const MENU = document.querySelector('.header-nav');
    const BTN_TOGGLE = document.querySelector('#toggle');
    const LINES = BTN_TOGGLE.querySelectorAll('.lines');
    var openned = false;
    
    BTN_TOGGLE.addEventListener('click', init);

    function init() {
        if (!openned) {
            open();
        } else {
            close();
        }
     }

    function open() {
        MENU.style.right = '0';
        MENU.style.opacity = '1';
        openned = true
        changeLines();
    }

    function close() {
        MENU.style.right = '-100%';
        MENU.style.opacity = '0';
        openned = false;
        changeLines();
    }

    function changeLines() {
        for (let i = 0; LINES[i]; i++) {
            LINES[i].classList.toggle(`line${i+1}`);
        }
    }