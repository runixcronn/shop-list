import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterByCategory } from "../../redux/itemsSlice";
import ItemList from "../itemList/ItemList";

function CategoryPage() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const filteredItems = useSelector((state) => state.items.filteredItems);

  useEffect(() => {
    let categoryValue;
    if (category === "women") {
      categoryValue = "Kadın";
    } else if (category === "men") {
      categoryValue = "Erkek";
    } else if (category === "clothing") {
      categoryValue = "Giyim";
    } else if (category === "brands") {
      categoryValue = "Markalar";
    }

    if (categoryValue) {
      dispatch(filterByCategory(categoryValue));
    }
  }, [category, dispatch]);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-center">
        {category === "women"
          ? "Kadın"
          : category === "men"
          ? "Erkek"
          : category === "clothing"
          ? "Giyim"
          : category === "brands"
          ? "Markalar"
          : ""}{" "}
        Ürünleri
      </h2>
      <ItemList items={filteredItems} />
    </section>
  );
}

export default CategoryPage;
