import Head from "next/head";
import React, { Fragment } from "react";
import { Row, Col } from "antd";
import CardInfo from "./card-info";
import PricingPromotion from "./pricing-promotion";
import CardLastRead from "./card-last-read";
import About from "./about";
import RelatedTitles from "./related-titles";
import Comments from "./comments";
import QrCode from "./qr-code";

const MainView = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Head>
      <Fragment>
        <div className="container">
          <Row gutter={[25, 16]}>
            {/* Left */}
            <Col md={15} lg={16} xl={16}>
              <CardInfo />
              {/* pricing_promotion */}
              <PricingPromotion />
              {/* Last read */}
              <CardLastRead />
            </Col>
            {/* Right */}
            <Col md={9} lg={8} xl={8}>
              {/* About */}
              <About />
              {/* Related Titles */}
              <RelatedTitles />
              {/* Comment */}
              <Comments />
              {/* QR Code */}
              <QrCode />
            </Col>
          </Row>
        </div>
      </Fragment>
    </>
  );
};
export default MainView;
