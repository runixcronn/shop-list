import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../redux/itemsSlice";
import items from "../../mockData/items.json";
import ItemList from "../itemList/ItemList";

function HomePage() {
  const dispatch = useDispatch();
  const allItems = useSelector((state) => state.items.filteredItems);

  useEffect(() => {
    dispatch(setItems(items));
  }, [dispatch]);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-center">Tüm Ürünler</h2>
      <ItemList items={allItems} />
    </section>
  );
}

export default HomePage;
