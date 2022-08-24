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

const defaultProps: Props = {
  boxSize: "60px",
  fontSize: "2rem",
  fontColor: "#000000",
  design: "full",
  title: "THE VIKRACT TEMPLATE",
  img: "/assets/vikract.svg",
  imgTitle: "The Vikract Webapp template",
};

const displayImg = ({
  boxSize,
  img,
  imgTitle,
}: Props & typeof defaultProps) => {
  return (
    <Image boxSize={boxSize} objectFit="cover" src={img} title={imgTitle} />
  );
};

const displayText = ({
  fontColor,
  fontSize,
  title,
}: Props & typeof defaultProps) => {
  return (
    <Text color={fontColor} fontSize={fontSize} fontWeight={300}>
      {title}
    </Text>
  );
};
const displayFull = ({
  boxSize,
  fontSize,
  fontColor,
  img,
  title,
  imgTitle,
}: Props & typeof defaultProps) => {
  return (
    <Box>
      <Image boxSize={boxSize} objectFit="cover" src={img} title={imgTitle} />
      <Text color={fontColor} fontSize={fontSize} fontWeight={300}>
        {title}
      </Text>
    </Box>
  );
};

const renderSwitch = (props: Props & typeof defaultProps) => {
  switch (props.design) {
    case "onlyImg":
      return displayImg(props);
    case "onlyText":
      return displayText(props);
    default:
      return displayFull(props);
  }
};

const Logo = (props = defaultProps) => {
  return (
    <Box display="flex" alignItems="center">
      {renderSwitch(props)}
    </Box>
  );
};

Logo.defaultProps = defaultProps;

export default Logo;
