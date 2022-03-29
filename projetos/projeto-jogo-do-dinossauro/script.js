(function () {

    const dino = document.querySelector('.dino');
    const background = document.querySelector('.bg');
    var jumping = false;
    var start = false;
    var position = 65;

    window.addEventListener('keypress', jump);
    

    function jump(e) {
        if (e.keyCode == 32) {
            if (!jumping) {
                upAndDown();
                jumping = true;
            }
        }
    }

    function upAndDown() {
       
         if (start == false) {
             createCactus();
             start = true;
         }
        let upInterval = setInterval(() => {
            if (position > 200) {
                clearInterval(upInterval);
                let downInterval = setInterval(() => {
                    if (position <= 70) {
                        clearInterval(downInterval);
                        jumping = false;
                    }
                    position -= 10;
                    dino.style.bottom = `${position}px`
                }, 20)

            } else {
                position += 10;

                dino.style.bottom = `${position}px`
            }
        }, 20);
    }

    function createCactus() {
       
        let cactusPosition = 1000;
        let randomTime = parseInt(Math.random() * 5500);
        const cactus = document.createElement('div');

        cactus.classList.add('cactus');
        cactus.style.left = `${cactusPosition}px`
        background.appendChild(cactus);

        let leftInterval = setInterval(() => {
            if (cactusPosition == -60) {
                clearInterval(leftInterval);
                background.removeChild(cactus);
            }  if (cactusPosition > 0 && cactusPosition < 100 && position <= 70) {
                clearInterval(leftInterval);
                document.body.innerHTML = `<h1 class="game-over">Game-over</h1>`
            } else {
                cactusPosition -= 10;
                cactus.style.left = `${cactusPosition}px`
            }
        }, 20)

        setTimeout(createCactus, randomTime);
    }
})()

//32 e 38