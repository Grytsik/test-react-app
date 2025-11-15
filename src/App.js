import Header from 'Components/Header/Header.jsx';
import Discover from 'Components/Discover/Discover.jsx';
import Footer from 'Components/Footer/Footer.jsx';
import Offer from 'Components/Offer/Offer.jsx';

import 'styles/main.scss';

export default function App() {
  return (
    <div>
      <Header/>
      <Discover/>
      <Offer/>
      <Footer/>
    </div>
  )
}