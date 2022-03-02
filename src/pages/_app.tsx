import { useState } from 'react';
import { CartModal } from '../components/CartModal';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header/Header';

import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleCartOpenModal() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Header handleCartOpenModal={handleCartOpenModal}/>
      <Component {...pageProps} />
      <Footer />
      {isOpen && <CartModal handleClose={handleCartOpenModal}/>}
    </>
  );
}

export default MyApp;
