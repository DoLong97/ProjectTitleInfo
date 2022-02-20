import React from "react";
import Image from "next/image";
import iconWrapperIcon from "../../assets/icons/Union.svg";
import imageRelated from "../../assets/images/image.png";

const dataRelatedTitles = [
  {
    image: imageRelated,
    title: "Title Name 1",
    text: "PREQUEL",
    read: "45.6K",
  },
  {
    image: imageRelated,
    title: "Title Name 2",
    text: "PREQUEL",
    read: "45.6K",
  },
  {
    image: imageRelated,
    title: "Title Name 3",
    text: "PREQUEL",
    read: "45.6K",
  },
];

const RelatedTitles = () => {
  return (
    <div className="card_related_titles">
      <div className="title">{"Related Titles"}</div>
      <div>
        {dataRelatedTitles.map((item, index) => (
          <div key={index} className="list-items-related_titles">
            <div className="image-related">
              <Image
                src={item.image}
                alt="image"
                className="image-related-title"
              />
            </div>
            <div className="info-related">
              <div className="title-card">{item.title}</div>
              <div className="text-card">
                <Image src={iconWrapperIcon} alt="image" className="image" />
                &ensp;
                {"EXCLUSIVE"}
              </div>
              <div className="text">{item.text}</div>
              <div className="text">
                {item.read}
                {" reads"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RelatedTitles;
