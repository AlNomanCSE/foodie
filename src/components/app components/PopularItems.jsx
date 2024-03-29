import React from "react";
import styles from "./PopularItems.module.css";
import Image from "next/image";
const popularItems = [
  {
    imageUrl: "beef-burger.jpg",
    name: "Beef Burger",
    description: "Full blast beef burger with cheese",
  },
  {
    imageUrl: "cheese-burger.jpg",
    name: "Cheese Burger",
    description: "Full blast cheese burger",
  },
  {
    imageUrl: "club-sandwich.jpg",
    name: "Club Sandwich",
    description: "2 pieces of club sandwiches",
  },
  {
    imageUrl: "crispy-fried-chicken.jpg",
    name: "Crispy fried chicken",
    description: "4 pieces of crispy fried chicken",
  },
  {
    imageUrl: "fish-fingers.jpg",
    name: "Fish Fingers",
    description: "6 pieces of delicious Fish fingers",
  },
  {
    imageUrl: "pepperoni-pizza.jpg",
    name: "Pepperoni Pizza",
    description: "1 large pepperoni pizza",
  },
];
const PopularItems = () => {
  return (
    <section className={styles.section_3}>
      <div>
        <h2>Popular items</h2>
        <p>A few of our dishes absolutely loved by people like you</p>
      </div>
      <div className={styles.cards}>
        {popularItems.map((item, index) => (
          <div className={styles.card} key={index}>
            <Image
              src={`/images/home/popular-items/${item.imageUrl}`}
              width={0}
              height={0}
              sizes="100vw"
              alt="popular food"
              className={styles.image}
            />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button>Order</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularItems;
