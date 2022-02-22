import Head from 'next/head'
import { Button } from '../components/Button'

import { BsCartPlus } from 'react-icons/bs'

import styles from './home.module.scss'
import { BoxProductCategory } from '../components/BoxProductCategory'
import { BoxProduct } from '../components/BoxProduct'

const productsMonthlyDeals = [
  { img: '/assets/singo-maple.png', title: 'Singo maple', discount: 20, price: 1500000, url: '/singo-maple' },
  { img: '/assets/singo-ebony.png', title: 'Singo ebony', discount: 20, price: 1500000, url: '/singo-ebony' },
  { img: '/assets/rakai-ebony.png', title: 'Rakai ebony', discount: 15, price: 1280000, url: '/rakai-ebony' },
  { img: '/assets/way-kambas-mini.png', title: 'Way kambas mini maple', discount: 10, price: 1280000, url: '/way-kambas-mini' }
]

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

      <section className={styles.monthlyDeals}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Monthly Deals
          </h2>

          {productsMonthlyDeals.map(product => (
            <BoxProduct 
              title={product.title}
              url={product.url}
              img={product.img}
              discount={product.discount}
              price={product.price}
            />
          ))}

          
        </div>
      </section>
    </>
  )
}
