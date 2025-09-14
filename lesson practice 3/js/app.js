
const showCategories = () => {
  const parent = document.querySelector(".categories");
  if (!parent) return;
  parent.innerHTML = "";
  const categoriesList = document.createElement("ul");
  categoriesList.addEventListener("click", (event) => {
    if (event.target && event.target.tagName === "LI") {
      const categoryId = event.target.getAttribute("data-category");
      const category = categories[categoryId];
      if (!category) return;
      // console.log(category);
      showProductsByCategory(category);
    }
  });

  Object.values(categories).forEach((category) => {
    const element = document.createElement("li");
    element.textContent = category.name;
    element.setAttribute("data-category", category.id);
    // element.addEventListener('click', () => {
    //   console.log(category);
    // });
    categoriesList.appendChild(element);
  });
  parent.appendChild(categoriesList);
};

const showProductsByCategory = (category) => {
  const parent = document.querySelector(".products");
  if (!parent) return;
  parent.innerHTML = "";
  const productsList = document.createElement("ul");
  productsList.addEventListener("click", (event) => {
    if (event.target && event.target.tagName === "LI") {
      const productId = event.target.getAttribute("data-product");
      // TODO: (at home)
      // Add content to the third column
      const product = category.products.find(
        (p) => String(p.id) === String(productId)
      );
      if (product) showProductDetails(product);
    }
  });

  category.products.forEach((product) => {
    const element = document.createElement("li");
    element.textContent = `${product.name} - $${product.price}`;
    element.setAttribute("data-product", product.id);
    productsList.appendChild(element);
  });
  parent.appendChild(productsList);
};

const showProductDetails = (product) => {
  const parent = document.querySelector(".info");
  if (!parent) return;
  parent.innerHTML = "";
  const title = document.createElement("h2");
  title.textContent = product.name;
  const price = document.createElement("p");
  price.textContent = `Ціна: $${product.price}`;
  const description = document.createElement("p");
  description.textContent = product.description || "Опис відсутній";

  parent.appendChild(title);
  parent.appendChild(price);
  parent.appendChild(description);
  const buyBtn = document.createElement("button");
  buyBtn.textContent = "Купити";
  parent.appendChild(buyBtn);

  buyBtn.addEventListener("click", () => {
    parent.innerHTML = "";
    if (!parent.querySelector(".order-form")) {
      renderOrderForm(parent, product);
    }
  });
};

function createOrderForm(product) {
  const form = document.createElement("form");
  form.classList.add("order-form");
  const title = document.createElement("h3");
  title.textContent = "Форма замовлення";
  form.appendChild(title);
  function wrapInDiv(element) {
    const div = document.createElement("div");
    div.appendChild(element);
    return div;
  }
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "ПІБ";
  nameInput.name = "fullname";
  nameInput.required = true;
  form.appendChild(wrapInDiv(nameInput));
  const citySelect = document.createElement("select");
  citySelect.name = "city";
  ["Київ", "Одеса", "Львів"].forEach((city) => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    citySelect.appendChild(option);
  });
  citySelect.required = true;
  form.appendChild(wrapInDiv(citySelect));
  const warehouseInput = document.createElement("input");
  warehouseInput.name = "warehouse";
  warehouseInput.type = "text";
  warehouseInput.placeholder = "Склад Нової пошти";
  warehouseInput.required = true;
  form.appendChild(wrapInDiv(warehouseInput));
  const paymentSelect = document.createElement("select");
  paymentSelect.name = "payment";
  ["Накладений платіж", "Оплата на рахунок"].forEach((method) => {
    const option = document.createElement("option");
    option.value = method;
    option.textContent = method;
    paymentSelect.appendChild(option);
  });
  paymentSelect.required = true;
  form.appendChild(wrapInDiv(paymentSelect));
  const quantityInput = document.createElement("input");
  quantityInput.name = "quantity";
  quantityInput.type = "number";
  quantityInput.min = 1;
  quantityInput.value = 1;
  quantityInput.required = true;
  form.appendChild(wrapInDiv(quantityInput));
  const commentArea = document.createElement("textarea");
  commentArea.placeholder = "Коментар до замовлення";
  commentArea.name = "comment";
  commentArea.required = true;
  form.appendChild(wrapInDiv(commentArea));
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Замовити";
  form.appendChild(wrapInDiv(submitBtn));
  return form;
}

function validateOrderForm(form) {
  let isValid = true;
  form.querySelectorAll(".error-msg").forEach((el) => el.remove());
  const formFields = [
    {
      selector: "input[name='fullname']",
      regex:
        "^[А-ЯІЇЄҐA-Z][а-яіїєґa-z'-]{1,20}\\s[А-ЯІЇЄҐA-Z][а-яіїєґa-z'-]{1,20}(?:\\s[А-ЯІЇЄҐA-Z][а-яіїєґa-z'-]{1,20})?$",
    },
    {
      selector: "input[name='warehouse']",
      regex: "^[А-ЯІЇЄҐA-Zа-яіїєґa-z0-9\\s'-]{2,50}$",
    },
    { selector: "input[name='quantity']", regex: "^[1-9]\\d*$" },
    {
      selector: "textarea[name='comment']",
      regex: "^[А-ЯІЇЄҐA-Zа-яіїєґa-z0-9\\s.,!?()'\"-]{5,500}$",
    },
  ];
  formFields.forEach((field) => {
    const input = form.querySelector(field.selector);
    const value = input.value.trim();
    const regex = new RegExp(field.regex);
    if (!regex.test(value)) {
      isValid = false;
      const error = document.createElement("p");
      error.className = "error-msg";
      error.textContent = "Помилка: некоректні дані";
      input.parentNode.appendChild(error);
    }
  });
  return isValid;
}

function showOrderSummary(parent, product, orderData) {
  parent.innerHTML = `
    <h2>Дякуємо за покупку!</h2>
    <p><strong>Товар:</strong> ${product.name} - $${product.price}</p>
    <p><strong>ПІБ:</strong> ${orderData.fullname}</p>
    <p><strong>Місто:</strong> ${orderData.city}</p>
    <p><strong>Склад НП:</strong> ${orderData.warehouse}</p>
    <p><strong>Оплата:</strong> ${orderData.payment}</p>
    <p><strong>Кількість:</strong> ${orderData.quantity}</p>
    <p><strong>Коментар:</strong> ${orderData.comment}</p>
  `;
}

function renderOrderForm(parent, product) {
  const form = createOrderForm(product);
  parent.appendChild(form);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateOrderForm(form)) {
      const orderData = {
        fullname: form.fullname.value,
        city: form.city.value,
        warehouse: form.warehouse.value,
        payment: form.payment.value,
        quantity: form.quantity.value,
        comment: form.comment.value,
      };
      const myDate = new Date();
      const date = `${myDate.getDate()}.${
        myDate.getMonth() + 1
      }.${myDate.getFullYear()}`;
      const newOrder = {
        date: date,
        product: product.name,
        quantity: orderData.quantity,
        price: product.price,
      };
      const existingOrders = JSON.parse(localStorage.getItem("myOrders")) || [];
      existingOrders.push(newOrder);
      localStorage.setItem("myOrders", JSON.stringify(existingOrders));
      showOrderSummary(parent, product, orderData);
    }
  });
}

function getOrders() {
  return JSON.parse(localStorage.getItem("myOrders")) || [];
}

function saveOrders(orders) {
  localStorage.setItem("myOrders", JSON.stringify(orders));
}

function renderOrdersList() {
  const ordersDiv = document.querySelector(".orders");
  if (!ordersDiv) return;
  ordersDiv.innerHTML = "<h2>Мої замовлення</h2>";
  const existingOrders = getOrders();
  if (existingOrders.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.classList.add("empty-orders-msg");
    emptyMsg.textContent = "У вас ще немає замовлень 😢";
    ordersDiv.appendChild(emptyMsg);
    return;
  }
  const ordersList = document.createElement("ul");
  existingOrders.forEach((order, index) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <strong>Дата:</strong> ${order.date}<br>
      <strong>Товар:</strong> ${order.product}<br>
      <strong>Кількість:</strong> ${order.quantity}<br>
      <strong>Ціна:</strong> $${order.price}
      <button class="delete-order" data-index="${index}">Видалити</button>
    `;
    ordersList.appendChild(item);
  });
  ordersList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-order")) {
      const indexToDelete = event.target.getAttribute("data-index");
      const orders = getOrders();
      orders.splice(indexToDelete, 1);
      saveOrders(orders);
      renderOrdersList();
    }
  });
  ordersDiv.appendChild(ordersList);
}


const showMyOrdersView = () => {
  const wrapper = document.querySelector(".wrapper");
  const ordersContainer = document.querySelector(".orders-container");
  if (wrapper) wrapper.style.display = "none";
  if (ordersContainer) ordersContainer.style.display = "block";
  renderOrdersList();
};

const showCategoriesView = () => {
  const wrapper = document.querySelector(".wrapper");
  const ordersContainer = document.querySelector(".orders-container");
  if (wrapper) wrapper.style.display = "flex";
  if (ordersContainer) ordersContainer.style.display = "none";
  showCategories();
  document.querySelector(".products").innerHTML = "";
  document.querySelector(".info").innerHTML = "";
};


document.addEventListener("DOMContentLoaded", () => {
  const myOrdersButton = document.querySelector(".orderButton");
  const categoriesButton = document.querySelector(".categoriesButton");
  if (myOrdersButton)
    myOrdersButton.addEventListener("click", showMyOrdersView);
  if (categoriesButton)
    categoriesButton.addEventListener("click", showCategoriesView);
  showCategoriesView();
});
