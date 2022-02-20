import React from "react";
import Image from "next/image";
import shareIcon from "../assets/icons/share.svg";
import menuIcon from "../assets/icons/menu.svg";
import ImageKaSane from "../assets/images/kasane.png";
import bookIcon from "../assets/icons/book.svg";
import likeIcon from "../assets/icons/like.svg";

const dataCardInfo = {
  image: ImageKaSane,
  title: "Kasane",
  author: "By Kodansha",
  page: "Drama • 10 Chapters",
  read: "74,483",
  like: "15,863",
  tags: [
    {
      id: "1",
      name: "18+",
    },
    {
      id: "2",
      name: "NEW",
    },
    {
      id: "3",
      name: "TRENDING",
    },
    {
      id: "4",
      name: "BESTSELLER",
    },
    {
      id: "5",
      name: "MANGA",
    },
  ],
};

const CardInfo = () => {
  return (
    <div className="card_info">
      <div className="image_comics">
        <Image src={ImageKaSane} alt="image" className="image-card" />
      </div>
      <div className="info_comics">
        <div className="title">{dataCardInfo.title || ""}</div>
        <div className="author">{dataCardInfo.author || ""}</div>
        <div className="page">{dataCardInfo.page || ""}</div>
        <div className="list-read-and-like">
          <Image src={bookIcon} alt="book" className="image-book" />
          &ensp;
          <span className="count">{dataCardInfo.read}</span>&emsp;
          <Image src={likeIcon} alt="like" className="image-like" />
          &ensp;
          <span className="count">{dataCardInfo.like}</span>
        </div>
        <div className="list-tags">
          {dataCardInfo.tags.map((tag) => (
            <>
              <div className="tag">{tag.name || ""}</div>&emsp;
            </>
          ))}
        </div>
        <div className="btn-read">{"Read First Chapter for FREE"}</div>
        <div className="list-btn">
          <div className="btn-share">
            <Image src={shareIcon} alt="book" className="image-book" />
          </div>
          &emsp;
          <div className="btn-share">
            <Image src={menuIcon} alt="book" className="image-book" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardInfo;
