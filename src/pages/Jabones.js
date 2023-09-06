import { Link } from 'react-router-dom';

const Jabones = props => {
  const jabones = props.jabones;
  
  return (
    <>
      <h2 className="prods-title text-center mb-5 pt-3">
        <b>Ja</b><b className="h-line">bon</b><b>es</b>
      </h2>
      <div className="products d-flex justify-content-center">
        <ul className="ul-box d-flex flex-wrap p-0">
          {jabones.map(prod => (
            <li className="product card" key={`key-${prod.name}`}>
              <Link to={`/jabones/${prod.name}`} className="product-link card-body pb-0">
                <div className="prod-frame d-flex justify-content-center">
                  <img src={prod.img} alt="" className="prod-img w-100" />
                </div>
                <div className="prod-info text-center">
                  <h5 className="prod-name">{prod.name}<span className='p-line'>&#x2015;</span><span className="price">$ {prod.price}</span></h5>
                </div>
              </Link>
            </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Jabones;
