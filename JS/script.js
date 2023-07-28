let itemContainer = document.querySelector(".row");
let cart = document.querySelector("tbody");
console.log(itemContainer);
itemContainer.addEventListener("click", (e) => {
  if (e.target.nodeName == "A") {
    addToCart(e.target.dataset.id);
    e.target.remove();
  }
});

cart.addEventListener("click", (e) => {
  if (e.target.nodeName == "SPAN") {
    console.log("CLICKED");
    removeFromCart(e.target.dataset.id);
  }
});
let items = [
  {
    id: 1,
    name: "item 1",
    description: "Lorem ipsum dolor sit amet consectetur.",
    price: 5,
    image: `https://picsum.photos/id/${Math.round(Math.random() * 20)}/200/200`,
  },
  {
    id: 2,
    name: "item 2",
    description: "Lorem ipsum dolor sit amet consectetur sit amet.",
    price: 10,
    image: `https://picsum.photos/id/${Math.round(Math.random() * 20)}/200/200`,
  },
  {
    id: 3,
    name: "item 3",
    description: "Lorem ipsum amet consectetur ipsum . amet",
    price: 18,
    image: `https://picsum.photos/id/${Math.round(Math.random() * 20)}/200/200`,
  },
  {
    id: 4,
    name: "item 4",
    description: "Lorem ipsum consectetur. dolor amet",
    price: 7,
    image: `https://picsum.photos/id/${Math.round(Math.random() * 20)}/200/200`,
  },
];

displayItems();

function displayItems() {
  console.log("hey");
  items.forEach((item) => {
    itemContainer.innerHTML += `
    <div class="card m-3" style="width: 18rem" data-id="${item.id}">
    <img src="${item.image}" class="card-img-top" alt="" />
    <div class="card-body" data-id="${item.id}">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">
      ${item.description}
      </p>
      <p class="card-text">
      ${item.price} $ 
      </p>
      <a href="#" class="btn btn-primary" data-id="${item.id}">Add to cart</a>
    </div>
  </div>
  `;
  });
}

function addToCart(id) {
  let tempItem;

  items.forEach((item) => {
    if (item.id == id) {
      tempItem = item;
    }
  });

  cart.innerHTML += `
  <tr data-id="${tempItem.id}" class="t">
    <th scope="row">
      <img
        src="${tempItem.image}"
        alt=""
        width="50px"
        height="50px"
        class="rounded"
      />
    </th>
    <td>${tempItem.name}</td>
    <td>${tempItem.price} $</td>
    <td>
      <span class="material-symbols-outlined red" data-id="${tempItem.id}"> delete </span>
    </td>
  </tr>
  `;
}

function removeFromCart(id) {
  let item = document.querySelector(`.t[data-id="${id}"]`);
  let itemCard = document.querySelector(`.card-body[data-id="${id}"]`);
  itemCard.innerHTML += `<a href="#" class="btn btn-primary" data-id="${id}">Add to cart</a>`;
  item.remove();
}
