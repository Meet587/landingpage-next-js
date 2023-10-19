import Accordion from "@/components/accordion/Accordian";
import Heading2 from "@/components/Headings/Heading2";
import { Box, Container, Heading, Text } from "@/ClientComponents/Theme-ui";

const faqs = [
  {
    title: "Why should I Invest through Investifyd?",
    contents: (
      <div>
        Investifyd helps you invest your money online in financial products
        after thoroughly understanding your risk level and time frame. We also
        have SIP, lump sum, crorepati, and PPF calculators for you to better
        understand your financial goal. Not just that, you always have our
        expert support to keep a track of your goals. You can invest in any
        mutual fund scheme of your choice. can also invest thru our funds
        screener in the choice of your fund.
      </div>
    ),
  },
  {
    title: "Is Investifyd trustworthy?",
    contents: (
      <div>
        Investifyd uses financial-grade security to ensure smoother
        transactions. We never touch your money. Your investment is done through
        your bank account and directly placed on our transaction partner, BSE
        which transfers the money to mutual fund companies. Your investment is
        confirmed by an SMS and email by the mutual fund company and by your
        investing partner Investifyd.
      </div>
    ),
  },
  {
    title: `What if Investifyd shuts down?`,
    contents: (
      <div>
        We are on our toes to make sure that doesn’t happen ever. Just in case
        if it’s a doomsday for us, you need not worry as your investment is
        directly with the mutual fund company. We will also ensure a smooth
        transition just in case we shut down. Moreover, you can directly
        interact with mutual fund companies related to your transaction and your
        investment. However, we are here to stay, we are deeply committed to you
        and your financial dreams.
      </div>
    ),
  },
  {
    title: `Is Investifyd regulated?`,
    contents: (
      <div>
        Investifyd is regulated by SEBI and licensed by AMFI. We follow all the
        relevant norms by the regulators and strictly adhere to all the
        protocols and regulations.
      </div>
    ),
  },
  {
    title: `Why do you ask to fill in the personal information form, information like pan card number, bank details, etc?`,
    contents: (
      <div>
        We strictly follow SEBI norms for investors who are willing to invest in
        mutual funds. Being a part of SEBI, RTA, and financial fraternity, we
        require certain information to be filled and update the same in their
        records. Rest assured, your information is safe with us.
      </div>
    ),
  },
  {
    title: `Is my data secured?`,
    contents: (
      <div>
        Yes, your data is secured with financial-grade security. We use AES-256
        encryption for your data security. Further, we never ever intend or will
        sell your data to any advertisers or any third party, ever. Your data is
        totally safe with us.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <Box as="section" id="faq" variant="section.faq">
      <Container>
        <div className="mb-5">
          <Heading2
            title="Investifyd FAQs"
            text="Our support team ready to help you, please contact with them"
          />
        </div>
        <Box
          sx={{
            display: "flex",
            width: ["100%", null, null, "650px", "745px"],
            flexDirection: "column",
            mx: "auto",
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
        <Box className="mt-4">
          <Heading sx={styles.heading_new} className="flex-center-just">
            Still have any questions for us?
          </Heading>
          <Text as="p" sx={styles.description} className="mt-4">
            We would love to answer all your questions. Our support team is
            always available for you to resolve your queries, please contact us{" "}
            <a href="mailto:care@investifyd.com">care@investifyd.com</a>
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
const styles = {
  heading_new: {
    color: "heading",
    fontWeight: 500,
    fontSize: ["24px", "30px"],
    lineHeight: [1.25, 1.5],
    letterSpacing: "heading",
    margin: "60px 0 0 0",
  },
  content: {
    maxWidth: [507, null, null, 324, 450],
  },
  heading: {
    margin: "50px 0 0 0",
  },
  title: {
    color: "heading",
    fontWeight: 500,
    fontSize: ["18px"],
    lineHeight: [1.25, 1.5],
    letterSpacing: "heading",
  },
  description: {
    color: "heading",
    fontSize: ["14px", "18px"],
    lineHeight: [1.85, 1.85],
    mt: "10px",
    // mb: "5rem",
    textJustify: "inter-word",
  },
};
