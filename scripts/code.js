//making an array of objects with our products
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
];

// creating a function to display the products

CupsDisplay()
function CupsDisplay() {        //loop through products to display them individually
    products.forEach((product) => {
        // using if statements
            const theCups = document.getElementById("cups")
            const elementProduct = document.createElement("div")
            elementProduct.innerHTML = `
            <div class="card">
            <div class="card-img"><div class="img"></div></div>
            <div class="card-title">Product title</div>
            <div class="card-subtitle">Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
            <hr class="card-divider">
            <div class="card-footer">
                <div class="card-price"><span>$</span> 123.45</div>
                <button class="card-btn">
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
                </button>
            </div>
            </div>
            `;
            theCups.appendChild(elementProduct);
    })

}
// const cart = []

// function AddToCart(productId) {
//     const product = products.find((product) => product.id === productId);
  
//     if (product && product.quantity > 0) {
//       cart.push(product);
//       product.quantity--;
     
//       cartUpdate();
//       console.log(cart);
//     }  
// }

