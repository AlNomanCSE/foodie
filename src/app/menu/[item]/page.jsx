import React from "react";
import styles from "./item.module.css";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
import AboutSection from "@/components/app components/AboutSection";
const menuList = [
  {
    imageUrl: "/images/menu/cheese-pizza.jpg",
    name: "Cheese Pizza",
    price: 5.99,
  },
  {
    imageUrl: "/images/menu/club-sandwich.jpg",
    name: "Club Sandwich",
    price: 12.99,
  },
  {
    imageUrl: "/images/menu/crispy-fried-chicken.jpg",
    name: "Crispy Chicken",
    price: 9.99,
  },
  {
    imageUrl: "/images/menu/fish-fingers.jpg",
    name: "Fish Fingers",
    price: 5.99,
  },
  {
    imageUrl: "/images/menu/mexican-taco.jpg",
    name: "Mexican Taco",
    price: 9.99,
  },
  {
    imageUrl: "/images/menu/mushroom-salad.jpg",
    name: "Mushroom salad",
    price: 9.99,
  },
  {
    imageUrl: "/images/menu/pasta.jpg",
    name: "Pasta",
    price: 5.99,
  },
  {
    imageUrl: "/images/menu/pepperoni-pizza.jpg",
    name: "Pepperoni Pizza",
    price: 5.99,
  },
  {
    imageUrl: "/images/menu/sub-sandwich.jpg",
    name: "Sub Sandwich",
    price: 5.99,
  },
];
const page = ({ params }) => {
  const paramsName = decodeURI(params.item);
  const menuObject = menuList.find((item) => item.name === paramsName);

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div>
          <h2>{menuObject.name}</h2>
          <Image
            src={menuObject.imageUrl}
            height={0}
            width={0}
            sizes="100vw"
            alt="menu item"
            className={styles.image}
          />
        </div>
        <div className={styles.buttom}>
          <div>
            <h4>Ingredients</h4>
            <p>
              <TiTick />
              Turkey
            </p>
            <p>
              <TiTick />
              Bacon
            </p>
            <p>
              <TiTick />
              Ham
            </p>
            <p>
              <TiTick />
              Cheese
            </p>
            <p>
              <TiTick />
              Lettuce
            </p>
            <p>
              <TiTick />
              Tomato
            </p>
            <p>
              <TiTick />
              Mayo
            </p>
          </div>
          <div>
            <h4>Calorie (approx)</h4>
            <p>250</p>
            <h4>Quantity</h4>
            <p>1</p>
            <h4>Pickup time</h4>
            <p>45 minutes</p>
            <h4>Price</h4>
            <p>$5.99</p>
          </div>
        </div>
        <button>Order</button>
      </div>
      <AboutSection />
    </section>
  );
};

export default page;
