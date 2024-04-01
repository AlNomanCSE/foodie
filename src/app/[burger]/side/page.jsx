"use client";
import React, { useEffect, useState } from "react";
import styles from "./side.module.css";
import Image from "next/image";
const SidePage = () => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("customeBurger")));
  }, []);
  console.log(data);
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
                  Patty: {data.mainPatty.patties} ({" "}
                  {data.mainPatty.name == "Cheese Burger"
                    ? "chadder"
                    : data.mainPatty.name == "Beef Burger"
                    ? "beef"
                    : data.mainPatty.name == "Chicken Burger"
                    ? "chicken"
                    : "vegitable"}
                  )
                </p>
                <p>Side: No fries and drink </p>
                <p>Total price: ${data.totalCost}</p>
              </>
            )}
          </div>
        </div>
        <div className={styles.burgerDetails}>
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
        </div>
        <div className={styles.burgerDetails}>
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
        </div>
        <div className={styles.burgerDetails}>
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
        </div>
      </div>
    </section>
  );
};

export default SidePage;
