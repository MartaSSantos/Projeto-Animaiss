
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

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu [href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}

initScrollSuave();

// Animação do scroll

function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    if (sections.length) {
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if (isSectionVisible < 0) {
                    section.classList.add('ativo');
                } else {
                    section.classList.remove('ativo');
                }
            })
        }

        animaScroll();
        window.addEventListener('scroll', animaScroll);
    }
}
initAnimacaoScroll();