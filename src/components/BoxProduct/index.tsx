import { Button } from '../Button'
import styles from './styles.module.scss'

import { VscHeart } from 'react-icons/vsc'

type BoxProductProps = {
  img: string;
  discount?: number;
  price: number;
  url: string;
  title: string;
}

export function BoxProduct({img, discount, price, url, title}: BoxProductProps) {  

  const finalPrice = discount ? price - (price/100 * discount) : price

  return (
    <div className={styles.box}>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <small>{discount}% Off</small>
      <small>{discount ? price : ''}</small>
      <h4>{finalPrice}</h4>

      <div className={styles.buttons}>
        <Button isUnfilled>
          <VscHeart />
        </Button>
        <Button onClick={() => alert('add no carrinho')}>
          Add to cart
        </Button>
      </div>
    </div>
  )
}