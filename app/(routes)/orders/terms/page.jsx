"use client"

import Link from "next/link";
import Conditions from "./conditons/all";
import "./terms.css";
import { useState } from "react";

export default function TermsAndConditions() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="terms">
      <div className="container">
        <div className="conditions">
          <h1>Familiarize yourself with our terms and conditions, covering payment details, delivery timelines, and other important policies.</h1>
          {Conditions.query.map((term) => (
            <ul>
              <li className="term" key={term.id}>
                <h3>{term.question}</h3>
                <p>{term.answer}</p>
              </li>
            </ul>
          ))}
          <div className="terms_bottom">
            <input type="checkbox" name="terms" id="terms" onChange={() => setIsActive(!isActive)} />
            <p>
              I agree to abide by the terms and conditions set forth in this
              document
            </p>
          </div>
          <div>
            <Link href='/orders/new' className={isActive ? "order_btn" : "order_btn_disabled_link"}>Order now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
