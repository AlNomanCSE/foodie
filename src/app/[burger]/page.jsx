"use client";
import AboutSection from "@/components/app components/AboutSection";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import React, { useEffect, useState } from "react";
import styles from "./burger.module.css";
import Image from "next/image";
import Link from "next/link";

const page = ({ params }) => {
  const burgerName = decodeURIComponent(params.burger);

  const [beefpatty, setBeefpatty] = useState(0);
  const [chickenpatty, setChickenpatty] = useState(0);
  const [cheddarpatty, setCheddarpatty] = useState(0);
  const [vegetablepetty, setVegetablepetty] = useState(0);

  const [cheese, setCheese] = useState(0);
  const [salad, setSalad] = useState(0);
  const [bacon, seTBacon] = useState(0);

  const prices = {
    beefpatty: 1.5,
    chickenpatty: 0.9,
    cheddarpatty: 1,
    vegetablepetty: 0.7,
    cheese: 0.3,
    salad: 0.27,
    bacon: 0.5,
  };

  const [totalCost, setToalCost] = useState(
    burgerName === "Beef Burger"
      ? prices["beefpatty"]
      : burgerName === "Chicken Burger"
      ? prices["chickenpatty"]
      : burgerName === "Cheese Burger"
      ? prices["cheddarpatty"]
      : prices["vegetablepetty"]
  );

  const handleIncrement = (setState) => () => setState((prev) => prev + 1);
  const handleDecrement = (setState) => () =>
    setState((prev) => {
      if (prev <= 0) return 0;
      return prev - 1;
    });

  const renderIngredient = (name, setState) => (
    <div>
      <p>{name}</p>
      <p>
        +$
        {name === "Beef"
          ? prices["beefpatty"]
          : name === "Chicken"
          ? prices["chickenpatty"]
          : name === "Cheese"
          ? prices["cheddarpatty"]
          : name === "Vegetable"
          ? prices["vegetablepetty"]
          : name === "cheese"
          ? prices["cheese"]
          : name === "bacon"
          ? prices["bacon"]
          : prices["salad"]}
      </p>
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
  const sidePatties = (patty) => {
    let showPatty =
      patty === "salad" ? salad : patty === "cheese" ? cheese : bacon;

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
      : burgerName === "Cheese Burger"
      ? "cheese"
      : "vegetable";

  useEffect(() => {
    localStorage.setItem(
      "customeBurger",
      JSON.stringify({
        mainPatty: {
          name: burgerName,
          patties:
            burgerName === "Beef Burger"
              ? beefpatty
              : burgerName === "Chicken Burger"
              ? chickenpatty
              : burgerName === "Cheese Burger"
              ? cheddarpatty
              : vegetablepetty,
        },
        cheese: cheese,
        salad: salad,
        bacon: bacon,
        totalCost: totalCost,
      })
    );
  }, [
    beefpatty,
    cheddarpatty,
    chickenpatty,
    vegetablepetty,
    cheese,
    salad,
    bacon,
    totalCost,
  ]);
  useEffect(() => {
    const storeValue = JSON.parse(localStorage.getItem("customeBurger"));
    const {
      mainPatty: { name, patties: storePatties },
      cheese: storedCheese,
      salad: storedSalad,
      bacon: storedBacon,
      totalCost: storedTotalCost,
    } = storeValue;
    const total =
      (burgerName === "Beef Burger"
        ? prices["beefpatty"]
        : burgerName === "Chicken Burger"
        ? prices["chickenpatty"]
        : burgerName === "Cheese Burger"
        ? prices["cheddarpatty"]
        : prices["vegetablepetty"]) *
        storePatties +
      storedCheese * prices["cheese"] +
      storedBacon * prices["bacon"] +
      storedSalad * prices["salad"];
    setToalCost(total.toFixed(2));
  }, [
    beefpatty,
    cheddarpatty,
    chickenpatty,
    vegetablepetty,
    cheese,
    salad,
    bacon,
  ]);

  return (
    <section className={styles.section}>
      <h2>{burgerName}</h2>
      <div className={styles.burger}>
        <div className={styles.burgerTop}></div>
        {/* salad */}
        {sidePatties("salad").map((item, index) => (
          <div key={index} className={styles.salad}></div>
        ))}
        {/* chesse */}
        {sidePatties("cheese").map((item, index) => (
          <div key={index} className={styles.cheese}></div>
        ))}
        {/* main patty */}
        {mainPatties(SetmainPatties).map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        {/* bacon */}
        {sidePatties("bacon").map((item, index) => (
          <div key={index} className={styles.bacon}></div>
        ))}

        <div className={styles.burgerButtom}></div>
      </div>
      <div className={styles.addingslist}>
        <p>Price : ${totalCost}</p>
        <div>
          {burgerName === "Beef Burger" &&
            renderIngredient("Beef", setBeefpatty)}
          {burgerName === "Chicken Burger" &&
            renderIngredient("Chicken", setChickenpatty)}
          {burgerName === "Cheese Burger" &&
            renderIngredient("Cheese", setCheddarpatty)}
          {burgerName === "Vegetable Burger" &&
            renderIngredient("Vegetable", setVegetablepetty)}
          {renderIngredient("cheese", setCheese)}
          {renderIngredient("salad", setSalad)}
          {renderIngredient("bacon", seTBacon)}
        </div>
        <button>
          <Link href={`/${burgerName}/side`}>Order Now</Link>
        </button>
      </div>

      <AboutSection />
    </section>
  );
};

export default page;
