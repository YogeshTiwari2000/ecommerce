// // eslint-disable-next-line no-unused-vars
// import React, { useContext } from 'react';
// import { ShopContext } from '../../Context/ShopContext';

// // eslint-disable-next-line react/prop-types
// function Product({ id, productName, price, productImage }) {
//     const { addToCart, cartItems } = useContext(ShopContext);

//     const cartItemAmount = cartItems[id]

//     return (
//         <div className='product'>
//             <img src={productImage} alt={productName} />
//             <div className="description">
//                 <p className='text-red'><b>{productName}</b></p>
//                 <p><b>${price}</b></p>
//                 <button className='addToCartBttn' onClick={() => addToCart(id)}>Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
//             </div>
//         </div>
//     );
// }

// export default Product;
import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

function Product({ id, productName, price, productImage }) {
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];

    return (
        <div className='product border rounded-lg p-4 flex flex-col items-center'>
            <img src={productImage} alt={productName} className=" h-52 w-52 object-contain mb-4 rounded" />
            <div className="description text-center">
                <p className='productName text-red-500 font-bold text-lg'><b>{productName}</b></p>
                <p className="font-semibold text-gray-700"><b>${price}</b></p>
                <button
                    className='addToCartBttn bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700 transition duration-300'
                    onClick={() => addToCart(id)}
                >
                    Add to Cart {cartItemAmount > 0 && <span>({cartItemAmount})</span>}
                </button>
            </div>
        </div>
    );
}

export default Product;
