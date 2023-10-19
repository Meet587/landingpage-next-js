"use client";
import React from "react";
import { Box, Heading } from "@/ClientComponents/Theme-ui";
import { rgba } from "polished";

const FooterWidget = ({ key, val }) => {
  const handleRoute = () => {};
  return (
    <>
      <Box sx={styles.footerWidget}>
        <div>
          <div onClick={(e) => handleRoute(val.amcId)}>
            <Heading as="h4">{val.amcName}</Heading>
          </div>
        </div>
      </Box>
    </>
  );
};

export default FooterWidget;

const styles = {
  footerWidget: {
    a: {
      color: rgba("#ffff", 0.8),
      textDecoration: "none",
    },
    h4: {
      color: "#ffffff",
      fontSize: ["12px", "14px", null, "16px"],
      fontWeight: 500,
      lineHeight: [null, 1.68],
      letterSpacing: "heading",
      cursor: "pointer",
    },
    ul: {
      listStyle: "none",
      margin: "28px 0 0",
      padding: 0,
      cursor: "pointer",
      a: {
        color: rgba("#ffff", 0.8),
        textDecoration: "none",
      },
    },
  },
};
