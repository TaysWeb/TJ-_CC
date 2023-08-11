// making an array for my products to live in

  const products = [

  {
      "name": "Black ninja",
      "desc": "the black coffee cup with a neutral soft side ",
      "type": "Long Black",
      "id": 1,
      "image_url": "https://i.postimg.cc/cHKmYVpt/cofee-2.png",
      "price": 45
  },
  {
      "name": "the all neutral cup",
      "desc": "the all neutral coffee cup that matches any energy  ",
      "type": "Americano ",
      "id": 2,
      "image_url": "https://i.postimg.cc/hjp8WJ4W/coffee-menu.png",
      "price": 42
  },
  {
      "name": "White Classic",
      "desc": "the all white coffee cup that screams peace   ",
      "type": " Cuppuccino",
      "id": 3,
      "image_url": "https://i.postimg.cc/TY8t5mYG/cofee-4.png",
      "price": 40
  },
  {
      "name": "DarkCup",
      "desc": "The one cup that has the I CAN DO THIS type of vibe",
      "type": "Double Expresso ",
      "id": 4,
      "image_url": "https://i.postimg.cc/MGFj8Xvg/cofee-3.png",
      "price": 35
  },
          {
      "name": "Peace + content",
      "desc": "the peace kind of person who chooses themselves ",
      "type": "Flat White",
      "id": 5,
      "image_url": "https://i.postimg.cc/13sMJQqj/cofee-5.png",
      "price": 32
  },
          {
      "name": "content + a little bit of dark",
      "desc": "the content kind of person with that hidden evil  ",
      "type": " Mocha",
      "id": 6,
      "image_url": "https://i.postimg.cc/bvvgf9L0/cofee-6.png",
      "price": 38
  }
]




// creating a function to display the products

CupsDisplay()
function CupsDisplay() {        //loop through products to display them individually
    products.forEach((product) => {
        // using if statements
            const theCups = document.getElementById("cups")
            const elementProduct = document.createElement("div")
            elementProduct.innerHTML = `
            <div class="card mb-4 rounded-4 gap-2 g-4 mb-2"  style="max-width: 25rem; height:auto; background:#dec19f;">
            <div class="card_title fs-4">${product.name}</div>
            <div class="card_load"  style="max-width: auto; height:16rem;">
             <div class="row  gap-4 text-center"  >
             <div class="col-md-6">
            <img src="${product.image_url}" alt="${product.name}" lazy="loading" width="110" height:"10rem" class="pt-3">
            </div>
            <div class="col" >
            <p class="col-sm-12 text-break mt-5 text-center   fs-6 fw-semibold fs-italic " >${product.desc}</p>
            <div class="atc_btn">
                <button class="btn btn-primary" >
                     <div class="default-btn">
                       <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFF" height="20" width="20" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle r="3" cy="12" cx="12"></circle></svg>
                       <span onclick="AddToCart(products.id)">Add to Cart </span>
                     </div>
                     <div class="hover-btn">
                       <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#000" height="20" width="20" viewBox="0 0 24 24"><circle r="1" cy="21" cx="9"></circle><circle r="1" cy="21" cx="20"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                       <span>Shop Now</span>
                     </div>
                   </button>

                 <div class="card_title_price fs-3 fw-strong fst-italic fw-semibold mx-auto">R ${product.price}</div>
                 </div>
            </div>
        
        </div>
           </div>
        </div>
            `;
            theCups.appendChild(elementProduct);
    })

}

cart = [];
function AddToCart(products) {
    for(let i = 0; i < addToCartButtons.length; i++){
        addToCartButtons[i].addEventListener('click', AddToCart())
        
    }
    const product = products.find((product) => products.id === productId);
  
    if (product && product.quantity > 0) {
      cart.push(product);
      product.quantity--;
     
      cartUpdate();
      console.log(cart);
    }  

const cart = []

function AddToCart(products) {
   
    let addToCartButtons = document.getElementsByClassName('btn btn-primary');
 

}


function cartUpdate(){
    const cartContent = document.getElementById('cartContent');
    cartContent.innerHTML = "";
        cart.forEach((product, index) => {
        const cartItem = document.createElement("div")
        cartItem.innerHTML = `
        <img src="${product.image}" alt="product image" class="img-thumbnail" lazy="loading" />
        <p>${product.name} </p>
        <div class="d-flex justify-content-between">
          <p>R${product.price}</p>
          <button class="modalButtonClose" onclick="cartDel(${index})">
            Remove
          </button>
        </div>
        `
        cartContent.appendChild(cartItem)
        cart.push(cartItem);
        })
        // cartItem.appendChild(cartItem)
}

// function cartDel(index) {
//     let todo = localStorage.getItem("todo");
//     cart = JSON.parse(todo);
//     cart.pop(index, 1);
//     localStorage.setItem("todo", JSON.stringify(cart));
//     cartUpdate();
// }
