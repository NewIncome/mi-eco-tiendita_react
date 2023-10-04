import whatsapp from '../assets/whatsapp.png'

const WhatsappBubble = () => (
  <div className="whatsapp">
    <a className= "whats-link" href="https://wa.me/525519124431" target="_blank">
      <img className="whats-img" src={whatsapp} alt="whatsapp bubble" />
    </a>
  </div>
);

export default WhatsappBubble;
