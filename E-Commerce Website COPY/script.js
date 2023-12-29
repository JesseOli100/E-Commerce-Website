
  var menuItems = document.getElementById("menuItems");
  menuItems.style.maxHeight = "0px";

  function menutoggle() {
    if(menuItems.style.maxHeight ==  "0px") 
    {
      menuItems.style.maxHeight = "200px";
    } 
    else {
      menuItems.style.maxHeight = "0px";
    }
}

    // Function to handle the click event
    function showProductsSection() {
      // Assuming you have a div with the id "content-container" where you want to load the products
      var contentContainer = document.getElementById('content-container');
  
      // Load the "products.html" content into the container using fetch
      fetch('products.html')
        .then(response => response.text())
        .then(data => {
          // Update the content of the container with the loaded HTML
          contentContainer.innerHTML = data;
        })
        .catch(error => console.error('Error loading products.html:', error));
    }
  
    // Click event listener to the "Products" link
    document.addEventListener('DOMContentLoaded', function () {
      var productsLink = document.querySelector('li a[href="#products.html"]');
      if (productsLink) {
        productsLink.addEventListener('click', showProductsSection);
      }
    });

    // Click event listener to the "Home" link
    document.addEventListener('DOMContentLoaded', function() {
        var productsLink = document.querySelector('li a[href="#index.html"]');
        if (productsLink) {
            productsLink.addEventListener('click', showProductsSection);
        }
    });

    