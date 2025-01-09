let count = 0;
const counterElement = document.getElementById('counter');
const kusbass = document.getElementById('image');

//sound
const snd_click = new Audio('res/sound/kusbass_res_0001.ogg')

kusbass.addEventListener('click', function(event) {
    count += 1;
    counterElement.textContent = ` ${count}`;
    kusbass.style.width = '360px'
    snd_click.play()
    // kusbass.src = 'https://kovich33.github.io/HTML5game_test/kusbass/res/M0003.png'
    setTimeout(setspriteback, 50)

    if (count >= 3) {
        kusbass.src = 'res/img/kusbass02.png'
    }
    if (count >= 5) {
        kusbass.src = 'res/img/kusbass03.png'
    }
    if (count >= 8) {
        kusbass.src = 'res/img/kusbass04.png'
    }
});

function setspriteback() {
    kusbass.style.width = '512px'
}

