import { Box, Heading,  Text } from '@/ClientComponents/Theme-ui';
import Image from 'next/image';

const UltimateFeatureCard = ({ data, ...props }) => {
  return (
    <Box sx={styles.feature} {...props}>
      <figure>
        <Image src={data?.icon} alt={data?.title} />
      </figure>
      <Box>
        <Heading as="h4">{data?.title}</Heading>
        <span>{data.subTitle}</span>
        <Text as="p" >
          {data?.description}
        </Text>
      </Box>
    </Box>
  );
};

export default UltimateFeatureCard;

const styles = {
  feature: {
    textAlign: ["center", "center", "center", "center", "left"],
    maxWidth: [230, 230, 230, 230, "none"],
    margin: "0 auto",
    figure: {
      backgroundColor: "white",
      boxShadow: "0px 8px 24px rgba(53, 95, 158, 0.1)",
      height: "90px",
      margin: [
        "0 auto 30px",
        "0 auto 30px",
        "0 auto 30px",
        "0 auto 30px",
        "0 0 40px",
      ],
      width: "90px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
    },
    h4: {
      fontSize: "18px",
      lineHeight: 1.28,
      color: "heading",
      // marginBottom: "20px",
    },
    p: {
      fontSize: 16,
      lineHeight: [1.6, 1.6, 1.6, 1.88],
      color: "#333",
      marginTop: "10px",
    },
  },
};
