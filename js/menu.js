const menuItems = {
    main: [
      {
        name: "Grilled Salmon",
        description: "Fresh salmon fillet grilled to perfection, served with roasted vegetables.",
        price: 180.99
      },
      {
        name: "Filet Mignon",
        description: "Tender beef filet seasoned and grilled to your liking, accompanied by mashed potatoes and asparagus.",
        price: 240.99
      },
      {
        name: "Vegetable Stir-Fry",
        description: "Assorted vegetables stir-fried in a savory sauce, served with steamed rice.",
        price: 140.99
      },
      {
        name: "Chicken Alfredo Pasta",
        description: "Creamy alfredo sauce tossed with tender chicken breast and fettuccine pasta.",
        price: 160.99
      },
      {
        name: "Mushroom Risotto",
        description: "Creamy risotto cooked with mushrooms, Parmesan cheese, and white wine.",
        price: 150.99
      }
    ],
    dessert: [
      {
        name: "Chocolate Lava Cake",
        description: "Decadent chocolate cake with a molten chocolate center, served with vanilla ice cream.",
        price: 80.99
      },
      {
        name: "New York Cheesecake",
        description: "Classic New York-style cheesecake topped with strawberries.",
        price: 70.99
      },
      {
        name: "Tiramisu",
        description: "Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.",
        price: 90.99
      },
      {
        name: "Fruit Tart",
        description: "Fresh fruit atop a buttery tart crust, glazed with apricot jam.",
        price: 60.99
      },
      {
        name: "Crème Brûlée",
        description: "Rich custard topped with caramelized sugar, served with fresh berries.",
        price: 80.99
      }
    ],
    drinks: [
      {
        name: "Mojito",
        description: "Refreshing cocktail made with rum, mint leaves, lime juice, sugar, and soda water.",
        price: 90.99
      },
      {
        name: "Margarita",
        description: "Classic cocktail made with tequila, triple sec, lime juice, and simple syrup.",
        price: 80.99
      },
      {
        name: "Cosmopolitan",
        description: "Vodka-based cocktail with cranberry juice, triple sec, and lime juice.",
        price: 100.99
      },
      {
        name: "Old Fashioned",
        description: "Timeless cocktail made with bourbon, sugar, Angostura bitters, and a twist of orange peel.",
        price: 110.99
      },
      {
        name: "Mocktail",
        description: "Non-alcoholic mixed drink made with fresh fruit juices and soda water.",
        price: 60.99
      }
    ]
  };

  function displayMenu(category) {
    const menuContainer = document.getElementById("menu");
    menuContainer.innerHTML = "";
  
    const selectedItems = menuItems[category];
    if (!selectedItems) return;
  
    selectedItems.forEach(item => {
      const menuItemElement = document.createElement("div");
      menuItemElement.innerHTML = `<div class="mt-5">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p>Price: ₱${item.price}</p>
      </div>`;
      menuContainer.appendChild(menuItemElement);
    });
  }
  
  displayMenu("main");
  
  document.getElementById("category").addEventListener("change", function() {
    const selectedCategory = this.value;
    displayMenu(selectedCategory);
  });

  