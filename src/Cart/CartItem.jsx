const CartItem = ({ cartItem, addToCart, removeFromCart }) => {
  return (
    <li>
      {cartItem.name} : {cartItem.quantity}
      <button
        onClick={() => {
          addToCart(cartItem);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          removeFromCart(cartItem);
        }}
      >
        -
      </button>
    </li>
  );
};

export default CartItem;
