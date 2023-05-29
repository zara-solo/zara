import React from 'react';

type ProductDetailsProps = {
  product: any;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div>
      <h2>{product.name_product}</h2>
      <p>Price: {product.price} DNT</p>
      <p>Description: {product.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetails;
