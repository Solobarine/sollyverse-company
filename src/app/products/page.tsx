import Book from "@/components/book";
import Product from "@/components/product";
import products from "@/data/products";
import React from "react";

const Products = () => {
  return (
    <div className="px-2 sm:px-10">
      <div className="py-20">
        <h3 className="text-2xl font-semibold mb-3">
          Empower your business with powerful and customized web solutions.
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          tenetur numquam soluta exercitationem a dolor quia ex reiciendis vitae
          architecto?
        </p>
      </div>
      <div className="about-items py-20">
        {products.map((product, index) => (
          <Product product={product} key={index} />
        ))}
      </div>
      <Book />
    </div>
  );
};

export default Products;
