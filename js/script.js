function selectFood(food, category) {
  const selectedFood = food.parentNode.querySelector(".selected");
  if (selectedFood) {
    selectedFood.classList.remove("selected");
  }

  food.classList.add("selected");
  addOrder(food, category);
  console.log(order, order.length);
  checkButton();
}

function RealToNumber(real) {
  return Number(real.replace(",", "."));
}

function addOrder(food, category) {
  order[category] = {
    name: food.querySelector("h3").innerText,
    price: RealToNumber(food.querySelector(".price span").innerText)
  };
}

function checkButton() {
  if (button.disabled && Object.keys(order).length === 3) {
    button.disabled = false;
    button.innerText = "Fechar pedido";
    button.addEventListener("click", () => console.log(order));
  }
}

const order = {};
const button = document.querySelector("button");
