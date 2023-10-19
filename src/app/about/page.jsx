import Image from "next/image";
import Link from "next/link";
import banner from "../../../public/images/banner.png";
import BSestarMF from "../../../public/images/BSestarMF.png";
import iciciLogo from "../../../public/images/icici logo.png";
import { Col, Container, Row } from "../../components/Reactstrap/component";
import style from "../(home)/page.module.scss";
import Heading2 from "@/components/Headings/Heading2";

const page = () => {
  return (
    <>
      <Container style={{ marginBottom: "100px" }}>
        <div className="" style={{ paddingTop: "130px" }}>
          <Row className="row">
            <Col md="6" sm="12" className="">
              <h2 className={`${style.main_heading}`}>
                Who Are We And What We Do
              </h2>
              <br />
              <p className={style.text}>
                Investifyd is on a mission to make investments in SIPs and
                mutual funds easier for people in India. As our founders have
                deep expertise in the FinTech domain, we thrive to achieve our
                goal of making investments transparent and robust to help our
                clients build long-term wealth through the power of compounding.
                Investing in mutual funds across different funds via SIPs and
                lumpsum can give your investment portfolio a great sense of
                diversification to take your financial journey and goals to the
                next level.
              </p>
              <p className={style.text}>Think Investment. Think Investifyd.</p>
              <p className={style.text}>Get in touch with us!</p>

              {/* <Link
                className="btn btn-primary mt-5 mb-4"
                href={"https://stage.app.investifyd.com/register"}
                target="_blank"
                style={{
                  cursor: "pointer",
                  fontWeight: "600",
                  color: "background",
                  textDecoration: "none",
                }}
              >
                Get started
              </Link> */}
            </Col>

            <Col md="6" sm="12" className="">
              <Image
                src={banner}
                alt="investifyd"
                width={500}
                height={`auto`}
              />
            </Col>
          </Row>
          <section className={style.about__list}>
            <h2 className={`${style.main_heading}`}>
              Why Should You Trust Investifyd?
            </h2>
            <ul>
              <li>100% online.</li>
              <li>Client-first approach</li>
              <li>Robust Call support.</li>
              <li>End-to-end cooperation.</li>
              <li>Hassle-free investments.</li>
              <li>Transparency at every step.</li>
            </ul>
            <p>Talk to us today!</p>
          </section>

          <h2 className={`${style.main_heading}`}>We Have Partnered With</h2>
          <div className="mt-3">
            <span className="me-3">
              <Image alt="BSestarMF" src={BSestarMF} />
            </span>
            <span>
              <Image alt="iciciLogo" src={iciciLogo} />
            </span>
          </div>
        </div>
      </Container>
    </>
  );
};

export default page;
