import React, { useEffect, useState } from 'react';
import { products } from '../assets/frontend_assets/assets';

const Add = () => {
  const [product, setProduct] = useState({
        _id: "",
        name: "",
        description: "Just For Trial",
        price: 350,
        image: [],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716668445448,
        bestseller: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setProduct({ ...product, image: files });
  };

  const handleSizeChange = (size) => {
    const newSizes = product.sizes.includes(size)
      ? product.sizes.filter((s) => s !== size)
      : [...product.sizes, size];
    setProduct({ ...product, sizes: newSizes });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    // Submit to backend logic here
  };
  console.log(products);
  useEffect(()=>{
    console.log(product);
    product._id = products.length + 1;
    product.date = Date.now();
    // product.image = Array.from(product.image).map((file) => URL.createObjectURL(file));
    product.sizes = product.sizes.filter((size) => size !== "");
    product.bestseller = product.bestseller || false;
    products.push(product);
    console.log(products);
    
  },[])
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="w-full border p-2 rounded"
          value={product.name}
          onChange={handleInputChange}
          required
        />

        <textarea
          name="description"
          placeholder="Product Description"
          className="w-full border p-2 rounded"
          value={product.description}
          onChange={handleInputChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full border p-2 rounded"
          value={product.price}
          onChange={handleInputChange}
          required
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="w-full"
        />

        <div className="flex gap-4">
          <select
            name="category"
            value={product.category}
            onChange={handleInputChange}
            className="w-1/2 border p-2 rounded"
            required
          >
            <option value="">Select Category</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>

          <select
            name="subCategory"
            value={product.subCategory}
            onChange={handleInputChange}
            className="w-1/2 border p-2 rounded"
            required
          >
            <option value="">Select Subcategory</option>
            <option value="Winterwear">Winterwear</option>
            <option value="Casual">Top-Wear</option>
            <option value="Formal">Bottom-Wear</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-4">
          {['S', 'M', 'L', 'XL'].map((size) => (
            <label key={size} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={product.sizes.includes(size)}
                onChange={() => handleSizeChange(size)}
              />
              {size}
            </label>
          ))}
        </div>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={product.bestseller}
            onChange={(e) =>
              setProduct({ ...product, bestseller: e.target.checked })
            }
          />
          Bestseller
        </label>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
