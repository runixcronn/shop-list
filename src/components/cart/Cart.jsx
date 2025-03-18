import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Cart.css";

function Cart() {
  const cart = useSelector((state) => state.cart.items);

  return (
    <div className="cart-container">
      <h1>Sepet</h1>
      {!cart.length ? (
        <p>Ürün Eklenmedi.Lütfen sepetinize bir şey ekleyin</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.cartItemId || item.id}>
                <div className="item-price">${item.price}</div>
                <div className="item-name">{item.name}</div>
                {item.selectedSize && (
                  <div className="item-size">Boyut: {item.selectedSize}</div>
                )}
                <div className="item-expectedDelivery">
                  (Beklenen Teslimat Süresi 3 - 6 gün)
                </div>
              </div>
            ))}
          </div>
          <Link to="/checkout">
            <button className="item-btn">Sonraki</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
