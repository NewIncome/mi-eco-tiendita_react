import { useLoaderData } from "react-router-dom";
import facebook from '../assets/facebook-ico.png';
import twitter from '../assets/twitter-ico.png';
import pinterest from '../assets/pinterest-ico.png';
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton
} from "react-share";

const Product = () => {
  const prod = useLoaderData();

  return (
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
                <li>{/*<a className="facebook social-share-link" title="Facebook-share" href={`https://www.facebook.com/sharer.php?u=${window.location.href}`} target="_blank" rel="noreferrer noopener">
                  <img className="social-share-ico" src={facebook} alt="facebook share link" />
                  <span className="social-text">Compartir</span>
              </a>*/}
                <FacebookShareButton
                  media={window.location.hostname+prod.img}
                  url={window.location.href}
                  className="Demo__some-network__share-button facebook social-share-link"
                >
                  {console.log('PATH')}
                  {console.log(window.location.hostname+prod.img)}
                  <img className="social-share-ico" src={facebook} alt="facebook share link" />
                  <span className="social-text">Compartir</span>
                </FacebookShareButton></li>
                <li>{/*<a className="twitter social-share-link" title="Twitter-share" href={`https://twitter.com/share?text=${encodeURIComponent(prod.name)}&url=${window.location.href}`} target="_blank" rel="noreferrer noopener">*/}
                <TwitterShareButton
                  media={window.location.hostname+prod.img}
                  url={window.location.href}
                  className="Demo__some-network__share-button twitter social-share-link"
                >
                  <img className="social-share-ico" src={twitter} alt="twitter share link" />
                  <span className="social-text">Tuitear</span>
                </TwitterShareButton></li>
                <li>{/*<a className="pinterest social-share-link" title="Pinterest-share" href={`https://pinterest.com/pin/create/button/?url=${window.location.href}&media=//${window.location.origin+encodeURIComponent(prod.img)}?v=1637340429&description=${encodeURIComponent(prod.name)}`} target="_blank" rel="noreferrer noopener">*/}
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
  );
}

export default Product;
