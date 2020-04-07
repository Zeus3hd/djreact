import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts } from "../../actions/products";
function Products() {
  return (
    <div>
      <h1>Product List</h1>
    </div>
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
export default connect(mapStateToProps)(Products);
