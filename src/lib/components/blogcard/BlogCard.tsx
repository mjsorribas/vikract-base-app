import {
  Flex,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { HiCheckCircle } from "react-icons/hi";

import { Card } from "lib/components/card/Card";
import type { CardProps } from "lib/components/card/Card";

export interface BlogCardData {
  id: number;
  title: string;
  shortContent: string;
  isFeatured: boolean;
  image: string;
  content: string;
  tags: [];
}

interface BlogCardProps extends CardProps {
  data: BlogCardData;
  icon: React.ElementType;
  button: React.ReactElement;
}

export const BlogCard = (props: BlogCardProps) => {
  const { data, icon, button, ...rest } = props;
  const { id, title, shortContent } = data;
  const accentColor = useColorModeValue("blue.600", "blue.200");

  return (
    <Card key={id} rounded={{ sm: "xl" }} {...rest}>
      <VStack spacing={6}>
        <Heading as="h3" size="md" fontWeight="extrabold">
          {title}
        </Heading>
      </VStack>
      <Flex
        align="flex-end"
        justify="center"
        fontWeight="extrabold"
        color={accentColor}
        my="8"
      >
        <Text size="sm" fontWeight="inherit" lineHeight="0.9em">
          {shortContent}
        </Text>
      </Flex>
    </Card>
  );
};
