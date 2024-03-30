"use client";
import AboutSection from "@/components/app components/AboutSection";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import React, { useState } from "react";
import styles from "./burger.module.css";
import Image from "next/image";

const page = ({ params }) => {
  const burgerName = decodeURIComponent(params.burger);

  const [totalCost, setToalCost] = useState(0);

  const [beefpatty, setBeefpatty] = useState(0);
  const [chickenpatty, setChickenpatty] = useState(0);
  const [cheddarpatty, setCheddarpatty] = useState(0);
  const [vegetablepetty, setVegetablepetty] = useState(0);

  const [chees, setCheese] = useState(0);
  const [salad, setSalad] = useState(0);
  const [bacon, seTBacon] = useState(0);

  const handleIncrement = (setState) => () => setState((prev) => prev + 1);
  const handleDecrement = (setState) => () => setState((prev) => prev - 1);

  const renderIngredient = (name, setState) => (
    <div>
      <p>{name}</p>
      <div className={styles.circle}>
        <IoIosAddCircle
          className={styles.icon}
          onClick={handleIncrement(setState)}
        />
        <IoIosRemoveCircle
          className={styles.icon}
          onClick={handleDecrement(setState)}
        />
      </div>
    </div>
  );

  const mainPatties = (patty) => {
    let showPatty =
      patty === "beef"
        ? beefpatty
        : patty === "chicken"
        ? chickenpatty
        : patty === "cheese"
        ? cheddarpatty
        : patty === "vegetable"
        ? vegetablepetty
        : null;
    const pattyImages = [];
    let x = 0;
    while (x < showPatty) {
      pattyImages.push(
        <Image
          key={x}
          src={`/images/burgers/${patty}.svg`}
          alt="patty image"
          width={0}
          height={0}
          sizes="100vw"
          className={styles.image}
        />
      );
      x++;
    }
    return pattyImages;
  };
  const SetmainPatties =
    burgerName === "Beef Burger"
      ? "beef"
      : burgerName === "Chicken Burger"
      ? "chicken"
      : burgerName === "Chesse Burger"
      ? "cheese"
      : burgerName === "Vegetable Burger"
      ? "vegetable"
      : "";
  return (
    <section className={styles.section}>
      <div className={styles.burger}>
        <div className={styles.burgerTop}></div>
        {/* salad */}
        {/* {sidePatties("vegetable").map((item, index) => (
          <div key={index}>{item}</div>
        ))} */}
        {/* chesse */}
        {mainPatties(SetmainPatties).map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        {/* main patty */}
        {/* {sidePatties("cheese").map((item, index) => (
          <div key={index}>{item}</div>
        ))} */}
        {/* bacon */}
        {/* {mainPatties("beef").map((item, index) => (
          <div key={index}>{item}</div>
        ))} */}

        <div className={styles.burgerButtom}></div>
      </div>
      <div className={styles.addingslist}>
        <p>Price :$4</p>
        <div>
          {burgerName === "Beef Burger" &&
            renderIngredient("Beef", setBeefpatty)}
          {burgerName === "Chicken Burger" &&
            renderIngredient("Chicken", setChickenpatty)}
          {burgerName === "Chesse Burger" &&
            renderIngredient("Chesse", setCheddarpatty)}
          {burgerName === "Vegetable Burger" &&
            renderIngredient("Vegetable", setVegetablepetty)}
          {renderIngredient("Cheese", setCheese)}
          {renderIngredient("Salad", setSalad)}
          {renderIngredient("Bacon", seTBacon)}
        </div>
      </div>
      <AboutSection />
    </section>
  );
};

export default page;
