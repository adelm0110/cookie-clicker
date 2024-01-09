console.log('cookie');


let count = 0;

let button = document.querySelector('button')
button.addEventListener('click' , play)


console.log(count)
function play(e) {

    count++

    document.querySelector('#output').innerHTML = count
}

