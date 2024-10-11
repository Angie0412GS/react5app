import React from "react";
import styles from'../styles/Card.module.css';
import img from '../Img/img3.jfif'; 

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <img src={img} alt="gatito" className={styles.cardImage} />
      <h2 className={styles.cardTitle}>Los gatitos</h2>
      <p className={styles.cardDescription}>son criaturas curiosas y juguetonas que exploran el mundo con energía. Son conocidos por su suavidad, agilidad y su capacidad para alegrar cualquier hogar con sus ronroneos y travesuras.</p>
      <button className={styles.cardButton}>Click Aquí</button>
    </div>
  );
};

export default Card;
