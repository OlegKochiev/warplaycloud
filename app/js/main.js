const headerLinks = document.querySelectorAll('.header__item');
for (let link of headerLinks) {
  link.addEventListener('click', function () {
    document.querySelector('.header__item--active').classList.remove('header__item--active');
    this.classList.toggle('header__item--active');
  })
}
$('.slider__list').slick({
  autoplay: true,
  infinite: true,
  fade: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: 'linear',
  arrows: false
});