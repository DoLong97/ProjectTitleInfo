import React from "react";
import Image from "next/image";
import { Row, Col } from "antd";
import WrapperIcon from "../assets/icons/icon-wrapper.svg";
import iconWrapperIcon from "../assets/icons/Union.svg";

const PricingPromotion = () => {
  return (
    <div className="card_pricing_promotion">
      <div className="title">{"Pricing & Promotion"}</div>
      <div className="list-item">
        <Row gutter={[1, 1]}>
          <Col span={12}>
            <div className="left">
              <div className="text-left">{"FREE"}</div>
              <div className="number-chapters">{"3 chapters"}</div>
            </div>
          </Col>
          <Col span={12}>
            <div className="right">
              <div className="text-right">{"LOCKED"}</div>
              <div className="text-right-start-locked">
                <span className="number-chapters">{"7 chapters"}</span> &ensp;
                {`( `}
                <Image src={WrapperIcon} alt="book" className="image-read" />
                &ensp;
                {"5 / chapter)"}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="list-item-promotion">
              <div className="text-promotion">
                <div className="text-chapper">{"Total Price"}</div>
                <div className="lead-more">
                  {"Instant access to all chapters • No Ad"}
                </div>
              </div>
              <div className="point">
                <div className="text-right-start border-start">
                  <Image src={WrapperIcon} alt="book" className="image-read" />
                  &ensp;
                  <span className="number-point">{35}</span>
                </div>
              </div>
            </div>
            <div className="list-item-promotion">
              <div className="text-promotion">
                <div className="text-chapper color-text">
                  {"Save money with INKR Extra"}&ensp;
                  <Image src={iconWrapperIcon} alt="image" className="image" />
                </div>
                <div className="lead-more">
                  {"Instant access to all chapters • No Ad • Extra saving"}
                </div>
              </div>
              <div className="point">
                <div className="text-right-start border-discount">
                  <div className="point-discount">{"-50%"}</div>
                  &emsp;
                  <Image src={WrapperIcon} alt="book" className="image-read" />
                  &ensp;
                  <span className="point-old">35</span>&ensp;
                  <span className="number-point">{18}</span>
                  &emsp;
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="lead-more">{"Want to read for free? Learn more"}</div>
    </div>
  );
};
export default PricingPromotion;
