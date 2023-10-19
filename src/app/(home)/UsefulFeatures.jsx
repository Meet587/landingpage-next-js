import bulb from "../../../public/images/icons/bulb.png";
import diamond from "../../../public/images/icons/diamond.png";
import help from "../../../public/images/icons/help.png";
import award from "../../../public/images/icons/award.png";

import Heading2 from "@/components/Headings/Heading2";
import UltimateFeatureCard from "@/components/cards/UltimateFeatureCard";

import { Box, Container } from "@/ClientComponents/Theme-ui";

const data = [
  {
    id: 1,
    icon: help,
    title: "Curated Funds",
    subTitle: "",
    description: `Investifyd empowers you to find the ‘right fund’ for you to invest. We have meticulously curated a list of funds from around 8000+ funds after assessing them on various parameters.`,
  },

  {
    id: 2,
    icon: diamond,
    title: "Asset Allocation",
    subTitle: "",
    description: `Investifyd guides you on asset allocation to diversify your investment across different investment options strategically to minimize risk and rebalance your investments to maximize returns.`,
  },
  {
    id: 3,
    icon: bulb,
    title: "Family Account",
    subTitle: "(Coming soon)",
    description: `Investifyd allows you to seamlessly and securely manage all your family accounts at one place. We believe in dreaming, investing, and growing together.
`,
  },
  {
    id: 4,
    icon: award,
    title: "Multi Asset Investing",
    subTitle: "(Coming soon)",
    description: `Investifyd account will have all your investing options at one place. Stay tuned as we bring to you more investing options for you to create a nimble and diversified portfolio.
`,
  },
];

const UsefulFeatures = () => {
  return (
    <Box as="section" id="useful-features" variant="section.usefulFeatures">
      <Container>
        <Heading2
          sx={styles.heading}
          title="Why Investifyd?"
          text="Investifyd is your one-stop platform for all your investment needs. Our goal is to make online investments simpler, secure, and seamless for you to help you build wealth. 
"
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <UltimateFeatureCard
              key={item.id}
              data={item}
              className="feature-item"
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UsefulFeatures;

const styles = {
  heading: {
    marginBottom: 80,
  },
  features: {
    gap: 60,
    display: ["grid"],
    gridTemplateColumns: ["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"],
    ".feature-item": {
      display: ["block", "block", "block", "block", "flex"],
      px: ["15px", 0],
      maxWidth: ["none"],
      figure: {
        minWidth: "90px",
        m: [
          "0 auto 30px",
          "0 auto 30px",
          "0 auto 30px",
          "0 auto 30px",
          "0 26px 0 0",
        ],
      },
    },
  },
};
