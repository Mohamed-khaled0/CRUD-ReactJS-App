import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductDetails.css'


function ProductDetails() {
    const api_url = "https://fakestoreapi.com/products";
    const { productID } = useParams();
    const [product, setProduct] = useState({}); 
  
    useEffect(() => {
      fetch(`${api_url}/${productID}`) 
        .then((response) => response.json())
        .then((data) => setProduct(data)) 
        .catch((error) => console.error("Error fetching product:", error)); 
    }, [productID]);
  
    return (
      <>
      {product && <div className="product-details">
      <h1 className="product-title">{product.title}</h1>
      <img className="product-image" src={product.image} alt={product.title} />
      <p className="product-price">Price: ${product.price}</p>
      <p className="product-description">{product.description}</p>
      <p className="product-category">Category: {product.category}</p>
      <p className="product-rating">
        Rating: {product.rating?.rate} / 5 ({product.rating?.count} reviews)
      </p>
          </div>}
      </>
    );
  }
  
  export default ProductDetails;