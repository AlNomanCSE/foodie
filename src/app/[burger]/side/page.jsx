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

  const [itemTOremove, setItemTOremove] = useState({
    mayo: false,
    ketchup: false,
    lettuce: false,
    mustard: false,
    onions: false,
    labelickles: false,
    tomato: false,
  });
  function handleChange(event) {
    const { name, checked } = event.target;
    setItemTOremove({ ...itemTOremove, [name]: checked });
  }
  const finalListOfRemoveItems = Object.keys(itemTOremove).filter(
    (item) => itemTOremove[item]
  );
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
    const updateData = {
      ...data,
      totalCost: total,
      extras,
      finalListOfRemoveItems,
    };
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
        <div className={styles.itemToRemove}>
          <h4>Items to remove</h4>
          <div>
            <div>
              <label htmlFor="mayo">Mayo</label>
              <input
                type="checkbox"
                name="mayo"
                checked={itemTOremove.mayo}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="ketchup">Ketchup</label>
              <input
                type="checkbox"
                name="ketchup"
                checked={itemTOremove.ketchup}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lettuce">Lettuce</label>
              <input
                type="checkbox"
                name="lettuce"
                checked={itemTOremove.lettuce}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="mustard">Mustard</label>
              <input
                type="checkbox"
                name="mustard"
                checked={itemTOremove.mustard}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="onions">Onions</label>
              <input
                type="checkbox"
                name="onions"
                checked={itemTOremove.onions}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="labelickles">labelickles</label>
              <input
                type="checkbox"
                name="labelickles"
                checked={itemTOremove.labelickles}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="tomato">Tomato</label>
              <input
                type="checkbox"
                name="tomato"
                checked={itemTOremove.tomato}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button onClick={handlelocakStorage}>
          <Link href={`/${burgerName}/side/order`}>Confirm</Link>
        </button>
      </div>
    </section>
  );
};

export default SidePage;
