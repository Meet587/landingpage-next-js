import { Box, Container } from "@/ClientComponents/Theme-ui";
import Heading2 from "@/components/Headings/Heading2";
import UltimateFeatureCard from "@/components/cards/UltimateFeatureCard";
import dart from "../../../public/images/icons/dart.png";
import giftBox from "../../../public/images/icons/giftBox.png";
import bulb from "../../../public/images/icons/bulb.png";
import rocket from "../../../public/images/icons/rocket.png";

const data = [
  {
    id: 1,
    icon: dart,
    title: "Create Goals ",
    subTitle: "(Coming soon)",
    description:
      "Take a step forward toward achieving your goals from a list of mutual funds that fit your needs",
  },
  {
    id: 2,
    icon: giftBox,
    title: "Ready-Made Portfolios",
    subTitle: "(Coming soon)",
    description: `Invest in ready-made portfolios created by our experts having a decade-long experience.`,
  },
  {
    id: 3,
    icon: bulb,
    title: "Investment Ideas",
    subTitle: "",
    description:
      "Unlock tremendous investment ideas that suit your financial trajectory and goals.",
  },

  {
    id: 4,
    icon: rocket,
    title: "Smart Savings",
    subTitle: "",
    description:
      "Make a transition to smart savings where you can get returns and withdraw within 30 minutes.",
  },
];

const UltimateFeatures = () => {
  return (
    <Box as="section" id="ultimate-feature" variant="section.ultimateFeature">
      <Container>
        <Heading2
          sx={styles.heading}
          title="Experience the best way to invest in Mutual funds "
          text="Immerse yourself in an amazing experience of investment to create wealth with Investifyd."
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <UltimateFeatureCard key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UltimateFeatures;

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
