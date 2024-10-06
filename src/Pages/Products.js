import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';
import './Products.css';

const api_url = "https://fakestoreapi.com/products"; 

function Products() {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(api_url)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error('Error fetching products:', err));
    }, []);

    // Delete a product and update the state
    let deleteProduct = (productId) => {
        fetch(`${api_url}/${productId}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(() => {
                // Remove the deleted product from the state
                setProducts(products.filter((product) => product.id !== productId));
            })
            .catch((err) => console.error("Error deleting product:", err));
    };

    return (
        <>
            <h1 className="mt-3">Products Page</h1>
            <Link to={'/add'} className="btn btn-success mt-3">Add New Product</Link>
            <table className="table table-dark mt-4 products-table table-sm">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className="table table-dark">
                            <th scope="row">{product.id}</th>
                            <td>{product.title}</td>
                            <td>{product.description.slice(0, 60)}...</td>
                            <td>{product.price}</td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm me-1"
                                    onClick={() => deleteProduct(product.id)}
                                >
                                    Delete
                                </button>
                                <Link
                                    to={`/products/${product.id}`}
                                    className="btn btn-info btn-sm me-1"
                                >
                                    View
                                </Link>
                                <button className="btn btn-primary btn-sm">Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Products;
