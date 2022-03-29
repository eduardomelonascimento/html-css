
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const $btn = document.querySelector('#change-cat');
const $catImg = document.querySelector('#cat');

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;
    } catch (e) {
        console.log(e.message);
    }
}

const loadImg = async() => {
    $catImg.src = await getCats();
}

const intervalo = setInterval(loadImg, 10000)

$btn.addEventListener('click', loadImg);

loadImg();