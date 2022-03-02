import { CartModal } from "../components/CartModal"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header/Header"

import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <CartModal />
    </>
  )
}

export default MyApp
