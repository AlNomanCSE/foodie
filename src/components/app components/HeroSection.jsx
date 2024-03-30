import React from "react";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import Link from "next/link";

const burgerList = [
  {
    imagesrc: "/images/burgers/beef-burger.jpg",
    name: "Beef Burger",
    price: 7.99,
  },
  {
    imagesrc: "/images/burgers/chicken-burger.jpg",
    name: "Chicken Burger",
    price: 5.99,
  },
  {
    imagesrc: "/images/burgers/cheese-burger.jpg",
    name: "Chesse Burger",
    price: 9.99,
  },
  {
    imagesrc: "/images/burgers/vegan-burger.jpg",
    name: "Vegetable Burger",
    price: 6.99,
  },
];
const HeroSection = () => {
  return (
    <section className={styles.section_1}>
      <div className={styles.div_1}>
        <h1>Create custom burgers</h1>
        <p>
          Create a custom burger with the ingredients of your preference, order
          online and pickup in 30 minutes
        </p>
      </div>
      <div className={styles.cards}>
        {burgerList.map((item, index) => (
          <div className={styles.card} key={index}>
            <Image
              src={item.imagesrc}
              width={0}
              height={0}
              sizes="100vw"
              alt="beef burger"
              className={styles.image}
            />
            <div>
              <div>
                <h2>{item.name}</h2>
                <p>Starts from ${item.price}</p>
              </div>
              <button>
                <Link href={`/${item.name}`}>Create</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
