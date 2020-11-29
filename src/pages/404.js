import React from "react";

import HttpCode1 from "../components/http-codes/HttpCode1";
import VerticalNav4 from "../components/vertical-navs/VerticalNav";

export default function NotFoundPage() {
  return (
    <React.Fragment>
      <VerticalNav4
        content={{
          brand: {
            text: "Dhanai Fruits",
            image: "/images/Dhanai_fruits-logo-white.png",
            width: "65",
          },
          "brand-small": {
            text: "Dni Fruits",
            image: "/images/Dhanai_fruits-logo-white.png",
            width: "60",
          },
          link1: "Dashboard",
          link2: "Product",
          link4: "Contact",
        }}
        bucketMain={[<HttpCode1 content={null} />]}
      />
    </React.Fragment>
  );
}
