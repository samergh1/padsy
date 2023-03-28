import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Payment() {
  return (
    <div>
      <div>Payment</div>
      <div>
        <PayPalScriptProvider
          options={{
            "client-id":
              "Ad77kXrkfQsLA-tbUbKADbeqEtiQPj8k_ePhGrc4IOPerODbS9TCtWQQJt-nA-lpI7zdrLqHtZr5Yr1O",
          }}
        >
          <PayPalButtons
            style={{ layout: "horizontal" }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "13.99",
                    },
                  },
                ],
              });
            }}
            onApprove={async (data, actions) => {
              const details = await actions.order.capture();
              const name = details.payer.name.given_name;
              alert("Transaction completed by " + name);
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
}
