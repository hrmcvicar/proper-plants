import { useState } from "react";
import PLANTS from "./data";
import Plants from "./Plants/Plants";
//import Plant from "./Plants/Plant";
import Cart from "./Cart/Cart";

/*export default function App() {
  const [plants, setPlants] = useState(PLANTS);
  const [cart, setCart] = useState([]);

  const addToCart = (plantToAdd) => {
    const itemExists = cart.find((cartItem) => {
      return cartItem.id === plantToAdd.id;
    });

    if (itemExists) {
      const updatedCart = cart.map((cartItem) => {
        return cartItem.id === foodToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem;
      });
      setCart(updatedCart);
    } else {
      const newItem = { ...foodToAdd, quantity: 1 };
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (plantToRemove) => {
    const updateCart = cart.map((cartItem) => {
      return cartItem.id === plantToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
    const filterCart = updateCart.filter((cartItem) => {
      return cartItem.quantity > 0;
    });
    setCart(filterCart);
  };

  return (
    <div>
      <h1>Proper Plants</h1>
      <hr />
      <Plants plants={plants} addToCart={addToCart} />
      <hr />
      <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
    </div>
  );
}*/
function App() {
  const [plants, setPlants] = useState(PLANTS);
  const [cart, setCart] = useState([]); //a good idea to set cart as a state
  //make it an array not an object!
  const addToCart = (plantToAdd) => {
    const itemExists = cart.find((cartItem) => {
      return cartItem.id === plantToAdd.id;
    });
    if (itemExists) {
      const updatedCart = cart.map((cartItem) => {
        return cartItem.id === plantToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem;
      });
      setCart(updatedCart);
    } else {
      const newItem = { ...plantToAdd, quantity: 1 };
      setCart([...cart, newItem]); //this broke the code?? bc above set newItem as an object (cannot map an object)
      //add the brackets to fix
    }
  };

  const removeFromCart = (foodToRemove) => {
    const updateCart = cart.map((cartItem) => {
      return cartItem.id === foodToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
    const filterCart = updateCart.filter((cartItem) => {
      return cartItem.quantity > 0;
    });
    setCart(filterCart);
    //2 parts: when more than 1, reduce by 1, when only 1, delete item
  };
  //1 need to know which item adding
  //2 what happens when cart has item or doesnt have (2 paths)
  return (
    <div>
      <h1>Proper Plants</h1>
      <hr />
      <Plants plants={plants} addToCart={addToCart} />
      <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
    </div>
  ); //this is prop drilling ^^
  //both components needed the prop and that happens often
}

export default App;
