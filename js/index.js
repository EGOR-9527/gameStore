const contentMenuLi = document.querySelectorAll(".content-menu > li");

let isVisible = false;

document.getElementsByClassName('teni')[0].addEventListener('click', () => {
    if (!isVisible) {
        contentMenuLi.forEach(li => {
            li.style.opacity = '1';
            li.style.transition = 'opacity 0.5s';
        });
        isVisible = true;
    } else {
        contentMenuLi.forEach(li => {
            li.style.opacity = '0';
        });
        isVisible = false;
    }
});
