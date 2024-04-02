"use client";
import React, { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import styles from "./side.module.css";
import Image from "next/image";
import Link from "next/link";
const SidePage = ({ params }) => {
  const burgerName = decodeURIComponent(params.burger);
  const [data, setData] = useState(null);
  const [total, setTotal] = useState(0);
  const [extras, setExtras] = useState("No fries and drink");
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("customeBurger")));
    setTotal(
      Number(JSON.parse(localStorage.getItem("customeBurger")).totalCost)
    );
  }, []);

  function handleClick(amount) {
    const newTotal = Number(data.totalCost) + amount;
    setTotal(newTotal);
    setExtras(
      `One ${
        amount === 6 ? "small" : amount === 8 ? "medium" : "large"
      } fries and drink`
    );
  }

  function handlelocakStorage() {
    const updateData = { ...data, totalCost: total, extras: extras };
    localStorage.setItem("customeBurger", JSON.stringify(updateData));
  }
  return (
    <section className={styles.section}>
      <div className={styles.cards}>
        <div className={styles.burgerDetails}>
          <Image
            src="/images/layout/burger.svg"
            width={0}
            height={0}
            sizes="100vw"
            alt="burger svg"
            className={styles.image}
          />
          <div className={styles.details}>
            {data && (
              <>
                <p>Your burger with</p>
                <p>Salad: {data.salad}</p>
                <p>Cheese: {data.cheese}</p>
                <p>Bacon: {data.bacon}</p>
                <p>
                  Patty: {data.mainPatty.patties} (
                  {data.mainPatty.name == "Cheese Burger"
                    ? "chadder"
                    : data.mainPatty.name == "Beef Burger"
                    ? "beef"
                    : data.mainPatty.name == "Chicken Burger"
                    ? "chicken"
                    : "vegitable"}
                  )
                </p>
                <p>Side: {extras} </p>
                <p>Total price: ${total.toFixed(2)}</p>
              </>
            )}
          </div>
        </div>
        <div className={styles.sideDrinks}>
          <Image
            src="/images/side-n-drink/drink-and-fries.svg"
            width={0}
            height={0}
            sizes="100vw"
            alt="burger svg"
            className={styles.image}
          />
          <div>
            <p>Add small drink and fries +$6</p>
            <p>1x small fries and 250ml drink</p>
          </div>
          <FaPlusCircle
            className={styles.plus}
            onClick={() => handleClick(6)}
          />
        </div>
        <div className={styles.sideDrinks}>
          <Image
            src="/images/side-n-drink/drink-and-fries.svg"
            width={0}
            height={0}
            sizes="100vw"
            alt="burger svg"
            className={styles.image}
          />
          <div>
            <p>Add medium drink and fries +$8</p>
            <p>1x medium fries and 350ml drink</p>
          </div>
          <FaPlusCircle
            className={styles.plus}
            onClick={() => handleClick(8)}
          />
        </div>
        <div className={styles.sideDrinks}>
          <Image
            src="/images/side-n-drink/drink-and-fries.svg"
            width={0}
            height={0}
            sizes="100vw"
            alt="burger svg"
            className={styles.image}
          />
          <div>
            <p>Add large drink and fries +$10</p>
            <p>1x large fries and 450ml drink</p>
          </div>
          <FaPlusCircle
            className={styles.plus}
            onClick={() => handleClick(10)}
          />
        </div>
        <div>
          <h4>Items to remove</h4>
          <label>Mayo</label> 
          <p>Ketchup</p> 
          <p>Lettuce</p> 
          <p>Mustard</p> 
          <p>Onions</p>
          <p>Pickles</p> 
          <p>Tomato</p>
        </div>
        <button onClick={handlelocakStorage}>
          <Link href={`/${burgerName}/side/order`}>Order Now</Link>
        </button>
      </div>
    </section>
  );
};

export default SidePage;
