function carregar() {
fetch("https://bella-beleza-api.vercel.app/produtos")
    .then((response) => response.json())
    .then((produtos) => {
    const container = document.querySelector(".swiper-wrapper");
    produtos.map((produto, index) => {
        const cardWrapper = document.createElement("div");
        const card = `
                <div class="swiper-slide">
                    <div class="card" id="card">
                        <!--01---------------------------->
                        <div class="img-produtos"> 
                            <img src="img/${produto.imagem}.webp" alt="Nativa Spa">
                            <h2>${produto.nome}</h2>
                        </div>
                        <span class="preço">R$ ${produto.preco},00</span>
                        <div class="descrição-produto">
                            <h1>${produto.descricao}</h1>
                            <div id="counter">
                                <div class="estilo">
                                    <button id="plus${index}" class="count-button">+</button>
                                    <span id="value${index}">0</span>
                                    <button id="minus${index}" class="count-button">-</button>
                                </div>
                                <button id="reset${index}">Resetar</button>
                            </div>
                            <button id="buyButton${index}" class="buyButton">Adicionar ao Carrinho</button>
                        </div>
                    </div>
                </div> 
                `;
        container.insertAdjacentHTML("beforeend", card);
        setupCounter(
        `value${index}`,
        `plus${index}`,
        `minus${index}`,
        `reset${index}`
        );
    });
      // Adiciona o evento de clique a cada botão 'Adicionar ao Carrinho'
    const buttons = document.querySelectorAll(".buyButton");
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
        window.open("login.html", "_blank");
        });
    });
      // Clica no primeiro botão 'Adicionar ao Carrinho' automaticamente
    //clickButton();
    });
}

const setupCounter = (valueId, plusButtonId, minusButtonId, resetButtonId) => {
  const value = document.getElementById(valueId);
  const plusButton = document.getElementById(plusButtonId);
  const minusButton = document.getElementById(minusButtonId);
  const resetButton = document.getElementById(resetButtonId);

  let count = 0;

  const updateValue = () => {
    value.textContent = count;
  };

  updateValue();
  minusButton.disabled = true;
  plusButton.addEventListener("click", () => {
    count += 1;
    updateValue();
    minusButton.disabled = count <= 0;
  });

  minusButton.addEventListener("click", () => {
    if (count > 0) {
      count -= 1;
      updateValue();
      minusButton.disabled = count <= 0;
    }
  });

  resetButton.addEventListener("click", () => {
    count = 0;
    updateValue();
    minusButton.disabled = true;
  });
};

// Função para clicar no primeiro botão 'Adicionar ao Carrinho' automaticamente
function clickButton() {
  const button = document.querySelector(".buyButton"); // Seleciona o primeiro botão
  if (button) {
    button.click();
  }
}

carregar();
