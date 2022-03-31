class MobileNavBar {
    constructor(btn, lines, navList, navLinks) {
        this.btn = document.querySelector(btn);
        this.lines = document.querySelectorAll(lines)
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = 'active';
        this.body = document.querySelector('body');
        this.overlay = document.querySelector('.overlay')
        this.toggleMenu = this.toggleMenu.bind(this);
    }


    init() {
        if (this.btn) {
            this.addClickEvent();
        }
    }

    addClickEvent() {
        this.btn.addEventListener('click', this.toggleMenu)
        this.overlay.addEventListener('click', this.toggleMenu)
    }

    toggleMenu() {
        this.navList.classList.toggle('active')
        this.body.classList.toggle('supress-scroll')
        this.animateLinks();
        this.animateLines();
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkAnimation .5s ease forwards ${index/40 + .1}s`
            }
        });
    }

    animateLines(){
        this.lines.forEach((lines, index) => {
            lines.classList.toggle(`line${index+1}`);
        })
    }

}

const Mobile_Menu = new MobileNavBar(
    "#toggle",
    ".lines",
    '.header-nav',
    '.header-nav li'
)

Mobile_Menu.init();