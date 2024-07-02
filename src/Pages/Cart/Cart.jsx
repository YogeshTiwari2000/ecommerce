
// // eslint-disable-next-line no-unused-vars
// import React, { useContext } from 'react';
// import { ShopContext } from '../../Context/ShopContext';
// import CartItem from './CartItem';
// import { PRODUCTS } from '../../Products';
// import './Cart.css'
// import { useNavigate } from 'react-router-dom';

// function Cart() {
//     const { cartItems, getTotalCartAmount } = useContext(ShopContext);
//     const totalAmount = getTotalCartAmount();
//     const navigate = useNavigate();

//     return (
//         <div className='cart'>
//             <div>
//                 <h1>Your Cart Items</h1>
//             </div>
//             <div className='cartItems'>
//                 {PRODUCTS.map((product) => {
//                     if (cartItems[product.id] !== 0) {
//                         return <CartItem key={product.id} data={product} />;
//                     }
//                     return null;
//                 })}
//             </div>
//             {
//                 totalAmount > 0 ? (<div className="checkout">
//                     <p>Subtotoal : ${totalAmount}</p>
//                     <button onClick={() => { navigate('/') }}>Continue Shopping</button>
//                     <button>Checkout</button>
//                 </div>) : <h1>Your Cart is Empty</h1>
//             }

//         </div>
//     );
// }

// export default Cart;
import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import CartItem from './CartItem';
import { PRODUCTS } from '../../Products';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    return (
        <div className='cart container mx-auto p-4'>
            <div className="text-center my-8">
                <h1 className="text-3xl font-bold">Your Cart Items</h1>
            </div>
            <div className='cartItems grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem key={product.id} data={product} />;
                    }
                    return null;
                })}
            </div>
            {totalAmount > 0 ? (
                <div className="checkout mt-8 flex flex-col items-center">
                    <p className="text-lg font-semibold">Subtotal: ${totalAmount}</p>
                    <div className="mt-4">
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
                            onClick={() => navigate('/')}
                        >
                            Continue Shopping
                        </button>
                        <button className="bg-green-500 text-white py-2 px-4 rounded">
                            Checkout
                        </button>
                    </div>
                </div>
            ) : (
                <h1 className="text-center text-2xl font-semibold mt-8">Your Cart is Empty</h1>
            )}
        </div>
    );
}

export default Cart;

