'use strict'

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

var servicesControlls = document.querySelectorAll('.services__btn');
var servicesInfos = document.querySelectorAll('.services__info');

servicesControlls.forEach(function (button, index) {
  button.addEventListener('click', function () {
    servicesControlls.forEach(function (button) {
      button.classList.remove('services__btn--active');
    })
    servicesInfos.forEach(function (service) {
      service.classList.remove('services__info--active')
    })
    button.classList.add('services__btn--active');
    servicesInfos[index].classList.add('services__info--active');
  })
})

var mapImg = document.querySelector('.contacts__map').querySelector('img');
var mapPopup = document.querySelector('.map-popup');
var mapClose = document.querySelector('.map-popup-close');
var body = document.querySelector('body');

var showMap = function () {
  mapPopup.style.display = 'block';
}

var closeMap = function () {
  mapPopup.style.display = 'none';
}

mapImg.addEventListener('click', function(e) {
  e.preventDefault();
  showMap();
});
mapClose.addEventListener('click', closeMap);


var modalForm = document.querySelector('.modal');
var modalCloseBtn = document.querySelector('.modal-close-btn');
var contactBtn = document.querySelector('.contacts__write-us');
var emailField = document.querySelector('#modal-email');
var submit = document.querySelector('.modal__submit');
var modalName = document.querySelector('#modal-name');
var modalText = document.querySelector('#modal-message');

var showModal = function () {
  modalForm.classList.add('modal-show');
}

var closeModal = function () {
  if (modalForm.classList.contains('modal-show')) {
    modalForm.classList.remove('modal-show');
  }
}

contactBtn.addEventListener('click', function(e) {
  e.preventDefault();
  showModal();
})

modalCloseBtn.addEventListener('click', function(e) {
  e.preventDefault();
  closeModal();
})

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    closeMap();
    closeModal();
  }
})

var checkFields = function () {
  if (modalName.length < 2 || modalText.length < 1) {
    modalName.style.backgroundColor = '#f6dada';
  }
}

var validateEmail = function() {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.test(emailField.value)) {
    modalForm.classList.add('modal-error');
    console.log('Пожалуйста, введите правильный адрес электронной почты');
  }

}

submit.addEventListener('click', function(e) {
  e.preventDefault();
  validateEmail();
  checkFields();
})
