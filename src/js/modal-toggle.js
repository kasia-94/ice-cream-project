(() => {
  const plusBtn = document.querySelector('[data-number-plus]');
  const minusBtn = document.querySelector('[data-number-minus]');
  const numberValue = document.querySelector('[data-number-text]');
  const plusBtnFirst = document.querySelector('[data-number-plus-first]');
  const minusBtnFirst = document.querySelector('[data-number-minus-first]');
  const numberValueFirst = document.querySelector('[data-number-text-first]');
  const plusBtnSecond = document.querySelector('[data-number-plus-second]');
  const minusBtnSecond = document.querySelector('[data-number-minus-second]');
  const numberValueSecond = document.querySelector('[data-number-text-second]');
  
  plusBtn.onclick = function () {
    let qty = parseInt(numberValue.value);
    qty = qty + 1;
    numberValue.value = qty;
  }

    minusBtn.onclick = function () {
    let qty = parseInt(numberValue.value);
    qty = qty - 1;
    numberValue.value = qty;
  }
    plusBtnFirst.onclick = function () {
    let qty = parseInt(numberValueFirst.value);
    qty = qty + 1;
    numberValueFirst.value = qty;
  }

    minusBtnFirst.onclick = function () {
    let qty = parseInt(numberValueFirst.value);
    qty = qty - 1;
    numberValueFirst.value = qty;
  }
    plusBtnSecond.onclick = function () {
    let qty = parseInt(numberValueSecond.value);
    qty = qty + 1;
    numberValueSecond.value = qty;
  }

    minusBtnSecond.onclick = function () {
    let qty = parseInt(numberValueSecond.value);
    qty = qty - 1;
    numberValueSecond.value = qty;
  }

})();
