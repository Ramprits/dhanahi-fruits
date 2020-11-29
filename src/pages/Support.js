import React from "react";

import HowItWorks2 from "../components/how-it-works/HowItWorks2";
import VerticalNav4 from "../components/vertical-navs/VerticalNav4";

export default function Support() {
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
        bucketMain={[<HowItWorks2 content={null} />]}
      />
    </React.Fragment>
  );
}
