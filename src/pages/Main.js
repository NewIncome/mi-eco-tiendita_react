import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import WhatsappBubble from '../components/WhatsappBubble';

const App = () =>
  <>
    <Navbar />
    <div className='core'>
      <Outlet />
    </div>
    <Footer />
    <WhatsappBubble />
  </>;

export default App;
