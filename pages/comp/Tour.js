import styles from "../../styles/Tour.module.css";
import TourList from "./TourList";
export default function Tour({ tours, removeList }) {
  return (
    <div className={styles.ToursContainer}>
      <div className={styles.TourTitle}>
        <h1>Tour</h1>
      </div>
      <div className={styles.Underline}></div>
      <div className={styles.TourMap}>
        {tours.map((tour) => {
          return (
            <TourList
              key={tour.id}
              {...tour}
              removeList={removeList}
            ></TourList>
          );
        })}
      </div>
    </div>
  );
}
