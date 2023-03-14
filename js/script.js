function selectFood(food, category) {
  const selectedFood = food.parentNode.querySelector(".selected");
  if (selectedFood) {
    selectedFood.classList.remove("selected");
  }

  food.classList.add("selected");
  addOrder(food, category);
  checkButton();
}

function toNumber(real) {
  return Number(real.replace(",", "."));
}

function toReal(num) {
  return num.toFixed(2).replace(".", ",");
}

function addOrder(food, category) {
  order[category] = {
    name: food.querySelector("h3").innerText,
    price: food.querySelector(".price span").innerText
  };
}

function checkButton() {
  if (footerBtn.disabled && Object.keys(order).length === 3) {
    footerBtn.disabled = false;
    footerBtn.innerText = "Fechar pedido";
    footerBtn.addEventListener("click", getOrderInfo);
  }
}

function openModal() {
  dialog.showModal();
  orderData.total = 0;
  for (const cat in order) {
    food[cat].name.innerText = order[cat].name;
    food[cat].price.innerText = order[cat].price;
    orderData.total += toNumber(order[cat].price);
  }
  totalDialog.innerText = toReal(orderData.total);
}

function closeModal() {
  dialog.close();
}

function getOrderInfo() {
  orderData.name = prompt("Nome:") || "J. Doe";
  orderData.address = prompt("Address:") || "Rua dos Bobos, 0";
  openModal();
}

function placeOrder() {
  const message = `Olá, gostaria de fazer o pedido:
- Prato: ${order.dish.name}
- Bebida: ${order.drink.name}
- Sobremesa: ${order.dessert.name}
Total: R$ ${orderData.total.toFixed(2)}
  
Nome: ${orderData.name}
Endereço: ${orderData.address}`;

  const link = `https://wa.me/5551992230218?text=${encodeURIComponent(message)}`;
  window.open(link);
}

const order = {};
const orderData = {
  total: 0
};

const footerBtn = document.querySelector("button");
const dialog = document.querySelector("dialog");
const totalDialog = dialog.querySelector(".total span");
const food = {
  dish: {
    name: dialog.querySelector(".dish .name"),
    price: dialog.querySelector(".dish .price")
  },
  drink: {
    name: dialog.querySelector(".drink .name"),
    price: dialog.querySelector(".drink .price")
  },
  dessert: {
    name: dialog.querySelector(".dessert .name"),
    price: dialog.querySelector(".dessert .price")
  }
};
