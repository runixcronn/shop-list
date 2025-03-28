import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./ItemDetail.css";
import items from "../../mockData/items.json";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const getItemDetail = (id) => items.filter((item) => item.id === id)[0];

function ItemDetail() {
  const params = useParams();
  const itemId = parseInt(params?.id);
  const item = !!itemId && getItemDetail(itemId);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const [selectedSize, setSelectedSize] = useState(item?.size || "S");
  const [isAdded, setIsAdded] = useState(
    cart.findIndex((c) => c.id === itemId) > -1
  );

  useEffect(() => {
    console.log("useEffect çalıştı", isAdded);

    setIsAdded(
      cart.findIndex(
        (c) => c.id === itemId && c.selectedSize === selectedSize
      ) > -1
    );
  }, [cart, itemId, selectedSize]);

  const handleAddToCart = () => {
    const itemWithSize = {
      ...item,
      selectedSize,

      cartItemId: `${item.id}-${selectedSize}`,
    };
    dispatch(addToCart(itemWithSize));
    setIsAdded(true);
  };

  return (
    <div className="item-detail-container">
      <Link to="/"> &#8592; Geri</Link>
      <div className="item-detail">
        <div className="item-detail-image">
          <img src={item.image} alt={"Item image"} />
        </div>
        <div className="item-detail-info">
          <div className="item-brand" style={{ margin: "0px 10px" }}>
            {item.brand}
          </div>
          <div className="item-name">{item.name}</div>
          <div className="item-price">${item.price}</div>

          <select
            className="item-size"
            value={selectedSize}
            onChange={(e) => {
              setSelectedSize(e.target.value);
              setIsAdded(
                cart.findIndex(
                  (c) => c.id === itemId && c.selectedSize === e.target.value
                ) > -1
              );
            }}
          >
            <option value={"S"}> Boyut seçin (S)</option>
            <option value={"M"}> Boyut seçin (M)</option>
            <option value={"L"}> Boyut seçin (L)</option>
            <option value={"XL"}> Beden seçin (XL)</option>
          </select>
          <button
            className="item-btn"
            disabled={isAdded}
            onClick={handleAddToCart}
          >
            {isAdded ? <Link to="/cart">Sepete Git</Link> : "Sepete Ekle"}
          </button>
          <p className="item-description">
            Lorem Ipsum, baskı ve dizgi işlemlerinde kullanılan sahte metindir.
            Lorem Ipsum, sektörün standart sahte metni olmuştur 1500'lü
            yıllardan beri, bilinmeyen bir matbaacının dizgiyi alıp bir tür
            örnek kitabı yapmak için karıştırdı.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
