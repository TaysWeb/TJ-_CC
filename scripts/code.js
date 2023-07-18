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
            const elementProduct = document.createElement("row-col-3")
            elementProduct.innerHTML = `
        //     <div class="card">
        //     <div class="front-content">
        //       <h3>${product.name}</h3>
        //       <img src="${product.image_url}" alt="${product.name}" class="img-thumbnail">
        //       <button onclick="cartPush(${product.id})" >Add to Cart</button>
        //     </div>
        //     <div class="content">
        //       <p class="heading"> ${product.name}</p>
        //       <p>
        //          ${product.desc}
        //       </p>
        //       <p class="text-muted fs-2"> ${product.price}</p>
              
        //     </div>
        //   </div>
        //   </div>
        
        <div class="flip">
    <div class="content">
        <div class="front">
            <h2>Front</h2>
            <p>Front Description</p>
        </div>
        <div class="back">
            <h2>Back</h2>
            <p>Back Description</p>
        </div>
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

