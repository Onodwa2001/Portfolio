let nav = document.getElementById('myNav');
let link = document.querySelectorAll('.link');
let carousel = document.getElementById('carousel');
let wrapper = document.getElementById('caroursel-wrapper');
let image = document.querySelector('.img');
let topics = document.getElementsByClassName('topic');
let paragraphs = document.getElementsByClassName('paragraph');
let headings = document.getElementsByClassName('heading-topic');
let technology = document.getElementsByClassName('technology');

window.onscroll = (e) => {
    if (window.scrollY >= 1) {
        nav.style.backgroundColor = 'rgb(10, 133, 166)';
        nav.style.boxShadow = '0 4px 4px 0 rgba(0, 0, 0, 0.2)';
        nav.style.color = 'white';
        nav.style.transition = '0.3s';

        link.forEach(element => {
            element.style.color = 'white';
        });
    } else {
        link.forEach(element => {
            element.style.color = 'black';
        });
        nav.style.color = '';
        nav.style.backgroundColor = '';
        nav.style.boxShadow = '';
    }
}


Array.from(topics).forEach((element, index, arr) => {
    element.addEventListener('click', (e) => {
        element.style.transform = 'rotateY(180deg)';
        paragraphs[index].style.visibility = 'visible';
        paragraphs[index].style.transform = 'rotateY(180deg)';
        headings[index].style.visibility = 'hidden';
    });
});

let value = document.getElementsByClassName('technology');

document.getElementById('show-skills').addEventListener('click', (e) => {
    // location.reload();
    location.href = 'index.html#skills';

    Array.from(technology).forEach((element, index, arr) => {
        element.style.display = 'block';
        // value.innerText = value.style.width;
    });
});

