import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/cartSlice";
import { addToOrders } from "../../redux/ordersSlice";
import "./Checkout.css";

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const orders = useSelector((state) => state.orders.items);
  const { discount, extraFees, tax } = { discount: 20, extraFees: 99, tax: 5 };
  const subTotal = Math.floor(cart?.reduce((sum, curr) => sum + curr.price, 0));
  const total = Math.floor(subTotal + 99 + 5 - (subTotal + 99 + 5) * 0.2);
  const [isOrdered, setIsOrdered] = useState(false);
  const handlePay = () => {
    dispatch(
      addToOrders({
        orderId: orders.length + 1,
        buyerId: 1,
        items: [...cart],
        price: total,
        address: "7.Sokak",
        deliveryDate: "28/12/2023",
        isDelivered: false,
      })
    );
    dispatch(clearCart());
    setIsOrdered(true);
  };
  return (
    <div className="checkout-container">
      {isOrdered ? (
        <h3>
          Tebrikler 🚀 Sipariş başarıyla verildi.{" "}
          <Link to="/">Daha fazla alışveriş yapın</Link>
        </h3>
      ) : (
        <>
          <div>
            <div className="custom-row">
              <h4>Sipariş İncelemesi</h4>
              <span>{cart?.length} sepetteki ürünler</span>
            </div>
            <div className="custom-row">
              <h4>Kuponlar</h4>
              <span>Mevcut değil</span>
            </div>
            <div className="custom-row">
              <h4>Ödeme Özeti</h4>
              <div className="checkout-summary">
                <span>Ara Toplam</span>
                <span>${subTotal}</span>
              </div>
              <div className="checkout-summary">
                <span>İndirim</span>
                <span>{discount}%</span>
              </div>
              <div className="checkout-summary">
                <span>Ekstra Ücret</span>
                <span>${extraFees}</span>
              </div>
              <div className="checkout-summary">
                <span>Vergi</span>
                <span>${tax}</span>
              </div>
            </div>
            <div className="custom-row">
              <h4>Toplam</h4>
              <span>${total}</span>
            </div>
          </div>
          <button className="item-btn" onClick={handlePay}>
            ${total} ödeyin
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
