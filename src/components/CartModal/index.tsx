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

type Cupom = {
  code: string;
  discount: number;
};

type CartModalProps = {
  handleClose: () => void;
};

export function CartModal({ handleClose }: CartModalProps) {
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
  const [total, setTotal] = useState(0);
  const [cupom, setCupom] = useState<Cupom>({} as Cupom);

  useEffect(() => {
    const priceTotal = cartProducts.reduce((acc, product) => {
      acc += calcDiscount(product.price, product.discount);

      return acc;
    }, 0);

    setTotal(priceTotal);
  }, []);

  function handleCloseModal(e: any) {
    if (e.target.id !== 'overlay') return;

    handleClose();
  }

  return (
    <div
      className={styles.overlay}
      onClick={(e) => handleCloseModal(e)}
      id="overlay"
    >
      <div className={styles.container}>
        <div className={styles.productsContainer}>
          {cartProducts.length ? (
            cartProducts.map((product) => (
              <div className={styles.productWrapper}>
                <div className={styles.productPhoto}>
                  <img src={product.image} alt={product.title} />
                </div>

                <div className={styles.productInfo}>
                  <h3>{product.title}</h3>
                  <span>{format(product.price)}</span>
                  <h4>
                    {format(calcDiscount(product.price, product.discount))}
                  </h4>
                </div>

                <div className={styles.actionsButtons}>
                  <Button>
                    <HiOutlinePlus size={16} />
                  </Button>
                  <Button>
                    <HiOutlineMinus size={16} />
                  </Button>
                  <h4>
                    {format(calcDiscount(product.price, product.discount))}
                  </h4>
                  <Button isUnfilled>
                    <FaTrashAlt size={16} />
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <h2>
              <MdRemoveShoppingCart size={35} /> Não existem produtos no
              carrinho
            </h2>
          )}
        </div>

        {cartProducts.length ? (
          <div className={styles.modalFooter}>
            <div>
              <span>Code</span>
              <input type="text" />
              <span>35% OFF</span>

              <div className={styles.subTotalWrapper}>
                <h5>Subtotal</h5>
                <div>
                  {cupom.code && <small>{format(total)}</small>}
                  <h4>
                    {cupom.code
                      ? format(total * cupom.discount)
                      : format(total)}
                  </h4>
                </div>
              </div>
            </div>

            <Button>Checkout</Button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
