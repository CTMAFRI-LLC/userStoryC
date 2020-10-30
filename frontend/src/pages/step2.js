
import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

export default function MainSection2() {
  // Initializeing state of product
  const [product, setProduct] = useState({
    name: "Membership Subscription",
    price: 9.99,
    productBy: "CreaTech Motives",
  });

  // Function to execute the payment function
  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",   // Defining headers to prevents errors from server
    };

    return fetch(`http://localhost:4000/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),  //Converting the outgoing data to string 
    })
      .then((res) => {  //what to do when the respons comes in
        console.log("RESPONSE FROM SERVER", res);
        const { status } = res;
        console.log("STATUS RETURNED: ", status);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    // JSX of main container
    <>
      <div class="main__content">
        <div class="container">
          <a>
            <img
              class="close__icon"
              src="assets/img/SVG/CircleButton.svg"
              alt=""
            />
          </a>
          <h2 class="heading__2">Setup up your payment</h2>
          <h3>Step 2 of 3</h3>
          <p>
            Your membership starts <br />
            <span>as soon as you set up payment.</span>
          </p>

          {/* Including Stripe Component for communication with Stripe API */}
          <StripeCheckout
            stripeKey={process.env.REACT_APP_KEY} //Stripe key hidden with dotenv
            token={makePayment}
            name={product.name}
            amount={product.price * 100}
          >
            <div class="payment__card">
              Pay with Debit or Credit Card
              <ul class="images">
                <li>
                  <img class="img_2" src="assets/img/Visa.png" alt="" />
                </li>
                <li>
                  <img class="img_1" src="assets/img/Mastercard.png" alt="" />
                </li>
              </ul>
              <a>
                <img src="assets/img/SVG/RightArrow_Small.svg" alt="" />
              </a>
            </div>
          </StripeCheckout>
        </div>
      </div>
    </>
    // JSX of main container
  );
}


