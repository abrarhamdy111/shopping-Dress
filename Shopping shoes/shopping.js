const slidr = document.querySelector('.slider'); 
const menitem = document.querySelectorAll('.menuitem');
menitem.forEach((item, index) => 
{ item.addEventListener('click', () => { slidr.style.transform = `translateX(${-100 * index}vw)`; }); }); 
const products = [ { id: 1, title: "AIR FORCE", colors: [{ code: "black", img: "../Shoppingsho/img/crater.png" }, 
{ code: "blue", img: "../Shoppingsho/img/blazer2.png" }], 
 price: 119, sizes: ['S', 'M', 'L', 'XL'], }, { id: 2, title: "JORDEN", price: 555, sizes: ['S', 'M', 'L', 'XL'], },
    { id: 3, title: "JORDEN", price: 555, sizes: ['S', 'M', 'L', 'XL'], }, { id: 4, title: "JORDEN",
     price: 555, sizes: ['S', 'M', 'L', 'XL'], }, { id: 5, title: "JORDEN", price: 555, sizes: ['S', 'M', 'L', 'XL'], }, ]; 
const index = 0; const choosenproduct = products[index]; const currentproductTitle = document.querySelector(".productTitle");
const currentproductprice = document.querySelector(".productprice"); 
const currentproductimg = document.querySelector(".productimg"); 
const currentproductsizes = document.querySelector(".size");
const currentproductcolores = document.querySelector(".color");
currentproductTitle.textContent = choosenproduct.title;
currentproductprice.textContent = "$" + choosenproduct.price; 
 if (choosenproduct.colors) { const colorContainer = document.createElement("div");
  colorContainer.classList.add("color-container"); choosenproduct.colors.forEach((color, index) => { const colorElement = document.createElement("div"); 
  colorElement.style.backgroundColor = color.code; colorContainer.appendChild(colorElement); }); currentproductcolores.appendChild(colorContainer); } 
   const productbutton = document.querySelector(".productbutton");
   const payment = document.querySelector(".payment"); 
   const close = document.querySelector(".close");
    if (productbutton && payment && close) 
    { productbutton.addEventListener("click", () => { payment.style.display = "flex"; }); 
     close.addEventListener("click", () => { payment.style.display = "none"; });
    }










  