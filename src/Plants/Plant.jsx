const Plant = ({ plant, addToCart }) => {
  //this child needs to know addTocart
  return (
    <li>
      {plant.name} {plant.image}
      <button
        onClick={() => {
          addToCart(plant);
        }}
      >
        Add to cart
      </button>
    </li>
    //want to make a function that can add to cart
    //we need this component to know what cart is
    //cart lives in App (where it was declared as state)
    //make the add to cart function at the top of App
  );
};

export default Plant;

/*<button
        onClick={() => {
          addToCart(plant);
        }}
      >
        Add to Cart
      </button>*/
