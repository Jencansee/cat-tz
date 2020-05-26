window.onscroll = () => { headerSticky() };
const header = document.getElementById("page-header");
const sticky = header.offsetTop;

function headerSticky() {
    window.pageYOffset > sticky ? header.classList.add("page-header--sticky") : header.classList.remove("page-header--sticky");
}

/*                              */
/*      for select-visual       */
/*                              */

let select = function () {
    let selectHeader = document.querySelectorAll('.select-visual__header');
    let selectItem = document.querySelectorAll('.select-visial__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle);
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
        this.parentElement.classList.toggle('show-sorting');
    }

    function selectChoose(){
        let text = this.innerText,
            select =  this.closest('.section-rooms__select-visual'),   
            currentText = select.querySelector('.select-visual__current');

        currentText.innerText = text;
        select.classList.remove('show-sorting')
    }
}

select();