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
          Explore our diverse range of innovative software products designed to
          meet the evolving needs of modern businesses. Each product is crafted
          with precision, offering seamless functionality, intuitive user
          experiences, and robust performance. Discover how our solutions can
          elevate your business to new heights.
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
