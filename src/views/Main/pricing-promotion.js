import React from "react";
import Image from "next/image";
import { Row, Col } from "antd";
import WrapperIcon from "../../assets/icons/icon-wrapper.svg";

const PricingPromotion = () => {
  return (
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
                <div className="lead-more">
                  {"Instant access to all chapters • No Ad"}
                </div>
              </div>
              <div className="point">
                <div className="text-right-start border-start">
                  <Image src={WrapperIcon} alt="book" className="image-read" />
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
                <div className="lead-more">
                  {"Instant access to all chapters • No Ad • Extra saving"}
                </div>
              </div>
              <div className="point">
                <div className="text-right-start border-start">
                  <Image src={WrapperIcon} alt="book" className="image-read" />
                  &ensp;
                  {35}
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
