import { Image, Box, Text } from "@chakra-ui/react";

interface Props {
  boxSize?: string;
  fontSize?: string;
  fontColor?: string;
  design?: string;
  img?: string;
  imgTitle?: string;
  title?: string;
}

const Logo = ({
  boxSize = "60px",
  fontSize = "2rem",
  fontColor = "#000000",
  design = "full",
  title = "THE VIKRACT TEMPLATE",
  img = "/assets/vikract.svg",
  imgTitle = "The Vikract Webapp template",
}: Props) => {
  const displayImg = () => (
    <Image boxSize={boxSize} objectFit="cover" src={img} title={imgTitle} />
  );

  const displayText = () => (
    <Text color={fontColor} fontSize={fontSize} fontWeight={300}>
      {title}
    </Text>
  );

  const displayFull = () => (
    <Box>
      <Image boxSize={boxSize} objectFit="cover" src={img} title={imgTitle} />
      <Text color={fontColor} fontSize={fontSize} fontWeight={300}>
        {title}
      </Text>
    </Box>
  );

  const renderSwitch = () => {
    switch (design) {
      case "onlyImg":
        return displayImg();
      case "onlyText":
        return displayText();
      default:
        return displayFull();
    }
  };

  return (
    <Box display="flex" alignItems="center">
      {renderSwitch()}
    </Box>
  );
};

export default Logo;
