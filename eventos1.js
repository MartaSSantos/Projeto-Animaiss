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