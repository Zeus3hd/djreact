import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts } from "../../actions/products";
function Products(props) {
  useEffect(() => {
    props.getProducts();
  }, []);
  return (
    <>
      <h2>Products</h2>
      <ul style={{ margin: 0, padding: 0 }}>
        {props.products.map((product) => (
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
            <button>DELETE</button>
          </li>
        ))}
      </ul>
    </>
  );
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  // first products is by choice
  // second products is the products reducer incombineReducer
  // third products is the property in initiaState object in products reducer
  products: state.products.products,
});
export default connect(mapStateToProps, { getProducts })(Products);
