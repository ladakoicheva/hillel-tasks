const showCategories = () => {
  const parent = document.querySelector(".categories");
  if (!parent) {
    return;
  }

  const categoriesList = document.createElement("ul");
  categoriesList.addEventListener("click", (event) => {
    if (event.target && event.target.tagName === "LI") {
      const categoryId = event.target.getAttribute("data-category");
      // const category = getCategoryById(categoryId);
      const category = categories[categoryId];
      if (!category) {
        return;
      }
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

// const getCategoryById = id => categories.find(category => category.id == id);

const showProductsByCategory = (category) => {
  // const { products } = category; те саме, що і нижче
  const products = category.products;
  const parent = document.querySelector(".products");
  if (!parent) {
    return;
  }

  parent.innerHTML = "";

  const productsList = document.createElement("ul");

  productsList.addEventListener("click", (event) => {
    if (event.target && event.target.tagName === "LI") {
      // const categoryId = category.id
      const categoryId = event.target.getAttribute("data-category");
      const productId = event.target.getAttribute("data-product");
      // TODO: (at home)
      // Add content to the third column
      const product = category.products.find(
        (p) => String(p.id) === String(productId)
      );
      if (product) showProductDetails(product);
    }
  });

  products.forEach((product) => {
    const element = document.createElement("li");
    element.textContent = `${product.name} - $${product.price}`;
    element.setAttribute("data-product", product.id);
    element.setAttribute("data-category", category.id);
    // element.addEventListener('click', () => {
    //   console.log(product);
    // })
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
  price.textContent = `Цена: $${product.price}`;

  const description = document.createElement("p");
  description.textContent = product.description || "Описание отсутствует";

  parent.appendChild(title);
  parent.appendChild(price);
  parent.appendChild(description);

  const buyBtn = document.createElement("button");
  buyBtn.textContent = "Купить";
  parent.appendChild(buyBtn);

  buyBtn.addEventListener("click", () => {
    const message = document.createElement("div");
    const paragraph = document.createElement("p");
    message.setAttribute("class", "purchase-message");

    paragraph.textContent = "Товар успішно придбано!";
    message.appendChild(paragraph);
    const productsContainer = document.querySelector(".info");
    productsContainer.appendChild(message);

    setTimeout(() => (message.remove()), 2000);
  });
};

showCategories();
