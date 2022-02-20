import Head from 'next/head'
import { Button } from '../components/Button'

import { BsCartPlus } from 'react-icons/bs'

import styles from './home.module.scss'
import { BoxProductCategory } from '../components/BoxProductCategory'

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Ab Store</title>
      </Head>
      <section className={styles.banner}>
        <div className={styles.container}>
          <img src="/assets/relogio-banner.png" alt="Relógio Kambas Ebony" />
          <div className={styles.content}>
            <h1>Way kambas <br />mini ebony</h1>

            <div className={styles.separator}></div>

            <p>MATOA Way Kambas - This wood is chosen to represent the Sumatran 
              Rhino's skin which is designed with an overlap effect on its strap 
              to represent Rhino's skin.</p>
            <Button>
              <BsCartPlus />Add to cart
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.category}>
        <div className={styles.container}>
          <BoxProductCategory 
            title="Luxurious eyewear"
            description="See the beauty of exotic world with the luxurious glasses"
            url="product"
            img="assets/oculos.png"
          />
          <BoxProductCategory 
            title="Comfortable watches"
            description="Feels the balancing function and beauty in our wooden watches"
            url="product2"
            img="assets/relogio.png"
          />
        </div>
      </section>
    </>
  )
}
