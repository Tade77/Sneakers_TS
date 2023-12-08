import React from "react";
import "./PaymentStyle.css";
import PayStack from "../Paystack/PayStack";
import { collectionsType } from "../../type";

const progress = [
  {
    name: "cart",
    id: 0,
  },
  {
    name: "information",
    id: 1,
  },
  {
    name: "shipping",
    id: 2,
  },
  {
    name: "payment",
    id: 3,
  },
];

const OnlinePayment = ({ collection }: any) => {
  return (
    <div className="payment">
      <section className="paystack">
        <h1 className="title">PayStack</h1>
        <div className="pro--list">
          {progress.map((p, id) => (
            <div key={id}>
              <li>
                <p>{p.name}&gt;</p>
              </li>
            </div>
          ))}
        </div>
        <div className="pay--option">
          <p style={{ fontSize: "22px", fontWeight: "800" }}>
            Express Checkout
          </p>
          <p className="pay--info">
            Pay with your debit card, credit card, USSD, or bank account
          </p>
          <div className="diff">
            <p className="or">Or</p>
          </div>
          <div className="">
            <img
              className="paypal--img"
              src="/public/Women/paypal.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <PayStack />
        </div>
      </section>
    </div>
  );
};

export default OnlinePayment;
