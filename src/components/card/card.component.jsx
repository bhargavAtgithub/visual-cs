import React from "react";

import "./card.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import Title from "../title/title.component";
import Description from "../description/description.component";

const Card = ({ tags, title, description }) => (
  <div className="card">
    <div className="tags">
      {tags &&
        tags.map((tag, key) => {
          console.log(tag);
          return <CustomButton tag_data={tag} key={key} />;
        })}
    </div>
    <Title title={title} />
    <Description description={description} />
  </div>
);

export default Card;
