import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';
import './Products.css';
import Swal from 'sweetalert2';

const api_url = "https://fakestoreapi.com/products"; 

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = () => {
        fetch(api_url) // Fetching from the API directly
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error('Error fetching products:', err));
    };
        
    const deleteProduct = (productId) => {
        Swal.fire({
            title: `Are you sure to delete this item?`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((data) => {
            if (data.isConfirmed) {
                // Make a DELETE request to the API (uncomment if the API supports DELETE)
                fetch(`${api_url}/${productId}`, {
                    method: "DELETE",
                })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("Error deleting product");
                    }
                    // Remove the deleted product from the state
                    setProducts(products.filter((product) => product.id !== productId));
                    Swal.fire(
                        'Deleted!',
                        'Your product has been deleted.',
                        'success'
                    );
                })
                .catch((err) => {
                    console.error("Error deleting product:", err);
                    Swal.fire(
                        'Error!',
                        'There was an issue deleting the product.',
                        'error'
                    );
                });
            }
        });
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
                            <td>{product.description ? product.description.slice(0, 60) : "No description available"}...</td>
                            <td>${product.price}</td>
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
                                <Link
                                    to={`/add/${product.id}`} // Redirect to AddProduct with ID
                                    className="btn btn-primary btn-sm"
                                >
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Products;
