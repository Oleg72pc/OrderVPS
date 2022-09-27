import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VPSOrder from '../../pages/VSPOrder/VPSOrder';
import Account from '../../pages/Account';
import Servers from '../../pages/Servers';
import Monitoring from '../../pages/Monitoring';
import Domains from '../../pages/Domains';
import SSL from '../../pages/SSL';
import Store from '../../pages/Store';
import SEOAndAdvertising from '../../pages/SEOAndAdvertising';
import Support from '../../pages/Support';
import Idea from '../../pages/Idea';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Header />
        <Routes>
          <Route path="/" element={<VPSOrder />} />
          <Route path="/account" element={<Account />} />
          <Route path="/servers" element={<Servers />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/domains" element={<Domains />} />
          <Route path="/ssl" element={<SSL />} />
          <Route path="/store" element={<Store />} />
          <Route path="/seo" element={<SEOAndAdvertising />} />
          <Route path="/support" element={<Support />} />
          <Route path="/idea" element={<Idea />} />
        </Routes>
      </Sidebar>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
