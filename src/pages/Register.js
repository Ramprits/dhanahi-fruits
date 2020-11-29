import React from "react";
import Register from "../components/auth/register";

export default function RegisterPage() {
  return (
    <React.Fragment>
      <Register
        content={{
          brand: {
            text: "Dhanai Fruits Mart",
            image: "/images/Dhanai_fruits-logo-black.png",
            width: "120",
          },
          header: "Welcome to Dhanai Fruits Mart",
        }}
      />
    </React.Fragment>
  );
}
