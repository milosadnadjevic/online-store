import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const CartTotal = () => {
  const { currency, deliveryFee, getCartAmount } = useContext(ShopContext);
  const [cartTotal, setCartTotal] = useState(0);

  // Fetch cart total when component mounts or cart changes
  useEffect(() => {
    const fetchCartAmount = async () => {
      const amount = await getCartAmount(); // Wait for the async call to resolve
      setCartTotal(amount); // Set the resolved value to state
    };
    fetchCartAmount();
  }, [getCartAmount]); // This runs when getCartAmount changes

  const totalAmount = cartTotal + deliveryFee;

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{currency} {cartTotal}.00</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>{currency} {deliveryFee}.00</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>{currency} {totalAmount === 0 ? 0 : totalAmount}.00</b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
