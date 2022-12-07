/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};



var tips = document.querySelectorAll('.tip__button'),
  bill = document.querySelector('.input__box_dollar'),
  peopleNum = document.querySelector('.input__box_person'),
  subtitles = document.querySelectorAll('.input__subtitle'),
  reset = document.querySelector('.aside__button'),
  tip = document.querySelector('.aside__price_tip'),
  total = document.querySelector('.aside__price_total'),
  custom = document.querySelector('.tip__button_colorless');
bill.value = 1 .toFixed(2);
peopleNum.value = 1;
function checkInputs() {
  var allPassed = true;
  if (+bill.value <= 0) {
    bill.value = 0;
    colorInput(subtitles[0], bill, 'add');
    allPassed = false;
  } else {
    bill.value = (+bill.value).toFixed(2);
    colorInput(subtitles[0], bill, 'remove');
  }
  peopleNum.value = Math.ceil(+peopleNum.value.replace(/^0+/, ''));
  if (peopleNum.value <= 0) {
    colorInput(subtitles[1], peopleNum, 'add');
    allPassed = false;
  } else {
    colorInput(subtitles[1], peopleNum, 'remove');
  }
  if (!allPassed) {
    tip.innerHTML = "$0.00";
    total.innerHTML = "$0.00";
  }
  return allPassed;
}
bill.addEventListener('change', function () {
  return checkInputs();
});
peopleNum.addEventListener('change', function () {
  return checkInputs();
});
tips.forEach(function (tip, i) {
  return tip.addEventListener('click', render.bind(null, i));
});
custom.addEventListener('change', function () {
  console.log(+custom.value);
  if (+custom.value < 0) custom.value = 0;
  render(5);
});
reset.addEventListener('click', function () {
  window.location.reload();
});
function render(i) {
  colorTip(i);
  if (!checkInputs()) {
    tips.forEach(function (tip) {
      return tip.classList.remove('tip__button_active');
    });
    return;
  }
  var currentPercent = i == 5 ? +tips[i].value : +tips[i].innerHTML.replace(/[^0-9]/g, "");
  calculateTips(currentPercent);
}
function colorTip(i) {
  tips.forEach(function (tip, j) {
    if (j == i) {
      tip.classList.add('tip__button_active');
    } else {
      tip.classList.remove('tip__button_active');
    }
  });
}
function colorInput(sub, element, str) {
  if (str == 'add') {
    sub.classList.add('input__subtitle_active');
    element.classList.add('input__box_dollar--active');
  } else {
    sub.classList.remove('input__subtitle_active');
    element.classList.remove('input__box_dollar--active');
  }
}
function calculateTips(percents) {
  var currentTip = (percents * parseFloat(+bill.value) / (100 * parseFloat(+peopleNum.value))).toFixed(2);
  var currentAmount = (parseFloat(+bill.value) / parseFloat(+peopleNum.value)).toFixed(2);
  var currentTotal = (parseFloat(currentTip) + parseFloat(currentAmount)).toFixed(2);
  tip.innerHTML = "$".concat(currentTip);
  total.innerHTML = "$".concat(currentTotal);
}
/******/ })()
;