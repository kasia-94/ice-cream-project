(() => {
  const refs = {
    numberValue: document.querySelector("[data-number-text]"),
    minusBtn: document.querySelector("[data-number-minus]"),
    plusBtn: document.querySelector("[data-number-plus]"),
  };

  refs.minusBtn.addEventListener("click", toggleModal);
  refs.plusBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    
  }
})();