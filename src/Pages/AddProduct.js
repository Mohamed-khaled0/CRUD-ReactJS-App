import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const api_url = "https://fakestoreapi.com/products"; 

function AddProduct() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();
    const { productId } = useParams(); // Get the product ID from the URL

    useEffect(() => {
        if (productId) {
            fetch(`${api_url}/${productId}`)
                .then(response => {
                    if (!response.ok) throw new Error("Product not found");
                    return response.json();
                })
                .then(data => {
                    setTitle(data.title);
                    setPrice(data.price);
                })
                .catch(error => console.error("Error fetching product:", error));
        }
    }, [productId]);

    const formSubmit = (e) => {
        e.preventDefault();
        
        const newProduct = { title, price: parseFloat(price) };

        if (productId) {
            // Simulate an update by creating a new product
            console.log("Simulating product update:", newProduct);
            // Here you might want to do something like notifying the user
            navigate('/products');
        } else {
            // Add new product
            fetch(api_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            })
            .then((response) => response.json())
            .then(() => {
                // Navigate to the products page after adding
                navigate('/products');
            })
            .catch((error) => console.error("Error adding product:", error));
        }
    };

    return (
        <>
            <h1 className="mt-3">{productId ? "Edit Product" : "Add Product"}</h1>
            <form onSubmit={formSubmit}>
                <label htmlFor="product-title">Title</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    id="product-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter Title"
                    required
                />
                <label htmlFor="product-price">Price</label>
                <input
                    type="number"
                    className="form-control"
                    id="product-price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter Price"
                    required
                />
                <button type="submit" className="btn btn-primary mt-3">{productId ? "Update Product" : "Add Product"}</button>
            </form>
        </>
    );
}

export default AddProduct;
