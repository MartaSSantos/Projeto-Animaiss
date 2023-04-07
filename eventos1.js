
// Protegendo o codigo já feito!
function initTabNav() {
    const tabmenu = document.querySelectorAll('.js-tabmenu li');
    const contet = document.querySelectorAll('.js-contet section');

    if (tabmenu.length && contet.length) {
        contet[0].classList.add('ativo')

        function activeTab(index) {
            contet.forEach((section) => {
                section.classList.remove('ativo');
            })
            contet[index].classList.add('ativo');
        }

        tabmenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}

initTabNav();

function initAccordio() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClas = 'ativo';
    if (accordionList.length) {
        accordionList[0].classList.add(activeClas)
        accordionList[0].nextElementSibling.classList.add(activeClas);
        function activeAcordion() {
            this.classList.toggle(activeClas);
            this.nextElementSibling.classList.toggle(activeClas);
        }
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAcordion);
        });
    }
}
initAccordio();