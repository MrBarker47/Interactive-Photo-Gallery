baguetteBox.run('.wrapper');

let searchBox = document.querySelector('#search');
let image = document.querySelectorAll('.container .wrapper');


searchBox.oninput = () => {
    image.forEach(hide => hide.style.display = 'none');
    let value = search.value;
    image.forEach(filter => {
        let caption = filter.getAttribute('data-caption');
    });
};




 