// /* eslint-disable no-unused-vars */
// import React from 'react';
// import { PRODUCTS } from '../../Products';
// import Product from './Product';
// import './Shop.css'

// function Shop() {
//     return (
//         <div className="shop">
//             <div className="shoptitle">
//                 {/* <h1>Hero Shop</h1> */}
//             </div>
//             <div className="products ">
//                 {PRODUCTS.map((productData) => (
//                     <Product
//                         key={productData.id}
//                         id={productData.id}
//                         productName={productData.productName}
//                         price={productData.price}
//                         productImage={productData.productImage}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Shop;
import React from 'react';
import { PRODUCTS } from '../../Products';
import Product from './Product';

function Shop() {
    return (
        <div className="shop container mx-auto p-4">
            <div className="shoptitle text-center my-8">

            </div>
            <div className="products grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {PRODUCTS.map((productData) => (
                    <Product
                        key={productData.id}
                        id={productData.id}
                        productName={productData.productName}
                        price={productData.price}
                        productImage={productData.productImage}
                    />
                ))}
            </div>
        </div>
    );
}

export default Shop;
