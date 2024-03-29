"use client";
import styles from "./ImageGallery.module.css";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const imageSlids = [
  "/images/home/chicken-burger.jpg",
  "/images/home/coffee.jpg",
  "/images/home/fish-fingers.jpg",
  "/images/home/interior-1.jpg",
  "/images/home/mexican-taco.jpg",
  "/images/home/mushroom-salad.jpg",
  "/images/home/pepperoni-pizza.jpg",
];

const ImageGallery = () => {
  return (
    <section className={styles.section_2}>
      <div>
        <h2>Image gallery</h2>
        <p>
          Visit our restaurant to enjoy quality foods in a foodie environment
        </p>
      </div>
      <div>
        <Slide>
          {imageSlids.map((slideImage, index) => (
            <div
              style={{ backgroundImage: `url(${slideImage})` }}
              key={index}
              className={styles.image}
            ></div>
          ))}
        </Slide>
      </div>
    </section>
  );
};

export default ImageGallery;
