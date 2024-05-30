import { useLoaderData } from "react-router-dom";
import facebook from '../assets/facebook-ico.png';
import twitter from '../assets/twitter-ico.png';
import pinterest from '../assets/pinterest-ico.png';
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton
} from "react-share";
import { Link } from 'react-router-dom';
import { useEffect } from "react";

const Product = () => {
  const [prod, alsoProds] = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [prod]);

  return (
      <>
        <div className="Product ul-box d-sm-flex justify-content-center py-2">
          <div className="product-frame d-flex justify-content-center col-sm-6 col-sm-6">
            <img src={prod.img} alt="" className="product-img w-100" />
          </div>
          <div className="product-info col-sm-5 p-3 p-sm-5">
            <div className="titles text-center pt-3 pt-sm-0">
              <p className="product-brand small mb-2">Mi Eco-Tiendita</p>
              <h2 className="product-name h1">{prod.name}</h2>
              <p className="product-price p3">$ {prod.price}</p>
            </div>
            <p className="product-extra p2 text-center px-3">Impuesto no incluido. Para información de gastos de envío contactar por whatsapp.</p>
            <hr className="bar pt-3" />
            <ul className="desc pl-3 py-3">
              {prod.description && prod.description.map(d => (
                <li className="product-description p1 pb-1" key={d}>{d}</li>
              ))}
            </ul>
            <div className="row mt-4 justify-content-center">
              <ul className="social-share list-unstyled d-flex flex-wrap w-75">
                <li>
                <FacebookShareButton
                  media={window.location.hostname+prod.img}
                  url={window.location.href}
                  className="Demo__some-network__share-button facebook social-share-link"
                >
                  <img className="social-share-ico" src={facebook} alt="facebook share link" />
                  <span className="social-text">Compartir</span>
                </FacebookShareButton></li>
                <li>
                <TwitterShareButton
                  media={window.location.hostname+prod.img}
                  url={window.location.href}
                  className="Demo__some-network__share-button twitter social-share-link"
                >
                  <img className="social-share-ico" src={twitter} alt="twitter share link" />
                  <span className="social-text">Tuitear</span>
                </TwitterShareButton></li>
                <li>
                <PinterestShareButton
                  media={window.location.hostname+prod.img}
                  description={prod.description}
                  url={window.location.href}
                  className="Demo__some-network__share-button pinterest social-share-link"
                >
                  <img className="social-share-ico" src={pinterest} alt="pinterest share link" />
                  <span className="social-text">Hacer pin</span>
                </PinterestShareButton></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tambien">
          <h2 className="also-prods-title text-center mb-5 pt-5">
            <b>También te puede interesar</b>
            <hr className="h-line bar" />
          </h2>
          <div className="prods-container d-flex justify-content-center">
            <ul className="ul-box d-flex flex-wrap p-0">
              {alsoProds.map(prod => (
                <li className="also-prod card" key={`key-${prod.name}`}>
                  <Link
                    to={`/${prod.type}/${prod.path}`}
                    className="also-prod-link card-body pb-0"
                  >
                    <div className="also-prod-frame d-flex justify-content-center">
                      <img src={prod.img} alt="" className="also-prod-img w-100" />
                    </div>
                    <div className="also-prod-info text-center">
                      <h5 className="also-prod-name">{prod.name}<span className='p-line'>&#x2015;</span><span className="price">$ {prod.price}</span></h5>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
  );
}

export default Product;
