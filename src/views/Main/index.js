import Head from "next/head";
import React, { Fragment, useState, useRef } from "react";
import Image from "next/image";
import { Row, Col, List, Avatar, Space, Input, Button } from "antd";
import ImageKaSane from "../../assets/images/kasane.png";
import bookIcon from "../../assets/icons/book.svg";
import likeIcon from "../../assets/icons/like.svg";
import shareIcon from "../../assets/icons/share.svg";
import menuIcon from "../../assets/icons/menu.svg";
import iconWrapperIcon from "../../assets/icons/Union.svg";
import WrapperIcon from "../../assets/icons/icon-wrapper.svg";
import sendIcon from "../../assets/icons/send.svg";

import imageRelated from "../../assets/images/image.png";
import QRCode from "../../assets/images/qrcode.svg";
import image1 from "../../assets/images/kasane.png";
import image2 from "../../assets/images/about-kasane-1.png";
import image3 from "../../assets/images/about-kasane-2.png";
import image4 from "../../assets/images/about-kasane-3.png";

import ThumbnailClosed from "../../assets/images/ThumbnailClosed.svg";
import Thumbnail from "../../assets/images/Thumbnail.svg";

import commentAvatarIcon from "../../assets/icons/comment-avatar.svg";

import notificationIcon from "../../assets/icons/notification.svg";
import sortIcon from "../../assets/icons/sort.svg";
import { MessageOutlined, LikeOutlined } from "@ant-design/icons";

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

const dataAbout = {
  summary:
    "Kasane is an ugly girl who is severely bullied by her classmates because of her appearance; making things worse, Kasane's mother was a beautiful actress to whom Kasane is a dark contrast, even though she is as talented as her mother. However, there is nothing to do with this.",
  tags: [
    {
      id: "1",
      name: "Horror",
    },
    {
      id: "2",
      name: "Psychological",
    },
    {
      id: "3",
      name: "Seinen",
    },
  ],
  images: [image1, image2, image3, image4, image4],
};

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
    isLocked: false,
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

const dataCredits = [
  {
    avatar: commentAvatarIcon,
    title: "Kodansha",
    text: "Publisher",
  },
  {
    avatar: commentAvatarIcon,
    title: "Johnnie Christmas",
    text: "Story",
  },
  {
    avatar: commentAvatarIcon,
    title: "Jack T. Cole",
    text: "Art",
  },
];

const dataList = [
  {
    id: "1",
    label: "Last Updated",
    content: "2 days ago",
  },
  {
    id: "2",
    label: "Origin Media",
    content: "Mature (18+)",
  },
  {
    id: "3",
    label: "Color",
    content: "Black & White",
  },
  {
    id: "4",
    label: "Origin Media",
    content: "Print",
  },
  {
    id: "5",
    label: "Style Origin",
    content: "Japanese Comics (Manga)",
  },
  {
    id: "6",
    label: "Copyright",
    content: "© Daruma Matsuura / Kodansha Ltd.",
  },
  {
    id: "7",
    label: "Other Names",
    content: "Kasane -voleuse de visage",
  },
];

const MainView = () => {
  const [active, setActive] = useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Head>
      <Fragment>
        <div className="container">
          <Row gutter={[25, 16]}>
            <Col md={15} lg={16} xl={16}>
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
                  <div className="btn-read">
                    {"Read First Chapter for FREE"}
                  </div>
                  <div className="list-btn">
                    <div className="btn-share">
                      <Image
                        src={shareIcon}
                        alt="book"
                        className="image-book"
                      />
                    </div>
                    &emsp;
                    <div className="btn-share">
                      <Image src={menuIcon} alt="book" className="image-book" />
                    </div>
                  </div>
                </div>
              </div>
              {/* pricing_promotion */}
              <div className="card_pricing_promotion">
                <div className="title">{"Pricing & Promotion"}</div>
                <div className="list-item">
                  <Row gutter={[1, 1]}>
                    <Col span={12}>
                      <div className="left">
                        <div className="text-left">{"FREE"}</div>
                        <div>{"3 chapters"}</div>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="right">
                        <div className="text-right">{"LOCKED"}</div>
                        <div>{"7 chapters"}</div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <div className="list-item-promotion">
                        <div className="text-promotion">
                          <div className="text-chapper">{"Total Price"}</div>
                          <div>{"Instant access to all chapters • No Ad"}</div>
                        </div>
                        <div className="point">
                          <div className="text-right-start border-start">
                            <Image
                              src={WrapperIcon}
                              alt="book"
                              className="image-read"
                            />
                            &ensp;
                            {35}
                          </div>
                        </div>
                      </div>
                      <div className="list-item-promotion">
                        <div className="text-promotion">
                          <div className="text-chapper">
                            {"Save money with INKR Extra"}
                          </div>
                          <div>
                            {
                              "Instant access to all chapters • No Ad • Extra saving"
                            }
                          </div>
                        </div>
                        <div className="point">
                          <div className="text-right-start border-start">
                            <Image
                              src={WrapperIcon}
                              alt="book"
                              className="image-read"
                            />
                            &ensp;
                            {35}
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="lead-more">
                  {"Want to read for free? Learn more"}
                </div>
              </div>
              {/* Last read */}
              <div className="card_last_read">
                <div className="title">{"Last read"}</div>
                <div className="list-item-read">
                  <div className="image">
                    <Image
                      src={dataLastRead[0].image}
                      alt="book"
                      className="image-read"
                    />
                    <div className="progress-read"/>
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
                      <Image
                        src={notificationIcon}
                        alt="book"
                        className="image-book"
                      />
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
                        <Image
                          src={item.image}
                          alt="book"
                          className="image-read"
                        />
                        {index < 1 &&<div className="progress-read"/>}
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
            </Col>
            {/* Right */}
            <Col md={9} lg={8} xl={8}>
              {/* About */}
              <div
                className={["card_about", !active && "card_about_hidden"].join(
                  " "
                )}
              >
                <div className="title">{"About This"}</div>
                <div className="title-card">{"Genres"}</div>
                <div className="list-tags genres-tags">
                  {dataAbout.tags.map((tag) => (
                    <>
                      <div className="tag">{tag.name || ""}</div>&emsp;
                    </>
                  ))}
                </div>
                <div className="title-card">{"Summary"}</div>
                <div className="content-summary">{dataAbout.summary || ""}</div>
                {!active && (
                  <div
                    className="title-show-more"
                    onClick={() => setActive(!active)}
                  >
                    {"Show More"}
                  </div>
                )}
                <div className="list-image">
                  {dataAbout.images.map((item) => (
                    <>
                      <div className="image-about">
                        <Image
                          src={item}
                          alt="book"
                          className="image-about-summary"
                        />
                      </div>
                    </>
                  ))}
                </div>
                <div className="title-card">{"Credits"}</div>
                {dataCredits.map((item, index) => (
                  <div className="credits" key={index}>
                    <div className="avatar">
                      {
                        <Image
                          src={item.avatar}
                          alt="avatar"
                          className="avatar"
                        />
                      }
                    </div>
                    <div className="info">
                      <div className="content-credits">{item.title}</div>
                      <div className="text-credits">{item.text}</div>
                    </div>
                  </div>
                ))}
                <br />
                <div className="title-card">{"Other Facts"}</div>
                {dataList.map((item, index) => (
                  <div className="ul-list" key={index}>
                    <div className="content-text">{item.label}</div>
                    <div className="details">
                      {" :  "}&ensp;
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
              {/* Related Titles */}
              <div className="card_related_titles">
                <div className="title">{"About This"}</div>
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
                          <Image
                            src={iconWrapperIcon}
                            alt="image"
                            className="image"
                          />
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
              {/* Comment */}
              <div className="card_comment">
                <div className="title">{"12 Comments"}</div>
                <div className="comment">
                  <div className="avatar">
                    <Image
                      src={commentAvatarIcon}
                      alt="avatar"
                      className="avatar"
                    />
                  </div>
                  <div className="content-comment">
                    <div className="info">
                      <span>{"Han Solo"}</span>&emsp;
                      <span>{"Commented on Chapter 35 • 24 min. ago"}</span>
                    </div>
                    <div className="content-comment-1">
                      {
                        "I had no idea such a sequel was coming as I thought the show had ended and Kyoto Animation took a hard hit from the tragedy but currently 4 episodes in as of writing this review, and I love every second of it."
                      }
                    </div>
                    <div className="action-comment">
                      <IconText
                        icon={LikeOutlined}
                        text="156"
                        key="list-vertical-like-o"
                      />
                      &emsp;
                      <IconText
                        icon={MessageOutlined}
                        text="2"
                        key="list-vertical-message"
                      />
                      &emsp;
                      <span>{"Reply"}</span>
                    </div>
                  </div>
                </div>
                <br />
                <div className="comment">
                  <div className="avatar">
                    <Image
                      src={commentAvatarIcon}
                      alt="avatar"
                      className="avatar"
                    />
                  </div>
                  <div className="content-comment">
                    <div className="info">
                      <Input placeholder="Add your comment" />
                    </div>
                    <div className="action-comment">
                      <Button className="btn-comment">
                        <Image
                          src={sendIcon}
                          alt="sendIcon"
                          className="sendIcon"
                        />
                        &ensp;{"Add Comment"}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              {/* QR Code */}
              <div className="card_qrCode">
                <div className="container-qrCode">
                  <div className="content-app">
                    <div className="title">{"Get The App"}</div>
                    <div className="content">
                      {
                        "Love this title? Scan the QR code to continue reading right on your mobile devices."
                      }
                    </div>
                  </div>
                  <div className="qr">
                    <Image src={QRCode} alt="qr" className="qr-code" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    </>
  );
};
export default MainView;
