import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "./slices/cartSlice";
import './ProductList.css'
import { addToCart } from "../slices/cartSlice";
import { useNavigate } from "react-router";

const products = [
  { id: 1, name: "Wireless Headphones", price: 50, description: "High-quality sound with noise cancellation." },
  { id: 2, name: "Smart Watch", price: 120, description: "Track your health and stay connected on the go." },
  { id: 3, name: "Gaming Mouse", price: 30, description: "Ergonomic design with customizable buttons." },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const [quantities, setQuantities] = useState({
    1: 1,
    2: 1,
    3: 1,
  });
  const [isInCart, setIsInCart] = useState({})
  const navigate = useNavigate();

  const handleQuantityChange = (id, quantity) => {
    setQuantities(prev => ({ ...prev, [id]: quantity }));
  };

  useEffect(() => {
    cart.forEach(product => {
      setIsInCart(prev => ({ ...prev, [product.id]: true }))
      handleQuantityChange(product.id, product.quantities)
    });
  }, [])

  const handleAddToCart = (product) => {
    if (user.username !== '') {
      const productData = {
        ...product,
        quantities: quantities[product.id],
      }
      console.log('productData ', productData)
      dispatch(addToCart(productData));
      setIsInCart(prev => ({ ...prev, [product.id]: true }))
    } else {
      if (confirm('U are not Logged In\nPlease Login first')) {
        navigate('/');
      }
    }
  }

  return (
    <>
      <button onClick={() => navigate('/')}>{'◀︎'} home</button>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>

            <div className="actions">
              <input
                type="number"
                min="1"
                value={quantities[product.id] || 1}
                onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                disabled={isInCart[product.id] ? true : false}
              />
              {isInCart[product.id] ? <button style={{ backgroundColor: 'cadetblue' }} onClick={() => navigate('/')}>View Cart</button>
                : <button onClick={() => handleAddToCart(product)}>Add to Cart</button>}
            </div>

          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
