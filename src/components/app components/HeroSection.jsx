import React from "react";
import styles from "./HeroSection.module.css";
import Image from "next/image";
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
        <div className={styles.card}>
          <Image
            src="/images/burgers/beef-burger.jpg"
            width={0}
            height={0}
            sizes="100vw"
            alt="beef burger"
            className={styles.image}
          />
          <div>
            <div>
              <h2>Beef Burger</h2>
              <p>Starts from $9.99</p>
            </div>
            <button>Create</button>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src="/images/burgers/chicken-burger.jpg"
            width={0}
            height={0}
            sizes="100vw"
            alt="beef burger"
            className={styles.image}
          />
          <div>
            <div>
              <h2>Chicken Burger</h2>
              <p>Starts from $9.99</p>
            </div>
            <button>Create</button>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src="/images/burgers/cheese-burger.jpg"
            width={0}
            height={0}
            sizes="100vw"
            alt="beef burger"
            className={styles.image}
          />
          <div>
            <div>
              <h2>Chesse Burger</h2>
              <p>Starts from $9.99</p>
            </div>
            <button>Create</button>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src="/images/burgers/vegan-burger.jpg"
            width={0}
            height={0}
            sizes="100vw"
            alt="beef burger"
            className={styles.image}
          />
          <div>
            <div>
              <h2>Vegan Burger</h2>
              <p>Starts from $9.99</p>
            </div>
            <button>Create</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
