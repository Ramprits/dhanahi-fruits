import React from "react";

import SignIn from "../components/auth/login";

export default function Login() {
  return (
    <React.Fragment>
      <SignIn
        content={{
          brand: {
            text: "Dhanai Fruits Mart",
            image: "/images/Dhanai_fruits-logo-black.png",
            width: "120",
          },
        }}
      />
    </React.Fragment>
  );
}
