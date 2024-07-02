
// import React, { useContext } from 'react';
// import { ShopContext } from '../../Context/ShopContext';

// const CartItem = ({ data }) => {
//     const { id, productName, price, productImage } = data;
//     const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

//     return (
//         <div className="cartItem">
//             <img src={productImage} alt={productName} />
//             <div className="description">
//                 <p>
//                     <b>{productName}</b>
//                 </p>
//                 <p>${price}</p>
//                 <div className="countHandler">
//                     <button onClick={() => addToCart(id)}> + </button>
//                     <input
//                         type="number"
//                         value={cartItems[id]}
//                         onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
//                     />
//                     <button onClick={() => removeFromCart(id)}> - </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CartItem;
import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const CartItem = ({ data }) => {
    const { id, productName, price, productImage } = data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    return (
        <div className="cartItem border rounded-lg p-4 flex  items-center sm:justify-between flex-col">
            <img src={productImage} alt={productName} className="w-36  h-36 object-contain mb-4  sm:mb-0" />
            <div className="description text-center sm:text-left sm:ml-4">
                <p className="font-bold text-lg">{productName}</p>
                <p className="text-gray-700">${price}</p>
                <div className="countHandler mt-4 flex items-center justify-center sm:justify-start">
                    <button className="bg-blue-500 text-white py-1 px-2 rounded mr-2" onClick={() => addToCart(id)}>+</button>
                    <input
                        type="number"
                        className="mx-2 border rounded text-center w-12"
                        value={cartItems[id]}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                    />
                    <button className="bg-red-500 text-white py-1 px-2 rounded ml-2" onClick={() => removeFromCart(id)}>-</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
