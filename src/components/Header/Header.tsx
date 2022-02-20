import styles from './styles.module.scss'

import { AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <h1><a href="/">Ab Store</a></h1>
        <nav className={styles.navMenu}>
          <ul>
            <li><a href="/watches">Watches</a></li>
            <li><a href="/eyewear">Eyewear</a></li>
            <li><a href="/accessories">Accessories</a></li>
          </ul>
        </nav>

        <div className={styles.endMenu}>
          <AiOutlineSearch size={24}/>
          <div>
            <CgProfile size={24}/>
            Log In
          </div>
          <AiOutlineShopping size={24}/>
        </div>
      </div>
    </header>
  )
}