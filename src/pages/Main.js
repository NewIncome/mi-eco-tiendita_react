import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const App = () =>
  <>
    <Navbar />
    <div className='core'>
      <Outlet />
    </div>
    <Footer />
  </>;

export default App;
