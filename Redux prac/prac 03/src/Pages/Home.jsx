import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
import { useNavigate } from "react-router";
import './ProductList.css'
import { removeFromCart, updateCartProduct } from "../slices/cartSlice";

const Home = () => {
  const [quantityChanged, setQuantityChanged] = useState({});
  const [initialQuantity, setInitialQuantity] = useState({})
  const [quantities, setQuantities] = useState([]);
  const [total, setTotal] = useState();
  const user = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let c = 0;
    cart.forEach(product => {
      setInitialQuantity(prev => ({ ...prev, [product.id]: product.quantities }))
      c += product.quantities * product.price;
    });
    setTotal(c);
  }, [cart])

  function handleLogout() {
    dispatch(logout());
    navigate('/')
  }

  function handleQuantityChange(id, quantity) {
    initialQuantity[id] === quantity ? setQuantityChanged(prev => ({ ...prev, [id]: false })) : setQuantityChanged(prev => ({ ...prev, [id]: true }))
    setQuantities(prev => ({ ...prev, [id]: quantity }))
  }

  function handleUpdateQuantity(product) {
    setInitialQuantity(prev => ({ ...prev, [product.id]: product.quantity }))
    setQuantityChanged(prev => ({ ...prev, [product.id]: false }))
    const productData = {
      ...product,
      quantities: quantities[product.id],
    }
    console.log('productData ', productData)
    dispatch(updateCartProduct(productData))
  }

  function handleRemoveFromCart(product) {
    dispatch(removeFromCart(product));
  }

  return (
    <>
      <nav style={{ background: "#333", color: "#fff", padding: "10px" }}>
        <h1>My App</h1>
        <span>Welcome, {user.username}!</span><br />
        <div>Age {user.age}</div>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <br />
      <hr />
      <button onClick={() => navigate('/productList')}>Show Product List</button>
      {' '}<button disabled='true' style={{ cursor: 'auto' }}>Cart Price: $ {total}</button>

      {cart.length !== 0 ? <div className="product-list">
        {cart.map((product, key) => (
          <div key={key} className="product-card" style={{ width: '300px' }}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
           
            <div className="actions">
              <input
                type="number"
                min="0"
                value={quantities[product.id] || product.quantities}
                onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
              />
              {quantityChanged[product.id] && <button onClick={() => handleUpdateQuantity(product)}>Update Quauntity</button>}
              <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
        : <h4>Your Cart is Empty!</h4>}

    </>
  );
};

export default Home;
