import React from "react";
import Image from "next/image";
import WrapperIcon from "../assets/icons/icon-wrapper.svg";
import ThumbnailClosed from "../assets/images/ThumbnailClosed.svg";
import Thumbnail from "../assets/images/Thumbnail.svg";
import notificationIcon from "../assets/icons/notification.svg";
import sortIcon from "../assets/icons/sort.svg";

const dataLastRead = [
  {
    id: "1",
    image: Thumbnail,
    text: "Chapter 1",
    date: "Last read 2 days ago",
    start: 5,
    isLocked: false,
  },
  {
    id: "2",
    image: Thumbnail,
    text: "Chapter 2",
    date: "Last read 2 days ago",
    start: 5,
    isLocked: false,
  },
  {
    id: "3",
    image: Thumbnail,
    text: "Chapter 3",
    date: "Last read 2 days ago",
    start: 5,
    isLocked: false,
  },
  {
    id: "4",
    image: ThumbnailClosed,
    text: "Chapter 4",
    date: "Last read 2 days ago",
    start: 5,
    isLocked: true,
  },
  {
    id: "5",
    image: ThumbnailClosed,
    text: "Chapter 5",
    date: "Last read 2 days ago",
    start: 5,
    isLocked: true,
  },
  {
    id: "6",
    image: ThumbnailClosed,
    text: "Chapter 6",
    date: "Last read 2 days ago",
    start: 5,
    isLocked: true,
  },
  {
    id: "7",
    image: ThumbnailClosed,
    text: "Chapter 7",
    date: "Last read 2 days ago",
    start: 5,
    isLocked: true,
  },
  {
    id: "8",
    image: ThumbnailClosed,
    text: "Chapter 8",
    date: "Last read 2 days ago",
    start: 5,
    isLocked: true,
  },
  {
    id: "9",
    image: ThumbnailClosed,
    text: "Chapter 9",
    date: "Last read 2 days ago",
    start: 5,
    isLocked: true,
  },
  {
    id: "10",
    image: ThumbnailClosed,
    text: "Chapter 10",
    date: "Last read 2 days ago",
    start: 5,
    isLocked: true,
  },
];

const CardLastRead = () => {
  return (
    <div className="card_last_read">
      <div className="title">{"Last read"}</div>
      <div className="list-item-read">
        <div className="image">
          <Image
            src={dataLastRead[0].image}
            alt="book"
            className="image-read"
          />
          <div className="progress-read" />
        </div>
        <div className="info">
          <div className="text-chapper">{dataLastRead[0].text}</div>
          <div>{dataLastRead[0].date}</div>
        </div>
      </div>
      <div className="title-chapper">
        {"10 chapters"}
        <div className="list-btn">
          <div className="btn-share">
            <Image src={notificationIcon} alt="book" className="image-book" />
          </div>
          &emsp;
          <div className="btn-share">
            <Image src={sortIcon} alt="book" className="image-book" />
          </div>
        </div>
      </div>
      <div className="content">{"New chapter every Thursday"}</div>
      <div>
        {dataLastRead.map((item, index) => (
          <div className="list-item-read padding-card" key={index}>
            <div className="image">
              <Image src={item.image} alt="book" className="image-read" />
              {index < 1 && <div className="progress-read" />}
            </div>
            <div className="info-read">
              <div className="text-chapper">{item.text}</div>
              <div className="text-right">
                {item.isLocked ? (
                  <div className="text-right-start">
                    <Image
                      src={WrapperIcon}
                      alt="book"
                      className="image-read"
                    />
                    &ensp;
                    {item.start}
                  </div>
                ) : (
                  "FREE"
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CardLastRead;
