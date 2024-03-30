import React from "react";
import styles from "./AboutSection.module.css";
const AboutSection = () => {
  return (
    <div className={styles.about}>
      <div>
        <h3>About Us</h3>
        <p>
          We are a small restaurant trying to deliver the best quality food
          possible. We love cooking delicious foods for you. Everyday we get
          inspired seeing the delightful faces of our customers when they try
          our foods.
        </p>
      </div>
      <div>
        <div>
          <h3>Opening Hours</h3>
          <p>Saturday-Thursday</p>
          <p>10am-10pm</p>
        </div>
        <div>
          <h3>Contact Info</h3>
          <div>
            <h4>Address:</h4>
            <p>Opposite of Khulna New-market, Bangladesh</p>
          </div>
          <div>
            <h4>Phone:</h4>
            <p>+8801883217001</p>
          </div>
          <div>
            <h4>Email:</h4>
            <p>info@foodie.com</p>
          </div>
        </div>
      </div>

      <div>
        <h3>Quick Links</h3>
        <p>Login</p>
        <p>Menu</p>
      </div>
    </div>
  );
};

export default AboutSection;
