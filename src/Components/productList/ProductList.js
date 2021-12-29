import React from "react";
import ProductListItem from "./ProductListItem";
import PropTypes from "prop-types";

const ProductList = ({ arr }) => {
  return (
    <>
      <ul className='toysList test'>
        {arr.map((item) => (
          <ProductListItem name={item.name} price={item.price} key={item.id} />
        ))}
      </ul>
    </>
  );
};

export default ProductList;

ProductList.propTypes = {
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.any.isRequired,
    })
  ),
};
