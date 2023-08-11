import { Link } from 'react-router-dom';

const Jabones = props => {
  const jabones = props.jabones;
  
  return (
    <>
      <h2 className="prods-title text-center">
        <b>Ja</b><b className="h-line">bon</b><b>es</b>
      </h2>
      {jabones.map(prod => (
        <Link to={`/jabones/${prod.name}`} className="Product-link" key={`key-${prod.name}`}>
          <div className="Product">
            <div className="prod-frame">
              <img src="../assets/var-05.jpg" alt="" className="prod-img" />
            </div>
            <div className="prod-title">
              <h5 className="prod-name">{prod.name}</h5> - <p className="price">{prod.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Jabones;
