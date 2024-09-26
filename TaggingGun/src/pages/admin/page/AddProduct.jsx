import  { useContext, useState } from 'react';
import myContext from '../../../context/data/myContext';
import './addProduct.css'; // Add this line to include your CSS

function AddProduct() {
  const context = useContext(myContext);
  const { products, setProducts, addProduct } = context;
  
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  return (
    <div className="add-product-container">
      <div className="add-product-form">
        <h1 className="form-title">Add New Product</h1>
        <div className="image-upload">
          <label htmlFor="file" className="upload-label">
            <img
              src={avatar.url || "https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033967.jpg?ga=GA1.1.967407136.1708519265"}
              alt="Product Avatar"
              className="product-image"
            />
          </label>
          <input
            type="file"
            name="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
        </div>
        <div className="form-field">
          <input
            type="text"
            onChange={(e) => setProducts({ ...products, title: e.target.value })}
            value={products.title}
            name="title"
            className="input"
            placeholder="Product Title"
          />
        </div>
        <div className="form-field">
          <input
            type="text"
            name="price"
            onChange={(e) => setProducts({ ...products, price: e.target.value })}
            value={products.price}
            className="input"
            placeholder="Product Price"
          />
        </div>
        <div className="form-field">
          <input
            type="text"
            name="imageurl"
            onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })}
            value={products.imageUrl}
            className="input"
            placeholder="Product Image URL "
          />
        </div>
        <div className="form-field">
          <input
            type="text"
            name="category"
            onChange={(e) => setProducts({ ...products, category: e.target.value })}
            value={products.category}
            className="input"
            placeholder="Product Category"
          />
        </div>
        <div className="form-field">
          <textarea
            cols="30"
            rows="5"
            value={products.description}
            name="description"
            onChange={(e) => setProducts({ ...products, description: e.target.value })}
            className="textarea"
            placeholder="Product Description"
          />
        </div>
        <div className="button-container">
          <button onClick={addProduct} className="submit-button">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
