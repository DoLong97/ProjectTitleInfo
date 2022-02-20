import React from "react";
import Image from "next/image";
import { Space, Input, Button } from "antd";
import commentAvatarIcon from "../assets/icons/comment-avatar.svg";
import sendIcon from "../assets/icons/send.svg";
import { MessageOutlined, LikeOutlined } from "@ant-design/icons";

const IconText = (props: any) => (
  <Space>
    {React.createElement(props. icon)}
    {props.text}
  </Space>
);
const Comments = () => {
  return (
    <div className="card_comment">
      <div className="title">{"12 Comments"}</div>
      <div className="comment">
        <div className="avatar">
          <Image src={commentAvatarIcon} alt="avatar" className="avatar" />
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
              text="61"
              key="list-vertical-like-o"
            />
            &emsp;
            <IconText
              icon={MessageOutlined}
              text="12"
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
          <Image src={commentAvatarIcon} alt="avatar" className="avatar" />
        </div>
        <div className="content-comment">
          <div className="info">
            <Input placeholder="Add your comment" />
          </div>
          <div className="action-comment">
            <Button className="btn-comment">
              <Image src={sendIcon} alt="sendIcon" className="sendIcon" />
              &ensp;{"Add Comment"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comments;
