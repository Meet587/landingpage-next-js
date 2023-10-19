import React from "react";
import { Container, Box } from "@/ClientComponents/Theme-ui";
import { Col, Row } from "@/ClientComponents";
import style from "./footer.module.scss";
import { amcList, menuItems } from "./footer.data";
import FooterMenu from "./FooterMenu";
import FooterWidget from "./FooterWidget";

const Footer = async () => {
  // const amcList = await fetch(`/data-tool/mffund/amc`, {
  //   cache: "force-cache",
  // });
  return (
    <>
      <Box as="footer" variant="layout.footer">
        <Container>
          <>
            <Box sx={styles.footerTopInner}>
              {amcList.data.map(
                (val, id) =>
                  val.amcId !== 0 && <FooterWidget key={id} val={val} />
              )}
            </Box>
          </>
          <>
            <div className={style.line}></div>
            <div className={style.calcGrid}>
              {menuItems.map((val, i, arr) => {
                return (
                  <div style={{ width: "100%" }} key={`meni_${i}`}>
                    <FooterMenu item={val.items} title={val.title} />
                  </div>
                );
              })}
            </div>
          </>
          <>
            <div className={style.line}></div>
            <div>
              <p>Finstudioz Technologies Private Limited</p>
              <p>CIN No : U67200GJ2022PTC133848</p>
              <p>
                Registered Address: A-203, Privilion, Ambli BRTS Road, Iscon
                Cross Road, Ahmedabad, Gujarat, India 380059.
              </p>
              <p>Email id : care@investifyd.com</p>

              <Row>
                <Col md="6" sm="12">
                  <div>AMFI Registered Mutual fund Distributor</div>
                  <div>AMFI Registration No : 251659</div>
                </Col>
                <Col md="6" sm="12">
                  <div>BSE Star MF Member</div>
                  <div>Registration no : 56503</div>
                </Col>
              </Row>

              <div className="mt-3 pb-3">
                Disclaimer : Mutual fund investment are subject to market risk.
                Please read all scheme related documents properly before
                investing. Past Performance is not indicative of future returns.
                Please consider your specific investment requirements before
                investing before choosing a fund or designing a portfolio that
                suits your needs.
              </div>
            </div>
          </>
        </Container>
      </Box>
    </>
  );
};

export default Footer;

const styles = {
  flex_div: {
    display: ["flex"],
    flexDirection: ["column", null, null, null, "row"],
  },
  footerTopInner: {
    gap: [17, null, null, null, 17, 30],
    mb: [50],
    display: ["grid"],
    gridTemplateColumns: [
      "repeat(2, 1fr)",
      null,
      null,
      "repeat(3, 1fr)",
      "repeat(5, 1fr)",
    ],
  },
  subscribeInput: {
    height: "65px",
    padding: "0 25px",
    fontSize: "16px",
    borderRadius: "4px",
    backgroundColor: "#fff",
    width: "240px",
    border: "none",
    outline: "none",
    boxShadow: "0px 10px 50px rgba(48,98,145,0.08)",
  },
  subscribeInputBtn: {
    fontSize: ["16px", null, null, null, "20px"],
    width: ["auto", null, null, null, "180px"],
  },
  footerInner: {
    borderTop: `1px solid #3adc90`,
    display: ["block", null, "flex"],
    alignItems: "center",
    justifyContent: "space-between",
    padding: "35px 0 10px",
    "@media only screen and (max-width: 400px)": {
      pb: 10,
    },
    width: "100%",
  },
  copyright: {
    display: ["flex"],
    alignItems: "center",
    flexDirection: ["column", null, null, null, "row"],
    // span: {
    //   fontSize: "14px",
    //   lineHeight: 1.29,
    //   color: "black",
    //   mt: ["18px", "18px", "7px"],
    // },
  },
  footerNav: {
    listStyle: "none",
    margin: ["15px 0 0", "15px 0 0", "0"],
    padding: 0,
    display: ["flex"],
    flexWrap: ["wrap", null, null, "unset"],
    justifyContent: ["center", null, "flex-start"],
    "li + li": {
      ml: ["18px", "18px", "20px"],
      "@media only screen and (max-width: 400px)": {
        mb: "10px",
      },
    },
    a: {
      color: "textSecondary",
    },
  },
};
