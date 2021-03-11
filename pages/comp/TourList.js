import { useState } from "react";
import styles from "../../styles/Tour.module.css";
export default function TourList({ id, name, info, image, price, removeList }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className={styles.TourListContainer}>
      <div className={styles.TourListDisplay}>
        <img src={image} alt={name} className={styles.TourListImage} />
        <div className={styles.TourListBottom}>
          <h4>{name}</h4>
          <h2>$ {price}</h2>
          <p className={styles.TourListP}>
            {/* Read More using : for if else  */}
            {readMore
              ? info
              : `${info.substring(0, 150)}
            ...`}
            <button
              className={styles.TourListPButton}
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? `show less` : `read more`}
            </button>
          </p>
          <button
            className={styles.TourListButton}
            onClick={() => removeList(id)}
          >
            Pass
          </button>
        </div>
      </div>
    </div>
  );
}
