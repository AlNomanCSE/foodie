"use client";
import React, { useEffect } from "react";
import styles from "./menu.module.css";
import AboutSection from "@/components/app components/AboutSection";
import Image from "next/image";
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
const page = () => {
  useEffect(() => {
    const storedValue = localStorage.getItem("customeBurger");
    console.log(JSON.parse(storedValue));
  }, []);
  return (
    <section className={styles.section}>
      <div>
        <h2> Choose, learn and order</h2>
        <p>Get the food you like! Order and pickup hot in 30 minutes</p>
      </div>
      <div className={styles.menuCards}>
        {menuList.map((item, index) => (
          <div key={index} className={styles.menuCard}>
            <Image
              src={item.imageUrl}
              width={0}
              height={0}
              sizes="100vw"
              alt="menu item"
              className={styles.image}
            />
            <div>
              <div>
                <h2>{item.name}</h2>
                <p>Starts from ${item.price}</p>
              </div>
              <button>Order Now</button>
            </div>
          </div>
        ))}
      </div>
      <AboutSection />
    </section>
  );
};

export default page;
