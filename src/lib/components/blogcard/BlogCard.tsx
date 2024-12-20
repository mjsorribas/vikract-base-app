import {
  Flex,
  Heading,
  Text,
  useColorModeValue,
  VStack,
  Image,
  Tag,
} from "@chakra-ui/react";

import { Card } from "lib/components/card/Card";
import type { CardProps } from "lib/components/card/Card";

import type { BlogCardData } from "./BlogCardData";

interface BlogCardProps extends CardProps {
  data: BlogCardData;
  icon: React.ElementType;
  button: React.ReactElement;
}

export const BlogCard = (props: BlogCardProps) => {
  const { data, icon, button, ...rest } = props;
  const { id, title, description, pubDate, tags, image } = data;
  const accentColor = useColorModeValue("blue.600", "blue.200");

  return (
    <Card key={id} rounded={{ sm: "xl" }} {...rest}>
      <VStack spacing={6}>
        <Heading as="h3" size="md" fontWeight="extrabold">
          {title}
        </Heading>
      </VStack>
      <Text size="sm" fontWeight="inherit" lineHeight="0.9em">
        <Tag size="sm" color="gray" variant="outline">
          {pubDate}
        </Tag>
      </Text>
      <Image src={image} />
      <Flex
        align="flex-end"
        justify="center"
        fontWeight="extrabold"
        color={accentColor}
        my="8"
      >
        <Text size="sm" fontWeight="inherit" lineHeight="0.9em">
          {description}
        </Text>
      </Flex>
      <Flex
        align="flex-end"
        justify="center"
        fontWeight="extrabold"
        color={accentColor}
        my="8"
      >
        <Text size="sm" fontWeight="inherit" lineHeight="0.9em">
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              display: "flex",
              gap: "0.5em",
            }}
          >
            {data.tags.map((tag, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>
                <Tag size="sm" color="gray" variant="outline">
                  {tag}
                </Tag>
              </li>
            ))}
          </ul>
        </Text>
      </Flex>
    </Card>
  );
};
