var products = [
        { category: 'cheese', name: 'Gouda', price: 35 , },
        { category: 'cheese', name: 'Gruyere', price: 44 },
        { category: 'cheese', name: 'Edam', price: 35 },
        { category: 'cheese', name: 'Emmental', price: 40 },
        

        { category: 'charcuterie', name: 'Traditional Salami', price: 32 },
        { category: 'charcuterie', name: 'Jambon', price: 18 },
        { category: 'charcuterie', name: 'Sausage', price: 32 },
        

        { category: 'nuts', name: 'Almonds', price: 39 },
        { category: 'nuts', name: 'Hazelnuts', price: 40 },
        { category: 'nuts', name: 'Macadamias', price: 56 },

        { category: 'drinks', name: 'Orange Juice', price: 5 },
        { category: 'drinks', name: 'Lemonade', price: 4 },
        { category: 'drinks', name: 'Strawberry Juice', price: 7 },
       

        { category: 'chocolate', name: 'Nutella', price: 27 },
        { category: 'chocolate', name: 'Milka', price: 4.5 },
        { category: 'chocolate', name: 'Toblerone', price: 15 },
        { category: 'chocolate', name: 'Ferrero Rocher', price: 50 },
        
    ];
    // Function to display products in a category
function displayCategoryProducts(category) {
    var productsContainer = $('.products')


    productsContainer.empty();
    
    // Filter products by the selected category
    var filteredProducts = filter(products, function(product) {
        return product.category === category;
    });

    // Display each product
    each(filteredProducts, function(product) {
        var productItem = $('<div class="product-item"></div>');
        productItem.append('<h3>' + product.name + '</h3>');
        productItem.append('<p>Price: ' + product.price.toFixed(2) + ' dt</p>');
        productItem.append('<button class="add-to-cart">Add to Cart</button>');
        productItem.data('price', product.price);
        productsContainer.append(productItem);
    });
};

var cartItems = [];

function updateCartUI() {
    var cartItemsList = document.getElementById("cart-items");
    var cartTotal = document.getElementById("cart-total");
    
    cartItemsList.innerHTML = "";
    var total = 0;

    each(cartItems, function(item) {
        var cartItem = document.createElement("div");
        cartItem.classList.add("cartItem");
        cartItem.innerHTML = '<img src="img/cart-icon.png" alt=""><span>' + item.name + ' - $' + item.price.toFixed(2) + '</span>';
        cartItemsList.appendChild(cartItem);
        total += item.price;
    });

    cartTotal.innerText = `Total: $${total.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", function(){
    var menuItems = document.querySelectorAll(".menuItem")});

    function displayProducts(category) {
        if (category === 'cheese') {
            displayCategoryProducts('cheese');
        } else if (category === 'charcuterie') {
            displayCategoryProducts('charcuterie');
        } else if (category === 'nuts') {
            displayCategoryProducts('nuts');
        } else if (category === 'drinks') {
            displayCategoryProducts('drinks');
        } else if (category === 'chocolate') {
            displayCategoryProducts('chocolate');
        }
    }

    // var addToCartButtons = document.querySelectorAll(".add-to-cart");
    
    // each(addToCartButtons, function(button) {
    //     button.addEventListener("click", function() {
    //         var productIndex = parseInt(button.getAttribute("data-product-index"));
    //         var selectedProduct = products[productIndex];
    //         cartItems.push(selectedProduct);
    //         updateCartUI();
    //     });
    // });
// filter
function filter(array, predicate) {
    var acc = [];
    each(array, function(element) {
        if (predicate(element)) {
            acc.push(element);
        }
    });
    return acc;
}
// each
function each(coll, f) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                f(coll[i], i); 
          } 
    } else { 
          for (var key in coll) { 
                f(coll[key], key); 
          } 
    } 
}


$('.searchIcon').on('click',function(){
    var f= filter(products,function(el){
        return el.name === $('.searchInput').val()
    })
    each(f, function(product) {
        var productItem = $('<div class="product-item"></div>');
        productItem.append('<h3>' + product.name + '</h3>');
        productItem.append('<img src="' + product.image + '" alt="' + product.name + '" class="product-image">');
        productItem.append('<p>Price: ' + product.price.toFixed(2) + ' dt</p>');
        productItem.append('<button class="add-to-cart">Add to Cart</button>');
        productItem.data('price', product.price);
        $('.products').empty()
        $('.products').append(productItem);
    });
 
})
