function initMap() {
    var mapOptions = {
      center: { lat: 45.425536, lng: -75.690373 }, // Coordinates for 112 Osgoode St, Ottawa
      zoom: 15
    };
  
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
    var marker = new google.maps.Marker({
      position: { lat: 45.425536, lng: -75.690373 },
      map: map,
      title: "Pâtisserie Obélix"
    });
  }
  

document.addEventListener('DOMContentLoaded', function () {
  const addToCartButtons = document.querySelectorAll('.shop-item-button');
  const cartItems = document.querySelector('.cart-items');
  const totalAmount = document.querySelector('.total-amount');

  addToCartButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const price = parseFloat(button.dataset.cardPrice);
      const title = button.dataset.cartTitle;
  
      const item = document.createElement('li');
      item.textContent = `${title} - $${price.toFixed(2)}`;
      cartItems.appendChild(item);
  
      const currentTotal = parseFloat(totalAmount.textContent.slice(1));
      totalAmount.textContent = `$${(currentTotal + price).toFixed(2)}`;
  
      // Save cart data to localStorage
      const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
      cartData.push({ title, price });
      localStorage.setItem('cartData', JSON.stringify(cartData));
    });
  });
  
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (collapsible.style.display === "block") {
      collapsible.style.display = "none";
    } else {
      collapsible.style.display = "block";
    }
  });
}


