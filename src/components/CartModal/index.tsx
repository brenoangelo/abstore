import styles from './styles.module.scss';

import { FaTrashAlt } from 'react-icons/fa';
import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi';
import { MdRemoveShoppingCart } from 'react-icons/md';

import { calcDiscount, format } from '../../constants';
import { Button } from '../Button';
import { useEffect, useState } from 'react';

type CartProducts = {
  title: string;
  price: number;
  discount: number;
  image: string;
  stock: number;
};

export function CartModal() {
  const [cartProducts, setCartProducts] = useState<CartProducts[]>(() => {
    let products =
      typeof window !== 'undefined'
        ? JSON.parse(localStorage.getItem('@cart'))
        : null;

    if (products) {
      return products;
    }

    return [];
  });

  useEffect(() => {
    setCartProducts([
      {title: 'Way Kambas', price: 1280000, discount: 15, stock: 25, image: '/assets/way-kambas-mini.png'},
      {title: 'Way Kambas', price: 1280000, discount: 15, stock: 25, image: '/assets/way-kambas-mini.png'},
    ])
  }, [])

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        {cartProducts.length ? (
          cartProducts.map((product) => (
            <div className={styles.productWrapper}>
              <div className={styles.productPhoto}>
                <img src={product.image} alt={product.title} />
              </div>

              <div className={styles.productInfo}>
                <h3>{product.title}</h3>
                <span>{format(product.price)}</span>
                <h4>{format(calcDiscount(product.price, product.discount))}</h4>
              </div>

              <div className={styles.actionsButtons}>
                <Button>
                  <HiOutlinePlus size={16} />
                </Button>
                <Button>
                  <HiOutlineMinus size={16} />
                </Button>
                <h4>{format(calcDiscount(product.price, product.discount))}</h4>
                <Button isUnfilled>
                  <FaTrashAlt size={16} />
                </Button>
              </div>
            </div>
          ))
        ) : (
          <h2>
            <MdRemoveShoppingCart size={35} /> Não existem produtos no carrinho
          </h2>
        )}
      </div>
    </div>
  );
}
