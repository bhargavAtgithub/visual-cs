import React from "react";

import Card from "../components/card/card.component";
import Navbar from "../components/navbar/navbar.component";

import image from "../assets/icons/rocket.png";

const HomePage = () => {
  const tags = [
    { title: "algorithms", color: "salmon", type: "text" },
    { title: "data structures", color: "gold", type: "text" },
    { title: "sort", color: "aqua", type: "text" },
    {
      title: "search",
      color: "salmon",
      type: "icon",
      location: image,
      size: "sm",
    },
  ];
  return (
    <div className="homepage">
      <Navbar />
      <Card
        tags={tags}
        title="Something that is creative but not funny"
        description="There is a messy data and few students gathered together to keep all the data together so they can avoid the possibility of loosing data. In order to store it, they used a linked list to store all the data. 
Later when they thought of doing some analysis on the data, they found the data to be messy.
"
      />
    </div>
  );
};
export default HomePage;
