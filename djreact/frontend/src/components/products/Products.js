import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector, shallowEqual } from "react-redux";
// import PropTypes from "prop-types";
import { getProducts, deleteProduct } from "../../actions/products";

function Products() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  console.log(products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      <h2>Products</h2>
      <ul style={{ margin: 0, padding: 0 }}>
        {products
          ? products.map((product) => (
              <li
                key={product.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p>Name:</p>
                <p>{product.name}</p>
                <p>Email:</p>
                <p>{product.email}</p>
                <p>Msg:</p>
                <p>{product.message}</p>
                <button onClick={() => dispatch(deleteProduct(product.id))}>
                  DELETE
                </button>
              </li>
            ))
          : "loading"}
      </ul>
    </>
  );
}

// Products.propTypes = {
//   products: PropTypes.array.isRequired,
// };
// const mapStateToProps = (state) => ({
//   // first products is by choice
//   // second products is the products reducer incombineReducer
//   // third products is the property in initiaState object in products reducer
//   products: state.products.products,
// });
// export default connect(mapStateToProps, { getProducts, deleteProduct })(
//   Products
// );

export default Products;
