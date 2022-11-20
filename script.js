new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
});
//Активные табы
const hobbiLinks = document.querySelectorAll('.hobbi-link');
const hobbiBlock = document.querySelector('#tab-1');
const LinkCl = (item) => {
    item.addEventListener('click', () => {
        hobbiBlock.classList.remove('tab-standart')
        hobbiLinks.forEach((item) => {
            item.classList.remove('tab-active')
        })
        item.classList.add('tab-active')
    })
}
hobbiLinks.forEach(LinkCl)

const burger = document.querySelector('.burger-menu');
const burMenu = document.querySelector('.header__menu');
burger.addEventListener('click', () => {
    burMenu.classList.toggle('burger-act');
})