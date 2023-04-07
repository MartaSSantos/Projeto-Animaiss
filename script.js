// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
const imgTop = img.offsetTop;

console.log(imgTop)
// Retorne a soma da largura de todas as imagens
function somaDefotos() {
    const fotos = document.querySelectorAll('img')
    let soma = 0;
    fotos.forEach((fotos) => {
        soma += fotos.offsetWidth;
    })
    console.log(soma)
}
window.onload = function () {
    somaDefotos();
}
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a')
links.forEach((link) => {
    const liskesWidth = link.offsetWidth;
    const linksHeigth = link.offsetHeight;
    if (liskesWidth >= 48 && linksHeigth >= 48) {
        console.log(link, 'Possui boa acessibilidade')
    } else {
        console.log(link, 'Não possui boa acessibilidade')
    }
});
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall){
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile')
}

