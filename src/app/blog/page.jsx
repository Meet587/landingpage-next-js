import React, { Suspense } from "react";
import { Box, Container, Heading } from "@/ClientComponents/Theme-ui";
import { Col, Row } from "@/ClientComponents/index";
import blogStyle from "./blog.module.scss";
import BlogCard from "./BlogCard";
import moment from "moment/moment";
import Loading from "./loading";

const page = () => {
  let load = false;
  const blog = [
    {
      id: 0,
      title:
        "Why Emergency Fund Plays a Critical Role in Your Financial Planning",
      seoTitle: "How to Build Your Emergency Fund with an Online Calculator",
      metaDescription:
        "Read our blog to know how creating emergency funds can bolster your financial planning and how investing in liquid mutual funds can help you achieve your goals. ",
      subDesc:
        "An emergency fund is like a financial safety net intentionally kept aside in effectively managing financial emergencies or crises. Emergency can come in any shape and size. Emergency fund is a must in today’s world as you can’t fully rely on insurance and debts, which makes them an excellent avenue to park funds in case of emergencies. Creating an emergency fund is not a one time affair, it needs to be an ongoing activity. Emergency funds must be liquid in nature as quick accessibility is must which is why liquidity should be the primary goal followed by returns and minimal risk quotient. ",
      author: "Investifyd",
      author_img: "logo icon.png",
      img: "Emergency-Fund.jpg",
      date: moment("10-07-2023", "DD-MM-YYYY").format("DD MMM YYYY"),
      read: "5 min read",
      keyword: "",
    },
    {
      id: 1,
      title: "Mahila Samman Savings Certificate 2023",
      seoTitle: "Mahila Samman Savings Certificate 2023",
      metaDescription:
        "“Mahila Samman Savings Certificate 2023 was announced by the honorable Finance Minister, Smt. Nirmala Sitharaman in her Budget speech 2023-24. Read more to know more about eligibility, how to apply, documents, interest rate, tax, and more.”",
      subDesc:
        "An emergency fund is like a financial safety net intentionally kept aside in effectively managing financial emergencies or crises. Emergency can come in any shape and size. Emergency fund is a must in today’s world as you can’t fully rely on insurance and debts, which makes them an excellent avenue to park funds in case of emergencies. Creating an emergency fund is not a one time affair, it needs to be an ongoing activity. Emergency funds must be liquid in nature as quick accessibility is must which is why liquidity should be the primary goal followed by returns and minimal risk quotient. ",
      author: "Investifyd",
      author_img: "logo icon.png",
      img: "MSSC.jpg",
      date: moment("20-07-2023", "DD-MM-YYYY").format("DD MMM YYYY"),
      read: "3 min read",
      keyword: "",
    },
    {
      id: 2,
      title:
        " Explore the major reasons why you should invest in Mutual Funds ",
      seoTitle:
        "Why mutual funds are a great investment avenue? / Why should you invest in Mutual Funds?",
      metaDescription:
        "This blog highlights why you should prioritize investing in Mutual Funds in 2023 and beyond. Read now.",
      subDesc:
        "This blog highlights why you should prioritize investing in Mutual Funds in 2023 and beyond. Read now.",
      author: "Investifyd",
      author_img: "logo icon.png",
      img: "mutualFund.png",
      date: moment("11-10-2023", "DD-MM-YYYY").format("DD MMM YYYY"),
      read: "3 min read",
      keyword: "Invest in SIPs, Invest in Mutual Funds",
    },
  ];
  /**
   * Converts a string into a URL-friendly slug format.
   * @param {string} str - The string to be converted into a slug format.
   * @returns {string} - The converted string in slug format.
   */
  function slugify(str) {
    // Trim the input string by removing any leading or trailing whitespace.
    str = str.trim();

    // Convert the trimmed string to lowercase.
    str = str.toLowerCase();

    // Replace any accented characters or special characters with their corresponding non-accented or non-special characters.
    const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    const to = "aaaaeeeeiiiioooouuuunc------";
    for (let i = 0; i < from.length; i++) {
      str = str.replace(new RegExp(from[i], "g"), to[i]);
    }

    // Remove any remaining invalid characters that are not alphanumeric, whitespace, or hyphen.
    str = str.replace(/[^a-z0-9 -]/g, "");

    // Collapse any consecutive whitespace into a single hyphen.
    str = str.replace(/\s+/g, "-");

    // Collapse any consecutive hyphens into a single hyphen.
    str = str.replace(/-+/g, "-");

    return str;
  }
  return (
    <>
      <div style={{ marginTop: "8rem", marginBottom: "5rem" }}>
        <Box as="section" id="blog" variant="section.blog">
          <Container>
            <Heading sx={styles.title}>Investifyd Blog</Heading>

            {/* <EmergencyFund blogStyle={style} /> */}
            <div>
              {" "}
              <div className="" style={{ margin: "0 auto" }}>
                <Row>
                  {blog.map((blog, index) => {
                    return (
                      <Col
                        lg="4"
                        md="6"
                        sm={12}
                        key={index + blog.id}
                        className={" placeholder-glow"}
                        // onClick={(e) =>
                        //   typeof window !== "undefined" &&
                        //   localStorage.setItem("blog", JSON.stringify(blog))
                        // }
                      >
                        <Suspense fallback={<Loading />}>
                          <BlogCard
                            blog={blog}
                            blogStyle={blogStyle}
                            load={load}
                            slugify={slugify}
                            index={index}
                          />
                        </Suspense>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </div>
          </Container>
        </Box>
      </div>
    </>
  );
};

export default page;

const styles = {
  heading: {
    marginBottom: "3rem",
  },
  title: {
    color: "heading",
    fontWeight: 500,
    fontSize: ["24px", "30px"],
    lineHeight: [1.25, 1.5],
    letterSpacing: "heading",
    marginBottom: ["2rem", "2rem"],
    marginTop: ["2rem", "2rem"],
    textAlign: "center",
  },
};
