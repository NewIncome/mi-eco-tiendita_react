import { useLoaderData } from "react-router-dom";

const Product = props => {
  const prod = useLoaderData();

  return (
      <div className="Product">
        <div className="prod-img">
          <img src={prod.img} alt="" />
        </div>
        <div className="prod-desc">
          <h5 className="prod-name">{prod.name}</h5>
          <h6 className="price">{prod.price}</h6>
          <i className="prod-span">Impuesto no incluido. Para información de gastos de envío contactar por whatsapp.</i>
          <p className="description">{prod.description}</p>
        </div>

        {/* Maybe also 'También te puede interesar' section */}
      </div>
  );
}

export default Product;
