import styles from './styles.module.scss'

type BoxProductCategory = {
  title: string;
  description: string;
  url: string;
  img: string;
}

export function BoxProductCategory({title, description, url, img}: BoxProductCategory) {
  return (
    <div className={styles.categoryBox}>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className={styles.image}>
        <a href={`/${url}`} target="_blank">Discover Now</a>
        <img src={`${img}`} alt={title} />
      </div>
    </div>
  )
}