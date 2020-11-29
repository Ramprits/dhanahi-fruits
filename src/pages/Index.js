import React from "react";

import VerticalNav4 from "../components/vertical-navs/VerticalNav4";
import Header3 from "../components/headers/Header3";
import Team1 from "../components/team/Team1";

export default function Dashboard() {
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
        bucketMain={[
          <Header3
            content={{
              header: "Fresh Fruits",
              description:
                "Get fresh fruits direct from garden.\nThe PiperNet is on it's way to revolutionize every smartphone, PC, and smart-fridge near you.",
              image: "/images/Eli_fruits.jpg",
            }}
          />,
        ]}
      />
    </React.Fragment>
  );
}
