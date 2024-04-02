"use client";
import React, { useState, useEffect } from "react";
import styless from "./Order.module.css";
import Image from "next/image";
const OrderPage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("customeBurger")));
  }, []);

  return (
    <section className={styless.section}>
      <div>
        {data && (
          <div>
            <div>
              <h2>{data.mainPatty.name}</h2>
              <p>Patty - {data.mainPatty.patties}</p>
              <h3>Extras</h3>
              <p>cheese - {data.cheese}</p>
              <p>salad - {data.salad}</p>
              <p>Patty - {data.bacon}</p>
              <p>
                WIth <strong>{data.extras}</strong>
              </p>
              {data.finalListOfRemoveItems.length > 0 && (
                <div>
                  <span style={{ color: "red" }}>
                    <strong>No :</strong>{" "}
                  </span>
                  {data.finalListOfRemoveItems.join(", ")}
                </div>
              )}
              <hr />
              <h4>Total : ${data.totalCost}</h4>
            </div>
            <div>
              <Image
                src="/images/layout/burger.svg"
                alt="burger"
                width={0}
                height={0}
                className={styless.image1}
                priority
              />
              <Image
                src="/images/side-n-drink/drink-and-fries.svg"
                alt="burger"
                width={0}
                height={0}
                className={styless.image2}
                priority
              />
            </div>
          </div>
        )}
        <button>Order Now</button>
      </div>
    </section>
  );
};

export default OrderPage;
