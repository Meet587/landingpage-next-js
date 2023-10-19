import Image from "next/image";
import Link from "next/link";
import banner from "../../../public/images/banner.png";
import BSestarMF from "../../../public/images/BSestarMF.png";
import iciciLogo from "../../../public/images/icici logo.png";
import { Col, Row } from "../../components/Reactstrap/component";
import style from "./page.module.scss";
import Heading2 from "@/components/Headings/Heading2";
import { Container, Box } from "@/ClientComponents/Theme-ui";
import UltimateFeatures from "./UltimateFeatures";
import UsefulFeatures from "./UsefulFeatures";
import Faq from "./faq";

export default function Home() {
  return (
    <>
      <Container>
        <div className="" style={{ paddingTop: "130px" }}>
          <Row className="row">
            <Col md="6" sm="12" className="">
              <h2 className={`${style.main_heading}`}>
                Navigate your financial journey to create wealth
              </h2>
              <p className={style.text}>
                Investifyd is a leading investment platform and your trusted
                investment partner toward a stress-free financial future. No
                matter what your goal is, we have got you covered with our
                guidance at every step of your investment journey in SIPs and
                mutual funds.
              </p>
              <Link
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
              </Link>
              <h4 className={`${style.textMuted}`}>Powered by</h4>
              <div className="mt-3">
                <span className="me-3">
                  <Image alt="BSestarMF" src={BSestarMF} />
                </span>
                <span>
                  <Image alt="iciciLogo" src={iciciLogo} />
                </span>
              </div>
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
          <section>
            <UltimateFeatures />
          </section>
          <section>
            <UsefulFeatures />
          </section>
          <section>
            <Faq />
          </section>
        </div>
      </Container>
    </>
  );
}
const styles = {
  heading: {
    marginBottom: [60, 60, 60, 80],
  },
  features: {
    gap: ["35px 60px", 60, 60, 40, 30, 60],
    display: ["grid", "grid"],
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(2, 1fr)",
      "repeat(4, 1fr)",
    ],
  },
};
