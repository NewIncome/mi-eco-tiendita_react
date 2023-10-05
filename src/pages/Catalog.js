import Products from "./Products";

const Catalog = props => {
  const all = props.productsList;

  return (
    <div className="categories pb-4 pb-md-5 mb-2 mb-md-4">
      {Object.keys(all).map(key => (
        <Products
          title={key}
          products={all[key]}
        />)
      )}
    </div>
  );
}

export default Catalog;
