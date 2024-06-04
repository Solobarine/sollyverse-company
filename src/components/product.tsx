import React from "react";

const Product = ({
  product,
}: {
  product: { name: string; description: string; color: string; image: string };
}) => {
  return (
    <div
      className="relative p-4 rounded-lg shadow-md text-white h-96 flex flex-col justify-between overflow-hidden"
      style={{ backgroundColor: product.color }}
    >
      <div className="w-fit">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p>{product.description}</p>
      </div>
      <img
        src={product.image}
        alt={product.name}
        width={undefined}
        className="absolute aspect-video z-10 left-10 top-1/2 transform -translate-y-1/2"
      />
      <button className="w-fit">Explore</button>
    </div>
  );
};

export default Product;
