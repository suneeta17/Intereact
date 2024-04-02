import React from "react";
import CatalogItem from "../components/CatalogItem";
import { CatalogList } from "../helpers/CatalogList";
import "../styles/Catalog.css";


function Catalog() {
  return (
    <div className="catalog">
      <h1 className="catalogTitle">Our Catalog</h1>
      <div className="catalogList">
        {CatalogList.map((catalogItem, key) => {
          return (
            <CatalogItem
              key={key}
              image={catalogItem.image}
              name={catalogItem.name}
              price={catalogItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Catalog;