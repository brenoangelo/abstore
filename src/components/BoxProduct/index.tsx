import { Button } from '../Button';
import styles from './styles.module.scss';

import { VscHeart } from 'react-icons/vsc';

import { format } from '../../constants';

type BoxProductProps = {
  img: string;
  discount?: number;
  price: number;
  url: string;
  title: string;
};

export function BoxProduct({
  img,
  discount,
  price,
  url,
  title,
}: BoxProductProps) {
  const finalPrice = discount ? price - (price / 100) * discount : price;

  function addCart() {
    /* CRIAR FUNÇÃO PARA ADD PRODUTO NO CARRINHO */

    const productsStoraged = JSON.parse(localStorage.getItem('@cart'));

    const product = {
      img: img,
      discount: discount,
      price: price,
      title: title,
    };

    const productsArray = productsStoraged
      ? productsStoraged?.concat(product)
      : [product];

    localStorage.setItem('@cart', JSON.stringify(productsArray));
  }

  return (
    <div className={styles.box}>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <div>
        <small>{discount}% Off</small>
        <small>{discount ? format(price) : ''}</small>
      </div>
      <h4>{format(finalPrice)}</h4>

      <div className={styles.buttons}>
        <Button isUnfilled>
          <VscHeart />
        </Button>
        <Button onClick={() => addCart()}>Add to cart</Button>
      </div>
    </div>
  );
}
