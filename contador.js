const setupCounter = (valueId, plusButtonId, minusButtonId, resetButtonId) => {
  const value = document.querySelector(`#${valueId}`);
  const plusButton = document.querySelector(`#${plusButtonId}`);
  const minusButton = document.querySelector(`#${minusButtonId}`);
  const resetButton = document.querySelector(`#${resetButtonId}`);

  let count = 0; // inicia do zero

  // para atualizar o valor mostrado no html
  const updateValue = () => {
    value.textContent = count;
  };

  updateValue();
  minusButton.disabled = true;

  // botão de +
  plusButton.addEventListener("click", () => {
    count += 1;
    updateValue();
    if (count > 0) {
      minusButton.disabled = false; // Habilita o botão de decremento se count for maior que 0
    }
  });

  //botão de menos
  minusButton.addEventListener("click", () => {
    if (count > 0) {
      count -= 1;
      updateValue();
      if (count === 0) {
        minusButton.disabled = true;
      }
    }
  });

  // Reset do botão
  resetButton.addEventListener("click", () => {
    count = 0;
    updateValue();
    minusButton.disabled = true; // desabilita ate o 0
  });
};

// Contadores
setupCounter("value1", "plus1", "minus1", "reset1");
setupCounter("value2", "plus2", "minus2", "reset2");
setupCounter("value3", "plus3", "minus3", "reset3");
setupCounter("value4", "plus4", "minus4", "reset4");
setupCounter("value5", "plus5", "minus5", "reset5");
setupCounter("value6", "plus6", "minus6", "reset6");
