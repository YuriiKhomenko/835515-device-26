'use strict'

var serviceBtns = document.querySelectorAll('.services__btn');
var serviceList = document.querySelector('.services__list');
var servicesInfoList = document.querySelectorAll('.services__info');
var orders = ['Доставка', 'Гарантия', 'Кредит']

serviceList.addEventListener('mousedown', function(e) {
  var index = orders.indexOf(e.target.innerHTML);
  for (var i = 0; i < serviceBtns.length; i++) {
    if (serviceBtns[i].classList.length > 1) {
      serviceBtns[i].classList.remove('services__btn--active');
    }
    servicesInfoList[i].style.display = 'none';
    if (i == index) {
      servicesInfoList[i].style.display = 'block';
    }
  }
  if (e.target.nodeName == 'BUTTON') {
    e.target.classList.add('services__btn--active');
  }
})

var sliderControlls = document.querySelectorAll('.slider-nav__btn');
var sliders = document.querySelectorAll('.slider__item');
sliderControlls.forEach(function (button, index) {
  button.addEventListener('click', function () {
    sliderControlls.forEach(function (button) {
      button.className = 'slider-nav__btn';
    })
    sliders.forEach(function (slide, index) {
      slide.className = 'slider__item slider__item--' + parseInt(index + 1);
    })
    button.className = 'slider-nav__btn slider-nav__btn--active';
    sliders[index].className = 'slider__item slider__item--' + parseInt(index + 1) + ' slider__item--active';
  })
})
