/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import myContext from '../../../context/data/myContext';
import './addProduct.css'; // Create or update a CSS file to match the style

function UpdateProduct() {
    const context = useContext(myContext);
    const { products, setProducts, updateProduct } = context;
    
    return (
        <div className="update-product-container">
            <div className="update-product-form">
                    {/* <img src="" alt="" /> */}
                <h1 className="form-title">Update Product</h1>
                <input
                    type="text"
                    onChange={(e) => setProducts({ ...products, title: e.target.value })}
                    value={products.title}
                    name="title"
                    className="input-field"
                    placeholder="Product title"
                />
                <input
                    type="text"
                    name="price"
                    onChange={(e) => setProducts({ ...products, price: e.target.value })}
                    value={products.price}
                    className="input-field"
                    placeholder="Product price"
                />
                <input
                    type="text"
                    name="imageurl"
                    onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })}
                    value={products.imageUrl}
                    className="input-field"
                    placeholder="Product image URL"
                />
                <input
                    type="text"
                    name="category"
                    onChange={(e) => setProducts({ ...products, category: e.target.value })}
                    value={products.category}
                    className="input-field"
                    placeholder="Product category"
                />
                <textarea
                    cols="30"
                    rows="5"
                    value={products.description}
                    name="description"
                    onChange={(e) => setProducts({ ...products, description: e.target.value })}
                    className="textarea-field"
                    placeholder="Product description"
                />
                <div className="button-container">
                    <button onClick={updateProduct} className="submit-button">
                        Update Product
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UpdateProduct;
