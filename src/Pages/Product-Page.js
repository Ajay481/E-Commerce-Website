import React from "react";
import { ProductCard } from "../components/Card/Product-Page-Card";
import data from "../data";
import { useParams } from "react-router";

export const ProductPage = () => {
  const { id } = useParams();
  return (
    <div className="d-flex">
      <div className="mx-auto">
        {data.map((item) => {
          return (
            <div key={item.id}>
              {item.id === Number(id) ? (
                <ProductCard title={item.title} src={item.src} />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};
